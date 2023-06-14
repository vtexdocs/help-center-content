---
title: 'Filling in SKU registration fields'
id: 21DDItuEQc6mseiW8EakcY
status: PUBLISHED
createdAt: 2017-09-22T00:20:45.920Z
updatedAt: 2022-12-19T18:03:03.864Z
publishedAt: 2022-12-19T18:03:03.864Z
firstPublishedAt: 2017-09-22T00:40:16.232Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slug: sku-registration-fields
legacySlug: sku-registration-fields
subcategory: pwxWmUu7T222QyuGogs68
---

<div class="alert alert-warning">
  <p>There is a limit of 50 SKUs per product. To request an extension of the limit, please contact <a href= "https://support.vtex.com/hc/pt-br/requests">our Support</a>.</p>
</div>

For more information on each field, read their complete description below.

__Product Name:__ This field is already filled in with the SKU product name.

__Name:__ The SKU name, that is, the variation of the previously added product. Product - Fridge, SKU - 110V.

__Loyalty Value:__ Credit that the customer receives upon completing a purchase of 1 (one) specific SKU unit. If you enter "1" in this field, this means that the customer will get U$ 1 credit on the website.

__EAN/UPC:__ Unique SKU identification code (barcode). Up to 13 numerical characters.

__Reference Code:__ Unique reference code used internally for organizational purposes. Not mandatory.

__Shipping Weight:__ Shipping weight, which must have a value greater than zero to make the <a href="https://help.vtex.com/en/tutorial/how-proportional-shipping-costs-are-calculated--frequentlyAskedQuestions_155">proportional shipping cost</a> work properly.

<div class = "alert alert-info">
The <b>Inventory & Shipping/Shipping</b> module does not take units of measure into account in the fields below. It is only necessary to be consistent with what is registered in the SKU and in the <a href="https://help.vtex.com/en/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke">product registration fields</a>.
</div>

__Shipping Height:__ Shipping height.

__Shipping Width:__ Shipping width.

__Shipping Length:__ Shipping length.

__Real Weight:__ The real weight of the product.

__Real Height:__ The real height of the product.

__Real Width:__ The real width of the product.

__Real Length:__ The real length of the product.

__Coming Soon (Expected on):__ To add the product for pre-sale, enter the estimated arrival date of the product, in the format dd/mm/yyyy. For the delivery date, you must consider both the launch date and the shipping estimation.

__Accessories:__ Adds SKUs to the SKU being added. If you are adding a dress, for example, you can add a belt as an accessory. This field generates a checkbox that the customer can click and buy both items.

__Suggestion:__ Suggests SKUs to the SKU being added. If you are adding a dress, a belt may be suggested. However, the customer cannot purchase them together, they will need to access each item page. 

__Similar (Alternate Products):__ This field shows other options of similar products on the product page. Maximum: 50 products.

__Show Together:__ Displays SKUs of products suggested to be bought together.

__Commercial Condition Code:__ Used to define SKU specific promotions/installment rules for SKUs. In case there is no specific condition, use the default value. To lern more, read our article on Commercial Conditions.

__Measurement Unit:__ Used only in cases where you need to convert the measurement unit for a sale, such as, for example, if a product is sold in boxes but customers want to buy per sqm (m²). In common cases, use "un".

__Unit Multiplier:__ Numerical unit that multiplies the selected quantity of the product when it is added to the cart. If the Multiplier is 5, the product will be added in multiple quantities of 5 - 5, 10, 15, 20, etc..

__Activate SKU if Possible:__ Activates the SKU if all activation requisites are met. Enable this field so that the SKU is automatically activated once the SKU registration is complete.

__SKU Activated?__ Defines whether an existing SKU is active or not. It is automatic and does not allow any changes, being used solely for consultation.

__Manufacturer Code:__ Code provided by the manufacturers to identify a product. If the product has a specific manufacturer code, this field must be filled in.

After filling out these fields, click on Save. To continue the registration, you can configure images, specifications, and advanced settings tabs.

## Images

<div class="alert-info">
<p>The maximum image size for the SKU is 3200 x 3200 pixels.</p>
</div>

Adding a new image:

1. Click on the __Images__ tab.
2. Next, click on __Insert__.
3. Find your image in __Choose file__.
4. Fill in the __Text__ field.
5. Fill in the __Label__ field.
6. Click on __Send__.

How to link an image to an existing SKU:

1. Click on the __Images__ tab.
2. Next, click on __Link to existing images__.
3. Select an SKU.
4. Click on __Associate images__.

## Videos

In this section, you can add videos related to your SKU. To do this, enter the URL of the desired video in the text box. You can add up to six URLs, one per line.

There are no native controls to render video content. The front-end must manipulate the data entered to display the content to the customer.

## Specifications

Depending on the category of the product created, you may have to fill in some fields. 

These fields are properties that can be added to SKUs to attribute specific characteristics to products in your store.

See more details in [Adding SKU specifications or fields](https://help.vtex.com/en/tutorial/adding-sku-specifications-or-fields--tutorials_119).

## Advanced Settings

Use the fields below to add information about the SKU.

__Activate Bundle:__ Defines whether the SKU of the product is composed of one or more SKUs. This field must be enabled if you are adding a bundle. Once enabled, it cannot be reverted.

__Bundle with SKUs sold Separately:__ Must be enabled if the SKU is part of a bundle.

__Credit with Gift Card?__: Defines that the SKU in question, when bought, will generate credit on a gift card. It is also used to define lists that generate gift card value for their owner.

__Modal__: Links an unusual type of product to a carrier specialized in delivering it. To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/como-funciona-o-modal--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configurar-modal-para-transportadoras--3jhLqxuPhuiq24UoykCcqy#).

__Attachments:__ Displays customized information about the buyer of service or the item that was purchased.

After filling out the required fields, click on Save on the SKU tab.

### Related Articles
- [Filling in product registration fields](/en/tutorial/product-registration-fields--4dYXWIK3zyS8IceKkQseke)
- [Filling in Import Spreadsheet fields](/en/tutorial/preencher-campos-da-planilha-de-importacao--4nYhx63Q5yokQWaMguaIgI)

<div class="alert alert-danger">
 To ensure the items added to the inventory will be available for sale on the store, the <a href="https://help.vtex.com/en/tutorial/how-to-find-an-sku-id--4VQZsYeb3igGK2YowuEYWW">SKU ID</a> cannot contain <b>a leading zero</b>. For instance, the system does not read IDs with a <code>01</code>, <code>02</code>, <code>021</code> format because the expected format is <code>1</code>, <code>2</code>, <code>21</code>.
</div>

