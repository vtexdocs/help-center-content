---
title: 'APIs Who Saw Also Saw, Who Saw Also Bought, Who Bought Also Bought not always working as expected'
id: KawgHAWqUlCvCGCAaHxDj
status: PUBLISHED
createdAt: 2022-12-07T12:32:13.613Z
updatedAt: 2022-12-07T12:33:18.595Z
publishedAt: 2022-12-07T12:33:18.595Z
firstPublishedAt: 2022-12-07T12:32:14.076Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: apis-who-saw-also-saw-who-saw-also-bought-who-bought-also-bought-not-always-working-as-expected
kiStatus: Backlog
internalReference: 712015
---

## Summary



These 3 kinds of crossSelling APIs:  Who Saw Also Saw, Who Saw Also Bought and Who Bought Also Bought not always bring the results of the products that should be recommended. Sometimes the results are random products from the same category as the original product.


##

## Simulation



1. Visit two products from different categories on the site; (or visit one and buy another / or buy the two of them separately)
2. Use one of the APIs above and verify the response result;
3. Check that the products returned are do not contain the other one you visited, instead are just other products from the same category as the first one.


##

## Workaround


There is no workaround.

