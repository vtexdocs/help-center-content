---
title: 'Regular Promotion'
id: tutorials_327
status: PUBLISHED
createdAt: 2017-04-27T22:07:59.690Z
updatedAt: 2024-05-15T16:38:18.730Z
publishedAt: 2024-05-15T16:38:18.730Z
firstPublishedAt: 2017-04-27T23:03:15.647Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: regular-promotion
locale: en
legacySlug: regular-promotion
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

VTEX allows you to [create many types of promotions](https://help.vtex.com/en/tutorial/creating-promotions--tutorials_320#como-criar-promocoes) for different scenarios, but the most used one is the Regular Promotion. It allows your store to offer discounts in a dynamic and flexible way, combining multiple conditions, restrictions and benefits.

In this article, we describe each field in the regular promotion configuration steps listed below.

1. [Promotion overview](#1-promotion-overview)
    - [Restrict this promotion to products from sellers](#restrict-this-promotion-to-products-from-sellers)
    - [Trade Policy](#trade-policy)
2. [To which items will this promotion apply?](#2-to-which-items-will-this-promotion-apply)
3. [What are the conditions for the promotion to be valid?](#3-what-are-the-conditions-for-the-promotion-to-be-valid)
4. [Restrictions and limitations of use](#4-restrictions-and-limitations-of-use)

To understand the implementation of promotions, read the article on [Promotion Examples](https://help.vtex.com/en/tutorial/promotion-examples--5A8UTc7knvAscxo7e7rMFD?&utm_source=autocomplete#).

## 1. Promotion overview

In this section, you must configure the general information of your promotion. The fields **Name**, **Expiration date** and **What is the type and amount of discount** are mandatory.

- **Name**: Promotion name.
- **Status:** Activate or deactivate the promotion.
- **Description**: Promotion's internal description. This field is used in your store's internal communication to show the promotion's origin (campaign, stock clearance, etc).
- **Expiration Date:** Promotion's start and end date and time. A future date and/or time can be used to launch the promotion on the website. If configured this way, the promotion will have a scheduled status until the set date and time are reached. As long as the promotion is valid, it will be active and, at the end of the set date and time, the status will change to inactive automatically.
- **Use recurrence settings**: This option is a checkbox type options that when checked makes seven other checkboxes available to select the days of the week and the hours of the day during which the promotion will apply. If you want the promotion to apply on every day of the week, do not select this option.
- **What is the type and amount of discount?**: A selection that defines the kind and amount of discount that will apply to the promotion. See the discount options below:

  - **Nominal**: Exact discount to be applied for the total purchase value.
  - **Nominal shipping**: Exact discount to be applied for the shipping value.
  - **Percentage**: Percentage discount to be applied for total purchase value.
  - **Maximum Price per Item**: The maximum price for each item of the purchase will be the price set up.
  - **Percentage shipping**: Percentage discount to be applied for shipping value. 
  - **Maximum shipping**: Shipping maximum value. 
  - **Free Shipping**: 100% discount on shipping value.
  - **Gift**: Total discount on the product value set as a gift. You can choose more than one SKU as a gift or more than one unit of an SKU. To set more than one gift, select **Activate gift multiplier** and set the maximum selectable quantity.  For more information, read this [article](https://help.vtex.com/en/tutorial/gift-multiplier-in-promotions--1gydgkmjEWcoo2CskUwuYK#).
>ℹ️ The gift also needs to have a nominal price, even if it's given for free to the customer.
  - **Nominal discount based on formula**: the discount is calculated based on the a formula that you can create using the products' total price (`total`), shipping fees (`freight`), and quantity of items (`quantity`) as variables. Note that the shipping value in the formula will be the lowest available for the order, regardless of the customer's selection. The decimal separator symbol must always be the decimal point. For example: if the discount is 30% of the total product value + shipping value, the formula should be `(total + freight) * 0.3`. For more information on the formula, read our [documentation](https://help.vtex.com/en/tutorial/regular-promotion-with-nominal-discount-based-on-formula--2Pwrq6THyGViNedQG381jV).
  - **Nominal reward value**: Nominal value for rewards program. Read [Regular promotion with reward value](https://help.vtex.com/en/tutorial/regular-promotion-with-reward-value--3FCip23ZtvG0sDt0rVGVmR) for more information.
  - **Percentage reward value**: Percentage value for rewards program. Read [Regular promotion with reward value](https://help.vtex.com/en/tutorial/regular-promotion-with-reward-value--3FCip23ZtvG0sDt0rVGVmR) for more information.
  - **Promotional price table**: Price table used for promotions. The promotional price of each SKU will be its corresponding value in the selected price table.

- **Promotion is highlighted:** If you select **Yes**, you can insert a flag with the promotion name used in the product's window display and page. This tag will only be added if you use the correct promotion display control in the template: `<vtex.cmc:discountHightLight/>`.

>ℹ️ **Nominal** promotions will only be displayed in the cart, not on the shelf or product page.

### Restrict this promotion to products from sellers

In this section, you can set which sellers the promotion will apply to as well as determine which ones will be included or excluded from the discount applied. 

- **Equal to:** Select the desired sellers' names to include them.
- **Different from:** Select the desired sellers' names to exclude them.

To enable a promotion for all sellers, leave the checkbox empty.

>⚠️ You cannot directly select a white label seller. To include a white label seller to the promotion, there are two options:1. Restrict sellers to the main store. This restriction adds all your store's white label sellers to the promotion.2. Leave the checkbox empty to include all sellers, meaning that all types of sellers - whether white label or not - will be added to the promotion.

### Trade Policy

This section establishes the valid sales policies for the promotion. You can include or exclude sales policies from the discount applied.

- **Equal to:** Select the desired sales policies to include.
- **Different from:** Select the desired sales policies to exclude.
- **Provided by me (My Store):** Select sales policies which apply to your store's products. More than one sales policy can be selected.
- **Delivered by me (Other stores):** Selecting sales policies in which your products are from third-party stores. More than one sales policy can be selected.

For the promotion to be valid for all sales policies, leave the checkboxes empty.

## 2. To which items will this promotion apply?

In this section, you need to choose whether this promotion will apply to all products in your store or only to specific products, as illustrated below.

![promocoes-restricao-en](https://images.ctfassets.net/alneenqid6w5/55xxIduLJDJrwQMuk4OgRu/adc5cdd25eb79636530e31e668b765e3/image.png)

If you want the promotion to apply to your entire catalog, select the **Apply to all products** option.

To limit your promotion to specific products, select **Apply to the following products** and then fill in the selection criteria for **Categories**, **Brands**, **Collections**, **Products** and **SKUs**.

You can add or remove **Categories**, **Brands**, **Collections**, **Products** and **SKUs** from the promotion using the **Equal to** or **Different from** criteria.

See an example below. In this case, the promotion includes all products from the category **Home Appliances** whose brand is **Brastemp**, except the product **Refrigerator 100**.

![exemplo-en](https://images.ctfassets.net/alneenqid6w5/69J3NHBR8yLbbn04SSc5er/b3d7c4dff6f1039056bbd2a246f05b19/image.png)

In the **Products** and **SKUs** fields, you can opt to upload a **.txt** file with one product or SKU ID per row instead of selecting one product or one SKU at a time. To do this, click on **Choose file** and select your **.txt** file.

>⚠️ If you select **Apply to the following products** and do not fill in any selection criteria, the promotion will not be created, and the following message will appear: **Set eligible products or apply to all products**. In this case, go to the previous field and fill in the selection criteria or select **Apply to all products**.

Products must meet all the conditions specified in this section to be available in the promotion.

## 3. What are the conditions for the promotion to be valid?

The customer's request must meet the conditions added in this section to be valid in the promotion.

- **Minimum and maximum order value:** for price promotions that directly adjust the value of items in the cart, the promotion activation is based on the original price of the items. And for promotions that offer other benefits, such as free shipping or gifts, the price considered to activate the promotion is the price already discounted.
- **Aggregate value of purchases:** The discount will apply if the total value of all purchases made by the customer reaches the required value.
- **Item price between:** The discount will apply if the value of the item is within the range of values set by the store.
- **Price "From" and "to"; prices are the same** or **"from" and "to" prices are different:** Refers to the added product values. Only one can be selected.
- **Use restriction BINs:** The discount will be granted if the card's BIN is given.
- **Marketing Tags:** Field used to restrict the activation of the promotion. 
- **Affiliates:** Marketplace order identifier. The discount will apply to selected affiliates. Read the article on [What is an affiliate](https://help.vtex.com/en/tutorial/what-is-an-affiliate--4bN3e1YarSEammk2yOeMc0?locale=en) for more information.
- **Customer cluster:** The discount will apply if the client is part of the selected cluster. It is important to stress that the name of the cluster must be the same as the one added; any spelling error will prevent the correct functioning of the configuration.
- **Shipping countries**: The discount will apply to the selected countries given in this field. 
- **Shipping to postal code should:** The discount will apply if the postal code follows the configured rule.
- **Shipping Method:** The discount will be granted if the shipping method is the same as the one given. This criterion is only applicable to shipping discounts, such as Percentage rate discount, Nominal rate discount, Maximum value rate or Free shipping.
- **Apply the discount only to the cheapest shipping option:** Apply the discount only to the cheapest shipping option: If you enable this option, the shipping discount will be applied only to the cheapest shipping option. This option is already enabled by default, but you can disable it if you want to apply the discount to other shipping options. Read the article [Setting up shipping discounts](https://help.vtex.com/en/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW) for more information. This criterion is only applicable to shipping discounts, such as Percentage rate discount, Nominal rate discount, Maximum value rate or Free shipping.
- **Apply selected discount only when one of the above carriers is selected by the customer:** The promotion will apply only after the customer has effectively selected the delivery method in question. Until that method is selected, no discount is applied. This criterion is only applicable to shipping discounts, such as Percentage rate discount, Nominal rate discount, Maximum value rate or Free shipping.
- **Payment method:** The discount will be granted if the payment method selected by the customer is the same as the one given. This discount will only be applied at checkout, when the customer selects the same payment method added for the promotion.

 >ℹ️ By default, you can add up to 20 payment methods per promotion. In addition, you can include up to 100 payment methods via customization. If you need to use more than 20, contact [our Support](https://support.vtex.com/hc/pt-br/requests).

- **Number of installments:** The discount will apply if the number of installments selected by the customer is less than or equal to the maximum number set.

>⚠️ **Warning**: Promotions by payment method and number of installments are not valid for orders paid using two cards or gift cards.

- **Utm\_source:** The discount will apply if browsing is done through the **utm_source** that contains the set value. The customer can only enter one **utm_source** at checkout.
- **Utm\_campaign:** The discount will apply if browsing is done with the utm_campaign that contains the set value.
- **Create a new coupon with the UTMs above:** Create a coupon with given UTMs to give the customer access to the promotion without UTMs, simply by using a coupon code.
- **Utmi\_cp:** The discount will apply if navigation is done with the utmi_cp that contains the set value (case sensitive).

>ℹ️ The UTMs field must only contain the value that the UTMs will have to have to activate the discount. No need to insert <i>?utm_source=</i> in the field

- **Only if it's a first buy:** The discount will only apply for the customer's first purchase.
- **Is a subscription order**: Option that defines that the promotion will apply to subscription orders. See the conditions below:
  - **First orders**: Orders that generate subscriptions but are not yet part of subscription cycles.
  - **Recurrent orders**: Orders from subscription cycles.
  - **Filter by**: Selection that filters which subscription orders will be valid for the promotion.
      - **Frequency**: A selection of the frequency of subscription orders - weekly, monthly and yearly.
      - **Cycle number**: A selection of the subscription cycles that will be included in the promotion. This option is unlocked only if **Recurring orders** is selected.

- **Apply the discount even if the user is not logged in?:** This field is available when the field **Only on the first buy**; is selected. If this field is selected, the promotion will apply even if the consumer has not entered their email and password. If it is not selected, the promotion will only apply if the customer is browsing while logged in with the previously added email and password.

## 4. Restrictions and limitations of use

- **How many times will your promotion be applied in your store:** Limits how many times the promotion can be applied. When the **unlimited** option is not selected, a field becomes available to set how many times you want the limit to be. Once the promotion is created, this condition will only be applied from the day it was configured, not affecting previous orders.
- **How many times will your promotion be applied in your store for each client:** This restriction is not related to the global usage of the promotion, but to how many times each customer can receive this promotion. If the field above is also selected, its priority will come before this limit.
- **Define maximum quantity of affected items by cart**: Sets how many items will be affected by the promotion from those present in the shopping cart. Find out how to configure this field in [this article](https://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#limite-de-itens-com-promocao-no-carrinho).
- **Allow accumulated promotions:** Allows more than one promotion with the same discount type to apply concomitantly. For more information, read our articles on the [competition of promotions](https://help.vtex.com/en/tutorial/about-promotions-competition--tutorials_2270#).
- **Allow to accumulate with manual prices:** Allows the promotion to apply to products whose prices have been manually added by a call-center operator. To enable manual pricing functionality, use the endpoint [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).
