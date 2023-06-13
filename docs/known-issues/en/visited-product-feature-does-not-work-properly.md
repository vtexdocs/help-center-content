---
title:  "Visited product" feature does not work properly
id: 5AiCVwLkGToEgtLkZVPe5i
status: PUBLISHED
createdAt: 2022-11-25T18:45:15.389Z
updatedAt: 2022-11-30T19:05:56.190Z
publishedAt: 2022-11-30T19:05:56.190Z
firstPublishedAt: 2022-11-25T18:45:15.854Z
contentType: knownIssue
productTeam: Analytics
author: 2mXZkbi0oi061KicTExNjo
tag: Analytics
slug: visited-product-feature-does-not-work-properly
kiStatus: Backlog
internalReference: 701169
---

## Summary


The visited product trigger, which uses the data captured by Request Capture, is configured with the "checkout" filter set to "null". However, Request Capture needs to go through the checkout to capture the user and navigation data and populate it in the Master Data. As a result, the trigger does not work properly because RC cannot populate the data before checkout.


##

## Simulation



1. Set up the trigger following the documentation: https://help.vtex.com/en/tutorial/configuring-product-visited--tutorials_3136
2. Navigate to a product page
3. Wait for at least 2h for the email to be sent


##

## Workaround


There is no workaround

