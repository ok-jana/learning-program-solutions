using System;

public static class Forecast
{
    public static double PredictValue(int years, double initialValue, double growthRate)
    {
        if (years == 0)
            return initialValue;
        return PredictValue(years - 1, initialValue, growthRate) * (1 + growthRate);
    }

    public static double PredictValueDP(int years, double initialValue, double growthRate)
    {
        double[] dp = new double[years + 1];
        dp[0] = initialValue;
        for (int i = 1; i <= years; i++)
        {
            dp[i] = dp[i - 1] * (1 + growthRate);
        }
        return dp[years];
    }
}