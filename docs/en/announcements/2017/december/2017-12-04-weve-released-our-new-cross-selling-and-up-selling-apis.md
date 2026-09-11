---
title: "We've released our new Cross-selling and Up-selling APIs"
id: 37Lc6sI2owMCiUamocgAcc
status: PUBLISHED
createdAt: 2017-12-04T18:54:28.850Z
updatedAt: 2024-01-04T15:05:24.804Z
publishedAt: 2024-01-04T15:05:24.804Z
contentType: updates
productTeam: Marketing & Merchandising
author: 245tA425AIeioKAk2eaiwS
slugEN: 2017-12-04-weve-released-our-new-cross-selling-and-up-selling-apis
locale: en
legacySlug: weve-released-our-new-cross-selling-and-up-selling-apis
announcementImageID: 'undefined'
announcementSynopsisEN: "We've released our Cross-selling and Up-selling APIs to all our customers and partners."
---

We've released our Cross-selling and Up-selling APIs to all our customers and partners. Using these sales techniques, you will be able to display several offers in your showcase with a few simple API calls.

## What has changed?

Now you can make Cross-selling and Up-selling requests in REST APIs. These requests work in the same way as all other VTEX APIs.

Below is a list of the newly available requests.

### Who Saw Also Saw:

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/whosawalsosaw/{{productId}}`

This API will return the products that __were seen__ by customers who also __saw__ a certain product.

### Who Saw Also Bought:

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/whosawalsobought/{{productId}}`

This API will return the products that __have been purchased__ by customers that __have seen__ a particular product.

### Who Bought Also Bought:

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/whoboughtalsobought/{{productId}}`

This API will return the products that have also __been purchased__ by customers who __have bought__ a particular product.

### Accessories:

__GET__ 

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/accessories/{{productId}}`

This API will return the products that were registered as __accessories__ or __complements__ of a certain product.

### Similar Products: 

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/similars/{{productId}}`

This API will return products that have been registered as __similar products__ for a particular product.

### Suggestions: 

__GET__ 

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/suggestions/{{productId}}`

This API will return the products that were registered as Up-selling __suggestions__. It is worth mentioning that this product will only be shown if the value of the suggestion is greater than that of the product where the suggestion was registered.

## What needs to be done?

For more information, see the [API documentation](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/crossselling/whosawalsosaw/-productId-?endpoint=get-/api/catalog_system/pub/products/crossselling/whosawalsosaw/-productId-).
