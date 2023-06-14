---
title: Gift Card hub is adding an extra backslash ("/") when calling providers.
id: 2ZstMKKGUbrdXGuhS2Rr1f
status: PUBLISHED
createdAt: 2022-09-30T21:07:47.856Z
updatedAt: 2022-11-25T22:04:08.181Z
publishedAt: 2022-11-25T22:04:08.181Z
firstPublishedAt: 2022-09-30T21:07:48.985Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: gift-card-hub-is-adding-an-extra-backslash-when-calling-providers
kiStatus: Backlog
internalReference: 669575
---

## Summary


Our Gift Card hub API is adding an extra backslash to the request when calling providers. This is caused by the way we convert the serviceUrl and concatenate it with the URL provided by the connector.



## Simulation


Register a new provider in /giftcardproviders and perform a request in one of the APIs, e.g. /giftcards/_serach. The hub will call the provider and add a "/" like https://baseUrl**//**giftcard/_search.



## Workaround


It's necessary to handle this issue on the provider side.

