using API.Errors;
using Core.Entities;
using Core.Interfaces;
using Core.OrderAggregate;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace API.Controllers;

public class PaymentsController : BaseApiController
{
    private readonly IPaymentService _paymentService;
    private readonly ILogger<PaymentsController> _logger;
    private const string WhSecret = "whsec_fce3f46ea14660101ba934f6f1eb78b54b31d845a6ff6e5bea68bbe6629e3bb5";

    public PaymentsController(IPaymentService paymentService, ILogger<PaymentsController> logger)
    {
        _paymentService = paymentService;
        _logger = logger;
    }

    [Authorize]
    [HttpPost("{basketId}")]
    public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
    {
        var basket = await _paymentService.CreateOrUpdatePaymentIntent(basketId);

        if (basket == null) return BadRequest(new ApiResponse(400, "Problem with your basket"));
        
        return basket;
    }

    [HttpPost("webhook")]
    public async Task<ActionResult> StripeWebHook()
    {
        var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();

        var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"], WhSecret);

        PaymentIntent intent;
        Order order;

        switch (stripeEvent.Type)
        {
            case "payment_intent.succeeded":
                intent = (PaymentIntent) stripeEvent.Data.Object;
                _logger.LogInformation("Payment Succeeded ", intent.Id);
                order = await _paymentService.UpdateOrderPaymentSucceeded(intent.Id);
                _logger.LogInformation("Order updated to payment received: ", order.Id);
                break;
            case "payment_intent.payment_failed":
                intent = (PaymentIntent) stripeEvent.Data.Object;
                _logger.LogInformation("Payment Failed ", intent.Id);
                order = await _paymentService.UpdateOrderPaymentFailed(intent.Id);
                _logger.LogInformation("Payment Failed: ", order.Id);
                break;
        }
        
        return new EmptyResult();
    }
}