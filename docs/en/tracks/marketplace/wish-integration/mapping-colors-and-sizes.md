---
title: 'Mapping colors and sizes'
id: HvbHUmSDbHe1io6XqvHS3
status: CHANGED
createdAt: 2019-11-18T13:40:10.167Z
updatedAt: 2020-11-27T19:39:37.276Z
publishedAt: 2020-03-19T22:03:12.923Z
firstPublishedAt: 2019-11-19T17:30:16.718Z
contentType: trackArticle
productTeam: Channels
slugEN: mapping-colors-and-sizes
locale: en
trackId: 50hbG4bzhSIhjz1lzqI1g4
trackSlugEN: wish-integration
order: 6
---

After going through the initial Wish integration configurations, we will now map SKU specifications. It will thus become possible to populate Wish with products that have variations (ex.: black shirt, sizes S, M, L).

This information is sent when uploading the mapping spreadsheet, which has a from/to. This mapping will be performed once for each category. This means that once the mapping has been performed once, new products that are created will be directly integrated in the correct category, together with their corresponding variations and attributes.

> ℹ️ You need to map categories so that Wish can correctly distinguish your SKUs. Example: suppose that two SKUs exist for the same product, having different colors but the same sizes in VTEX. If the category is not mapped, Wish will recognize the two SKUs as merely one.

> ⚠️ Products with no color or size will not be submitted to Wish. If a category does not have these fields in VTEX, you will need to [create an SKU field](https://help.vtex.com/en/tutorial/creating-sku-fields--tutorials_119) in the Catalog and fill it ou with the appropriate values before mapping color and size for your SKUs.

  - Download the Wish Mapping Spreadsheet in .xlsx format [here](https://drive.google.com/uc?export=download&id=1yJCgahkDhc4Gbvtxpe9kID1CwWsijdOf) .

## Fields

Follow the step-by-step, filling in the mapping spreadsheet fields according to the instructions below:

  1. **VTEXCategory**: is the category ID as given on VTEX. You can find it next to each category's name when expanding the categories tree. 

With this information filled in, continue as follows:

  1. **VTEXField**: the [SKU field's](https://help.vtex.com/pt/tutorial/criando-campo-de-sku) name that your store uses on VTEX. 
_Ex: fields such as "Size", "Color"._

  2. **WishField**: the specification's name on Wish, name that corresponds to the one used for the VTEXField SKU field.
_Ex: if you used "Colors" in the VTEXField column for example, then the Wish corresponding name would be "Color"._

  3. **VTEXValue**: name of the value used in the SKU field on VTEX. 
_Ex: for a "Color" specification, this field's values would be the colors that are used in the store, such as "Red", "Black", "White", etc. 

  4. **WishValue**: this is the column where the Wish accepted values go, values which correspond to whose used in the VTEXValue field. Check out Wish's documentation for more on the accepted [color](https://merchant.wish.com/documentation/colors) and [size](https://merchant.wish.com/documentation/sizes) values that can be added to the spreadsheet. 
_Ex: if you've filled in the VTEXField with "Size" and the VTEXValue with "Small", check whether Wish accepts "S" for example. 

## Examples

Here are some examples of how to create the spreadsheet:

### Clothing

In this example, we will map a **shirt**.

Notice that VTEX uses the fields "Colors" and "Sizes", while Wish uses "Color" and "Size", respectively. 

On the VTEX platform, the product pertaining to this category have two possible colors: wine red and icy white.
You should choose the closest color match, which in Wish's case can be "White/Ice Glaze" for "Icy White" and "Red" for "Wine Red", based on [list of accepted colors](https://merchant.wish.com/documentation/colors)). 

> ℹ️ The table's header should be filled in exactly as in the example below. Remember to not add any special characters such as "enter" or "space" when filling this table in.

![PT - Tabela Wish](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/marketplace/wish-integration/mapping-colors-and-sizes_1.png)

## Uploading the spreadsheet

After filling in the spreadsheet, access the Wish app, in admin, under Marketplace. 

  1. Click on "Load Spreadsheet";
  2. Choose the spreadsheet containing the data and click on "Send file".
  
Having completed this step, simply save the integration and your products will be sent. 
