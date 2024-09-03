---
title: 'Catalog translations not reflecting on the frontend'
id: 4c6Qzdn6NQfHhEN5U76WOi
status: PUBLISHED
createdAt: 2023-07-13T19:43:10.669Z
updatedAt: 2023-07-13T19:43:11.858Z
publishedAt: 2023-07-13T19:43:11.858Z
firstPublishedAt: 2023-07-13T19:43:11.858Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: catalog-translations-not-reflecting-on-the-frontend
locale: en
kiStatus: Backlog
internalReference: 861892
---

## Summary


When the merchant performs an action on the Messages app in order to have some product data translated on the frontend, this action is not being actually reflected.


##

## Simulation



1. Make a change on the messages app;
2. Check on the indexInfo if the field GenerateAndSaveTranslationsDocument is set as 'false'
3. Do not reindex the product;
4. Check that the change did not reflected on the translated website.


##

## Workaround


In order to force the translations to appear is necessary to reindex the product. One of the following actions should do the trick:

- Change the name;
- Change the keywords;
- Change the Text;
- Change the category;
- Change the brand;
- Change the Active flag.





