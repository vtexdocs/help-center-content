---
title: 'Sending the item price with tax shown separately to the gateway or the ERP'
id: 77O1rBSLHqW8eWWsE6IEii
status: PUBLISHED
createdAt: 2017-08-14T15:30:39.027Z
updatedAt: 2024-04-17T14:38:57.929Z
publishedAt: 2024-04-17T14:38:57.929Z
firstPublishedAt: 2017-08-16T17:43:33.301Z
contentType: tutorial
productTeam: Others
author: 5V92cmF9jG8KG600EwUgEg
slugEN: send-item-price-with-tax-shown-separately
legacySlug: send-item-price-with-tax-shown-separately
locale: en
subcategoryId: 18Gsips3u48UYCu0Ku2sWm
---

> ⚠️ Tutorial valid only for Legacy CMS Stores.

You may need to send the item price to the payment gateway or to your ERP with the tax shown separately from the price.

To do this, use the tax configuration in [Taxes](/en/docs/tutorials/creating-surchargestaxes).

This article explains how the system behaves in each case.

**Scenario 1:** The ERP sends the price including VAT to VTEX, so you do not need to calculate it.

1. Category page![CATEGORIASINIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/taxes/send-item-price-with-tax-shown-separately_1.png)
2. Product page![PRODUCTOSINIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/taxes/send-item-price-with-tax-shown-separately_2.png)
3. Shopping cart![CARRITOSINIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/taxes/send-item-price-with-tax-shown-separately_3.png)
4. Checkout![CHECKOUTSINIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/taxes/send-item-price-with-tax-shown-separately_4.png)

**Scenario 2:** The ERP sends the price *without* VAT to VTEX.

To show the price including tax on the storefront, use the attribute `$product.BestPricePlusTax`.

To show the tax amount, you can also use the `$product.Tax` control, which displays the tax registered for the product.

[See documentation on controls here](https://developers.vtex.com/docs/guides/shelf-template-controls)

> ⚠️ On the product page, you must include a JavaScript snippet to display these values.

1. Category page![CATEGORIASINIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/taxes/send-item-price-with-tax-shown-separately_5.png)
2. Product page![PRODUCTOCONIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/taxes/send-item-price-with-tax-shown-separately_6.png)
3. Shopping cart![CARRITOCONIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/taxes/send-item-price-with-tax-shown-separately_7.png)
4. Checkout![CHECKOUTCONIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/taxes/send-item-price-with-tax-shown-separately_8.png)
