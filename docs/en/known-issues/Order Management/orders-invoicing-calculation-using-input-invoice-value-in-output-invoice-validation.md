---
title: 'Orders invoicing calculation using input invoice value in output invoice validation'
id: kEjeBKkJMpUDR0JdX6fZv
status: PUBLISHED
createdAt: 2023-11-06T11:39:27.169Z
updatedAt: 2023-11-09T20:47:52.250Z
publishedAt: 2023-11-09T20:47:52.250Z
firstPublishedAt: 2023-11-06T11:39:28.035Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: orders-invoicing-calculation-using-input-invoice-value-in-output-invoice-validation
locale: en
kiStatus: Fixed
internalReference: 930491
---

## Summary


During the process of sending invoices, it is possible for the user to send output and input invoices, but if two partial invoices are made in an order, one for output and one for input, the system adds up these values to validate whether the order can receive a new invoice, making it impossible for orders whose item was invoiced and then returned not to have their total value invoiced.

This is because the Orders API currently performs a value validation to determine whether it should allow a new output invoice to be made for the order, but the calculation is considering the sum of all invoices regardless of their type (input or output), making the system understand that there is no more value to be invoiced.


##

## Simulation



1- Create an order with two units of the same SKU
2- Invoice only one of these units
3- Now make a new input invoice for the unit invoiced in the previous step.
4- Now try to invoice the remaining unit of the order.
5- At this point you will receive a generic message in the UI indicating that it is not possible to invoice the item.



##

## Workaround


There is no workaround available.





