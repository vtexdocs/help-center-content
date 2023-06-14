---
title: 'Master Data trigger custom UTMs do not reflect accordingly'
id: 5IUv6xx8MpUBMxJaUDUzN7
status: PUBLISHED
createdAt: 2019-06-10T22:34:10.000Z
updatedAt: 2022-12-22T20:45:28.543Z
publishedAt: 2022-12-22T20:45:28.543Z
firstPublishedAt: 2019-06-10T22:37:05.187Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: master-data-trigger-custom-utms-do-not-reflect-accordingly
kiStatus: Backlog
internalReference: 
---

## Summary

During the email trigger creation process, the user is able to set a custom UTM. Master Data will instead always use VTEXCEM as the UTM as opposed to the one set by the end user.

## Simulation

1. Create a trigger
2. Set the UTM to CEM
3. Abandon a cart
4. Notice that the email uses the UTM VTEXCEM instead of CEM

## Workaround

There is no workaround for this scenario.

