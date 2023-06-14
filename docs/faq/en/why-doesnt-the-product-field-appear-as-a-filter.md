---
title: Why doesn't the product field appear as a filter?
id: frequentlyAskedQuestions_376
status: PUBLISHED
createdAt: 2017-04-27T22:36:38.251Z
updatedAt: 2019-12-31T14:24:57.361Z
publishedAt: 2019-12-31T14:24:57.361Z
firstPublishedAt: 2017-04-27T23:01:46.278Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_3
slug: why-doesnt-the-product-field-appear-as-a-filter
legacySlug: why-doesnt-the-product-field-appear-as-a-filter
---

In the category, you can register a product field – or product specification. In the product field, you can select two options of filters: **Link no Menu Superior **and **Link no Menu Lateral. ** These links will form the filters in the main or side menus.  However, for this to happen, the field created must have one of the following types:

- **Combo**
- **Radio**
- **CheckBox**

_Text types should not be created as filters, since they may contain large values, as well as HTML, making it difficult for end clients to browse._

It is important to remember that these features will be available in the Menu if there are active products. The SearchNavigator controller identifies in the product the existence of the filter. If there are no products with this attribute, Menu does not render this option.

For customers who integrate products from other stores in their catalog, it is necessary to index the product after its addition to the catalog so that the indexer overrides the seller's specifications.

To learn more about the creation of product fields, read the [Product Field](/en/tutorial/creating-a-product-field) article, which explains how and where this setting can be registered.
