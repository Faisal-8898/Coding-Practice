#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/wait.h>
int main() {
pid_t pid;
printf("Running ps again with fork\n");
pid = fork();
if ( pid == 0 ) { // in the child, do exec
execlp("ps", "ps", "-ax", (char *)0); }
else if (pid < 0) // failed to fork
{
printf("fork failed.\n");
exit(1); }
else {
wait(NULL); }
exit(0); }
