---
title: 'Send the item price, with tax shown separately, to the Gateway or the ERP'
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
locale: en
legacySlug: send-item-price-with-tax-shown-separately
subcategoryId: 18Gsips3u48UYCu0Ku2sWm
---

It is frequently necessary to send the item price to the Gateway or to your ERP with the tax shown, i.e. separately from the price.

For this you can use the tax configuration in [__Pricing__](/en/tutorial/creating-surchargestaxes).

In this article we will show how the system works in these cases.

**Scenario 1**: My ERP sends the price including VAT to VTEX, so I do not need to calculate it.

1. Category page![CATEGORIASINIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
2. Product page![PRODUCTOSINIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)
3. Shopping cart![CARRITOSINIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)
4. Checkout![CHECKOUTSINIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

**Scenario 2**: My ERP sends the price *without* VAT to VTEX.

To show the price including charges in the store window, use the attribute `$product.BestPricePlusTax`.

Then to create a JS and add the amount of tax in the store window, you can also use the control `$product.Tax` (It shows the charges registered for the product).

[See documentation on controls here](https://developers.vtex.com/docs/guides/shelf-template-controls)

__Attention__: On the product page you have to enter a JavaScript to add the values.

1. Category page![CATEGORIASINIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)
2. Product page![PRODUCTOCONIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)
3. Shopping cart![CARRITOCONIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)
4. Checkout![CHECKOUTCONIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_8.png)
