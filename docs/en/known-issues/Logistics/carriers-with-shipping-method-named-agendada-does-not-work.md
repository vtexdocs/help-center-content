---
title: 'Carriers with Shipping Method named "Agendada" does not work'
id: 6tFzzGMkqU5lD06m2evOLm
status: PUBLISHED
createdAt: 2025-04-08T18:54:41.289Z
updatedAt: 2025-04-08T18:54:41.826Z
publishedAt: 2025-04-08T18:54:41.826Z
firstPublishedAt: 2025-04-08T18:54:41.826Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: carriers-with-shipping-method-named-agendada-does-not-work
locale: en
kiStatus: Backlog
internalReference: 1207733
---

## Summary



**This KI only occur to stores that use "Portuguese language". **

If the carrier's "Shipping Method" is named with something that has "Agendada", and this carrier does not use the function "Schedule delivery", Logistics understands that this carrier must have available windows, and if these windows are not found, the system cannot calculate the SLA, and the simulation return is empty. So, the carrier will not work!


##

## Simulation


You just need to name the "Shipping Method" with something that has "Agendada".


##

## Workaround


Just remove the word "Agendada", then it will work correctly.





