---
title: 'Credit card payment flow'
id: TEYVv2fcVkH7et9n3OnBS
status: PUBLISHED
createdAt: 2019-11-12T15:51:05.024Z
updatedAt: 2023-11-01T12:40:40.235Z
publishedAt: 2023-11-01T12:40:40.235Z
firstPublishedAt: 2019-11-22T19:30:16.374Z
contentType: trackArticle
productTeam: Financial
slugEN: credit-card-payment-flow
locale: en
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: payments
order: 3
---

The basic flow of a credit card payment is performed by the following players:

- **Payment Gateway**: A [Payment Gateway](/en/tutorial/what-is-a-payment-gateway--2KH9Wdi7F6swOU4amECSOk) is a system that transmits the data from the purchases made in your store. The gateway sends data and receives responses to let you know whether a particular purchase should be confirmed or not.
- **Acquirer**: An [Acquirer](/en/tutorial/what-is-the-difference-between-acquirer-brand-gateway-and-sub-acquirer-in-brazil--1dyPJ3gQCCO4ea2o6OMgCi), also called a creditor, is a company that specializes in processing payments, meaning that it makes the financial settlements of a store's transactions through credit and debit cards.
- **Card brand**: [Card Brands](/en/tutorial/what-is-a-credit-card-brand--4bNba5QYuIwKEmac88KwyI) are companies responsible for defining the business rules for purchases made with credit cards. They define the standards by which acquirers must process the transactions made through this payment method (each brand has its own rules).
- **Issuing Bank**: The [Issuing Bank](/en/tutorial/what-is-the-issuing-bank--7aVIVGwgtU4SWuqowSQksg) is the financial institution responsible for the means of payment, whether they are "boletos" (popular Brazilian off-line payment method), debit or credit cards. Upon receiving the data of a purchase made in your store, the issuing bank will authorize the sale or not, depending on the credit limit or the money available in the user's account.
<br/>
To learn more about the financial agents involved in the payment flow of an order in Brazil, check out [this article](/en/tutorial/what-is-the-difference-between-acquirer-brand-gateway-and-sub-acquirer-in-brazil--1dyPJ3gQCCO4ea2o6OMgCi). <br/>
<br/>

## Payment Flow

The complete credit card payment flow at VTEX is shown in the following scheme:

![Credit Card - Basic payment flow](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-modules-getting-started/payments/credit-card-payment-flow_1.JPG)

1. On the Checkout screen of your store, the customer chooses the _credit card_ **Payment Method** to complete the purchase.

2. This payment information is passed to the **Payment Gateway**, which is the player responsible for ensuring that this payment is successful.

3. The _payment gateway_ passes on the required information to the **Acquirer**, which is responsible for settling the financial transactions with retailers.

4. The acquirer sends the payment details to the **Brand**, which connects the acquiring system with the issuing banks.

5. Finally, the brand sends the payment information to the **Issuing Bank**, which does the credit analysis, checks the credit limit and then authorizes or denies the payment.

Upon the issuing bank's response, the reverse flow is performed and the **Payment Gateway** receives information whether the payment has been approved or denied.

> ℹ️ It is possible to include Anti-fraud in this flow. In this case, the anti-fraud receives from the gateway the information that the payment has been pre-authorized by the issuing bank. With the information received from the gateway, the anti-fraud sends a payment approval or denial response. If the anti-fraud denies, the payment is canceled. If the payment is approved, the order can proceed its normal flow.

