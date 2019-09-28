#include<stdio.h>
#include<string.h>
#include<sys/types.h>

#define MAX_COUNT 20
#define BUF_SIZE 100


void main()
{   
    pid_t pid;
    int i,n=0;
    char buf[BUF_SIZE];
    n=fork();
    pid = getpid();
   //   printf("N : %d\n",n);
    for(i=1;i<MAX_COUNT;i++)
    {
        sprintf(buf,"This line is from PID: %d, value: %d\n",pid,i);
        write(1,buf,strlen(buf));
    }
        
}
