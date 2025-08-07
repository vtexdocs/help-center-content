---
title: "Badly formatted text for search titles and breadcrumbs in specific scenarios with merchandising rules"
id: 3dQskVnI1sbF6jgsopjUUt
status: PUBLISHED
createdAt: 2024-03-13T20:52:33.781Z
updatedAt: 2024-03-13T20:52:34.698Z
publishedAt: 2024-03-13T20:52:34.698Z
firstPublishedAt: 2024-03-13T20:52:34.698Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: badly-formatted-text-for-search-titles-and-breadcrumbs-in-specific-scenarios-with-merchandising-rules
locale: en
kiStatus: Backlog
internalReference: 999476
---

## Summary


Some search result pages hide the applied filters – as they are already part of the page itself, so they are set as "initialAttributes" – to focus on the additional filters that can be applied. In these scenarios, values for the page title and breadcrumbs are basically defined by the first product from the page.

Merchandising rules that put products from different contexts in the first positions of a page affect this string. When the "initialAttributes" from the page don't match any of the attributes from the first product, as a fallback, these texts are defined by the slug – a simplified text without capitalization, diacritics, or any other special characters.

Be mindful that this type of merchandising rule can be a bad practice.


##

## Simulation



- Consider a category with the tree as "Food > Fruits > Apples and Pears", which translates to "Maçãs e Peras" in Portuguese (so we have diacritics/accents for a better example);
- Add a product from a different category tree through a Merchandising Rule, as a slicer from the category "Kitchen > Accessories > Slicers" to the category "Food > Fruits";
- As the first product in the "Apples and Pears" category will be this slicer, the page title and breadcrumbs will be presented as "Macas E Peras".


##

## Workaround


N/A

