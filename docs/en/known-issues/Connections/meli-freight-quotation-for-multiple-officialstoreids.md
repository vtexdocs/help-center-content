---
title: "MELI Freight quotation for multiple officialStoreIDs"
id: 4KdPYtRbDdsBrn2k0dz7oc
status: PUBLISHED
createdAt: 2024-02-07T11:19:11.169Z
updatedAt: 2024-06-19T11:43:56.663Z
publishedAt: 2024-06-19T11:43:56.663Z
firstPublishedAt: 2024-02-07T11:19:12.139Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-freight-quotation-for-multiple-officialstoreids
locale: en
kiStatus: Fixed
internalReference: 978358
---

## Summary


Currently we have an issue with MELI integration regarding the Freight quotation API from MELI, this is applied only for sellers using multiple officialStoreIDs in MELI, but using only one account in VTEX using the same sellerID in MELI


##

## Simulation



If this scenario is applied the freight quotation from MELI will return error, and MELI will redirect the seller to freight spreadsheet instead of using the freight API.


##

## Workaround


keep the freight spreadsheet updated to avoid inconsistencies beteween VTEX and MELI





