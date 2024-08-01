---
title: 'SKU Insert File API is not responding with the "Text" property.'
id: 2rPsyAkpGNCVIM4yGlcMBw
status: PUBLISHED
createdAt: 2024-04-10T14:59:14.341Z
updatedAt: 2024-07-22T19:38:40.304Z
publishedAt: 2024-07-22T19:38:40.304Z
firstPublishedAt: 2024-04-10T14:59:15.416Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: sku-insert-file-api-is-not-responding-with-the-text-property
locale: en
kiStatus: Fixed
internalReference: 1014787
---

## Summary


Currently, the API to create a sku file https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file is not responding with the "Text" property correctly.

This field's data is accepted and sent to the database, however, the response body of any of the SKU file's methods (GET, PUT, POST) are always responding the JSON response body containing the "Text" property as null, even when it has a saved value in it.


##

## Simulation


1 - Using the aforementioned API, send a request body for a valid image that has a "Text" field with a non-null data.
2 - Check either the response body of this API or use a GET request to fetch this file's data, the Text field will be null.
3 - However, if you go to the store's admin, in https://VTEX.myvtex.com/admin/Site/SkuForm.aspx?IdSku= you will see that the text displays the data from the sent field.


##

## Workaround


Fetch data, for the Text field from the admin, spreadsheets or search APIs.





