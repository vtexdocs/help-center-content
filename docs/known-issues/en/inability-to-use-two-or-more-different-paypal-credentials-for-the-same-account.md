---
title: 'Inability to use two or more different PayPal credentials for the same account.'
id: 3cVh2SbvToH8yGOOYcWgDB
status: PUBLISHED
createdAt: 2022-03-03T18:39:24.442Z
updatedAt: 2022-11-25T22:05:45.390Z
publishedAt: 2022-11-25T22:05:45.390Z
firstPublishedAt: 2022-03-03T18:39:25.004Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: inability-to-use-two-or-more-different-paypal-credentials-for-the-same-account
kiStatus: Backlog
internalReference: 459704
---

## Summary


When the customer registers two different affiliations in the same account using PayPalPlus, the platform does not update the cache for when there is a change in a payment rule, that is, it is possible to use only one credential per account.




## Simulation


Register two different affiliations with different credentials and create rules considering these two affiliations.
Close two purchases, each with one of the rules, and in the transaction payload you can see that despite entering the correct rules, the merchant_id (identification of the account in which the money will fall) is the same.



## Workaround


There is no workaround

