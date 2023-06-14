---
title: Customer Credit - Overview
id: 1uIqTjWxIIIEW0COMg4uE0
status: PUBLISHED
createdAt: 2018-11-08T17:11:28.486Z
updatedAt: 2023-03-29T14:46:02.462Z
publishedAt: 2023-03-29T14:46:02.462Z
firstPublishedAt: 2018-11-08T19:14:39.491Z
contentType: tutorial
productTeam: Financial
author: 6xBnaVsQ7K60kemi2U2Q6w
slug: customer-credit-overview
legacySlug: credit-control-overview
subcategory: 7EWKfPIGfmI0G8iMYK8Aiy
---


Customer Credit is the VTEX app that allows the store to offer credit to trusted customers. Having more time to pay, the customer has greater purchasing power.

Through the platform, it’s possible to set deadlines and installments, as well as manage accounts, define credit limits and follow the issued invoices. Your customers have visibility of available credit and payables directly on your store's website.

## When to use it

Business models that have a commercial relationship with their customers often need a credit management system in order to be able to issue billed bank slips without jeopardizing the company's cash flow.

Approval of these payments on e-commerce platforms often requires a manual effort of approving each order individually, even for customers who have available credit.

Stores with B2B relationships such as distributors of retail chains, direct sales to resellers, office supplies for companies or industrial supplies can use Customer Credit to offer an experience of purchase and deferred payment integrated to VTEX platform.

## How it works

**Basic flow of how Customer Credit works.**

1. Store connects the Customer Credit connector and makes the initial settings.
2. Store sets credit limit for a user's current account.
3. User places an order using store credit in SmartCheckout.
4. Order debits its value of the user's credit limit and generates an invoice.
5. Then, the user pays the generated invoice.  
6. The invoice's payment recharges the credit limit of the user's current account.

Because it was developed in VTEX, Customer Credit is fully integrated with SmartCheckout, which means your customers' buying experience remains the same.
You can choose the users who will receive credit, set the credit limit for each of them, and individually manage each invoice.

Customer Credit can be used through both the Admin web interface and the API. 

## Concepts

### Checking account

In order to be able to access the deferred payment, the user must have access to an account registered in the Customer Credit. 

This account is made up of identifiers such as email and document, as well as the defined credit limit.

### Credit limit

For each account you must set a credit limit. This limit indicates the maximum amount that the account can have in open invoices at the same time. 
When invoices are paid or canceled, their values reset the credit limit. The limit can be reset at any time by the user with the required permissions.

At the time of purchase, the customer has visibility of how much credit he or she has available. When it’s not enough for the full amount, they can not use their credit.

The credit limit set on an account can also be used by more than one dependent.

### Invoices

Invoice are references to future payments. They are automatically created when an order paid with Customer Credit is billed. It consists of expiration date, value and description. An external payment link can be added to each invoice in order to facilitate settlement.

There are 3 possible states for the invoices: **Open**, **Paid** and **Canceled**. In the interface there will be a forth state, the **Overdue**, but which is actually an Open invoice which is expired.

An invoice is always created with the Open status, and depending on Admin actions or API calls it can transition to Paid or Canceled.

### Tolerance

It allows a purchase to be approved even if it exceeds the user's available credit. 
If the feature is turned on, a percentage can be configured individually for each registered account.

### Deadlines and installments

Customer Credit allows you to set up the installment terms that will be available to your customers as you wish. Some common examples of deadlines used are 7 days, 28, 45, 30/60, 30/60/90, etc.

### Pre-authorization and settlement

Once the payment with credit has been approved, the system pre-authorizes the amount, reserving it automatically after 5 business days or until the order is billed. The value is then settled in the account and the invoices are created.

The flow follows the same pattern as the one for credit cards: alterations made to the order during the pre-authorization period change the amount of reserved credit. 

Changes made after settlement, i.e. after invoice has been issued, update the invoice already issued if the value decreases and issue a new invoice if the order value increases.

## Contact Points

### Admin

The Customer Credit interface in VTEX Admin provides complete visibility of the system: invoices, accounts and general settings. 
The interface also allows you to fetch, filter and sort data, as well as import and export data.

### Checkout

Through VTEX Checkout users can close purchases using Customer Credit. The system will automatically check if the user already has an account with credit and, if so, will allow the user to authenticate to see the available credit as well as options for closing the purchase, in addition to terms and installments.

### My Credits

The interface through which your customer will have access to their account information. 
It’s very similar to the VTEX Admin Accounts page. In it, users see their available limit, paid and due invoices, and the account history.

## Installing and setting up
We've prepared a detailed guide for you to [start using Customer Credit in your store](/en/tracks/customer-credit-getting-started).  Go on and offer exclusive credit to your best customers right now.

For more information about Customer Credit APIs, visit [Customer Credit API - Overview](https://developers.vtex.com/docs/api-reference/customer-credit-api).
