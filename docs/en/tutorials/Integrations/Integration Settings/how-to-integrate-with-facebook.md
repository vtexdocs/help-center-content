---
title: 'How to integrate with Facebook'
id: 2CSxoNsJqM2KGsqi66WAaY
status: ARCHIVED
createdAt: 2017-07-31T20:58:45.449Z
updatedAt: 2021-03-25T22:44:08.652Z
publishedAt: 
firstPublishedAt: 2017-07-31T21:14:22.770Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: how-to-integrate-with-facebook
locale: en
legacySlug: how-to-integrate-with-facebook
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---


The integration with Facebook aims to send the catalog to Facebook's **Business Manager**, allowing marketing campaigns.

Your store's catalog is sent by indexing the items in VTEX.

## Integration setup

To integrate with Facebook, follow the steps below:

1. In the Admin menu, click on __Integrations__.
2. Click on __Settings__.
3. In the Facebook box, click on __Integrate__.
4. Fill in the __fields__ displayed on the screen. Below, we will detail how to fill out each field.
5. Click on __Save Configuration__.

## Field Detailing

__Affiliate Id__: This field must be filled in with an [affiliate](/en/faq/what-is-affiliate) ID that does not exist in the OMS affiliate configuration. The ID accepts only three digits and consonants. Suggestion: __FCB__.

__Affiliate E-mail__: Fill in the email that will receive notifications related to the integration

__Trade Policy__: Trade policy of the store that you want to use in the integration. The trade policy will define the catalog assortment and the values of the items.

__Product Name__: You can choose between two options:
  - __Product Name – SKU Name__: Send products with both names together.
  - __Product Name__: Send only the name of the product.

__Business manager Id__: Facebook __Business Manager__ account ID, which can be obtained from the Facebook settings.

__Store site URL__: Fill in the address of your store. Example: `https://www.yourstore.com`. This field is used to form the complete URL of the product that is sent.

>ℹ️ All fields are required for full integration.

## Authorization

Once setup is complete, you must authorize VTEX to make changes to the shopper's Facebook account. To do this, you need to click the __Authorize__ button on the Facebook card, in the __Integrations__ section. With that, you will be asked to inform the required authorizations.

>ℹ️ To enable the authorization, the Facebook account which has admin privileges in Business Manager must be used. If it lacks privileges, the authorization will not be granted and the process will be stuck in a loop.

After this step, the integration will create a catalog named `VtexIntegration - {STORE NAME}` in Facebook.

This is the catalog in which items will be created and become available.

>ℹ️ You can use the Facebook pixel app to track and optimize your marketing campaigns' results on your store's Google Tag Manager. Learn the step-by-step [here](https://www.facebook.com/business/help/1021909254506499).
