---
title: 'Configuring zoom and thumbnails in CMS Portal (Legacy) stores'
id: 5ZqoOjGFgIkESq2KyyEYus
status: PUBLISHED
createdAt: 2017-10-12T15:38:58.079Z
updatedAt: 2026-08-13T00:00:00.000Z
publishedAt: 2023-03-24T20:53:11.795Z
firstPublishedAt: 2017-10-12T15:48:58.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: configuring-zoom-and-thumbnails-in-cms-portal-legacy-stores
legacySlug: configurar-o-tamanho-padrao-da-imagem-de-zoom
locale: en
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

> ⚠️ This tutorial is only applicable to Legacy (CMS Portal) stores. For stores developed with [Store Framework](https://help.vtex.com/docs/tracks/frontend-implementation), see the [Product Images](https://developers.vtex.com/docs/apps/vtex.store-components/productimages) component documentation.

In your CMS Portal (Legacy) store, you can configure the following storefront display effects directly in the VTEX Admin:

- [Zoom](#configuring-zoom): Zooms in on the product image when customers hover over it, allowing them to see details more closely.
- [Thumbnails](#configuring-thumbnails): Smaller, compressed versions of images displayed in product shelves and listings to help pages load faster.

## Before you begin

Before configuring zoom or thumbnails in your store, read the [Configuring file types](/docs/tutorials/configuring-file-types) article to learn how to configure file types.

## Configuring zoom

For product zoom to work correctly in your **CMS Portal (Legacy)** store, configure the `Product - Zoom` type in **Store Settings > Storefront > Settings > File Types**. Learn more in [Configuring file types](/docs/tutorials/configuring-file-types).

By default, this type is usually **1000×1000** pixels, which means that:

- The resulting zoom displays the image at that size.
- The image registered in the Catalog must be **at least as large as** the `Product - Zoom` setting. If the image is smaller, zoom isn't enabled (or only works for some images).

Before making adjustments in **File Types**, confirm that zoom is enabled in the page template. Learn more in [Activating product zoom in the page template](/docs/tutorials/activating-product-zoom-in-the-page-template).

### Use cases

- You upload a **1200×1200** image. On the product page, it appears as **600×600**, and when you hover the mouse over it, it zooms to **1000×1000** (default value of `Product - Zoom`).
- You only have **800×800** images. In this case, configure `Product - Zoom` to **800×800**. On the product page, the image appears at **600×600**, and zooms to **800×800**. The zoom is smaller because the size configured in `Product - Zoom` is smaller.

## Configuring thumbnails

Thumbnails (or _thumbs_) help pages load faster and make products easier to identify, since several can be displayed on screen at the same time.

To do this, images are resized and compressed based on the CMS configuration. If the file size (in KB) is too low, compression may compromise the thumbnail's quality.

For product thumbnails to be displayed with adequate quality in your **CMS Portal (Legacy)** store, configure the `Product - Thumb` type in **Store Settings > Storefront > Settings > File Types**. Learn more in [Configuring file types](/docs/tutorials/configuring-file-types).

The **Maximum size in KB** field of this type defines the compression threshold for thumbnails, which means that:

- If the value is too low, images are compressed excessively, and thumbnail quality may be compromised.
- Increasing the **Maximum size in KB** reduces compression and improves the thumbnails' visual quality. Adjust the value until the quality is satisfactory.