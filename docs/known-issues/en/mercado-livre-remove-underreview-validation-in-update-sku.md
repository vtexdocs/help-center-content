---
title: '[Mercado Livre] Remove under_review validation in Update SKU'
id: 1yeZeigiok3zaltkI7RTMW
status: PUBLISHED
createdAt: 2023-08-30T18:15:25.269Z
updatedAt: 2023-08-30T18:15:25.924Z
publishedAt: 2023-08-30T18:15:25.924Z
firstPublishedAt: 2023-08-30T18:15:25.924Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: mercado-livre-remove-underreview-validation-in-update-sku
locale: en
kiStatus: Backlog
internalReference: 890658
---

## Summary


Remove under_review validation in Update SKU flow because when the seller applies the actions to fix the moderation cases and these are related with the catalog we are not sending those changes to MELI and finally the MELI ads continue being moderated.


##

## Simulation


SKU was moderated for being in the wrong category, the correction has already been made and now it has the correct mapping in mapepr, but it is still not being exported according to the mapper category.


##

## Workaround


N/A





