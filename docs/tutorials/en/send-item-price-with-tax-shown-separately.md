---
title: 'Send the item price, with tax shown separately, to the Gateway or the ERP'
id: 77O1rBSLHqW8eWWsE6IEii
status: PUBLISHED
createdAt: 2017-08-14T15:30:39.027Z
updatedAt: 2019-12-31T15:21:46.929Z
publishedAt: 2019-12-31T15:21:46.929Z
firstPublishedAt: 2017-08-16T17:43:33.301Z
contentType: tutorial
productTeam: Others
author: 5V92cmF9jG8KG600EwUgEg
slug: send-item-price-with-tax-shown-separately
legacySlug: send-item-price-with-tax-shown-separately
subcategory: 18Gsips3u48UYCu0Ku2sWm
---

It is frequently necessary to send the item price to the Gateway or to your ERP with the tax shown, i.e. separately from the price.

For this you can use the tax configuration in [__Pricing__](/en/tutorial/creating-surchargestaxes).

In this article we will show how the system works in these cases.

**Scenario 1**: My ERP sends the price including VAT to VTEX, so I do not need to calculate it.

1. Category page![CATEGORIASINIVA](//images.ctfassets.net/alneenqid6w5/jdugsMibXU6SO6momcYka/ecfb35f914fe9bbdc137ef5a5e932da4/1_cat.png)
2. Product page![PRODUCTOSINIVA](//images.ctfassets.net/alneenqid6w5/hoE9OYL65aaiaqyuUssAI/cdc7633cc4eb4ac2c4ea033e2e0e25c5/2_prod.png)
3. Shopping cart![CARRITOSINIVA](//images.ctfassets.net/alneenqid6w5/xX5Coy1UVUc0weEoY4Gik/c7131a671b35316aba28aaf7e8bbbb75/3_cart.png)
4. Checkout![CHECKOUTSINIVA](//images.ctfassets.net/alneenqid6w5/5QoFlwnTGg0WG86a6ekYu4/20de3c81acb0967787aaa10565e13d2f/4_check.png)

**Scenario 2**: My ERP sends the price *without* VAT to VTEX.

To show the price including charges in the store window, use the attribute `$product.BestPricePlusTax`.

Then to create a JS and add the amount of tax in the store window, you can also use the control `$product.Tax` (It shows the charges registered for the product).

[See documentation on controls here](/en/tutorial/shelf-template-controls)

__Attention__: On the product page you have to enter a JavaScript to add the values.

1. Category page![CATEGORIASINIVA](//images.ctfassets.net/alneenqid6w5/jdugsMibXU6SO6momcYka/ecfb35f914fe9bbdc137ef5a5e932da4/1_cat.png)
2. Product page![PRODUCTOCONIVA](//images.ctfassets.net/alneenqid6w5/hoE9OYL65aaiaqyuUssAI/cdc7633cc4eb4ac2c4ea033e2e0e25c5/2_prod.png)
3. Shopping cart![CARRITOCONIVA](//images.ctfassets.net/alneenqid6w5/2cVDEuAgwoMYOSegQeQUiO/1b2666371b65289bb3956029b2911742/3a_cart.png)
4. Checkout![CHECKOUTCONIVA](//images.ctfassets.net/alneenqid6w5/6G4BksRmNO4giagOGga8Sq/7a3c7dd3426abc549ea6b61284a14fe0/4a_check.png)
