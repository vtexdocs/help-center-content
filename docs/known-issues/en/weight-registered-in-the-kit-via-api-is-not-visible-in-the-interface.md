---
title: 'Weight registered in the kit via API is not visible in the interface'
id: 3pXAznG51YoUquomEmaeUi
status: PUBLISHED
createdAt: 2018-08-06T22:31:30.571Z
updatedAt: 2022-12-22T20:45:12.639Z
publishedAt: 2022-12-22T20:45:12.639Z
firstPublishedAt: 2018-08-06T23:18:13.408Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: weight-registered-in-the-kit-via-api-is-not-visible-in-the-interface
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Although the API (webservice) allows the registration of any value as the final weight of a kit, the SKU registration interface always displays the sum of the total weight of components.

When saving the SKU through the Admin, the value displayed there will overwrite the one registered through the API.

This can lead to two types of unwanted scenarios: the value registered through the API doesn't have easy visibility (diverging from the UI) or a value can be lost without intention (once you save other UI changes).

Finally, you should take into account that the checkout and the shipping calculation are always based on the value of the weight registered for the kit, independent of the individual components.

## Simulation

- Register any weight using the Webservice's `StockKeepingUnitInsertUpdate` method in a kit SKU;
- Observe the editing screen of the same SKU, which will present the total value of the components as weight.

## Workaround

The registration of a value other than the sum of its components is inadequate. In an integration implementation, you should always try to synchronize this weight with its components.

If there is no integration changing the SKUs, there's no risk of a lack of synchronization, so the administrative interface alone will guarantee the correct kit's final weight.

