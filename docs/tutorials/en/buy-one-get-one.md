---
title: How the Buy One Get One (BoGo) promotion works
id: tutorials_322
status: PUBLISHED
createdAt: 2017-04-27T22:08:41.148Z
updatedAt: 2021-12-13T17:23:17.182Z
publishedAt: 2021-12-13T17:23:17.182Z
firstPublishedAt: 2017-04-27T23:03:14.992Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: buy-one-get-one
legacySlug: buy-win
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

This kind of promotion is used to offer free shipping or a free gift if a determined product is purchased. For example, "buy a TV and get free shipping" or "buy a video game and win a game."

## What is the general data of this promotion?

- __Name__
- __Name of the promotion__
- __Status__
- __Enable or disable the promotion__
- __Internal description of the promotion__: This field is used for your store's internal communication, in order to explain if the promotion is the result of a campaign, stock clearance, etc.
- __Expiration Date__: Promotion start and end date. A future date and/or time can be used to launch the promotion on the website, where it will have a scheduled status until the set date and time arrive. As long as the promotion is valid, it will have the enabled status and, at the end of the set date and time, the status will automatically change to disabled.
- __Specify days of the week for the enabling__: This option is displayed as a check box. When selected, it provides seven other check boxes, that represent the days of the week when the promotion can be offered. If you want the promotion to be offered on every day of the week, don't select this option.
- __What is the type and value of the discount?__; 
  1. __Maximum Price per Item__: Sets the maximum price for each item.
  2. __Free Shipping__: Total discount on shipping fees.
  3. __Gift__: Total discount on the value of a product defined as gift. Selecting this option will open other fields to enter a SKU, a box to activate the gift multiplier and the amount of product defined as gifts. The SKU can be entered by name or ID, being also possible to enter more than one. 
To learn how to set up this type of discount, have a look at the article on [Setup Buy and Win promotion gift for a Specific SKU](/en/tutorial/how-to-set-a-buy-and-win-promotion-gift-for-a-specific-sku).
- __Discount highlight__: Inserts a flag with the name of the promotion. Used on the product's window and page. This flag will only be inserted if you use the correct promotion display control on the template. <vtex.cmc:discountHightLight>;
- __Seller__: Selects the seller that will offer the discount. Having a multistore will make all the sellers registered to your account appear. This option allows you to assign a different discount for each seller.
- __Commercial Policy__: Selects the Commercial Policies that will offer the discount. All the policies registered in `E-Commerce > Marketplace > Commercial Policy` will be listed. This option allows you to offer a different discount for each policy.

## Buy One Get One

- __Collections__: enter the name of the product collection you wish to relate to this type of discount. It is possible to enter more than one name. The promotion will only be applied to products that are in the collections registered in this field.
- __SKUs__: enter the name or Id of the SKUs to which you want to apply the discount. You can import a list of SKUs, which must be saved as a text file (.txt), with each Id on a different line. 

__Notice__: if products are not limited by collection or SKU, the platform will not allow the creation of the promotion.

__Notice__: the maximum number of registered SKUs for this promotion is 100.

- __Product Threshold__: sets the number of products required in the cart in order to grant the discount. This field is mandatory.

## What are the conditions for the promotion to be valid?

- __BIN Restriction__: defines which credit cards can benefit from this promotion.
- __Customer Cluster__: you can use an existing field in the __CL__ Data Entity to create a threshold. Example: `age = 25`
- __Type of Shipping__: the discount will be granted if the type of shipping is the same as the one registered.
- __Utm\_source__: the discount will be granted if browsing is performed with the utm\_source that contains the registered value.
- __Utm\_campaign__: The discount will be granted if browsing is performed with the utm\_campaign that contains the registered value.

## Restrictions and limitations of use

- __Only for the same items__: The discount will only be applied per SKU, once each one has a minimum registered amount. If you don't check this option, the discount will be applied to products from the collection or from the list of SKUs, without the need of having the minimum registered amount in the cart for each of them. The sum of these products will be considered instead.
- __Allow promotion stockpiling__: Allows that more than one promotion with the same type of discount be granted at the same time.
