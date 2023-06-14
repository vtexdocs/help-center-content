---
title: 'Specification filters with character restriction'
id: 3V0CMV9PMQmm2QuSaoqCcO
status: PUBLISHED
createdAt: 2018-09-20T16:28:09.186Z
updatedAt: 2022-12-22T20:43:10.467Z
publishedAt: 2022-12-22T20:43:10.467Z
firstPublishedAt: 2018-09-20T18:41:36.479Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: specification-filters-with-character-restriction
kiStatus: Backlog
internalReference: 
---

## Summary

Specification filters generate an URL that is not recognized by the portal and result in a 404 error.

## Simulation

Create a specification in your store using the following characters: `+`, `-`, `/`, `=` and `*`. When filtering products on your website by the specification created, notice that it returns a 404 error.

## Workaround

Remove the following characters from the specifications: `+`, `-`, `/`, `=` and `*`.

