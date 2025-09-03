---
title: 'Configuring a discount for orders paid in full'
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
---

A very common ecommerce strategy for attracting customers is to apply a discount to specific payment methods when orders are __prepaid in full__. This promotional price is usually displayed to users only after they select the payment method at the checkout.

The greatest advantage of this strategy is that the price is automatically calculated, avoiding inconsistencies in sales channels that compare the price sent by the integration with the price displayed on the product page, such as Google Shopping.

To use this strategy in the VTEX platform, besides indicating the discount for orders prepaid in full, you also have to select the payment method to which the discount will apply. Thus, you will need to:

1. Use the Checkout API to determine the discount and link it to a payment method (see our tutorial [Set a discount using the Checkout API](https://developers.vtex.com/vtex-rest-api/docs/set-a-discount-using-the-checkout-api)).

2. Configure the layout for both CMS and IO stores, ensuring that the discount is displayed in the selected payment method on the product page (see details in the following section).

## CMS

After you determine the discount at Checkout, you need to link the SKU to the payment method so that the discount appears on the product page. To do so, please follow the steps below:

1. In the VTEX Admin, go to *Storefront > Layout*, or type *Layout* in the search bar at the top of the page.
2. Click on the __CMS__ folder and then on __HTML Templates__.
3. Select the template of your product page.
4. In the `skuPrice` property, add the `paymentSystemId` variable with the ID of the chosen payment method.

![Screenshot 2020-12-18 Criar preço à vista](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/price/configuring-a-discount-for-orders-prepaid-in-full_1.png)

6. Click on __Save Template__ in the upper right corner.

Your discount for orders prepaid in full is now active!

## VTEX IO Store Framework
For stores developed on VTEX IO, this is a native feature available through the `vtex.product-price` component in the `product-spot-price` block. To configure it, please check our [product documentation](https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-price#configuration).

## Related articles
[Configuring discounts for orders paid in full on Google Shopping](https://help.vtex.com/en/tutorial/configuring-discounts-for-orders-prepaid-in-full-on-google-shopping--40K3R5d4NogMvCzIWdWt3e#)

