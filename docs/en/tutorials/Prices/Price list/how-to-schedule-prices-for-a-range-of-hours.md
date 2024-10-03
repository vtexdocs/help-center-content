---
title: 'How to schedule prices for a range of hours'
id: 682fvZR864UEGe4ugymYQS
status: ARCHIVED
createdAt: 2017-06-27T02:11:37.317Z
updatedAt: 2022-08-01T20:27:28.199Z
publishedAt: 
firstPublishedAt: 2017-06-27T17:48:57.747Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: how-to-schedule-prices-for-a-range-of-hours
locale: en
legacySlug: how-to-schedule-prices-for-a-range-of-hours
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

Among other scenarios, one of the most important points in a massive event such as Black Friday is to be able to establish prices x hour to limit the validity of a price in a period of time, optimizing the product profitability, and to disable it soon and get back to the regular price. 

## Scheduling through API
One of the options to schedule prices by hour is through a price API:

>ℹ️ [View API documentation](https://developers.vtex.com/reference/pricing-api-overview)

VTEX backend uses UTC time, where, for example, in Argentina that is GTM-3, to schedule a price x hour through API starting at 00h and finishing at 10h, it is necessary to send 3h more than the time to be scheduled. This is, if the price is to be valid at 00h, I should send 3h, and to finish at 10h, I should send 13h:

JSON Price API:
```
"validFrom": "2017-06-23T03:00:00Z",
"validTo": "2017-06-23T13:00:00Z"
```

The price will be automatically invalid at the scheduled time. 

>⚠️ **Important**: In case of a price change through the manager’s price interface and the change is saved, the hour schedule will be lost and only the date schedule will be filed.

## Scheduling through the spreadsheet

The other option is to perform a massive scheduling through a price spreadsheet. While the backend operates in UTC, the import of a price spreadsheet includes a pre-process that calculates the customer’s PC time and automatically adjusts the scheduling time, according to the local time. 

This means that, for example, in Argentina that is GTM-3, to schedule a price x hour through a Spreadsheet starting at 00h and finishing at 10h, the same time should be set up in the spreadsheet. 

This is, if the price is to be valid at 00h, I should send 00h, and to finish at 10h, I should send 10h:

Price Spreadsheet Columns:
```
“DateTo”: "2017/06/23 00:00:00",
“DateFrom”: "2017/06/23 10:00:00"
```

The price will be automatically invalid at the scheduled time.

>⚠️ **Important**: Just like in the API, in case of a price change through the manager’s price interface and the change is saved, the hour schedule will be lost and only the date schedule will be valid.
