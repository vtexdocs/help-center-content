---
title: 'The first shipping update email is not sent when the shipping status is updated'
id: 55EJ7SR18hEeLXOP0TF9j3
status: PUBLISHED
createdAt: 2021-08-25T12:19:02.034Z
updatedAt: 2022-12-22T14:53:07.109Z
publishedAt: 2022-12-22T14:53:07.109Z
firstPublishedAt: 2021-08-25T22:23:26.627Z
contentType: knownIssue
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
tag: Message Center,Order Management
slug: the-first-shipping-update-email-is-not-sent-when-the-shipping-status-is
kiStatus: Backlog
internalReference: 
---

## Summary

The email informing the first shipping update is not sent until the API returns the second shipping update, which must be different from the first one.

## Simulation

1. On the VTEX platform, create an order and follow the [usual order flow](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196) to the status **Invoiced**.
2. Send a shipping update for the order via the [Order tracking API](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus).
3. Note that the first shipping update email is not sent.
4. Send another shipping update identical to the first one.
5. Note that the first shipping update email is not sent.
6. Create another order and follow the [usual order flow](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196) to the status **Invoiced**.
7. Send a shipping update for that order via the [Order tracking API](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus).
8. Note that the first shipping update email is not sent.
9. Send another shipping update that is different from the first one.
10. Note that the first shipping update email has been sent.


## Workaround

As a workaround, ensure that the second update sent via the [Order tracking API](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus) is different from the first one. By doing so, the email will be sent.

