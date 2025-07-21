---
title: 'Customer Credit - Overview'
id: 1uIqTjWxIIIEW0COMg4uE0
status: PUBLISHED
createdAt: 2018-11-08T17:11:28.486Z
updatedAt: 2024-02-09T21:37:56.199Z
publishedAt: 2024-02-09T21:37:56.199Z
firstPublishedAt: 2018-11-08T19:14:39.491Z
contentType: tutorial
productTeam: Financial
author: 6xBnaVsQ7K60kemi2U2Q6w
slugEN: customer-credit-overview
locale: en
legacySlug: credit-control-overview
subcategoryId: 7EWKfPIGfmI0G8iMYK8Aiy
---

Customer Credit is the VTEX app that allows a store to offer exclusive credit to its trusted customers, increasing purchasing power by allowing a longer period for payment of orders.

## When to use it

Business models that have a consolidated commercial relationship with their customers generally require a credit management system that allows the issuance of invoices without compromising the company's cash flow.

Approving these types of payments on ecommerce platforms usually requires manual approval effort on an order-by-order basis, even for those customers who already have credit available.

Stores that carry out B2B commercial transactions, such as distributors of retail chains, direct sales to resellers, office supplies for companies or industrial inputs, can use Customer Credit to offer a purchasing and installment payment experience integrated with the VTEX platform.

## How it works

Using the VTEX Admin or [Customer Credit API](https://developers.vtex.com/docs/api-reference/customer-credit-api), you can perform the following actions in the Customer Credit app:

- Create and manage accounts for chosen customers
- Set credit limits and tolerances for each account
- Configure deadlines and installments for invoices documents
- Monitor and modify the status of issued invoices

<div class="alert alert-info">
When installed, Customer Credit appears as a payment option at Checkout only for customers selected by the retailer, displaying the amount of credit available to be used for the purchase.
</div>

See below the basic flow of how Customer Credit works in VTEX stores:

![GIF_CC_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Apps/Customer%20Credit/customer-credit-overview_1.gif)

## Customer Credit definitions

### Account (Customer Credit account)

To use Customer Credit as a payment method for a purchase, the customer must have an account registered by the retailer in the Customer Credit app. This account has information such as the holder's document type and number, email, credit limit and tolerance.

### Credit limit

Each account has a credit limit registered at the time of opening. This limit indicates the maximum amount that the customer can use to make one or more purchases at the same time via Customer Credit.

<div class="alert alert-warning">
An account's credit limit can be changed by the retailer at any time.
</div>

### Available credit

Amount that the customer still has available in their account to make purchases through Customer Credit.

Every time the customer completes a purchase and the order is billed, the amount of available credit decreases. However, after the customer makes payment for the issued invoice, the available credit value returns to the pre-purchase value.

<div class="alert alert-warning">
At the time of a purchase, the customer has visibility of how much credit can be used via Customer Credit. If the purchase value is greater than the available credit, payment cannot be made through Customer Credit.
</div>

### Invoice

Invoice is the document generated after the customer makes a purchase using Customer Credit as a payment method and the order is billed.

In cases of purchases in installments, invoices are generated according to the number of installments. For example, a purchase made with payment in 10 installments on Customer Credit will generate 10 invoices related to the same order number.

### Deadlines and installments

Customer Credit allows retailers to configure different payment deadlines and installment scenarios to offer greater payment flexibility to registered customers.

### Pre-authorization and settlement

After the customer makes the purchase using Customer Credit, the payment is approved as a credit and the platform pre-authorizes the amount, automatically reserving it after 5 business days or until the order is billed. At this point, the amount in the account is settled and payment invoices are generated.

The flow in Customer Credit is similar to that of credit cards in regarding order modifications. When an order value change occurs during the pre-authorization period, the credit amount changes.

<div class="alert alert-warning">
If it is necessary to change an order to reduce its value after the settlement period (issuance of invoices), the system will update the invoices to the new value. If the order value is increased, the system will create new invoices.
</div>

## Installation and configuration

To install and configure Customer Credit in your store, access Track [Customer Credit - How to get started](/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/36grlQ69NK6OCuioeekyCs).
