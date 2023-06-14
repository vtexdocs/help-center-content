---
title: 'Formatting the order invoicing time via API'
id: HTD83Y8FMswUAgc4YaeYa
status: DRAFT
createdAt: 2017-12-18T18:14:17.484Z
updatedAt: 2022-08-30T22:01:56.346Z
publishedAt: 
firstPublishedAt: 2017-12-18T21:12:57.335Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: formatting-the-order-invoicing-time-via-api
locale: en
legacySlug: formatting-the-orders-time-of-billing-via-api
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

When submitting invoice data to a marketplace via API, be aware of the correct JSON format:

```
{
 "type":"Output",
 "issuanceDate":"2017-10-05T11:32:11",
 "invoiceNumber":"9999",
 "invoiceValue":"10000",
 "invoiceKey": null,
 "invoiceUrl": null,
 "courier": null,
 "trackingNumber": null,
 "trackingUrl": null,
 "items": [
   {
     "id": "1234",
     "price": 10000,
     "quantity": 1
    }
  ]
 }
```

The property responsible for informing the invoicing date and time is `issuanceDate`.

This field follows the UTC 0 time zone. If you want to include a time with a specific time zone (for example, "UTC -3"), you must use the following format:

`"issuanceDate": "2017-10-05T11:32:11-0300"`

Note that integrations that fetch order data from the VTEX system should also be aware of the time zone and make the necessary adjustments.

__Attention__: Do not use any spaces on the date.

See our [technical documentation](https://developers.vtex.com/reference/invoice#updatepartialinvoicesendtrackingnumber) for details on how the request should be formatted.
