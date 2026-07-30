---
title: 'Configuring a pay-in-full discount'
id: 7Lfcj9Wb5dpYfA2gKkACIt
status: PUBLISHED
createdAt: 2020-12-18T19:16:46.225Z
updatedAt: 2024-11-01T13:37:19.588Z
publishedAt: 2024-11-01T13:37:19.588Z
firstPublishedAt: 2021-05-04T20:05:58.585Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: configuring-a-discount-for-orders-prepaid-in-full
legacySlug: configuring-a-discount-for-orders-prepaid-in-full
locale: en
subcategoryId: 3pGCbMh80UueoeSqoAgSuS
seeAlso:
  - "/en/docs/tutorials/configuring-discounts-for-orders-prepaid-in-full-on-google-shopping"
---

A very common ecommerce strategy for attracting customers is to apply a discount to specific payment methods when orders are **paid in full**. This promotional price is usually displayed to users only after they select the payment method at checkout.

The greatest advantage of this strategy is that the price is automatically calculated, avoiding inconsistencies with sales channels — such as Google Shopping — that compare the price sent by the integration with the price displayed on the product page.

This tutorial explains how to configure a pay-in-full discount on VTEX, from defining the discount and payment method to configuring the store's frontend to correctly display this value on the product page.

## Before you begin

Before configuring the display of the pay-in-full price, create or verify the promotion that applies the discount in the VTEX Admin. This is where you define:
- The payment method that will receive the discount.
- The percentage or amount of the benefit.
- The sales channels.
- The scope of eligible products, such as SKUs, collections, or other promotion criteria.

Learn more in [Creating promotions](https://help.vtex.com/docs/tutorials/creating-promotions).

## Instructions

### 1 - Define the payment method used to calculate the pay-in-full price

Use the `orderForm` configuration endpoint to complete the `paymentSystemToCheckFirstInstallment` property with the ID of the desired payment method.

You can fetch this ID in the VTEX Admin, under **Store Settings > Payment > Settings > Payment conditions**.

![id-pagamentos](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/preço/id-pagamentos.png)

After updating the setting, [simulate a shopping cart](https://developers.vtex.com/docs/guides/simulate-a-shopping-cart) to check whether the pay-in-full discount was applied correctly in `paymentData.installmentOptions`.

Learn more in [Set a discount using the Checkout API](https://developers.vtex.com/docs/guides/set-a-discount-using-the-checkout-api).

>ℹ️ The Checkout API doesn't create permanent discount rules; these rules must be defined through promotions. Learn more in [Before you begin](#before-you-begin). It doesn't display the pay-in-full price on the product page; that's done in the [next step](#2-configure-the-display-of-the-pay-in-full-price-on-the-product-page). Its role is only to indicate which payment method should be considered and to validate the result through simulations.

### 2 - Configure the display of the pay-in-full price on the product page

After setting the payment method at checkout, configure the store to display the calculated cash price on the product page.

#### Store Framework

For stores developed with Store Framework, this feature is natively available in the `product-spot-price` block of the `vtex.product-price` component.

For more information, see the [Product Price](https://developers.vtex.com/docs/apps/vtex.product-price) component documentation.

## CMS Portal (Legacy)

In CMS Portal (Legacy) stores, you must specify in the product page template which payment method should be considered when rendering the cash price. To do so, follow the steps below:

1. In the VTEX Admin, go to _Storefront > Layout_, or type _Layout_ in the search bar at the top of the page.
2. Click the **CMS** folder and then **HTML Templates**.
3. Click your product page template in the template list.
4. In the `skuPrice` property, add the `paymentSystemId` variable with the ID of the desired payment method.

   ![Screenshot 2020-12-18 Criar preço à vista](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/price/configuring-a-discount-for-orders-prepaid-in-full_1.png)

5. Click **Save template** in the top right corner to save.

With this configuration, the product page will display the pay-in-full value calculated for the selected payment method.
