---
title: "Search resolver no longer displays the number of products in stock"
id: 7Ah6ou3RCoNmMeedZaBeJS
status: PUBLISHED
createdAt: 2022-02-18T15:51:53.790Z
updatedAt: 2022-02-21T16:30:53.405Z
publishedAt: 2022-02-21T16:30:53.405Z
contentType: updates
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: search-resolve-hides-number-product-stock
legacySlug: search-resolve-hides-number-product-stock
announcementImageID: ""
announcementSynopsisEN: To improve data privacy, search-resolver no longer displays the number of products in stock
---

We have updated the [`search-resolver@0.x`](https://github.com/vtex-apps/search-resolver) API, an application necessary for the operation of the store search, to hide sensitive data related to the store's inventory. As of 3/20/22, the number of products in stock will no longer be displayed by [VTEX Search GraphQL](https://github.com/vtex-apps/search-graphql).

Stores using [VTEX Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) will not be affected.

## What has changed?

We have removed the option of displaying the exact number of products in a store's inventory via `search-resolver@0.x` for customers using VTEX native search. This field will now be omitted from the response received by VTEX Search GraphQL.

For more details, see our [release note](https://developers.vtex.com/vtex-developer-docs/changelog/update-on-search-resolver0x-api-response) about this update.

## Why did we make this change?

Previously, you could see the number of items in stock through the `search-resolver@0.x` API. However, since inventory data is sensitive and the API is public, we decided to hide this information.

## What needs to be done?

No action is needed. The change will be automatically implemented.   

If you use this data in your store (to indicate that a product is running out of stock, for example) you need to contact [our Support](https://support.vtex.com/hc/en-us/requests) to keep displaying this information.

<div class="alert alert-warning">
<p>Please note that if the store decides to display the number of products in stock, this information will be public and can be accessed using <a href="https://github.com/vtex-apps/search-graphql">VTEX Search GraphQL</a>.</p>
</div>
</div>

