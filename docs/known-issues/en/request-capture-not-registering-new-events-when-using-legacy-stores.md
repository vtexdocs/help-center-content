---
title: 'Request Capture not Registering new Events when using Legacy Stores'
id: 5at40vZVpqL3Xansc726uv
status: PUBLISHED
createdAt: 2022-06-23T21:38:07.187Z
updatedAt: 2022-11-25T22:09:52.067Z
publishedAt: 2022-11-25T22:09:52.067Z
firstPublishedAt: 2022-06-23T21:38:07.517Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: request-capture-not-registering-new-events-when-using-legacy-stores
kiStatus: Backlog
internalReference: 604254
---

## Summary


Currently, when using portal VTEX stores (non-VTEX IO stores) the request capture application is not registering events specifically for the product page visits.






## Simulation



1. using a portal VTEX store, access a product page when logged in
2. check if the rc application is functional on your store (detailed here: https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740#my-trigger-settings-are-correct-but-the-test-email-address-is-not-receiving-emails-what-must-be-checked)


3. Check the property 'productVisitedTag' of the related document on your Master Data application, it will have remained null. It should have been populated with data.






## Workaround


This usability works for VTEX IO stores.

