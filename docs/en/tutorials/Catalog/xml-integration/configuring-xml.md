---
title: 'Configuring XML'
id: tutorials_242
status: PUBLISHED
createdAt: 2017-04-27T22:12:41.700Z
updatedAt: 2023-03-14T17:46:51.658Z
publishedAt: 2023-03-14T17:46:51.658Z
firstPublishedAt: 2017-04-27T23:03:10.195Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: configuring-xml
legacySlug: uploading-a-product-xml
locale: en
subcategoryId: 2OCA7SVfWoMSiAi0GEGwKo
---

XML is a markup language that allows computers and applications to communicate. Its main feature is the hierarchically organized structure for creating texts, data bases and vector drawings. 

The XML language can be combined with different standards, which makes it possible for an XML created from database A to be read by database B. 

The XML configuration functionality in VTEX makes use of this feature of being able to combine different standards to enable other databases to read the structures created by the VTEX database. 

This means that, when entering the tag names in the __Id do Produto__ field, for example, with __Product_Id__, the VTEX database will understand that this information has to be entered there, making it possible to understand by Google, Facebook, Buscapé and many other systems that will read the structure.

<div class = "alert alert-info">
  <p>Changes to XML take an average of two hours to be updated.</p>
</div>

Here are some examples of partners that integrate with VTEX XML:

- Afilio
- Buscapé
- Criteo
- Facebook
- Google
- MSN
- Sociomantic
- UOL
- UOL Dynad
- Zanox

## New XML

Before performing the registration of a new XML, it is important to have access to the structure of the system to which you intend to export your catalog. That is, you will need to know the names of the tags that are used by their XML and what information they require for this structure to be assembled, for example product ID, product name, SKU ID, SKU name, price, among others.

Once you have this, follow the steps below to configure your XML:

1. In the VTEX Admin, go to __Store settings__, or type __Store settings__ in the search bar at the top of the page.
2. On __Channels__, click on __XML Integration__. 
3. Click on the `New XML` button. You will be redirected to a form.
4. Choose the __XML Type__.
5. Enter the file name to identify it on the list of XMLs.
6. Choose the __Encoding type__.
7. Choose which collection will have its products listed.
8. Select the currency symbol in the prices.
9. Choose the price format, more specifically whether or not to use the thousands separator.
10. Select whether to use standard separator for categories or the Google Shopping separator (read more about configurations for XML on Google Shopping in the article [Value Standard for Product Specifications Attribute – XML GoogleShopping](/en/tutorial/product-specifications-attribute-googleshopping-xml).
11. Choose whether or not to display the unavailable SKUs on the marketplace site, in other words, whether the product will be displayed for purchase, even if it is not available for immediate delivery.
12. Select whether you want the product displayed with the default SKU information.
13. Thereafter, you have to enter the tags in accordance with the what has been defined by the system you will be sending the XML to. You must check the selection box in the __Show content__ column, for the tags which have a name entered. The tags with this option checked, and which you cannot deselect, are mandatory.
14. The URL used to access the XML is generated automatically, according to the [domain registered in the Web Site dictionary](https://help.vtex.com/en/tutorial/configuring-an-xml-domain--2RkGK4vHS0c6sYuUw0cUWC), in the __CMS__.

<div class="alert alert-warning">
  <p>In case the trade policy has restricted access, the XML will not be generated.</p>
</div>

## Native connectors: an alternative to XML when integrating with marketplaces

Instead of integrating with a marketplace using an XML file, it is possible to do it with a native connector developed by VTEX. Whenever possible, a native connector should be your standard choice, as it provides more efficiency. The current native connectors available are the following:

- [Amazon](https://help.vtex.com/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP)
- [B2W](https://help.vtex.com/en/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk)
- [Mercado Livre](https://help.vtex.com/en/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq)
- [Magazine Luiza](https://help.vtex.com/en/tracks/configurar-integracao-com-o-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y)
- [Carrefour](https://help.vtex.com/en/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2)
- [Centauro](https://help.vtex.com/en/tracks/integracao-com-a-centauro--D8Qnjbr5lfLkUfMRhsfbj)
- [Wish](https://help.vtex.com/en/tracks/integracao-com-a-wish--50hbG4bzhSIhjz1lzqI1g4)
- [Facebook](https://help.vtex.com/en/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc)
- [Google Shopping](https://help.vtex.com/en/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw)
- [Google Shopping Ads](https://help.vtex.com/en/tracks/como-fazer-campanhas-atraves-do-google-ads--47kz5PRQPK0IEaqGqiIuA)
- [Via Varejo](https://help.vtex.com/en/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY)
- [Dafiti](https://help.vtex.com/en/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i)
- [Netshoes](https://help.vtex.com/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm)
