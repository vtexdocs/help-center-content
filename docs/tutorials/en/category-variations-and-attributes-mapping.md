---
title: 'Category, variations, and attributes mapping on Mercado Livre'
id: 6d5DFl6MZasoKickqkOUo4
status: DRAFT
createdAt: 2018-07-28T17:54:34.171Z
updatedAt: 2020-11-16T21:27:09.104Z
publishedAt: 
firstPublishedAt: 2018-07-28T18:16:23.488Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: category-variations-and-attributes-mapping
locale: en
legacySlug: category-variations-and-attributes-mapping
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

>ℹ️ The Mercado Livre plataform is available only in spanish and portuguese, so the related terms in the article below do not have a translation.

After making the initial settings for integration with Mercado Livre, we are now going to categorize and send product variations and attributes to the marketplace. You will send this information through the __upload of the mapping spreadsheet__, which contains a correspondence table.

With this feature, you can categorize your products in Mercado Livre and also create variations and attributes for the ads.

The mapping will only be done once for each category. This means that once you have done the mapping, new products will be integrated directly into the correct category (and their variations and attributes).

- [Download here](https://assets.ctfassets.net/alneenqid6w5/qyDp7OSL5YAGaGKagWiK0/07900f41a952a460185e18f9db190eb1/Planilha_de_Mapeamento_do_Mercado_Livre.xlsx) the __Mercado Livre Mapping Spreadsheet__ in the format `.xlsx`.

The same spreadsheet will be used in the three steps described below (categorization, variations and attributes). Follow the step by step, filling in the fields of the mapping spreadsheet as follows.

## Categorization

Here we will do the correspondence between your categories in VTEX with those used by Mercado Livre.

1. __CategoryId:__ it is the category ID in VTEX. You can find it next to the name of each category as you expand the categories tree.
2. __MeliCategoryId:__ it is the category ID in Mercado Livre. [Click here](https://assets.ctfassets.net/alneenqid6w5/4IGh23L6buEm8s8IWYwISS/f8f1e862f39f8f0052b1b60a696aadd6/MercadoLivre_CategoriasFixas.xlsx) to download the worksheet where these values are available. If you prefer, access this [Mercado Livre API](https://api.mercadolibre.com/sites/MLB/categories) to query the categories, which are always updated there.

>_`Ex:` you have the following tree in __VTEX __:_

>- _Home Appliances (ID=1) > Refrigerator (ID=2)_

>_In __Mercado Livre__ the tree is like this:_

>- _Home Appliances (ID=MLB5726) > Refrigerator e Freezers (ID=MLB1576) > Refrigerator (ID=MLB181294)_

>_ So you would fill the spreadsheet as follows:_


>| CategoryId | MeliCategoryId |
| ---------- | ---------- |
| 2       | MLB181294       |
 

__VTEX recommends that the correspondence above be done manually__. If you don't want to do it this way, the integration gives you the option to automatically categorize your ads through a Mercado Livre tool. This tool depends on information such as product name and price but if it can not process this data correctly, the categorization of your product will be done wrongly.

To avoid this problem, you need to define a reliability rate in the integration settings. That is, the product will only be integrated if the rate returned by the Mercado Livre tool is above the one you set.

_`Ex:` The Mercado Livre tool tries to identify the category of products at the time of submission. If you've set up a reliability rate of 80% and the return on categorization is around 70%, your products ___will not be integrated___.

## Variation

In Mercado Livre, there are two types of variation: the __mandatory__ ones and the __customizable__ ones.

- Mandatory Variations

If your product is a `Footwear`, `Clothing`, `Bag`, `Belt` or `Home Appliance`, __you will need to map the required variations__. Their name must follow exactly the values accepted by the marketplace. [Download here](https://assets.ctfassets.net/alneenqid6w5/5nLnBUVonS8qgWqqeck4MQ/d338d66ed72d2183802c546e88ce1f3e/Planilha_de_Variac__o__es_do_Mercado_Livre.xlsx) the __Mercado Livre Variations Spreadsheet__ to check the accepted values according to each type of product.

- Customizable Variations

These are additional variations that can be created according to your need. You can only have __one__ customizable variation per ad. The name of the variation and its respective values are of free choice.

_`Ex:` you sell cell phones that vary according to the memory size. In Mercado Livre, the ad would group all sizes, thus ending up like this:_

  >_Smartphone X_
  ><br/>_Variation 1 - 32gb_
  ><br/>_Variation 2 - 64gb_

Given this information, continue completing the spreadsheet by following the guidelines below:

1. __Type:__ it's the type of specification that will be used and must be filled with the `Variation` value. This value defines that the specification type is intended to differentiate SKUs (as well as [SKU fields in VTEX](/en/tutorial/creating-sku-fields)).

2. __VtexEspc:__ it's the name of the [SKU field](/en/tutorial/creating-sku-fields) used in your VTEX store.
<br/>_`Ex:` fields like "Size", "Color", "Material", etc.

3. __MeliEspc:__ it's the name of the specification in the Mercado Livre Variation Spreadsheet, which corresponds to the SKU field you used in the `VtexEspc` field.
<br/>_`Ex:` If you used "Colors" in the `VtexEspc` column, then the corresponding name in Mercado Livre would be "Color"._

4. __VtexValue:__ name of the value used in the SKU field in VTEX.
<br/>_`Ex:` for a specification of "Color", the values of this field would be the very colors used in the store, such as "Red", "Black", "White", etc.

5. __MeliValue:__ in this column you must fill values accepted by Mercado Livre, corresponding to the values used in the `VtexValue` field. In the Mercado Livre Variation Spreadsheet, go to the tab corresponding to __your country__ and look for the accepted values for each specification you filled in the `MeliEspc` column.
<br/>_`Ex:` If you filled in `MeliEspc` with "Size" and `VtexValue` with "Small", you will see that Mercado Livre accepted value is "S"._

>⚠️ **Note:** Once an ad is first created, **it's no longer possible to change its variations**. If you want to make adjustments such as changing the color, for example, it will be necessary to finish the ad in Mercado Livre and then redo the spreadsheet mapping.

>⚠️ **Note 2:** Mercado Livre **does not allow you to use different prices** for each variation of an ad. For example, a shirt can not cost R$ 40 for size "S" and R$ 50 for size "M".

>⚠️ **Note 3:** If the SKU does not have a certain specification (such as color, for example), you will need to register it in VTEX before completing the integration process. We recommend adding the missing attribute as a **product ** specification. Therefore, this information will not be displayed on the website.

## Attributes

In Mercado Livre, it's possible to complement product information using attributes (equivalent to VTEX product specifications). They are given as technical information, measures, etc.

It will be necessary to map the attributes according to the values accepted by Mercado Livre. Put the following URL in the browser (replacing the `{categoryId}` variable with Mercado Livre category ID you are mapping) to download the attributes and their respective accepted values.

```http://portal.vtexcommercestable.com.br/api/meliintegration/category/{CategoryId}/attributes```

_`Ex:` If you are mapping the category "Shirts" (MLB31447), you will see that it's possible to register several attributes. Among them `Gender`, which accepts only the values "Male", "Female", "Girls", "Boys", "Babies", "Without gender". Any other value is not accepted by Mercado Livre._

_`Ex 2:` still in the scenario of "Shirts" (MLB31447), you will see that it's possible to register attributes with values that have __Free Text__. That is, any value can be entered for these attributes._

Given this information, completing the spreadsheet will look like what you did for Variations in the previous step, with only a couple of differences. Follow the guidelines below:

1. __Type:__ it's the type of specification that will be used and must be filled with `Information`. This value defines that the specification type is intended to complement information about the products (as happens with the [product fields in VTEX](/en/tutorial/creating-a-product-field)).

2. __VtexEspc:__ it's the name of the [product field](/en/tutorial/creating-a-product-field) used in your store inside VTEX.
<br/>_`Ex:` fields such as "Gender", "Total capacity", "Internal memory", etc._

3. __MeliEspc:__ it's the name of the specification corresponding to the product field that you used in the `VtexEspc` field. As there is no restriction of values, you must write exactly what you want to appear as an attribute in Mercado Livre. Generally, it's the same name used in `VtexEspc`.
<br/>_`Ex:` If you used "Capacity" in the `VtexEspc` column, then you would use "Full Capacity" in `MeliEspc`._

4. __VtexValue:__ name of the value used in the product field in VTEX.
<br/>_`Ex:` for a "Internal Memory" specification, the spreadsheet indicates as accepted value __"Measurement unity"__. So you should fill in this field with the values from your store, but always specifying the unit of measurement, such as "32GB", "64GB", "128GB", etc.

5. __MeliValue:__ it's the name of the value corresponding to the ones you used in the `VtexEspc` field. As there is no restriction of values, you must write exactly what you want to appear as an attribute in Mercado Livre. Generally, it's the same name used in `VtexValue`.
<br/>_`Ex:` If you filled `VtexValue` with "32GB", then you would also use "32GB" in `MeliValue`._


## Examples

Below are some examples of how to assemble the spreadsheet.

- Example spreadsheet for `Clothes`:

In this example, we are categorizing a __shirt__. As it is clothing, it's necessary to follow the accepted values of Mercado Livre Variations Spreadsheet.

In VTEX, products in this category have two possible colors: _Red_ and _Ice_. As there is no "Ice" color in Mercado Livre, you should choose the closest available color, which is "White". Notice that in VTEX the field names are "Color" and "Sizes", but Mercado Livre calls them "Main Color" and "Size", respectively.

Considering the Attributes aspect, this category is segmented in VTEX between the Men and Women departments. So it was necessary to do the correspondence with the name of the field according to the spreadsheet found in the link below:

`http://portal.vtexcommercestable.com.br/api/meliintegration/category/MLB103664/attributes`

In VTEX it is "Department" but in Mercado Livre it is "Gender". Thus an attribute will be created to show this information in the ad.

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 5 | MLB103664 | Variation | Color | Main Color | Ice | White |
| 5 | MLB103664 | Variation | Color | Main Color | Red | Red |
| 5 | MLB103664 | Variation | Sizes | Size | Small | S |
| 5 | MLB103664 | Variation | Sizes | Size | Large | L |
| 5 | MLB103664 | Information | Department | Gender | Male | Male |
| 5 | MLB103664 | Information | Department | Gender | Female | Female |


- Example Spreadsheet for `Home Appliances`:

In this example, we are categorizing a __refrigerator__ (category MLB181294) and a __blender__ (category MLB73055). As they are home appliances, you must follow the values accepted by the Mercado Livre Variation Spreadsheet. 

In VTEX, the refrigerator in this category is bivolt. Therefore, in the spreadsheet it should be used "110V/220V (Bivolt)", since it's the value accepted by Mercado Livre. In the case of the blender, the correspondence was the same because the values in VTEX are 110V and 220V, as well as those accepted by Mercado Livre.

Considering the Attributes aspect, the rerigerator category has the attribute "Capacity" with the possible values 573L and 394L. So it was necessary to make the correspondence with the name of the field according to the spreadsheet found in the link below:

`http://portal.vtexcommercestable.com.br/api/meliintegration/category/MLB181294/attributes`

In VTEX, it is "Capacity", but in Mercado Livre it is "Full Capacity".

In the blenders category, on the other side, the power will be displayed as an attribute. The correspondence was the same because, both in VTEX and Mercado Livre, the attribute "Power" has the same name.

`http://portal.vtexcommercestable.com.br/api/meliintegration/category/MLB73055/attributes`

Thus, an attribute will be created to show this information in the ads.

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 27 | MLB181294 | Variation | Voltage | Voltage | Bivolt | 110V/220V (Bivolt) |
| 27 | MLB181294 | Information | Capacity | Full Capacity | 573L |  573L|
| 27 | MLB181294 | Information | Capacity | Full Capacity| 394L |394L|
| 54 | MLB73055 | Variation | Voltage | Voltage | 110V | 110V |
| 54 | MLB73055 | Variation | Voltage | Voltage | 220V | 220V |
| 54 | MLB73055 | Information | Power | Power | 1200W | 1200W |
| 54 | MLB73055 | Information | Power | Power | 1000W | 1000W |


- Example worksheet with `customizable variations`:

In this example, we are categorizing a __pijama__. As it is clothing, you must follow the values accepted in Mercado Livre Variation Spreadsheet, as in the first example. 

Note that in this scenario we've added "Material" as a customizable variation. So you can choose any value you want. In addition to varying by color and size, ads in this category will also vary according to the material.

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 12 | MLB108801 | Variation | Color | Color | Navy Blue | Blue |
| 12 | MLB108801 | Variation | Color | Color | Sea Green | Light Green |
| 12 | MLB108801 | Variation | Size | Size | Small | S |
| 12 | MLB108801 | Variation | Size | Size | Large | L |
| 12 | MLB108801 | Variation | Material | Material | Cotton | Cotton |
| 12 | MLB108801 | Variation | Material | Material | Silk | Silk |

## Uploading

After filling out the spreadsheet, access __Integrations__ from the Admin menu:

1. Click __Settings__.
2. Look for the Mercado Livre card and click on the __gear icon__.
3. Then click __Upload Mapping__.
4. Choose the worksheet with the data and click __Send File__.

After the upload is completed, the integration automatically sends all products from the categories used in the spreadsheet to Mercado Livre.

>⚠️ **Note:** products will only be sent to Mercado Livre if integration authentication has already been performed. If you have not already done so, go to the next step of the tutorial.

You have completed the fifth step of the integration. Now we are moving to the last step, where we will authorize Mercado Livre integration in VTEX panel.
