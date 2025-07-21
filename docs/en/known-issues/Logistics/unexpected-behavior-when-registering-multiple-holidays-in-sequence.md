---
title: "Unexpected behavior when registering multiple holidays in sequence"
id: 5UzQbnc6CUdY4sGSLSe4LG
status: PUBLISHED
createdAt: 2025-03-31T21:30:53.666Z
updatedAt: 2025-03-31T21:30:54.311Z
publishedAt: 2025-03-31T21:30:54.311Z
firstPublishedAt: 2025-03-31T21:30:54.311Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: unexpected-behavior-when-registering-multiple-holidays-in-sequence
locale: en
kiStatus: Backlog
internalReference: 1202478
---

## Summary


When registering multiple holidays in sequence, some unexpected behaviors will occur, as some previously registered holidays may be deleted and some new holidays may not be registered.


##

## Simulation


It can be easily reproduced, you just need to register some multiple holidays in sequence, equivalent to 10.


##

## Workaround


It will be necessary to space out the creation of holidays, defining an interval of at least 1 minute between registrations.





