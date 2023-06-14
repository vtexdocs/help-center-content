---
title: 'Logistics Simulation with Minimum and Maximum price in Shipping Policy does not work when ProductPrice as 0 (ZERO)'
id: 5gsBLbPMIZjZvkl5QHudVY
status: PUBLISHED
createdAt: 2022-03-30T20:10:30.205Z
updatedAt: 2022-11-25T21:59:57.297Z
publishedAt: 2022-11-25T21:59:57.297Z
firstPublishedAt: 2022-05-17T14:23:38.006Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: logistics-simulation-with-minimum-and-maximum-price-in-shipping-policy-does-not-work-when-productprice-as-0-zero
locale: en
kiStatus: Backlog
internalReference: 553080
---

## Summary



The simulation on logistics module does not consider the price product matching the minimum and maximum value on Shipping Policy to provide the available shipping policies when the price product is ZERO.
It means if the simulation does not have the product price the simulation provides Shipping Policies that can not be actually available due Minimum and Maximum value.



## Simulation



You must have one Shipping Policy with Minimum and Maximum value configured. After that simulate it with product without price.

Example:
Set the Minimum as $10 and Maximum value as $100 on Shipping Policy.
After that, on simulation does not put the product price.
You will see the Shipping Policy as availabe to deliver.

But the expected result for that is not shows that Shipping Policy because only products between $10 and $100 should be delivered.



## Workaround


Execute the simulation with product price.

