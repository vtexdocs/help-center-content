---
title: 'How Order authorization works'
id: 3MBK6CmKHAuUjMBieDU0pn
status: PUBLISHED
createdAt: 2019-03-25T17:18:05.295Z
updatedAt: 2024-07-08T17:06:56.254Z
publishedAt: 2024-07-08T17:06:56.254Z
firstPublishedAt: 2019-03-25T17:24:44.319Z
contentType: tutorial
productTeam: Post-purchase
author: authors_41
slugEN: how-order-authorization-works
locale: en
legacySlug: Learn-how-to-create-flows-for-order-release-or-approval
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

In the VTEX Admin, in **Store Settings > Orders > Order Authorization**, you can control and approve orders that have a price divergence in your store.

![print_autorizacao_pedidos_EN](https://images.ctfassets.net/alneenqid6w5/3OSC6hxQchdd8SoWYwRI6l/4fc80cda8d50acff5ed646a00dc5f01f/print_autorizacao_pedidos_EN.png)

Price divergence errors may occur in two main scenarios:

- [Manual Discounts](https://help.vtex.com/en/tutorial/como-funciona-a-autorizacao-de-pedidos--3MBK6CmKHAuUjMBieDU0pn#manual-discounts)
- [Price Divergence](https://help.vtex.com/en/tutorial/como-funciona-a-autorizacao-de-pedidos--3MBK6CmKHAuUjMBieDU0pn#price-divergence)

## Manual Discounts

These are the orders originated in your store that have manual discounts applied by telesales operators, for example. 

In the case of manual discounts, **Order Authorization** checks all items in the order by checking the discount for each item individually. The possible effects of this analysis are to deny, accept or create an authorization task. 

If one or more products receive more than the maximum discount allowed, the entire order is canceled.

## Price Divergence

When the price defined by the seller is different from the price offered by the marketplace, orders may not be processed correctly. On VTEX, the **Order Authorization** flow allows you to control and automatically approve these orders with the [Price Divergence rule](https://help.vtex.com/en/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW). 

### Learn more

- [Price Divergence rule](https://help.vtex.com/en/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW)
- [Configuring Price Divergence rule](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe)
- [Marketplace strategies at VTEX](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
