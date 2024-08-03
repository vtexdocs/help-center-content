---
title: "Collections doesn't work in custom search results pages in B2B Suite"
id: 2O2UmKrMJHimDunDRbLBe
status: PUBLISHED
createdAt: 2024-06-03T22:13:10.775Z
updatedAt: 2024-06-21T14:57:27.454Z
publishedAt: 2024-06-21T14:57:27.454Z
firstPublishedAt: 2024-06-03T22:13:11.591Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: collections-doesnt-work-in-custom-search-results-pages-in-b2b-suite
locale: en
kiStatus: Backlog
internalReference: 1043470
---

## Summary


Custom search results pages set up with collection id don't work when a different product Collections are assigned to an organization.

The expected behavior when using Collections is to define the assortment of products the organization users will see in the storefront, but since B2B Organizations also use `productClusterId` in the search, when accessing custom search results pages set up with a different `productClusterId`, the search results show products from both collections.


##

## Simulation



- Set up a product Collections to an organization;
- Create a custom search results page with a different collection;
- Log in and access the custom search result page; products from both collections are shown.


##

## Workaround


N/A




