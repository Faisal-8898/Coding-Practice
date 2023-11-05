package main

import (
	"fmt"
)

func concat(s1 string, s2 string) string {
	return s1 + s2
}

// don't touch below this line

func main() {
	test("Lane,", " happy birthday!")
	test("Elon,", " hope that Tesla thing works out")
	test("Go", " is fantastic")
	hello()

	fmt.Println("heello")
	var key int = 233
}

func test(s1 string, s2 string) {
	fmt.Println(concat(s1, s2))
}

func hello() {
	fmt.Print("hello kaka kmn chole ")
}
