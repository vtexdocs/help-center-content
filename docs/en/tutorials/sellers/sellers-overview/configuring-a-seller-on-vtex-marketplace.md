---
title: 'Configuring a seller on VTEX marketplace'
id: 6g045OkRSjNpqhkExbQRlP
status: PUBLISHED
createdAt: 2022-05-11T16:49:11.747Z
updatedAt: 2023-04-17T21:46:38.715Z
publishedAt: 2023-04-17T21:46:38.715Z
firstPublishedAt: 2022-05-11T18:35:14.080Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: configuring-a-seller-on-vtex-marketplace
legacySlug: configuring-a-seller-on-vtex-marketplace
locale: en
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

The architecture of a VTEX store allows it to act both as a marketplace and as a seller.  The marketplace is the environment where products are sold and the seller is the inventory owner, also responsible for delivering orders.

This article shows how to configure your store as a VTEX seller and start selling on a VTEX marketplace. To do so, you have to:

- [Define the trade policy](#defining-the-trade-policy)
- [Create an affiliate ID](#creating-an-affiliate-id)
- [Reindex the database](#reindexing-the-database)

To learn about what type of information needs to be exchanged between sellers and marketplaces, please read the article [Shared information](https://help.vtex.com/en/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3) between a marketplace and a seller on VTEX. If you want your store to operate as a marketplace, check out the article [Configuring a VTEX marketplace](https://help.vtex.com/en/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb).

> ℹ️ To start selling your products in marketplaces or to find new partners to sell on your marketplace, use [Marketplaces and Integrations](https://help.vtex.com/en/tutorial/encontre-marketplaces-e-sellers-no-ecossistema-vtex--2bzC7tXlVgLEEjxo4ixcAM), a feature which facilitates the identification of and communication between marketplaces and sellers operating in the VTEX ecosystem.

## Defining the trade policy

On VTEX, the [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) groups the configurations for your catalog, pricing, promotions, logistics, customer segmentation, and payments in a single sales channel. A seller can integrate with the marketplace by using the store's default trade policy or by defining specific settings for the integration, configuring a [trade policy for the marketplace](https://help.vtex.com/en/tutorial/configurando-a-politica-comercial-para-marketplace/).

> ℹ️ The same trade policy can be used to integrate with multiple marketplaces. [Requesting additional trade policies](https://help.vtex.com/en/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X) to integrate with [native connectors](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex), certified connectors (partners), or other VTEX stores is free of charge.

If you want to configure promotions, you don't have to create a marketplace specific trade policy. You can segment promotions using the [affiliate](https://help.vtex.com/en/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0). For more information, read the article [Configuring promotions for marketplaces](https://help.vtex.com/en/tutorial/configurar-promocao-para-marketplace--tutorials_406).

The product assortment sent to the marketplace has to be managed through the trade policy. We do not recommend managing products by [collections](https://help.vtex.com/en/tutorial/criando-colecao-de-produtos--tutorials_244) because it results into a more complex and difficult operation.

## Creating an affiliate ID

On VTEX, the [affiliate](https://help.vtex.com/en/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) is the code created by the VTEX seller to identify the marketplace where their products will be sold. Each marketplace must correspond to a single affiliate. Through the affiliate, the marketplace is notified about orders, changes in the SKU information, and about price and stock changes, for example.

> ℹ️ The integration with [native connectors](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex) creates the affiliate code automatically.  However, when a VTEX seller integrates with a VTEX marketplace or an external one, the seller needs to create the affiliate ID manually.

The seller must follow the steps described in the article [Configuring affiliates](https://help.vtex.com/en/tutorial/como-configurar-afiliado--tutorials_187) and add the identifier code to the marketplace after it has been created. This way, the VTEX marketplace will [add the seller](https://help.vtex.com/en/tutorial/configuring-the-seller--tutorials_392) and associate it to a trade policy.

## Reindexing the database

The marketplace does not automatically receive the products after integrating with the seller. First, the seller must [reindex the database](https://help.vtex.com/en/tutorial/entendendo-o-funcionamento-da-indexacao). This process prepares the SKU information and products and sends catalog, price, and stock general information to the marketplace.  

> ℹ️ Please note that only the [sponsor user (owner)](https://help.vtex.com/en/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA) has permission to reindex a VTEX store database. During reindexing, which may vary in terms of time, the products are queued for updating the information, while still remaining available for sale on the store site.

To reindex the database, paste the link below in your browser, replacing the `{storename}` with the name of your store:

`{storename}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`

Access the link and click the `Reindex database` button. You can track the process in the VTEX Admin, through **Catalog > Reports**.

### Checking the index

You can verify if a specific SKU has been indexed correctly to the integration trade policy. Follow the steps below:

1. In the VTEX Admin, access **Catalog > Products and SKUs**.
2. Click the <i class="fas fa-angle-down"></i> down arrow, next to the **CHANGE** button.
3. Select the `Indexed Info` option.
4. Check if the number of the trade policy used in the integration with the marketplace appears in the SKU information.

## Marketplace actions

After the seller sends the products, the marketplace needs to [map the product categories, brands, and specifications](https://help.vtex.com/en/tutorial/mapeando-categorias-e-marcas-para-marketplace--tutorials_1521), in order to match its catalog structure to the seller's catalog.

Once the mapping is done, the marketplace must [catalog the seller's SKUs](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus/). After this last step, the seller's products will be available to customers on the marketplace.

## Learn more

- [Marketplace strategies at VTEX](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
- [Choosing between standard account, franchise account or Seller Portal](https://help.vtex.com/en/tutorial/escolher-entre-conta-padrao-conta-franquia-ou-seller-portal--4S90HzzhMyZESsHqrnUs78)
- [Shared information between a marketplace and a seller on VTEX](https://help.vtex.com/en/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3)
- [Configuring a VTEX marketplace](https://help.vtex.com/en/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)
