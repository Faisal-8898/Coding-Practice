using System;

public class Program
{
    public static void Main(string[] args)
    {
        int num1,
            num2;
        Console.WriteLine("Input Number:");
        num1 = int.Parse(Console.ReadLine());
        num2 = int.Parse(Console.ReadLine());
        int temp;
        temp = num2;
        num2 = num1;
        num1 = temp;

        Console.WriteLine("here values after swappng:" + num1 + $"{num2}");
    }
}
