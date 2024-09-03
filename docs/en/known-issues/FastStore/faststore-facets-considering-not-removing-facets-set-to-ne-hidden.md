---
title: 'Faststore facets considering not removing facets set to ne hidden'
id: 4EElvOEvMzcu52fhNOVJGM
status: PUBLISHED
createdAt: 2024-05-08T18:35:17.015Z
updatedAt: 2024-05-08T18:36:15.922Z
publishedAt: 2024-05-08T18:36:15.922Z
firstPublishedAt: 2024-05-08T18:35:18.742Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: faststore-facets-considering-not-removing-facets-set-to-ne-hidden
locale: en
kiStatus: Backlog
internalReference: 1029837
---

## Summary



The expected behavior in IS facets API is to not bring facets with hidden true, but, there are some exceptions for that, for example when the facet is selected in the query, the API brings the facet in the results with the hidden prop as true, and we are not considering this information


##

## Simulation



Filter for a query with the hidden facet, like for example:

https://storeframework.vtex.app/new-collection?productclusternames=new-collection&fuzzy=0&operator=and&facets=productclusternames%2Cfuzzy%2Coperator&sort=score_desc&page=0

In this case, productClusterNames is set as hidden but, since it's being filtered, it displays in the filter navigator


##

## Workaround


N/A




