---
title: 'EAN of the KIT components is not displayed in order json'
id: 2lrOfIp4FOcGWIA2EuG6U0
status: PUBLISHED
createdAt: 2017-11-07T14:28:45.693Z
updatedAt: 2022-12-22T14:51:55.731Z
publishedAt: 2022-12-22T14:51:55.731Z
firstPublishedAt: 2017-11-07T14:32:50.622Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_3
tag: Order Management
slug: kit-components-ean-is-not-displayed-in-order-json
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

In the order json, where all the information about purchases products is shown, when of these products is a KIT, only the KIT EAN is displayed, and not that of the components.

## Simulation

1. Register a product KIT;
2. Purchase this product;
3. Call the Order Management API by the order ID.

## Workaround

If the component SKU compenent EAN is indispensable to the ERP, the API call can be done using the SKU ID, whereas the answer sent to json would contain the EAN.

