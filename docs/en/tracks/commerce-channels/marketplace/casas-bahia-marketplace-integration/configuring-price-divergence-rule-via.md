---
title: 'Configuring Price Divergence rule'
id: 6MeJhODLMCnYwUCe18QjzP
status: PUBLISHED
createdAt: 2022-01-05T16:01:03.231Z
updatedAt: 2024-09-13T19:20:57.040Z
publishedAt: 2024-09-13T19:20:57.040Z
firstPublishedAt: 2022-01-05T16:04:18.518Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-price-divergence-rule-via
locale: en
trackId: 3E9XylGaJ2wqwISGyw4GuY
trackSlugEN: casas-bahia-marketplace-integration
order: 5
---

When using integrations with marketplaces such as Via, sometimes there may be a difference between the price set by the seller and the one offered by the marketplace, resulting in orders with prices that are different than expected. This can result in orders with price divergence errors.

In the VTEX Admin, in **ORDERS > Orders management > Orders authorization**, you can configure the [Price Divergence rule](/en/docs/tutorials/price-divergence-rule) to manage orders with price divergence. Only users with the Super Admin (Owner) or OMS Full [role](/en/docs/tutorials/roles) can configure this feature, by following the instructions outlined in [Configuring Price Divergence rule](/en/docs/tutorials/configuring-price-divergence-rule).

The Price Divergence rule is composed of one or more authorization rules, each corresponding to a percentage range of the order price. Authorization rules can be configured to automatically deny, automatically approve, or require manual approval of the order.

> ⚠️ Once the price divergence rule is created, it is applied to all marketplaces where you act as a seller. These can be VTEX marketplaces, external marketplaces, [certified connectors (partners)](/en/docs/tutorials/marketplace-strategies-at-vtex#integrating-with-a-certified-connector-partner), and other [native connectors](/en/docs/tutorials/marketplace-strategies-at-vtex#integrating-with-a-native-connector-vtex) besides Via.

We recommend that you configure the Price Divergence rule before proceeding to the next step of configuring the Via integration. Not following this recommendation does not prevent the integration from being configured; however, orders with divergent prices are held until the Price Divergence rule is created. You can track them in the VTEX Admin by clicking on **MARKETPLACE > Integrations > Orders**.
