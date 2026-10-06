---
title: 'Configuring file types'
createdAt: 2026-08-12T15:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: configuring-file-types
legacySlug: configuring-file-types
locale: en
---

In the VTEX Admin, you can define the default dimensions and maximum size (in KB) of files used in your store, primarily catalog product images. These settings affect image upload validation in the VTEX Admin and, in **CMS Portal (Legacy)** stores, also storefront features like zoom and thumbnails.

> ⚠️ The **Maximum size in KB** validation on product/SKU image uploads in the catalog applies to [CMS Portal (Legacy)](https://help.vtex.com/docs/tracks/legacy-cms-portal) and [Store Framework](https://help.vtex.com/docs/tracks/frontend-implementation#store-framework) stores. Learn more in [Configuring zoom and thumbnails in CMS Portal (Legacy) stores](/docs/tutorials/configuring-zoom-and-thumbnails-in-cms-portal-legacy-stores).

![List of file types in the Admin](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/configurações-da-loja---storefront/configurando-tipos-de-arquivos_1.png)

> ℹ️ In the list, the **Sizes** column displays the summary in the format `{largura}px x {altura}px | {tamanho} KB`.

## Instructions

### Configuring file types

To configure file types for your store, follow these steps:

1. In the VTEX Admin, go to **Store Settings > Storefront > Settings**.
2. Click the **File Types** tab.
3. In the list, find the desired type and click `Edit`.
4. Complete the fields described in [File type form fields](#file-type-form-fields).
5. Click `Save`.

> ⚠️ Don't change a type's dimensions if images have already been added to it. If you need to change the dimensions, delete and re-upload the images in the new type.

#### File type fields

When you click `Edit`, the form shows the fields below:

| Field                    | Description                                                                                                                                                                                   |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**                 | Identifies the file type in the list (for example, `Product - Zoom` or `Product - Thumb`).                                                                 |
| **Width x Height**       | Shows the default dimensions in pixels (`width` x `height`) associated with the type.                                                                      |
| **Maximum size in KB**   | Sets the maximum file size in kilobytes (KB). It's the main validation criterion for product image uploads in the catalog.                 |
| **Type**                 | Defines whether the type is image (uses width/height and can be resized/compressed) or file (generic file, with no pixel restrictions). |
| **Resize required flag** | When checked, it requires resizing the image to the configured width and height. When unchecked, the dimensions aren't enforced during upload.                |

### Fixing blocked uploads

Product and SKU image uploads in the catalog follow the **Maximum size in KB** configured for the corresponding file type.

If the value is **0 KB** or too low, the Admin may reject the upload even when:

- The file opens normally on the computer.
- The same image uploads without errors in another account or environment.
- The file follows the [general best practices for images in the catalog](/docs/tutorials/best-practices-for-using-images-in-the-catalog).

To fix blocked uploads, follow these steps:

1. In the VTEX Admin, go to **Store settings > Storefront > Settings > File Types**.
2. Click `Edit` on the affected product image type (for example, `Product - Main` or `Product - Giga`).
3. Increase the **Maximum size in KB** value to a threshold compatible with your images (common values on the platform include thresholds in the thousands of KB, such as `3000 KB`).
4. Save the configuration and try uploading again in the SKU details.

> ⚠️ Dimensions configured as `0px x 0px` usually indicate no width/height restriction for that type. However, a maximum size of **0 KB** blocks all uploads.
