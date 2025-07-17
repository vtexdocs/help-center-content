---
title: "[Seller invite] Route not found after account creation"
id: esM1LVJaR3ZiJaozfJJtf
status: PUBLISHED
createdAt: 2025-01-22T16:10:13.405Z
updatedAt: 2025-01-22T16:10:14.208Z
publishedAt: 2025-01-22T16:10:14.208Z
firstPublishedAt: 2025-01-22T16:10:14.208Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: seller-invite-route-not-found-after-account-creation
locale: en
kiStatus: Backlog
internalReference: 1167493
---

## Summary


In this process, we generate a VTEX account for these sellers, which is the Seller Portal. Account creation is a self-service process, that is, the seller himself provides the data through a form and, when submitting, we create the account. Once the account is created, the seller is immediately redirected to their admin.


##

## Simulation




- go to Seller Invite flow on: https://VTEX.myvtex.com/admin/seller-invite/
- register a new Seller Portal account.
- finish registration of a Seller Portal account

**ERROR**

    {"code":"NotFound","message":"Route test21nov2569.myvtex.com/_v/segment/admin-login/v1/login?returnUrl=/admin&email=andrei.basoc+test21nov2@vtex.com not found","source":"Vtex.Kube.Router","requestId":"f19875630eac47a588b2e32250292f4a"}


 ![](https://vtexhelp.zendesk.com/attachments/token/aoT6ZHSmrHyO7Te9aKKN1pRCQ/?name=image.png)


##

## Workaround


There is a delay in provisioning the account, as, after some time, this error normalizes, that is, the account becomes accessible to the seller.





