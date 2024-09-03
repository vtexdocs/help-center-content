---
title: '​​Price Divergence rule'
id: 6RlFLhD1rIRRshl83KnCjW
status: PUBLISHED
createdAt: 2021-12-25T20:10:25.853Z
updatedAt: 2024-03-22T15:11:31.300Z
publishedAt: 2024-03-22T15:11:31.300Z
firstPublishedAt: 2021-12-25T21:05:20.600Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: price-divergence-rule
locale: en
legacySlug: price-divergence-rule
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

When a seller uses a marketplace to sell their products, sometimes there is a difference between the price configured on VTEX and the one offered by the marketplace, resulting in orders with prices that are different from the seller's expectations. This situation can occur in any type of marketplace: VTEX marketplaces, external marketplaces, [certified connectors (partners)](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-certified-connector-partner) and [native connectors](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex).

To optimize the processing of orders with price difference errors, you can use the Order authorization flow and [configure a Price Divergence rule](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe). In the VTEX Admin, go to **Store Settings > Orders > Order Authorization**, or type **Order Authorization** in the search bar at the top of the page.

>⚠️ Once the Price Divergence rule is created, it is applied to all marketplaces.

The Price Divergence rule is composed of one or more order authorization rules. Each authorization rule corresponds to a percentage range of the order price and can vary from 0% to 100%. You must associate one of three actions with each authorization rule:

- **Automatically authorize:** Orders with a price difference within the defined range are automatically integrated.
- **Automatically deny:** Orders with a price difference within the defined range are automatically rejected and are not integrated.
- **Create a task in VTEX DO for approval:** For price differences within the defined range, the order is integrated but needs to be [manually approved](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#approving-orders-manually) by an authorized user.

![price_divergence_rules_EN](https://images.ctfassets.net/alneenqid6w5/3eUHS2dcIUY5KiDshLpurc/813c44996850c4bd68a5ea4be1a92f41/price_divergence_rules_EN.png)

When the [Price Divergence rule configuration](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe) was not made, orders with price divergence errors are automatically approved. This applies to VTEX marketplaces, external marketplaces, and certified connectors (partners), but not to [native connectors](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex).

>⚠️ When a seller is integrated with a native connector, Amazon, but has not [configured a Price Divergence rule](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe), orders with price difference errors remain pending until the rule is created. You can track them in your VTEX Admin by clicking on **Marketplace > Connections > Orders**.

Once the Price Divergence rule is created, orders from integrations with native connectors that have a price difference will be displayed in [All Orders](https://help.vtex.com/en/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi) page.

We recommend that the seller creates the Price Divergence rule before configuring the integration with a native connector. Not following this recommendation does not prevent the integration from being configured, however, orders with divergent values are held until the [Price Divergence rule is configured](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

## User approval

On the VTEX platform, [roles](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) ensure security in the management of your operation by restricting employee access to necessary actions within the platform. Please refer to the article [Best practices for secure user management](https://help.vtex.com/en/faq/metodos-de-seguranca-para-criacao-de-perfis-de-usuarios-em-uma-loja--15YDwC9jGgqWi3rvcDaiGM).

To create a Price Divergence rule, the user must have a Super Admin (Owner) or OMS Full role. The same applies to users responsible for [manually approving orders](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#approving-orders-manually) with price differences.

## Managing orders with price divergence

You can track orders integrated using the Price Divergence rule in the VTEX Admin by clicking on **Orders > [All Orders](https://help.vtex.com/en/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi)**.

>ℹ️ It is important to regularly track orders in the **Orders** module. Orders that need to be manually approved remain in pending status until being approved by an authorized user.

### Learn more

- [Configuring Price Divergence rule](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe)
- [Orders Management page structure](https://help.vtex.com/en/tutorial/estrutura-da-pagina-do-oms--2dDZmUUFXWeyQ4s2gqiY0A)
- [Marketplace strategies at VTEX](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
