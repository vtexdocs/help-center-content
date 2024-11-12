---
title: 'Facilitating B2B store operation'
id: 8t1f9FYBsSCopHHVujKWR
status: CHANGED
createdAt: 2021-03-30T14:29:12.548Z
updatedAt: 2024-05-10T10:59:55.549Z
publishedAt: 2021-05-20T18:17:16.108Z
firstPublishedAt: 2021-03-30T19:54:13.259Z
contentType: tutorial
productTeam: B2B
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: facilitating-b2b-store-operation
locale: en
legacySlug: facilitating-b2b-store-operation
subcategoryId: 2LrbEY7MFeKqmdfYLBCnfi
---

You can facilitate the operation of your store by installing applications to solve business issues related to store usability, sales, and after-sales.

>ℹ️ The following apps can be installed through the [VTEX App Store](https://apps.vtex.com/) or [VTEX IO](https://vtex.io/).

## Usability tools
| Tool              | Use                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Quickorder](https://github.com/vtex-apps/quickorder "")              | It allows the retailer to make bulk purchases using spreadsheets.                                                                                |
| [Order Quote](https://github.com/vtex-apps/order-quote "")             | It allows customers to save shopping cart information for a specific cart (SKUs, quantity, and price of each item) during a period of time.                                                                                                                                                                                                  |
| [Order Configuration](https://vtex.io/docs/components/content-blocks/vtex.order-configuration@3.1.0/readme/ "")     | It offers customization for purchase scenarios in B2B, such as resales and internal purchases.                                                                                                                                                                                             |
| [VTEX Intelligent Search](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search "") | It enables product searches (only available for stores developed with VTEX IO).                                                                                                                                                          |
| [Telemarketing](https://github.com/vtex-apps/telemarketing "")           | It adds a component to the storefront that allows a customer service analyst to make purchases on a customer's behalf. |
| [Product Comparison](https://github.com/vtex-apps/product-comparison "")      | It allows customers to compare the specifications of four SKUs before completing a purchase, enabling a more detailed analysis of those products.                                                                                                               |

## Sales tools

VTEX offers some sales tools that can be used for B2B.

### Price per pack

There is a field called "Unit multiplier" in the SKU form, which determines whether an item will be sold in packs.

For example, suppose your store has a "Red T-shirt" SKU. If you fill in the “Unit multiplier” field with the number 5 for this item, the SKU "Red T-shirt" will only be sold in packs of 5. 

Therefore, when the customer selects two items at Checkout, they will be purchasing ten "Red T-shirts" instead of two.

For more details, check out the article on [how to fill each of the registration fields for a new SKU](https://help.vtex.com/en/tutorial/sku-registration-fields--21DDItuEQc6mseiW8EakcY "").

### Price per quantity

At VTEX, you can set the price of an item according to its quantity. When configuring the [fixed price](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy "") of an SKU, you can also determine a [minimum product quantity to sell it](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy#item-minimo-no-carrinho ""). In other words, the product price will be adjusted depending on the number of items the consumer adds to the cart.

For example, suppose that a product costs US$ 100 per unit, and the product's price remains the same if you buy up to 10 units. However, if the customer adds 12 items to the shopping cart, the price per unit will be lower: US$ 98.

This is a resource that meets the needs of wholesale businesses. Currently, there are three ways to establish a fixed price at VTEX. See all the methods in our article [how to register fixed prices](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3g39iXkQza4AW7C7L814mj "").

>ℹ️ Before you keep going on your reading, check our article about [the most used promotions for the B2B context](https://help.vtex.com/es/tutorial/as-promocoes-mais-comuns-em-b2b--XoM951AzUIvfaH71UdANf?&utm_source=autocomplete).

### Product kits

In VTEX, all stores have the [product kit](https://help.vtex.com/en/tutorial/kit-registration?locale=en "") feature, which allows you to sell a set of items for a specific price. 

>ℹ️ In B2B, the product kit is often referred to as "bundle." The terms "product kit" and "bundle" refer to the same tool.

To [add a product kit](https://help.vtex.com/en/tutorial/cadastrando-kit/ "") to your store, check the documentation in our Help Center.

### Product Assembly Options or Product Customizer

Product Assembly Options — or Product Customizer — is an application that allows retailers to customize a product's page. For more details on installing the app in your store, check out the [recipe on IO Docs](https://vtex.io/docs/components/all/vtex.product-customizer@2.10.4/ "").

## After-sales tools

The after-sales — or post-purchase — period starts after a consumer places an order and lasts until the order is delivered.

This stage has peculiarities that can be leveraged through some tools. Check out some of them below. 

### Orders management

All VTEX stores have an “Orders management” module, where you can see all [](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2sl6hj2eqwgqbDgTF6y5qE "orders") placed in a store. 

The system includes:

- Details of each order placed in the store, such as buyer data and payment method. 

- The [order flow](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/4811ExCe3WrEiRMV3sy9n8 ""), a tool that monitors the order status during the after-sales period.

- Features to update the order status, such as invoicing.

Check out more details in our [FAQ about the Orders management module](https://help.vtex.com/en/tutorial/faq-vtex-gerenciamento-de-pedidos--4vddUgU784wyGYQ64cw6I8?&utm_source=autocomplete "") in the Help Center. 

### Order again

All VTEX stores have the [My account](https://help.vtex.com/en/tutorial/como-funciona-o-my-account--2BQ3GiqhqGJTXsWVuio3Xh "") feature. 

This tool allows you to monitor the order status in the after-sales flow and carry out operations such as: “Order again”, which allows placing the same order again.  

![Order again](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

For more details on “My Account,” check out the tutorial on [how to configure this feature](https://help.vtex.com/en/tutorial/configurar-o-my-account--23Ayv5D6b86UBnYfoXqZL1 "").

### Order replacement

Order replacement — or [change order](https://help.vtex.com/en/tutorial/change-making-changes-to-an-order--3d1XLIgPQcwaKGyMiWaYog "") — is a feature of the Orders management module in the VTEX Admin. This feature allows retailers to edit orders that have already been placed without canceling them or without support assistance.

To enable order replacement, check out our [article about this feature in the Help Center](https://help.vtex.com/en/tutorial/how-the-order-replacement-works--3aBxdbUPKgweug68YyK8oQ "").
