---
title: 'Integrating with Via Varejo/CNova'
id: frequentlyAskedQuestions_6673
status: ARCHIVED
createdAt: 2019-01-24T20:46:02.807Z
updatedAt: 2020-03-06T13:56:49.627Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:15:37.714Z
contentType: tutorial
productTeam: Channels
author: authors_4
slugEN: integrating-with-viavarejo-cnova
locale: en
legacySlug: integrating-with-viavarejo-cnova
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

This article aims to guide you through the process of registering the integration with Via Varejo/CNova.

## Registering the integration

1. From the Admin menu, click __Integrations__.
2. Access the item __Settings__.
3. Look for the __Via Varejo__ box and click the __Integrate__ button.
4. Fill in the fields displayed on the screen. Below, we will detail how to fill each one.
5. With everything completed correctly, click on the __Save Configuration__ button.

### Fields details

&bull; __Affiliate ID*__: This field must be filled in with an [affiliate](/en/faq/what-is-affiliate) ID that doesn't already exist in the OMS affiliate registration. The ID accepts only three digits (all must be consonants). Suggestions: `VVJ`,` CNV` or `NVP`. If you have [multi-domain integration settings](/en/tutorial/creating-multi-store-multi-domain), pay special attention to the affiliate ID because this field should have a different value for each domain.

&bull; __Sales policy*__: Sales policy ID that will be used for integration with Via Varejo. The products of this sales policy are the ones that will be sent to the marketplace.

&bull; __Access key__: This field must not be filled, because it will be automatically generated in the authorization step.

&bull; __CNPJ*__: Fill in this field with your store's CNPJ. This information is required for orders to be invoiced ([learn more here](/en/tutorial/how-cnova-via-varejo-integration-works)).

&bull; __Product title*__: In this field, you must choose the name format given to your product in Via Retail.

&bull; __Name of the Product Specification field containing your Description__: If you want to use a different description than the one already registered in VTEX catalog, you have the option of [creating a product field](/en/tutorial/creating-a-product-field) with type _Long Text_. By filling in this field, the integration will prioritize the submission of the description contained in it (rather than the original description of the product).

>❗ **Note:** Look at the settings in the creation of this new field so that new information created does **not** appear on your site.

&bull; __Price Divergence Rate*:__ this is the acceptance rate of the difference in value of an order. Any order that has a difference between the selling price in the marketplace and the price determined by the seller [will be compared to this value](/en/faq/why-was-the-order-closed-with-the-wrong-price). If the divergence, in percent, is less than the value defined in this field, the order will be correctly integrated. Otherwise, the order will not be integrated and you will be able to view it in the [orders tab (within the integrations section in the Admin)](/en/tutorial/checking-integrations-in-bridge).

&bull; __E-mails For Notification of Non-Integrated Orders*:__ fill in with an e-mail. Remember to click the `+` button to insert it.

*Fields marked with `*` are required.*

This is the *first step* of this integration. In the next step, we will perform the registration of an API that is fundamental to its operation.


## Registering the API
 
In order to work properly, the integration with Via Varejo requires that the shipping API be registered in the marketplace dashboard.

### Shipping API

The implementation of this API allows Via Varejo to consult, in real time, the price and deadline of a shipping for yoyr products (according to the zip code). Note that the term `{AccountName}` must be replaced with the name of your store environment.

`http://novaintegration.vtexcommercestable.com.br/api/marketplace-nv/pub/{{AccountName}}/freight?skuId={{skuId}},{{quantity}}&zipcode={{cep}}`

This is the _second step_ of the integration setup. In order to complete the process, you must authorize Via Varejo integration in VTEX panel.


## Authorizing Via Varejo integration in VTEX panel

After completing all the previous steps, follow the steps below to authorize your integration with Via Varejo:

1. From the Admin menu, click __Integrations__.
2. Access the item __Settings__.
3. On the Via Retail card, click __Authorization__.
4. Click __I want to authenticate__.
5. You will be redirected to the Via Varejo environment.
6. Still in the Via Varejo environment, __log in to the developers panel__.
7. You will be redirected back to the __Integrations__ tab in VTEX Admin.

After completing this step, your store is fully integrated with Via Varejo.
