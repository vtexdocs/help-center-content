---
title: Repeated UTM updates are not saved in the cookie
id: 7CVw4A7scMoKag4UsScSkM
status: PUBLISHED
createdAt: 2018-06-28T22:14:17.988Z
updatedAt: 2022-12-22T20:45:23.945Z
publishedAt: 2022-12-22T20:45:23.945Z
firstPublishedAt: 2018-06-28T22:16:35.648Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: repeated-utm-updates-are-not-saved-in-the-cookie
kiStatus: Backlog
internalReference: 
---

## Summary

When updating more than twice the value of the same UTM, this value is not stored in the cookie and is not relevant to the purchase.

## Simulation

1. Access an environment with utm_source=1. The cookie IPS will be updated to parceiro=1.
2. Then, access the environment with utm_source=2. The cookie will be updated to parceiro=2.
3. Then, if you login with utm_source=3, the cookie will remain as parceiro=2, but with updated validity.

## Workaround

There is currently no workaround for this scenario.


