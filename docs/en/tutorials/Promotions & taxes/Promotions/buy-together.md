---
title: 'Creating a Buy Together promotion'
id: tutorials_323
status: PUBLISHED
createdAt: 2017-04-27T22:08:34.791Z
updatedAt: 2024-11-06T15:47:11.539Z
publishedAt: 2024-11-06T15:47:11.539Z
firstPublishedAt: 2017-04-27T23:03:15.238Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: buy-together
locale: en
legacySlug: buy-together
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

With a Buy Together promotion, you can offer discounts when two or more products are added to the cart simultaneously. The discount can be applied in two ways:

- **Discount for both products:** The discount is applied as soon as the products are added to the cart.
- **Discount for one product:** Set a minimum quantity condition so the discount applies to only one of the products in the cart.

**Examples of Buy Together promotions**

Below are some practical examples of how to configure and apply discounts using the Buy Together promotion. These examples show different ways to grant discounts when adding products to the shopping cart:

Discount for buying products together:

- **Promotion:** Buy a pair of pants and get 10% off a belt.
- **Condition:** Add both products to the cart to get the discount.

Discount for combined purchases:

- **Promotion:** Buy a pair of sneakers and a pair of socks and get 15% off.
- **Condition:** Get the discount when you buy both items together.

Discount per number of products added to the cart:

- **Promotion:** Buy three books and get 5% off the third book.
- **Condition:** Get the discount when you add three books to the cart.

In this article, we'll go through the steps to create and configure a Buy Together promotion:

