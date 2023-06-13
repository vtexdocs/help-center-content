---
title: The tracking integration is not updating automatically
id: 2e9RR7AnEewejyOwQBKa2c
status: PUBLISHED
createdAt: 2020-11-11T19:38:05.072Z
updatedAt: 2022-12-22T20:43:07.680Z
publishedAt: 2022-12-22T20:43:07.680Z
firstPublishedAt: 2020-11-12T14:37:01.052Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: the-tracking-integration-is-not-updating-automatically
kiStatus: Backlog
internalReference: 
---

## Summary

VTEX offers automatic tracking integration of orders. Not only does the order have to be added to the [Shipping Policies](https://help.vtex.com/en/tutorial/adding-a-carrier--tutorials_140) and associated with a carrier that provides the tracking functionality, but the orders must be linked to their respective tracking method.

The automatic tracking update by carriers is not working on VTEX stores. Therefore, even if the carriers and orders are correctly configured, automatic updates on the delivery status are not being done, nor are the emails with the updated status sent to the customers.

## Simulation

As described in the article [Which carriers allow delivery tracking?](https://help.vtex.com/en/tutorial/which-carriers-allow-delivery-tracking--frequentlyAskedQuestions_303), for each carrier there is a method to implement automatic order tracking integration - automatically tracks the delivery status every six hours for up to 12 and a half days, and sends an email in case of changes.

The customer could usually see the delivery status update when accessing the order information and receive the emails when there is a change in the delivery status. Now, when an order is placed based on the automatic tracking settings, customers cannot see the delivery status update nor receive the emails as expected.

## Workaround

You can actively update the tracking data using the Orders API endpoint [Update Order Tracking Status](https://developers.vtex.com/vtex-developer-docs/reference/tracking#updatetrackingstatus).

It is also possible to [include the variable](https://help.vtex.com/en/tutorial/incluir-variaveis-do-pedido-no-template-de-e-mail-transacional--694Bn8eOeAWYQeaWGaOISe#other-order-email-variables) `trackingURL` in some [Message Center templates](https://help.vtex.com/en/tutorial/list-of-e-mail-templates-in-the-message-center--3g2S2kqBOoSGcCaqMYK2my), such as **Order invoiced** and **Order shipped**, and the customer will be able to track it through the link.

