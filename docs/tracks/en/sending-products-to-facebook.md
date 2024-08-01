---
title: 'Sending products to Facebook'
id: 41qzoa7TWIYTyIhABHdgzI
status: PUBLISHED
createdAt: 2021-02-08T19:45:07.202Z
updatedAt: 2024-01-22T15:03:37.861Z
publishedAt: 2024-01-22T15:03:37.861Z
firstPublishedAt: 2021-02-08T20:10:14.152Z
contentType: trackArticle
productTeam: Channels
slug: sending-products-to-facebook
locale: en
trackId: 7h8KvIC4DbRRc8VlyJ8PFc
trackSlugEN: facebook-integration
---

Once your account authentication is complete, sending products to Facebook will become an automatic process. The following data will be submitted:

- Product display name
- Image
- Category
- Price
- Currency
- Description
- Brand
- Product condition
- Availability

The update is automatic and will be performed whenever changes are made to any of the data. It is worth mentioning that the value for “currency” is defined in the trade policy, and that “availability” refers only to whether there are products available or not, because there is no inventory control. For more information, see [How inventory availability works on the product page](https://help.vtex.com/en/tutorial/como-funciona-a-disponibilidade-de-estoque-na-pagina-de-produto--gyVfuG5dTyUyGA02iiU0y).

If you want to send product attributes to Facebook, an additional step needs to be performed. Attributes are product [specifications](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP), i.e., properties that can be added either for products or SKUs.

The additional step is mapping product specifications. Mapping allows matching the attributes from your VTEX store with the standards adopted by Facebook.

<div class="alert alert-warning">
ttribute mapping via spreadsheet is optional, but if you choose to do it, it must be done completely. Otherwise, it may lead to integration errors.
</div>

## Sending attributes to Facebook

If you would like to send your product attributes to Facebook, please follow the steps below:

1. [Download the mapping spreadsheet template](#downloading-the-mapping-spreadsheet).
2. [Fill in the mapping spreadsheet](#filling-in-the-mapping-spreadsheet).
3. [Upload the mapping spreadsheet](#uploading-the-mapping-spreadsheet).

### Downloading the mapping spreadsheet

Spreadsheet mapping allows you to match the attributes of your products on the VTEX platform with the standards used by Facebook.

The first step in mapping is to download the file [Facebook Mapping Spreadsheet.xlsx](https://drive.google.com/uc?export=download&id=1XD8AO0VEzLXxmb8yjjkFQCNce1IfufkN).

### Filling in the mapping spreadsheet

The second step is to fill in the downloaded file. The spreadsheet consists of a single tab with five columns.

<div class="alert alert-info">
The Facebook mapping spreadsheet is case-sensitive.
</div>

- **First column, _ID Category_:** must be filled in with the identification number of the product category on the VTEX platform. You can find the ID of a category in the Admin, in _Products > Catalog > Categories_. The category ID is the number to the left of the category name.
- **Second column, _VTEX attribute name_:** must contain the name of the attribute on the VTEX platform.
> Example: the field related to the color of the products in your VTEX store is labeled _Cor_. Therefore, you must fill in the column _VTEX attribute name_ with the word _Cor_.

- **Third column, _Facebook attribute name_:** must be populated with the corresponding term used by Facebook.
> Example: the match for the _Cor_ attribute on Facebook is _Color_.

  <div class="alert alert-info">
For attribute names and reference values, refer to Facebook’s <a href="https://developers.facebook.com/docs/commerce-platform/catalog/fields?locale=en_US#universal-basic-attributes">Universal Basic Attributes</a> documentation. If there is no match for an attribute or value, populate the Facebook attribute name column with the same term used on VTEX.
</div>

 **Fourth column, _VTEX attribute value_:** should be filled in with the values for your attributes on VTEX.
> Example: let's say that one of the values for the gender attribute in your VTEX store is _Feminino_. Therefore, you should fill in the _VTEX attribute value_ column with the word _Feminino_.

- **Fifth column, _Facebook attribute value:_** should contain the terms used for attribute values on Facebook.
> Example: for the value _Feminino_, the corresponding term on Facebook is _female_.

Here is an example of a completed spreadsheet:

| **CategoryId** | **VTEX attribute name** | **Facebook attribute name** | **VTEX attribute value** | **Facebook attribute value** | 
| ---------- | ---------- | ---------- | ---------- | ---------- | 
| 23 | Colors | Color | Yellow | Yellow |
| 23 | Size | Size | Small | P |
| 23 | Size | Size | Large | G |
| 23 | Gender | Gender | Female | female |

### Uploading the mapping spreadsheet

The third and final step to complete the mapping is to upload the completed spreadsheet. To do this, follow the steps below:

1. Access the Admin.
2. In the Marketplace module, click Marketplace and Integrations.
4. Search for Facebook in the search bar.
5. Click `Edit`
6. Choose the `Category Mapping` option.
6. Click on `Choose a File`.
7. Select the completed mapping spreadsheet.
8. Click on `Upload File`.

Once this is done, the mapping of your product categories and attributes will be completed. How long this will take to be reflected on Facebook will depend on the extent of your catalog.
