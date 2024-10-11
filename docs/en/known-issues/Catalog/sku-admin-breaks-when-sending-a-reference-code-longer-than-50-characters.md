---
title: 'SKU admin breaks when sending a reference code longer than 50 characters'
id: 3AhyVsOpwkRUEHT77Wcc1A
status: PUBLISHED
createdAt: 2023-08-21T17:52:27.931Z
updatedAt: 2023-08-21T17:52:28.799Z
publishedAt: 2023-08-21T17:52:28.799Z
firstPublishedAt: 2023-08-21T17:52:28.799Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-admin-breaks-when-sending-a-reference-code-longer-than-50-characters
locale: en
kiStatus: Backlog
internalReference: 884789
---

## Summary


It is expected that the user will be able to change the SKU's Reference code using the admin. However, when a value longer than 50 characters is passed in, the admin crashes, displaying a "something went wrong" message.


##

## Simulation



- Go to the admin of an SKU: `/admin/Site/SkuForm.aspx?IdSku=`
- Go to the **Reference code** field and put a value with more than 50 characters like:

    ABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEW

- Click on salve
- A "something went wrong" message will be displayed on the front.


##

## Workaround


Send no more than 50 characters on the **Reference code** field of an SKU




