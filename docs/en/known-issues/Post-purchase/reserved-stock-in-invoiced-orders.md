---
title: 'Reserved stock in invoiced orders'
id: TfDOKEybi6eSAEoCEEAqg
status: ARCHIVED
createdAt: 2017-06-13T18:43:58.606Z
updatedAt: 2023-10-17T15:29:19.908Z
publishedAt: 
firstPublishedAt: 2017-06-14T00:07:07.051Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_4
tag: Order Management
slugEN: reserved-stock-in-invoiced-orders
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Occasionally the order has already been billed, the stock of the products involved has already been changed, but the items remain reserved. When checking the stock of these products, we see that they **did not enter** the column "em manuseio" (under handling).

This happens when the order is in the `Pronto para Manuseio` status (Ready for Handling) and the customer requests the order to be canceled. If the store does not abide by the cancellation and invoices the order, it will skip the `Iniciar manuseio` (Start handling) and `Preparando entrega` (Preparing delivery) steps, so the reservation will not be recognized.

Example with order flow:

![2017-06-13 182850](//images.contentful.com/alneenqid6w5/5Skd8YsCcMIicCcEGyoqwG/1a1a839dc36cdb9f818240b68817de3e/2017-06-13_182850.jpg)

In the circulated step of the order flow, the product is invoiced without acknowledgment of the reservation.

As reservations are already confirmed, they will not expire.

## Simulation

1. Make an order;
2. Achieve the status "Pronto para manuseio";
3. As a customer, request cancellation through My Orders";
4. The order status will be changed to Cancelamento solicitado (Requested Cancel";
5. Send the invoice in order to invoice the order;
6. In stock, the item will remain reserved in the "Itens Reservados" column (Reserved Items).

## Workaround

Currently there is no workaround for this issue.

In cases where this occurs, the stock will remain reserved and it's necessary to contact VTEX support in order to release the reservation.

