---
title: "Special characters in invoiceNumber cause post-purchase flow to fail"
id: 1tVPSLsB9SSZIF1KrNn3k2
status: PUBLISHED
createdAt: 2023-12-14T18:31:27.213Z
updatedAt: 2025-05-06T13:18:29.032Z
publishedAt: 2025-05-06T13:18:29.032Z
firstPublishedAt: 2023-12-14T18:31:27.801Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: special-characters-in-invoicenumber-cause-postpurchase-flow-to-fail
locale: en
kiStatus: Fixed
internalReference: 953285
---

## Summary


During the invoice flow, the Orders system allows you to enter values in the “`invoiceNumber`” field (via UI or API) that contain special characters, either at the beginning, middle or end, for example: `“#123456”`, `“123/456”` or `“123456/”`.

However, the SNO system responsible for registering the invoice is unable to process these values correctly, which can impact various post-purchase flows. This can result in errors or failures in the execution of processes such as:


- Tracking updates;
- Changing the order status to “Invoiced”;
- Communication with the GiftCardHub system;
- And any other flow that depends on the “invoiceNumber” field.


##

## Simulation


1- Invoice an order by entering the following example invoice number: "#123456"; (special characters at the beginning, middle of the number or at the end)

2- Note that the order will not be updated to invoiced status

3- In the case of flows involving a seller, in the Get Order of the seller's order it will be possible to see the saved invoice, but even then the marketplace order will not be updated to invoiced, as the system will not be able to pass on the invoice.


##

## Workaround


Orders with invoices that contain special characters cannot be adjusted afterward. To avoid disruptions during the order flow we recommend using only alphanumeric characters in the `invoiceNumber` field.