- [Create promotion](#creating-promotion)
- [Promotion overview](#promotion-overview)
  - [Sellers](#sellers)
  - [Trade policy](#trade-policy)
- [Lists of Buy Together items and their discounts](#lists-of-Buy-Together-items-and-their-discounts)
- [Conditions](#conditions)
- [Restrictions](#restrictions)
- [Displaying the promotion on the product page](#displaying-the-promotion-on-the-product-page)

## Creating a promotion

1. In the VTEX Admin, go to **Promotions > Promotions**, or type **Promotions** in the search bar at the top of the page.
2. Click `Create Promotion`.
3. Select the option **Buy Together** and enter the required information. Below are details about the fields to be completed.
4. Click `Save`.

## Promotion overview

Define the main information about the promotion, such as its name, description, and expiration date.

- **Name:** Choose a clear and objective name for the promotion.
- **Status:** Define whether the promotion will be **Active** or **Inactive**. When **Active**, the promotion will be applied based on the configured dates and times. If **Inactive**, the promotion will be paused, even within the defined period.
- **Description:** Write a brief description of the promotion (up to 300 characters), highlighting its main objectives.
- **Start date:** Enter the date the promotion will start.
- **Start time:** Enter the time the promotion will start.
- **End date:** Enter the date the promotion will end.
- **End time:** Enter the exact time the promotion will end.
- **Use recurrence settings:** Activate this option if you want the promotion to repeat automatically on specific days and times.

### Sellers

Define whether the promotion will apply to all sellers or only to selected ones. Select one of the following options for applying the promotion:

- **All:** Select this option to apply the promotion to all sellers. Use this option if you want all products from all sellers to be part of the campaign.
- **Equal to:** Select this option to include only specific sellers in the promotion. After selecting "Equal to," you can choose the sellers you want to include in the field below. Only selected sellers will have their products in the campaign.
- **Different from:** Select this option to exclude specific sellers from the promotion. After selecting "Different from", you can choose the sellers you don't want to include in the campaign. All other sellers will be included.

### Trade policies

Select the trade policies that will offer the discount. You can offer discounts for trade policies where [your store acts as a marketplace](https://help.vtex.com/tutorial/o-que-e-um-marketplace) (My Store) or a [seller](https://help.vtex.com/pt/faq/o-que-e-um-seller) (Third Party Stores - Fulfillment).

Choose from the following options:

- **Equal to:** Select the trade policies you want to include in the promotion. This option allows you to determine which policies will apply to the products eligible for the discount.
- **Different from:** Select the trade policies you want to exclude from the promotion. This option removes specific policies, ensuring the discount is not applied to products that follow them.
- **All:** Select this option to apply the promotion to all trade policies without restrictions. All products, regardless of their associated trade policy, will be included in the promotion.

## Lists of Buy Together items and their discounts

The **Buy Together** promotion allows you to combine products from two different lists to offer discounts to your shoppers. The first list contains the main products, which can activate the promotion when added to the cart. The second list serves as a complement, where adding items from this list together with items from the first allows for additional discounts.

See below for how to configure **Lists 1 and 2** to activate discount conditions and ensure products are correctly combined in the shopping cart.

**List 1**

- **SKUs:** Enter the name or ID of the SKUs you want to include in the first list of the promotion. For example, if the promotion is for pants or a pair of sneakers, add those items here. If the products have variations, such as sizes "S" and "L", add the SKU for size "S" to **List 1** and the SKU for size "L" to **List 2**. You can enter SKUs manually or upload a spreadsheet to import them in bulk.
- **Discount:** Enter the discount percentage to be applied to SKUs in **List 1**. For example, if the promotion offers a 15% discount, enter "15" for this discount to apply to the SKU added to the cart. This field is required and must be completed even if the discount is zero. If the discount applies only to SKUs in **List 2**, enter "0" here for **List 1**.
- **Minimum quantity:** Set the minimum number of units of the selected SKU from List 1 that must be added to the cart for the discount to be applied.

**List 2**

- **SKUs:** Select the additional SKUs which, when added to the cart along with SKUs from List 1, will activate the configured discount. The promotion is activated only if products from both List 1 and List 2 are added to the cart.
- **Discount:** Enter the discount percentage for SKUs in List 2 when SKUs from List 1 are added to the cart. Enter the value in percent (%). For example, to apply a 10% discount on the purchase of a belt combined with pants from List 1, enter "10" in this field.

## Conditions

Define the conditions that will apply to the promotion. Conditions allow the promotion to activate under specific circumstances based on the selected criteria. To add a condition, follow the instructions below:

- **Order total**
  - **Minimum order amount:** Set the minimum amount required for the promotion to activate. Choose which items to include in the calculation: only items included in the promotion, only items outside the promotion, or all items in the order.
  - **Maximum order amount:** Set the maximum amount allowed for the promotion to apply. Choose which items to include in the calculation: only items included in the promotion, only items outside the promotion, or all items in the order.

- **Card BIN:** Apply this promotion when using cards from specific networks, banks, or categories identified by their BIN codes. Import a list of BINs saved in a .txt or .csv file, with each BIN on a separate row.

- **Customer cluster:** Select a [customer cluster](https://help.vtex.com/pt/tutorial/como-criar-um-cluster-de-clientes) previously created in Master Data. This cluster groups customers with specific characteristics to whom the promotion will apply. Choose one of the following:
  - **All of the following:** Apply the promotion only if all cluster criteria are met.
  - **At least one of the following:** Apply the promotion if at least one of the cluster criteria is met.

- **UTM:**  Configure the promotion to apply when the site is accessed via a URL with UTM parameters or when a coupon linked to these parameters is used. Using these parameters is optional and allows you to apply discounts to specific campaigns. Set the following parameters if necessary:
  - **utm_source:** Apply the discount when browsing occurs with the utm_source parameter configured.
  - **utm_campaign:** Apply the discount when browsing occurs with the utm_campaign parameter configured.
  - **Create coupon from the UTM parameters above:** Generate a coupon based on the UTM parameters entered in the "UTM_source" and "UTM_campaign" fields.
  - **View linked coupons:** View the coupons that have already been associated with the defined UTM parameters.

## Restrictions

In this section, determine whether the promotion can be combined with other promotions. The available options are:

- **Limit the use of the promotion in the store:** Restricts the number of times the promotion can be used in the store.
- **Limit the use of the promotion per customer:** Restricts the number of times each customer can use the promotion.

## Displaying the promotion on the product page

In this section, you can highlight the promotion on the product listing page and add custom data for in-store customizations.

- **Highlight promotion on products:** Check this option to display the promotion directly on the product listing pages. Remember to [configure this view in the CMS module](https://help.vtex.com/pt/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295).
- **Additional information:** Click Create to add custom fields with name and value, which can be used for store customizations.

See the Buy Together creation form below:

![Informação geral - EN](https://images.ctfassets.net/alneenqid6w5/7FKhVNFJSyIiKySq4alXUF/12e35d7d12bc22ffa4921a63502d5401/Compre_Junto_V1-_EN.gif)

