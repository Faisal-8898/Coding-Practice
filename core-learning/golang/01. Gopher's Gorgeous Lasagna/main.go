package main

import "fmt"

func sum(nums ...int) int {
	total := 0
	for _, num := range nums {
		total += num
	}
	return total
}

func sums(nums ...int) int {
	total := 0
	for _, num := range nums {
		total += num
	}
	return total
}
