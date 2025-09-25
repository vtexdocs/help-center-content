---
title: 'Creating a campaign promotion'
id: 1ChYXhK2AQGuS6wAqS8Ume
status: PUBLISHED
createdAt: 2018-12-02T18:57:52.792Z
updatedAt: 2025-09-24T14:00:05.744Z
publishedAt: 2025-09-24T14:00:05.744Z
firstPublishedAt: 2018-12-03T16:52:03.595Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
slugEN: campaign-promotion
legacySlug: campaign-promotion
locale: en
subcategoryId: 2cI57eZ3ZiWSeaQs26Gwys
---

A **campaign promotion** is always associated with a **campaign audience**, which is a specific target audience.

This promotion type includes all the options of a Regular promotion plus:

* Specific target audience

* Free shipping on all available shipping types

* Promotional price table

* Gift delivered by seller

Before creating a campaign promotion, you need to create the [campaign audience](/en/tutorial/criar-audiencia-de-campanhas--6cnuDZJzIkIeocewAQQK4K) to define the audience that the promotion will apply to. You can select eligible customer groups and configure the criteria that will trigger the promotion.

**Example:** If you create a campaign audience that targets customers who add product A to the cart, you can configure the campaign promotion so that this audience gets a discount on product B.

> ❗ Campaign audiences and their promotions are only valid for the main store account. Seller accounts don't have this feature. If the campaign audience and promotion are created in a seller account, they won't be activated.

To create a campaign promotion, follow the steps below:

