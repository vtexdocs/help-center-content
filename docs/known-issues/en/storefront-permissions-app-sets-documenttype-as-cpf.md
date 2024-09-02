---
title: 'Storefront permissions app sets "documentType" as "cpf"'
id: 1vd0gFWrP50UZacQ0QBKP8
status: PUBLISHED
createdAt: 2023-04-27T15:19:53.064Z
updatedAt: 2023-05-23T18:01:51.986Z
publishedAt: 2023-05-23T18:01:51.986Z
firstPublishedAt: 2023-04-27T15:19:53.612Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: storefront-permissions-app-sets-documenttype-as-cpf
locale: en
kiStatus: Fixed
internalReference: 798330
---

## Summary


The storefront permissions app always sets the field "clientProfileData.documentType" as "cpf" in the orderForm. This may cause the transaction to be denied by the provider.


##

## Simulation



- Install the B2B Suite;
- Configure an organization;
- Access the website and place an order.


##

## Workaround


Use the snippet below to replace the "documentType" from your country in the orderForm

    vtexjs.checkout .getOrderForm() .then(function(orderForm) { var clientProfileData = orderForm.clientProfileData clientProfileData.documentType = 'add here the key for' return vtexjs.checkout.sendAttachment( "clientProfileData", clientProfileData ) }) .done(function(orderForm){})





