---
title: "[Mercado Livre] [Bridge] Bridge isn't logging some error messages"
id: 3KmdcY6hlLQx5h1FgKHAbS
status: PUBLISHED
createdAt: 2024-06-21T12:38:31.025Z
updatedAt: 2024-06-26T11:07:40.994Z
publishedAt: 2024-06-26T11:07:40.994Z
firstPublishedAt: 2024-06-21T12:38:31.845Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-bridge-bridge-isnt-logging-some-error-messages
locale: en
kiStatus: Backlog
internalReference: 1053742
---

## Summary


Error in the update flow sku isn't being logged into the bridge

**Marketplace:** Mercado Livre
**Root Cause:** Admin > Bridge > Product

**Important:** doesn't happen with all skus;


##

## Simulation


Admin > Marketplace > Products > Amazon

 ![](https://vtexhelp.zendesk.com/attachments/token/3MxTLEnmPv9lgG7UE8iUEd1Ft/?name=image.png)


##

## Workaround


In some cases, reprocessing the sku on the bridge resolve the problem.





