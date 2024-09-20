---
title: 'How to integrate with Dafiti'
id: 5jgzjzBPeMcci6YYqcAsUe
status: ARCHIVED
createdAt: 2017-05-17T22:06:43.485Z
updatedAt: 2020-03-06T13:58:25.304Z
publishedAt: 
firstPublishedAt: 2017-05-18T18:01:22.411Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: how-to-integrate-with-dafiti
locale: en
legacySlug: how-to-integrate-with-dafiti
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

This tutorial will explain, step by step, how to configure your store’s integration with Dafiti.

## Dafiti’s integration registry 

1.	In the Admin menu, select __Integrations__.
2.	Access the __Settings__ item.
3.	Search for the __Dafiti__ box and click on __Integrate__.
4.	Fill in the __fields__ shown on the screen. Below, we will further detail how to fill each one in. 
5.	With everything filled out correctly, click on __Save Configuration__.


### Field detailing

&bull; __Affiliate*:__ this field must be filled out with an affiliate ID [affiliate](/en/faq/what-is-an-affiliate) that does not yet exist in the Orders Managment affiliates registry. The ID only accepts three digits (all must be consonants). Suggestion: `DFT`. In case you have [multidomain integration] configurations (en/tutorial/how-to-create-multistore-multidomain), pay special attention to the affiliate’s ID, because this field has a different value for each domain. 

&bull; __Sales Policy*:__ The commercial policy ID  that will be used for the integration with Dafiti. It’s the product of this commercial policy that will sent to the marketplace. 

&bull; __Access Key*:__ this field should be filled in with an identification __token__ of your store on the marketplace. This information is generated directly on the Dafiti portal. 

&bull; __User*:__ fill in this field with the user generated on the Dafiti portal. 

&bull; __Affiliate Email*__: fill out this field with an e-mail.

&bull; __Allow HTML in product description*:__ determines if the description of your products will be send out to Dafiti in HTML tags. By choosing `Yes`, the description will be sent exactly as it is registered in VTEX’s catalogue. By choosing `No`, the integration with remove all HTML tags that you have in the description of your products.

&bull; __Price Divergence Indicator*:__ is the acceptance rate of the difference in value of an order. Any order that has a difference between the marketplace selling price and the price established by the seller [will be compared with this value](/en/faq/why-an-order-was-closed-with-a-wrong-price). If the divergence, in percentage points, is less that the value defined in this field, the order will be integrated normally. Otherwise, the order will not be integrated and you can see it in the [orders tab (within the integrations session in Admin)](/en/tutorial/check-integration-on-bridge).

_Subtitle:_<br />
`*` Mandatory fields.<br />


Once the initial configurations with Dafiti are done, it is time to send the product data to the marketplace. The sending of some of this information will be done by uploading the mapping spreadsheet, while the rest will be sent through data which is already registered in VTEX’s own catalogue.

## Filling in the Mapping Spreadsheet

With this feature, it is possible to correctly categorize and also create variations for your products in Dafiti.

The mapping should be done every time a product is sent to Dafiti for the first time. This means that, having already concluded the mapping once, the products that were already integrated do not need to repeat this process. At the same time, new products should always undergo mapping.

