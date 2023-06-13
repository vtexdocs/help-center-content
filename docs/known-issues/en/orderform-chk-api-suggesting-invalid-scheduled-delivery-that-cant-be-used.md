---
title: orderForm (Chk API) suggesting invalid scheduled delivery that can't be used
id: 7e2bSJSJa938QCrOHkRibZ
status: PUBLISHED
createdAt: 2022-01-24T20:20:11.732Z
updatedAt: 2023-03-21T19:26:09.280Z
publishedAt: 2023-03-21T19:26:09.280Z
firstPublishedAt: 2023-03-21T19:26:09.280Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: 
slug: orderform-chk-api-suggesting-invalid-scheduled-delivery-that-cant-be-used
kiStatus: Backlog
internalReference: 298665
---

## Summary

When a cart/orderForm has multiple items with scheduled delivery, the scheduled options that have the same ID (so, considered the same shipping method) needs to have the same delivery windows between it. If there's no intersection, the shipping method will be discarded for some items.

The issue is that, in some flows, like the "GET orderForm" API, this filtering behavior isn't being applied, offering an invalid scheduled delivery (without intersection). In other flows, like in the "orderForm simulation" or while in fact selecting the shipping method, the offered option will be correctly filtered/removed.

Side-effect: the Chk UI will try to use/simulate the invalid option and can stay locked in a **requests loop**, because the shipping method is available in the first moment, but can't be used in a second moment, and the UI application try again the first step while reviewing the options available in the orderForm.


## Simulation


- to have two different shipping policies (carriers) with the same "freight type" (that defines the "slaId")
- both of them scheduled, but with a different delivery window between them
- to have one item for each shipping policy
- include both items in the cart and simulate the shipping

At this moment, the UI can stay locked in a loop due to the divergence between the "GET orderForm" and the "orderForm simulation".



## Workaround


It's required to fix the delivery window between the shipping methods that have the same ID (to have the same delivery windows), or treat them as different shipping methods, so using different IDs.

