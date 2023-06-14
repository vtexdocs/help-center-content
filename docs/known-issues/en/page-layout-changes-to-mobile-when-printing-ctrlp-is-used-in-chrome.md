---
title: 'Page layout changes to mobile when printing (ctrl+p) is used in Chrome'
id: 1mPBRf1IhLj27liWa040XG
status: PUBLISHED
createdAt: 2022-03-21T17:40:17.848Z
updatedAt: 2022-11-25T22:14:09.694Z
publishedAt: 2022-11-25T22:14:09.694Z
firstPublishedAt: 2022-03-21T17:40:18.209Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: page-layout-changes-to-mobile-when-printing-ctrlp-is-used-in-chrome
locale: en
kiStatus: No Fix
internalReference: 454680
---

## Summary

The page's layout changes to mobile version when printing (CTRL+P) is activated twice in Google Chrome Desktop.

## Simulation

In Google Chrome desktop, go to any page of the store and press CTRL+P, then cancel it, and CTRL+P again. Even if the printing is cancelled again, the page's layout remains as mobile until it is refreshed.

This problem doesn't happen in every store using Store Framework.

## Workaround

No known workaround, although some CSS manipulation with `@media print` might solve the issue. 

Since the behavior to reproduce this issue is very specific and unusual, this isn't very impactful for any store.

