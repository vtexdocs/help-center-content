---
title: "The number of brands in the mapping template exceeds the Excel maximum limit"
id: 4sYUppK1iceta3rO6lLO1K
status: PUBLISHED
createdAt: 2021-08-31T18:18:28.874Z
updatedAt: 2022-12-22T20:41:20.781Z
publishedAt: 2022-12-22T20:41:20.781Z
firstPublishedAt: 2021-08-31T19:03:34.028Z
contentType: knownIssue
productTeam: Channels
author: 2mXZkbi0oi061KicTExNjo
tag: Suggestions
slugEN: the-number-of-brands-in-the-mapping-template-exceeds-the-excel-maximum-limit
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

 In order to make definitions between the seller and marketplace's catalogs compatible, categories, brands and specifications have to be [mapped](https://help.vtex.com/en/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521). 

Marketplaces cannot export the sellers’ brand template to [map brands](https://help.vtex.com/en/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521#mapping-brands) when the number of brands listed by sellers exceeds the [Excel maximum limit](https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3).

## Simulation

You can reproduce this error in the VTEX Admin by accessing: __MARKETPLACE__ > __Sellers__ > __Categories and brands__. Then, in the __Brands mapping__ field of the seller with the most brands, click on `Download current mapping table`. Instead of receiving the Excel file by email, you will receive an email with the following message "Error exporting Brands Mapping spreadsheet".

## Workaround

When this situation occurs, brand mapping cannot be performed. We suggest that marketplaces manually select the brand when cataloging SKUs on the [Received SKUs](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus/) page. 

