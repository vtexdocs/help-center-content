---
title: 'Troubleshooting price divergence errors in marketplace orders'
id: 6MbmPX4SKyRkcTJxVhRna8
status: PUBLISHED
createdAt: 2021-08-03T21:56:44.320Z
updatedAt: 2023-03-29T21:22:43.831Z
publishedAt: 2023-03-29T21:22:43.831Z
firstPublishedAt: 2021-08-03T22:16:58.511Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: troubleshooting-price-divergence-errors-in-marketplace-orders
legacySlug: resolution-of-price-divergence-errors-in-marketplace-integration-orders
locale: en
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

In the VTEX Admin, in **Marketplace > Connections > Orders**, the price divergence error message on the interface is as follows:

> `The order price in the marketplace is different from the price determined by VTEX. To automatically integrate orders with price divergence in the OMS, go to Orders > Orders management > Order authorization and configure a Price Divergence rule.`

When the price set by a seller is different from the price offered by the marketplace, orders placed on marketplaces may not be processed correctly. In VTEX, the Orders Authorization flow allows the control and automatic approval of these orders, based on the configuration that the seller makes of a [Price Divergence rule](/en/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW).

To activate the Orders Authorization flow for native connectors, you need to [configure a Price Divergence rule](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe). Only users with Super Admin (Owner) or OMS Full [roles](/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) can do this.

> ℹ️ Once you have [configured the Price Divergence rule](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe), it will apply to all marketplaces where you are a seller.

For VTEX marketplaces, external marketplaces and certified connectors (partners), as long as the Price Divergence rule has not been created, orders with price divergence error are automatically approved.

For [native connectors](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex), while the seller does not configure the Price Divergence rule, orders with price divergence are retained. You can track them in your VTEX Admin by clicking on **Marketplace > Connections > Orders**.

### Learn more

- [Why was the order closed with the wrong price?](/en/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado--frequentlyAskedQuestions_708)
- [Out-of-stock errors in marketplace integration orders](/en/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [SLA errors in marketplace integration orders](/en/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X)
