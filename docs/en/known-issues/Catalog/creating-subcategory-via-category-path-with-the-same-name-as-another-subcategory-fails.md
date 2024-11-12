---
title: 'Creating subcategory via category path, with the same name as another subcategory, fails'
id: 4ncZiLNaKbgfYzGHCGvwdk
status: PUBLISHED
createdAt: 2024-08-26T15:45:09.563Z
updatedAt: 2024-08-26T15:45:10.888Z
publishedAt: 2024-08-26T15:45:10.888Z
firstPublishedAt: 2024-08-26T15:45:10.888Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: creating-subcategory-via-category-path-with-the-same-name-as-another-subcategory-fails
locale: en
kiStatus: Backlog
internalReference: 1087069
---

## Summary


Currently, it is possible to create new categories and/or subcategories by informing their names via the JSON property "CategoryPath" in the insert product API: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product

However, when the informed subcategory has the same name as another subcategory, the product is created in the former and the latter is not generated.

This doesn't happen for categories.


##

## Simulation


Using the mentioned API, create a product informing, in the category path, a subcategory that has the same name as another subcategory but is not yet created and should be created elsewhere in the category tree.

As an example, check the tree below:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

This would mean informing in the path "Department/Category2/Subcategory1".

The product will be created in the path "Department/Category/Subcategory1" instead and the new subcategory will not be created.


##

## Workaround


Create the subcategory by other means instead, such as the PUT category API: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/category and then insert the product to this category informing its path or ID.





