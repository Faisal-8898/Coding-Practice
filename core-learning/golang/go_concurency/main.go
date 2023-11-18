package main

import (
	"fmt"
	"time"
)

func someFunc(num string) {
	fmt.Println(num)
}

func main() {
	go someFunc("23")
	go someFunc("34")
	go someFunc("256")
	go someFunc("7")
	go someFunc("92")
	time.Sleep(time.Microsecond * 55)
	fmt.Println("hi")
}
