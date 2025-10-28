---
title: 'Configuring shipping promotions'
id: 6Lo5BR61KMiUFAAHGCdgfW
status: PUBLISHED
createdAt: 2019-03-27T19:50:39.607Z
updatedAt: 2024-08-12T13:24:18.788Z
publishedAt: 2024-08-12T13:24:18.788Z
firstPublishedAt: 2019-03-27T20:04:38.299Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
slugEN: configuring-shipping-promotions
legacySlug: configuring-shipping-promotions
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

You can create several types of [discount](/en/tutorial/como-criar-promocoes--tutorials_320#) in your VTEX store. Shipping promotions provide the buyer with a discount on the amount charged for the delivery of their order.

The step-by-step instructions for creating a shipping promotion are the same as for [other regular promotions](/en/tutorial/regular-promotion--tutorials_327"). However, some specifics must be taken into account when configuring these discounts.

Before setting up a shipping promotion, you should understand how discounts can be offered to your buyers. On VTEX, there are four types of shipping promotions, which you can choose in the field **What is the type and amount of the discount?** when creating a [Regular Promotion](/en/tutorial/regular-promotion--tutorials_327). Here are the shipping promotion types:

- **Nominal:** a specific discount on the shipping cost. For example,  a $20 discount for deliveries to the West Coast.

- **Percentage:** a percentage discount on the shipping cost. For example,  a 50% discount on the shipping cost for products in the Kids department.

- **Maximum shipping rate:** allows you to set a maximum value for the shipping cost. For example, products "X" and "Y" will have a maximum shipping rate of $20.

- **Free shipping:** full discount on the shipping cost. For example, all orders placed during the holiday will have free shipping.

## Settings

Based on the existing shipping types, you can create different types of promotions.

Below you will find some of the scenarios you can configure on the VTEX platform. The retailer must choose the best option according to their business needs.

### Scenario 1

If you enable the option **Apply discount only to the cheapest shipping rate**, the discount will be applied only to the lowest estimated shipping rate. This option is enabled by default, but you can disable it if you prefer to configure the promotion according to [Scenario 3](#scenario-3) or [Scenario 4](#scenario-4). 

If the store configures the __Pickup__ shipping strategy, which costs R$ 0.00 for the customer, the promotion may consider this value as the lowest and not apply the discount to the shipping fees. To ensure that the promotion works as expected, applying the free shipping discount to the shipping fees, select all methods in the box except __Pickup in Store__.

#### Configuration
![Apply the discount only to the cheapest shipping option - EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/configuring-shipping-promotions_1.png)

#### Result
![saggin frete ingles.PNG?h=250](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/configuring-shipping-promotions_2.png)

### Scenario 2

If you disable the option **Apply discount only to the cheapest shipping rate**, the discount will be applied to all available shipping rates.

#### Configuration
![Nenhum frete selecionado - EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/configuring-shipping-promotions_3.png)

#### Result
![saggincaso2.2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/configuring-shipping-promotions_4.png)

### Scenario 3

If you enable only the **Shipping Method** option and select the shipping types you want, the shipping discount will be applied to all selected shipping types.

#### Configuration
![Shipping Method - EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/configuring-shipping-promotions_5.png)

#### Result
![saggin frete ingles.PNG?h=250](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/configuring-shipping-promotions_6.png)

### Scenario 4

If you enable the options **Shipping Method** and **Apply discount only when one of the above carriers is selected by the customer** and select the shipping types you want, the shipping discount will be applied to all selected shipping types only when the customer chooses the shipping type at checkout.

#### Configuration
![Tipo de Frete e Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente - EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/configuring-shipping-promotions_7.png)

#### Result
![saggin frete ingles.PNG?h=250](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/configuring-shipping-promotions_8.png)

In summary, the purpose of the option **Apply discount only when one of the above carriers is selected by the customer** is to apply the discount only when the carrier is selected.

When configuring the **Promotions & Taxes** module, you can enable more than one carrier for the same promotion. However, your customer will only be able to select one carrier at checkout.

Another possibility is to configure a shipping promotion by creating a campaign promotion. For more information, [read this article](/en/tutorial/creating-a-campaign-benefit--1ChYXhK2AQGuS6wAqS8Ume).
