---
title: 'Creating a More for Less promotion'
id: tutorials_325
status: PUBLISHED
createdAt: 2017-04-27T22:08:17.186Z
updatedAt: 2024-03-28T15:36:24.222Z
publishedAt: 2024-03-28T15:36:24.222Z
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
    - [Restrict this promotion to sellers products](#restrict-this-promotion-to-products-from-sellers)
    - [Trade Policy](#trade-policy)
2. [More for Less](#2-more-for-less)
3. [Conditions for the promotion to be valid?](#3-what-are-the-conditions-for-the-promotion-to-be-valid)
4. [Restrictions and limitations of use](#4-restrictions-and-limitations-of-use)

Read our article [Promotion examples](https://help.vtex.com/pt/tutorial/promotion-examples--5A8UTc7knvAscxo7e7rMFD) for more information.

## Creating a More for Less promotion

1. In the VTEX Admin, go to *Promotions > Promotions*, or type *Promotions* in the search bar at the top of the page.
2. Click on the `Create Promotion` button.
3. Select the **More for Less** option.
4. Complete the promotion fields.
5. Click on `Save`.

## 1. Promotion overview

In this section, we provide information on the promotion overview.

-**Name**: name of the promotion. Required field.
- **Status**: Activates or deactivates the promotion.
- **Description**: An internal description of the promotion. The purpose of this field is to be used as internal communication in your store to indicate whether the promotion comes from a campaign, clearance sale, etc.
- **Expiration date**: Start and end date and time of the promotion. You can use a future date and/or time for the promotion to start on your website. If configured this way, the promotion status will be displayed as follows:
    - **Scheduled:** Before the selected start date and time.
    - **Active:** During the scheduled promotion period.
    - **Inactive:** After the selected end date and time.
- **Use recurrence settings**:By selecting this option, you can configure the recurrence, such as the weekday and time.
- **Additional information (optional):**: Allows you to add a name and value to the promotion.
- **Promotion is highlighted:** Adds a tag with the promotion name to the window display and the product page. This tag will only be added if you use the right promotion display control in the template.<vtex.cmc:discountHightLight/>. Required field.

![Dados gerais 1 - EN](//images.ctfassets.net/alneenqid6w5/4Ara5CRqjivFlYltPnMGpN/244f3cfaeed58c7d6b5ae309ca815089/Dados_gerais_1_-_EN.png)

### Restrict this promotion to products from sellers

In this section, you can define to which sellers the promotion will apply. You can specify the sellers you want to include or exclude from the discount.

- **Equal to**: select the name of the sellers you want to include.
- **Different from**: select the name of the sellers you want to exclude.

For the promotion to be valid for all sellers, leave the field blank.

<div class = "alert alert-warning">
  <p>You cannot select a white label seller directly. To include a white label seller in the promotion, you have two options:</p><ol>1. Restrict sellers to the main store. This restriction adds all your store's white label sellers to the promotion.
</ol><ol>2. Leave the selection empty, including all sellers. Here, all types of sellers — white label or not — will be added to the promotion.
</ol>
</div>

![Restringir - EN](//images.ctfassets.net/alneenqid6w5/7KJhtOylpPsj0g5Q1lF2T0/8dba06aef0da8ce4d546c0e2fea91917/Restringir_-_EN.png)

### Trade Policy

In this section, you can set the trade policies valid for the promotion. You can include or exclude trade policies from the discount.

- **Equal to**: select the trade policies you want to include.
- **Different from**: select the trade policies you want to exclude.
- **Provided by me (my store)**: Select trade policies with products from your store. You can select more than one trade policy.
- **Delivered by me (other stores)**: Select trade policies in which your products are available in third-party stores. You can select more than one trade policy.

For the promotion to be valid for all trade policies, leave the selection empty.

![Politica - ES](//images.ctfassets.net/alneenqid6w5/5fuMmvGh34BpTbj3t3AgdR/50371b6897f37bce42ac8e70110ca90b/Politica_-_EN.png)

## 2. More for Less

In this section, you can define the products, number of items, and discounts included in the promotion.

- **The customer purchases** `quantity` **of the following products**: number of units of the same product that must be added to the cart for the promotion to apply. Required field.
    - **SKUs**: names or IDs of the SKUs to which the discount will apply. You can import a list of SKUs by clicking on the `Select a .txt file` button. The text file (.txt) must contain each SKU ID in a different row. You can also download the list of SKUs added to the field by clicking on the `Download SKU list` button.
    - **Collections**: Collections to which the promotion will apply. The promotion will only be applied to products in the collections listed in this field. You can add a collection by entering its name. You can also select more than one collection.

<div class = "alert alert-info">
  <p>If you do not inform any product collection or SKU, the platform will not allow the creation of the promotion.</p> <p>
</div>

- **And gets** `number` **of these products**: the number of items defined to receive the discount. Required field.
   - **With a discount of**: the percentage discount the customer will receive if they buy the number of items defined in the promotion.
   - **With a maximum price per item of**: the maximum price per item the customer will pay if they buy the number of items defined in the promotion.

![Leve Mais - EN](//images.ctfassets.net/alneenqid6w5/65GpdBT4FEpUQSNtZ7NXEH/8e4b955432b5d2d10ab57e8de7a79b9d/Leve_mais_-_EN.png)

### Advanced settings
In this section, you can specify how the discount will be applied.
The discount must be applied:

- **Considering**:
  - **Any product**: The discount will be applied to different products in the collection or SKU list, even if the number of items per product is less than the number defined in the promotion. In this case, the system considers the sum of the eligible products in the shopping cart.
  - **Only identical products and variations**: The discount will only be applied to a SKU. To use this option, you must have added the minimum number of items for the promotion.
- **To**:
  - **The lowest-priced products**: the discount will be applied to the cheapest items in the promotion.
  - **The highest-priced products**: the discount will be applied to the most expensive items in the promotion.

![Leve Mais por menos - EN](//images.ctfassets.net/alneenqid6w5/7lIEbcThX12WgUZvtCgx6E/09d9ff06ee5085c52862aa85e5f8baa5/Leve_Mais_por_menos_-_EN.png)

#### How must the discount be distributed?

- **Only among the** `number` **products receiving the discount**: the discount will be applied in full to the selected number of products.
- **Proportionally among the** `number` **products**: the discount will be equally distributed among the selected number of products.

## 3. Conditions for the promotion to be valid

In this section, we will detail the conditions you must apply for a promotion to be valid.

- **Order’s minimum and maximum amount**: The promotion will be applied based on the gross amount of the cart, not considering other promotions or shipping.
- **Full price and discounted price are the same or Full price and discounted price are different:**: Refers to the added product prices. You can only select one option.
- **Use restriction BINs**: the discount will be granted to users paying with cards whose BINs are among the numbers entered in this field.
- **Customer cluster**: the discount applies if the customer is included in the cluster you select in this field. It is important to highlight that the cluster name must be written exactly as in the Master Data. Spelling errors will prevent the configuration from working correctly.
- **utm_source**: The discount will apply if the customer navigation uses an utm_source parameter corresponding to a listed one in this promotion. It is important to note that customers can only enter one utm_source at checkout.
- **utm_campaign**: the discount will be granted if the customer navigation uses a utm_campaign parameter corresponding to a listed one in this promotion.
- **Create a new coupon with the UTMs above**: Create a coupon based on the UTM values selected above to give customers access to this promotion using only the coupon code.
- **Payment system**: Allows you to choose if the promotion will be applied to one or more of the selected payment methods.

  <div class = "alert alert-info">
  <p> By default, you can add up to 20 payment methods per promotion. You can also customize it to add up to 100 payment methods. If you need to use more than 20 payment methods, please contact <a href="https://support.vtex.com/hc/en-us/requests">our Support</a>.</p>
 </div>

![Condições de promoção - EN](//images.ctfassets.net/alneenqid6w5/1mPsbqBbsHGXaSKeoFL1vY/8efc11e8c289f9777a22e3b7d29362d5/Condi__es_de_promo__o_-_EN.png)

## 4. Restrictions and limitations of use

In this section, you will find important information about the promotion conditions and restrictions.

- **How many times will this promotion be applied in your store**: Limits the number of times the promotion will be applied. If you uncheck the **unlimited** field, the times field becomes available to enter the maximum number of times the promotion can be used. This only applies for orders created after the condition has been set up. It will not affect orders placed previously.
- **How many times per customer will this promotion be applied in your store**:This field's value determines the maximum number of times each customer can benefit from the promotion. For example, if you set a limit of three uses and the promotion is applied three times on a single order, this will be considered a single use in relation to the total limit. This way, the customer can still use the promotion on two different orders. Note that this calculation is done regardless of how many times the promotion has been used on each individual order.
- **Set maximum number of eligible items for each cart**: Defines the maximum number of items in the cart that will be affected by the promotion. Check out [this article](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy) to learn how to configure this field.
- **Apply with other promotions**: if selected, more than one promotion can be applied simultaneously, regardless of the discount type. Learn more in the [How promotion competition works](https://help.vtex.com/en/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270) article.
- **Apply with manual prices**: allows the promotion to apply to products whose prices were manually added via telesales. To enable the manual pricing feature, use the [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) endpoint.

![Restrições e limitações - EN](//images.ctfassets.net/alneenqid6w5/5jrjtfnEkqiA9ipZEi1jjk/4c779dc8723b31d77e1c36871d1bb051/Restri__es_e_limita__es_-_EN.png)
