---
title: "[Shopee] Error when updating commercial policy in the integration card setup"
id: cYd6EPrLcpjZNK51ADKpz
status: PUBLISHED
createdAt: 2025-06-04T20:42:25.961Z
updatedAt: 2025-06-04T20:42:27.041Z
publishedAt: 2025-06-04T20:42:27.041Z
firstPublishedAt: 2025-06-04T20:42:27.041Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: shopee-error-when-updating-commercial-policy-in-the-integration-card-setup
locale: en
kiStatus: Backlog
internalReference: 1238883
---

## Summary


When changing the commercial policy of an already configured Shopee account, the items previously linked to the old policy remain active. There is no automatic process to deactivate those items or re-publish them under the new commercial policy, leading to catalog issues and order failures.


##

## Simulation



- Set up a Shopee account in VTEX using a commercial policy (e.g., Policy A).
- Publish SKUs as usual.
- Change the commercial policy to a new one (e.g., Policy B).
- Items previously linked to Policy A remain active and trigger errors in Bridge, such as:
["fields":0,"error":{"code":"ORDoo2","message":"The item {item description} is no longer available","exception":null},"operationId": {operationId number}"]


##

## Workaround


Set inventory to zero for all items tied to the old commercial policy.
Wait until this update is successfully processed by the marketplace.
Then, update the account with the new commercial policy and re-publish items





