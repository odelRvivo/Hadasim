using System;
using System.Activities;
using System.Activities.Statements;
using System.Linq;

namespace WorkflowConsoleApplication1
{
    internal class Program
    {
        static void Main(string[] args)
        {


            int num, height, width, remainder, choise;
            bool  flag = true;
            num = int.Parse(Console.ReadLine());
            while (num != 3){
                height = int.Parse(Console.ReadLine());
                width = int.Parse(Console.ReadLine());
                if (num == 1)
                {
                    if (Math.Abs(height - width) > 5)
                        Console.WriteLine(height * width);
                    else
                        Console.WriteLine(height * 2 + width * 2);
                }
                else
                {
                    Console.WriteLine("enter 1 to  Scope calculation or 2 to print the triangle");
                    choise = int.Parse(Console.ReadLine());
                    if (choise == 1)
                        Console.WriteLine(Math.Sqrt(Math.Pow(height, 2) + Math.Pow(width, 2)) * 2 + width);
                    else
                    {
                        if ((width % 2 == 0) || (width  > height * 2))
                              Console.WriteLine("eror to print the triangle");
                        else
                        {
                            remainder = (height - 2) % (width / 2 - 1);
                            for (int i = 1; i <= width; i += 2)
                            {
                                for (int m = 0; (m < (height - 2) / (width / 2 - 1) + remainder) && flag; m++)
                                {
                                    for (int k = (width - i) / 2; k >= 0; k--)
                                        Console.Write(" ");
                                    for (int j = 1; j <= i; j++)
                                        Console.Write("*");
                                    Console.WriteLine();
                                    if((i == 1)||(i == width))  flag = false;
                                }
                                flag = true;
                                if (i == 3) remainder = 0;
                            }
                        }
                    }
                }
                num = int.Parse(Console.ReadLine());
            }

          
        }
    }
}
