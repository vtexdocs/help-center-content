---
title: 'Transaction events'
id: 2xf5Axyz6EecGmcOYcMI60
status: DRAFT
createdAt: 2017-07-26T10:33:21.740Z
updatedAt: 2020-03-05T22:15:46.622Z
publishedAt: 
firstPublishedAt: 2017-07-27T20:01:18.994Z
contentType: tutorial
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
slug: transactions-events
locale: en
legacySlug: transactions-events
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Each transaction entered from the checkout, completed or not, with or without errors of any kind, will be finally registered in **Payments**, where the detailed log of the interaction between the Payment Gateway and VTEX is displayed, indicating all the statuses it's had: authorization, captures, rejections, anti-fraud status, retries, system errors, etc.

To access this information, you must:

1. Enter **Payments**

2. Under **Transactions**, look for the payment you want. [Read more about search options here](/en/tutorial/searching-for-transactions-on-pci-gateway)

3. Click on the transaction and access the details

Below are examples of where to find the most common information to analyze the scenarios that happen in Payments.

## Authorizing the transaction

In this event, we see that VTEX began the authorization process with the payment gateway and sent the response that the operation may begin:

![transação-autorizando](//images.contentful.com/alneenqid6w5/2czvz4AZkECkCoC2CCmOME/92b9272bc3cf7302b3f51a69010591bf/transaccion-autorizada-aprobada.png)


## Transaction authorized and approved

After an authorization request, the gateway will authorize/pre-authorize the transaction in case of success in the flow. With its authorization, the transaction status will become _approved_ and the order flow will be able to continue:

![transação-autorizada-aprovada](//images.contentful.com/alneenqid6w5/2czvz4AZkECkCoC2CCmOME/92b9272bc3cf7302b3f51a69010591bf/transaccion-autorizada-aprobada.png)

If the authorization doesn't happen due to an issue from outside the flow, the details will be logged in the timeline, according to the information returned by the payment gateway.

## Anti-Fraud Analysis

In the order flow, you can send the payment to an anti-fraud (directly integrated into VTEX) in order to have a risk analysis. Once you have requested an analysis, the order will have a status indicating the start of the analysis and the return of the anti-fraud, along with the result:

![transação -antifraude](//images.contentful.com/alneenqid6w5/3MjNaFOEJyiumaUyO2owSa/84130c11335612c4d982c016cc160616/transaccion-antifraude.png)

If the analysis doesn't happen due to an issue from outside the flow, the details will be logged in the timeline, according to the information returned by the payment gateway.

## Transaction Capture

When the transaction pre-authorization mode is used, after having performed the order analysis and operations, the invoicing of the order and the capture of the final amount will be required, which may be equal, lower or higher than the value initially pre-authorized.

When the capture process is started, the _Settlement_ event is displayed, indicating that the capture was requested to the payment gateway:

![transação-captura-solicitação](//images.contentful.com/alneenqid6w5/4ZnegfgNcA4MQsgMuQaAsE/478d66d4b763730762637cc75a1aaea4/transaccion-captura-solicitud.png)

While the capture has been started successfully, the _Settling_ event will be displayed. And at the end of the capture, the _Settled_ event will be displayed:

![transação-captura-iniciada-capturada](//images.contentful.com/alneenqid6w5/2Z2fPSYG5WK0YqSCuWGAQi/42f03171a702ada307bd85b21614757f/transaccion-captura-iniciada-capturada.png)

If the capture doesn't happen due to an issue from outside the flow, the details will be logged in the timeline, according to the information returned by the payment gateway.

## Transaction completed

Upon completion of the transaction, VTEX will indicate it as shown in the image below:

![transação-concluida](//images.contentful.com/alneenqid6w5/68PjN2ChyMWqYQ4Owm8Yk6/0a440ea3cf6e5190b7b03e72d6a7e7e8/transaccion-finalizada.png)

## Transaction scheduled for automatic capture

Generally, affiliations allow you to set a capture date to force a capture and avoid the waiting time, which could lead to a failure in the payment or the order.

Here you can see the automatic capture schedule date:

![captura-auto-agendada pt](https://images.ctfassets.net/alneenqid6w5/6rg3IZhX9eGegqeUUQCEgQ/cc229f8dc0916dced5e7288ea279abec/transa____o_programada_cap_auto_pt.png)
