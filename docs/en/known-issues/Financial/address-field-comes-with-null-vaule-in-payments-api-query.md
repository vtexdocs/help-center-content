---
title: "Address\" field comes with \"null\" vaule in Payment's API query"
id: 7oEEc24umACsOoy4Ceso2W
status: PUBLISHED
createdAt: 2018-01-11T16:33:01.231Z
updatedAt: 2022-12-22T20:45:31.741Z
publishedAt: 2022-12-22T20:45:31.741Z
firstPublishedAt: 2018-01-11T16:44:36.751Z
contentType: knownIssue
productTeam: Financial
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: address-field-comes-with-null-vaule-in-payments-api-query
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The `address` field comes with `null` value when we query through the Payment's API.

## Simulation

The problem is intermittent. However, just close a purchase and check in the Payments query API if the `address` field was filled in correctly, or if it returned the null information again.

API for tests:
`https://{AccountName}.vtexpayments.com.br/api/pvt/transactions/{TransactionId}/payments`

## Workaround

Currently there's no workaround for this problem.

