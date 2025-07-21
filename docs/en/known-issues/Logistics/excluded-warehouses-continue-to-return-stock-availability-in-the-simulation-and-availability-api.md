---
title: "Excluded warehouses continue to return stock availability in the simulation and availability API"
id: 71udTOdbpYYvVqhDIJcgHx
status: PUBLISHED
createdAt: 2025-06-18T20:20:49.195Z
updatedAt: 2025-06-18T20:20:49.794Z
publishedAt: 2025-06-18T20:20:49.794Z
firstPublishedAt: 2025-06-18T20:20:49.794Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: excluded-warehouses-continue-to-return-stock-availability-in-the-simulation-and-availability-api
locale: en
kiStatus: Backlog
internalReference: 1246900
---

## Summary



When a warehouse is deleted in the Logistics module, it can remain registered in the availability inventory base. This causes the stock availability of SKUs to still consider quantities from these warehouses that no longer exist, causing SKUs to become unavailable or display unrealistic quantities.
The situation occurs mainly when the warehouse deletion process involves a high volume of SKUs linked to it, which can generate a timeout and leave residues in the availability base even after removal in Logistics. The impact is felt in the simulation APIs and in the selection of sellers, generating inconsistencies for the merchant and the shopper, impacting the in-store shopping experience.


##

## Simulation




- Create a warehouse in the account and associate SKUs with this warehouse, assigning positive quantities to the stock.
- Delete the warehouse via the Logistics module.
- Execute a call to the simulation API.
- Observe that, in the response, the SKU returns availability from the deleted warehouse, or that the sum of the stocks includes values that are not in line with what exists in the valid warehouses. Using the route for listing active warehouses in the account, notice that the warehouse in question is no longer listed, but still appears in the availability/simulation return.
- The SKU may become unavailable for purchase because of this residual stock or show an unrealistic quantity in the stock endpoints.


##

## Workaround



There is no public workaround available or preventive action by the merchant. The treatment is exclusively backend and depends on the engineering team to carry out the cleaning on an availability basis.





