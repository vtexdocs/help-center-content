---
title: "Catalog translations not reflecting on the frontend"
id: 4c6Qzdn6NQfHhEN5U76WOi
status: PUBLISHED
createdAt: 2023-07-13T19:43:10.669Z
updatedAt: 2025-05-30T18:25:13.598Z
publishedAt: 2025-05-30T18:25:13.598Z
firstPublishedAt: 2023-07-13T19:43:11.858Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-translations-not-reflecting-on-the-frontend
locale: en
kiStatus: Backlog
internalReference: 861892
---

## Summary


When the merchant performs an action on the Messages app in order to have some product data translated on the frontend, this action is not actually reflected in the storefront.


##

## Simulation



1. Make a change on the Messages app;
2. Notice on the `IndexedInfo` that the field `GenerateAndSaveTranslationsDocument` is set as `false`;
3. Do not reindex the product;
4. Check that the change did not reflect on the translated website.


##

## Workaround


In order to force the translations reindex for a product, use the following API request:

    curl --request POST 'https://.vtexcommercestable.com.br/api/notificator/changenotification//translation' \--header 'VtexIdclientAutCookie: '





