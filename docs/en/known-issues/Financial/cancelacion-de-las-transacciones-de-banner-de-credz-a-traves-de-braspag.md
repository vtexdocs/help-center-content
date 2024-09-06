---
title: 'Cancellation of Credz banner transactions via Braspag'
id: 13zKpRlvD8WCc888IYSKQE
status: PUBLISHED
createdAt: 2017-07-03T21:04:29.131Z
updatedAt: 2022-12-22T15:06:46.586Z
publishedAt: 2022-12-22T15:06:46.586Z
firstPublishedAt: 2017-07-04T18:49:23.107Z
contentType: knownIssue
productTeam: Financial
author: authors_4
tag: Payments
slug: cancelacion-de-las-transacciones-de-banner-de-credz-a-traves-de-braspag
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The cancellation of credit card transactions under the Credz banner, when using Braspag, is not happening correctly. 

The request is canceled at VTEX but not at the gateway, unduly charging the customer.

In the integration currently approved with Braspag, Payments uses the refund method, not supported by this card flag. Update is required in order to use the cancellation method (void).

## Simulation

Simply request the cancellation of any Credz flag transaction, which is carried out via the Braspag connector.

## Workaround

The cancellation of the transaction must be done directly through the Braspag panel.

