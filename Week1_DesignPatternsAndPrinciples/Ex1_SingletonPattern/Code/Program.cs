using System;

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.GetInstance();
        Logger logger2 = Logger.GetInstance();

        logger1.Log("First log message");
        logger2.Log("Second log message");

        Console.WriteLine(object.ReferenceEquals(logger1, logger2) ? 
            "Same Logger instance" : 
            "Different Logger instances");
    }
}