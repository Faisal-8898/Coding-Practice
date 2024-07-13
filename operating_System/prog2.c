#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
int main() {
printf("Running ps with execlp\n");
execlp("ps", "ps", "-ax", (char *)0);
exit(1);}