* [Create the promotion](#create-the-promotion)  
* [Select the campaign audience](#select-the-campaign-audience)  
* [Define the items that trigger the promotion](#define-the-items-that-trigger-the-promotion)  
* [Check the promotion conditions](#check-the-promotion-conditions)  
* [Set the promotion usage restrictions](#set-the-promotion-usage-restrictions)  
* [Highlight the promotion on the product page](#highlight-the-promotion-on-the-product-page)

## Creating the promotion

After creating the campaign audience, follow the steps below:

1. In the VTEX Admin, go to **Promotions *\>* Promotions**, or type **Promotions** in the search bar at the top of the page.  
2. Click `Create promotion`.  
3. Click `Campaign promotion`.  
4. Complete the promotion fields as described in the table below. Fields marked with an asterisk are required.  
5. Click `Create`.

| Field | Description |
| ----- | ----------- |
| **Name** | Name of the promotion. It should be clear and objective (up to 150 characters). |
| **Status** | Defines whether the promotion will be **Active** or **Inactive**. Activate it using <i class="fas fa-toggle-on" aria-hidden="true"></i> to apply the promotion based on the configured dates and times. Deactivate it using <i class="fas fa-toggle-off" aria-hidden="true"></i> to pause the promotion, even if it’s within the defined period. |
| **Description** | Use this field to add the purpose or details of the promotion, such as campaign type or seasonality. There’s a 10,000 character limit. This field is only visible in the VTEX Admin. |
| **Start date and start time** | Select the exact date and time to automatically activate the promotion. |
| **End date and end time** | Set the exact date and time when the promotion should end. After this moment, the promotion will be automatically deactivated. The end must be after the start date and time. |
| **Use recurrence settings** | Enable this option to automatically repeat the promotion on specific days and times. This is useful for configuring seasonal actions. Once enabled, set the recurrence pattern according to the campaign parameters. |

### Defining sellers

In the **Sellers** section, specify whether the promotion will apply to all *sellers* or only to *specific sellers*. Select one of the options below to set the desired behavior:

* **All:** Applies the promotion to all existing *sellers*. Leave the selection field blank.  
* **Equal to:** Applies the promotion only to the specified *sellers*. Enter the identifiers in the corresponding field.  
* **Different from:** Applies the promotion to all *sellers* except the ones you select.

### Selecting trade policies

In the **Trade policies** section, define the trade policies the promotion will apply to:

* **All**: Applies the promotion to all trade policies.

* **Equal to:** Applies the promotion only to the selected trade policies.

* **Different from:** Applies the promotion to all trade policies except the ones you select.

Selecting the campaign audience
Define the audiences that will have access to this promotion. The promotion will only be applied to users who meet the conditions configured in the selected audiences.

> ℹ️ To create new audiences or learn how to configure them, see the article [Creating a campaign audience](/en/tutorial/como-criar-campanhas).

## Defining the items that trigger the promotion

In the **Customer buys** section, configure the items that will trigger the campaign promotion based on the previously defined audience.

* **Apply to all items in the store**: The promotion will be triggered when any store item is added to the cart by the campaign audience.  
* **Apply to items that meet the set restrictions**: The promotion will only be triggered when items that meet all configured conditions are added to the cart.

Restrictions can be configured based on:

* **SKUs**: Specific items identified by SKU.  
  * **Equal to:** Applies only to the listed SKUs.  
  * **Different from:** Applies to all SKUs except the listed ones.  
* **Products**: Applies the promotion based on products, regardless of SKU.  
  * **Equal to:** Applies only to the selected products.  
  * **Different from:** Applies to all products except the selected ones.  
* **Collections**: Applies the promotion based on collections.  
  * **Equal to:** Applies only to the selected collections.  
  * **Different from:** Applies to all collections except the selected ones.  
* **Categories**: Applies the promotion based on catalog categories.  
  * **Equal to:** Applies only to the selected categories.  
  * **Different from:** Applies to all categories except the selected ones.  
* **Brands**: Applies the promotion based on product brands.  
  * **Equal to:** Applies only to the selected brands.  
  * **Different from:** Applies to all brands except the selected ones.

Customer gets

Select the benefit to be applied when the campaign promotion conditions are met. The options include:

* **Discount**  
  * **Fixed amount**: Applies a fixed amount discount on the items or order.  
  * **Percentage**: Applies a percentage discount on item or order total.  
  * **Fixed amount: formula**: Calculates the discount using a custom formula, subtracting an absolute value defined by the formula logic.  
* **Shipping**  
  * **Fixed amount**: Applies a fixed amount discount to the shipping.  
  * **Percentage**: Applies a percentage discount on the shipping.  
  * **Free:** Removes the shipping cost.  
  * **Maximum**: Sets the maximum amount that can be charged for shipping. Any amount exceeding the maximum will be discounted.  
* **Maximum price**  
  * Sets a limit that will be applied as a cap for the price of eligible products. Items can't exceed this amount after the promotion is applied.  
* **Gift**  
  * **SKUs**: Allows you to select SKUs (by name or ID) to be offered as a gift.  
  * **Number of gifts**: Sets the number of gifts that may be selected, which can be by cart or per eligible item.  
* **Reward amount**  
  * **Fixed amount**: Assigns a fixed amount of loyalty points.  
  * **Percentage**: Calculates points based on a percentage of the order total.  
* **Promotional price table**  
  * Applies the prices set in a selected promotional price table to eligible SKUs.

## Checking the promotion conditions

The conditions for the campaign promotion are determined by the selected audiences. The promotion will be displayed and applied only to users who meet the criteria configured in the campaign target audience.

To view or edit audience conditions, click `View audiences`.

## Setting the promotion usage restrictions

Set the maximum number of times the promotion can be applied in the store or per customer.

* **Limit the use of in-store promotions:** Sets the maximum number of promotion usage across the store.  
* **Limit promotion usage per customer:** Limits how many times each customer can use the promotion.

## Highlighting the promotion on the product page

This section allows you to define the visual highlight of the campaign promotion for the products displayed in the store.

* **Highlight promotion on products:** Displays a promotional badge on products affected by the promotion. For the highlight to work properly, you need to [configure visualization in the store CMS module.](/en/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295)   
* **Additional information:** Click `Create` to add custom fields with name and value, which can be used for store customizations.
