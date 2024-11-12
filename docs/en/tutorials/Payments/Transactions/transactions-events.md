---
title: 'Transaction events'
id: 2xf5Axyz6EecGmcOYcMI60
status: ARCHIVED
createdAt: 2017-07-26T10:33:21.740Z
updatedAt: 2020-03-05T22:15:46.622Z
publishedAt: 
firstPublishedAt: 2017-07-27T20:01:18.994Z
contentType: tutorial
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: transactions-events
locale: en
legacySlug: transactions-events
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Each transaction entered from the checkout, completed or not, with or without errors of any kind, will be finally registered in **Payments**, where the detailed log of the interaction between the Payment Gateway and VTEX is displayed, indicating all the statuses it's had: authorization, captures, rejections, anti-fraud status, retries, system errors, etc.

To access this information, you must:

1. Enter **Payments**

2. Under **Transactions**, look for the payment you want. [Read more about search options here](/en/tutorial/searching-for-transactions-on-pci-gateway)

3. Click on the transaction and access the details

Below are examples of where to find the most common information to analyze the scenarios that happen in Payments.

## Authorizing the transaction

In this event, we see that VTEX began the authorization process with the payment gateway and sent the response that the operation may begin:

![transação-autorizando](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)


## Transaction authorized and approved

After an authorization request, the gateway will authorize/pre-authorize the transaction in case of success in the flow. With its authorization, the transaction status will become _approved_ and the order flow will be able to continue:

![transação-autorizada-aprovada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

If the authorization doesn't happen due to an issue from outside the flow, the details will be logged in the timeline, according to the information returned by the payment gateway.

## Anti-Fraud Analysis

In the order flow, you can send the payment to an anti-fraud (directly integrated into VTEX) in order to have a risk analysis. Once you have requested an analysis, the order will have a status indicating the start of the analysis and the return of the anti-fraud, along with the result:

![transação -antifraude](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

If the analysis doesn't happen due to an issue from outside the flow, the details will be logged in the timeline, according to the information returned by the payment gateway.

## Transaction Capture

When the transaction pre-authorization mode is used, after having performed the order analysis and operations, the invoicing of the order and the capture of the final amount will be required, which may be equal, lower or higher than the value initially pre-authorized.

When the capture process is started, the _Settlement_ event is displayed, indicating that the capture was requested to the payment gateway:

![transação-captura-solicitação](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

While the capture has been started successfully, the _Settling_ event will be displayed. And at the end of the capture, the _Settled_ event will be displayed:

![transação-captura-iniciada-capturada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

If the capture doesn't happen due to an issue from outside the flow, the details will be logged in the timeline, according to the information returned by the payment gateway.

## Transaction completed

Upon completion of the transaction, VTEX will indicate it as shown in the image below:

![transação-concluida](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

## Transaction scheduled for automatic capture

Generally, affiliations allow you to set a capture date to force a capture and avoid the waiting time, which could lead to a failure in the payment or the order.

Here you can see the automatic capture schedule date:

![captura-auto-agendada pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)
