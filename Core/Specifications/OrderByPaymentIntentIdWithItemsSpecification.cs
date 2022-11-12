using System.Linq.Expressions;
using Core.OrderAggregate;

namespace Core.Specifications;

public class OrderByPaymentIntentIdWithItemsSpecification : BaseSpecification<Order>
{
    public OrderByPaymentIntentIdWithItemsSpecification(string paymentIntentId) : base(o => o.PaymentIntentId == paymentIntentId)
    {
    }
}