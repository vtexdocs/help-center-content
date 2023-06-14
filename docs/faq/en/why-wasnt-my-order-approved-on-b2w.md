---
title: 'Why wasn’t my order approved on B2W?'
id: frequentlyAskedQuestions_683
status: DRAFT
createdAt: 2017-04-27T22:30:01.602Z
updatedAt: 2022-02-04T17:42:00.824Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:27.287Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: why-wasnt-my-order-approved-on-b2w
locale: en
legacySlug: why-wasnt-my-order-approved-on-b2w
---

The approval of orders on B2W depends on all the SKUs associated with the order having positive inventories at the time of approval. In other words, an SKU associated with an order whose inventory is zero will prevent the order from being approved, since on B2W these orders will be allocated the status of **Indisponível**.

As this is a characteristic of the B2W marketplace, there is no configuration on VTEX that alters this behavior. The way to integrate orders in this scenario is to include the inventory in the SKUs associated with the order that is out of stock.

