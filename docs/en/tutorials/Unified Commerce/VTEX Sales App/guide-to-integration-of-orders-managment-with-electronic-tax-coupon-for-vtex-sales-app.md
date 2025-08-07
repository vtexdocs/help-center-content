---
title: 'Registering product additional tax data (NCM and ICMS) on VTEX Sales App'
id: 51xsyWzGiQ08KMO2EaaGAa
status: PUBLISHED
createdAt: 2017-08-14T23:24:39.793Z
updatedAt: 2023-05-31T14:50:57.382Z
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

VTEX Sales App is one of our main solutions for Unified Commerce operations. This app allows you to integrate your online and physical sales channels while putting customers at the core of your business.

By using VTEX Sales App, sales associates in physical stores can provide customers with a personalized experience and help them through the entire sales process, i.e. from choosing the best products to payment and delivery.

Below, you'll find out how to manage tax coupons for orders placed in VTEX Sales App. 

In Brazil, every product price includes state and federal taxes. This information must be registered as product [specification](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) in your store. By doing so, VTEX Sales App sends the product specification to the definitive order, in which an integration middleware — a software that bridges the gaps among the components of an ecommerce platform — can be used to issue the invoice.

An example of this is the Mercosur Common Nomenclature (NCM), which defines the tax rate applicable to member countries. During product registration in the ecommerce platform, you can find [this field in the Catalog as a **Tax Code**](https://help.vtex.com/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke). Nevertheless, VTEX Sales App searches for that information as a product specification called **NCM**.

In Brazil, if you want to sell products in physical stores, you need to add the Tax on the Circulation of Goods and Services (ICMS) from each state to the product to be sold. This information can be registered as a specification field for each product (**ICMS_RJ**, **ICMS_SP**). Just remember that this setting is only necessary if the physical store operates with VTEX Sales App in that state.

Any other tax collected from your business activity, e. g. the Contribution to the Social Integration Program (PIS) and the Social Contribution on Billing (COFINS), can be registered as product specifications and will also be available in the OMS.

You can register product specifications through the API or the Admin. To register product specifications through the API, follow the instructions on [How to create a specification](https://developers.vtex.com/vtex-rest-api/docs/how-to-create-a-specification). To register a specification through the Admin, follow the instructions on [Setting up product specification](https://help.vtex.com/en/tutorial/setting-up-product-specification-fields--tutorials_271).

Check the invoiced orders placed in VTEX Sales App by following the steps described in [Get invoiced orders placed in VTEX Sales App](https://developers.vtex.com/vtex-rest-api/docs/get-invoiced-orders-placed-in-instore).
