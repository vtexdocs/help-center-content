---
title: 'Why are my products out of stock on the marketplace?'
id: frequentlyAskedQuestions_693
status: PUBLISHED
createdAt: 2017-04-27T22:29:36.839Z
updatedAt: 2023-03-22T21:11:13.467Z
publishedAt: 2023-03-22T21:11:13.467Z
firstPublishedAt: 2017-04-27T23:02:32.909Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-are-my-products-out-of-stock-on-the-marketplace
locale: en
legacySlug: why-are-my-products-out-of-stock-on-the-marketplace
---

If the marketplace uses a sales policy not used by another marketplace or by the main stores, then the logistics must be configured for this new sales policy.

This is done in the dock configurations, where the sales policy must be associated in the **Canal de vendas** field. Also check whether the dock is associated with at least one inventory and at least one shipper.

After the configurations, it is necessary to index all products in the base, so that integration takes place.

1. With the sponsor user, access the link `{{ACCOUNTNAME}}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`;
2. Click on the button **Reindexar Base**.

Remember! You can monitor the status of the indexation and the status of the integration of the inventories. To do this, access the [indexation report](/en/tutorial/utilizar-o-relatorio-de-indexação) and the [Integrations module](/en/tutorial/bridge/).

___ WARNING: If the sales channel is configured with a collection, it is necessary to verify that the item belongs to the collection. Otherwise, no item information will be updated on the partner.___

___ WARNING: If the store does not use collection in the sales channel and the configuration is defined specifically in the product, it is necessary to verify if the product is set for sale in the desired channel. Otherwise, no item information will be updated on the partner.___
