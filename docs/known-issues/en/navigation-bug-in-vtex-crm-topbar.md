---
title: 'Navigation bug in VTEX CRM topbar'
id: svI7gnUQLuccauCkeyyoU
status: PUBLISHED
createdAt: 2019-01-11T16:10:39.024Z
updatedAt: 2022-12-22T20:48:47.993Z
publishedAt: 2022-12-22T20:48:47.993Z
firstPublishedAt: 2019-01-11T16:24:26.801Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: navigation-bug-in-vtex-crm-topbar
kiStatus: Backlog
internalReference: 
---

## Summary

This bug happens with multi-store accounts, or accounts that changed their name after the creation of MasterData.

The navigation between sub accounts in the topbar sometimes leads to an unexpected behavior and takes the user to the store instead of the relevant CRM. Other times it takes the user to an empty CRM.

This can be solved by manually entering the name of the sub account in the URL.

Example: https://www.{accountname}.vtexcrm.com.br

## Simulation

1. Enter VTEX CRM from your store;
2. Select one of the desired sub account options.

## Workaround

Manually adjust the URL in the browser so it correctly relates to the desired sub account.

E.g: https://www.{account}.vtex.com.br

It's extremely important to type the `https://`.

