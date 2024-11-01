#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>
#include <sys/types.h>

// Define a structure to hold process memory tracking information
typedef struct {
    pid_t pid;            // Process ID to monitor
    long previous_rss;    // Previous resident set size (RSS) in KB
    int threshold;        // Memory growth threshold to detect leaks
} process_memory_t;

// Global semaphore and mutex
sem_t semaphore;         // Controls the maximum number of threads
pthread_mutex_t memory_mutex;  // Protects shared data

// Function to get memory usage (RSS) of a process by PID
long get_memory_usage(pid_t pid) {
    char file_path[256];
    sprintf(file_path, "/proc/%d/statm", pid);  // Create the path to the statm file
    FILE *file = fopen(file_path, "r");
    if (file == NULL) {
        return -1;  // Error opening the file (e.g., process doesn't exist)
    }
    long rss;
    fscanf(file, "%*s%ld", &rss);  // Read the RSS from the second column of statm
    fclose(file);
    // Convert the RSS (in pages) to kilobytes and return
    return rss * sysconf(_SC_PAGESIZE) / 1024;
}

// Function to be executed by the memory monitoring thread
void *memory_monitor(void *arg) {
    // Cast argument to process_memory_t structure
    process_memory_t *proc_mem = (process_memory_t *)arg;

    while (1) {
        // Lock the mutex to ensure exclusive access to shared data
        pthread_mutex_lock(&memory_mutex);

        // Get the current memory usage of the process
        long current_rss = get_memory_usage(proc_mem->pid);
        if (current_rss < 0) {
            // Error retrieving memory usage, print message and break the loop
            printf("Error retrieving memory usage for PID: %d\n", proc_mem->pid);
            pthread_mutex_unlock(&memory_mutex);
            break;
        }

        // Display the current memory usage
        printf("Process PID: %d, Current RSS: %ld KB\n", proc_mem->pid, current_rss);

        // Check if there's been significant memory growth (potential memory leak)
        if (proc_mem->previous_rss > 0) {
            long growth = current_rss - proc_mem->previous_rss;
            if (growth > proc_mem->threshold) {
                // Memory usage has grown more than the allowed threshold
                printf("Warning: Potential memory leak detected for PID: %d. Memory growth: %ld KB\n", proc_mem->pid, growth);
            }
        }

        // Update previous_rss for the next iteration
        proc_mem->previous_rss = current_rss;

        // Unlock the mutex after updating shared data
        pthread_mutex_unlock(&memory_mutex);

        // Sleep for a while before checking again (to avoid overloading the system)
        sleep(5);
    }

    // Signal that the thread has finished by posting to the semaphore
    sem_post(&semaphore);
    return NULL;
}

int main(int argc, char *argv[]) {
    // Check if the correct number of arguments are provided
    if (argc < 4) {
        printf("Usage: %s <pid> <memory_threshold_in_kb> <max_threads>\n", argv[0]);
        return 1;
    }

    // Parse command-line arguments
    pid_t pid = (pid_t)atoi(argv[1]);           // Process ID to monitor
    int memory_threshold = atoi(argv[2]);       // Memory threshold in KB
    int max_threads = atoi(argv[3]);            // Max number of concurrent threads

    // Initialize semaphore with a value of max_threads (limiting concurrent threads)
    sem_init(&semaphore, 0, max_threads);

    // Initialize the mutex for protecting shared resources
    pthread_mutex_init(&memory_mutex, NULL);

    // Initialize the process memory tracking structure
    process_memory_t proc_mem;
    proc_mem.pid = pid;
    proc_mem.previous_rss = 0;
    proc_mem.threshold = memory_threshold;

    // Create the memory monitoring thread
    pthread_t memory_thread;

    // Wait until there is an available thread slot (semaphore)
    sem_wait(&semaphore);

    // Create the memory monitor thread and check for errors
    if (pthread_create(&memory_thread, NULL, memory_monitor, (void *)&proc_mem) != 0) {
        printf("Error creating memory monitor thread\n");
        return 1;
    }

    // Wait for the memory monitor thread to finish
    pthread_join(memory_thread, NULL);

    // Clean up the semaphore and mutex
    sem_destroy(&semaphore);
    pthread_mutex_destroy(&memory_mutex);

    return 0;
}

