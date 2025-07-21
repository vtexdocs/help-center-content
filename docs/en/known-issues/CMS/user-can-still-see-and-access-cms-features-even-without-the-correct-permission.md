---
title: "User can still see and access CMS features even without the correct permission"
id: n2BmrCyzXD04sysczRuyt
status: PUBLISHED
createdAt: 2024-06-07T12:22:10.494Z
updatedAt: 2024-06-07T12:22:11.466Z
publishedAt: 2024-06-07T12:22:11.466Z
firstPublishedAt: 2024-06-07T12:22:11.466Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: user-can-still-see-and-access-cms-features-even-without-the-correct-permission
locale: en
kiStatus: Backlog
internalReference: 1046263
---

## Summary


If the user doesn't have any of the CMS permissions the user shouldn't be able to access or even see the CMS modules. But it is not happening.


##

## Simulation


Try accessing the CMS modules using a user that doesn't have the following LM permissions:

      CMS:

- See CMS menu on the top-bar
- Settings

GraphQL:
- CMS GraphQL API

The user will still be able to access and see the resources (but not edit).


##

## Workaround


N/A





