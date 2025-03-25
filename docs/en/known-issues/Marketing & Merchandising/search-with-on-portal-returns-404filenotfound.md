---
title: 'Search with . on portal returns 404?FileNotFound'
id: 3Gv7Jv3fjyCwASI8MwMgmQ
status: PUBLISHED
createdAt: 2018-09-14T18:09:52.414Z
updatedAt: 2022-12-22T20:45:39.140Z
publishedAt: 2022-12-22T20:45:39.140Z
firstPublishedAt: 2018-09-14T18:25:22.860Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: search-with-on-portal-returns-404filenotfound
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The error happens when filtering any product using dot. The fetched key is placed in the URL and the portal understands it as a file name.

## Simulation

1. Open a VTEX website
2. Search for a term that does not exist (`chavebuscada`)
3. Notice that the error is `{url}/Sistema/buscavazia?ft={chavebuscada}`
4. Now search for a term that contains. (`chave.buscada`)
5. Notice that the error changes to `{url}/Sistema/404?FileNotFound={chave.buscada}`

## Workaround

Remove the search point with custom javascript

