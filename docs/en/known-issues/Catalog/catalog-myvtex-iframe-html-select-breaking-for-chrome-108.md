---
title: "Catalog Myvtex Iframe HTML Select Breaking for Chrome 108"
id: 7kax7PbhijSluYJETvOe92
status: PUBLISHED
createdAt: 2022-12-06T18:58:36.011Z
updatedAt: 2022-12-06T18:58:36.578Z
publishedAt: 2022-12-06T18:58:36.578Z
firstPublishedAt: 2022-12-06T18:58:36.578Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-myvtex-iframe-html-select-breaking-for-chrome-108
locale: en
kiStatus: Backlog
internalReference: 711637
---

## Summary



This is a side effet of a chrome update that has been scheduled for a fix, by the google team on the next week, 12/12/2022: https://bugs.chromium.org/p/chromium/issues/detail?id=1395079&q=dropdown&can=2

The effect felt on the VTEX admin is, that chrome v108 users are having trouble in selecting from dropdown menus, for instance, on the SKU configuration tab, when attempting to select a value on the dropdown menu, no actions are generated (the entire list of possible values should be shown):

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/catalog-myvtex-iframe-html-select-breaking-for-chrome-108_1.png)




##

## Simulation


Using chrome's latest version, v 108.0.5359.95, try entering a dropdown menu using the myvtex admin version.


##

## Workaround


There's a plethora of workarounds, such as:

1) Using other browsers
2) Acessing the same UI via vtexcommercestable.com.br
3) Cahnging the value via API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product-specification

