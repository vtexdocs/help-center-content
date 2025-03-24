---
title: 'VTEX Invoice Notifier'
id: 5yEdNF95nwbJBbWst128pL
status: ARCHIVED
createdAt: 2019-08-05T14:15:29.750Z
updatedAt: 2020-04-08T14:40:07.701Z
publishedAt: 
firstPublishedAt: 2019-08-05T16:04:44.610Z
contentType: tutorial
productTeam: Post-purchase
author: 3uCjaRpzeMieQWwWycYAMG
slugEN: vtex-invoice-notifier
locale: en
legacySlug: vtex-invoice-notifier
subcategoryId: 54gbzsku02c4bKmgFbp3v3
---

![chart EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Other/Uncategorized/vtex-invoice-notifier_1.png)

## App installation - VTEX Invoice Notifier

User should install the App from VTEX App Store - app.vtex.com

*Or using the VTEX IO CLI - vtex install vtex.invoice-notifier@0.x*

When proceeding with the installation, a setup page will appear, in which the user should insert the endpoint responsible for communication with the invoice issuing system.

![install-app](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Other/Uncategorized/vtex-invoice-notifier_2.png)

## OMS notify invoice issuer

Once the endpoint is added to the App, OMS recognizes that the store is able to notify external invoicing systems.

In the order, the operator must select the already invoiced package or items and create a new notification: 

![notify-invoicer1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Other/Uncategorized/vtex-invoice-notifier_3.png)

![notify-invoicer2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Other/Uncategorized/vtex-invoice-notifier_4.png)

When the OMS user clicks the __Request Invoice__ button, the app would perform a POST request to the registered App endpoint with the following BODY example:

```json
{
  "orderId": "123",
  "notificationId": "fd3f5e70-8b60-11e8-b707-1195e463c587",
  "callbackUrl": "https://instore.myvtex.com/_v/invoice-notifier/123/invoice"
}
```

The invoice issuer should respond to this call with __200, 201, 202 or 204__, in a way that enables OMS to understand if the notification was successfully processed, and in case it was not, the UI will display a communication failure message.

### CallbackUrl property

The *callbackUrl* is a __property__ that specifies which address should be used to send __a created invoice__. This flow is described in the first chart of this article, above.

This property should be used to know which address sends the Invoice.

Once successfully notified, the APP records this notification in VBASE (databank).

![callBackProperty](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Other/Uncategorized/vtex-invoice-notifier_5.png)

## Invoice issuer gets invoice details

With the notification at hand, the invoice issuer should get this invoice's details (notification) from VBASE, since the communication API only gives the notification ID and order.

__GET__
```
http://{{accountName}}.myvtex.com/_v/invoice-notifier/:orderId/:notificationId
```
__HEADERS__

```
‘x-vtex-api-appkey’
‘x-vtex-api-apptoken’

ou

‘x-vtex-api-appkey’
‘VtexIdclientAutCookie'
```

__RESPONSE__

```
{
  "orderId": "123",
  "notification": {
    "id": "fd3f5e70-8b60-11e8-b707-1195e463c587",
    "items": [
      {
        "itemIndex": 0,
        "quantity": 1
      }],
    "changedItems": [ {
	"200342",
	 "230298"
	} ],
     "observation": "AGO2019"
  }
}
```

- orderId == Order ID
- notification.id == hash that identifies this picking request in VBASE.
- `items[0]` == array containing the item index and quantity present in this notification
- `changedItems[0]` == array of SKUs inserter in the order after the order placement 
- observation == string that receives an observation message written in the interface

In addition to searching for the complete Notification, it's still necessary to get the full order with details for each item, and subsequently search for any fiscal detail such as NCM (Mercosul Common Customs Number) in the catalog.

There is a specific API used to get all notifications related to an order in case the invoice issuer wishes to include a more thorough validation:

__GET__

```
{{accountName}}.myvtex.com/_v/invoice-notifier/:orderId/
```

## Get full order data

Upon being notified of a new order, having the order details at hand, you'll need to search for the full order, since the notification only saves the index of item that will be invoiced. Item array index present in the order.

### GET ORDER

__GET__

```
http://{{accountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}
```

This API's response contains the complete order data. In order to issue the invoice, it's necessary that some object data, such as Client Data, Delivery Data, Items Totalizators - shipping - discounts, item data, company registration data.

