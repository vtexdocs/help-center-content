---
title: "Consider map parameter in the creation of canonical tag"
id: ilHxRrPwliYiaGKaqQecE
status: PUBLISHED
createdAt: 2017-05-09T15:51:15.454Z
updatedAt: 2022-12-22T20:48:51.904Z
publishedAt: 2022-12-22T20:48:51.904Z
firstPublishedAt: 2017-05-17T15:23:15.611Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: consider-map-parameter-in-the-creation-of-canonical-tag
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When accessing any search with the `map` parameter in the URL (eg: `www.yourstorename.com.br/department/category/filtername?PS=32&map=c,c,specificationFilter_7`), it is removed for the rendering of the canonical tag. However, the map parameter is essential for setting the loaded content (relative to products of the page with map), so when it's removed, the result may suffer changes.

## Simulation

To simulate you just need a URL with map. For example:

`www.yourstorename.com.br/department/category/filtername?PS=32&map=c,c,specificationFilter_7`

When checking the page's canonical (you can find the canonical by right-clicking "page source code"), you can see that it only renders until the interrogation. In this case:
`www.yourstorename.com.br/department/category/filtername`

This usually occurs with filters, collections and hotsites.

## Workaround

Today we do not have a palliative solution for this scenario.

