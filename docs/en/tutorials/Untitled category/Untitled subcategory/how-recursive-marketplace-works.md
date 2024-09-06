---
title: 'How Recursive Marketplace works'
id: 6Cfx9xrJb61RZFc2GZaxCv
status: ARCHIVED
createdAt: 2019-03-12T21:51:12.693Z
updatedAt: 2019-12-31T15:27:53.350Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Channels
author: 6AcGyun1hSWewU8YcaQiO
slug: how-recursive-marketplace-works
locale: en
legacySlug: how-recursive-marketplace-works
subcategoryId: unknown-subcategory
---

Previously, for a VTEX store to be able to sell products from its franchises in an external marketplace, it was necessary to set up the integration of all franchise stores, that is, of all sellers, with the desired marketplace.

Such structure, in addition to being non-scalable, wastes VTEX's omnichannel capabilities as the use of _change seller_, a feature that grants marketplaces autonomy to exchange sellers, that is, for the exchange of those who deliver the order.

With the __Recursive Marketplace__, all [franchise accounts](/tutorial/what-are-franchise-account-and-seller-white-label?locale=en) are already fully integrated to the main account. This means that when the main account sets up an integration with an external marketplace, the franchise accounts will automatically be integrated as well, no longer being necessary to manage each franchise individually in order to set up its integration with the marketplace.

By allowing the entire inventory from a physical store network to be effortlessly integrated into external marketplaces, the Recursive Marketplace feature creates __chain orders__, that is, orders from intermediate agents whose flow is to take the order from its source ([marketplace](/tutorial/what-is-a-marketplace?locale=en)) to its destination ([seller](/tutorial/what-is-a-seller?locale=en)).

To better understand this scenario, suppose a franchise account wants to sell its products in an external marketplace. The main account will act as a _seller_ of the marketplace in question and at the same time as the _marketplace_ of the franchise account. Therefore, chain orders have characteristics that come both from _marketplaces_, because they take the role of a seller's marketplace, and _sellers_, since they are also sellers of a marketplace.

Thus:

- __When a VTEX store is the source of an order__: Marketplace order with Checkout Workflow.

- __When a VTEX store is the destination of an order__: Seller order with Fulfillment Workflow.

- __When a VTEX store is intermediate in the order flow__: chain order with __Chain Workflow__:

![marketplace-recursivo-chain-order-workflow](https://images.ctfassets.net/alneenqid6w5/1mYtSFQxV7pnlrp746nnQ4/336550750f99d86b90851742fda8f724/marketplace-recursivo-chain-order-workflow.png)


## Setup

To use this feature, the store that will take the role of the marketplace in the order flow (the link closest to the customer) must adjust its __Checkout APIs__.

In addition to the new `marketplaceServiceEndpoint` and `marketplaceOrdergroup` fields, the Checkout placeOrder API will receive the `marketplacePaymentValue`, just as the Fulfillment API would receive it until today, with the information that the affiliate owes it. This makes transaction not required in the order.

In addition, a route has been created for progressing the order after marketplace approval. The marketplace must also support a route to be notified of the seller's (or of the chain agent) cancellation and of the invoice from the seller (or from the chain agent).


#### PlaceOrder

Request for a __Order insertion__:

- Method: `PUT`

- URL: `{host}api/checkout/pvt/orders?sc={sc}&affiliateId={affiliateId}`

>e.g.:

```
{
    "items": [
{
    "id": "8",
    "quantity": 1,
    "seller": "1",
    "price": 12
},
{
    "id": "36",
    "quantity": 1,
    "seller": "1",
    "price": 120
}
    ],
    "clientProfileData": {
"email": "sicrano@mailinator.com"
    },
    "shippingData": {
"attachmentId": "shippingData",
"logisticsInfo": [
    {
        "itemIndex": 0,
        "selectedSla": "Retirada (14b25e5)",
        "selectedDeliveryChannel": "pickup-in-point",
        "price": 0
    },
    {
        "itemIndex": 1,
        "selectedSla": "Normal",
        "selectedDeliveryChannel": "delivery",
        "price": 0
    }
],
"selectedAddresses": [
    {
        "addressId": "-4581767308704"
    }
]
    },
	"marketplacePaymentValue":1550,
	"marketplaceOrderGroup":"testeSchirmer10",
	"marketplaceServicesEndpoint":"http://portal.vtexcommerce.com.br/api/oms?an=qamarketplace"
}
```

- __Note that `AffiliateId`, `marketplacePaymentValue`, `marketplaceOrderGroup` and `marketplaceServicesEndpoint` are the new mandatory fields. The `paymentData` field is no longer mandatory.__


#### Marketplace Order Authorization 

Route for the marketplace to notify the chain order that its progress has been approved:

- Method: `POST`

- URL: `{host}/api/checkout/pvt/orders/{orderId}/receipts/marketplace-order-authorization`

> e.g.:

```
{
"marketplaceOrderGroup": "{Marketplace order ID or ordergroup}",
"authorizationReceipt":  {
        "date": "{date}",
        "receipt": "{receipt}"
    }
}
```
- __Note that `orderId` is the Order chain ID.__

#### Cancel notification

Marketplace route for the chain order to inform about an order cancellation:

- Method: `POST`

- URL: `{host}/pvt/orders/order-group/{orderGroup}/notifications`

>e.g.:

```
{ 
"id":"sellerOrderCancelled", 
"sellerOrderId": {Order ID in our system}
}
```

- __Note that `orderGroup` is the marketplace order ID or ordergroup__.


#### Invoice 

Marketplace route for the chain order to inform about the order invoice:

- Method: `POST`

- URL: `{host}/pub/orders/order-group/{orderGroup}/invoice`

>e.g.:

```
{
	\"invoiceNumber\":\"7999972\",
	\"invoiceValue\":7450,
	\"issuanceDate\":\"2019-02-07T02:00:00.000Z\",
	\"invoiceUrl\":\"http://www.invoiceu.rl\",
	\"invoiceKey\":\"799\",
	\"trackingNumber\":\"9997LUX\",
	\"trackingUrl\":\"http://www.trackingu.rl\",
	\"courier\":\"All postal codes\",
	\"items\": [
				{
			     \"id\": \"1231\",
			     \"price\": 7450,
			     \"quantity\": 1
}
          
```   
Response model:

```
{
"date": "2018-11-21T11:50:09.9994509-02:00",
"orderId": "876053333998-01",
"receipt": "95233cf2078d418ba77155380c18f398"
}

```
