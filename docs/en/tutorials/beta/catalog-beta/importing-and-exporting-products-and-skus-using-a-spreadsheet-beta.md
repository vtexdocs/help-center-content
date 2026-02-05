---
title: 'Importing and exporting products and SKUs using a spreadsheet (Beta)'
id: 5udKxWP1ZeBD7QB7Fy2BNl
status: PUBLISHED
createdAt: 2025-09-05T16:54:23.995Z
updatedAt: 2026-01-09T15:30:32.980Z
publishedAt: 2025-11-05T15:30:32.980Z
firstPublishedAt: 2025-09-05T18:41:30.755Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: importing-and-exporting-products-and-skus-using-a-spreadsheet-beta
legacySlug: import-and-export-of-products-and-skus-via-spreadsheet-beta
locale: en
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ This feature is in beta, which means that we are working to improve it. If you have any questions, please contact our [Support](https://help.vtex.com/en/support).

In the VTEX Admin, you can manage SKU specification import and export using a spreadsheet, as described in the sections below:

- [Import products and SKUs using a spreadsheet](#importing-products-and-skus-using-a-spreadsheet)
- [Export products and SKUs using a spreadsheet](#exporting-products-and-skus-using-a-spreadsheet)
- [Track export process](#tracking-export-process)
- [Product specification spreadsheet fields](#product-specification-spreadsheet-fields)

> ℹ️ To learn how to manage your products and SKUs manually in the VTEX Admin, see the following articles: [Adding or editing products](/en/tutorial/adding-or-editing-products--29IkdEu6GofCFlltsZh2H8) and [Adding or editing SKUs](/en/tutorial/adding-or-editing-skus--4ryZ6J45kwn3jDiQBxGiiN). For information about [backend integrations with ERP](/en/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu), see the [Back office integration guide (ERP/PIM/WMS)](https://developers.vtex.com/docs/guides/erp-integration-guide).

## Importing products and SKUs using a spreadsheet

To import products and SKUs using a spreadsheet, follow these steps:

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type [Products and SKUs](/en/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) in the search bar at the top of the page.
2. At the top of the page, click `Import`.
3. Click `Products and SKUs`.
4. In the window that opens, click **Download the import spreadsheet template here** to get the file.
5. Complete the spreadsheet details as described in the section [Product specification spreadsheet fields](#product-specification-spreadsheet-fields).
6. Add a spreadsheet with the `.xls` or `.xlsx` extension. You can drag and drop the file into the upload area, or click the window and select the file locally.
7. Click `Import`.

  > ❗ Processing time depends on the amount of data being processed. Leaving the page won't interrupt the operation.

While the operation is in progress, a message appears indicating that the file is being processed. After the import is complete, the page will display "Products and SKUs imported successfully" and you'll receive a confirmation email.

## Exporting products and SKUs using a spreadsheet

To export a `.xlsx` file with product and SKU information, follow these steps:

> ℹ️ The exported information corresponds to the fields detailed in the section [Product specification spreadsheet fields](#product-specification-spreadsheet-fields).

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type [Products and SKUs](/en/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) in the search bar at the top of the page.
2. (Optional) If you want to export a subset of products and SKUs, [search](/en/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By#searching-for-a-product) or a [filter](/en/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By#filtering-products) the desired items. This step is not required to export all products and/or SKUs.
3. At the top of the page, click `Export`.

  > ⚠️ The export limit is 100,000 products.

4. Click `Products and SKUs`.
5. In the **Export** modal, select the checkboxes for **Product fields** and/or **SKU fields** as desired. Required fields can't be unchecked.

  > ⚠️ Only spreadsheets exported with all fields can be imported later.

6. Click `Export`.

While the export is in progress, a message will appear indicating that the file is being processed. Leaving the page won't interrupt the operation. You can track progress in the export window on the page, as shown in the next section.

Once the export is complete, you'll receive an email with a link to download the file. The download link is valid for 24 hours. After that, the link expires. You can also download the file from the window that opens on the page.

## Tracking export process

While the export is being processed, the [Products and SKUs](/en/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) page will display a window at the bottom, as in the following image:

![export-en-loading](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/catalog-beta/importing-and-exporting-products-and-skus-using-a-spreadsheet-beta_1.png)

* **Exports 1:** Shows the number of exports in progress; in this example, one.
* **Loading icon:** Indicates that the export operation is in progress.
* **Products and SKUs:** Identifies the export type. Other available operations include exporting [product specifications](/en/tutorial/importing-and-exporting-product-specifications-using-a-spreadsheet-beta--jQcmbocCb7kjHOr1JSWIL), [SKU specifications](/en/tutorial/importing-and-exporting-sku-specifications-using-a-spreadsheet-beta--5EAioeC33wHpIxKHaGQzbV), and [product and SKU images](/en/tutorial/importing-and-exporting-product-and-sku-images-using-a-spreadsheet-beta--6zBisMdxDYeBF49LPzvfqt).
* **Date and time:** Displays the export start time in the format `DD-MM-YYYY - hh:mm`.
* **Number in the blue tag:** Shows the number of items being exported.
* **(Optional) Down arrow icon** <i class="fas fa-angle-down" aria-hidden="true"></i>: Displays when more than one export is in progress. Click to minimize; click again to expand.
* **Close icon** <i class="fas fa-times" aria-hidden="true"></i>: Closes the window when clicked, but the export continues.
* **Cancel icon** <i class="far fa-times-circle" aria-hidden="true"></i>: Cancels the export when clicked.

Once the operation is complete, the window will display the following changes:

![export-en-done](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/catalog-beta/importing-and-exporting-products-and-skus-using-a-spreadsheet-beta_2.png)

* **Green icon:** Indicates the export is complete.
* **Close icon** <i class="fas fa-times" aria-hidden="true"></i>: Closes the window when clicked, and you won't be able to expand it again.
* **Download icon** <i class="fas fa-download" aria-hidden="true"></i>: Downloads the `.xlsx` file to your device.

## Product specification spreadsheet fields

The following table describes and includes an example of each field in the products and SKU import spreadsheet. Required fields are marked with an asterisk (*).

| Field | Description | Example |
| :--- | :--- | :--- |
| Product ID | Product identification number. If this field already has a value, you can't change it. To add a new product, leave the field empty. | 310117603 |
| Product Name* | Product name shown to customers during navigation (up to 150 characters). For [SEO](/en/tutorial/melhorando-o-seo-das-paginas-de-lista-de-produtos--UrQtlKAMuSaLBP5wG9ftG) purposes, we recommend:<ul><li>✅ Use simple words</li><li>❌ Avoid using other languages</li><li>❌ Avoid complex spelling</li></ul> | Corebiz t-shirt |
| Active product | Informs whether the [product status](/en/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#filtrar-por-status) will be active or inactive. This field is read-only and must be left empty. | (Leave the field empty) |
| Description | Text with general product information. This content is displayed to customers in the storefront, so we recommend creating a simple and clear summary. | The model has a round collar and short sleeves. |
| Additional description | Additional product content, such as summaries. We recommend not exceeding 150 characters so that search engines show the full text on results pages. | 70% recycled material |
| Brand ID* | Numeric code that identifies the product [brand](/en/tutorial/o-que-e-uma-marca--QU07yhHoaWcEYseEucOQW). This information can be found in VTEX Admin, under **Catalog > Brands**, or by using the [Get brand list](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/brand/list) endpoint. | 2000003 |
| Brand | Product [brand](/en/tutorial/o-que-e-uma-marca--QU07yhHoaWcEYseEucOQW) name. Once this field has a value, it can't be edited. | AOC |
| Department ID | Numeric code that identifies the highest-level product category. This is a read-only field. If it's a new product, leave the field empty. | 1000014 |
| Department | Name of the product's highest-level category. | Clothes |
| Category ID* | Unique identifier number for the product’s lowest-level category. This information can be found in VTEX Admin, under **Catalog > Categories**, or by using the [Get category tree](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pub/category/tree/-categoryLevels-) endpoint. | 1000014 |
| Category | Name of the product's lowest-level category. You can move the product from one category to another. | Tops |
| Trade policies | Unique identifier number for the [trade policy](/en/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE). This information can be found in the VTEX Admin, under **Store settings > Trade policies**. For multiple trade policies, separate the numbers with a comma, without using spaces. | 1,2,7 |
| Global category ID | Identifier code for the product’s [global category](/en/tutorial/configurando-a-categoria-global--tutorials_188), which is the taxonomy created by Google for the [Merchant Center](https://support.google.com/merchants/answer/6324436?hl=en-US), predefined as a unique tree in the VTEX platform. This field is important for [SEO](/en/tutorial/melhorando-o-seo-das-paginas-de-lista-de-produtos--UrQtlKAMuSaLBP5wG9ftG) purposes. | 166 |
| Global categories | [Global category](/en/tutorial/configurando-a-categoria-global--tutorials_188) name. | Apparel & Accessories |
| Page title | Name that will be displayed both on the product details page (PDP) and in the browser tab. This field is crucial for SEO. The limit is 150 characters. | Corebiz blue round neck t-shirt |
| Meta description | Brief product description, preferably under 160 characters. This allows search engines to display the description correctly on results pages. | Corebiz blue t-shirt with round neck in polyester and lycra made with 70% recycled material |
| Show on site* | If you want the product to be visible in the product listing, enter `yes`. If you prefer to hide it, enter `no`. | yes |
| Show when out of stock* | If you want out-of-stock products to be visible in the listing, enter `yes`. This allows customers to use the [Notify me](/en/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e#) feature, which allows them to enter their email and receive a notification when the product is available. If you want the out-of-stock product to become hidden in the listing, enter `no`. | no |
| Release date | Date and time when the product will be available for sale. The value of this field helps sort site search results, influences the creation of [automatic collections](/en/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye), and determines the product [indexing](/en/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) date. The accepted format is `YYYY-MM-DD`. | 2025-11-25 |
| Substitute words | Product name synonyms that allow more comprehensive searches. The limit is 8,000 characters, including special characters. To add several words, separate them with commas, without using spaces. | shirt,blouse |
| Product reference code | Unique product reference code, for internal store use only. To complete this field, use a combination of letters and/or numbers. | 68ce4_blue |
| Tax code | Numerical sequence that identifies the product. | 84509010 |
| SKU ID | Unique numerical code that identifies the SKU. If this field already has a value, you can't change it. To add a new SKU, leave the field empty. | 310119261 |
| SKU name* | Name which identifies the product variation. | M |
| Activate SKU if possible* | If you want the SKU to be activated automatically after checking the [availability requirements](/en/faq/why-is-the-product-not-visible-on-the-website), enter `yes`. If you don't want it to be activated, enter `no`. | yes |
| Active SKU | This field defines whether the SKU is active (`yes`) or inactive (`no`). This field can't be edited; it's for reference only. | no |
| Bundle | This field defines if the SKU is a [bundle](/en/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28). Converting a SKU into a bundle can't be undone. If you're creating a new SKU, leave the field empty. | |
| SKU reference code | Unique SKU reference code, created to facilitate catalog management. Once this code is created, it can't be edited through the spreadsheet.This field is required unless the **EAN/UPC** field has a value. | |
| EAN/UPC | EAN (European Article Number) and UPC (Universal Product Code) are international identification codes corresponding to an item's barcode. Each SKU can be associated with only one of these codes, and they can be differentiated by the number of alphanumeric characters: 13 for EAN and 12 for UPC.This field is required unless the **SKU reference code** field has a value. | 8456971345604 |
| Manufacturer code | Code provided by the manufacturer to identify the SKU. If a SKU has a specific code, this field must be completed. | 7154-blue |
| Package weight* | Absolute value of the package weight. | 0.8 |
| Package width* | Absolute value of the package width. | 12 |
| Package height* | Absolute value of the package height. | 5 |
| Package length* | Absolute value of the package length. | 25 |
| Actual weight | Absolute product weight value, excluding packaging. | 0.6 |
| Actual width | Absolute product width value, excluding packaging. | 0.1 |
| Actual height | Absolute product height value, excluding packaging. | 1.2 |
| Actual length | Absolute product length value, excluding packaging. | 0.9 |
| Cubic weight | The system no longer uses this field. We recommend leaving it empty. | (Deprecated field, leave it empty) |
| Unit of measure* | Identifies the unit of measure used to count items in stock. Generally, it should be completed as `un`, referring to 'each'. Use a different value only if you need to convert the unit of measure for sales purposes. Possible values are:<ul><li>un: unit</li><li>kg: kilogram</li><li>g: Gram</li><li>mg: Milligram</li><li>m: Meter</li><li>m²: Square meter</li><li>m³: Cubic centimeter millimeter</li><li>cm: Centimeter</li><li>cm²: Square centimeter</li><li>cm³: Cubic meter</li><li>mm: milímetro</li><li>mm²: milímetro quadrado</li><li>mm³: Cubic millimeter</li><li>oz: Ounce</li><li>lb: Pound</li><li>ft: Foot</li><li>ft²: Square foot</li><li>ft³: Cubic foot</li><li>in: Inch</li><li>in²: Square inch</li><li>in³: Cubic inch</li></ul> | un |
| Unit multiplier* | Numeric value by which the SKU will be multiplied to determine its quantity in the cart. For example, a multiplier of 5 means that each SKU represents 5 units in the cart, allowing purchases only in multiples of 5, such as 10 or 15 units. Fractional values can be separated by either a period or a comma. For example, 0.5 or 0,5 for half a kilogram. | 1 |
| Commercial condition | Unique numeric identifier for the [commercial condition](/en/tutorial/como-cadastrar-condicao-comercial--tutorials_445), which defines promotions or [payment conditions](/en/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) that are valid for the SKU. | Default |
| Loyalty amount | Credit the customer receives when purchasing 1 unit of a given SKU. For example, if this field is set to $1.00, the customer who buys the SKU will receive a $1.00 store credit for future purchases. This field must be completed with decimals of the store's default currency. | 49.90 |
| Presale date | Presale date for the SKU, indicating when the item is expected to arrive in stores and be available for sale. To configure this setting, you need to consider both the item release date and the [estimated shipping](/en/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) to customers. The accepted format is `YYYY-MM-DD`. | 2025-10-30 |
| Attachments | [Attachment](/en/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm#) name that customers can select as customization for the SKU. | Custom name |
| Accessories | Complementary items suggested for the main product. To add an [accessory](/en/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280) item, include its SKU ID. If you want to include multiple SKUs, separate them with commas, without using spaces. | 320221270 |
| Suggestions | Product recommendations. To add a [suggested](/en/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280) item, include its SKU ID. If you want to include multiple SKUs, separate them with commas, without using spaces. | 320221279,320221280 |
| Similar products | Alternatives to the selected item or products with similar characteristics. To add a [similar](/en/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280) item, include its SKU ID. If you want to include multiple SKUs, separate them with commas, without using spaces. | 320221284 |
| Show together | Suggestions for buying together. To add an item to [show together](/en/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280), include its SKU ID for reference. If you want to include multiple SKUs, separate them with commas, without using spaces. | 320221293,320221294 |

## Learn more

* [Importing and exporting product specifications using a spreadsheet (Beta)](/en/tutorial/importing-and-exporting-product-specifications-using-a-spreadsheet-beta--jQcmbocCb7kjHOr1JSWIL)
* [Importing and exporting SKU specifications using a spreadsheet (Beta)](/en/tutorial/importing-and-exporting-sku-specifications-using-a-spreadsheet-beta--5EAioeC33wHpIxKHaGQzbV)
* [Importing and exporting product and SKU images using a spreadsheet (Beta)](/en/tutorial/importing-and-exporting-product-and-sku-images-using-a-spreadsheet-beta--6zBisMdxDYeBF49LPzvfqt)

