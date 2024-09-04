---
title: 'Sending clothes, shoes and bags attributes to Mercado Livre'
id: 4UKx1bbG6sqKeYW8WmYSiq
status: DRAFT
createdAt: 2017-12-21T14:01:04.543Z
updatedAt: 2020-03-06T13:58:47.409Z
publishedAt: 
firstPublishedAt: 2017-12-26T19:26:36.713Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: sending-clothes-shoes-and-bags-attributes-to-mercado-livre
locale: en
legacySlug: sending-clothes-shoes-and-bags-attributes-to-mercado-livre
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

>ℹ️ The sending of the products attributes Clothes, Shoes and Bags follows a different flow from the others. In this mapping process, the result is that the SKUs will all be shown in the same ad. For other product types, Mercado Livre performs an automatic mapping.

To send the attributes of the products of type __Clothes__, __Shoes__ and __Bags__ to Mercado Livre, follow the steps below:

1. [Download](http://assets.contentful.com/alneenqid6w5/28ZfLnLpKEgU8ycqqIUGqw/da75dbcbc27f72881431c797a0d389f6/Modelo-SKUs-Mercado-Livre.xlsx) the template worksheet.
2. Fill in the template worksheet with the SKU IDs to be sent to Mercado Livre and with the values of attributes accepted by Mercado Livre. The accepted values can be found in the links below.
3. Save the template worksheet with the filled-in values.

>ℹ️ The values accepted by Mercado Livre can be found in the following links. Click the name of your country to download. You will find codes for <u>Main Color</u>, <u>Secondary Color</u>, <u>Adult Size</u>, <u>Children's Footwear Size</u>, <u>Adult's Clothing Size</u> and <u>Children's Clothing Size</u>. These values must be filled in properly in the **Main Color**, **Secondary Color** and **Size** fields of the template worksheet. With the exception of the *Secondary Color* attribute, all other fields are required (SKU_ID, Main Color, and Size).

__Links with the values accepted by Mercado Livre__:

- [Brazil](//assets.contentful.com/alneenqid6w5/6BHWQLL9bGuMq2ycMye0uc/76e64b67cb7352d95d6bb977b33394d4/Brasil-2.zip)
- [Argentina](//assets.contentful.com/alneenqid6w5/3c61gJrH7GWOywMCGMECg4/dc7a2ce73a99d41345dde2092eb1fec6/Argentina.rar)
- [Colombia](//assets.contentful.com/alneenqid6w5/5RePTJoKrYi4qA66WCCYKw/33910300057806b554d566210aa2310a/Colombia.rar)
- [Mexico](//assets.contentful.com/alneenqid6w5/3Z3xgpPyvuYEAIO2me4GSG/e4f4198463d8a3ba05124a30031302fa/Mexico.rar)

When your spreadsheet is filled with the correct values, just do the __upload on VTEX Bridge__. To do this, follow these steps:

1. Access the __Bridge__ module.
2. Click on __Settings__.
3. On the Mercado Livre card, click __Mapping Upload__.
4. Click __Escolher Arquivo__ ("Select File") and select your worksheet with the data. This worksheet must be in the format `.xlsx`.

__That's it!__ Now the attributes of your products of types __Clothes__, __Shoes__ and __Bags__ have been mapped and correctly sent to Mercado Livre.

## Example of filling in the worksheet

In Brazil, for example, a *yellow* footwear with *blue* details of *size 39* must be sent to Mercado Livre with the corresponding __SKU ID__ and the codes __33000_Amarelo_52007__, __43000_Azul_52092__ and __23000_39_22039__, relating to *main color*, *secondary color* and *size*. See more examples in the image below:

![Planilha modelo ML](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/sending-clothes-shoes-and-bags-attributes-to-mercado-livre-0.png)

## Go further

1. Continue setting up your integration with [Mercado Livre](/en/tutorial/how-to-integrate-with-mercado-livre), by following to the section __Template configuration__.
2. If there's any problem during the mapping, please check out our article that teaches [how to correct errors in attribute mapping](/en/faq/why-does-mercado-livre-return-attribution-errors-after-mapping) in Mercado Livre.
