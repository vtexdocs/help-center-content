---
title: Products are not being sent by the integration after mapping upload
id: 2A6AvKjkTm2wocOg4ywIAa
status: PUBLISHED
createdAt: 2018-05-04T17:50:27.140Z
updatedAt: 2022-12-22T15:11:03.363Z
publishedAt: 2022-12-22T15:11:03.363Z
firstPublishedAt: 2018-05-04T17:55:57.383Z
contentType: knownIssue
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Connections
slug: products-are-not-being-sent-by-the-integration-after-mapping-upload
kiStatus: Backlog
internalReference: 
---

## Summary

When performing the mapping upload of a Bridge integration, the products are not being sent. Even forcing a reindexing of the base, the products keep not being sent.


## Simulation

1. Access the Bridge module or the Integration > Settings tab.
2. Click on the `Mapping Upload` button of a marketplace to which the store is already integrated.
3. Upload the spreadsheet and click `Send`.

You will see in the Products tab that the integration did not attempt to send any products.

## Workaround

The solution at the moment is to make any minimum change in the product (add a space in the description, for example), or in the price (a change of a penny, for example) or in the inventory. This will cause the notification system to identify a change in the product and generate a notification to the affiliate. The integration will then try to send the products.


