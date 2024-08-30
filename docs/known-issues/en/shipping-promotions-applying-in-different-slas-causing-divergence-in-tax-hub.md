---
title: 'Shipping promotions applying in different SLAs causing divergence in Tax Hub'
id: 3uI0b4FmXUh4uue5kFyFNy
status: PUBLISHED
createdAt: 2023-10-09T13:42:08.767Z
updatedAt: 2023-10-23T11:59:12.329Z
publishedAt: 2023-10-23T11:59:12.329Z
firstPublishedAt: 2023-10-09T13:42:09.636Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: shipping-promotions-applying-in-different-slas-causing-divergence-in-tax-hub
locale: en
kiStatus: Fixed
internalReference: 916423
---

## Summary


When shipping promotions apply for different SLAs, one of them is free shipping, it causes divergence in the request sent by the Tax Hub, preventing the order from being placed.


##

## Simulation



- Create a free shipping promotion for a specific SLA;
- Create any other shipping promotion for another SLA;
- Try placing an order, the message "The requested order could not be created. Please try again".


##

## Workaround


N/A



