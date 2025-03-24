---
title: 'How to configure XML VTEX for the 2015 Update of the Specification for the Google Shopping feed and the Google product Taxonomy'
id: tutorials_541
status: ARCHIVED
createdAt: 2017-04-27T22:02:13.320Z
updatedAt: 2019-12-31T15:23:02.428Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:37.920Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: how-to-configure-xml-vtex-for-the-2015-update-of-the-specification-for-the-google-shopping-feed-and-the-google-product-taxonomy
locale: en
legacySlug: 
subcategoryId: unknown-subcategory
---

>⚠️ Google Shopping integration through XML is an **outdated method** and is no longer recommended. See [here](http://help.vtex.com/en/tutorial/new-google-shopping-api-integration) how the new Google Shopping integration through API works.

According to the [2015 Update of the Specification for the Google Shopping feed and the Google](https://support.google.com/merchants/answer/6231410?hl=pt-BR "2015 Update of the Specification for the Google Shopping feed and the Google")[product Taxonomy](https://support.google.com/merchants/answer/6231410?hl=pt-BR " product Taxonomy"), we have included new fields in our XML creation form: Category separator, Global Category and product specifications.

The tags on the standard configuration of our XML form have been updated to create a new Google Merchant / Shopping feed; just select the option “Feed: Atom 1”:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled%20category/Untitled%20subcategory/how-to-configure-xml-vtex-for-the-2015-update-of-the-specification-for-the-google-shopping-feed-and-the-google-product-taxonomy_1.gif)

Proper integration with Google Merchant / Shopping requires updating the xml with the new fields, beginning September 15, 2015.

Find out more about the new fields on the XML form:

### Category separator

The option responsible for defining the taxonomy of the “_Categoria_” and “_Departamento_ + _Categoria_” fields. Normally used for filling out the [g:product_type].

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled%20category/Untitled%20subcategory/how-to-configure-xml-vtex-for-the-2015-update-of-the-specification-for-the-google-shopping-feed-and-the-google-product-taxonomy_2.gif)

Default (e.g.: Father Category – Child Category – Grandchild Category)

Default separator “-” used for feed from partners like Criteo, Buscapé

Google Shopping (e.g. Father Category &gt; Child Category &gt; Grandchild Category)

Separator “/” required by the Google Merchant / Shopping taxonomy

### Global Category

The field responsible for the relationship between your store’s categories and Google product categories: https://support.google.com/merchants/answer/1705911

Should be filled out with the [g:google_product_category] tag

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled%20category/Untitled%20subcategory/how-to-configure-xml-vtex-for-the-2015-update-of-the-specification-for-the-google-shopping-feed-and-the-google-product-taxonomy_3.gif)

For this field to function properly, it is necessary to verify whether the Global Category field has been filled out in the VTEX catalog.

[Find out how to properly register your store’s Global Category](/en/tutorial/setting-up-the-global-category/ "Find out how to properly register your store’s Global Category")

### Product attribute specifications

In the case of feeds with products in the "Clothing and accessories" category, it will be mandatory to enter the attributes "color" [g:color], "age" [g:age\_group] and "gender" [g:gender]. For feeds in the "Clothing and accessories - Clothes" and "Clothing and accessories - Shoes" category, it will also be necessary to include the attribute "size" [g:size].

We have created customizable fields for greater flexibility when integrating the current nomenclature of the specifications of your store's categories with the Google Product Specifications.

To properly fill out the customizable fields, you must observe the following article: [Default value for the Product Specifications Attribute –GoogleShopping XML](http://help.vtex.com/en/tutorial/product-specifications-attribute-googleshopping-xml "Default value for the Product Specifications Attribute –GoogleShopping XML")
