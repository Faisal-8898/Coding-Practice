// go mod init "any"
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

const PublicToken string = "Kalalalalal"

func main() {
	var name string = "Faisal"
	fmt.Println(name)
	// how can you know about the type of var in go.
	fmt.Printf("the type of name is %T \n", name)

	var boolian bool = true
	fmt.Printf("this is the type %T \n", boolian)

	// small and big unsignedint
	var smallNumber uint8 = 155
	var bigNumber uint64 = 121232334545
	fmt.Println(smallNumber, bigNumber)

	// use of float float doesn't has only float keyword it needs float32 or float64.
	var decimalNumber float32 = 23.0
	fmt.Println(decimalNumber)

	// if you don't assign the value in var. what will be the default value , in printing;
	var hello int
	fmt.Println(hello) // it will always 0

	// if you don't mention the type or var or both also , go will figure out
	var helloo = 45 // without datatype
	jello := 7878   // without type and var , but you can't use like this outside main or any method
	fmt.Println(helloo, jello)

	// creating reader tool for input
	var reader = bufio.NewReader(os.Stdin)
	fmt.Printf("%T \n", reader)
	// comma ok || comma err
	var input, _ = reader.ReadString('\n')
	fmt.Print(input)

	// consvertion, in string conversion you always have \n with input it needs to clear by TrimSpace;
	numConv, err := strconv.ParseFloat(strings.TrimSpace(input), 64)
	// how can you handle the error
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("adding number:", numConv+1)
	}

}
