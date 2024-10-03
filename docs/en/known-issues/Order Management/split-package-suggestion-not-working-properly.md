---
title: 'Split Package suggestion not working properly'
id: 1amgn9hWwc6i2nLx1U3wDC
status: ARCHIVED
createdAt: 2022-09-13T02:01:52.651Z
updatedAt: 2022-12-21T15:01:43.876Z
publishedAt: 
firstPublishedAt: 2022-09-13T02:01:53.252Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: split-package-suggestion-not-working-properly
locale: en
kiStatus: Backlog
internalReference: 656810
---

## Summary


The Split Package suggestion is not working properly, when you finish the purchase the UI suggests the split packages in cases of different docks or differents sizes and different shipping strategies.
Nowadays the UI is just splinting the packages of cases with different (Shipping Methods), even in the logistcsinfo has differents delivery channels and different docks.



## Simulation


Make an order with more then one item, and these items needs each one a different delivery channel  but with the same Shipping Method. The UI will not suggest the split of packages because the "selectedSla" is like the most significant variable, ignoring the dockids for examaple.



## Workaround


The way to avoid this is changing the delivey method of Shipping Strategies.

PS.: This is not a properly workaround, because includes different behavior on checkout.

