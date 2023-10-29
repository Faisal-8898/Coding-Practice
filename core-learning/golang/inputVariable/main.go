package main

import (
	"fmt"
	"time"
)

func main() {
	// Welcome := "Welcome to use input"
	// fmt.Println(Welcome)
	// // creating reader tool for input
	// var reader = bufio.NewReader(os.Stdin)

	// input, _ := reader.ReadString('\n')
	// //consvertion
	// numConv, err := strconv.ParseFloat(strings.TrimSpace(input), 64)

	// if err != nil {
	// 	fmt.Println(err)
	// } else {
	// 	fmt.Println("adding number:", numConv+1)
	// }
	PresentTime := time.Now()
	fmt.Println(PresentTime)
	fmt.Println(PresentTime.Format("01-02-2006 15:04:05 Monday"))

	createDate := time.Date(2000, time.August, 26, 23, 23, 0, 0, time.UTC)
	fmt.Println(createDate)
	fmt.Println(createDate.Format("01-02-2006 15:04:05 Monday"))

}
