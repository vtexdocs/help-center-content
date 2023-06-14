---
title: "Error when toggling subaccounts on MasterData's CRM topbar"
id: nvnf7smhUW2uy0saI6I2w
status: PUBLISHED
createdAt: 2018-12-05T22:53:38.886Z
updatedAt: 2022-12-22T20:45:47.761Z
publishedAt: 2022-12-22T20:45:47.761Z
firstPublishedAt: 2018-12-05T23:03:43.875Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: error-when-toggling-subaccounts-on-masterdatas-crm-topbar
kiStatus: Backlog
internalReference: 
---

## Summary

Sometimes when accessing MasterData's CRM topbar, clicking on a different subaccount will take the user to the account's homepage instead.

## Simulation

1.  Go to https://{{account}}.vtexcrm.com.br
2.  Select a different subaccount on the topbar

## Workaround

Manually change the URL to point towards the desired account.
Don't forget to add `https://` to the begining of the URL

