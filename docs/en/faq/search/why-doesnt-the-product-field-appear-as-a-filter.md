---
title: "Why doesn't the product field appear as a filter?"
excerpt: "Only Combo, Radio, and CheckBox product fields can become menu filters, and they appear only when active products use those values."
id: frequentlyAskedQuestions_376
status: PUBLISHED
createdAt: 2017-04-27T22:36:38.251Z
updatedAt: 2019-12-31T14:24:57.361Z
publishedAt: 2019-12-31T14:24:57.361Z
firstPublishedAt: 2017-04-27T23:01:46.278Z
contentType: frequentlyAskedQuestion
productTeam: Search
author: authors_3
slugEN: why-doesnt-the-product-field-appear-as-a-filter
locale: en
legacySlug: why-doesnt-the-product-field-appear-as-a-filter
---

In a category, you can create a product field (product specification) with two filter options: **Link in Top Menu** and **Link in Side Menu**. Those links become filters in the main or side menu only if the field type is one of the following:

- **Combo**
- **Radio**
- **CheckBox**

Do not use text fields as filters. They can contain long values or HTML, which makes browsing harder.

The filter appears in the menu only when there are active products that use it. The SearchNavigator control checks whether the filter exists on the product. If no product has that attribute, the menu does not show the option.

If you integrate products from other stores into your catalog, index the product after you add it so the indexer overwrites the seller's specifications.

To create product fields, see [Adding product specifications or fields](/en/docs/tutorials/adding-specifications-or-product-fields).
