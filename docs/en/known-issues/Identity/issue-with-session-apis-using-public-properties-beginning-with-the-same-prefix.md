---
title: 'Issue with session APIs using public properties beginning with the same prefix'
id: RAoSKg2hwwiC6L7wFPyNv
status: PUBLISHED
createdAt: 2023-08-21T20:00:45.403Z
updatedAt: 2023-08-21T20:11:44.751Z
publishedAt: 2023-08-21T20:11:44.751Z
firstPublishedAt: 2023-08-21T20:00:46.132Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: issue-with-session-apis-using-public-properties-beginning-with-the-same-prefix
locale: en
kiStatus: Backlog
internalReference: 885011
---

## Summary


The session API is generating some inconsistencies. The engineering team has identified the bug, the bug is related with properties beginning with the same word.


##

## Simulation


If you make a POST sending 2 public values with the same prefix, the API only receives one. If you try again, making the same POST sending the same 2 values, the API receives both.


##

## Workaround


n/a





