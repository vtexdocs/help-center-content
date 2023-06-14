---
title: ' "Position" of the trade policy depends on the page it is shown on the admin interface'
id: 3kcSD7J5uuHYGdhBcg1lMa
status: PUBLISHED
createdAt: 2022-10-31T20:28:08.565Z
updatedAt: 2022-11-30T14:47:44.304Z
publishedAt: 2022-11-30T14:47:44.304Z
firstPublishedAt: 2022-10-31T20:28:09.333Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: position-of-the-trade-policy-depends-on-the-page-it-is-shown-on-the-admin-interface
locale: en
kiStatus: Backlog
internalReference: 286470
---

## Summary


A client with more than 20 trade policies ends up having more than one trade policy per position. This is critical because binding configurations rely on the position number, so there should be only one trade policy per position.

We currently have:
page 1 - positions 1 to 20; page 2 - positions 1 to 20 and so on.

We should have:
page 1 - positions 1 to 20; page 2 - positions 21 to 40 and so on.


##

## Simulation


Create 21+ trade policies to an account, it will be displayed on 2 pages on the admin interface.
Check the field "Position" of the 1st trade policy of the 1st page of the interface
Check the field "Position" of the 1st trade policy of the 2nd page of the interface
The two positions are the same.

API to check:

    GET 'http://.vtexcommercestable.com.br/api/catalog_system/pvt/saleschannel/list'




##

## Workaround


Unknown.

