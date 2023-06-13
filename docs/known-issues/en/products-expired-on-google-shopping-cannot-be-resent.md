---
title: Products expired on Google Shopping cannot be resent
id: 7nZszdQ8YEMg2q2MGqoQG
status: PUBLISHED
createdAt: 2018-06-11T16:20:09.949Z
updatedAt: 2022-12-22T15:10:33.256Z
publishedAt: 2022-12-22T15:10:33.256Z
firstPublishedAt: 2018-06-11T16:27:10.065Z
contentType: knownIssue
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Connections
slug: products-expired-on-google-shopping-cannot-be-resent
kiStatus: Fixed
internalReference: 
---

## Summary

Google Shopping makes sent products expire automatically after 30 days if they are not upgraded. This includes any changes to the product, be it price, inventory, or specification. For products that have not been updated in any way, you would need to reindex them to notify the integration.

However, notifications only happen if there is a change in price/inventory/product. Thus, only reindexing the database will not influence the delivery of products to the integration. In this way, expired products on Google Shopping need to be updated so that the integration is notified.

## Simulation

1. Choose an expired product on Google Shopping.
2. Reindex this product on VTEX.
3. The integration will not be notified and the product will not be active on Google Shopping.

## Workaround

Make a price or inventory change to the desired products and they will be resent to Google Shopping.

