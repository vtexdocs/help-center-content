---
title: 'URL's redirecionando para BuscaVazia'
id: 1ldn0vS1KKmHmvniHfr7lp
status: PUBLISHED
createdAt: 2023-03-29T20:28:46.379Z
updatedAt: 2023-05-18T14:46:36.067Z
publishedAt: 2023-05-18T14:46:36.067Z
firstPublishedAt: 2023-03-29T20:28:47.278Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: urls-redirecionando-para-buscavazia
kiStatus: Fixed
internalReference: 322251
---

## Summary


Some URL's are redirecting to an EmptySearch response.

There are scenarios where when we perform a search on the platform, this does not bring the result through a FullText search. This scenario likely occurs after moving category trees.






##

## Simulation


This is a tough scenario to reproduce, moving several categories over the store's category tree and then trying to, on the storefront, access the pages, will often lead to this empty search response.






##

## Workaround


Registering a redirect on the platform for a similar term and thus not displaying the empty search result.