The backend should check whether the order already has an invoice and whether it has been billed (it's possible that it was only partially billed).

## Getting customs data for each product

VTEX has a product registration field called TaxCode, which receives a product's customs code. This field can be found in the order's details and can be used for calculating taxes using the fiscal parameter engine.

Some retailers don't use this field and set the customs code as a product specification. This model requires an additional catalog request in order to fetch these details:

__GET__

```
http://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/products/{{productId}}/specification
```

__RESPONSE__

```
[
   {
       "Value": [
           "6914.10.00"
       ],
       "Id": 19,
       "Name": "NCM"
   }
]
```

## Identify the order delivery type

An order can be one of two types: __Delivery__ or __Pickup-from-point__.

A delivery order contains the client's data, meaning all identification data necessary for an Electronic Tax Invoice (for states requiring this or a workplace accident insurance).

Pickup orders may or may not contain a client's identification. An order placed in inStore can be done so anonymously, without identifying oneself. This case warrants the issuing of an Electronic Tax Invoice (for specific states).

The way to identify if an order is Delivery or Pickup is by looking at the __shippingData.logisticsInfo[0].deliveryChannel__ object.

![shipping-type](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Other/Uncategorized/vtex-invoice-notifier_6.png)

## Inserting the tax invoice into an order

Once the invoice has been successfully sent to the tax revenue services, it must be included in OMS. This is done by sending it to the __callbackUrl__ property address.

The sent payload must be as follows:

__POST__ `{{callbackUrl}}`

Exemplo de callbackUrl: `https://{{account}}.myvtex.com/_v/invoice-notifier/{{orderId}}/invoice`

```
{
 "type":"Output",
 "issuanceDate":"2018-01-31",
 "invoiceNumber":"9999",   // tax invoice number
 "invoiceValue":"10000",  // final invoice value
 "invoiceKey": null,  // invoice access key
 "invoiceUrl": null,  // link to the simplified invoice or coupon
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
 
- id == SKU ID (available in GET ORDER `items[0].id`)
- invoiceNumber == invoice number
- invoiceValue == sum total of the sellingPrice SKUs -  - invoice + average shipping value of the items contained in the invoice
- invoiceKey == invoice key

OMS accepts multiple invoices, with the order only reaching the INVOICED status once the sum total of all invoices is equal to the order's total value.

OMS __doesn't__ save the invoice's XML, but merely the preview link.

## Deleting an invoice notification from the DB

After successfully inserting the Tax Invoice in the order, you need to delete the notification from the VBASE databank. This step is necessary to avoid a scenario in which a OMS user mistakenly deletes a notification only to try to notify once more. 

__DELETE__

`https://{{accountName}}.myvtex.com/_v/invoice-notifier/{{orderId}}/{{notification.id}}`

__HEADERS__

```
‘x-vtex-api-appkey’
‘x-vtex-api-apptoken’
ou
‘x-vtex-api-appkey’
‘VtexIdclientAutCookie'
```

## Partial order invoicing

Inventory shortage scenarios are common, meaning scenarios in which one or more items are unavailable for delivery. In such a scenario, the OMS operator has the option to partially invoice an order.

In cases of partial invoicing, it's important to pay attention to the shipping rate allocation.

The correct behavior is to follow the shipping rate allocation corresponding to the items within that partial invoice.

In the order's JSON, within the __logisticsInfo__, there is an array containing each product's shipping information (each product's index).

The allocation is by product, which means that if there is X amount of this product, but the partial invoice states an amount inferior to X, the rate allocation should be done for the number of items.

Ex.:
Let's suppose that you've only invoices 1 unit of a product, instead of the total available amount of 3. The item's shipping rate (U$ 2,50 in this example) will be divided by 3 (total number of available units):


```
"logisticsInfo": [
            {
                "itemIndex": 0,
                "selectedSla": "Normal",
                "lockTTL": "14d",
                "price": 250,
                "listPrice": 250,
                "sellingPrice": 250,
                "deliveryWindow": null,
                "deliveryCompany": "Carrier",
                "shippingEstimate": "3bd",
                "shippingEstimateDate": "2018-11-05T12:11:36.2541081+00:00",
            },
            {
                "itemIndex": 1,
                "selectedSla": "Normal",
                "lockTTL": "14d",
                "price": 250,
                "listPrice": 250,
                "sellingPrice": 250,
                "deliveryWindow": null,
                "deliveryCompany": "Carrier",
                "shippingEstimate": "3bd",
                "shippingEstimateDate": "2018-11-05T12:11:36.2541081+00:00",                  
              }
        ]
```

## Return notification

The notification that creates a return tax invoice is an output type one.

```
"type": "Output"
```

There are, however, two possible return models. When a return is done in the brick-and-mortar store when the purchase was originally made, while still being within the credit card return policy able time, we call it cancellation.

Returns for orders made in other locations can also be done, but in these cases the notification will take the information contained in the __observation__ field into account.  

__RETURN__

```
{
    "orderId": "SLR-938543595220-01",
    "notificationId": "1234"
}
Notification:
{
    "type": "Input",
    "observation": "inStore: { \"tradeAccount\": \"storename\" }",
   "items": [...],
}
```

__CANCELLATION__

```
{
    "orderId": "SLR-938543595220-01",
    "notificationId": "1234"
}
Notification:
{
    "type": "Input",
    "observation": "inStore",
   "items": [...],
}
```

