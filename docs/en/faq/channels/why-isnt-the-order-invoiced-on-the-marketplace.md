---
title: 'Why isn’t the order invoiced on the marketplace?'
id: frequentlyAskedQuestions_715
status: PUBLISHED
createdAt: 2017-04-27T22:28:23.898Z
updatedAt: 2020-05-11T15:48:16.337Z
publishedAt: 2020-05-11T15:48:16.337Z
firstPublishedAt: 2017-04-27T23:02:33.970Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-isnt-the-order-invoiced-on-the-marketplace
locale: en
legacySlug: why-isnt-the-order-invoiced-on-the-marketplace
---

This scenario arises when the tax invoice and the order invoice are entered on VTEX, but the previous status prevails on the marketplace.

## Check the Bridge

As in any other phase of the purchase, anything can happen during integration. However, this will always be logged on the bridge to help you understand and find out how to correct it.

[Find out how to analyze integration errors on the Bridge.](/en/docs/tutorials/checking-integrations-in-bridge)

## Enter the access key with the tax invoice

To invoice orders on CNova, you have to provide the Tax Invoice Access Key at the time you enter the tax invoice on the order. Otherwise, you will not be able to enter tracking data on VTEX for CNova. 

As a result, we will be able to reach the “Invoiced” status only on VTEX, and updating will have to be done manually directly at the back office of CNova.

The Tax Invoice Access Key is an auxiliary instrument for querying the electronic Tax Invoice (NF-e), enabling the holder of this document to confirm that it actually exists. The corresponding field name is Invoice Key:

[]![ChaveDeAcesso](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/channels/why-isnt-the-order-invoiced-on-the-marketplace_1.png)

__Remember!__ This information is created when the tax invoice is generated in the ERP. If you have one, request it.

This value can be entered manually by the admin or by the [invoice notification API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice), in the **invoiceKey** field.
