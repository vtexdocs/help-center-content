---
title: 'Creating a More for Less promotion'
id: tutorials_325
status: PUBLISHED
createdAt: 2017-04-27T22:08:17.186Z
updatedAt: 2025-03-18T10:40:50.841Z
publishedAt: 2025-03-18T10:40:50.841Z
firstPublishedAt: 2017-04-27T23:03:15.551Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: creating-a-more-for-less-promotion
legacySlug: creating-more-for-less-promotion
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

The More for Less promotion gives customers discounts when they add a certain quantity of the same product to their cart. A classic example would be the "Buy 2 Get 3" promotion.

In this article, we'll explain the steps required to set up a More for Less promotion:

- [Creating a More for Less promotion](#creating-a-more-for-less-promotion)
- [Configuring general information](#configuring-general-information)
		- [Defining participating sellers](#defining-participating-sellers)
		- [Selecting trade policies for the discount](#selecting-trade-policies-for-the-discount)

- [Configuring the More for Less promotion](#configuring-the-more-for-less-promotion)
		- [Advanced settings](#advanced-settings)

- [Conditions for applying the promotion](#conditions-for-applying-the-promotion)
- [Setting usage restrictions](#setting-usage-restrictions)
- [Configuring combination and competition](#configuring-combination-and-competition)
- [Displaying the promotion on the product page](#displaying-the-promotion-on-the-product-page)

## Creating a More for Less promotion
1. In the VTEX Admin, go to **Promotions > Promotions**, or type **Promotions** in the search bar at the top of the page.
2. Click the `Create Promotion button`.
3. Select the option More for Less and enter the required information. Below are details about the fields that you need to complete.
4. Click `Save`.

In this step, you will complete the general information for the promotion. Complete the following fields:

| Campo                     | Descrição |
|---------------------------|-----------|
| **Name**                  | Choose a descriptive name for the promotion (up to 150 characters). |
| **Status**                | Define whether the promotion will be Active or Inactive. An Active promotion will be applied based on the configured dates and times. If Inactive, the promotion will be paused, even within the scheduled period. |
| **Description**           | Write a brief description of the promotion (up to 10,000 characters), highlighting its main objectives. |
| **Start date time**       | Define the date and time the promotion will start. Set the exact date and time the promotion will be automatically activated. |
| **End date and End time** | Define the date and time the promotion will end. Set the exact date and time the promotion will be automatically deactivated. |
| **Use recurrence settings** | Activate this option if you want the promotion to repeat automatically on specific days and times. Use it for weekly, monthly, or campaigns set to specific intervals. |

### Defining participating sellers

Define whether the promotion will apply to all your sellers or only to specific ones.  
Select one of the following options to apply the promotion:

- **All:** The promotion will be applied to all sellers. Use this option if you want all products from all sellers to be part of the campaign.

- **Equal to:** Select this option to include only specific sellers in the promotion.  
  After selecting "Equal to," you can choose the sellers you want to include in the field below.  
  Only selected sellers will have their products in the campaign.

- **Different from:** Select this option to exclude specific sellers from the promotion.  
  After selecting "Different from," you can choose the sellers *you don't want to include* in the campaign.  
  All other sellers will be included.

### Selecting trade policies for the discount

Select the trade policies valid for the discount. You can offer discounts for trade policies where  
[your store acts as a marketplace](https://help.vtex.com/pt/faq/o-que-e-um-marketplace) (My Store) or a seller (Third Party Stores - Fulfillment).

Choose from the following options:

- **Equal to:** Select the trade policies you want to include in the promotion.  
  This option allows you to determine the policies that will apply to the products eligible for the discount.

- **Different from:** Selects the trade policies you want to exclude from the promotion.  
  This option removes specific policies, ensuring the discount is not applied to products that use those business rules.

- **All:** Select this option to apply the promotion to all trade policies without any restriction.  
  All products, regardless of their associated trade policy, will be included in the promotion.

## Configuring the More for Less promotion

In this section, you define the promotion rules based on the number of products the customer needs to purchase to get the discount.  
Follow the instructions below to complete the fields:

- **The customer buys [X] of the following products:**  
  Provide the minimum number of products the customer must add to the cart to apply the discount.  
  Enter the value directly into the numeric field.

- **SKUs:**  
  Add the specific SKUs that will be part of the promotion, entering the product identifiers directly into the field.  
  The limit for creating a buy more, pay less promotion conditioned by SKUs is 100 SKUs.

- **Collections:**  
  Selects a product [collection](https://help.vtex.com/en/tutorial/criando-colecao-de-produtos--tutorials_244). This option simplifies promotion management for groups of items with similar characteristics.

- **The customer gets [Y] of these [X] products with discount:**  
  Define how many products the customer can get a discount on when they meet the minimum configured quantity.  
  Enter the number in the corresponding field.  
  For example, in a "Buy 2 Get 3" promotion, configure the settings so that the customer gets 2 products with a discount.

- **Discount of:**  
  Determine the type and value of the discount to be applied to the products.  
  Select between **% (percentage)** or **fixed value** and enter the desired value.

### Advanced settings

The advanced settings allow you to define how the discount will be applied to the selected products.  
Complete the fields and select the options that best suit the promotion rules:

**The discount must be applied:**

Considering:

- **Any item:** The discount applies to any product within the configured criteria, without them having to be the same.
- **Must be the same item:** The discount only applies to items that are the same (same SKU).

To these products:

- **Cheapest:** The discount will be applied to the products with the lowest price.
- **Most expensive:** The discount will be applied to the products with the highest price.

**How should the discount be distributed?**

- **Only between the [X] items that get a discount:**  
  The benefit will apply exclusively to the specified number of items.  
  For example, if three items are configured, only these will get the discount.

- **Proportionally between the [X] items:**  
  The total amount of the discount will be distributed proportionally among all the items.

## Conditions for applying the promotion

Define restriction conditions for the promotion. Conditions allow the promotion to activate under specific circumstances based on the selected criteria.

To add a condition, follow the instructions below:

- **Order total:** Sets the amount limits to apply the promotion based on the sum of the original amount of the items. Complete the fields below to configure the conditions:
  - **Minimum order amount:** Set the minimum amount required to activate the promotion.  
    Select the items that will be included in the calculation: only items included in the promotion, only items not included in the promotion, or all items in the order.
  - **Maximum order amount:** Set the maximum amount allowed to apply the promotion.  
    Select the items that will be included in the calculation: only items included in the promotion, only items not included in the promotion, or all items in the order.

- **Payment method:** The promotion is only applied when the customer uses one of the previously configured payment methods.  
  The options include:
  - Boleto Bancário (Brazil).
  - Credit cards, such as Visa or Mastercard.
  - Other methods, such as Diners or Hipercard.

- **Card BIN:** Apply the promotion with cards from specific networks, banks, or categories identified by their BIN codes.  
  Import a list of BINs saved in a TXT or CSV file, with each BIN on a separate row.

- **Customer cluster:** Select an already created [customer cluster](#) in Master Data, following the `field=value` or `field contains value` format.  
  Choose one of the following:
  - **All of the following:** Apply the promotion only if all cluster criteria are met.
  - **At least one of the following:** Apply the promotion if at least one of the cluster criteria is met.

- **UTM:** Configure the promotion to apply when the site is accessed via a URL with [UTM parameters](https://help.vtex.com/en/tutorial/o-que-sao-as-utms-internas-utmi-cp-utmi-pc-e-utmi-p--5Pvo8ufYWs00AUeCCEY68a) or when a coupon linked to these parameters is used.  
  Set the UTM parameters according to the formatting rules, using only letters, numbers, hyphens, and underscores.  
  Set the following parameters if necessary:
  - **utm_source:** Apply the discount when browsing occurs through the configured utm_source parameter.
  - **utm_campaign:** Apply the discount when browsing occurs through the configured utm_campaign parameter.
  - **Create coupon from the UTM parameters above:** Generate a coupon based on the UTM parameters entered in the `UTM_source` and `UTM_campaign` fields.
  - **View linked coupons:** View the coupons that have already been associated with the defined UTM parameters.

- **Price list:** Restrict the promotion based on the presence or absence of a list price on the selected products.  
  Choose one of the options below:
  - **Price list not defined:** Apply the promotion only to items with equal "full" and "discounted" values, which indicates that they don't have a [price list](https://help.vtex.com/en/tutorial/precos-v2) configured.
  - **Price list defined:** Apply the promotion only to items with different "full" and "discounted" values, which indicates that they have a price list.

## Setting usage restrictions

In this section, you will determine whether the promotion can be combined with other promotions.  
The available options are:

- **Limit the use of the promotion in the store:**  
  Restrict the number of times the promotion can be used in the store.

- **Limit the use of the promotion per customer:**  
  Restrict the number of times each customer can use the promotion.

- **Limit the number of eligible items per cart:**  
  Define the maximum number of items per order that will get the discount.

## Configuring combination and competition

Define how the promotion will be combined with other business conditions applied in the store:

- **Allow combining with other promotions:**  
  Allows the promotion to be applied simultaneously with other promotions, including additional discounts such as free shipping or gifts. Learn more in the [How promotion competition works](https://help.vtex.com/en/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270) article.

- **Allow combining with manual prices:**  
  Select this setting so that the promotion is applied to products whose price has been adjusted.

## Displaying the promotion on the product page
In this section, you can highlight the promotion on the product listing page and add custom data for in-store customizations.

- **Highlight promotion on products:** Check this option to display the promotion directly on the product listing pages.

<div class="alert alert-warning">
  Remember <a href="https://help.vtex.com/en/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295" target="_blank">configure this option in the CMS module</a>.
</div>

- **Additional information:** Click `Create` to add custom fields with name and value, which can be used for store customizations.
