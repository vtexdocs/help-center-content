---
title: 'How to integrate with CSU (Opte+)'
id: tutorials_4258
status: PUBLISHED
createdAt: 2017-04-27T21:51:31.608Z
updatedAt: 2023-03-29T23:06:21.223Z
publishedAt: 2023-03-29T23:06:21.223Z
firstPublishedAt: 2017-04-27T23:11:15.330Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: integrating-with-csu-opte-2
legacySlug: integrating-with-csu-opte-2
subcategory: 1qvm3kIrt6KA6IeGc4EQ6k
---

This article explains the steps necessary to configure the integration of your store with the CSU marketplace (Opte+).

CSU uses only the marketplace model **Checkout na CSU**. In this model, the entire payment process is done by CSU, and the seller only receives the order and authorization to dispatch it.

## First steps

1. Configure the [sales policy](http://help.vtex.com/en/tutorial/configuring-a-marketplace-sales-policy/) (the CSU indication is that you use the same policy of your own site).
2. Configure the [logistics](http://help.vtex.com/en/tutorial/configuring-logistics-for-a-marketplace/) for this sales policy.

## Create an affiliate

After configuring the sales policy and logistics, you must create an affiliate, as shown in the steps below:

1. In the VTEX Admin, go to **Store Settings > Orders > Settings**, or type *Orders* in the search bar at the top of the page and select *Store Settings / Orders*.
2. In the **Affiliates** tab, click `+ New Affiliate`.
3. Fill in the fields in the modal window according to the descriptions below, then click `Save`.
    - **Name:** Name of affiliate/marketplace.
    - **ID:** Identification code for the affiliate with three characters. CSU requires an affiliate to be created for each channel, i.e. one for the CSU marketplace, one for the loyalty program of each CSU client and one for each corporate shopping platform. Contact CSU for a list of all the company’s sites, so that you can create the affiliates as CSU requires. For the CSU marketplace, the code is **PTM** (Optemais Marketplace). For the marketplace loyalty program, the code is **PSS** (Passaporte).
    - **Trade Policy:** Sales policy id defining the selection of products to be displayed in the marketplace. CSU suggests using the same sales policy as for your own site.
    - **Email for notifications:** Email address to receive any notifications of conflict in integrating orders.
    - **Search endpoint:** This will be the same for the various CSU marketplaces: http://stage.optemais.com.br/Notificacao/Vtex/Sku.
    - **Search endpoint version:** 1.x.x.
    - **Use my payment method:** Do not check this flag.

## Create access

Once you have created an affiliate, you must attribute the correct permission for the CSU key. This procedure only needs to be done once, regardless of the number of CSU affiliates.

You need to create the user by associating the key, and then associate it with a role. Both models use the same role, as shown in the following step-by-step:

1. In the VTEX Admin, go to **Account settings > Users**, or type **Users** in the search bar at the top of the page.
2. Look for the value `vtexappkey-parceirocsu-ERUXDY`.
3. Select the user found and associate it with the role `IntegrationProfile-Fulfillment_Gateway_GetOrder`.
4. Click `Save`.

After this procedure, the integration with the CSU is configured, and the Seller's [sponsor user](https://help.vtex.com/en/tutorial/what-is-the-sponsor-user--3oPr7YuIkEYqUGmEqIMSEy) must request a reindexation of his catalog to accelerate the sending of the SKUs to CSU.

You must have sponsor user permission to perform this step: access your admin (http://_nomedaloja_/admin/site/fullcleanup.aspx) and click the **Reindex Base** button (this procedure should be done very carefully and should not be repeated every time as it may affect the performance of the site).

You are about to be an Opte + partner. Get in touch with CSU so they can check that everything is okay.

### Learn more

- [Marketplace strategies at VTEX](https://help.vtex.com/en/tutorial/marketplace-strategies-at-vtex--tutorials_402).
