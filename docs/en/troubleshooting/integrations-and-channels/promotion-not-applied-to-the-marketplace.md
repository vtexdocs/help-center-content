---
title: 'Promotion not applied to the marketplace'
id: 2pxlVpzgThuw2wTEISRwA2
status: PUBLISHED
createdAt: 2024-08-15T11:38:33.808Z
updatedAt: 2025-08-14T22:05:41.032Z
publishedAt: 2025-08-14T22:05:41.032Z
firstPublishedAt: 2024-08-15T19:18:48.612Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: promotion-not-applied-to-the-marketplace
legacySlug: promotion-not-applied-to-the-marketplace
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
domainFilters:
  - Marketplace
  - Promotions
  - Integrations
symptomFilters:
  - Misconfiguration
---

Users may experience difficulties when configuring promotions for marketplaces due to incorrect settings in the sales channel or affiliate field. This document provides guidelines to ensure the promotion is configured and applied correctly.

## Solution
To solve the problem of promotions not being applied to marketplaces, review the [sales channel](#selecting-trade-policies) and the [affiliate selection](#selecting-affiliates).

### Selecting sales channels
[Sales channels](/en/docs/tutorials/creating-a-trade-policy) define rules and conditions for applying promotions in marketplaces. You should select the right sales channel to ensure the promotion will apply as expected. Below are the steps for configuring a sales channel promotion.

1. Create a [regular promotion](/en/docs/tracks/creating-regular-promotions).
2. In the **Sales channel** section, select the `Equal to` and **Delivered by me (other stores)** options.
3. Choose the desired sales channels associated with the marketplaces.
4. Click `Save`.

![Dados gerais promoção - EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/integrations-and-channels/promotion-not-applied-to-the-marketplace_1.png)

### Selecting affiliates
To ensure a promotion is applied correctly in a marketplace, select the desired affiliat The affiliate is the partner associated with the marketplace that makes the promotional products available. Below are the steps for correctly selecting an affiliate when configuring a promotion.

1. Create a [regular promotion](/en/docs/tracks/creating-regular-promotions).
2. Complete the **Affiliates** field with the name of the affiliate associated with the desired marketplace.

   ![condições para promoção - EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/integrations-and-channels/promotion-not-applied-to-the-marketplace_2.png)

3. In the **Sales channel** section, select the `Equal to` and **Delivered by me (other stores)** options.
4. Click `Save`.

> ℹ️ Make sure you haven't created any additional promotion filters, such as payment methods, cluster filters, or cart limitations.

Learn more in [Configuring promotions for marketplaces](/en/tutorial/configurando-promocao-para-marketplace/).
