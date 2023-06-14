---
title: Regular promotion with reward value
id: 3FCip23ZtvG0sDt0rVGVmR
status: PUBLISHED
createdAt: 2022-08-23T18:21:22.729Z
updatedAt: 2022-08-23T19:37:56.358Z
publishedAt: 2022-08-23T19:37:56.358Z
firstPublishedAt: 2022-08-23T19:30:54.880Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: regular-promotion-with-reward-value
legacySlug: regular-promotion-with-reward-value
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

The [Regular Promotion](https://help.vtex.com/en/tutorial/regular-promotion--tutorials_327) offers discounts in a flexible way, combining multiple conditions, restrictions and benefits. One of the possibilities of this type of promotion is to provide a reward value to your customers, i.e. a credit that acts as cashback to be used in future store purchases. The purpose of this type of discount is to generate loyalty through recurrence of purchases, i.e. to offer an incentive for customers to return to shop in the store.

In this article, we explain:
- [Types of reward values](#types-of-reward-values)
- [How to set up restrictions](#how-to-set-up-restrictions)
- [How reward values work](#how-reward-values-work)

## Types of reward values

You can create a [regular promotion](https://help.vtex.com/en/tutorial/regular-promotion--tutorials_327) in **Promotions & Taxes > Promotions > New Promotion > Regular Promotion**. When choosing the type and value of the discount, there are two options available for offering a reward value:

- [Nominal reward value](#nominal-reward-value)
- [Percentage reward value](#percentage-reward-value)

### Nominal reward value

The **nominal reward value** adds a fixed credit amount to the user's account in your store. To set up this type of reward value, you must fill in the following fields on the [regular promotion form](https://help.vtex.com/en/tutorial/regular-promotion--tutorials_327#1-promotion-overview):

* **Nominal value for rewards program:** Credit amount that will be added to the customer's account in your store.
* **Apply reward credit when the order status changes to:** Field to define from which order status the credit will be made available. The options are **Invoiced** or **Payment Approved**.

In the following example, the customers will earn R$10,00 in store credit when the order status changes to **Invoiced**.

![vf-nominal-en](//images.ctfassets.net/alneenqid6w5/5i67rFawcAHCOpI84bBP2U/fc3a24297d99657c141f3b8d295f6f69/vf-nominal-en.png)

### Percentage reward value

The **percentage reward value** adds a percentage credit amount based on the price of the product purchased. To set up this type of reward value, you must fill in the following fields on the [regular promotion form](https://help.vtex.com/en/tutorial/regular-promotion--tutorials_327#1-promotion-overview):

* **Percentage value for rewards program:** Percentage of the value of the order that will be added as credit to the customer's account in your store.
* **Apply reward credit when the order status changes to:** Field to define from which order status the credit will be made available. The options are **Invoiced** or **Payment Approved**.

In the following example, customers will earn 20% of the purchase value when the order status changes to **Payment Approved**.

![vf-percentual-en](//images.ctfassets.net/alneenqid6w5/4EIq0OwX5GI1FgdWk0JHje/4b8f2e869e868607f53e9d8dae42b175/vf-percentual-en.png)

## How to set up restrictions

In addition to defining the reward value, you must configure the other data and restrictions of your promotion, i.e. define the items to which the promotion will be applied and the conditions for it to be valid.

The following are some examples of configurable restrictions so that regular promotions with reward values may be applied to specific scenarios:

* Purchases from a specific amount.
* Purchases of specific products from a particular collection.
* Delivery addresses that are part of a given range of Postal Codes.
* One purchase per customer.

You can make these settings in **Promotions & Taxes > Promotions > New Promotion > Regular Promotion**. To do so, follow the instructions described in the article [Regular Promotion](https://help.vtex.com/en/tutorial/regular-promotion--tutorials_327).

## How reward values work

The credit is made available to the customer who places an order compatible with the [restrictions set out in the promotion](#how-to-set-up-restrictions). This happens after the order is changed to the defined status, which may be **Invoiced** or **Payment Approved**.

Credits are cumulative, i.e., if customers place further orders within the promotion criteria, they will receive more credits that will be added to the previous ones that have not been used. Credits have no expiration date.

You can view the applied value in [Orders management](#orders-management).

Once the credit is made available, the customer can view and use the applied value for future purchases during [checkout](#checkout). 

Read the following sections for more details on reward values in other contexts:

- [Orders management](#orders-management)
- [Checkout](#checkout)

### Orders management

When a customer places an order which is eligible to receive a reward credit, you can view the applied promotion and value in the VTEX Admin under **Orders management > All Orders** on the Order details page.

The name of the promotion applied to the order appears in the **Sales and marketing** section:

<img class="db center mv9 shadow-4 pointer" src="https://images.ctfassets.net/alneenqid6w5/1LpXT5YXqbsjb02eAQUsfg/708046486a825d2d2ec3c40ec20a9da2/detalhes-oms-en.png" alt="order-details" style="margin-bottom: 20px;"> <figcaption align = "center"><em>Order details
</em></figcaption></figure>

<img class="db center mv9 shadow-4 pointer" src="https://images.ctfassets.net/alneenqid6w5/2mriJhUbQbqrrUSbp7tjaC/6acf4788ee8432dbfb24d7d790197022/detalhes-neworders-en.png" alt="order-details-beta" style="margin-bottom: 20px;"> <figcaption align = "center"><em>Order details
 (Beta)</em></figcaption></figure>

In the **Order flow** section, you can check the reward value applied:

![fluxo-oms-en](//images.ctfassets.net/alneenqid6w5/62q5OKyu3BqHmbd23HVyOc/cd08683f3137aa01fd0e88138865a36e/fluxo-oms-en.png)

If you use the new [Order details (Beta)](https://help.vtex.com/en/tutorial/order-details-page-beta--2Y75n54Cc9VizrlG1N6ZNl) interface, go to `See interactions` to check the applied value:

![interacoes-neworders-en](//images.ctfassets.net/alneenqid6w5/7jjz0zNzeoZbOZ4PapQ836/111404a4067208154e3eb05fe28df3aa/interacoes-neworders-en.png)

Consider that the promotion applied to the order illustrated offers a **percentage reward value** of **50%**. Therefore, the client earned a credit of `R$ 54.28` for  future purchases, which is equivalent to **50%** of `R$ 108.55`, the total value of the order.

### Checkout

The reward value available for use is displayed to your store customers at the **Payment** stage during checkout, as shown below.

![checkout-pt (1)](//images.ctfassets.net/alneenqid6w5/6TNM6G9j4f3vnD7JERO6TE/60bf6f957d722190baf2c3c3e9b8a302/checkout-pt__1_.png)

The applied value can be used to calculate the payment. To do so, the customer must click on `use credit` and then enter the value they want to use.

Note that the value will be discounted from the other method of payment selected. In the following example, the _boleto_ shows the amount of `R$ 113.50`, which corresponds to `R$ 167.80` minus the reward value used (`R$ 54.30`).

![checkout-2-pt (1)](//images.ctfassets.net/alneenqid6w5/6pM4KJyCPRijRDFqLHNehz/26f4604ae74e66ebfc41040164d8c1e9/checkout-2-pt__1_.png)

## Learn more

* [Regular Promotion](https://help.vtex.com/en/tutorial/regular-promotion--tutorials_327)
