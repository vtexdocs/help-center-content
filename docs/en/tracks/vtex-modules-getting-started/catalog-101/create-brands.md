---
title: 'Create Brands'
id: 7lEGOSpAlQJCs5eUc5XFmR
status: PUBLISHED
createdAt: 2019-05-16T20:24:10.456Z
updatedAt: 2025-09-22T16:00:13.493Z
publishedAt: 2025-09-22T16:00:13.493Z
firstPublishedAt: 2019-05-22T18:19:34.194Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: create-brands
locale: en
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugEN: catalog-101
order: 6
---

There are two ways to create a brand on the VTEX platform: either through VTEX Admin or through API.

Follow the instructions below to create and update brands for products available in your store:

## VTEX Admin

1. Click on __Catalog__.
2. Click on __Brands__.
3. Click on `New Brand`.
4. Fill out the brand form fields. For more on each field, read their description below:
  - __Name__: Name of the brand you wish create and identify a product with. This field is mandatory and limited to 150 characters.
  - __Similar words__: Alternative search terms that will lead to the created brand.The user can find the desired brand even when misspelling it. Used especially when words are of foreign origin and have a distinct spelling that is transcribed into a generic one, or when small spelling mistakes occur.
  - __Brand description (description meta tag)__: A brief description of the brand, displayed by search engines. Since search engines can only display less than 150 characters, we recommend not exceeding this character limit when creating the description.
  - __Brand page title (title tag)__: Title shown in the browser bar, which corresponds to the title of your page. Search engines consider it one of the most important result optimization elements.
  - __AdWords remarketing code__: Also known as Google Remarketing Tag, it's the code used in Google Adwords campaigns. Filling out this field with the code will allow you to follow the remarketing metrics linked to that brand.
  - __Lomadee campaign code__: Code used by Buscapé campaigns.
  - __Score (used for sorting the search)__: A value used to set brand priority on the search results page. For more on this field and search result prioritization, read our article on [how the Score field works](/en/tutorial/how-does-the-score-field-work--1BUZC0mBYEEIUgeQYAKcae).
  - __Display on home menu__: When ticking this box, the brand appears in the _Department Menu_ control (<vtex.cmc:departmentNavigator/>). For more on the use of controls and their application for your store pages, read our article on [controls list](/en/tutorial/list-of-controls-for-templates--tutorials_563).
  - __Activate Brand__: When selecting this box, the brand is visible and ready for use with the created products.
5. Click on `Save`.

Information that is filled out can be updated at any time using the Catalog module. To edit information related to a brand, click on `Edit`.

To delete a brand entry, click the arrow next to `Edit` and then click `Delete`.

## API

Use the [Create brand](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/brand) request to create a new brand using the Catalog API.
