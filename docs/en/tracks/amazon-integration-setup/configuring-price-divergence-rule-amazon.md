---
title: 'Configuring Price Divergence rule'
id: 4iQ0d6wkLzCqhMXBKFWgI7
status: PUBLISHED
createdAt: 2022-01-04T19:43:43.162Z
updatedAt: 2022-01-05T15:47:12.676Z
publishedAt: 2022-01-05T15:47:12.676Z
firstPublishedAt: 2022-01-04T20:33:45.370Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-price-divergence-rule-amazon
locale: en
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugEN: amazon-integration-setup
---

When using integrations with marketplaces such as Amazon, sometimes there may be a difference between the price set by the seller and the one offered by the marketplace, resulting in orders with prices that are different than expected. This can result in orders with price divergence errors.

In the VTEX Admin, in **ORDERS > Orders management > Orders authorization**, you can configure the [Price Divergence rule](https://help.vtex.com/en/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) to manage orders with price divergence. Only users with the Super Admin (Owner) or OMS Full [role](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) can configure this feature, by following the instructions outlined in [Configuring Price Divergence rule](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

The Price Divergence rule is composed of one or more authorization rules, each corresponding to a percentage range of the order price. Authorization rules can be configured to automatically deny, automatically approve, or require manual approval of the order.

> ⚠️ Once the price divergence rule is created, it is applied to all marketplaces where you act as a seller. These can be VTEX marketplaces, external marketplaces, <a href= "https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-certified-connector-partner">certified connectors (partners)</a>, and other <a href= "https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex">native connectors</a> besides Amazon.

We recommend that you configure the Price Divergence rule before proceeding to the next step of configuring the Amazon integration. Not following this recommendation does not prevent the integration from being configured; however, orders with divergent prices are held until the Price Divergence rule is created. You can track them in the VTEX Admin by clicking on **MARKETPLACE > Integrations > Orders**.