1. According to __your country__, download the __Dafiti Mapping Spreadsheet__ in `.xlsx` format.
<br/>&bull; [Brazil](//assets.ctfassets.net/alneenqid6w5/2Vbi7VaYIowaaOYCCucsQq/fa94cd636b38e9810dd6a708c95e26ac/Planilha_de_Mapeamento_da_Dafiti.xlsx)
<br/>&bull; [Colombia](//assets.ctfassets.net/alneenqid6w5/4d5y0N09IsKmy4MuAGygqs/0e43349d309fb556179dfac5f2f6c885/Planilha_de_Mapeamento_da_Dafiti_COL.xlsx)

2. Depending on __your country__, download the __Dafiti Query Spreadsheet__ to check the accepted value of each column of the Mapping Spreadsheet from the previous step. This spreadsheet is __exclusively to check__.
<br/>&bull; [Brazil](//assets.ctfassets.net/alneenqid6w5/1gGYn5lo3qSe0iOaoKs0oa/fc1aa02e2761474f0235fcb489f930ff/Planilha_de_Consulta_Dafiti.xlsx)
<br/>&bull; [Colombia](https://s3.amazonaws.com/Marketplace-Integration/SellerCenterIntegration/Colombia.zip)

Follow the steps below, doing the to/from on the __Mapping Spreadsheet__ between what VTEX has registered with regards to your product and the specific values found in the Dafiti __Query Spreadsheet__.

>⚠️ **OBS:** any value used that is not found in the Query Spreadsheet will trigger an integration error.

1. __SKU:__ is the SKU ID in VTEX. This is the SKU ID that you want to send to Dafiti.

2. __Category:__ fill out with the value of the category to which your SKU belongs to in Dafiti.
<br/>_`Ex:` you are mapping a pair of running shorts. According to the Query Spreadsheet the value corresponding to the __Category__ should be `3328`._

3. __Colour__: fill out with the Colour of the SKU.
<br/>_`Ex:` you are mapping a red pair of socks. According to the Query Spreadsheet, the column __Colour__ should be filled out with the value `Red`._

4. __Size__: fill out with a value for the size of the SKU.
<br/>_`Ex:` you are mapping a pair of shorts size 38. According to the Query Spreadsheet, the column __Size__ should be filled out with the value `38`._

5. __Gender__: fill out with the Gender value of the SKU.
<br/>_`Ex:` you are mapping a women’s pair of shoes. According to the Query Spreadsheet, the column __Gender__ should be filled out with the value `Women`._

6. __Type of product:__ fill out with the Product Type of your SKU. This field is free to be filled out as you deem more adequate.
<br/>_`Ex:` you are mapping a pair of sneakers. Normally, the column __Type of Product__ contains the value `Sneakers`._

7. __Model:__ fill out with a value for the model of your SKU. This field is free to be filled out as you see fit.
<br/>_`Ex:` you are mapping a hoodie. Normally, the column __Model__ contains the value `Hoodie`._


>⚠️ **OBS:** in the Brazilian integration, Dafiti requires that the name of registered product follows the following guidelines: **Type of Product + Brand + Model + Colour.**
>
>
> 
> That being the case, whenever we encounter values for these four fields in VTEX, we will automatically create a new product name. If some of the fields are not present, we send the product’s original name.


## Sending images

Dafiti has a business rule that requires images to have a white background for all sent products. 

The integration uses exactly the same product images that you have already registered in the VTEX catalogue. However, in case you don’t have images with white background and do not with to replace these in your own catalogue, the integration gives the option to send the alternatives images through the Mapping Spreadsheet (using the previous step). By doing this, it is the spreadsheet images that will be sent and not those that are registered in your store.

To send through the Mapping Spreadsheet, follow these step-by-step instructions:

1. Next to the Model column, add a column with the name __Image_1__.
2. In the respective lines corresponding to the SKUs, fill out the URL of your images.

You can send up to __eight images__. In order to do this, you will need to add new columns, following the given pattern: `Image_2`, `Image_3`,..., `Image_8`.

>⚠️ **OBS:** remember to use `http` or `https` at the beginning of your URLs. If you won’t do this, an error will occur when trying to upload the spreadsheet to VTEX.


## Sending the Product Brand

The integration will send the brand that is registered with your product to the VTEX catalogue.
<br/>_`Ex:` if you are sending an Adidas shirt, the integration will send `Adidas` as the brand._

>⚠️ **OBS:** similar to what happens with category and specifications, Dafiti has brands that are mapped on its platform. In this case, if any of your products have a brand that is not registered with Dafiti, an integration error will occur. If this happens, get in touch with Dafiti to ask for the brand in questions to be registered on their system.


## Uploading

After filling out the spreadsheet, access __Integrations__ in your Admin menu:

1. Click on __Settings__.
2. Search for the Dafiti box and click on the __gear icon__.
3. Next, select __Upload Mapping__.
4. Choose the spreadsheet with the data and click on __Upload file__.

Once the upload is completed, the integration will automatically send all of the products from the spreadsheet to Dafiti.

After this step, your store will be completely integrated with Dafiti.

