---
title: Why is a payment stuck at Authorizing status?
id: 3hMw16ZijKm6QmSSY0KOGk
status: PUBLISHED
createdAt: 2019-01-24T20:30:45.163Z
updatedAt: 2019-12-31T14:25:09.791Z
publishedAt: 2019-12-31T14:25:09.791Z
firstPublishedAt: 2019-01-24T20:30:45.528Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slug: payment-stuck-at-authorizing-status
legacySlug: 
---

__Authorizing__ status is the one where Payments is trying to communicate with the systems of acquirers or other gateways. In this status, we await the response concerning the __payment approval__.

It may occur that some of the partners' systems are experiencing some instability as we try to communicate with them. To resolve this problem, VTEX Payments´ has an automatic __retry__ feature.

This feature has been developed to address the cases where systems participating in the flow are __experiencing an outage__. This way, Payments preserves the payment information and waits to retry. This feature allows the payment __not to be lost__ in case of instability of third party systems.

Once the status of the partner system has been normalized, Payments sends the payment information and the approval flow can move on normally.
