---
title: 'Product and SKU Specifications'
id: 2NQoBv8m4Yz3oQaLgDRagP
status: PUBLISHED
createdAt: 2019-06-11T12:52:45.235Z
updatedAt: 2022-07-06T17:40:57.274Z
publishedAt: 2022-07-06T17:40:57.274Z
firstPublishedAt: 2019-06-25T15:32:42.804Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: specifications-concept-definition
locale: en
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugEN: catalog-101
---

Specifications are additional properties that can be added to your store's products or SKUs. At VTEX, these specifications are added in the **Categories** section and are called **Field**.

<div class="alert alert-warning">
<p>In VTEX, specifications follow a logic of "inheritance", that is, when creating a specification at a higher category level, the specification will be presented at all category levels below it. Therefore, if you need to create a product or SKU specification that applies to only one category, it should be created at that category's level.</p>
</div>

## Product Specification

A product specification is generally used to create site browsing filters or to display additional product information. 

For example, in a fashion store, you would be able to create a product specification to let your client know which **fabric** is used in a specific item sold in your store.

This information could be displayed as a filter in a side bar or as an informative text inside the product page. 

Product specifications can receive data such as strings and numbers, which VTEX APIs then consume and use for front-end customizations or to send information to external integrations.

To understand the complete step-by-step for creating product specifications, check out the article [Adding specifications or product fields](https://help.vtex.com/en/tutorial/adding-specifications-or-product-fields--tutorials_106).

## SKU Specifications

An SKU specification is used to create site browsing filters and to differentiate SKUs within the product page.

For example, is a store that sells shirts, you would be able to create a SKU specification to tell your products apart by size.

Your SKU specifications would have values such as **XS, S, M, L and XL**. These would be use as a browsing filter on your site. In addition, these specifications would work as SKU selectors on the product page.

To understand the complete step-by-step for creating SKU specifications, check out the article [Adding SKU specifications or fields](https://help.vtex.com/en/tutorial/adding-sku-specifications-or-fields--tutorials_119).

<div class="alert alert-warning">
At VTEX, SKU specifications are mandatory fields required to add SKUs, meaning that if a specification were to be created in a category, all SKUs within that category would need to carry this new specification. All these SKUs are therefore disabled until this new specification is added to the SKUs of the category in question.
</div>
