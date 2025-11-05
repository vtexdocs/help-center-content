---
title: 'Importing and exporting product and SKU images using a spreadsheet (Beta)'
id: 6zBisMdxDYeBF49LPzvfqt
status: PUBLISHED
createdAt: 2025-09-26T15:59:03.761Z
updatedAt: 2025-10-13T22:40:44.722Z
publishedAt: 2025-10-13T22:40:44.722Z
firstPublishedAt: 2025-09-26T16:15:52.581Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: importing-and-exporting-product-and-sku-images-using-a-spreadsheet-beta
legacySlug: import-and-export-product-and-sku-images-via-spreadsheet-beta
locale: en
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ This feature is in beta, which means that we are working to improve it. If you have any questions, please contact our [Support](/en/support).

In VTEX Admin, you can manage the import and export of image information using a spreadsheet, as detailed in the following sections:

- [Importing product and SKU images using a spreadsheet](#importing-product-and-sku-images-using-a-spreadsheet)
- [Exporting product and SKU images using a spreadsheet](#exporting-product-and-sku-images-using-a-spreadsheet)
- [Product and SKU image spreadsheet fields](#product-and-sku-image-spreadsheet-fields)

## Importing product and SKU images using a spreadsheet

To import product and SKU images using a spreadsheet, follow these steps:

1. In the VTEX Admin, go to **Catalog > Product and SKUs**, or type [Product and SKUs](/en/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) in the search bar at the top of the page.
2. At the top of the page, click `Import`.
3. Click `Images`.
4. In the window that opens, click **Download template** to get the file.
5. Complete the spreadsheet details as described in the section [Product and SKU image spreadsheet fields](#product-and-sku-image-spreadsheet-fields).
6. Add the spreadsheet with an `.xls` or `.xlsx` extension. You can drag and drop the file onto the designated area, or click the window to select the file locally.
7. Click `Import`.

While the import is in progress, a message will be displayed indicating that the file is being processed. Leaving the page won't interrupt the operation. After the operation is complete, you will receive a confirmation email.

> ⚠️ Products with images successfully imported are automatically queued for [indexing](/en/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256). If this doesn't happen, see the article [Why is the product not visible on the website?](/en/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

## Exporting product and SKU images using a spreadsheet

To export a `.xlsx` file with the images from your catalog, follow these steps:

> ℹ️ The exported information corresponds to the fields detailed in the section [Product and SKU image spreadsheet fields](#product-and-sku-image-spreadsheet-fields).

1. In the VTEX Admin, go to **Catalog > Product and SKUs**, or type [Product and SKUs](/en/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) in the search bar at the top of the page.
2. (Optional) If you want to export the images of certain products and SKUs, [search](/en/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By#searching-for-a-product) or a [filter](/en/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By#filtering-products) the desired items. This step isn't required when exporting the images of all the items in your catalog.
3. At the top of the page, click `Export`.
4. Click `Images`.

While the export is in progress, a message will be displayed indicating that the file is being processed. Leaving the page won't interrupt the operation. You can [track the export progress in the window](/en/tutorial/importing-and-exporting-products-and-skus-using-a-spreadsheet-beta--5udKxWP1ZeBD7QB7Fy2BNl#tracking-export-process) displayed on the page.

After the export of product and SKU images is completed, you will receive an email with a link to download the file. The download link is valid for 24 hours. After that, the link expires. You can also download the file from the window that opens on the page.

## Product and SKU image spreadsheet fields

The following table describes and includes an example of each field in the import spreadsheet for images in your catalog. Required fields are marked with an asterisk (*).

> ℹ️ To import a new image, the only required fields are **SKU ID** and **Image import URL**. Learn more in [Best practices for using images in the Catalog](/en/tutorial/boas-praticas-para-o-uso-de-imagens-no-catalogo--738K2yfq5U86kUI2k4AQIk).

| Field | Description | Example |
| :--- | :--- | :--- |
| Product ID | Unique numeric code identifying the product. | 310117603 |
| Product name | Product name shown to customers during the browsing experience. | Cotton t-shirt |
| SKU ID* | Unique numeric code that identifies the SKU. | 310119261 |
| SKU name | SKU name that identifies the product variation. | M |
| SKU reference code | Unique SKU reference code, for internal store use only. Use a unique combination of letters and/or numbers. | summer26shirt |
| Image ID | Numeric code that identifies the SKU image. To import a new image, leave the field blank; keep the value to update an existing image. | 167002 |
| Image name | Image name, for internal store use only. This field doesn't allow special characters, diacritical marks, or spaces. | side_blue_tshirt |
| Image position | Number indicating the display position of the image on the website, where `0` corresponds to the first position, `1` to the second, and so on. | 0 |
| Image label | Image label name, for internal merchant use to reference values common to images. | Side view |
| Image text | Text that will be associated with the image, for internal store use. Don't use special characters or diacritical marks, and don't repeat values from the **Image name** and **Image label** fields. | side summer26 tshirt |
| Image path | Name that is part of the image URL hosted on the VTEX platform. It displays after the last slash `/`, including the file extension. If the field isn't completed, leave it blank. | blue_tshirt_round_collar.jpg |
| Image import URL | Image that will be associated with the SKU. To import a new image, this field must be [completed with the URL](/en/tutorial/como-definir-a-url-de-um-produto--frequentlyAskedQuestions_368) of the hosted file. It must start with the HTTP protocol identifier (`http://`) and end with one of the following extensions:<ul><li>jpg</li><li>png</li><li>gif</li><li>ico</li><li>svg</li><li>webp</li></ul>To update an existing image, leave the field blank. Otherwise, the image will be created again, which duplicates it. | `http://files.com/ids/image/blue_tshirt_round_collar.jpg` |

## Learn more

* [Importing and exporting products and SKUs using a spreadsheet (Beta)](/en/tutorial/importing-and-exporting-products-and-skus-using-a-spreadsheet-beta--5udKxWP1ZeBD7QB7Fy2BNl)
* [Importing and exporting product specifications using a spreadsheet (Beta)](/en/tutorial/importing-and-exporting-product-specifications-using-a-spreadsheet-beta--jQcmbocCb7kjHOr1JSWIL)
* [Importing and exporting SKU specifications using a spreadsheet (Beta)](/en/tutorial/importing-and-exporting-sku-specifications-using-a-spreadsheet-beta--5EAioeC33wHpIxKHaGQzbV)
