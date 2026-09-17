---
title: 'Searching transactions on Payments'
id: tutorials_459
status: PUBLISHED
createdAt: 2017-04-27T22:03:50.721Z
updatedAt: 2023-03-30T15:27:27.126Z
publishedAt: 2023-03-30T15:27:27.126Z
firstPublishedAt: 2017-04-27T23:03:27.019Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: searching-for-transactions-on-payments
legacySlug: searching-for-transactions-on-pci-gateway
locale: en
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
seeAlso:
  - /en/docs/tutorials/how-to-view-transactions-on-pci-gateway
  - /en/docs/tutorials/how-to-view-the-orders-details
  - /en/docs/tutorials/filtering-transactions-on-pci-gateway
---

You can search for transactions in **Orders > Transactions** using customer data or payment identifiers.

To search for a transaction, follow the steps below:

1. In the VTEX Admin, go to **Orders > Transactions**, or type **Transactions** in the search bar at the top of the page.
2. In the search bar, enter one of the values listed below.

To return to the full list of transactions, delete the value from the search field.

You can search by:

- **Customer email:** email address used in the purchase.
- **Customer name:** first name, last name, or both, as registered in the order. The search is not case-sensitive.
- **Customer identity document:** full document number, without punctuation. For Brazilian stores, this is the customer's CPF.
- **Transaction code:** identifier of the transaction in the VTEX gateway.
- **Payment TID:** identifier of the transaction with the connector.
- **Payment ID:** identifier of the payment with the connector.

## Transaction link in the order

On the order details page, click **See transaction details** to open the related transaction.

![Transaction details link in the order](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/transactions/searching-for-transactions-on-payments_1.png)

## Payment TID and Payment ID

Searches by Payment TID or Payment ID must include the complete value. Partial codes return no results. You can find these values in the transaction details:

![Payment TID and Payment ID in the transaction details](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/transactions/searching-for-transactions-on-payments_2.png)

These values represent the communication with the connector. Learn how to check each interaction in [Viewing transaction details in Orders](/en/docs/tutorials/how-to-view-the-orders-details).

## Customer name

Search using the personal name registered in the purchase, not the company name or trade name. You can search by first name, last name, or both.

## Customer identity document

Enter the full document number without dots, dashes, or other punctuation.

## Search by URL

You can also search by adding the `q` parameter to the Transactions page URL:

`https://{accountName}.myvtex.com/admin/pci-gateway#/transactions?_sort=startDate`

Replace `{accountName}` with your store's account name. To search, add `&q=` followed by the value. For example, to search for `500408`:

`https://{accountName}.myvtex.com/admin/pci-gateway#/transactions?_sort=startDate&q=500408`
