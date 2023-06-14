---
title: 'How to display the product shelf of a specific seller'
id: 6mMXWCrxGEYegIoSkSmiOQ
status: DRAFT
createdAt: 2019-01-10T14:06:30.745Z
updatedAt: 2020-07-28T16:48:10.306Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:21:39.211Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slug: how-to-display-the-product-shelf-of-a-specific-seller
legacySlug: 
subcategory: 54gbzsku02c4bKmgFbp3v3
---

__Working with VTEX Session and the concept of Region in provinding customized browsing__

It is now possible to set a Region that takes a specific seller or group of sellers into account.

RESTRICTION

The region must necessarily include the main seller (ecommerce). 
VTEX Session must also be installed. 

However, it is possible to disregard the inventory of this main seller from the product shelf. Using sales policy, the retailer can move towards one which does not cover the inventory of the main seller.

As a result, when a customer would browse the site, only products covered by the specific sales policy for that particular region would be displayed.

__[ main seller, preferred seller ]__

Since the inventory of the `main seller` is not included in this policy, we will only consider the *preferred seller*.

This feature is restricted to sellers using White Label.

--

For example:

A retailer would like to allow its customers to pick a specific store site to browse on.

Let's assume a family goes shopping and can browse the available products in that store beforehand.

This scenario implies that upon accessing the retailer's ecommerce, the option to choose a store (seller) is available.

The site should also load a new sales policy when the user accesses its page.

More customizations could still be made available, such as a customized UI, using the multi-store resource - i.e. store.retailer.com

When choosing the store, its storefront should load the site using the querystring parameter 
`?regionId={{value}}` in which the value should be encoded in base64 and follow the default: *SW#mainSeller;preferredSeller*

This querystring will be recognized by the app within the VTEX Session system. This system manages the entire session and has two cookies: Segment and Session.

An article detailing VTEX Session is available.

One the functions Session has, upon creating the Region, is informing the Portal about product display conditions and as such, the Portal would only display products available in the specific Region chosen.

The simulation launched at Checkout by the Portal is similar to the following:

__POST__ http://{{accountName}}.vtexcommercestable.com.br/api/checkout/pub/orderForms/simulation?rnbBehavior=0&sc=2

    {
  "items": [ 
  {
  "id": "61628",
  "quantity": 1,
  "seller": "1" 
  }
       ],
  "country": "BRA",
   "postalCode": "22291070",
  "geoCoordinates": [],
  "shippingData": {

      "logisticsInfo": [
  {
      "itemIndex": 0,
      "regionId": "U1cjbG9qYWFuaW1hbGU7YW5pbWFsZW9zY2FyZnJlaXJl"
  }
      ]

     }
}

In the example above, SKU 61628 is only available in the seller's inventory. When looking at the main store, specifically at sc=2, the product in question is out of stock.


