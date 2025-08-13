---
title: 'Forcing searches with blocked terms to return results'
id: 6OcM3za1tmUIuiua8y40I2
status: PUBLISHED
createdAt: 2018-01-23T19:44:20.011Z
updatedAt: 2025-06-12T20:28:40.485Z
publishedAt: 2025-06-12T20:28:40.485Z
firstPublishedAt: 2018-01-23T20:35:50.068Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: forcing-searches-with-blocked-terms-to-return-results
legacySlug: forcing-searches-with-blocked-terms-to-return-results
locale: en
subcategoryId: 383bZO0kymqpnNf7Z4NdEg
---

> ⚠️ **Warning**: VTEX has two search options - VTEX search and VTEX Intelligent Search. This article refers to the VTEX search. To learn more about the VTEX Intelligent Search application, see <a href = "https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">this track</a>.

To make customer searches more accurate, VTEX search engine ignores some terms that are very common. Some examples are the words "com" and "todo", from Portuguese, "that" and "with", from English, and "hace" and "uno", from Spanish. [See here the complete list of blocked terms](/en/tutorial/why-vtex-search-engine-ignores-some-terms).

However, this behavior sometimes causes difficulties for the store.

Say, for example, that one of the products in your store is the game "Uno".

The word "Uno" is blocked by the search. So if a user types only "Uno" in the search field of the store, they won't see any results, even if the product is available.

To work around this scenario, you can choose one of the following two actions.

## Create a folder in CMS with the searched term name

VTEX search engine returns several types of results, following the order of priority below:
- Landing page (title of the CMS folder).
- Brand.
- Department.
- Keyword.

When the customer searches for the title of a product, the case is that of the keyword, which - despite being the most common - is the one with lowest priority.

Following the example above, if the user searches only for "Uno", the site will not yield any results.

But if you __create a folder in CMS__ with the title "Uno", when this term is searched, before searching for a keyword the system will search and find the folder that you created.

This will bring the user to this folder. All you need to do then is point it to the desired product.

## Redirect search URLs to the product page

Another alternative to force searches with blocked terms to return relevant search results is through a __redirect__ procedure.

Again following our example, you can create a 301 redirect from the `{AccountName}.com.br/Uno` URL to the product page.

Whenever someone searches for "Uno", the URL that will be created is the previos one, and the user will be automatically taken to the product page.
