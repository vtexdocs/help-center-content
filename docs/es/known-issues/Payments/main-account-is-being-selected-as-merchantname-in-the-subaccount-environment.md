---
title: "Main account is being selected as 'Merchant.Name' in the sub-account environment"
id: 51coXFBM2wtrJukH3oRESy
status: PUBLISHED
createdAt: 2023-03-29T20:54:19.877Z
updatedAt: 2023-03-29T20:54:20.327Z
publishedAt: 2023-03-29T20:54:20.327Z
firstPublishedAt: 2023-03-29T20:54:20.327Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: main-account-is-being-selected-as-merchantname-in-the-subaccount-environment
locale: en
kiStatus: Backlog
internalReference: 780767
---

## Summary


When a subaccount is processing transactions, the request body is sending the “merchantName” property with the main account’s name. In some cases, because of this behavior, the connector can’t authorize the transactions on their side, causing orders to be lost.


##

## Simulation


In an environment where main account/sub-account is configure, attempt to finish a transaction on the sub-account store.


##

## Workaround


N/A

