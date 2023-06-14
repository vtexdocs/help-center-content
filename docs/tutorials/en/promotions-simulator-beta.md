---
title: Promotions Simulator (Beta)
id: 4zc8SNqjqeIJ0ZRMhjlnvy
status: PUBLISHED
createdAt: 2022-09-13T21:22:59.620Z
updatedAt: 2022-09-27T19:37:29.437Z
publishedAt: 2022-09-27T19:37:29.437Z
firstPublishedAt: 2022-09-13T22:59:58.058Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: promotions-simulator-beta
legacySlug: promotions-simulator-beta
subcategory: 6iTRZiMeCGXYiO2ckABFZi
---

<div class = "alert alert-info">
This module is in Beta phase, which means that we are working to improve it. If you have any questions, please contact <a href="https://help.vtex.com/en/support">our Support team.</a>
</div>

<div class = "alert alert-warning">
Users must have a <a href="https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc">role</a> authorized to access the Promotions module in the VTEX Admin in order to access the Promotions Simulator.
</div>

The **Promotions Simulator** is a tool that allows you to see not only the promotions created in the VTEX platform and which were applied to the shopping cart, but also their activation conditions. Since there are multiple configurations for the promotions, it is important to be able to see the [competition](https://help.vtex.com/en/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270), the accumulation of promotions during the purchase and the causes that trigger them.

By using the simulator, you will be able to manage the promotions in your store and target them according to your business strategy.

You can also [manage promotions](#managing-promotions), whether they are active or inactive, by clicking on the `Manage promotions` button.

The simulator interface has five columns:

| **Columns** |**Description**| 
| ----------- | ------------- |
| **Product** | List of products in the cart |
| **Price** | Previous price (of) and final price (by) of the promotion applied |
| **Quantity** | Total number of items in the cart |
| **Total** | Total price that will be charged for the product, considering the promotion discounts and the number of items |
| **Discount** | Status do desconto no carrinho, que podem serDiscount status in the cart, which can be: `Applied` ou `Not applied`. The status `Applied` indicates that at least one promotion has been applied to the product |

<div class = "alert alert-info">
In the right corner of the screen, you'll see a megaphone button <i class="fas fa-bullhorn"></i> through which you can send feedback about your experience using the <b>Promotions Simulator</b>. 
</div>

To take advantage of the benefits of this feature, this article is divided into two sections:

- [Access the Promotions Simulator](#accessing-the-promotions-simulator)
- [Manage promotions](#managing-promotions)

## Accessing the Promotions Simulator

To access this feature, you need to [set up Cartman](https://help.vtex.com/en/tutorial/configurar-o-cartman--1ACMTStZYkMqB0lTgwg451) first, a tool that simulates, shares and researches carts from VTEX stores.

When you access the Simulator, you'll see a list with the products in your cart. You'll see all the promotions that can be applied to each of the items, followed by a check box <i class="fas fa-check-square"></i> in the promotion applied.

The tool includes a search bar to find the promotions by product name or by promotion name. Besides, you can filter the promotions by **Promotion type** and **Discount**.

By clicking on each product, you can see more information about the promotions that can be applied, details about your selection and the condition to activate them.

![simuladordepromocoes acessar](https://images.ctfassets.net/alneenqid6w5/7piR33ciR1x0givnQyxbk7/cdb47a1c812d3fa244aeb6127be100ee/simuladordepromocoes_acessar.gif)

Once Cartman is set up, follow these steps to access the Promotions Simulator:

1. Access your VTEX store shopping cart.
2. Add the products you want to test. 
3. In the shopping cart, open `Cartman`. 
4. Click on the **See promotion details option**.
5. There will appear the promotions applied to the cart. For further details about the promotions, click on See details.
  > You’ll be redirected to the **Promotions Simulator**. When you access the Simulator, you'll see a list with the products in your cart. You'll see all the promotions that can be applied to each of the items, followed by a check box in the promotion applied.
6. In case you modify the products in the cart, click on `Update` to load the new information.

### Edit promotions

To edit a promotion, follow the steps below:

1. Select a product in the **Promotions Simulator**.
2. Click on the name of the promotion you want to edit.
  >  You'll be redirected to the promotion form.
3. Edit the [promotion fields](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#quais-os-dados-gerais-desta-promocao).
4. Once you've made all the changes, click on `Save`.

## Managing promotions

If you want to simulate a new promotion or manage the existing ones, you should click the button `Manage promotions`, located on the top right corner of the screen.

You'll be able to see all the active, paused, scheduled or completed promotions in the cart. By doing so, you'll be able to test a future status of the store. 

![simuladordepromocoes gerenciar](https://images.ctfassets.net/alneenqid6w5/6J3Bp4YcEZ6V5cgVj4dnhM/c0a6896fcec1bb0cf3bbc6ea3362d19f/simuladordepromocoes_gerenciar.gif)

To test a promotion, follow these steps:

1. In the Promotions Simulator, click on `Manage promotions`.
2. Select one or more promotions, regardless of the status.
3. Click on the `Test` button.

To check if the tested promotion has been applied, take a look at the status in the **Discount** column or click on the product for further details.

<div class = "alert alert-info">
You can apply promotions to products that already have an active promotion. Although not all promotions can be applied, the VTEX system will always choose the most favorable one for your store customers, considering the total price of the items or the shipping cost.
</div>

### Learn more

 * [How promotions work](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR)
 * [Promotions for specific scenarios](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy)
 * [Configure Cartman](https://help.vtex.com/en/tutorial/configurar-o-cartman--1ACMTStZYkMqB0lTgwg451)
