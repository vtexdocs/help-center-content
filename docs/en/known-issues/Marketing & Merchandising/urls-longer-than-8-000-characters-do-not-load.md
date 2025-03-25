---
title: 'URLs longer than 8,000 characters do not load'
id: 3tZpUf9X428GQNCaIa24hX
status: PUBLISHED
createdAt: 2021-07-26T13:08:22.992Z
updatedAt: 2022-12-22T20:52:51.184Z
publishedAt: 2022-12-22T20:52:51.184Z
firstPublishedAt: 2021-07-26T13:13:10.775Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
tag: Portal (CMS)
slugEN: urls-longer-than-8-000-characters-do-not-load
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

If you try to access any URL that exceeds 8,000 characters through the Portal, a **Response 50x** error occurs.

This is because the [maximum URL length](http://net-informations.com/q/mis/len.html) supported by some browsers is 2,000 characters. The maximum URL length varies depending on the browser, but we recommend keeping URLs under 2,000 characters to avoid this issue.

Since Portal filters append query strings to the URL, pages with many filters applied, incorrect filtering options, and repeating several parameters will probably exceed character limits. For instance, this issue usually occurs when the store uses `specificationIDs` as filters.

## Simulation

1. Access a category or department page in your store that offers the option to select search filters.
2. Apply the filters you want. Notice that filters are appended to the URL in query strings, so the URL length increases as more filters are selected. If the browser does not support the number of characters in the URL, the page will not load, and an error message will appear.

## Workaround

When configuring your store layout, use pages with more specific or fewer filters to shorten URLs.

