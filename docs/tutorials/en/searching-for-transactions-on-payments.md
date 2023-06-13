---
title: Searching transactions on Payments
id: tutorials_459
status: PUBLISHED
createdAt: 2017-04-27T22:03:50.721Z
updatedAt: 2023-03-30T15:27:27.126Z
publishedAt: 2023-03-30T15:27:27.126Z
firstPublishedAt: 2017-04-27T23:03:27.019Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: searching-for-transactions-on-payments
legacySlug: searching-for-transactions-on-pci-gateway
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Transactions searches can be performed in different ways, and with different types of data. The search options are:

- __Customer's email__
- __Customer's name__
- __Customer's identity card number__
- __Transaction Code:__ code that identifies the transaction in VTEX's gateway.
- __Payment TID:__ number used for transaction identification with the connector.
- __Payment ID:__ number used for payment identification with the connector.

To search for a transaction in the VTEX Transaction module, follow the steps below:

1. In the VTEX Admin, go to **Orders** > **Transactions**, or type **Transactions** in the search bar at the top of the page.
2. On the Search Bar, enter one of the information listed above.

To return to the original list of transactions, just delete the value previously entered on the search field.

## Transaction link in the Orders Management

In the Orders Management, if you click on a given order, you'll see a page with its main information. There you'll find the link _See transaction details_. Click on it to know more about the order:

![Link transação OMS (EN)](//images.ctfassets.net/alneenqid6w5/2CgW46clF6cSU0uQYGyA4s/7b61faff11c95caab8b01d65e7460c33/Link_transa____o_OMS__EN_.png)

## Payment TID and Payment ID

The search using these codes must necessarily contain all digits, or your search will return empty. Here's how to find them:

![Códigos EN](//images.ctfassets.net/alneenqid6w5/3TyYDhqphmKCCEGce8o6EE/6a2fe4bb481b991e2d9c0d8d25d3c3d3/C__digos_EN.png)

These values, within the transaction detail, represent the communication with the respective connector. At [transaction events](/en/tutorial/how-to-view-the-orders-details), it is possible to validate each contact made.

## Customer's Name

The name you should look for is the personal data that was registered on the purchase, and not the company name or trade name, in case of legal entities. You can search by name, surname, or both, all in uppercase or lowercase, by any letter of the name.

## CPF

You must complete the full number of the document, without the scores.

## Directly through the URL

Another way to search is by entering the parameter directly on the page&#8217;s URL. Usually, the URL structure of PCI Gateway is:

`https://nameofthestore.vtexcommercestable.com.br/admin/pci-gateway#/transactions?_sort=startDate`

If you want to search directly through the URL, use the **&amp;q=** parameter, and enter the data you want to search. 

__Example:__ if you are looking for the order 500408, simply do the following:

`https://nameofthestore.vtexcommercestable.com.br/admin/pci-gateway#/transactions?_sort=startDate&amp;q=500408`
