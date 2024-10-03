---
title: 'How to add a second address to the order for invoicing purposes'
id: 6Mow9ibQPDOcEggNnujuA
status: ARCHIVED
createdAt: 2020-05-29T12:20:39.086Z
updatedAt: 2022-08-30T23:07:06.496Z
publishedAt: 
firstPublishedAt: 2020-05-29T12:32:19.734Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-add-a-second-address-to-the-order-for-invoicing-purposes
locale: en
legacySlug: how-to-add-a-second-address-to-the-order-for-invoicing-purposes
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

For B2B businesses, it is common to add to the invoice an address that is different from the one registered for delivery, since the location where the product will be received is often different from the billing address.

VTEX’s administrative dashboard allows you to add a second address only in the case of Points of Withdrawal - since in this case we consider that there will be no shipping address, but one for the Invoice.

For other scenarios, such as those referring to the B2B model, we suggest that the store register this option via the manipulation of the `orderForm` object.

The `orderForm` is the main data set of the checkout process at VTEX.
It consists of several sections, each with useful information that can be accessed and changed.

There are to ways to manipulate data from the `orderForm` to enter a second address:
- Using the vtex.js library.
- Through a request to VTEX’s Checkout API.
 
>⚠️ Although it is possible to create a custom interface superimposed on that of VTEX, containing the second address field, we do not recommend it.

## vtex.js

Vtex.js is a library of JavaScript functions that will do the request to the API for you. The function used for this is `sendAttachment`. Check out the documentation and necessary actions in the [specific library documentation](https://github.com/vtex/vtex.js/tree/master/docs/checkout#sendattachmentattachmentid-attachment-expectedorderformsections).

## API REST

In the `orderForm` object there is a field called` invoiceData`. We need to access it to include the second address. Within the `invoiceData` fields there is the `address` object, which will be fed with the address data.

To access it, make a POST to the following endpoint, with a body like the one of the example below:

`/api/checkout/pub/orderForm/{{orderFormId}}/attachments/invoiceData`

```json
{
    "address": {
        "postalCode": "22250-040",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "country": "BRA",
        "street": "Praia Botafogo",
        "number": "300",
        "neighborhood": "Botafogo",
        "complement": null,
        "reference": null,
        "geoCoordinates": [
            -43.18218231201172,
            -22.94549560546875
        ]
    }
}
```

The `{{orderFormId}}` value, in the call’s URL, must be replaced by the ID of the orderForm that you want to manipulate. The address data, as shown in the example, must be sent in the request’s body.
