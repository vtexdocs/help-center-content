---
title: 'How to change the SKU and Product relationship'
id: 6LEuMI1YYMYMeIwg606Wce
status: PUBLISHED
createdAt: 2017-07-04T17:56:33.013Z
updatedAt: 2023-03-29T17:49:24.459Z
publishedAt: 2023-03-29T17:49:24.459Z
firstPublishedAt: 2019-01-25T17:31:00.898Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 523NSmHfn2IKEoiy2Q44YS
slug: how-to-change-the-sku-and-product-relationship
locale: en
legacySlug: untitled-entry-2017-07-04-at-05-56-33
subcategory: pwxWmUu7T222QyuGogs68
---

You can change the relation between an SKU and a Product by editing the SKU, following the steps below.

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on **All products**.
3. In the desired product, click on the down arrow <i class="fas fa-angle-down"></i> and select the __SKU__ option.
4. In the SKU you want to delete, click on `Change`. 
5. In the **Product name (ID)** field, in **Current Selection**, click `Remove` to disassociate the product currently related to the SKU.
6. To associate the SKU to another product, enter the product name in the **Product name (ID)** field and click on the desired product. If you prefer, you can click on `Advanced Search` to search by __Name__, __ID__ or __SKU__ the new product to be related. Searching for the product by __ID__ or __SKU__ will be more precise for cases where there is the same value for __Name__ in different products.
7. After finding the desired product, click `Add`.
8. Click on `Save`.

If you prefer, you can run this update by calling the [Update SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-sku) endpoint of the __Catalog API__. This change cannot be implemented using a spreadsheet.
