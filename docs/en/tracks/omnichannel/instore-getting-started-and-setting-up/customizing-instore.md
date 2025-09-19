---
title: 'Customizing VTEX Sales App'
id: Rby973h1l9tEM4C1YrzwZ
status: PUBLISHED
createdAt: 2021-09-16T00:55:10.885Z
updatedAt: 2023-07-24T23:04:49.692Z
publishedAt: 2023-07-24T23:04:49.692Z
firstPublishedAt: 2021-09-16T01:00:39.153Z
contentType: trackArticle
productTeam: Shopping
slugEN: customizing-instore
locale: en
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: instore-getting-started-and-setting-up
order: 8
---

The VTEX Sales App experience is customizable: you can enable specific features and settings to suit your business needs, and you can also adapt the app layout to match your brand identity.

This requires editing JavaScript and CSS files, as described in the [How to customize VTEX Sales App](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app) developer guide.

> ⚠️ Only people with programming experience should customize VTEX Sales App as incorrect changes to these files can cause critical errors.

You can see the available VTEX Sales App customizations below. You can click the name of each customization to access its respective implementation guide.

* [Customize VTEX Sales App login options](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app#list-of-customizations): allow users to log in to VTEX Sales App using their Google or Facebook account. 
* [Change VTEX Sales App language](https://developers.vtex.com/docs/guides/change-vtex-sales-app-language): change the VTEX Sales App language to English or Spanish. The default language is Portuguese.
* [Enable the](https://developers.vtex.com/vtex-rest-api/docs/enable-the-remarks-field-in-the-order-screen) **[Observation](https://developers.vtex.com/vtex-rest-api/docs/enable-the-remarks-field-in-the-order-screen)** [field in the order screen](https://developers.vtex.com/vtex-rest-api/docs/enable-the-remarks-field-in-the-order-screen): enable a field to store additional information about the order. The data entered in this field is sent to **Orders Management**.
    * [Enable the sales associate code](https://developers.vtex.com/vtex-rest-api/docs/sales-associate-code): enable the sales associate code, in other words, an additional customization of the Observation field to make it a mandatory field where sales associates need to enter their personal codes during the purchase flow.
* [Enable cart transfer and capture between devices](https://developers.vtex.com/vtex-rest-api/docs/enable-cart-transfer-between-devices): allow a purchase that was started in one device to be completed in any other device present in the purchase flow without having to add the products to the cart again.  For more information, go to [this article](/pt/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/2hlBqxHlxgFo2o4R52pbsk).
* [Enable order filter by sales associate](https://developers.vtex.com/vtex-rest-api/docs/enable-order-filter-by-sales-associate): change the default so that the sales associate view only shows the orders completed by them instead of showing all the store orders.
* [Force stock availability](https://developers.vtex.com/vtex-rest-api/docs/force-stock-availability): allow selling items that are unavailable in the ecommerce stock. By default, if an item is out of stock in the store catalog, it cannot be sold through VTEX Sales App. However, there are situations where the item is available in the physical store. This customization allows processing the sale in those cases.
* [Set up the order summary printing](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app#list-of-customizations): enable printing an order summary when the order is completed through VTEX Sales App.
    * [Add extra text to the order summary print](https://developers.vtex.com/vtex-rest-api/docs/add-extra-text-to-the-order-print): add a custom text to the order summary printout.

## Learn more

* [How to customize VTEX Sales App](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app)
