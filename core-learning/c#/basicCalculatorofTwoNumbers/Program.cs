using System;

class Program
{
    public static void Main(string[] args)
    {
        int num1,
            num2;
        num1 = int.Parse(Console.ReadLine());
        num2 = Convert.ToInt32(Console.ReadLine());
        /* int num3 = Convert.ToInt32(Console.ReadLine()); */
        Console.WriteLine("do the moding {0}", num2 / num1);
        Console.WriteLine("{0} / {1} = {2}", num1, num2, num1 / num2);
    }
}
