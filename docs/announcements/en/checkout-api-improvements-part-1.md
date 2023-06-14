---
title: 'Checkout API improvements - Part 1'
id: 5B4Qb4ffB5JgGrJNY3572l
status: DRAFT
createdAt: 2019-05-15T19:18:26.652Z
updatedAt: 2022-07-21T12:54:15.866Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: authors_59
slug: checkout-api-improvements-part-1
locale: en
legacySlug: checkout-api-improvements-part-1
announcementImageID: ''
announcementSynopsisEN: 'Find out more about the latest checkout API improvements and learn how to adapt the new features'
---

Our development team is constantly striving towards improving API performance, by adding new functionalities and increasing API efficiency. As a consequence, some behaviors and functionalities considered deprecated could be discontinued in the next major Checkout API version.

By updating you on the latest developments, we suggest that you already start the process of updating your store's integrations and customizations, with an eye on the latest solutions offered by our system. 

<div class="alert alert-warning">
The layout of the current Checkout API continues to function normally, however, it is imperative to start implementing the improvements described below. Even though no official launch date for the new Checkout API has been set yet, we can confirm that the features described below will be discontinued.
</div>

## Cart and order address

__What will be discontinued:__
The `address` field within `shippingData`.

__Reason for discontinuation:__
It's already possible for a cart with various items to have more than one address (a delivery address and a couple of pickup addresses).

__New format:__
The `selectedAddresses` field within `shippingData` contains a list of all addresses used for the cart. In each item's `logisticsInfo`, you can find the `addressId` field which shows you what address is used when purchasing that item.

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
				"receiverName": "Jo****** ********",
				"addressId": "3064755158330",
				"postalCode": "******016",
				"city": "San Francisco ** *******",
				"state": "CA",
				"country": "USA",
				"street": "1**h ***nue",
				"number": "***",
				"neighborhood": "Ing******",
				"complement": null,
				"reference": null,
				"geoCoordinates": []
			  }
			],
			...
		}
```

## User's order list

__What will be discontinued:__
Checkout route (__GET__ `{host}/api/checkout/pub/orders`) used to obtain a user's order list.

__Reason for discontinuation:__
The new route will allow paging and filters. In addition, the new route is faster, using the same indexation as the orders system. 

__New format:__
Use the __GET__ `{host}/api/oms/user/orders/?page=1` route with user authentication cookies. The reply contains an orders list summarizing information, data and paging.

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

## Cart access using cookies

__What will be discontinued:__
The `aspxauth` cookie used to obtain access to the shopping cart.

__Reason for discontinuation:__
At present, the [shared cart feature](/tutorial/what-is-the-shared-cart--3oKJZfoAoUm8g0ukCIGsUu) makes it possible for than one customer to add, remove or update items and information from the same cart, through the use of an identification parameter in your URL. The `aspxauth` cart access cookie is therefore rendered obsolete in the API reply, being kept only for compatibility issues.

__New Format:__
The next major Checkout API version does not use this cookie in its reply.

## Access to the Order Placed using cookie

__What will be discontinued:__
The `VTEX_CHKO_Auth` cookie, used to access the __order placed__ screen.

__Reason for discontinuation:__
The discontinued cookie does not have a friendly name, that would correctly inform its role. The new cookie will have a more coherent name.

__New format:__
The `CheckoutDataAccess` cookie must be read in order to access the Order Placed screen through the API. This cookie is returned with the reply of the `/transaction` route, which contains the `order-group` ID and which must be forwarded in the header to the `pub/orders/order-group/order-group-id` API, by an anonymous user.

__Example:__
The cookie should be forwarded in the header using the following format:
`CheckoutDataAccess=VTEX_CHK_Order_Auth={{token}}`

## Multiple deliveries

__What will be discontinued:__
In its current form, without the availability of the **multiple deliveries** resource, the Checkout API only permits the use of delivery options common to all cart items. When the creation of an intersection of delivery methods for cart items is impossible, and in order to not cancel the purchase, the API converts the distinct delivery methods available to appear as a single method. This behavior will be discontinued.

__Reason for discontinuation:__
This behavior, forcing different delivery methods to appear as one, can cause ERP order integration problems. This forced intersection will no longer be necessary once the new multiple deliveries functionality is launched.

__New format:__
When no intersection between item delivery methods is available, the Checkout API chooses a specific delivery method for each item, thus allowing the order to be placed. In order for this to happen, you will need to request the activation of multiple deliveries in the Checkout API.

## Checkout API’s new major version release

Announcements regarding ongoing improvements will be released in several stages, as more functionalities are underway. Prior notice will be given once a launch date for the new major Checkout version is set.
