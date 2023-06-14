---
title: 'Creating a Maximum price per item promotion'
id: tutorials_3221
status: DRAFT
createdAt: 2017-04-27T21:52:05.359Z
updatedAt: 2019-12-31T15:21:04.382Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:14.883Z
contentType: tutorial
productTeam: Others
author: authors_24
slug: maximum-price-per-item
legacySlug: maximum-price-per-item
subcategory: 
---

The __Maximum Price per item__ promotion is used to set a maximum price for a product or set of products.

You can create up to __10 promotions__ of this type, with a __limit of 100 SKUs__ in each of them, where each SKU will have its individual and exclusive maximum price.

As it's a benefit, the prices registered at maximum prices can not be higher than the product's price.

<div class="alert alert-warning">
<strong>Attention:</strong> In order for the Maximum price per item to work, you must <strong>choose a payment method</strong>.
</div>

## General promotion data

- __Name__: Promotion name.
- __Status__: Activate or deactivate the promotion.
- __Description__: Internal description of the promotion. This field should be used for internal communication in your store, to make it clear if the promotion is due to some campaign, for instance.
- __Expiration date__: Date and time of start and end of the promotion. A future date and/or time can be used for the promotion. If it's configured this way, it will have the status "scheduled" until the date and time are reached. While the promotion is valid, it will have the status "active". At the end of the set date and time, the status will be changed to inactive automatically. It's important to note that the system uses the date and time of the user who made the scheduling as a reference.
- __Specify days of the week for activation__: This option is of type checkbox. When checked, seven additional checkboxes become available for you to select the days of the week that the promotion will be applied. If you want the promotion to be applied on any day of the week, do not select this option.
- __Featured in the product__: Inserts a flag with the name of the promotion. Used in the shop window and on the product page. This flag will only be inserted if the `<vtex.cmc:discountHightLight/>` control is used in the template. This control displays the promotion flag on the desired page.
- __Restrict this benefit the products of these Sellers__: On the right side of the screen, fill in the name of the sellers whose products will receive the discount. This option allows you to condition a different discount for each seller.
- __Sales Policy__: Select the sales policies that will offer this discount. You can offer discounts for sales policies where [your store is the marketplace](/en/faq/what-is-a-marketplace) (*provided by me (My store)*) or the [seller](/en/faq/what-is-a-seller) (*Delivered by me (Other stores)*).

## Maximum price per item

- __Item__: In this field you must enter the name or ID of the SKU that you want to include in the promotion.
- __Price:__ Set here the maximum price at which the product will be sold. You can only set the maximum price for one item at a time. To add products to the promotion, click the __+__ button.
- __Payment system__: Select the payment methods that should activate the promotion.

<div class="alert alert-info">
You can import a list of SKUs, which must be saved in an .xls file, with each ID on a different line, followed by the corresponding maximum price. To see a template, click the <strong>Example spreadsheet download</strong> link.
</div>

## Conditions for the promotion to be valid

- __Use restriction BINs__: Fill in the desired BIN number and click the __+__ button.
- __Affiliates__: The promotion will be applied to affiliates filled in this field. This filter works only when the *Delivered by me (Other stores)* option is active in the __Sales Policy__ section.
- __Customer Cluster__: Fill in the ID of a [customer cluster created in Master Data](/en/faq/how-can-i-create-cluster-of-customers).
- __Maximum number of installments__: If you wish, you can set a maximum number of payment installments as a condition for the promotion to be valid. If you'd like it to be valid for any number of installments, check the __unlimited__ box.
- __Utm\_source__: The discount will be granted if the navigation is done through a utm\_source with the value registered here.
- __Utm\_campaign__: The discount will be granted if the navigation is done through a utm\_campaign with the value registered here.

## Restrictions and limitations of use

- __How many times will your benefit be applied in your store__: Fill in the maximum value or click on *unlimited*.
- __How many times will your benefit be applied in your store per client__: Fill in the maximum value or click on *unlimited*.
- **Allow accumulate with manual prices:** Allows the promotion to be applied to products whose prices have been manually input by a callcenter user. For the correct usability of this flag, a previous configuration is necessary to allow the manual prices input.
