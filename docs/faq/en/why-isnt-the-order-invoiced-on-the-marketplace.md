---
title: Why isn’t the order invoiced on the marketplace?
id: frequentlyAskedQuestions_715
status: PUBLISHED
createdAt: 2017-04-27T22:28:23.898Z
updatedAt: 2020-05-11T15:48:16.337Z
publishedAt: 2020-05-11T15:48:16.337Z
firstPublishedAt: 2017-04-27T23:02:33.970Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: why-isnt-the-order-invoiced-on-the-marketplace
legacySlug: why-isnt-the-order-invoiced-on-the-marketplace
---

This scenario arises when the tax invoice and the order invoice are entered on VTEX, but the previous status prevails on the marketplace.

## Check the Bridge

As in any other phase of the purchase, anything can happen during integration. However, this will always be logged on the bridge to help you understand and find out how to correct it.

[Find out how to analyze integration errors on the Bridge.](/en/tutorial/checking-integrations-in-bridge)

## Enter the access key with the tax invoice

To invoice orders on CNova, you have to provide the Tax Invoice Access Key at the time you enter the tax invoice on the order. Otherwise, you will not be able to ebter tracking data on VTEX for CNova. 

As a result, we will be able to reach the “faturado” status only on VTEX, and updating will have to be done manually directly at the backoffice of Nova.com.

The Tax Invoice Access Key is an auxiliary instrument for querying the electronic Tax Invoice (NF-e), enabling the holder of this document to confirm that it actually exists, as well as its field name Invoice Key:

[]![ChaveDeAcesso](//images.contentful.com/alneenqid6w5/447ljGvDxuW0mmQoAumGOg/f1f246378401f4c9a56655974300ab04/ChaveDeAcesso-1.png)

__Remember!__ This information item is created when the Tax Invoice is generated and works on ERP. If you have one, request it.

This value can be entered manually by the admin or by the [invoice notification API](https://developers.vtex.com/reference/invoice#invoicenotification), in the **invoiceKey** field.
