---
title: 'SLA errors in marketplace integration orders'
id: X8lSfxT44OyxkxwvnRk1X
status: PUBLISHED
createdAt: 2021-08-02T22:55:49.181Z
updatedAt: 2023-03-29T23:48:42.116Z
publishedAt: 2023-03-29T23:48:42.116Z
firstPublishedAt: 2021-08-02T23:29:49.747Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: sla-errors-in-marketplace-integration-orders
locale: en
legacySlug: sla-errors-in-marketplace-integration-orders
subcategory: 5m1qqfnmfYKsO0KiOQC8Ky
---

When an order placed on a marketplace is not integrated with VTEX, an error message indicates the type of problem that has occurred. You can view the integration status of the order in your Admin, in **Marketplace > Connections > Orders**. To view the error message, click on the order.

The error message often mentions SLA, the acronym for Service Level Agreement, which is the service agreement signed between the VTEX store and the marketplace. SLA errors mean that something is preventing the delivery of the order to the end customer. 

To identify the problem, perform a [shipping simulation](https://help.vtex.com/en/tutorial/simulacao-de-frete). The Shipping Simulator tool allows you to check the delivery conditions of the product without actually creating an order.

Here are the most common problems that cause SLA errors:

- **Out of stock:** when one or more SKUs in the order are unavailable. For more information, see the article [Out-of-stock errors in marketplace integration orders](https://help.vtex.com/en/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP#).
- **Item not in collection or trade policy:** check if the SKU is marked correctly in the collection or trade policy defined for the marketplace. Learn more in the article [Associate a SKU to a trade policy](https://help.vtex.com/en/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).
- **Delivery zip code not covered by the shipping strategy:** when the delivery of the order to a given address is not included in your [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140?&utm_source=autocomplete).
- **Loading dock not associated with trade policy:** when [adding the dock](https://help.vtex.com/en/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW), you must link it with the trade policy defined for the marketplace.
- **Inactive SKU:** the SKU is not active, which prevents it from being integrated. Check the status of the item in your Admin, in _Catalog > Products and SKUs._

After resolving the error, the order must be manually reprocessed. In your Admin, go to **Marketplace > Connections > Orders** and click on the order with the error. Click on the **Actions** button and choose the **Reprocess** option.

>ℹ️ If the error persists, open a [VTEX support ticket](https://help.vtex.com/en/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM?locale=pt).

### Learn more

- [Out-of-stock errors in marketplace integration orders](https://help.vtex.com/en/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Shipping Simulator](https://help.vtex.com/en/tutorial/simulacao-de-frete)
- [Resolution of price divergence errors in marketplace integration orders](https://help.vtex.com/en/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
