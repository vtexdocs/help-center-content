---
title: 'Creating a campaign promotion'
id: 1ChYXhK2AQGuS6wAqS8Ume
status: PUBLISHED
createdAt: 2018-12-02T18:57:52.792Z
updatedAt: 2023-03-31T14:02:10.258Z
publishedAt: 2023-03-31T14:02:10.258Z
firstPublishedAt: 2018-12-03T16:52:03.595Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
slugEN: campaign-promotion
locale: en
legacySlug: campaign-promotion
subcategoryId: 2cI57eZ3ZiWSeaQs26Gwys
---

A campaign promotion is necessarily tied to a campaign audience, i.e. a specific target audience. This type of promotion includes all the possibilities found in [Regular Promotions](https://help.vtex.com/en/tutorial/regular-promotion--tutorials_327) and a couple more, namely:

- Specific target audience
- Free shipping on all available shipping types
- Promotional price table
- Giveaway delivered by sellers

Before creating a campaign promotion, you need to create a campaign audience to define the target audience for your promotion. This way, you select customer segments eligible for the promotion — which will act as triggers — based on criteria of your choice.

For example, if you set up a [campaign audience](https://help.vtex.com/en/tutorial/creating-campaign-audiences--6cnuDZJzIkIeocewAQQK4K) whose target audience is customers who add product A to their cart, in the campaign promotion you can configure that this audience will receive a discount on product B.

>ℹ️ Campaign audiences and their promotions are only valid for the main store account. This option is not available for seller accounts. If a campaign audience or a campaign promotion are created on a seller account, they will not be activated.

Once the [campaign audience](https://help.vtex.com/en/tutorial/creating-campaign-audiences--6cnuDZJzIkIeocewAQQK4K) is set, go to the Admin and follow the steps below to create a campaign promotion.

1. In the VTEX Admin, go to *Promotions > Promotions*, or type *Promotions* in the search bar at the top of the page.
2. Click on the `Create Promotion` button.
3. Click on the `Campaign Promotion` option.
4. Fill in the [campaign promotion fields](#campaign-promotion-fields).
5. Click `Save`.

## Campaign promotion fields

The form for creating a campaign promotion is divided into the following sections:

1. [Promotion overview](#1-promotion-overview)
  - [Restrict this promotion to products from sellers](#restrict-this-promotion-to-products-from-sellers)
  - [Trade Policy](#trade-policy)
2. [Which items will this promotion apply to?](#2-which-items-will-this-promotion-apply-to)
3. [Restrictions and limitations of use](#3-restrictions-and-limitations-of-use)

Below is a description of all the fields you need to fill in to create a campaign promotion.

### 1. Promotion overview

- **Name:** name of the promotion.
- **Status:** enables or disables the promotion.
- **Description:** internal description of the promotion. This field can be used internally, to better identify the promotion. For example, you can specify that the promotion is related to a campaign audience or closeout.
- **Expiration date:** the start and end date and time of the promotion. You can set a start date and time in the future to schedule the promotion. In this case, the promotion will have the **Scheduled** status until the given date and time. While the promotion is valid, it will have the **Active** status. At the end of the promotion period, the status will automatically change to **Inactive**.
- **Use recurrence settings:** enabling this option allows you to configure the recurrence of your campaign promotion according to the options below.
  - **Day of the week:**
    - **All days of the week:** by selecting this option, the promotion will be valid on all days of the week.
    - **Specific days of the week:** by selecting this option, you can choose the days of the week when the promotion will be valid.
  - **Time of day:**
    - **All day:** by selecting this option, the promotion will be valid all day long.
    - **Specific times:** by selecting this option, you can choose the start and end time of the promotion period.
- **Campaign audience:** allows you to select the campaign audience that will have access to this promotion. For more information, read the article [Campaign audience](https://help.vtex.com/en/tutorial/creating-campaign-audiences--6cnuDZJzIkIeocewAQQK4K).
- **What is the type and amount of the discount?:** sets the type and amount of the discount that will be applied to the promotion. See the discount options below:
  - **Nominal:** discount that will be applied to the cart total.
  - **Nominal shipping:** discount that will be applied to the shipping cost.
  - **Percentage:** percentage discount that will be applied to the product price.
  - **Maximum Price per Item:** the maximum price of each item in the order.
  - **Percentage shipping:** percentage discount that will be applied to the shipping cost. 
  - **Maximum shipping:** the maximum cost of the shipping. 
  - **Free shipping:** full discount on the shipping cost.
  - **Gift:** full discount on the product defined as a gift. You can select one or more SKUs or more than one unit of the same SKU as a giveaway. To define more than one gift, select the **Activate Gift Multiplier** option and set the quantity. Learn more about this option in [this article](https://help.vtex.com/en/tutorial/what-does-it-mean-to-activate-a-gift-multiplier-on-a-promotion--1gydgkmjEWcoo2CskUwuYK).

  >ℹ️ The **Gift** product must have a price associated with it, even though it is given to the customer for free.

  - **Formula-based nominal discount:** the discount is calculated based on the total of the product prices, the shipping cost and the desired discount percentage rate. The shipping rate used in the formula will be the lowest available for the order, regardless of what the customer selects. You must always use dot as decimal separator. For example, the discount will be 30% of the product price + shipping rate. Therefore, the formula should be as follows: `(total price + shipping rate) * 0.3)`.
  - **Nominal reward value:** credit that will be added to the store's loyalty program. 
  - **Percentage reward value:** credit percentage that will be added to the store's loyalty program. 
  - **Promotional price table:** allows you to select a price table to be used as a promotion. The promotional price of each SKU will be their corresponding price in the selected price table. You can set up a maximum of five simultaneous campaign promotions using promotional price tables in your store. The price in the price table will be applied only if it is is lower than the price set in the trade policy used in the promotion. In addition, price table promotions can’t be applied simultaneously with other price-related promotions. If more than one price promotion is active and applicable to the given products, the lower price will apply. Learn more about concurrent promotions in [this article](https://help.vtex.com/en/tutorial/understanding-competition-of-promotions--tutorials_2270).

If you choose a shipping-related discount type (Percentage shipping, Nominal shipping, Maximum shipping or Free shipping), when you create a campaign promotion you also have access to the settings below.

- **Shipping type:** the discount will be applied if the shipping type chosen by the customer is the same as the one in the promotion. This criterion is only considered if the promotion type is shipping-related, i.e., one of the following: Percentage shipping, Nominal shipping, Maximum shipping or Free shipping.
- **Apply discount only to the lowest shipping rate:** If you enable this option, the discount will be applied only to the lowest estimated shipping rate. This option is enabled by default, but you can disable it if you want to apply the discount to other types of shipping. Read the article [Configuring shipping promotions](https://help.vtex.com/en/tutorial/configuring-shipping-promotions--6Lo5BR61KMiUFAAHGCdgfW) for more information. This criterion will only be considered if the promotion effect is shipping-related, i.e., one of the following: Percentage shipping, Nominal shipping, Maximum shipping or Free shipping.
- **Apply discount only when one of the above carriers is selected by the customer:** the promotion will apply only after the customer selects the delivery method.  This criterion will only be considered if the promotion effect is shipping-related, i.e., one of the following: Percentage shipping, Nominal shipping, Maximum shipping or Free shipping.
- **Apply to all available shipping options:** if you enable this option, the discount will apply to all available delivery methods.

- **Promotion is highlighted:** define if you want the store to display a banner highlighting the promotion. Here are the options:
  - **No:** if you select this option, the promotion won’t be featured in the window display nor on the pages of the products eligible for the promotion.
  - **Yes:** if you select this option, a banner highlighting the promotion will be featured in the window display and on the pages of the products eligible for the promotion. To display the banner correctly, please use the following promotion display control in the store template: `<vtex.cmc:discountHightLight/>`. For more information, read the article [Template Controls](https://help.vtex.com/en/tutorial/lista-de-controles-para-templates--tutorials_563).

#### Restrict this promotion to products from sellers

In this section, you can define to which sellers the promotion will apply. You can determine which sellers will be included or excluded from the discount. 

- **Equal to:** select the name of the sellers you want to include.
- **Different from:** select the name of the sellers you want to exclude.

For the promotion to be valid for all sellers, leave the field blank.

>⚠️ **Warning:** it is not possible to select a white label seller. There are two ways to include a white label seller in the promotion:1. Restrict sellers to the main store. This will add all white label sellers in your store to the promotion.2. Leave the field blank.  This way, all sellers will be included in the promotion.

#### Trade Policy

In this section you can set the trade policies that are valid for the promotion. You can include or exclude trade policies from the discount.

- **Equal to:** select the trade policies you want to include.
- **Different from:** select the trade policies you want to exclude.
- **Provided by me (my store):** trade policies with products from your store. You can select more than one trade policy.
- **Delivered by me (other stores):** trade policies in which your products are from third-party stores. You can select more than one trade policy.

For the promotion to be valid for all trade policies, leave it blank.

### 2. Which items will this promotion apply to?

In this section, you need to choose whether this promotion will apply to all products in your store or only to specific products, as illustrated below.

![promocoes-restricao-en](//images.ctfassets.net/alneenqid6w5/55xxIduLJDJrwQMuk4OgRu/adc5cdd25eb79636530e31e668b765e3/image.png)

If you want the promotion to apply to your entire catalog, select the **Apply to all products** option.

To limit your promotion to specific products, select **Apply to the following products** and then fill in the selection criteria for **Categories**, **Brands**, **Collections**, **Products** and **SKUs**.

You can add or remove **Categories**, **Brands**, **Collections**, **Products** and **SKUs** from the promotion using the **Equal to** or **Different from** criteria.

See an example below. In this case, the promotion includes all products from the category **Home Appliances** whose brand is **Brastemp**, except the product **Refrigerator 100**.

![exemplo-en](//images.ctfassets.net/alneenqid6w5/69J3NHBR8yLbbn04SSc5er/b3d7c4dff6f1039056bbd2a246f05b19/image.png)

In the **Products** and **SKUs** fields, you can opt to upload a **.txt** file with one product or SKU ID per row instead of selecting one product or one SKU at a time. To do this, click on **Choose file** and select your **.txt** file.

>⚠️ If you select **Apply to the following products** and do not fill in any of the selection criteria, the promotion will not be created and the message **Define eligible products or apply to all products** will be displayed. In this case, you must go back and fill in the selection criteria or click on **Apply to all products**.

To be eligible for the promotion, products must meet all the conditions added in this section.

### 3. Restrictions and limitations of use

- **How many times will this promotion be applied in your store?:** limits the amount of times the promotion can be applied. If you uncheck the **unlimited** option, please enter a number in the field next to it.
- **How many times per customer will this promotion be applied?:** limits the amount of times each customer can use the promotion. If you uncheck the **unlimited** option, please enter a number in the field next to it.
- **Set maximum number of eligible items per cart:** limits how many items in the cart the promotion can apply to. If you uncheck the **unlimited** option, please enter a number in the field next to it. For example, if the limit is 5 items and your customer adds to the cart 10 items eligible for the promotion, it will only apply to 5 items.
- **Apply with other promotions:** allows more than one promotion with the same discount type to be applied simultaneously.

- **Apply with manual prices:** allows the promotion to apply to products whose prices were manually added via telesales. This option can be used only after configuring your store to enable [manual price input](https://help.vtex.com/en/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS#manual-pricing).

#### **LEARN MORE**

 * [Creating Promotions](https://help.vtex.com/en/tutorial/creating-promotions-2--tutorials_320)
 * [Creating Campaign audiences](https://help.vtex.com/en/tutorial/creating-campaign-audiences--6cnuDZJzIkIeocewAQQK4K)

