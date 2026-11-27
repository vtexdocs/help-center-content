---
title: 'XML integration'
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

This means that, when entering the tag names in the __Id do Produto__ field, for example, with __Product_Id__, the VTEX database will understand that this information has to be entered there, so that Google, Facebook, Buscapé, and other systems can understand the structure.

> ℹ️ Changes to XML take an average of two hours to be updated.

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

Before performing the registration of a new XML, it is important to have access to the structure of the system to which you intend to export your catalog. That is, you will need to know the names of the tags that are used by its XML and what information they require for this structure to be assembled, for example product ID, product name, SKU ID, SKU name, price, among others.

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
10. Select whether to use standard separator for categories or the Google Shopping separator (read more about configurations for XML on Google Shopping in the article [Value Standard for Product Specifications Attribute – XML GoogleShopping](/en/docs/tutorials/product-specifications-attribute-googleshopping-xml).
11. Choose whether or not to display the unavailable SKUs on the marketplace site, in other words, whether the product will be displayed for purchase, even if it is not available for immediate delivery.
12. Select whether you want the product displayed with the default SKU information.
13. Thereafter, you have to enter the tags in accordance with what has been defined by the system you will be sending the XML to. You must check the selection box in the __Show content__ column, for the tags which have a name entered. The tags with this option checked, and which you cannot deselect, are mandatory.
14. The URL used to access the XML is generated automatically, according to the [domain registered in the Web Site dictionary](/en/docs/tutorials/configuring-an-xml-domain), in the __CMS__.

> ⚠️ In case the sales channel has restricted access, the XML will not be generated.

## Native connectors: an alternative to XML when integrating with marketplaces

Instead of integrating with a marketplace using an XML file, it is possible to do it with a native connector developed by VTEX. Whenever possible, a native connector should be your standard choice, as it provides more efficiency. The current native connectors available are the following:

- [Amazon](/en/docs/tracks/amazon-integration)
- [B2W](/en/docs/tracks/b2w-integration-set-up)
- [Mercado Livre](/en/docs/tutorials/mercado-libre)
- [Magazine Luiza](/en/docs/tracks/magazine-luiza-integration-set-up)
- [Carrefour](/en/docs/tracks/carrefour-integration-set-up)
- [Centauro](/en/docs/tracks/centauro-integration)
- [Wish](/en/docs/tracks/wish-integration)
- [Facebook](/en/docs/tracks/facebook-integration)
- [Google Shopping](/en/docs/tracks/integrating-with-google-shopping)
- [Google Shopping Ads](/en/docs/tracks/how-to-campaign-through-google-ads)
- [Via Varejo](/en/docs/tracks/casas-bahia-marketplace-integration)
- [Dafiti](/en/docs/tracks/dafiti-integration-setup)
- [Netshoes](/en/docs/tracks/netshoes-integration-set-up)
