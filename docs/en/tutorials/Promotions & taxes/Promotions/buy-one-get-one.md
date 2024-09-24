---
title: 'How the Buy One Get One (BoGo) promotion works'
id: tutorials_322
status: PUBLISHED
createdAt: 2017-04-27T22:08:41.148Z
updatedAt: 2024-02-19T11:48:37.254Z
publishedAt: 2024-02-19T11:48:37.254Z
firstPublishedAt: 2017-04-27T23:03:14.992Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: buy-one-get-one
locale: en
legacySlug: buy-win
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---


Buy One Get One promotions are used to offer free shipping or a gift for buying a specific product. For example, "Buy a TV and get free shipping" or "Buy a video game and get a game for free".

In this article, we'll explain the steps required to set up a Buy One Get One promotion:

1. [Promotion overview](#1-promotion-overview)
    - [Restrict this promotion to seller products](#restrict-this-promotion-to-seller-products)
    - [Trade policy](#trade-policy)
2. [Buy One, Get One](#2-buy-one-get-one)
3. [Conditions for the promotion to be valid](#3-conditions-for-the-promotions-to-be-valid)
4. [Restrictions and limitations of use](#4-restrictions-and-limitations-of-use)

# Creating a promotion
In the VTEX Admin, go to Promotions > Promotions, or type Promotions in the search bar at the top of the page.

1. Click the `Create Promotion` button.
2. Select the **Buy One Get One** option.
3. Complete the promotion fields.
4. Click `Save`.

# 1. Promotion overview
In this section, we provide information on the promotion overview.
- **Name:** Promotion name. Required field.
- **Status:** Activates or deactivates the promotion.
- **Description:** This field is for internal communication in your store to indicate the purpose of the promotion, such as a campaign, a clearance sale, etc.
- **Expiration date:** Start and end date and time of the promotion. You can use a future date and/or time for the promotion to start on your website. If configured this way, the promotion status will be displayed as follows:
    - Scheduled: Before the selected start date and time.
    - Active: During the scheduled promotion period.
    - Inactive: After the selected end date and time.
- **Use recurrence settings:** By selecting this option, you can configure the recurrence, such as the weekday and time.
- **Type and amount of discount:** Allows you to select one of the options below:
    1. **Maximum price per item:** Sets the maximum price for each item in the order.
    2. **Free shipping:** Full discount on shipping costs.
    3. **Gift:** Full discount on the product amount set as a gift. By selecting this option, you can indicate the SKU (by name or ID) that will be considered a gift, choose if you want to activate the [gift multiplier](https://help.vtex.com/en/tutorial/o-que-significa-ativar-o-multiplicador-de-brinde-em-uma-promocao--1gydgkmjEWcoo2CskUwuYK), and the maximum number of products that can be used as gifts in the promotion. For more information on this type of discount, check [How to set a Buy One Get One promotion (gift) for a specific SKU](https://help.vtex.com/en/tutorial/configurar-promocao-compre-e-ganhe-para-um-sku-especifico).
- **Additional information (optional):** Allows you to add name and value details to the promotion.
- **Promotion is highlighted:** Adds a tag with the promotion name,  which is displayed in the window display and on the product page. This tag will only be added if you use the right promotion display control in the template. `<vtex.cmc:discountHightLight>`.

![Promotion Overview](//images.ctfassets.net/alneenqid6w5/4s7Zxlvv0aIThx2WW2JMO3/fb5019d7359026929f45631e94e2f454/Promotion_Overview.png)

## Restrict this promotion to seller products

In this section, you can determine to which sellers the promotion will apply. You can specify the sellers you want to include or exclude from the discount.

- Equal to: Select the sellers you want to include.
- Different from: Select the sellers you want to exclude.

For the promotion to be valid for all sellers, leave the field blank.

>⚠️ It is not possible to select a white label seller. There are two ways to include a white label seller in the promotion:1. Restrict sellers to the main store. This will add all white label sellers in your store to the promotion.2. Leave the field blank.  In this way, all sellers will be included in the promotion.

![Restrict this promotion to seller products](//images.ctfassets.net/alneenqid6w5/3Up0CJMzHHY9rZO0LLRXuw/32b26e784595d4551700c022fc539598/Restrict_this_promotion_to_seller_products.png)

## Trade policy

In this section, you can set the trade policies valid for the promotion. You can include or exclude trade policies from the discount.

- **Equal to:**  Select the trade policies you want to include.
- **Different from:** Select the trade policies you want to exclude.
- **Provided by me (my store):** Select trade policies with products from your store. You can select more than one trade policy.
- **Delivered by me (other stores):** Select trade policies in which your products are available in third-party stores. You can select more than one trade policy.

For the promotion to be valid for all trade policies, leave the selection empty.

![Trade Policy](//images.ctfassets.net/alneenqid6w5/1EUrXEMs0tyZ6J1ulXco9i/2d378d9c081945a7128525036ed1f9e4/Trade_policy.png)

# 2. Buy One Get One

In this section, you can define the collections, SKUs, and minimum quantity for the promotion to apply.

- **Collections:** Select one or more product collections you want to give this type of discount. The promotion will only be applied to products in the collections listed in this field.
- **SKUs:** Allows you to enter the SKU name or ID to which the discount will apply. You can import a list of SKUs that must be saved in a text file (**.txt**), with each ID listed on a different row.
- **Minimum quantity:** Allows you to define the minimum quantity of products that must be added to the cart for the discount to be applied. This is a required field.

>⚠️ <p>The promotion will not be created if the Collections or SKUs fields are not completed.<p>

>⚠️ <p>A Buy One Get One promotion can be created with a maximum of 100 different SKUs at the same time.<p>

![Buy One Get One](//images.ctfassets.net/alneenqid6w5/27rGDqH0dMTcgA8m7cWs27/c521b34d5694bf3712f5450f32839a91/Buy_One_Get_One.png)

# 3. Conditions for the promotion to be valid

In this section, we will detail the conditions you must apply for a promotion to be valid.

- **Use restriction BINs:** Allows you to activate or deactivate the BIN restriction, limiting the credit cards used in the promotion. You can import a list of BINs, which must be saved in a text file (.txt) with each BIN listed on a different row.
- **Customer cluster:** Allows you to activate or deactivate the customer cluster. When activated, you can choose a customer cluster created via [Master Data](https://help.vtex.com/en/tutorial/como-criar-um-cluster-de-clientes).
- **Shipping method:** Allows you to choose if the promotion will be applied to one or more shipping methods. When activated, choose a shipping method; when deactivated, you can apply the discount to the cheapest shipping method.
- **Payment method:** Allows you to choose if the promotion will be applied to one or more of the selected payment methods.
- **Utm_source:** The discount will apply if the customer navigation uses an utm_source parameter corresponding to a listed one in this promotion.
- **Utm_campaign:** The discount will apply if the customer navigation uses an utm_source parameter corresponding to a listed one in this promotion.

![What are the conditions for the promotion to be valid?](//images.ctfassets.net/alneenqid6w5/4zOT1bHe70Z1wbN2wQjCXD/935d35fb86b2e6931c238d60e14f2872/What_are_the_conditions_for_the_promotion_to_be_valid.png)

# 4. Restrictions and limitations of use

In this section, you will find important information about the promotion conditions and restrictions.

- How many times will this promotion be applied in your store: Allows you to restrict the promotion in your store to a specific limit or use it unlimitedly.
- How many times per customer will this promotion be applied in your store: Allows you to restrict the promotion in your store to each customer for a specific limit or to use it unlimitedly.
- Only for the same items: If this option is activated, the promotion is only applied if the minimum quantity of items (previously added) is reached using the same SKU in the cart. If this option is deactivated, the promotion will be applied even when the minimum quantity of items is added to the cart, regardless of whether the SKUs are different or the same.
- Apply with other promotions: Allows this promotion to be applied to the cart in combination with other promotions that give the same discount type.

![Restrictions and limitations of use](//images.ctfassets.net/alneenqid6w5/71kLc3PWSLecGA49Iytuyd/3786a7a5b6067de6410cabfe402325b4/Restrictions_and_limitations_of_use.png)
