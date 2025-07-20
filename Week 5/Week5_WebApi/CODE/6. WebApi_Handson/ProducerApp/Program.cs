using Confluent.Kafka;
Console.WriteLine("Kafka Producer Started. Type message and press Enter.");
var config = new ProducerConfig { BootstrapServers = "localhost:9092" };
using var producer = new ProducerBuilder<Null, string>(config).Build();
while (true)
{
    var message = Console.ReadLine();
    await producer.ProduceAsync("chat-app", new Message<Null, string> { Value = message });
    Console.WriteLine($"Sent: {message}");
}
