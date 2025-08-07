---
title: "[Amazon] Carrier selection"
id: 7jaH0Pl8gfyQjZTXGPdk6A
status: PUBLISHED
createdAt: 2025-02-27T12:51:31.732Z
updatedAt: 2025-02-27T12:51:32.614Z
publishedAt: 2025-02-27T12:51:32.614Z
firstPublishedAt: 2025-02-27T12:51:32.614Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-carrier-selection
locale: en
kiStatus: Backlog
internalReference: 1186908
---

## Summary


Divergence in the type of delivery method selected
This happens because the integration, when not requested from the USA, actually sends null to the simulation.


##

## Simulation




1. The simulation returns a list of SLAs.
2. The integration filters to use the lowest value SLA.
3. Reservation is created.
4. When placing order, the reservation SLA is used, that is, the one with the lowest value.

We understand that there is a divergence between the buyer's choice when placing the order and how the order enters the OMS.


##

## Workaround


N/A





