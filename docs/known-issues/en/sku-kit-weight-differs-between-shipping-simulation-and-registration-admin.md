---
title: 'SKU KIT weight differs between shipping simulation and registration (admin)'
id: 7gnJ2q0nc36nSLlgK576z0
status: DRAFT
createdAt: 2022-06-01T13:47:34.814Z
updatedAt: 2022-06-06T14:14:32.868Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: sku-kit-weight-differs-between-shipping-simulation-and-registration-admin
kiStatus: Backlog
internalReference: 389784
---

## Summary


A SKU KIT should weigh the sum total of its components. When a KIT is being created, the system should increment the weight of each component to the weight of the KIT, however, this is only happening when the KIT (Parent) is edited and updated. The main impact is seen in the shipping simulation since the KIT often appears as having a much heavier weight than in reality. This happens every time a Component KIT is updated, the SKU KIT weight is not updated.




## Simulation


To simulate, manually create a SKU KIT through admin. This article describes each step needed when registering a KIT: Kit Registration

###



## Workaround


To overcome this behavior, as soon as you notice this divergence, access the SKU KIT (Parent) through admin and click on the save button (either by applying changes or not). The same process can be done by spreadsheet. After this step, wait a few moment for the indexation to finish.

