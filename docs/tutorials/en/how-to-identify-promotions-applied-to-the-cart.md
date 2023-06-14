---
title: Identifying promotions applied to the cart
id: frequentlyAskedQuestions_345
status: PUBLISHED
createdAt: 2019-01-24T20:45:52.336Z
updatedAt: 2023-02-14T21:10:00.343Z
publishedAt: 2023-02-14T21:10:00.343Z
firstPublishedAt: 2019-01-24T22:08:49.142Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: how-to-identify-promotions-applied-to-the-cart
legacySlug: how-to-identify-promotions-applied-to-the-cart
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

There are three ways to understand which promotions are being applied to the cart. Check out the following sections to understand them:

* [Orders management](#orders-management)
* [Cart](#cart)
* [orderForm](#orderform)
* [Promotions Simulator (Beta)](#promotions-simulator-beta)

## Orders management

You can place a test order in the store and then check in **Orders Management** which promotions have been applied.

Example: Imagine an order in which free shipping has been applied, but you don't know the reason. By clicking on an order in **Orders Management**, you would find the name of the promotion registered in the **Sales and Marketing** or **Promotions and Partnerships** section.

<img class="db center mv9 shadow-4 pointer" src="https:https://images.ctfassets.net/alneenqid6w5/1LpXT5YXqbsjb02eAQUsfg/708046486a825d2d2ec3c40ec20a9da2/detalhes-oms-en.png" alt="order-details" style="margin-bottom: 20px;"> <figcaption align = "center"><em>Order details
</em></figcaption></figure>

<img class="db center mv9 shadow-4 pointer" src="https:https://images.ctfassets.net/alneenqid6w5/2mriJhUbQbqrrUSbp7tjaC/6acf4788ee8432dbfb24d7d790197022/detalhes-neworders-en.png" alt="order-details-beta" style="margin-bottom: 20px;"> <figcaption align = "center"><em>Order details
 (Beta)</em></figcaption></figure>

If no promotion is listed, it indicates that the free shipping is not caused by a promotion, i.e. the shipping calculation in the **Inventory & shipping** module has resulted in zero. In this case, you have to use the **Shipping Simulator** to understand why shipping had zero value.

## Cart

In the cart, you can move your mouse over the question mark icon below the price of each item to view the applied discounts, as shown below.

However, if more than one promotion is applied, what appears will be the sum of the discounts, making it difficult to analyze the scenario.

![example-cart](https://images.ctfassets.net/alneenqid6w5/4OuONCFldxuXYgevJ8wU81/324846b73794d9a19305cfb4d9486ab1/image6.png)

## orderForm

<div class = "alert alert-warning">
  <p>To conduct the investigation documented in this section, you must use Google Chrome. Because it is a tool external to VTEX, it can be updated without prior notice.</p>
</div>

On the cart page, you can check the `orderForm`, which is a file in JSON format with all the information corresponding to the order being created.

Follow the step-by-step instructions to find the `orderForm` and identify the promotions applied:

1. At the cart, click the right button of the mouse on the screen, and then on **Inspect**. Another option is to directly access **Developer Tools** using the `Ctrl+Shift+I` shortcut.
2. Click on `Network`.
3. Check the **Preserve log** option.
4. Reload the page.
5. After loading, press `Ctrl+F` to perform the search in the **Developer Tools**. Type `orderForm` in the search bar. ![order-form](//images.contentful.com/alneenqid6w5/jtqrcUjDAAqoMUGiYM4qE/94803953c1577a7954ba09f163738e0e/order-form.png)
6. Click on the `orderForm` line. A new window will open next to it.
7. Click on `Preview`.
8. Search for `ratesAndBenefitsData` and click on the item.
9. Click on the `ratesAndBenefitsIdentifiers` subitem.
10. There will be an index for each promotion that is being applied.

    Within this index information, the `name` field shows the name of the promotion registered in the **Promotions & Taxes** module.

    The `ID` field shows the unique identifier of the promotion registered in the **Promotions & Taxes** module. You can access the promotion settings directly from the URL `https://{accountName}.vtexcommercestable.com.br/admin/rnb/#/benefit/{id}`, replacing `{accountName}` with your account name and `{id}` with the promotion ID.

## Promotions Simulator (Beta)

The Promotions Simulator is a tool that allows you to see not only the promotions created in the VTEX platform and which were applied to the shopping cart, but also their activation conditions. Since there are multiple configurations for the promotions, it is important to be able to see the [competition](https://help.vtex.com/en/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270), the accumulation of promotions during the purchase and the causes that trigger them.

For more information, read the [Promotions Simulator (Beta)](https://help.vtex.com/en/tutorial/simulador-de-promocoes-beta--4zc8SNqjqeIJ0ZRMhjlnvy) article.

## Learn more

* [How promotions work](https://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N)
* [How to identify promotions attributed to an SKU?](https://help.vtex.com/en/tutorial/how-to-identify-promotions-attributed-to-an-sku--frequentlyAskedQuestions_4813)
