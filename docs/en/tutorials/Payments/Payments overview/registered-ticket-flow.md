---
title: 'Registered Ticket - Basic payment flow'
id: 1WlPkeueWQiykUwW8mcM4S
status: PUBLISHED
createdAt: 2019-01-24T21:38:41.612Z
updatedAt: 2019-12-31T15:22:32.884Z
publishedAt: 2019-12-31T15:22:32.884Z
firstPublishedAt: 2019-01-24T21:38:41.989Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: registered-ticket-flow
locale: en
legacySlug: registered-ticket-flow
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

The registered ticket is one of the __payment methods__ that can be used to close purchases at your store. It consists of specific fields that ensure that the payment arrives correctly to its final destination.

To issue these tickets, your store must contact a financial institution that can issue the registered tickets.

Here's how the basic flow of a registered ticket payment works. The flow is divided into two parts: __Ticket issue__ and __Bank Reconciliation__.
 
## Ticket Issue

![processo-boleto-registrado-en ex 2](//images.ctfassets.net/alneenqid6w5/3QIX0MyLCgqcmcsGgEAwsU/e7530c4c911dd93a995425db4a9e5fff/paint_bank_en_2.png)

1. Your __e-commerce__ informs the __Gateway__ that an order will be paid via registered ticket.
2. The gateway contacts the __Bank__ to register the ticket.
3. The bank issues the ticket and sends its information to the gateway.
4. The gateway generates the ticket link and sends it to your store.
5. Your store sends the ticket link to your customer so they can pay.

At this time, the ticket has not yet been paid by the customer.

## Ticket Payment and Bank Reconciliation

![processo-boleto-registrado-en ex 1](//images.ctfassets.net/alneenqid6w5/1c6VvblROiioeMmacWkuii/37a83bad6931c6ae6a8fa89a5b773127/paint_bank_en.png)

1. the __Client__ pays the ticket directly to the __Bank__.
2. The bank sends the [bank reconciliation](/en/tutorial/bank-reconciliations) files to the __Gateway__ with information on the tickets payment status.
3. The gateway notifies your __e-Commerce__ on the paid tickets.

At this stage, the delivery of the order can proceed normally.
