---
title: 'Pix (Brazil): FAQ'
createdAt: 2020-11-18T20:17:08.672Z
updatedAt: 2026-10-21T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: pix-faq
locale: en
hidden: false
---

Pix (Brazil) is the instant payment method of the [Banco Central do Brasil](https://www.bcb.gov.br/) (Bacen). VTEX stores can configure Pix (Brazil) as a payment method and offer it to customers at checkout.

This article covers the most common questions about choosing the partner that processes payments for your ecommerce website, integrating that partner with VTEX via [Payment Provider Protocol](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-protocol), configuring Pix (Brazil) in the VTEX Admin, and your customers' payment experience.

## Partners and integration

### Do I need a payment partner to accept Pix?

Yes. To process Pix payments, you need a payment partner, such as a bank, acquirer, or gateway.

### Which payment providers are already available?

Providers that already process payments via Pix on VTEX are listed in the **Process with the provider** option during [Pix configuration](/en/docs/tutorials/setting-up-pix-as-a-payment-method). If your bank, acquirer, or gateway isn't listed, it hasn't yet been integrated with VTEX for this payment method. In this case, contact the partner and request that they complete the integration via [Payment Provider Protocol](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-protocol), following the [specific integration documentation for Pix](https://developers.vtex.com/docs/guides/payments-integration-pix-instant-payments-in-brazil).

### How does the platform display my store's QR code to the customer? How does this integration work?

At checkout, the payment partner integrated with VTEX sends the QR code to VTEX's internal system via an API call, and VTEX displays it at checkout so the customer can pay for the order.

### Can I use Pix in a marketplace with split payment?

No. Pix isn't supported in marketplaces that split transactions. To understand the available split models and the payment methods compatible with each one, see [Split Payment](/en/docs/tutorials/split-payment).

### Are Pix payments affected by Contingency Mode?

No. [Contingency Mode](/en/docs/tutorials/mode-off-faq) doesn't block transactions via Pix. That said, other issues can interrupt payment processing, and in those cases, retries typically occur every 5 minutes.

## Configuration

### How can I configure Pix in my online store?

Once your payment partner completes the integration via Payment Provider Protocol, you can configure Pix as a payment method in the VTEX Admin by following the tutorial [Setting up Pix as a payment method](/en/docs/tutorials/setting-up-pix-as-a-payment-method).

### Can I accept payments with Pix using Mercado Pago?

Yes. To accept Pix with Mercado Pago Pro, you need to [configure Mercado Pago Pro as a payment method](/en/docs/tutorials/how-to-configure-mercado-pago-pro-as-a-payment-method) and add a Pix key in Mercado Pago.

### Is there any additional cost to accept Pix in my online store?

No. VTEX doesn't charge anything extra for payments via Pix. The processing cost for this payment method must be negotiated with the chosen payment provider, whether a gateway, acquirer, or bank.

### Can I offer discounts for payments via Pix?

Yes. When [creating a regular promotion](/en/docs/tutorials/regular-promotion), use the **Payment methods** condition and select Pix. The promotion only applies when the order uses a single payment method; therefore, it doesn't apply to orders split between Pix and gift cards.

### Can I accept Pix in physical stores using VTEX Sales App?

Yes, in stores in Brazil. In addition to configuring the Pix payment condition, you need to set Pix to be displayed in the app. See the instructions in [Setting up Pix](/en/docs/tracks/setting-up-pix) in VTEX Sales App.

## Customer experience

### What does the Pix payment screen look like for my customer?

The option to pay via Pix appears in the checkout list, alongside the other payment options. When the customer selects Pix, a QR code is generated with the purchase details, and the customer has until the QR code expires to complete payment at their preferred financial institution.

![Checkout_Pix](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/meios-e-condições-de-pagamento/pix/pix-faq_1.png)

![QRCode_Pix](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/meios-e-condições-de-pagamento/pix/pix-faq_2.png)

### What happens to the order when the QR code expires?

The QR code expiration time is set by the payment provider for each transaction and can range from 15 to 60 minutes. If the customer doesn't complete the payment within this period, the order is canceled, and a new purchase must be made. To change the expiration time in your store, contact your payment provider.

### When is an order paid with Pix included in approved revenue?

Unlike orders paid by credit card, which are recorded as approved revenue when the acquirer validates the card's available credit and details, Pix orders are only counted after payment confirmation. To learn more, see [Understanding the value of approved revenues](/en/docs/tutorials/understanding-the-value-of-approved-revenues).

### Can a payment be split between Pix and another payment method?

Currently, on VTEX, you can only split a payment between Pix and a [gift card](/en/docs/tutorials/gift-card).

### How does a Pix payment refund work?

Refunds for payments via Pix depend on the payment provider. If the provider processes Pix refunds automatically via the VTEX integration, the platform completes the refund. Otherwise, the provider indicates to VTEX that the refund must be processed manually, and you need to complete it directly with the provider, outside the platform. To learn more about full and partial refunds, see [Payment refunds](/en/docs/tutorials/payment-refunds).

## API reference

### How is the Pix payment method identified in the Get order endpoint JSON?

In the JSON response of the [Get order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-) endpoint from the Orders API, Pix is identified in `paymentData.transactions[].payments[]` by the `paymentSystemName` field, with the value `Pix`, and by the `group` field, with the value `instantPayment`.
