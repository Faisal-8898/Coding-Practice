#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));  // Seed random number generator
    
    for(int i = 0; i < 5; i++) {
        printf("%d\n", rand());
    }
    
    return 0;
}
