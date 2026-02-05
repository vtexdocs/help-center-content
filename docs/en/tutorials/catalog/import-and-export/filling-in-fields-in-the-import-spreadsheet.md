---
title: 'Filling in fields in the product and SKU import spreadsheet'
id: 4nYhx63Q5yokQWaMguaIgI
status: PUBLISHED
createdAt: 2018-02-06T20:09:19.608Z
updatedAt: 2025-05-26T21:57:47.284Z
publishedAt: 2025-05-26T21:57:47.284Z
firstPublishedAt: 2018-02-06T20:23:29.492Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: filling-in-fields-in-the-import-spreadsheet
legacySlug: filling-in-fields-in-the-import-spreadsheet
locale: en
subcategoryId: 2u48reCb68K48EAcm86ccM
---

On the VTEX platform, you can [import products and SKUs in bulk using a spreadsheet](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ#planilha), by following the steps below:

1. In the VTEX Admin, go to **Catalog > Import and Export**, or type **Import and Export** in the search bar at the top of the page.
2. Click on `Export/Import`.
3. Click on the `Import` tab. You can download the spreadsheet to check or change your products.
4. Fill in the spreadsheet fields.
5. Go back to the VTEX Admin and upload the file with the `.xls` extension.
6. Click `Import`.

Depending on the quantity of products, their processing can be time consuming. After it ends, you will receive the import confirmation in your email.

To better understand the meaning of each field in the spreadsheet, see the complete description of the Product and SKU related fields in Excel.

> ❗ When filling in **CaptionLink**, **DepartmentName**, **CategoryName** and **Brand**, avoid using the following reserved words, as this can hinder your store's performance and interfere with the functioning of VTEX Admin pages. See the list of reserved words below. <ul> <li>`a`</li> <li>`meta`</li> <li>`api`</li> <li>`admin`</li> </ul>

**SkuId:** the unique identifier number of the SKU. If this field is already filled in, you cannot change it. To add a new SKU, leave the column empty.

**SkuName:** the name of the SKU, i.e., product variation. Required field.

**ActivateSkuIfPossible:** field that activates the SKU if it meets the following requirements: has an associated image and, if it is a kit SKU, has at least one active associated component. Enter _YES_ to enable it automatically after checking the requirements. Required field.

**SkuIsActive:** this field is read-only and can be used for searches.

**SkuEan:** the unique identification code (barcode) of the SKU, composed of up to 13 numeric characters. If the _SKUReferenceCode_ field is filled in, this field is no longer required.

**Height:** the SKU’s height calculated for shipping. Required field.

**ActualHeight:** the actual height of the SKU.

**Width:** the SKU’s width calculated for shipping. Required field.

**ActualWidth:** the actual width of the SKU.

**Length:** the SKU’s length calculated for shipping. Required field.

**ActualLength:** the actual length of the SKU.

**Weight:** the SKU’s weight calculated for shipping. Required field.

**ActualWeight:** the actual weight of the SKU.

**MeasurementUnit:** field used only when it is necessary to convert the unit of measure for the sale. Otherwise, use _un_. Required field.

**UnitMultiplier:** numeric unit that multiplies the number of the selected product in the shopping cart. If the multiplier is 5, the product will be added in multiples of 5, such as 5, 10, 15, 20, etc. Required field.

**SKUReferenceCode:** the unique reference code of the SKU, created to help in the organization. You cannot edit it in the spreadsheet. If the _SkuEan_ field is filled in, this field is no longer required.

**RewardValue:** credit that the customer receives when completing a purchase of one unit of a given SKU. This field must be filled in with decimals of the store's default currency. 

**EstimatedDateArrival:** in case of pre-sale, enter the estimated date of the product arrival in the format _dd/mm/yyyy_.

**ManufacturerCode:** code provided by the manufacturer to identify the product.

**ProductId:** the unique identifier number of the product. If this field is already filled in, you cannot change it. To add a new product, leave the column empty.

**ProductName:** name of the product. Use simple words, write in the language of your end customer and avoid complex sentences. This field is important for SEO and must not exceed the 150-character limit. Required field.

**ProductShortDescription:** a short description of the product. This information is rendered by the `$product.DescriptionShort` control and can be displayed either on the product page or the shelf.

**ProductIsActive:** determines whether the product is activated or deactivated in your store. This field is read-only and must be left empty.

**ProductReferenceCodeId:** the unique reference code of the product, created to help in the organization. Each product must have a different reference code.

**ShowOnSite:** this function displays or hides products on the storefront. Enter _YES_ for the product to be displayed or _NO_ to hide it. Required field.

**CaptionLink:** field used to create the product URL. It is recommended not to use accent marks and to separate words by a hyphen. Each product must contain a different _CaptionLink_. Required field.

**ProductDescription:** a description with the main information related to the product. It’s a clear and simple product description for customers.

**ProductLaunchDate:** field used to schedule the product’s activation date in the format _dd/mm/yyyy_.

**Keywords:** synonyms for terms related to the product’s name. This field is important to make your searches more comprehensive. Use commas to separate terms. In addition, this field accepts special characters.

**SiteTitle:** browser tab text that corresponds to the title of the product page. This field is important for search engines and SEO. If you do not fill in this field, the system will replicate the _ProductName_ to complete the product registration.

**MetaTagDescription:** brief description of the product. This field should not exceed 150 characters so that search engines can show the full description on results pages. If you do not fill in this field, the system will replicate the _ProductName_ to complete the product registration.

**SupplierId:** deprecated field. This field is not used by the system anymore. We recommend leaving it empty.

**ShowOutOfStock:** field for displaying a product even if it is out of stock, which enables the section _Notify me_, where the customer can enter their email address to be notified when the product is back in stock. By entering _YES_, the out-of-stock product will be displayed on the website with the _Notify me_ option. By entering _NO_, the product will not be displayed on the website if it is out of stock. Required field.

**Kit:** field that indicates whether the SKU is part of a [kit](/en/docs/tutorials/what-is-a-bundle). This is a read-only field. If it is a new SKU, leave the field empty.

**DepartmentId:** the unique identifier number of the product’s top-level category. This is a read-only field. If it is a new product, leave the field empty.

**DepartmentName:** the name related to the product’s top-level category.

**CategoryId:** the unique identifier number of the product’s lowest-level category. You can find this information in the _Categories_ module in the Admin or through the [Get Category Tree](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-category#catalog-api-get-category-tree) endpoint. Required field.

**CategoryName:** name related to the product’s lowest-level category. Once filled in, this field is not editable.

**BrandId:** the unique identifier number of the brand. You can find this information in the _Id_ section of the _Brand_module in the Admin or through the [Get Brand List](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-brand#catalog-api-get-brand-list) endpoint. Required field.

**Brand:** the product’s brand name. Once filled in, this field is not editable.

**CubicWeight:** deprecated field. This field is not used by the system anymore. We recommend leaving it empty.

**CommercialCondition:** the unique identifier number of the [commercial condition](/en/docs/tutorials/registering-a-commercial-condition). It defines SKU-specific promotions and installment rules. 

**Stores:** the unique identifier number of the [trade policy](/en/docs/tutorials/creating-a-trade-policy). You can find this information in the _Id_ section of the _Trade policies_ module in the Admin.

**Accessories:** field that displays a complementary product to another product. To add a [accessory](/en/docs/tutorials/setting-up-a-similar-product-suggestions-accessories-and-generics) SKU, include the SKU ID for reference.

**Similar:** field that displays SKUs similar to another SKU to the customer at checkout. To add a [similar](/en/docs/tutorials/setting-up-a-similar-product-suggestions-accessories-and-generics) SKU, include the SKU ID for reference.

**Suggestion:** field that displays the SKUs that should be suggested based on a given SKU. To add a [suggestion](/en/docs/tutorials/setting-up-a-similar-product-suggestions-accessories-and-generics), include the SKU ID for reference.

**ShowTogether:** field that displays the SKUs that will be suggested for buying together with a given SKU. To add a [show together](/en/docs/tutorials/setting-up-a-similar-product-suggestions-accessories-and-generics) SKU, include the SKU ID for reference.

**Attachment:** field that shows an [attachment](/en/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm#) to the buyer of a [service](/en/tutorial/o-que-e-um-servico--46Ha8CEEQoC6Y40i6akG0y#) or item.

