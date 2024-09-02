---
title: 'Adding an attachment'
id: 7zHMUpuoQE4cAskqEUWScU
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.901Z
updatedAt: 2023-11-16T17:23:31.034Z
publishedAt: 2023-11-16T17:23:31.034Z
firstPublishedAt: 2019-01-24T22:06:25.639Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: adding-an-attachment
locale: en
legacySlug: registering-an-attachment
subcategory: 1hoOi2R0Rm6ky0yCwOUoiy
---

Attachments can be used to [complement a product with custom information](https://help.vtex.com/en/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm). To add an attachment, go to VTEX Admin and follow the step-by-step instructions below.

1. In the VTEX Admin, go to **Catalog** , or type **Catalog** in the search bar at the top of the page.
2. Click **Custom product attributes**.
3. Click on `New Attachment`.
4. Fill in the following fields:
    * **Name:** name of the attachment you want to add. The name must be unique in the system and must contain only letters, numbers, or periods. This field is required.
    * **Attachment Required:** defines whether the attachment will be required or optional when the customer purchases the product.
    * **Status:** enables or disables the attachment in your store.
5. Click on `Save`.

## Adding keys and permitted values

After adding the attachment, you need to add the keys and **permitted values** related to it. You can add as many keys as you wish. To add the keys and **permitted values**, follow the steps below.

1. On the **Custom product attributes** page, find the row of the attachment you have created and click `Modify`, as illustrated in the image below.
  ![anexos.pt](//images.ctfassets.net/alneenqid6w5/4hSZgKMwFjJ3fE2Tfek60C/0088408090cd1bec84c4826676af8cb8/custom-product-attributes-en.PNG)
2. Fill in the fields listed below.
    * **Key Name:** name of the custom information. This field is required and must contain only letters, numbers, or periods. For example, if the customizable product is a U.S. soccer jersey, its key names can be `Name` and `Number`.
    * **Maximum Number of Characters:** the maximum number of characters the customer can type to add custom information to the product. For example, in this field you could set the character limit for the name that will be printed on a shirt. This field is required. If you do not fill it in, the attachment will not be displayed to your customer as a selection option in the cart.
    * **Permitted values:** the values that your customer can select for customization, separated by commas. For example, by populating this field with `5,7,9,10`, you allow your customer to include one of these numbers on a shirt.
3. Click `Add New`. You can add other keys by repeating this process.
4. Click on `Save`.

<div class="alert alert-warning">
  <p>The <strong>Maximum Number of Characters</strong> field is required. If you do not fill it in, the attachment will not be displayed to your customer as a selection option in the cart.</p>
</div>

## Associating the attachment with a SKU

After creating the SKU attachment and configuring its keys and permitted values, you must associate it with one or more existing SKUs. To do this in the VTEX Admin, follow the steps below.

1. In the VTEX Admin, go to **Catalog** , or type **Catalog** in the search bar at the top of the page.
2. Click on **All products**.
3. Select the SKU you want to associate the attachment with.
4. Click on the **Advanced Settings** tab.
5. Associate the SKU with the attachment you have created by clicking the check box next to it.
6. Click on `Save`.

You can also associate an attachment to an SKU by using the [Catalog API](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuattachment).

<div class="alert alert-warning">
  <p>VTEX does not control the inventory of the attachment. This is the responsibility of the Marketplace or the Seller.</p>
</div>
