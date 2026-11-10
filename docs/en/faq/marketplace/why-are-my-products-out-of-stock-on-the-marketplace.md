---
title: 'Why are my products out of stock on the marketplace?'
excerpt: "The marketplace sales channel needs its own dock, warehouse, and carrier setup. After that, reindex the catalog so stock is sent."
id: frequentlyAskedQuestions_693
status: PUBLISHED
createdAt: 2017-04-27T22:29:36.839Z
updatedAt: 2023-03-22T21:11:13.467Z
publishedAt: 2023-03-22T21:11:13.467Z
firstPublishedAt: 2017-04-27T23:02:32.909Z
contentType: frequentlyAskedQuestion
productTeam: Marketplace
author: authors_3
slugEN: why-are-my-products-out-of-stock-on-the-marketplace
locale: en
legacySlug: why-are-my-products-out-of-stock-on-the-marketplace
---

If the marketplace uses a sales channel that is not shared with another marketplace or with the main store, configure logistics for that sales channel.

In the [loading dock](/en/docs/tutorials/loading-dock) settings, select the sales channel in the **Sales Channel** field. Also confirm that the dock is associated with at least one warehouse and one carrier.

After you save these settings, index the catalog so stock is sent in the integration.

1. As an administrator, open `https://{{accountName}}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`.
2. Click **Reindex database** (`Reindexar Base`).

You can monitor indexing and inventory integration in the [Index Report](/en/docs/tutorials/how-to-use-the-index-report) and in [Integrations](/en/docs/tutorials/checking-integrations-in-bridge).

> ⚠️ If the sales channel uses a collection, confirm that the item belongs to that collection. Otherwise, the partner will not receive item updates.

> ⚠️ If the sales channel does not use a collection and the setting is on the product, confirm that the product is enabled for that sales channel. Otherwise, the partner will not receive item updates.
