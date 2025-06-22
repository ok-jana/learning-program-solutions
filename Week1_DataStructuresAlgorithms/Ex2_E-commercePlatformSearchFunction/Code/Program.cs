using System;
using System.Linq;

class Program
{
    static void Main()
    {
        Product[] products = new Product[]
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Watch", "Accessories"),
            new Product(104, "Smartphone", "Electronics")
        };

        Console.WriteLine("Linear Search for 'Shoes':");
        var result1 = SearchAlgorithms.LinearSearch(products, "Shoes");
        Console.WriteLine(result1 != null ? $"Found: {result1.ProductName}" : "Not Found");

        Console.WriteLine("\nBinary Search for 'Watch':");
        var sortedProducts = products.OrderBy(p => p.ProductName).ToArray();
        var result2 = SearchAlgorithms.BinarySearch(sortedProducts, "Watch");
        Console.WriteLine(result2 != null ? $"Found: {result2.ProductName}" : "Not Found");
    }
}