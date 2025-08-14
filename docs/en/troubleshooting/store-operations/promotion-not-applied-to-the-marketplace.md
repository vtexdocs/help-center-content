---
title: 'Promotion not applied to the marketplace'
id: 2pxlVpzgThuw2wTEISRwA2
status: PUBLISHED
createdAt: 2024-08-15T11:38:33.808Z
updatedAt: 2024-11-08T19:26:57.952Z
publishedAt: 2024-11-08T19:26:57.952Z
firstPublishedAt: 2024-08-15T19:18:48.612Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: promotion-not-applied-to-the-marketplace
legacySlug: promotion-not-applied-to-the-marketplace
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Promotions
  - Marketplace
  - Trade policy
  - Affiliate
---

Users may experience difficulties when configuring promotions for marketplaces due to incorrect settings in the trade policy or affiliate field. This document provides guidelines to ensure the promotion is configured and applied correctly.

## Solution
To solve the problem of promotions not being applied to marketplaces, review the [trade policy](#selecting-trade-policies) and the [affiliate selection](#selecting-affiliates).

### Selecting trade policies
[Trade policies](https://help.vtex.com/en/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) define rules and conditions for applying promotions in marketplaces. You should select the right trade policy to ensure the promotion will apply as expected. Below are the steps for configuring a trade policy promotion.

1. Create a [regular promotion](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI).
2. In the **Trade policy** section, select the `Equal to` and **Delivered by me (other stores)** options.
3. Choose the desired trade policies associated with the marketplaces.
4. Click `Save`.

![Dados gerais promoção - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/promotion-not-applied-to-the-marketplace_1.png)

### Selecting affiliates
To ensure a promotion is applied correctly in a marketplace, select the desired affiliat The affiliate is the partner associated with the marketplace that makes the promotional products available. Below are the steps for correctly selecting an affiliate when configuring a promotion.

<ol>
  <li>Create a [regular promotion](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI).</li>
  <li>Complete the **Affiliates** field with the name of the affiliate associated with the desired marketplace.</li>
</ol>

![condições para promoção - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/promotion-not-applied-to-the-marketplace_2.png)

<ol start="3">
  <li>In the **Trade policy** section, select the `Equal to` and **Delivered by me (other stores)** options.</li>
  <li>Click `Save`.</li>
</ol>

> ℹ️ Make sure you haven't created any additional promotion filters, such as payment methods, cluster filters, or cart limitations.

Learn more in [Configuring promotions for marketplaces](https://help.vtex.com/en/tutorial/configurando-promocao-para-marketplace/).
