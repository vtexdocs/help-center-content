---
title: 'PSE redirect does not happen when the user chooses to pay with Giftcard and PSE'
id: 7IAYArdAUuRd5XYCEJ7LPA
status: DRAFT
createdAt: 2022-05-17T14:53:16.834Z
updatedAt: 2022-05-18T14:43:09.896Z
publishedAt: 
firstPublishedAt: 2022-05-17T14:53:17.249Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: pse-redirect-does-not-happen-when-the-user-chooses-to-pay-with-giftcard-and-pse
locale: en
kiStatus: Backlog
internalReference: 580333
---

## Summary


When the user chooses to pay with the Payment methods Giftcard and PSE, if the value to be paid with PSE is lower than 40000, the PSE redirect doesn't happen.



## Simulation



1. Create a Gifticard on a store with PSE configured
2. Go to checkout by  buying an item the value is lower than 40000+giftcard amount
3. Use the Giftcard and choose to pay the remained value with PSE
4. Close the purchase
5. the PSE redirect will not happen



## Workaround


N/A

