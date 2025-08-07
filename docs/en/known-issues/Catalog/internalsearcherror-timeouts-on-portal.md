---
title: "InternalSearchError timeouts on Portal"
id: 6D6mdJ3zQypy1lcuht7WuU
status: PUBLISHED
createdAt: 2024-06-03T15:25:56.353Z
updatedAt: 2024-07-30T13:55:06.518Z
publishedAt: 2024-07-30T13:55:06.518Z
firstPublishedAt: 2024-06-03T15:25:57.378Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: internalsearcherror-timeouts-on-portal
locale: en
kiStatus: Backlog
internalReference: 1043003
---

## Summary


Currently, stores using the legacy Portal search can face, when using multiple filters on their store, such as collection filters on templates, can face random, intermittent timeouts that are often displayed as a "Something Went Wrong" error for customers.

This issue is, internally, a timeout, that is being analysed by the tech teams to have its time increased.


##

## Simulation


This error is highly intermittent and hard to consistently replicate. It's often more frequent in accounts using several collection filters in their templates, but there's no reliable way to replicate it.


##

## Workaround


While the timeouts are not further investigated and increased, reducing the amount of filters being used in searches and menus is recommended, yet not guaranteed to completely eliminate such timeouts, but significantly reduce them.





