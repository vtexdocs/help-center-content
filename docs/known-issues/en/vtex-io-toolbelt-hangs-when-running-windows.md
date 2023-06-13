---
title: VTEX IO Toolbelt hangs when running Windows
id: 5gWrgOvFZXEoDOJFMrqGoa
status: DRAFT
createdAt: 2019-02-06T16:15:59.916Z
updatedAt: 2020-03-13T21:25:23.935Z
publishedAt: 
firstPublishedAt: 2019-02-06T16:18:51.184Z
contentType: knownIssue
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
tag: VTEX IO
slug: vtex-io-toolbelt-hangs-when-running-windows
kiStatus: Open
internalReference: 
---

## Summary

VTEX IO toolbelt hangs after authenticating when using Windows OS.  The problem can be traced to Toolbelt's  line 108.

## Simulation

Run `vtex link` and login normally.  The toolbelt should stop responding.

## Workaround

The development team is currently implementing a solution.
Meanwhile, you can continue development using a different operating system (OSX, Linux) or downgrading to Node V9.

