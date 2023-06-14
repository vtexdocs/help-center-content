---
title: 'Pricing API Allows Negative Values'
id: 64gkWnDs5pvv8Ny1TJtTI0
status: PUBLISHED
createdAt: 2023-03-20T20:09:54.998Z
updatedAt: 2023-03-20T20:09:55.649Z
publishedAt: 2023-03-20T20:09:55.649Z
firstPublishedAt: 2023-03-20T20:09:55.649Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: pricing-api-allows-negative-values
kiStatus: Backlog
internalReference: 774548
---

## Summary


Currently, the PUT Price API allows the input of negative values via PUT API Payload, if you set the markup and baseprice to negative values, you'll set the product as unavailable.




##

## Simulation


On the API https://api.vtex.com/account/pricing/prices/1

Set the following price:

`{`
`  "itemId": "1",`
`  "listPrice": null,`
`  "costPrice": 11.9,`
`  "markup": -100,`
`  "basePrice": null,`
`  "fixedPrices": [ ]`
`}`

The response will be:

 ![](https://vtexhelp.zendesk.com/attachments/token/P3rVVQbx6nfqtX2W1UMAbb0V8/?name=image.png)

Which breaks the pricing logic and makes the product unavailable, since the checkout and catalog applications aren't able to deal with negative price values.



##

## Workaround


n/a





