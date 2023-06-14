---
title: 'Creating a More for Less promotion'
id: tutorials_325
status: PUBLISHED
createdAt: 2017-04-27T22:08:17.186Z
updatedAt: 2023-03-31T19:57:42.646Z
publishedAt: 2023-03-31T19:57:42.646Z
firstPublishedAt: 2017-04-27T23:03:15.551Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: creating-a-more-for-less-promotion
locale: en
legacySlug: creating-more-for-less-promotion
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

The More for Less sales promotion gives customers a discount when they buy several units of the same product. A classic example of such a promotion would be "Three for the price of two".

In this article, we explain the purpose of each field when configuring a **More for Less** promotion. Check out the configuration steps below.

1. [Promotion overview](#1-promotion-overview)
    - [Restrict this promotion to products from sellers](#restrict-this-promotion-to-products-from-sellers)
    - [Trade Policy](#trade-policy)
2. [More for Less](#2-more-for-less)
3. [What are the conditions for the promotion to be valid?](#3-what-are-the-conditions-for-the-promotion-to-be-valid)
4. [Restrictions and limitations of use](#4-restrictions-and-limitations-of-use)

Read our article [Promotion examples](https://help.vtex.com/en/tutorial/promotion-examples--5A8UTc7knvAscxo7e7rMFD) for more information.

## Creating a More for Less promotion

1. In the VTEX Admin, go to *Promotions > Promotions*, or type *Promotions* in the search bar at the top of the page.
2. Click on the `Create Promotion` button.
3. Select the **More for Less** option.
4. Fill in the promotion fields.
5. Click on `Save`.

## 1. Promotion overview

-**Name**: name of the promotion. Required field.
- **Status**: option that defines if the promotion is active or inactive. Required field.
- **Description**: internal description of the promotion. This field will be used for internal communication in your store to explain the sales promotion reason, for example, if it is part of a campaign or a clearance sale.
- **Expiration date**: the promotion’s start and end date and time. You can choose a future date and time for the promotion to start on your website. If that is the case, the promotion will be in the scheduled status until the start date and time are reached. During the period the promotion is valid, its status will be active. When the end date is reached, the promotion status will automatically change to inactive. Required field.
- **Use recurrence settings**: if you check this box, other checkboxes will be displayed to select the day of the week and the time of the day that the promotion will be in effect. Do not select this option if you want the promotion to be in effect every day of the week.
- **Promotion is highlighted**: adds a banner with the promotion name to the window display and the product page. This banner will only be added if you use the correct promotion display control in the template: `<vtex.cmc:discountHightLight/>`. Required field.

### Restrict this promotion to products from sellers

In this section, you can define to which sellers the promotion will apply. You can determine which sellers will be included or excluded from the discount. 

- **Equal to**: select the name of the sellers you want to include.
- **Different from**: select the name of the sellers you want to exclude.

For the promotion to be valid for all sellers, leave the field blank.

<div class = "alert alert-warning">
  <p>It is not possible to select a white label seller. There are two ways to include a white label seller in the promotion:</p><ol>1. Restrict sellers to the main store. This will add all white label sellers in your store to the promotion.</ol><ol>2. Leave the field blank.  In this way, all sellers will be included in the promotion.</ol>
</div>

### Trade Policy

In this section, you can set the trade policies that are valid for the promotion. You can include or exclude trade policies from the discount.

- **Equal to**: select the trade policies you want to include.
- **Different from**: select the trade policies you want to exclude.
- **Provided by me (my store)**: trade policies with products from your store. You can select more than one trade policy.
- **Delivered by me (other stores)**: trade policies in which your products are from third-party stores. You can select more than one trade policy.

For the promotion to be valid for all trade policies, leave it blank.

## 2. More for Less

In this section, you can define the products, number of items, and discounts included in the promotion.

- **The customer purchases** `quantity` **of the following products**: number of units of the same product that must be added to the cart for the promotion to apply. Required field.
- **SKUs**: names or IDs of the SKUs to which the discount will apply. You can import a list of SKUs by clicking on the `Select a .txt file` button. The text file (.txt) must contain each SKU ID in a different row. You can also download the list of SKUs added to the field by clicking on the `Download SKU list` button.
- **Collections**: selection of collections to which the promotion will apply. Note that the promotion will only apply to products in the collections you include in this field. You can add a collection by entering its name, and it is possible to select more than one collection.

<div class = "alert alert-info">
  <p>If you do not inform any product collection or SKU, the platform will not allow the creation of the promotion.</p> <p>
</div>

- **And gets** `number` **of these products**: the number of items defined to receive the discount. Required field.
   - **With a discount of**: the percentage discount the customer will receive if they buy the number of items defined in the promotion. 
   - **With a maximum price per item of**: the maximum price per item the customer will pay if they buy the number of items defined in the promotion. 

|![Leve mais por menos 1 - EN](https://images.ctfassets.net/alneenqid6w5/1csaRIYXrmWFwoxNttIBYg/c97d6de41f3b8d4bea23978ec305c57e/image.png)|
|:--:| 
| _Example of a “Buy 3, get 1 free” promotion_|

### Advanced settings
In this section, you can specify how the discount will be applied.

#### The discount must be applied

- **Considering**: 
  - **Any product**: the discount will be applied to different products in the collection or SKU list, even if the number of items per product is less than the number defined in the promotion. In this case, the system considers the sum of the eligible products in the shopping cart.
  - **Only identical products and variations**: the discount will only be applied to a SKU. To use this option, you must have added a minimum number of items for the promotion. 

- **To**:
  - **The lowest-priced products**: the discount will be applied to the cheapest items in the promotion.
  - **The highest-priced products**: the discount will be applied to the most expensive items in the promotion.

![Leve mais por menos 2 - EN](https://images.ctfassets.net/alneenqid6w5/57U5OIjbYtvOcd2qoFe45/c137ac839cc4803e42f0ba245e6a9a7a/image.png)

#### How must the discount be distributed?

- **Only among the** `number` **products receiving the discount**: the discount will be applied in full to the selected number of products.
- **Proportionally among the** `number` **products**: the discount will be equally distributed among the selected number of products.

## 3. What are the conditions for the promotion to be valid?

- **Order’s minimum and maximum value**: the promotion will be applied to the gross price of the shopping cart without considering other promotions or the shipping rate.
- **Price "from" and "to" are the same or Price "from" and "to" are different**: You can select only one option. Refers to the prices saved for that product.
- **Use restriction BINs**: the discount will be granted to users paying with cards whose BINs are among the numbers entered in this field.
- **Customer cluster**: the discount applies if the customer is included in the cluster you select in this field. It is important to highlight that the cluster name must be written exactly as in the Master Data. Spelling errors will prevent the configuration from working correctly.
- **utm_source**: the discount will be granted if the customer navigation uses a utm_source parameter corresponding to a listed one in this promotion. It is important to note that customers can only enter one utm_source at checkout.
- **utm_campaign**: the discount will be granted if the customer navigation uses a utm_campaign parameter corresponding to a listed one in this promotion.
- **Create a new coupon with the UTMs above**: create a coupon based on the UTM values selected above to give customers access to this promotion using only the coupon code.
- **Payment system**: the discount will be granted if the payment method selected by the customer is the same as the one included in this field. This discount will only be applied at checkout when customers select the same payment method as determined in the promotion.

  <div class = "alert alert-info">
  <p> By default, you can add up to 20 payment methods per promotion. In addition, there is the possibility of customization to include up to 100 payment methods. If you need to use more than 20 payment methods, please contact <a href="https://support.vtex.com/hc/en-us/requests">our Support</a>.</p>
 </div>

## 4. Restrictions and limitations of use

- **How many times will this promotion be applied in your store**: limits the number of times the promotion can be applied. If you deselect the **unlimited** field, the **times** field becomes available to enter the maximum number of times the promotion can be applied. Since the promotion has already been created, this condition will only apply from the day it was configured, not affecting previous orders.
- **How many times per customer will this promotion be applied**: the number entered in this field determines the maximum number of times each customer can use the promotion. If the above field is also selected, it will have a higher priority for action than this limit.
- **Set maximum number of eligible items for each cart**: determines the maximum number of items in the cart to which the promotion can apply. Read [this article](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#restricting-promotional-products-in-cart) to learn how to configure this field.
  If you do not select this option, the discount will be applied to the products of the collection or SKU list, even if the number of items per product is less than the number defined in the promotion. So the system will consider the sum of the eligible products in the shopping cart.
- **Apply with other promotions**: if selected, more than one promotion can be applied simultaneously, regardless of the discount type. Learn more about [concurrent promotions](https://help.vtex.com/en/tutorial/understanding-competition-of-promotions--tutorials_2270).
- **Apply with manual prices**: allows the promotion to apply to products whose prices were manually added via telesales. To enable the manual pricing feature, use the [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) endpoint.

