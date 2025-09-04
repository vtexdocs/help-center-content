---
title: 'Configuring a marketplace between VTEX stores'
id: tutorials_6520
status: PUBLISHED
createdAt: 2017-04-27T21:48:44.692Z
updatedAt: 2025-09-04T15:23:15.845Z
publishedAt: 2025-09-04T15:23:15.845Z
firstPublishedAt: 2017-04-27T23:11:18.934Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: configuring-the-marketplace-between-vtex-stores
legacySlug: configuring-the-marketplace-between-vtex-stores
locale: en
subcategoryId: 2xWRgEIlR2ookieEmm4KQu
---


All VTEX stores are prepared to be a marketplace, or to sell to other VTEX stores or to [our integrated marketplaces](/en/tutorial/integrating-with-marketplace/). This can be done through simple settings, without the need to develop an integration.

The integration between VTEX stores is the simplest of all, and it does not require some steps needed for other integrations. See below the instructions for each of the following settings.

## For stores that want to be marketplaces: How to set up a VTEX seller
Being a marketplace means that your website will receive (and sell) another store's products (that will work as a seller). To allow that, you need to follow the [seller set up instructions](/en/tutorial/configuring-the-seller/).

## For stores that want to be sellers: How to set up a VTEX marketplace
Being a seller means that your store will send and sell products through another website (that will work as a marketplace). To do that, you need to set up that store as a marketplace in your admin. Follow the steps below:

1. Set up the [trade policy](/en/tutorial/configuring-a-marketplace-sales-policy/).
2. Set up the [logistics](/en/tutorial/configuring-logistics-for-a-marketplace/) regarding this trade policy.
3. Set up the [affiliate](/en/tutorial/configuring-affiliates/).

##### About the integration

After defining the settings, you must index all products of the base in order to make the integration.

1. Using the [sponsor user](https://help.vtex.com/en/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA?locale=pt), access the link `{accountname}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`.
2. Click on the __Reindex Base__ button.

Please note that in the URL you must change the term `{accountname}` to the name of your store.

After adjusting these settings, the products will start to be sent to the marketplace. Then, the marketplace must [map the categories, brands and specifications](https://help.vtex.com/en/tutorial/mapeando-categorias-e-marcas-para-marketplace), as well as accept the products sent.

