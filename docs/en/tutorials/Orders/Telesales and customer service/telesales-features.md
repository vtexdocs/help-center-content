---
title: 'Telesales features'
id: UqhiccIRIK2KD0OqkzJaS
status: CHANGED
createdAt: 2021-05-13T18:26:51.189Z
updatedAt: 2023-12-20T16:58:46.983Z
publishedAt: 2023-10-18T17:09:06.185Z
firstPublishedAt: 2021-05-17T12:07:02.897Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: telesales-features
locale: en
legacySlug: telesales-features
subcategoryId: 6SEjoixhY5LlA7G15W6oZS
---

The telesales features provide your store's customer service team with the autonomy to support customers in the buying, tracking and changing orders processes.

Here are the telesales features available on VTEX:

- [Telesales toolbar](#telesales-toolbar)
    - [My Account](#my-account)
    - [Shop on customer's behalf](#shop-on-customers-behalf)
- [Shareable Cart](#shareable-cart)
- [Manual pricing](#manual-pricing)
- [Orders management](#orders-management)

To have access to the telesales toolbar, the price input feature, and the **All Orders** page, the user needs to be assigned the [Call center operator user role](https://help.vtex.com/en/tutorial/como-criar-um-usuario-de-televendas--frequentlyAskedQuestions_4227) in the store. In addition, it is necessary to configure these features beforehand, following the steps in the tutorial [Configuring telesales features](https://help.vtex.com/en/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R).

After logging in, the telesales operator will be redirected to the store's home page.

## Telesales toolbar

The telesales toolbar is displayed at the top of your store's website for users with the **Call center operator** role. Through this toolbar, telesales operators can browse the store, make purchases and manage orders on behalf of customers.

To learn how to use this feature, check out the [Telesales toolbar](https://help.vtex.com/en/tutorial/usando-e-customizando-toolbar-de-televendas--tutorials_5500) tutorial.

>ℹ️ A use case for the telesales feature is to import orders from other platforms to the VTEX **Orders** module. To do this, you can associate a specific [trade policy](https://help.vtex.com/en/tutorial/creating-a-sales-policy--563tbcL0TYKEKeOY4IAgAE) with payment [Notes Payable](https://help.vtex.com/en/tutorial/setting-up-payments-with-notes-payable--5pW7avTwtyQcMu4uiW8quQ) (payment method immediately and manually approved by the operator).

### My Account

When browsing the store on behalf of the customer through the toolbar, the telesales operator can access the **My Account** page to manage personal data, addresses, orders, credit cards, and subscriptions.

Learn more in our tutorial [How My Account works](https://help.vtex.com/en/tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh).

### Shop on customer’s behalf

To place an order on behalf of the customer, the telesales operator must log into the store as a customer from the toolbar and follow the purchase flow, adding products to the shopping cart, filling in the delivery and payment information, and completing the purchase.

When the telesales operator places an order on behalf of the customer, the operator's email address will be specified in the order details, which can be viewed in the **All Orders** page.

## Shareable cart

The Shareable cart feature allows the telesales operator to add to the shopping cart the products requested by the customer. After that, the operator has to share the shopping cart link with them so they can complete the purchase.

In this case, the operator's email address will not appear in the order details.

To use this feature, you must install and activate the [Shareable cart (Social Selling)](https://help.vtex.com/en/tutorial/como-ativar-o-app-carrinho-compartilhavel--1lS3fQdXpOoC0BTeVhydfg) app.

Learn more in the article [How to use the Shareable Cart app](https://help.vtex.com/en/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN).

## Manual pricing

The telesales operator can change product prices in the shopping cart, either when buying on behalf of the customer or when creating a cart to be shared later.

To use this feature, the store's developers must first enable it using the [Checkout API](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

The telesales operator must double-click on the price displayed on the shopping cart and enter a new value to change the product price. There are no restrictions to increase or reduce prices.

After the order is placed, the price entered manually must be approved by the store administrator or an authorized user in the [Orders authorization](https://help.vtex.com/en/tutorial/how-order-authorization-works--3MBK6CmKHAuUjMBieDU0pn) system. Once the price entered is validated, the order proceeds to the billing process.

## Orders management

Users with the telesales role (Call Center operator) can view, track and make changes to orders in the **All Orders** page of VTEX Admin.

To access this page, telesales operators must click the link `https://storeName.myvtex.com/admin/orders`

Learn more in our tutorial [Orders management page structure](https://help.vtex.com/en/tutorial/estrutura-da-pagina-do-oms--2dDZmUUFXWeyQ4s2gqiY0A#todos-os-pedidos).

To understand the main features of the **Orders** module, check out these articles:

- [Changing items in an order](https://help.vtex.com/en/tutorial/como-fazer-a-alteracao-de-itens--tutorials_190).
- [Canceling orders](https://help.vtex.com/en/tutorial/como-cancelar-pedido--tutorials_186).
- [Returning items](https://help.vtex.com/en/tutorial/como-fazer-a-devolucao-de-itens--tutorials_191).
- [Checking error details in an order](https://help.vtex.com/en/tutorial/como-verificar-detalhes-de-erros-nos-pedidos--frequentlyAskedQuestions_6718).
