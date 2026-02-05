---
title: 'Configuring affiliates'
id: tutorials_187
status: PUBLISHED
createdAt: 2017-04-27T22:15:31.422Z
updatedAt: 2024-01-08T18:13:15.897Z
publishedAt: 2024-01-08T18:13:15.897Z
firstPublishedAt: 2017-04-27T23:00:46.992Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: configuring-affiliates
legacySlug: configuring-affiliates
locale: en
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

At VTEX, the [affiliate](/en/docs/tutorials/what-is-an-affiliate) is an identification code of the marketplace for the seller. The [VTEX seller](/en/tutorial/integrating-with-marketplace/#being-a-vtex-seller) needs to configure an affiliate code in order to integrate with a [VTEX marketplace](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#being-a-vtex-marketplace), and this configuration is only necessary when both marketplace and seller are VTEX stores.

When the marketplace is not a VTEX store (as in [external integrations](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-an-external-marketplace)), or when the store integrates with a [certified marketplace](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-certified-marketplace) (such as Amazon or Mercado Livre), the affiliate code is automatically created by the platform.

## How to set it up

To create a new affiliate ID, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Orders > Settings**, or type *Orders* in the search bar at the top of the page and select *Store Settings / Orders*.
2. In the **Affiliates** tab, click `+ New Affiliate`.
3. Fill in the fields in the modal window according to the descriptions below, then click `Save`.
    - **Name:** the name of the new affiliate.
    - **ID:** the affiliate identifier code, which consists of three consonants, whether they are repeated or not. Vowels are not allowed.
    - **Trade policy:** the number of the trade policy that will define the catalog assortment, prices, and the shipping strategy of items sent to the marketplace.
    - **Email for notifications:** the email address in which you will receive notifications about the integration.
    - **Search endpoint:** the URL of the application that will receive products, price, and inventory notifications, among others. The Search Endpoint should be filled with the value: 
 `http://productnotification.vtexcommerce.com.br/api/notification/{NameOfMarketplace}/{SellerID}`

> Notice that the value **{NameOfMarketplace}** must be altered using the name of the marketplace account, while the value **{SellerId}** must be changed to the ID of the seller registered by the marketplace.

> > ❗ The **{SellerId}** value is *case sensitive*. In that way, it should be written in the URL exactly the same way it is registered in the marketplace.

> For [external marketplaces](/en/tutorial/marketplace-strategies-at-vtex--tutorials_402#integrating-with-an-external-marketplace), fill in the value: `https://{endpointDoAfiliado}/api/notification/`.   

> Learn more in our article on the Developer Portal [How to confugure the affiliate endpoint](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-price-update#how-to-configure-the-affiliate-endpoint).

- **Search Endpoint version:** the default option "1.x.x." is the only one available.
- **Use my payment method:** is the payment split – intended so that the payment is carried out by the seller. That is, the marketplace closes the order, but sends the payment for the owner of the product to make. Recommended for use only in VTEX-with-VTEX integrations because of compatibility of payment methods.

It is not necessary for the seller to use the same payment methods used by the marketplace.
