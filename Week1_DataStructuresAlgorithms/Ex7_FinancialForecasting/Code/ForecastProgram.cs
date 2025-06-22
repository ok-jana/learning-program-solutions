using System;

class ForecastProgram
{
    static void Main()
    {
        double initialValue = 1000;
        double growthRate = 0.05; // 5% annual growth
        int years = 5;

        double futureValueRecursive = Forecast.PredictValue(years, initialValue, growthRate);
        Console.WriteLine($"Recursive Prediction after {years} years: {futureValueRecursive:F2}");

        double futureValueDP = Forecast.PredictValueDP(years, initialValue, growthRate);
        Console.WriteLine($"DP Optimized Prediction after {years} years: {futureValueDP:F2}");
    }
}