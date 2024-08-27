---
title: 'Sending SKU attributes to Amazon'
id: 3KTNjHRtVmWWe02my8suEo
status: DRAFT
createdAt: 2018-06-21T17:09:05.337Z
updatedAt: 2020-05-25T18:47:37.861Z
publishedAt: 
firstPublishedAt: 2018-06-21T19:25:22.139Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: sending-sku-attributes-to-amazon
locale: en
legacySlug: sending-sku-attributes-to-amazon
subcategory: 
---

Having done the initial settings for the [Amazon integration](/en/tutorial/integrating-with-amazon), now we will send the SKU attribute data to the marketplace. This will be done by __uploading the mapping spreadsheet__.

The mapping will only be done once for each category. With that, even once you have done the mapping, when new products are created, they will be directly integrated. A __from/to__ of the attributes registered in VTEX will be made with the attributes accepted by Amazon.

1. Create an __upload spreadsheet__ in the format ".xlsx" and fill in the columns title as shown below.![Modelo Atributos Amazon](https://images.ctfassets.net/alneenqid6w5/1oqAPItLPaMc8gYICU6oWa/7d54955d0c179a2fbcb036e62ede9dc3/Modelo_Atributos_Amazon.png)

2. Fill in the fields of the mapping spreadsheet as follows:


>❗ Note: If **none** of the category attributes is required by Amazon, then **no mapping is required**. Just reindex your products so they are shipped directly through the integration.

1. __ID category:__ it's the category ID in VTEX. You can find it next to the name of each category as you expand the tree.
2. __VariationTheme:__ it's the way the SKU varies in the marketplace. You must fill with Variations Themes that fit the category of your products and respective PTDs.
>Ex: If the product varies by size and color, use "SizeColor".
>Ex2: if the product only varies by color, use "Color".
3. __Type:__ it's the type of specification that will be used and must be filled in with one of the values below:
  - `Variation:` type intended to differentiate SKUs (as well as [SKU fields in VTEX](/en/tutorial/creating-sku-fields)). If the `VariationTheme` column has been filled, then the `Type` column will always be filled as Variation.
  - `Information:` type intended to complement information about the products (as well as [product fields in VTEX](/en/tutorial/creating-a-product-field)). If the `VariationTheme` column has been left blank, then the `Type` column will always be filled in as Information.
- __VtexEspc:__ it's the name of the [SKU field](/en/tutorial/creating-sku-fields) used in your store in VTEX.
>Ex: fields like "Size", "Color", "Material"...
- __AmzEspec:__ it's the name of the specification accepted by Amazon that corresponds to the SKU field you used in the `VtexEspec` field. 
>Ex: If you used "Size" in the `VtexEspc` column, then the corresponding name in Amazon would be "Size".
- __VtexValue:__ name of the value used in the SKU field in VTEX.
>Ex: For a "Color" specification, the values in this field would be the very colors used in the store, such as "Red", "Black", "White"...
- __AmazValue:__ You must fill in this column with values accepted by Amazon corresponding to the values used in the `VtexValue` field. 
>Ex: If you filled `AmzEspec` with ColorMap and `VtexValue` with 'Red', you will see that the value accepted by Amazon is "Red".

Sample spreadsheet using the Clothing & Accessories category:

![Amazon Mapeamento ](https://images.ctfassets.net/alneenqid6w5/5p6RrFb0T6my86cCOmW0c8/a5e93f7732929c9d9ea4cc0dd855b9a1/Amazon_Mapeamento.png)

>❗ Note that these values must conform to the ones from Amazon. Check which terms are allowed and make the From/To between what is registered in your SKU field in VTEX and the values accepted by Amazon.

After filling out the spreadsheet, access __Integrations__ from the Admin menu:

1. Click __Settings__.
2. Search for the Amazon box and click on the __gear button__.
3. Then click __Upload Mapping__.
4. Choose the spreadsheet with the data and click __Send File__.
