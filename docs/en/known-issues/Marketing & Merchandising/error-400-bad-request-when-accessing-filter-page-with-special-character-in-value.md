---
title: 'Error 400 (Bad Request) when accessing filter page with special character in value'
id: 1mHUPIG42A0UUoAwac8IYE
status: PUBLISHED
createdAt: 2017-09-18T19:12:57.298Z
updatedAt: 2022-12-22T20:45:33.631Z
publishedAt: 2022-12-22T20:45:33.631Z
firstPublishedAt: 2017-09-18T19:28:01.968Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slugEN: error-400-bad-request-when-accessing-filter-page-with-special-character-in-value
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When applying a filter by specification (side menu) with special character, the system returns a white screen with the following error 400: "Bad Request! Scripts are not allowed!"

![Filtro com erro 400](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Marketing & Merchandising/error-400-bad-request-when-accessing-filter-page-with-special-character-in-value_1.png)

## Simulation

To simulate the behavior:

1. Set a field value (product specification or SKU) with a special character (parentheses, for example) in any category;
2. In the catalog, select a product from the category and set it up with the specification value created in the first step. Save the product;
3. Wait for indexing;
4. Access the category directly from the web site;
5. On the side filter (SearchResult control), click the specification value (filter) configured with the special character;
6. Error 400: Bad Request! Scripts are not allowed!

## Workaround

To work around the problem, avoid using special characters in the product specification and/or SKU values.

