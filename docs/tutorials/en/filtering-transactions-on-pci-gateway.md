---
title: 'Filtering transactions on Orders section'
id: 6LUq65FqUgIKkKEeWa4IwC
status: PUBLISHED
createdAt: 2019-01-24T21:38:42.313Z
updatedAt: 2023-10-18T16:58:56.709Z
publishedAt: 2023-10-18T16:58:56.709Z
firstPublishedAt: 2019-01-24T21:38:42.695Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: filtering-transactions-on-pci-gateway
locale: en
legacySlug: filtering-transactions-on-pci-gateway
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

At the Orders section, you can use __filters__ to view your transactions. With this feature, you can get more detailed information about the payments that are being made to your store.

## Accessing the filter screen

To filter your transactions follow the steps below:

1. Access the __Orders__ section at the VTEX Admin and click on __Transactions__.
2. On the left side of the search bar, click the __funnel icon__.
3. You will see the filter options. Below, we'll give more details about each of these filters.

For each option, the number of transactions made according to the filter will be shown in parentheses.

## Channel Filter

This filter shows the channels by which a transaction was made. It's divided into three parts: __Connector__, __Antifraud__, and __Sales Policy__.

### Connector

This filter will list all transactions made according to the payment connector. The connectors listed will be the ones you have registered in your store.

Some examples of connectors are:
- Cielo
- Mercado Pago
- PagSeguro

### Antifraud

This filter lists all transactions made according to the anti-frauds registered in your store.

Some examples of antifrauds are:
- Clear Sale
- FControl
- Konduto

### Sales Policy

This filter indicates the trade policy by which the transactions were made. The listed policies will be the ones registered in your store.

## Filter by Date

This filter lists the transactions according to a chosen date range. The date ranges available for this filter are: __Today__, __Yesterday__, __One week__, __One week ago__, __Two weeks ago__, __One month__ or __Last month__.

Dates also vary according to the events of the transaction. The dates can be: __Start date__, __Authorization date__, __End date__ and __Cancellation date__. Below we detail each of these filters.

### Start date

This filter considers the time when the transaction was started. This is the first transaction interaction in your store.

### Authorization Date

After the transaction starts, the authorization process happens. This filter considers the date when VTEX received the information that the transaction was authorized. It's worth mentioning that this status precedes the antifraud analysis. After the antifraud analysis, the transaction receives the status of *Approved*.

### End Date

The completed transaction status occurs after the invoice is included in the order. This status comes *after* the settlement of the transaction.

### Cancellation Date

This filter considers the time when the transaction reached the canceled status.

## Filter by Payment

This filter shows payment data for the transactions that were performed. The available filters are: __Payment method__ and __Number of installments__.

### Payment Method

This filter shows the payment methods of the transactions that were carried out in your store.

Some examples of payment methods are:

- Visa
- Bank slip
- Notes Payable
- Mercado Pago
- Pay Pal

### Number of installments

This filter indicates the number of installments of the payments made in your store. For purchases made __without installments__, the filter will be shown as __1__.

## Status

This filter lists all transactions according to their statuses. For more details on the transaction flow, you can access [our article on this topic](/en/faq/transaction-flow-in-pci-gateway).

Some examples of transaction status are:

- Finished
- Canceled
- Authorizing
- Approved
- Started
- Canceling
