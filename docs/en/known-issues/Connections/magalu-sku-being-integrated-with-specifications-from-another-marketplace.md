---
title: "[Magalu] Sku being integrated with specifications from another marketplace"
id: 4AYsfMTB2HVmp2PnOG2plY
status: PUBLISHED
createdAt: 2022-10-31T19:29:16.911Z
updatedAt: 2024-03-19T20:33:58.929Z
publishedAt: 2024-03-19T20:33:58.929Z
firstPublishedAt: 2022-10-31T19:29:18.080Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magalu-sku-being-integrated-with-specifications-from-another-marketplace
locale: en
kiStatus: Fixed
internalReference: 689151
---

## Summary


Some skus are being integrated with specifications from another Marketplace.



## Simulation


For example, when integrating our catalog in magalu, we send everything that has specification, when magalu in its internal mechanism understands that there is an error it inactivates the ad.

Example specification being sent to Magalu

 ![](https://vtexhelp.zendesk.com/attachments/token/22vLwpFtB3XtuJPNFA2aDpqvf/?name=image.png)


## Workaround


Manually the client can delete the specification, but our integration in a re-index overwrites the change made

