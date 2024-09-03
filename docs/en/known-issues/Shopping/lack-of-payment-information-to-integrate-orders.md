---
title: 'Lack of payment information to integrate orders (when there are retries with the connector)'
id: 5WMBV2GRuo2mqmyCkKmwsG
status: PUBLISHED
createdAt: 2018-03-19T13:30:56.334Z
updatedAt: 2022-12-22T15:07:53.227Z
publishedAt: 2022-12-22T15:07:53.227Z
firstPublishedAt: 2018-03-19T13:43:48.205Z
contentType: knownIssue
productTeam: Shopping
author: authors_41
tag: Checkout,Payments
slug: lack-of-payment-information-to-integrate-orders
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

In cases where payment is not approved directly at the closing of the purchase, but only after a few retries by the connector, the connector data saved on the Checkout side is not complete, thus making some integrations impossible.

This data is only updated in Checkout by calling the completeOrder method (which does not necessarily happen when payment is approved) and in capture.

## Simulation

The ERP contests the lack of information. Example: acquirer, authorizationcode
Open the disputed Payments order
Notice that there have been retries in the approvals in the Payments timeline logs

## Workaround

Perform the following query: https://documenter.getpostman.com/view/322855/pci/Hs3y#d7bc5f1e-a39b-834c-04dc-824a778edb42
GET Payment Details
https://{{accountName}}.vtexpayments.com.br/api/pvt/transactions/{{transactionId}}/payments/{{paymentId}}

