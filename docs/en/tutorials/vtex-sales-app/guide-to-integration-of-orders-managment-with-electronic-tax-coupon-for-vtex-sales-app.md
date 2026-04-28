---
title: 'Registering product additional tax data (NCM and ICMS) on VTEX Sales App'
id: 51xsyWzGiQ08KMO2EaaGAa
status: PUBLISHED
createdAt: 2017-08-14T23:24:39.793Z
updatedAt: 2025-11-25T14:50:57.382Z
publishedAt: 2023-05-31T14:50:57.382Z
firstPublishedAt: 2017-08-14T23:35:56.687Z
contentType: tutorial
productTeam: Shopping
author: 3uCjaRpzeMieQWwWycYAMG
slugEN: guide-to-integration-of-orders-managment-with-electronic-tax-coupon-for-vtex-sales-app
legacySlug: guide-to-integration-of-oms-with-electronic-tax-coupon-for-vtex-instore,guide-to-integration-of-orders-managment-with-electronic-tax-coupon-for-vtex-instore
locale: en
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

**VTEX Sales App** is one of our main solutions for Unified Commerce operations. This app allows you to integrate your online and physical sales channels while putting customers at the core of your business.

By using **Sales App**, sales associates in physical stores can provide customers with a personalized experience and help them through the entire sales process, i.e. from choosing the best products to payment and delivery.

Below, you'll find out how to manage tax coupons for orders placed in **Sales App**.

In Brazil, every product price includes state and federal taxes. This information must be registered as product [specification](https://help.vtex.com/docs/tracks/specifications-concept-definition) in your store. By doing so, VTEX Sales App sends the product specification to the definitive order, in which an integration middleware — a software that bridges the gaps among the components of an ecommerce platform — can be used to issue the invoice.

An example of this is the Mercosur Common Nomenclature (NCM), which defines the tax rate applicable to member countries. During product registration in the ecommerce platform, you can find [this field in the Catalog as **Tax code**](https://help.vtex.com/docs/tutorials/adding-or-editing-products). Nevertheless, VTEX Sales App searches for that information as a product specification called NCM.

In Brazil, if you want to sell products in physical stores, you need to add the Tax on the Circulation of Goods and Services (ICMS) from each state to the product to be sold. This information can be registered as a specification field for each product (ICMS_RJ, ICMS_SP). Just remember that this setting is only necessary if the physical store operates with **Sales App** in that state.

Any other tax collected from your business activity, e. g. the Contribution to the Social Integration Program (PIS) and the Social Contribution on Billing (COFINS), can be registered as product specifications and will also be available in the OMS.

You can register product specifications via API or VTEX Admin:

* **Via API:** See [Specifications](https://developers.vtex.com/docs/guides/specifications).
* **Via VTEX Admin:** See [Adding product specifications or fields](https://help.vtex.com/docs/tutorials/adding-specifications-or-product-fields).

To get invoiced orders placed in the **Sales App**, in the VTEX Admin, go to **Orders > All Orders** and [filter your orders](https://help.vtex.com/docs/tutorials/filtering-all-orders) using the filter **Other > inStore > true**.
