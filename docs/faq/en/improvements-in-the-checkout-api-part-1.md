---
title: Improvements in the Checkout API - Part 1
id: 5RMSc6Va4YJwczJ5kd7Y97
status: DRAFT
createdAt: 2019-01-30T19:31:35.982Z
updatedAt: 2022-07-21T12:53:16.650Z
publishedAt: 
firstPublishedAt: 2019-01-30T19:33:55.811Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: 62vZqGGY3y5ptmG8gYo2r9
slug: improvements-in-the-checkout-api-part-1
legacySlug: which-parts-of-the-checkout-api-can-be-replaced-in-the-next-version
---

Our development team is constantly improving the performance of our APIs. This means some parts considered outdated can be removed in the next versions.

In this article, we'll list all parts of the Checkout V2 API that are not likely to be part of the next release.

<div class="alert alert-warning">
This article will be in permanent update until the release of the Checkout API V3. However, you should be aware of changes not described here that may be implemented in V3.
</div>

<div class="alert alert-warning">
The purpose of this article is to allow you to begin the process of updating your store integrations and customizations, considering the new solutions offered by the system. Therefore, we recommend that you stay tuned and do not leave changes to the last minute.
</div>


## Address in the cart and in the order

- __What will be deprecated:__ field `address` inside `shippingData`.

- __Reason:__ today it's possible for a multi-item cart to have more than one address (for example, a delivery address and a pickup one).

- __New method:__ inside `shippingData` now exists the `selectedAddresses` field, which contains a list of all addresses used in the cart. In the `logisticsInfo` of each item, there is also the `addressId` field, which tells you which address is used in the purchase.

__Example:__

```
"shippingData": {
			"logisticsInfo": [
			  {
				"itemIndex": 0,
				"addressId": "3064755158330",
				...
			  }
			],
			"selectedAddresses": [
			  {
				"addressType": "residential",
				"receiverName": "Gui****** ********",
				"addressId": "3064755158330",
				"postalCode": "******040",
				"city": "Rio ** *******",
				"state": "RJ",
				"country": "BRA",
				"street": "Pra** ** *****ogo",
				"number": "***",
				"neighborhood": "Bot*****",
				"complement": null,
				"reference": null,
				"geoCoordinates": []
			  }
			],
			...
		}
```

## User's order list

- __What will be deprecated:__ checkout route (__GET__ `{host}/api/checkout/pub/orders`) to get the list of the user's orders.

- __Reason:__ the new route allows paging and filters. In addition, it is faster, since it uses the same indexing of the Admin orders screen (formerly the OMS).

- __New method:__ use the __GET__ `{host}/api/oms/user/orders/?page=1` route with the user authentication cookies. The response contains a list of orders (with a summary of their data), paging data and summarization.

__Example:__
  
```
	{
	  "list": [
	    ... 
	  ],
	  "facets": [],
	  "paging": {
		"total": 37,
		"pages": 3,
		"currentPage": 1,
		"perPage": 15
	  },
	  "stats": {
		"stats": {
		  "totalValue": {
			"Count": 37,
			"Max": 0,
			"Mean": 0,
			"Min": 0,
			"Missing": 0,
			"StdDev": 0,
			"Sum": 0,
			"SumOfSquares": 0,
			"Facets": {}
		  },
		  "totalItems": {
			"Count": 37,
			"Max": 0,
			"Mean": 0,
			"Min": 0,
			"Missing": 0,
			"StdDev": 0,
			"Sum": 0,
			"SumOfSquares": 0,
			"Facets": {}
		  }
		}
	  }
	}
```
