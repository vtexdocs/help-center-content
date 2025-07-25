---
title: 'WebService method for activating SKU does not work when no price is set in the main sales policy'
id: 5a4XUoUvpm2KmWw66Um0mu
status: PUBLISHED
createdAt: 2017-07-09T22:52:26.629Z
updatedAt: 2019-12-31T15:17:42.750Z
publishedAt: 2019-12-31T15:17:42.750Z
firstPublishedAt: 2017-09-12T21:19:31.214Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5S2MYtrgEoSGaGMqsICaEC
tag: Web Service
slugEN: webservice-method-for-activating-SKU-does-not-work-when-no-price-is-set-in-the-main-sales-policy
locale: en
kiStatus: Fixed
internalReference: 
---

## Summary

When using the *StockKeepingUnitActive* WebService method in a SKU that does not have a price registered with the Main Sales Policy (1), the update fails because the system validates whether or not the SKU has a registered price by looking solely at Policy 1.

## Simulation

Set the price of an SKU only in other sale policies, without doing so in the main policy, and then try to perform a Request using the *StockKeepingUnitActive* method, referencing the SKU in question.

## Workaround

Manually activate the SKU in admin ou en masse through the Products/SKUs spreadsheet.

