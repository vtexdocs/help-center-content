---
title: 'Removal of URL parameters when a page does not exist'
id: EbKaj7Laz6IEooYS2OuYW
status: PUBLISHED
createdAt: 2018-12-17T21:26:03.577Z
updatedAt: 2022-12-22T20:44:59.730Z
publishedAt: 2022-12-22T20:44:59.730Z
firstPublishedAt: 2018-12-17T22:19:13.274Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: removal-of-url-parameters-when-a-page-does-not-exist
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Upon accessing an address with URL querystrings, the user will be redirected to a "404" or "emptysearch" page if the destination page doesn't exist. In such cases, the parameters in question are removed.

Mostly affects marketing tracking parameters.

## Simulation

Access one of the following pages, in a way that these do not exist on the site in question:

- www.site.com/inexistent-product/p?parameter=value&other=test
- www.site.com/inexistent-route/p?parameter=value&other=test

The destination will respectively be:

- www.site.com/System/404?ProductLinkNotFound=inexistent-product
- www.site.com/System/emptysearch?ft=inexistent-route

## Workaround

This scenario has no workaround.

