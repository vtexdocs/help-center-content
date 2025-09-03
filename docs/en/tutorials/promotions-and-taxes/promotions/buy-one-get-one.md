---
title: 'How the Buy One Get One (BoGo) promotion works'
id: tutorials_322
status: PUBLISHED
createdAt: 2017-04-27T22:08:41.148Z
updatedAt: 2025-02-24T16:17:50.979Z
publishedAt: 2025-02-24T16:17:50.979Z
firstPublishedAt: 2017-04-27T23:03:14.992Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: buy-one-get-one
legacySlug: buy-win
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

The Buy One Get One promotion offers free shipping or a gift when you add products to your cart. When the criteria are met, these benefits are applied automatically. For example, shipping can be free when you buy a TV or an extra game can be added to the order for free when you buy a video game.

![Compre e Ganhe-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/buy-one-get-one_1.gif)

To configure the Buy One Get One promotion, the seller needs to follow these steps:

- [Create the Buy One Get One promotion](#Create-the-Buy-One-Get-One-promotion)
- [Buy One Get One conditions](#buy-one-get-one-conditions)
- [Conditions to Apply the Promotion](#conditions-to-apply-the-promotion)
- [Set Restrictions for Promotion Usage](#set-restrictions-for-promotion-usage)
- [Combination and competition](#combination-and-competition)
- [Displaying the promotion on the product page](#displaying-the-promotion-on-the-product-page)

## Create the Buy One Get One promotion

1. In the VTEX Admin, go to **Promotions** > **Promotions**, or type **Promotions** in the search bar at the top of the page.
2. Click **Create Promotion**.
3. Complete the fields on the page. The table below provides detailed instructions for filling them out.
4. Click `Save`.

| **Field**                     | **Description**                                                                                                                                                                                                  | **Example**                                                                                                                                                                                                                                                                                                   |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                      | Choose a clear and objective name for the promotion.                                                                                                                                                             | Summer Clearance: Buy and Get Discounts!                                                                                                                                                                                                                                                                      |
| **Status**                    | Define whether the promotion will be Active or Inactive. An Active promotion will be applied based on the dates and times configured. If Inactive, the promotion will be paused, even within the defined period. | ![Habilitar Promotions- EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/buy-one-get-one_2.png) ![Desabilitar Promotions-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/buy-one-get-one_3.png) |
| **Description**               | Write a brief description of the promotion (up to 10,000 characters), highlighting its main objectives.                                                                                                             | Promotion for clearing out Summer collection items.                                                                                                                                                                                                                                                           |
| **Start date and Start time** | Select the exact date and time for the promotion to start, ensuring it is activated at the desired moment. Make sure to adjust it according to the campaign plan to maximize its effectiveness.                  | ![Data e horario de inicio da Promotions-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/buy-one-get-one_4.png)                                                                                                                       |
| **End date and End time**     | Define the promotion's validity period by setting the exact date and time for its automatic deactivation.  The date must be later than the current date.                                                                                                      | ![Data de termino e horario da Promotions-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/buy-one-get-one_5.png)                                                                                                                     |
| **Use recurrence settings**   | Select this option to schedule the promotion to repeat automatically on specific days and times. Set the desired intervals to ensure recurrence according to the plan.                                           | ![Usar recorrencia Promotions-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/buy-one-get-one_6.png)                                                                                                                                             |

### Define the participating sellers
In this section, you can specify whether the promotion will apply to all sellers or only to selected ones. Select one of the following options for applying the promotion:

- **All:** Select this option to apply the promotion to all sellers. Use this option if you want all products from all sellers to be part of the campaign.
- **Equal to:** Select this option to include only specific sellers in the promotion. After selecting "Equal to," you can choose the sellers you want to include in the field below. Only selected sellers will have their products in the campaign.
- **Different from:** Select this option to exclude specific sellers from the promotion. After selecting "Different from", you can choose the sellers you don't want to include in the campaign. All other sellers will be included.

![Seller-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/buy-one-get-one_7.png)

### Select trade policies
In this section, you can select the trade policies that will apply to your promotion. Trade policies define the sale and shipping conditions.

![Politica comercial-EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/buy-one-get-one_8.png)

Choose from the following options:

- **Equal to:** Select the trade policies you want to include in the promotion. This option allows you to determine which policies will apply to the products eligible for the discount.
- **Different from:** Select the trade policies you want to exclude from the promotion. This option removes specific policies, ensuring the discount is not applied to products that follow them.
- **All:** Select this option to apply the promotion to all trade policies without restrictions. All products, regardless of their associated trade policy, will be included in the promotion.

### Buy One Get One conditions
In this section, you can configure "Buy One Get One" promotions to offer customers benefits on their purchases. The configuration has two stages:

- Defining the items that must be purchased.
- Choosing the benefit that will be granted.

To get started, define the collections, SKUs, and minimum quantity required to activate the promotion:

**Customer buys:**

- **SKUs:** Enter the name or ID of the SKUs eligible for the promotion.
- **Collections:** Add the product collections for the promotion.
- **Minimum quantity:** Set the minimum quantity of items that the customer must add to the cart in order to get the benefit.
- **Must be the same item:** Check this option if you want the promotion to apply only when identical products are added.

> ⚠️ A Buy One Get One promotion allows you to configure up to 100 different SKUs simultaneously.

**Customer gets:**
After defining the purchase items, choose the benefit the customer will get:

- **Free shipping:** Choose from the following options:
    - **All shipping options:** Applies free shipping to all shipping methods.
    - **Cheapest shipping option only:** Offers free shipping only on the cheapest option.
    - **Specific shipping type:** Selects a specific type of shipping, such as express or private carrier.
- **Gift:** Full discount on the product amount set as a gift.
    - **SKUs:** Allows you to select the SKUs (by name or ID) associated with the gift being offered.
    - **Gift quantity:** Sets a limit to the number of gifts the customer can get, even if multiple eligible items are in the cart. There are two options:
        - **One gift:** Allows the customer to get a gift regardless of the number of items in the cart.
        - **One gift for each eligible item in the cart:** Allows the customer to get a gift for each eligible item in the cart.
- **Maximum price:** Sets the maximum price allowed for each item in the order. This limit will apply to products eligible for the benefit.

### Conditions to Apply the Promotion
In this section, we will detail the conditions for a promotion to be valid.

- **Payment method:** The promotion applies when a specified payment method is selected and the cart has only one payment method.
- **Card BIN:** The promotion can only apply when using cards from specific networks, banks, or categories identified by their BIN codes. You can import a list of BINs, which must be saved in a text file (.txt) or (.csv) with each BIN listed on a different row.
- **Customer cluster:** Select an already created [customer cluster](https://help.vtex.com/pt/tutorial/como-criar-um-cluster-de-clientes) in Master Data, following the `field=value` or `field contains value` format.
- **Shipping method:** Allows you to specify one or more shipping types to which the promotion will apply.
- **Shipping location:** The promotion will only be applied if the delivery address of the order meets the following definitions:
    - **Countries:** Allows you to select the countries where the promotion will be valid. Only orders with shipping addresses in selected countries can benefit from the promotion.
    - **Postal codes:** Allows you to restrict the promotion to specific postal code ranges, giving you more control over the areas where the promotion is valid.
        - **Include:** The promotion will only apply to addresses within the defined postal codes.
        - **Exclude:** The promotion won't apply to addresses within the defined postal codes.
        - **"From" field:** Enter the starting postal code for the range.
        - **"To" field:** Enter the ending postal code for the range.
    - **UTM:** Configure the promotion to apply when the site is accessed via a URL with UTM parameters or when a coupon linked to these parameters is used. Set the UTM parameters according to the formatting rules, using only letters, numbers, hyphens, and underscores. If necessary, fill in the following parameters:
        - **UTM source:** The discount will apply if the customer navigation uses an utm_source parameter corresponding to a listed one in this promotion.
        - **UTM campaign:** The discount will apply if the customer navigation uses an utm_source parameter corresponding to a listed one in this promotion.
        - **Create coupon from the UTM parameters above:** Generate a coupon based on the UTM parameters entered in the `UTM_source` and `UTM_campaign` fields.
        - **View linked coupons:** View the coupons that have already been associated with the defined UTM parameters.

### Set Restrictions for Promotion Usage
The Usage Restrictions section allows you to limit the promotion's use, either for the whole store or per customer. Check the options below as necessary:

- **Limit the use of the promotion in the store:** Restricts the number of times the promotion can be used in the store.
- **Limit the use of the promotion per customer:** Restricts the number of times each customer can use the promotion.

### Combination and competition
In this section, determine whether the promotion can be combined with other promotions. Below are the options available:

- **Allow combining with other promotions:** The promotion can be combined with other active promotions. Note that, by default, the promotion already includes shipping discounts or gifts.
- **Allow combining with manual prices:** The promotion applies even when prices are adjusted manually, ensuring that the promotion works together with individual price adjustments in the cart.

### Displaying the promotion on the product page
In this section, you can highlight the promotion on the product listing page and add custom data for in-store customizations.

- **Highlight promotion on products:** Check this option to display the promotion directly on the product listing pages.

> ℹ️ Remember to <a href=https://help.vtex.com/en/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295>configure this view in the CMS module.</a>

- **Additional information:** Click Create to add custom fields with name and value, which can be used for store customizations.

