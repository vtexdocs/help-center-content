---
title: 'The field "Administrator who approved the product (id)" does not change when the updating is done by webservice'
id: 5R6Jj0aglq0gUu2OakqgUw
status: PUBLISHED
createdAt: 2017-04-11T22:17:03.345Z
updatedAt: 2022-12-22T20:48:33.851Z
publishedAt: 2022-12-22T20:48:33.851Z
firstPublishedAt: 2017-04-11T22:24:05.649Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Web Service
slug: the-field-administrator-who-approved-the-product-id-does-not-change-when-the-updating-is-done-by-webservice
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When the product is modified by Web Service, the name of the user who effected the update is not recorded.

The platform maintains the name of the last user instead of overwiring the information on the Web Service.

## Simulation

Updating a product via Web Service.

## Workaround

There is no practical workaround. The alternative would be to access the products after the update by Webservice and save them again, thus leaving the last user registered.

