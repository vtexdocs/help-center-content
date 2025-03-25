---
title: "Textlink created with ' ' on Marketplace upon approvals - Reoccurence"
id: 2afynQ9MwaHPMPWyhx80Tp
status: PUBLISHED
createdAt: 2023-04-24T19:36:10.185Z
updatedAt: 2023-07-13T15:25:43.450Z
publishedAt: 2023-07-13T15:25:43.450Z
firstPublishedAt: 2023-04-24T19:36:10.701Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: textlink-created-with-on-marketplace-upon-approvals-reoccurence
locale: en
kiStatus: Fixed
internalReference: 795900
---

## Summary


In some scenarios, when approving a product on a Marketplace, on the Received SKUs application, the request fails to input data on the catalog and upon retrying, the textlink fields fills the "-" characters with " ", changing the desired behaviour.

The SKU is sent back for approval on the Received Skus module, but it isn't possible to approve it again, since there'll be already an product with an equal textlink.



##

## Simulation


1) It usually occurs with an received skus generic error upon attempting to approve (this doest not happen for every case).

2) A product will be created on the marketplace's catalog with the faulty textlinks.

3) The given product will still be showing on the received skus, pending for approval.

4) Attempting to approve it once again will display an error.


##

## Workaround


Manually/API updating the textlinks of the product under this scenario.




