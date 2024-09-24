---
title: 'Indexer: Catalog performance improvements'
id: 2Nfc5iqFqd7YOgevFmgkXP
status: PUBLISHED
createdAt: 2020-08-04T19:45:49.927Z
updatedAt: 2020-08-06T00:28:05.467Z
publishedAt: 2020-08-06T00:28:05.467Z
contentType: updates
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: catalog-indexer-performance-improvements
locale: en
legacySlug: indexador-melhorias-de-desempenho-para-o-catalogo
announcementImageID: ''
announcementSynopsisEN: 'To improve the Catalog experience, we have enhanced the performance of the Indexer.'
---

New improvements to the performance of the Catalog Indexer.

To improve the Catalog experience, we have enhanced the performance of the Indexer by avoiding delays when replicating items during indexing.

We have also created a push flow to the main queue. If the indexing of an item encounters an error, the item will be sent to a push queue for re-indexing and not impact the flow of the main queue. An item can undergo this process up to five times.

In addition, because of the recent crisis with the catalog indexing system, we have developed new monitoring methods to help predict crises.


## What changes?

These improvements will make the experience of creating and changing products in the catalog faster and more fluid.

The indexing process is now more efficient and reliable. It can be monitored on a dashboard. We have also implemented alarms for Catalog API and Admin errors, and for item replication delays during indexing.


