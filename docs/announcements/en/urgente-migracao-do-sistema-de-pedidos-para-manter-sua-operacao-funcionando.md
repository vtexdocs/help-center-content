---
title: "PRIORITY ALERT – Orders System Migration: In order to maintain the functioning of your operation, ensure that your integration is up-to-date"
id: 34eloUZ70DPYIcJkAevq32
status: PUBLISHED
createdAt: 2019-07-30T16:56:23.667Z
updatedAt: 2020-04-16T00:19:33.201Z
publishedAt: 2020-04-16T00:19:33.201Z
contentType: updates
productTeam: Post-purchase
author: authors_31
slug: urgente-migracao-do-sistema-de-pedidos-para-manter-sua-operacao-funcionando
legacySlug: urgente-migracao-do-sistema-de-pedidos-para-manter-sua-operacao-funcionando
announcementImageID: ""
announcementSynopsisEN: In order to maintain the functioning of your operation, ensure that your integration is up-to-date
---

On 13/06/19, [Feed V1 and V2 API discontinuation was announced](/announcements/orders-management-module-feed-v1-and-v2--4zoxe3FihrNs0yQ1g1JyG4) along with the mandatory migration to V3 of this service. This API is responsible for the orders integration process between VTEX and external systems, such as ERPs.

__The migration due date has been changed and stores that have not yet adapted to the new version have until August 12th to implement the integration__. After this date, it will no longer be possible to consume orders data using previous versions of this API, thus impacting your order delivery process.

<div class="alert alert-info">
No action is required from stores already using Feed API V3.
</div>

The discontinuation of this API's V1 and V2 will interrupt orders integration from services that use these versions. It is therefore necessary for your integration to be running V3 of this API for your orders delivery operation to continue functioning properly.

It's very important to implement this integration sooner rather than later to minimize risks to your operation. Refer to the following instructions and request to whom is responsible for your integration to undertake the necessary changes.

## What do you need to do?

First and foremost, you'll need to configure Feed V3 to consume data from the orders queue. Read our article on [how to configure Feed](/tutorial/feed-v3-orders-management--5qDml3cQypWDRTgw69s4C1).

For more on how the Feed works, read our article on [how the Orders Management Feed works](/tutorial/how-orders-management-module-feed-v3--5SzSKee2f666YCoWkm0eQC).
