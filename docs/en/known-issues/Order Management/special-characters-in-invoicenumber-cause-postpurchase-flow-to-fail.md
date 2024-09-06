---
title: 'Special characters in invoiceNumber cause post-purchase flow to fail'
id: 1tVPSLsB9SSZIF1KrNn3k2
status: PUBLISHED
createdAt: 2023-12-14T18:31:27.213Z
updatedAt: 2023-12-14T18:31:27.801Z
publishedAt: 2023-12-14T18:31:27.801Z
firstPublishedAt: 2023-12-14T18:31:27.801Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: special-characters-in-invoicenumber-cause-postpurchase-flow-to-fail
locale: en
kiStatus: Backlog
internalReference: 953285
---

## Summary


Currently, SNO (Shipping Notification Order) accepts that an invoice number (invoiceNumber) is sent via API and UI with a "special character" at the end or beginning of the data, for example: "#123456".

However, when invoices are received in this format, some flows carried out by the system involved in the post-purchase flow end up returning an error because they are unable to process or pass on the amount received. Examples of flows that may fail include tracking updates, order status updates for invoiced orders, communication with the gifcard hub system, and any other system that uses invoiceNumber data may have its flow compromised due to the use of special characters in the invoiceNumber field.


##

## Simulation


1- Invoice an order by entering the following example invoice number: "#123456"; (special characters at the beginning of the number or at the end)

2- Note that the order will not be updated to invoiced status

3- In the case of flows involving a seller, in the Get Order of the seller's order it will be possible to see the saved invoice, but even then the marketplace order will not be updated to invoiced, as the system will not be able to pass on the invoice.


##

## Workaround


For these cases, the alternative solution is not to use the "special characters" in the invoiceNumber composition.





