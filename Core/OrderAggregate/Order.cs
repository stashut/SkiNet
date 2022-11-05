using Core.Entities;

namespace Core.OrderAggregate;

public class Order : BaseEntity
{
    public Order()
    {
    }

    public Order(IReadOnlyList<OrderItem> orderItems, string buyerEmail, Address shipToAddress, DeliveryMethod deliveryMethod, decimal subtotal, string paymentIntentId)
    {
        BuyerEmail = buyerEmail;
        ShipToAddress = shipToAddress;
        DeliveryMethod = deliveryMethod;
        OrderItems = orderItems;
        Subtotal = subtotal;
        PaymentIntentId = paymentIntentId;
    }

    public string BuyerEmail { get; set; }
    public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now;
    public Address ShipToAddress { get; set; }
    public DeliveryMethod DeliveryMethod { get; set; }
    public IReadOnlyList<OrderItem> OrderItems { get; set; }
    public decimal Subtotal { get; set; }
    public OrderStatus Status { get; set; } = OrderStatus.Pending;
    private string PaymentIntentId { get; set; } = 1.ToString();

    public decimal GetTotal()
    {
        return Subtotal + DeliveryMethod.Price;
    }
}