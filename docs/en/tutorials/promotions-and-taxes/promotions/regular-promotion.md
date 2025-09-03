---
title: 'Regular Promotion'
id: tutorials_327
status: PUBLISHED
createdAt: 2017-04-27T22:07:59.690Z
updatedAt: 2025-08-28T18:35:47.144Z
publishedAt: 2025-08-28T18:35:47.144Z
firstPublishedAt: 2017-04-27T23:03:15.647Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: regular-promotion
legacySlug: regular-promotion
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

VTEX allows [creating multiple promotion types](https://help.vtex.com/en/tutorial/como-criar-promocoes--tutorials_320) to meet different business scenarios, including **Regular promotions**, which are the most common. This promotion type provides a structured way to give discounts, allowing the combination of multiple conditions, usage restrictions, and benefits.  

To set up a Regular promotion, follow the steps below:  

- [Create promotion](#create-promotion)
- [Define conditions for the Regular promotion](#define-conditions-for-the-regular-promotion)
- [Set conditions for applying the promotion](#set-conditions-for-applying-the-promotion)
- [Set usage restrictions](#set-usage-restrictions)
- [Set combination and competition](#set-combination-and-competition)
- [Highlight promotion on the product page](#highlight-promotion-on-the-product-page)

## Creating a promotion
To create the promotion in the VTEX Admin, follow the steps below:

1. In the VTEX Admin, go to **Promotions \> Promotions**, or type **Promotions** in the search bar at the top of the page.
2. Click `Create promotion`.  
3. Select the **Regular** option.  
4. Complete the fields. The table below describes the required fields.  
5. Click `Save`.

|  Field | Description |
| ----- | ----- |
|  **Name** | Name of the promotion. It should be a clear and objective name (up to 150 characters). |
|  **Status** | Defines whether the promotion will be **Active** or **Inactive**. Active <i class="fas fa-toggle-on" aria-hidden="true"></i> applies the promotion based on the configured dates and times. Inactive <i class="fas fa-toggle-off" aria-hidden="true"></i> pauses it, even within the defined period. |
|  **Description** | Sets the promotion objective, such as the campaign type or seasonality.  The limit is 10,000 characters. |
|  **Start date and time** | Sets the exact date and time to activate the promotion automatically. |
|  **End date and time** | Sets the exact date and time the promotion should end. After that, the campaign will be automatically deactivated. The end date must be greater than the start date and time. |
|  **Use recurrence     settings** | Select this option to repeat the promotion on specific days and times automatically. This allows setting up seasonal actions for specific days and times. Once activated, configure the recurrence days and times following the campaign parameters. |

### Defining sellers
In this section, you can specify whether the promotion will apply to all sellers or only to specific ones. Choose one of the options below:  

 - **All:** Applies the promotion to all sellers. Use this option when the campaign includes all products from all sellers.
 -  **Equal to:** Applies the promotion only to the specified sellers. Enter the identifiers in the corresponding field. 
 -  **Different from:** Applies the promotion to all sellers, except those specified.

### Selecting trade policies
Select the trade policies the promotion will apply to:

- **All:** Applies the promotion to all trade policies.
- **Equal to:** Defines the trade policies you want to include.  
- **Different from:** Defines the trade policies you want to exclude.

## Defining conditions for the Regular promotion
In the Customer buys section, define the items that must be in the cart to activate the promotion:

- Apply to all items in the store: The promotion will be applied to all your store items.
- Apply to items that meet the set restrictions: The promotion will be applied only to items that meet the conditions.

Restrictions can be configured based on:

- **SKUs:** Applies the promotion to specific items identified by SKU.  
  - **Equal to:** Applies only to the listed SKUs.  
  - **Different from:** Applies to all SKUs except the listed ones.  

- **Products:** Applies the promotion based on the products, regardless of their SKUs.  
  - **Equal to:** Applies the promotion only to the selected products.  
  - **Different from:** Applies the promotion to all products except the selected ones.  

- **Collections:** Applies the promotion based on collections.  
  - **Equal to:** Applies the promotion only to the selected collections.  
  - **Different from:** Applies the promotion to all collections except the selected ones.  

- **Categories:** Applies the promotion based on catalog categories.  
  - **Equal to:** Applies the promotion only to the selected categories.  
  - **Different from:** Applies the promotion to all categories except the selected ones.  

- **Brands:** Applies the promotion based on the product brands.  
  - **Equal to:** Applies the promotion only to the selected brands.  
  - **Different from:** Applies the promotion to all brands except the selected ones.  

Customer gets:
Defines the benefit that will be applied when the conditions are met. The options include:

- **Discount**  
  - **Fixed amount:** Sets a fixed discount amount (example: $20.00).  
  - **Percentage:** Applies a percentage discount (example: 10%).  
  - **Fixed amount: formula:** Defines a fixed amount discount based on a formula. This type of discount isn't a percentage; it subtracts an absolute amount from the order or item total, as configured in the logic of the formula.  

- **Shipping**  
  - **Fixed amount:** Sets a fixed discount amount for shipping.  
  - **Percentage:** Applies a percentage discount to the shipping.  
  - **Free:** Eliminates the shipping cost.  
  - **Maximum:** Sets the maximum amount that can be charged. Any calculated amount exceeding the maximum will be discounted.  

- **Maximum price:** Sets a limit value that will be applied as a maximum price for eligible products. Items can't exceed this amount after the promotion is applied.  

- **Gift**  
  - **SKUs:** Allows selecting SKUs (by name or ID) associated with the gift being offered.  
  - **Gift quantity:** Defines the number of gifts that can be selected, either per cart or per eligible item.  

- **Reward amount**  
  - **Fixed amount:** Sets a fixed credit based on purchases.  
  - **Percentage:** Calculates credits based on the order amount.  

- **Promotional price table:** Applies the amount defined in the selected price table to the SKUs.  

## Setting conditions for applying the promotion
In this section, you define the conditions that must be met for the promotion to be applied. You can combine different conditions based on the campaign configuration.

- **Order total:** Applies the promotion when the order total reaches or exceeds the set amount.  

- **Item price:** Applies the promotion only to items whose original price is within the specified limits.  

- **List price:** Considers the product's original price (without discounts) for validating the promotion application.  

- **Card BIN:** Applies the promotion only when the card belongs to a network, bank, or category identified by a specific BIN number. Import a TXT or CSV file with the list of BINs, listing one number per line.  

- **Marketing tags:** Applies the promotion when the purchase is made through the VTEX [Subscriptions module](https://help.vtex.com/en/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453).  

- **Affiliates:** Selects marketplaces or partner affiliates eligible for the promotion. For more information, see [What is an affiliate](https://help.vtex.com/en/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0).  

- **Customer cluster:** Allows selecting an existing [customer cluster](https://help.vtex.com/en/tutorial/desconto-progressivo--tutorials_324) from Master Data, following the format `field=value` or `field contains value`. Choose one of the following:  
  - **All of the following:** Applies the promotion only if all cluster conditions are met.  
  - **At least one of the following:** Applies the promotion if at least one of the cluster conditions is met.  

- **Shipping location:** Applies the promotion based on the shipping address associated with the order. Conditions can be configured using the following criteria:  
  - **Countries:** Allows selecting the shipping countries where the promotion will apply. You can add up to 50 countries to the list. The promotion will only apply to orders with shipping associated to the configured countries.  
  - **Postal codes:** Configures postal code ranges to limit the promotion to specific regions.      - **Choose Include or Exclude:** Defines whether the promotion will apply to the configured ranges (Include) or to the excluded values (Exclude).  
    - **Configure the postal code ranges:** Complete the "from" and "to" fields with the desired postal codes.  
    - **Add multiple ranges:** Use the *Add range* option to include multiple postal code ranges, following the campaign criteria.  

- **Shipping method:** Applies the promotion only when a defined shipping method is selected.  

- **Payment method:** Applies the promotion only when the customer uses one of the previously configured payment methods, and there's no more than one payment method in the cart.

- **Number of installments:** Applies the promotion only if the number of installments is within the configured range.  
  - **Minimum no. of installments:** Sets the minimum number of installments required for the promotion to be valid.  
  - **Maximum no. of installments:** Defines the maximum number of installments allowed. The promotion will apply only if the order number of installments is equal to or less than the defined value.  

> ℹ️ This condition doesn't apply to payments via boleto, gift card, or orders using multiple payment methods.

- **UTM:** Applies the promotion when the store is accessed via a URL with UTM parameters or when the customer uses a coupon linked to these parameters. Use only letters, numbers, hyphens, and underscores when defining UTM field values. For more information, see the article [Campaign tracking with UTM parameters](https://help.vtex.com/en/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium).  

Set the following parameters if necessary:  

- **UTM source:** Applies the discount when browsing occurs through the configured `utm_source` parameter.  
- **UTM campaign:** Applies the discount when browsing occurs through the configured `utm_campaign` parameter.  
- **Create coupon from the UTM parameters above:** Generates a coupon based on the UTM parameters entered in the `UTM source` and `UTM campaign` fields.  
- **utmi_cp:** The discount will apply only if the navigation includes the `utmi_cp` parameter with its configured value. For more information, see the article [What are the internal UTMs utmi_cp, utmi_pc, and utmi_p]().  
- **View linked coupons:** Allows viewing coupons already associated with the defined UTM parameters.  

## Setting promotion usage restrictions  

Use this section to limit how many times the promotion can be applied in the store or per customer.  

- **Limit the use of in-store promotions:** Sets the maximum number of promotion usage across the store.  
- **Limit promotion usage per customer:** Restricts how many times each customer can use the promotion.  
- **Limit the number of eligible items:** Allows setting a maximum number of items per order that can receive the discount. The behavior of this setting varies depending on the option selected in the "Customer gets" section.  
  - For the **Fixed amount**, **Fixed amount: formula**, and **Maximum price per item** conditions, the limit applies to the total items in the cart.  
  - For the **Percentage discount** condition, you can choose whether the limit applies per cart, product, or SKU.  

## Configuring combination and competition  

Define whether the promotion can be combined with other promotions or manually adjusted prices. These settings control how the promotion behaves in combined scenarios.  

- **Allow combining with other promotions:** Allows combining the promotion with other promotions active in the same order. By default, the promotion already includes shipping discounts and gifts. For more information, see the article [How promotion competition works](https://help.vtex.com/en/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270).  
- **Allow combining with manual prices:** Allows the promotion to be applied even when the product already has a manually set price.  

## Highlighting the promotion on the product page  

Use this section to visually highlight the promotion on products displayed on the store's product listing page.  

- **Highlight promotion on products:** Displays a promotional badge on products affected by the promotion. For the highlight to work properly, you need to [configure visualization in the store's CMS module](https://help.vtex.com/en/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295).  
- **Additional information:** Click `Create` to add custom fields with name and value, which can be used for store customizations.  

