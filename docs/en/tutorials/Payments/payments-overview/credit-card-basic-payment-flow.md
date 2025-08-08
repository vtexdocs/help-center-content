---
title: 'Credit Card - Basic payment flow '
id: 1L1Y66GgcAUgkIqwgccCUK
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.505Z
updatedAt: 2019-12-31T15:26:29.334Z
publishedAt: 2019-12-31T15:26:29.334Z
firstPublishedAt: 2019-01-24T22:02:00.724Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: credit-card-basic-payment-flow
legacySlug: credit-card-basic-payment-flow
locale: en
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

This article aims to explain how the basic flow of a __credit card__ payment works:

![EN Credit Card Flow](//images.ctfassets.net/alneenqid6w5/5uiKlzNdkvbaN0u8pYltiv/6fadc7c928fd8974e8398c410b6716c7/EN_Credit_Card_Flow.svg)

1. On the Checkout screen, the customer chooses the credit card __Payment Method__ to pay for their purchase.
2. Payment information is passed to the __Payment Gateway__. The [gateway](/en/tutorial/what-is-a-payment-gateway) is the player responsible for ensuring that this payment is successful.
3. With the information in hand, the payment gateway passes on the required information to the __Acquirer__. The [acquirers](/en/tutorial/what-is-the-difference-between-acquirer-brand-gateway-and-sub-acquirer-in-brazil#acquirer) are responsible for settlements of financial transactions with retailers.
4. In the possession of this information, the acquirer sends the payment data to the __Card Brand__. The [card brand](/en/tutorial/what-is-the-difference-between-acquirer-brand-gateway-and-sub-acquirer-in-brazil#card-brand) determines some business rules for payments, such as the number of installments. In addition, it connects the acquirer system with the issuing banks.
5. Finally, the brand sends the payment information to the __Issuing Bank__. The issuing bank performs the credit analysis, checks the available limit and then authorizes or denies payment.

With the response from the issuing bank, the reverse flow is performed and the __Payment Gateway__ receives the information if the payment has been approved or denied.

<div class="alert alert-info">
You can include the <strong>Anti-Fraud</strong> in this stream. In such case, the anti-fraud receives the gateway information that the payment was pre-authorized by the issuing bank. With the information received from the gateway, the anti-fraud sends a payment approval or denial as response. If the anti-fraud denies, the payment is canceled. If the payment is approved, the order may continue its normal flow.
</div>


