---
title: 'Updating the image of an SKU'
id: 5PMb54FnvUuWOq2qGyAosu
status: PUBLISHED
createdAt: 2018-01-24T17:56:32.670Z
updatedAt: 2023-03-24T13:55:22.775Z
publishedAt: 2023-03-24T13:55:22.775Z
firstPublishedAt: 2018-01-25T19:29:50.366Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: how-to-update-the-image-of-an-sku
locale: en
legacySlug: how-to-update-the-image-of-an-sku
subcategoryId: pwxWmUu7T222QyuGogs68
---

There are two ways to update SKU images: using the VTEX Admin or Catalog API.

<div class = "alert alert-danger">
You must perform this procedure very carefully. The procedure described below involves <em>deleting all images</em> of an SKU, which will make it <strong>INACTIVE</strong>. Please pay close attention to the recommendations in the steps below so that the image is successfully updated.
</div>

Since this procedure involves deleting all images from an SKU, consequently making it inactive, we recommend performing the image replacement process in small batches of SKUs.

## Via VTEX Admin

### Deleting images

1. Access the __Catalog__ module.
2. Click on __Products and SKUs__.
3. Select the SKU you want to change.
4. Click on the __Images__ tab.
5. Choose the images you want to delete and click __Remove__.

<div class = "alert alert-danger">
We recommend doing these image updates in small batches. Remember that deleting all images of an SKU inactivates it.
</div>

### Uploading new images

1. On the same screen, click __Insert__.
2. Choose the image on your computer.
3. Fill in the __Text__ and __Label__ fields.
4. Click __Send__.

### Activating the SKU

1. On the __SKU__ tab, check the box next to __Activate SKU if possible__.
2. Click __Save__.

Your product will now enter the [Indexing Queue](/en/tutorial/understanding-how-indexation-works). After being indexed, the SKU will be displayed with the new images.

## Via API

Use the [Update SKU File](https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-sku-file#catalog-api-put-sku-file) endpoint.
