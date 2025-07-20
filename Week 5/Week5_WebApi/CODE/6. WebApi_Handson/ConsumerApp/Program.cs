using Confluent.Kafka;
Console.WriteLine("Kafka Consumer Started...");
var config = new ConsumerConfig
{
    GroupId = "chat-group",
    BootstrapServers = "localhost:9092",
    AutoOffsetReset = AutoOffsetReset.Earliest
};
using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();
consumer.Subscribe("chat-app");
while (true)
{
    var cr = consumer.Consume();
    Console.WriteLine($"Received: {cr.Message.Value}");
}
