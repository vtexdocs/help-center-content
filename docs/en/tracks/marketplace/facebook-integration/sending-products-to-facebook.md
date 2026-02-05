---
title: 'Sending products to Facebook'
id: 41qzoa7TWIYTyIhABHdgzI
status: PUBLISHED
createdAt: 2021-02-08T19:45:07.202Z
updatedAt: 2025-09-04T15:36:46.974Z
publishedAt: 2025-09-04T15:36:46.974Z
firstPublishedAt: 2021-02-08T20:10:14.152Z
contentType: trackArticle
productTeam: Channels
slugEN: sending-products-to-facebook
locale: en
trackId: 7h8KvIC4DbRRc8VlyJ8PFc
trackSlugEN: facebook-integration
order: 5
---

Once your account authentication is complete, sending products to Facebook will become an automatic process. The following information will be submitted:

- Product display name
- Image
- Category
- Price
- Currency
- Description
- Brand
- Product condition
- Availability

The update is automatic and will be performed whenever changes are made to any of details. It's important to note that the value for “currency” is defined in the trade policy, and that “availability” refers only to whether there are products available or not, because there is no inventory control. For more information, see [How inventory availability works on the product page](/en/docs/tutorials/how-inventory-availability-works-on-the-product-page).

If you want to send product attributes to Facebook, you need to complete an additional step. Attributes are product [specifications](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP), i.e., properties that can be added either for products or SKUs.

The additional step is mapping product specifications. Mapping allows matching the attributes from your VTEX store with the standards adopted by Facebook.

> ⚠️ Attribute mapping via spreadsheet is optional, but if you choose to do it, you must follow all the steps in the article. Otherwise, it may lead to integration errors.

## Sending attributes to Facebook

If you want to send your product attributes to Facebook, please follow the steps below:

1. [Download the mapping spreadsheet template](#downloading-the-mapping-spreadsheet).
2. [Fill in the mapping spreadsheet](#filling-in-the-mapping-spreadsheet).
3. [Upload the mapping spreadsheet](#uploading-the-mapping-spreadsheet).

### Downloading the mapping spreadsheet

Spreadsheet mapping allows you to match the attributes of your products on the VTEX platform with the standards used by Facebook.

The first step in mapping is to download the file [Facebook Mapping Spreadsheet.xlsx](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/en/tracks/marketplace/facebook-integration/Planilha_de_Mapeamento_Facebook.xlsx).

### Completing the mapping spreadsheet

The second step is to complete the downloaded file. The spreadsheet consists of a single tab with five columns.

> ℹ️ The Facebook mapping spreadsheet is case-sensitive.

- **First column, _ID Category_:** must be complete with the identification number of the product category on the VTEX platform. You can find the ID of a category in the Admin, in _Products > Catalog > Categories_. The category ID is the number to the left of the category name.
- **Second column, _VTEX attribute name_:** must contain the name of the attribute on the VTEX platform.
> Example: if field related to the color of the products in your VTEX store is labeled _Clr_. Therefore, you must complete the column _VTEX attribute name_ with the word _Clr_.

- **Third column, _Facebook attribute name_:** must be populated with the corresponding term used by Facebook.
> Example: the match for the _Clr_ attribute on Facebook is _Color_.

  > ℹ️ For attribute names and reference values, check the [Universal Basic Attributes](https://developers.facebook.com/docs/commerce-platform/catalog/fields?locale=en_US#universal-basic-attributes) Facebook documentation. If there is no match for an attribute or value, populate the Facebook attribute name column with the same term used on VTEX.

 **Fourth column, _VTEX attribute value_:** should be completed with the values for your VTEX attributes.
> Example: if one of the values for the gender attribute in your VTEX store is *Women*, you should complete the VTEX attribute value column with the word *Women*.

- **Fifth column, _Facebook attribute value:_** should contain the terms used for attribute values on Facebook.
> Example: for the value _Women_, the corresponding term on Facebook is _female_.

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

Once this is done, the mapping of your product categories and attributes will be completed. The time this takes to be reflected on Facebook depends on the extent of your catalog.  

## Using custom labels

In addition to basic product information, you can send custom labels to Facebook Business Manager. This allows you to classify offers based on your own criteria, such as campaign promotions, seasonal events, margins, or target audience.

Custom labels are useful for:  

- Grouping products by specific campaigns (like Black Friday, Free shipping, etc.)  
- Creating reports based on product groups that have similar behavior.  

### Setup

You need to create custom labels on Facebook Business Manager. After creating them, follow the [Adding product specifications or fields](/en/docs/tutorials/adding-specifications-or-product-fields) tutorial to link them to a specific offer using **product specifications**.

Add the following value when creating the new product specification field:

| **Field** | **Value** |
|:---: | :---: |
| __Specification field name__ | `facebook-labels`|
|Field type | Radio |

After creating the specification, you need to link it to your offers by following the instructions below:  

1. In the VTEX Admin, go to **Catalog > Products and SKUs** or type **Products and SKUs** in the search bar at the top of the page.  
2. In the product row, click the vertical ellipsis icon and then `Edit product`.  
3. Go to the **Product** tab.  
4. Complete the `facebook-labels` field with the desired values separated by semicolons `;`.  
5. Click `Save`.  

> ⚠️ An offer can have a maximum of five linked labels. 

