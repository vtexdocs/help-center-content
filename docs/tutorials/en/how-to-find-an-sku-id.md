---
title: 'How to find an SKU ID'
id: 4VQZsYeb3igGK2YowuEYWW
status: PUBLISHED
createdAt: 2018-02-07T13:04:01.334Z
updatedAt: 2023-03-29T18:17:03.976Z
publishedAt: 2023-03-29T18:17:03.976Z
firstPublishedAt: 2018-02-07T17:21:00.652Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: how-to-find-an-sku-id
locale: en
legacySlug: how-to-find-an-sku-id
subcategory: pwxWmUu7T222QyuGogs68
---

The SKU ID is the number that identifies a particular SKU. This information can be used in API calls and in investigations of scenarios involving a certain SKU, for example. 

This identifier number is extremely important for any action you wish to take with regard to a given SKU.

There are a few ways to find out the ID of an SKU:

## VTEX Admin

To find the ID of a SKU through the VTEX Admin, follow the steps below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on __All products__.
3. You will see a list of all products and SKUs registered in your store. The middle column lists all the SKUs.
4. Scroll to the SKU you want and check the number entered in parentheses. This number is the ID of your SKU.

### Example

In the example below, the SKU ID is __18__.

![skuId-1](//images.contentful.com/alneenqid6w5/3CEFOn0h8Ac6ciGgi6gmEK/2d64944b8added0ec12d5cdc7ebe9d9c/skuId-1.png)

## SKU registration URL

To find out the SKU ID through the SKU registration URL, follow the steps below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on __All products__. You will see a list of all products and SKUs registered in your store.
3. Click the name of the SKU you want.
4. Check the URL of the loaded page. You will see a URL with the following format: `https://{accountName}.myvtex.com/admin/Site/SkuForm.aspx?IdSku={number}`
 The SKU ID will be the number displayed in the place of `{number}`.

<div class="alert alert-danger">
 To ensure the items added to the inventory will be available for sale on the store, the <a href="https://help.vtex.com/en/tutorial/how-to-find-an-sku-id--4VQZsYeb3igGK2YowuEYWW">SKU ID</a> cannot contain <b>a leading zero</b>. For instance, the system does not read IDs with a <code>01</code>, <code>02</code>, <code>021</code> format because the expected format is <code>1</code>, <code>2</code>, <code>21</code>.
</div>
