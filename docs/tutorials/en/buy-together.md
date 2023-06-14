---
title: 'Creating a Buy Together promotion'
id: tutorials_323
status: PUBLISHED
createdAt: 2017-04-27T22:08:34.791Z
updatedAt: 2019-12-31T15:24:16.500Z
publishedAt: 2019-12-31T15:24:16.500Z
firstPublishedAt: 2017-04-27T23:03:15.238Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: buy-together
legacySlug: buy-together
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

__Buy Together__ is a promotion used to grant discounts for a set of two products when they're placed at the same time in the cart.

The discount can be applied on both products. There is also the option of applying the discount only if a certain quantity of one of the products is inserted in the cart.

An example for this type of promotion would be *"buy a pair of pants and get 10% on the purchase of a belt"*. Another possible example would be the promotion *"buy a pair of shoes + a pair of socks and get a 15% discount"*.

## General promotion data

- __Name__: Promotion name.
- __Status__: Activate or deactivate the promotion.
- __Description__: Internal description of the promotion. This field should be used for internal communication in your store, to make it clear if the promotion is due to some campaign, for instance.
- __Expiration date__: Date and time of start and end of the promotion. A future date and/or time can be used for the promotion. If it's configured this way, it will have the status "scheduled" until the date and time are reached. While the promotion is valid, it will have the status "active". At the end of the set date and time, the status will be changed to inactive automatically. It's important to note that the system uses the date and time of the user who made the scheduling as a reference.
- __Specify days of the week for activation__: This option is of type checkbox. When checked, seven additional checkboxes become available for you to select the days of the week that the promotion will be applied. If you want the promotion to be applied on any day of the week, do not select this option.
- __Featured in the product__: Inserts a flag with the name of the promotion. Used in the shop window and on the product page. This flag will only be inserted if the `<vtex.cmc:discountHightLight/>` control is used in the template. This control displays the promotion flag on the desired page.
- __Restrict this benefit the products of these Sellers__: On the right side of the screen, fill in the name of the sellers whose products will receive the discount. This option allows you to condition a different discount for each seller.
- __Sales Policy__: Select the sales policies that will offer this discount. You can offer discounts for sales policies where [your store is the marketplace](/en/faq/what-is-a-marketplace) (*provided by me (My store)*) or the [seller](/en/faq/what-is-a-seller) (*Delivered by me (Other stores)*).

## Lists of items you want to combine and their discounts

**List 1 of 2**

- __SKUs__: Enter here the name or ID of the SKUs to include in the first list. Following the example given in the beginning of this article, here you would register the pants or the shoes. Another example would be to offer a promotion with a product of two different sizes. In this case, you would need to insert in the list 1 the SKU of size S and in the list 2 the one of size L, for example. You can also manually enter each SKU or import a list of SKUs. The template worksheet can be exported through the __Download of SKUs list__ link. This field is required.
- __Discount__: Enter the discount that will be applied to the SKUs of the first list. Considering the example given in the beginning of the article, in this field you should register the value of 15% discount to be granted to shoes. This field is required. If your goal is to apply the discount only to the second list, fill in this field with __0__.
- __Minimum SKU quantity added to the order__: Quantity of SKUs nedded in the cart for the discount to be applied. This field is mandatory, requiring at least one unit.

**List 2 of 2**

- __SKUs__: Enter here the name or ID of the SKUs to include in the second list. Following the example given in the beginning of this article, you would register in this field the belt or the socks. You can also manually enter each SKU or import a list of SKUs. The template worksheet can be exported through the __Download of SKUs list__ link. This field is required. _On both list 1 and list 2, the maximum number of SKUs accepted is **100**._
- __Discount__: Use the discount that will be applied to the SKUs of the second list. Considering the example given in the beginning of the article, in this field you should register the value of 10% discount to be granted to the belt or the 15% discount to the socks. If your goal is to apply the discount only to the first list, fill in this field with __0__.

## Conditions for the promotion to be valid

- __Order's minimal value__: Choose a minimum order value for the promotion to be activated. You can also specify which total to consider: *Just items in benefit*, *Just items that are note in benefit* or *All items*.
- __Order's maximum value__: Choose a maximum order value for the promotion to be activated. You can also specify which total to consider: *Just items in benefit*, *Just items that are note in benefit* or *All items*.
- __Use restriction BINs__: Fill in the desired BIN number and click the __+__ button.
- __Customer Cluster__: Fill in the ID of a [customer cluster created in Master Data](/en/faq/how-can-i-create-cluster-of-customers).
- __Utm\_source:__ The discount will be granted if the navigation is done through an utm\_source with the registered value here.
- __Utm\_campaign__: The discount will be granted if navigation is done through an utm\_campaign with the value registered here.

## Restrictions and limitations of use

- __How many times will your benefit be applied in your store__: Fill in the maximum value you want or click on *unlimited*.
- __How many times will your benefit be applied in your store per client__: Fill in the maximum value you want or click on *unlimited*.
- __Allows accumulate benefits__: Allows more than one promotion of the same type to be awarded at the same time.
- **Allow accumulate with manual prices:** Allows the promotion to be applied to products whose prices have been manually input by a callcenter user. For the correct usability of this flag, a previous configuration is necessary to allow the manual prices input.

## How the promotion works

- The promotion will be applied to __all__ items in the lists if the condition of minimum quantity of products is met. If the field __minimum amount__ is equal to __1__, it's sufficient that at least one SKU of each list is in the cart for the promotion to be applied.
- If the customer places 2 units of the same SKU, the discount will only be applied in 1 unit if the minimum quantity is __1__.
- If the customer places 2 SKUs that are in list 2, the discount will be applied in only 1 SKU, always on the cheaper one (for example, if the minimum quantity is 1).
- 3 items in list 1 and the minimum quantity equal to 1: in this scenario, it's enough that one product from the list is placed in the cart to validate the context of the promotion and apply the discount on items in list 2 (and/or list 1, if there is a discount).
