---
title: 'System considering seller 1 for rule sellers limit'
id: 1bUax0hSCVrnFPZ4g1VWOa
status: PUBLISHED
createdAt: 2022-04-20T20:43:57.392Z
updatedAt: 2022-11-25T21:52:50.788Z
publishedAt: 2022-11-25T21:52:50.788Z
firstPublishedAt: 2022-04-20T20:43:57.844Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: system-considering-seller-1-for-rule-sellers-limit
kiStatus: Backlog
internalReference: 564614
---

## Summary


Today, in a scenario where we have an account that uses an architecture in the MOI (marketplace/multilevel seller) model, the system considers seller 1 as part of the calculation to limit the number of sellers in the cart that can be configured using the maxNumberOfWhiteLabelSellers key



## Simulation


To replicate the scenario it is necessary to have configured the account with the MOI flow;

In the level seller, the limitation on the number of sellers in the cart must be configured;

They must have in the cart items whose deliveries are made by the first seller and by the whitelabel seller linked to this same seller;

When filling in the data and trying to close the order, an error will be displayed linked to the limitation of the number of sellers in the cart



## Workaround


N/A

