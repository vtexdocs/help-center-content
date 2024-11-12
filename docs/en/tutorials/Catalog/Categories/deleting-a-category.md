---
title: 'Deleting a category'
id: tutorials_276
status: PUBLISHED
createdAt: 2017-04-27T22:10:36.202Z
updatedAt: 2023-03-29T18:10:52.580Z
publishedAt: 2023-03-29T18:10:52.580Z
firstPublishedAt: 2017-04-27T23:03:13.181Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: deleting-a-category
locale: en
legacySlug: deleting-a-category
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

For data security reasons, it's not possible to individually delete a category after creating it on the VTEX platform. 

## Deactivating a category

If you do not want to display a specific category to your customers, you can deactivate it in your store. This way, it will be listed only in the Admin. To deactivate a category, follow the step-by-step instructions below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on __Categories__.
3. Select the category you want to deactivate.
4. Click on the `Actions` button.
5. Click on `Edit`.
6. Uncheck the box that says __Active | Category is active on site__, as illustrated in the image below: ![img inativarcategoria EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
7. Click on `Save`.

## Deleting all categories

Another option is to [empty the catalog](https://help.vtex.com/en/tutorial/entendendo-a-manutencao-da-base-de-dados--34P9LGs7BCIQK6acQom802) and delete all categories, brands, and specifications simultaneously. To do that, you must delete products and SKUs before, as described in the steps below:

1. Type the URL below into your browser: `{accountName}.myvtex.com/admin/Site/fullcleanup.aspx`
2. Click on `Delete Products and SKUs`. Warning: your products, SKUs, and related items will be permanently removed from your store.
3. Then click on `Delete Categories and brands`. Warning: your categories, tags, fields, and related items will be permanently removed from your store.

>⚠️ For security reasons, only the [Sponsor user](https://help.vtex.com/en/tutorial/o-que-e-o-usuario-master--3oPr7YuIkEYqUGmEqIMSEy) of the account has access to the database cleaning feature. If another user tries to access this page, all buttons will be disabled.

### Related articles
- [Adding a category](/en/tutorial/registering-a-category)
- [Adding a product](/en/tutorial/registering-a-product)
- [Adding a SKU](/en/tutorial/registering-sku)
