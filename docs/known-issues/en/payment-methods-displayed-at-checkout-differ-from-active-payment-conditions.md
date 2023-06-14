---
title: 'Payment methods displayed at checkout differ from active payment conditions'
id: 1cpVNspn5G6je4EZKzvCF9
status: PUBLISHED
createdAt: 2022-09-27T16:32:55.806Z
updatedAt: 2023-04-10T15:14:18.718Z
publishedAt: 2023-04-10T15:14:18.718Z
firstPublishedAt: 2023-04-10T15:11:01.389Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: payment-methods-displayed-at-checkout-differ-from-active-payment-conditions
locale: en
kiStatus: Backlog
internalReference: 666469
---

## Summary


This KI is manifested in two ways at checkout:

1. Payment Methods **do not** appear on the checkout page, even when the associated payment condition is active for more than 10 min.
2. Payment Methods **remain** on the checkout page even when the associated payment condition is disabled for more than 10 min.

This is an intermittent issue and there is no evidence of how to reproduce this behavior. There is a greater incidence on customized payment methods.


##

## Simulation


N/A


##

## Workaround



1. Resaving the rule.
2. Reindexing all payment systems at checkout via API.

