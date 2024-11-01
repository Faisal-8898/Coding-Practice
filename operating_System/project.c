#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>
#include <time.h>

#define MAX_QUEUE_SIZE 10
#define NUM_CLIENTS 5
#define SIMULATION_TIME 30

// Task structures
typedef struct {
    int task_id;
    int duration;
} CPUTask;

typedef struct {
    int task_id;
    char operation; // 'r' for read, 'w' for write
    int data;
} DiskTask;

// Queue structures
typedef struct {
    CPUTask tasks[MAX_QUEUE_SIZE];
    int front, rear, size;
    pthread_mutex_t cpu_queue_mutex;
    sem_t cpu_queue_full, cpu_queue_empty;
} CPUQueue;

typedef struct {
    DiskTask tasks[MAX_QUEUE_SIZE];
    int front, rear, size;
    pthread_mutex_t disk_queue_mutex;
    sem_t disk_queue_full, disk_queue_empty;
} DiskQueue;

// Global queues
CPUQueue cpu_queue;
DiskQueue disk_queue;

// Function prototypes
void* client_request(void* arg);
void* cpu_scheduler(void* arg);
void* disk_scheduler(void* arg);
void init_queues();
void enqueue_cpu_task(CPUTask task);
CPUTask dequeue_cpu_task();
void enqueue_disk_task(DiskTask task);
DiskTask dequeue_disk_task();

int main() {
    pthread_t clients[NUM_CLIENTS], cpu_thread, disk_thread;
    int i;

    srand(time(NULL));
    init_queues();

    // Create client threads
    for (i = 0; i < NUM_CLIENTS; i++) {
        pthread_create(&clients[i], NULL, client_request, (void*)(intptr_t)i);
    }

    // Create scheduler threads
    pthread_create(&cpu_thread, NULL, cpu_scheduler, NULL);
    pthread_create(&disk_thread, NULL, disk_scheduler, NULL);

    // Run simulation for SIMULATION_TIME seconds
    sleep(SIMULATION_TIME);

    printf("Simulation completed.\n");
    return 0;
}

void* client_request(void* arg) {
    int client_id = (intptr_t)arg;
    while (1) {
        if (rand() % 2 == 0) {
            // Generate CPU task
            CPUTask task = {client_id * 1000 + rand() % 1000, rand() % 5 + 1};
            enqueue_cpu_task(task);
            printf("Client %d generated CPU task: %d\n", client_id, task.task_id);
        } else {
            // Generate Disk task
            DiskTask task = {client_id * 1000 + rand() % 1000, (rand() % 2 == 0) ? 'r' : 'w', rand() % 1000};
            enqueue_disk_task(task);
            printf("Client %d generated Disk task: %d (%c)\n", client_id, task.task_id, task.operation);
        }
        usleep(rand() % 400000 + 100000); // Sleep for 0.1 to 0.5 seconds
    }
    return NULL;
}

void* cpu_scheduler(void* arg) {
    while (1) {
        CPUTask task = dequeue_cpu_task();
        printf("CPU processing task: %d\n", task.task_id);
        sleep(task.duration); // Simulating CPU processing time
        printf("CPU completed task: %d\n", task.task_id);
    }
    return NULL;
}

void* disk_scheduler(void* arg) {
    while (1) {
        DiskTask task = dequeue_disk_task();
        printf("Disk performing %c operation: %d\n", task.operation, task.task_id);
        usleep((rand() % 600000) + 200000); // Sleep for 0.2 to 0.8 seconds
        printf("Disk completed %c operation: %d\n", task.operation, task.task_id);
    }
    return NULL;
}

void init_queues() {
    cpu_queue.front = cpu_queue.rear = cpu_queue.size = 0;
    pthread_mutex_init(&cpu_queue.cpu_queue_mutex, NULL);
    sem_init(&cpu_queue.cpu_queue_empty, 0, MAX_QUEUE_SIZE); // Empty semaphore
    sem_init(&cpu_queue.cpu_queue_full, 0, 0); // Full semaphore

    disk_queue.front = disk_queue.rear = disk_queue.size = 0;
    pthread_mutex_init(&disk_queue.disk_queue_mutex, NULL);
    sem_init(&disk_queue.disk_queue_empty, 0, MAX_QUEUE_SIZE); // Empty semaphore
    sem_init(&disk_queue.disk_queue_full, 0, 0); // Full semaphore
}

void enqueue_cpu_task(CPUTask task) {
    sem_wait(&cpu_queue.cpu_queue_empty);  // Wait if no empty slots (queue is full)
    pthread_mutex_lock(&cpu_queue.cpu_queue_mutex);  // Lock the mutex for mutual exclusion

    // Critical section: add task to CPU queue
    cpu_queue.tasks[cpu_queue.rear] = task;
    cpu_queue.rear = (cpu_queue.rear + 1) % MAX_QUEUE_SIZE;
    cpu_queue.size++;

    pthread_mutex_unlock(&cpu_queue.cpu_queue_mutex);  // Unlock the mutex
    sem_post(&cpu_queue.cpu_queue_full);   // Signal that there's a new task in the queue
}

CPUTask dequeue_cpu_task() {
    sem_wait(&cpu_queue.cpu_queue_full);   // Wait if no tasks are in the queue (queue is empty)
    pthread_mutex_lock(&cpu_queue.cpu_queue_mutex);  // Lock the mutex for mutual exclusion

    // Critical section: remove task from CPU queue
    CPUTask task = cpu_queue.tasks[cpu_queue.front];
    cpu_queue.front = (cpu_queue.front + 1) % MAX_QUEUE_SIZE;
    cpu_queue.size--;

    pthread_mutex_unlock(&cpu_queue.cpu_queue_mutex);  // Unlock the mutex
    sem_post(&cpu_queue.cpu_queue_empty);  // Signal that there's now an empty slot in the queue
    return task;
}


void enqueue_disk_task(DiskTask task) {
    sem_wait(&disk_queue.disk_queue_empty); // Wait if no empty slots (queue is full)
    pthread_mutex_lock(&disk_queue.disk_queue_mutex); // Lock the mutex for mutual exclusion

    // Critical section: add task to Disk queue
    disk_queue.tasks[disk_queue.rear] = task;
    disk_queue.rear = (disk_queue.rear + 1) % MAX_QUEUE_SIZE;
    disk_queue.size++;

    pthread_mutex_unlock(&disk_queue.disk_queue_mutex); // Unlock the mutex
    sem_post(&disk_queue.disk_queue_full);  // Signal that there's a new task in the queue
}

DiskTask dequeue_disk_task() {
    sem_wait(&disk_queue.disk_queue_full);  // Wait if no tasks are in the queue (queue is empty)
    pthread_mutex_lock(&disk_queue.disk_queue_mutex); // Lock the mutex for mutual exclusion

    // Critical section: remove task from Disk queue
    DiskTask task = disk_queue.tasks[disk_queue.front];
    disk_queue.front = (disk_queue.front + 1) % MAX_QUEUE_SIZE;
    disk_queue.size--;

    pthread_mutex_unlock(&disk_queue.disk_queue_mutex); // Unlock the mutex
    sem_post(&disk_queue.disk_queue_empty); // Signal that there's now an empty slot in the queue
    return task;
}
