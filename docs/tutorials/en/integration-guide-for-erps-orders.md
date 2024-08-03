---
title: 'Integration guide for ERPs -  Orders'
id: 3w09vFuYoUKcUyweWguoma
status: DRAFT
createdAt: 2017-09-11T22:24:49.039Z
updatedAt: 2020-06-04T01:06:08.130Z
publishedAt: 
firstPublishedAt: 2017-09-11T22:36:11.243Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: integration-guide-for-erps-orders
locale: en
legacySlug: integration-guide-for-erps-orders
subcategory: 5fKgQZhrCw88ACy6Su6GUc
---

The single reason for the existence of a store is selling. That means not only receiving orders put by customers, but also fulfilling those orders efficiently. 

The bigger the operation, the greater is the need to have an automated platform for handling the orders received from different channels. 

In this article you will find the primary method for getting the orders you receive from your VTEX store into your fulfillment platform.

# Overview

An order integration comprises four moments, each one being a small process in itself.

![ERP Orders 1](https://images.contentful.com/alneenqid6w5/7MtCGP7jpKOO2gKa8muGwO/481c6346e0d216f1cbe0588dc79eb617/ERP_Orders_1.png) 

# Order integration steps

Let’s take a closer look at each of the order integration steps.

## Download order

First thing you need to download an order is to know the right time to do it. To help you with that, VTEX provides each store with an Orders Feed. This service notifies whoever watches it about major changes to the order in its OMS workflow, especially order status changes.

After deciding it is time to take an order into your fulfillment platform, you just download its details and tell the feed that you don’t need it to send you that event again, as your interest in it is gone.

In the end, for the processed orders, you send a “Start Handling” message the OMS.

![ERP Orders 2](https://images.contentful.com/alneenqid6w5/3SUWupt48gSG2iqM2q8qEA/28a578fa22944fac74f7f9d9121506ca/orders-integration-download.png) 

### API calls


__1. Take feed event:__

[https://developers.vtex.com/reference/feed-v2-deprecated#getfeedorderstatus](https://developers.vtex.com/reference/feed-v2-deprecated#getfeedorderstatus)

```
curl --request GET \
  --url 'https://{{accountName}}.myvtex.com/api/orders/feed?maxlot={{maxLot}}' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}’
```

__2. Get order detail:__

[https://developers.vtex.com/reference/orders#getorder](https://developers.vtex.com/reference/orders#getorder)

```
curl --request GET \
  --url 'https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}'
```

__3. start-handling:__

[https://developers.vtex.com/reference/orders#starthandling](https://developers.vtex.com/reference/orders#starthandling)

You will also see this call in other steps of the integration process, only changing the target event.
Calling the "start-handling" transition is very important, as this is the operation that links order and stock count integration with VTEX Logistics stock reservations. In this step the order will be changed from "Ready for handling", will go on "start handling" and will stop on "preparing Delivery".

```
curl --request POST \
  --url 'http://{{accountname}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}/start-handling' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}'
```

__4. Ack feed:__

[https://developers.vtex.com/reference/feed-v3#commititemfeedorderstatus](https://developers.vtex.com/reference/feed-v3#commititemfeedorderstatus)

```
curl --request POST \
  --url 'https://{{accountName}}.myvtex.com/api/orders/feed' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '```javascript
{
    "handles":[
        "AQEBSM/bSqonHYtx+UrHdbuJ0i7M9yMbI2jtYwMIPdEc4BenuneaCTC9VEJ3dgAy1XtfQvHBvgwZTO8LvGObIKNqiKXDZiMKY25vK+pblZEqf1pWdLMugu5XoHA5ZAd4IcBcXrBcrlr1GU8uvPEBoVLOsVBP9IAxIZkkeEedIDg3K6GPyEXVuPlTEYb/0OCunEGxWF+AZ1frFdXh7ulORTcuqO5oDlBGbpD+QYzCmF4mUZtQ0VVWh9icM1QBVh6PlJ0D/lfwnJKWpBn3jf8c+DTm7sD7wb1Lcz9uWMLhDtPwvH9vue4MvKU9sCahEQe7K5jWuwwb54szGbFKdfcACsTSQ9WlyBfMdbV83c27k68G3cnaBFExkC1MLHHE9UzpQ6l4s43BT4k95ocgMXffnj/HMUYXn+OCvlvjytY59x1OCRE="
    ]
}
```'
```

## Invoice

Now the order is being processed by your fulfillment platform. During this process, you may need to make changes to the original order, be it because of stock rupture, or any other reason. You may want to remove, add or change items, causing or not changes in order value. 

When you are ready to deliver the order, it is time to tell VTEX you are ready, so that payment authorization may be captured and your customer be notified about the progress.

![ERP Orders 3](https://images.contentful.com/alneenqid6w5/5UGtFvC0UwoEoEcqQk8kGa/249a691293a7f195257f5c161565cf5c/ERP_Orders_3.png)

### API calls

__1. Send changes to web store:__

[https://developers.vtex.com/reference/orders#registerchange](https://developers.vtex.com/reference/orders#registerchange)
```
curl --request POST \
  --url 'http://{{accountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}/changes' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '{
  "reason": “Promotion by phone.”,
  "discountValue": 1000,
  "incrementValue": 0,
  "itemsRemoved": [
    {
      "id": "234794",
      "price": 600,
      "quantity": 2
    }
  ],
  "itemsAdded": [
    {
      "id": "234788",
      "price": 200,
      "quantity": 1
    }
  ]
}’
```

__2. Send invoice to web store:__

[https://developers.vtex.com/reference/invoice#invoicenotification](https://developers.vtex.com/reference/invoice#invoicenotification)
```
curl --request POST \
    --url 'http://{{accountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}/invoice' \
    --header 'accept: application/json' \
    --header 'content-type: application/json' \
    --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
    --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
    --data '{
  "type":"Output",
  "issuanceDate":"2010-01-31",
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
}’
```

## Track order

The last part of your order management is sending order tracking information to VTEX. Although it is not a necessary step to have the order get to the customer, it is one of the most important features for a good post sales experience. Nothing like knowing the whereabouts of that so expected stuff you bought!

There is no hard limit in the number of tracking messages that can be added to an invoice. Usually messages are added for each tracking event until de items are delivered to the customer. In the case of digital goods, this last event would be the item download URL.

It's important to notice that this information is actually a set of attributes of the invoice. So, it can be sent together with the invoice, when sending it to the web store in case you have this information at that time.

![ERP Orders 4](https://images.contentful.com/alneenqid6w5/1v0Mk0y5a0uAmgcGmgAks4/6d416ec4b79faa89330d683a32c6905c/ERP_Orders_4.png) 

### API calls

__1. Send courrier info to web store:__

[https://developers.vtex.com/reference/invoice#invoicenotification](https://developers.vtex.com/reference/invoice#invoicenotification)

```
curl --request POST \
  --url 'https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}/invoice' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '```javascript
{
 "type":"Output",
 "issuanceDate":"2010-01-31",
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

__2. Send tracking messages to web store:__

[https://developers.vtex.com/reference/invoice#updatepartialinvoicesendtrackingnumber](https://developers.vtex.com/reference/invoice#updatepartialinvoicesendtrackingnumber)

```
curl --request PATCH \
  --url https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}/invoice/{{invoiceNumber}} \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}' \
  --data '```javascript
{
  "trackingNumber": "87658",
  "trackingUrl": null,
  "courier": null
}
```
## Bonus Step: Cancel Order

When, for any operational reason, you need to cancel the order being processed, you may send a “Cancel” message to the OMS workflow. If the order is in a state that does not allow cancellation, an error will be raised.

__Attention__: orders with invoice cannot be canceled.

### API call

[https://developers.vtex.com/reference/orders#cancelorder](https://developers.vtex.com/reference/orders#cancelorder)
```
curl --request POST \
  --url 'https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}/cancel' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-vtex-api-appkey: {{X-VTEX-API-AppKey}}' \
  --header 'x-vtex-api-apptoken: {{X-VTEX-API-AppToken}}'
```
