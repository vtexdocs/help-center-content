---
title: 'pageView is triggered twice when accessing My Account'
id: 2jV0cIVxNUhb170tBgBQo6
status: PUBLISHED
createdAt: 2023-07-03T16:33:09.076Z
updatedAt: 2023-07-03T16:33:09.652Z
publishedAt: 2023-07-03T16:33:09.652Z
firstPublishedAt: 2023-07-03T16:33:09.652Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: pageview-is-triggered-twice-when-accessing-my-account
locale: en
kiStatus: Backlog
internalReference: 854480
---

## Summary


When accessing the My Account, the pageView event is triggered twice, duplicating the data on Analytics.


##

## Simulation



- Configure the app Google Tag Manager,
- Access the My Account;
- Open the browser's Developer Tools and type "dataLayer" on Console; there will be two pageView events.


##

## Workaround


N/A



