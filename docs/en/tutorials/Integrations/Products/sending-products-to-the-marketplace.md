---
title: 'Sending products to the marketplace'
id: tutorials_388
status: PUBLISHED
createdAt: 2017-04-27T22:07:33.486Z
updatedAt: 2020-01-07T22:09:30.400Z
publishedAt: 2020-01-07T22:09:30.400Z
firstPublishedAt: 2017-04-27T23:03:22.814Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: sending-products-to-the-marketplace
legacySlug: sending-products-to-the-marketplace
locale: en
subcategoryId: 4HBbKdnwneGew2qGGykSM8
---

When integrating with a marketplace, you have to define which products are to be sent for sale in this other store. [You can send either all the products, or a customized catalog](/en/tutorial/configuring-a-marketplace-sales-policy/). All these configurations are possible using the sales policy, which will be dealt with below.

## Defining the product mix

One possibility is to work with the entire product catalog on the marketplace. To do this, just associate the main store’s sales policy ID which will always be **ID 1**, [when asked to do so during configuration](/en/tutorial/integrating-with-marketplace/).

![ExemploPoliticaComercial](https://images.contentful.com/alneenqid6w5/37CzxbrZ9KciYm4G2gK0MK/54a58d8fa3a53dcf310caa2769e53174/ExemploPoliticaComercial.png)

This sales policy does not require a configured collection of products, since the system already understands that it refers to all products.

Another possibility is to work with a specific mix. Through some differentiated sales policy, you will have to create and define a new collection and associate it with a new [sales policy](/en/tutorial/configuring-a-marketplace-sales-policy/).

1. In the Admin menu, click on **Catalog**.
2. Click on **Products and SKUs**.
3. Click on **Change** in the product you wish to channel to the sales policy.
4. Check the checkbox of the sales policies to which this product should belong.
5. Click on **Save**.

![](https://images.contentful.com/alneenqid6w5/2Fp2Y3qFF6SCwQaQI2iEiC/fae0654d1685f1f625794180044ae6a6/loja-cadastro-produto.gif)
_If there are products that have no value indicated in the **loja** field in the product register or price register, such products will be send to all sales policies configured without a collection._

## Product indexation

After doing the configurations for integration with the respective marketplace, the products will not be automatically indexed just to serve this newly available channel.

This is because indexation occurs when there are changes in the product/SKU register or in the price/inventory register.

The act of creating a collection would not be enough for indexing the products chosen for export, since when you save a collection, it indexes all products associated with it.

In other words, with the configurations completed, it’s worth to save yet another collection of the sales policy of the marketplace, so as to [ensure the replication of the new products for the partner](/en/tutorial/understanding-how-indexation-works).

After indexation, the products have to be cataloged on the markerplace. The time for concluding this action depends on the marketplace’s internal process.

To check if the product was actually indexed in the marketplace's sales policy, perform the following steps:

1. Access the catalog.
2. __Products and SKUs__.
3. Click __Filter results or do a search__.
4. Enter the SKU ID or Product Name and click __Search__.
5. On the blue right-hand button, click the down arrow, and then click __Indexed Info__.
6. Look for __Active sales channels__ and verify that the sales policy numbers for the marketplaces are being displayed.

After indexing, the products must be cataloged at the markerplace. The time for this action to be completed depends on the internal process of the marketplace.

If the marketplace is a VTEX store, just perform the [brands and categories mapping](/en/tutorial/mapping-categories-and-brands-for-the-marketplace/) and the [SKUs approval](/en/tutorial/approving-suggestions-for-skus/).

The tracking of all such communication will be recorded in VTEX Bridge.
