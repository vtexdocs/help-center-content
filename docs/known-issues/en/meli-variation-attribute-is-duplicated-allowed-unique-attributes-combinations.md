---
title: MELI Variation attribute is duplicated. Allowed unique attributes combinations.
id: 7A80EYAOYmEWSlpvWrbXAT
status: PUBLISHED
createdAt: 2023-02-23T13:00:55.730Z
updatedAt: 2023-02-23T13:00:56.222Z
publishedAt: 2023-02-23T13:00:56.222Z
firstPublishedAt: 2023-02-23T13:00:56.222Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: meli-variation-attribute-is-duplicated-allowed-unique-attributes-combinations
kiStatus: Backlog
internalReference: 758331
---

## Summary



Currently we have an issue with Mercado Livre integration, when the seller mapped a value inside mapper which allows variation, but the value is created inside the VTEX product, what happens is that MELI integration will send the value as variation but should be sent as information.

The first SKU will be exported, but then it will cause the next SKU will be considered as duplicated in MELI, as for mapper the same product specification will be sent as variation for MELI.


##

## Simulation



Inside the product bridge menu, you will see an error: **Variation attribute is duplicated. Allowed unique attributes combinations.**

Important to note that this error might happen for multiple reasons, the variation can really by duplicated inside the catalog, or mapper. So first thing is to check inside the SKU if it's really not duplicated.


##

## Workaround



Remove the value inside mapper which is causing the duplication of the AD.





