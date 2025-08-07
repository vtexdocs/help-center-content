---
title: "Catalog filter API (Facets) exhibits unexpected behavior when fields of different specifications have the same name"
id: 5kEXFKmO3YAyICAa6Usa28
status: PUBLISHED
createdAt: 2017-08-16T19:59:34.640Z
updatedAt: 2022-12-22T20:46:15.197Z
publishedAt: 2022-12-22T20:46:15.197Z
firstPublishedAt: 2017-08-16T20:09:14.847Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-filter-api-facets-exhibits-unexpected-behavior-when-fields-of-different-specifications-have-the-same-name
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When executing the filter API (Facet), an error 500 message ("An item with the same key has already been added") is displayed if the result contains specification fields (of product or SKU) with the same name.

API EndPoint: /api/catalog_system/pub/facets/search/{category}?map=c

## Simulation

To simulate this scenario:

1. Create a field named "size" for example in any subcategory of the category you wish to test. Define it as a filter.
2. Create a field having the same name ("size", in our example) in another subcategory of the category you wish to test. Define it as a filter as well.
3. Input values in these fields;
4. Create a product in each subcategory and fill out the defined field ("size" in our example)
5. Wait for the product indexation to finish (about 5 minutes)
6. Execute the endpoint /api/catalog_system/pub/facets/search/{category}?map=c

## Workaround

To prevent this behavior, avoid creating fields having the same name in parallel categories (subcategories of the same parent category). 

If the API is used for rendering a side menu (filter), it can replaced by the native searchNavigator control. [Click here to find out more](http://help.vtex.com/en/tutorial/--tutorials_550) 

