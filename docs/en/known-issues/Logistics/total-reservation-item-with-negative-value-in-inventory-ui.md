---
title: "Total reservation item with negative value in inventory UI"
id: 5W8BeBZjSgN30YXwXfT8kV
status: PUBLISHED
createdAt: 2024-02-29T22:05:19.854Z
updatedAt: 2024-03-01T13:46:07.440Z
publishedAt: 2024-03-01T13:46:07.440Z
firstPublishedAt: 2024-02-29T22:05:20.674Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: total-reservation-item-with-negative-value-in-inventory-ui
locale: en
kiStatus: Backlog
internalReference: 991735
---

## Summary



A specific scenario in which more than one order is placed with the same sku and coming from the same warehouse, can leave the reservation number negative in the inventory UI.

**Specific scenario:**
order A: 4 units of the sku X from warehouse 1;
order B: 6 units of the sku X from warehouse 1;

order A: `status=handling`, the reservation acknowledge;
order B: `status=window-to-cancel`, the reservation is not acknowledge yet;

After this the merchant update the inventory considering the units from order A as delivered, if the merchant cancels the order A, and then later move the order B to `status=handling` (acknowledge the reservation), this will leave the inventory UI with -4 of this sku as reserved.


##

##

## Simulation



1- Update inventory for sku X with 10 units from warehouse 1;
2- Create an order A with 4 units of sku X from warehouse 1;
3- Create an order B with 6 units of sku X from warehoue 1;
4- Move order A to `status=handling` (this will acknowledge the reservation);
5- Update inventory for sku X with 6 units from warehouse 1 (which is the number you still have for order B);
6- Cancel order A;
7- Move order B to `status=handling` (this will acknowledge the reservation);
8- Check inventory for sku X in warehouse 1, it will have -4 units reserved.



##

##

## Workaround



There is no workaround available.





