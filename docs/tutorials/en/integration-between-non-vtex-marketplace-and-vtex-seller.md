---
title: 'Integration between non-VTEX Marketplace and VTEX Seller - Order Shipping and Processing Actions'
id: 5AiW7dZ4nGMDI9TAg43zmf
status: DRAFT
createdAt: 2019-09-16T12:52:46.627Z
updatedAt: 2022-02-03T19:17:44.983Z
publishedAt: 
firstPublishedAt: 2019-10-16T14:43:50.013Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: integration-between-non-vtex-marketplace-and-vtex-seller
locale: en
legacySlug: integration-between-non-vtex-marketplace-and-vtex-seller
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

<div class="alert alert-warning">
Check out the updated version of this <a href="https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide">marketplace integration guide</a> in our Developer Portal. 
</div> 

The final step in integrating a non-VTEX Marketplace with a VTEX Seller is to allow communication with the Seller about __orders__ placed on the Marketplace.

Six integration actions via REST API are part of this step:

1. Search SKU price, inventory and shipping data (cart simulation).
2. Implement routine that adds orders to Seller.
3. Implement routine that authorizes order dispatch from Seller.
4. Get Invoice info.
5. Enter carrier tracking code (if any).
6. Receive cancellation request (if it happens).

If you want to know more about the integration's general flow, access our article on [non-VTEX platform hosted marketplace integration guide]().

## 1) Search for shipping price, inventory and shipping data - Marketplace calls Seller's endpoint

<div class="">
  This is the same request that's used in the final stage of <a href="">integrating with the Seller's catalog</a>.
  </div>

When a product is inserted into the **Marketplace** cart or a change is made to the cart, the **Marketplace** should perform a cart simulation query with the *Seller* to check if price, inventory and shipping data currently applied remain valid.

Then, when the customer proceeds payment, another cart simulation should be performed, again to check if the SKU data is still valid.

### REST API call example:

Search for Seller SKU price, inventory and shipping data, in addition to simulating a cart with this data.

Endpoint: `https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={idcanal}&affiliateId={idafiliado}`

- Verb: **POST**  
- Content-Type:  **application/json**  
- Accept:  **application/json**

| Parameter     | Description     |
| ---------- | ---------- |
| AccountName       | VTEX Seller Account Name    |
| idcanal       | Trade Policy to be followed during cart simulation |
| idafiliado       | Affiliate Id considered during simulation |

More request body and response examples, in addition to each field's description, can be found in the third stage of [the article on Seller catalog integration]().

## 2) Send order to Seller - Marketplace calls Seller endpoint

When an **Marketplace** order is closed, the Marketplace calls a Seller endpoint via __Place Order API__ to send the order to the that Seller.

### REST API call example:

Endpoint: `https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc={idCanal}&affiliateId={idAfiliado}`

- Verb: **POST**  
- Content-Type: **application/json**  
- Accept: **application/json**

| Parameter     | Description     |
| ---------- | ---------- |
| AccountName       | VTEX Seller Account Name    |
| idcanal       | Trade Policy to be followed during cart simulation |
| idafiliado       | Affiliate Id considered during simulation |

#### Request body example:

```json
[
  {
    "marketplaceOrderId": "956",
    "marketplaceServicesEndpoint": "https://urlmarketplace/", 
    "marketplacePaymentValue": 16080,
    "items": [
      {
        "id": "2",
        "quantity": 1,
        "seller": "1",
        "commission": 0,
        "freightCommission": 0,
        "price": 9990,
        "bundleItems": [], 
        "itemAttachment": {
          "name": null,
          "content": {}
        },
        "attachments": [],
        "priceTags": [],
        "measurementUnit": null,
        "unitMultiplier": 0,
        "isGift": false
      }
    ],
    "clientProfileData": {
      "id": "clientProfileData",
      "email": "32172239852@gmail.com",
      "firstName": "Clark",
      "lastName": "Kent",
      "documentType": null,
      "document": "AAA-GG-SSSS",
      "phone": "9133381105",
      "corporateName": null,
      "tradeName": null,
      "corporateDocument": null,
      "stateInscription": null,
      "corporatePhone": null,
      "isCorporate": false,
      "userProfileId": null
    },
    "shippingData": {
      "id": "shippingData",
      "address": {
        "addressType": "Residential",
        "receiverName": "Clark Kent",
        "addressId": "Home",
        "postalCode": "66101",
        "city": "Kansas City",
        "state": "Kansas",
        "country": "USA",
        "street": "Ann Ave",
        "number": "431",
        "neighborhood": "Kansas",
        "complement": null,
        "reference": "Wyandotte County",
        "geoCoordinates": []
      },
      "logisticsInfo": [
        {
          "itemIndex": 0,
          "selectedSla": "FedEx",
          "lockTTL": "8d",
          "shippingEstimate": "7d",
          "price": 1090,
          "deliveryWindow": null
        }
      ]
    },
    "paymentData":null,
    "openTextField": null
  }
]
```

| Field     | Type     | Description     |  Mandatory?  | 
| ---------- | ---------- | ---------- | ---------- |
| marketplaceOrderId   | string    |        |      |
| marketplaceServicesEndpoint   | string    |        |     |
| marketplacePaymentValue   | integer    |        |      |
| items   | array de objetos   | Contains sales data from SKUs pertaining to that order |   |
| id   | string    | SKU ID as added in VTEX's database       |    |
| quantity   | integer    |  Number of items in cart      |    |
| seller   | string    |        |    |
| commission   | integer    |        |     |
| freightCommission   | integer    |        |     |
| price   | integer    |        |     |
| bundleItems   | array    |        |     |
| itemAttachment   | object    |        |     |
| name   | string    |        |     |
| content   | object    |        |     |
| attachments   | array    |        |     |
| priceTags   | array    |        |    |
| measurementUnit   | integer    |        |     |
| unitMultiplier   | integer    |        |     |
| isGift   | boolean    |        |      |
| clientProfileData   | object    |        |      |
| id   | string    |        |      |
| email   | string    |        |      |
| firstName   | string    |        |      |
| lastName   | string    |        |      |
| documentType   | string    |        |      |
| document   | string    |        |     |
| phone   | string    |        |      |
| corporateName   | string    |        |     |
| tradeName   | string    |        |    |
| corporateDocument   | string    |        |     |
| stateInscription   | string    |        |    |
| corporatePhone   | string    |        |     |
| isCorporate   | boolean    |        |    |
| userProfileId   | string    |        |    |
| shippingData   | object    |        |    |
| id   | string    |        |    |
| address   | object    |        |    |
| addressType   | string    |        |    |
| receiverName   | string    |        |    |
| addressId   | string    |        |    |
| postalCode   | string    |        |    |
| city   | string    |        |    |
| state   | string    |        |    |
| country   | string    |        |    |
| street   | string    |        |    |
| number   | string    |        |    |
| neighborhood   | string    |        |    |
| complement   | string    |        |    |
| reference   | string    |        |     |
| geoCoordinates   | array    |        |     |
| logisticsInfo   | objects array     |        |     |
| itemIndex   | integer    |        |    |
| selectedSla   | string    |        |    |
| lockTTL   | string    |        |    |
| shippingEstimate   | string    |        |    |
| price   | integer    |        |    |
| deliveryWindow   | string    |        |    |
| paymentData   | string    |        |    |
| openTextField   | string    |        |     |

#### Response body example:

```json
[
    {
        "marketplaceOrderId": "956",
        "orderId": "MBR-956",
        "followUpEmail": "9762a2a9028a4b5d8eb9a8ff909d15ce@ct.vtex.com.br",
        "items": [
            {
                "id": "2",
                "quantity": 1,
                "seller": "1",
                "priceTable": null,
                "commission": 0,
                "freightCommission": 0,
                "price": 13890,
                "bundleItems": [],
                "priceTags": [],
                "measurementUnit": "un",
                "unitMultiplier": 1.0000,
                "isGift": false
            }
        ],
        "clientProfileData": {
            "email": "fba45537f5c84d4092cf064da742fe3d@ct.vtex.com.br",
            "firstName": "Clark",
            "lastName": "Kent",
            "documentType": "SSN",
            "document": "AAA-GG-SSSS",
            "phone": "9133381105",
            "corporateName": null,
            "tradeName": null,
            "corporateDocument": null,
            "stateInscription": null,
            "corporatePhone": null,
            "isCorporate": false,
            "userProfileId": null
        },
        "shippingData": {
            "isFOB": false,
            "address": {
                "addressType": "Residential",
                "receiverName": "Clark Kent",
                "addressId": "Home",
                "postalCode": "66101",
                "city": "Kansas City",
                "state": "Kansas",
                "country": "USA",
                "street": "Ann Ave",
                "number": "431",
                "neighborhood": "Kansas",
                "complement": null,
                "reference": "Wyandotte County",
                "geoCoordinates": []
            },
            "selectedAddresses": [
                {
                  "addressType": "Residential",
                      "receiverName": "Clark Kent",
                      "addressId": "Home",
                      "postalCode": "66101",
                      "city": "Kansas City",
                      "state": "Kansas",
                      "country": "USA",
                      "street": "Ann Ave",
                      "number": "431",
                      "neighborhood": "Kansas",
                      "complement": null,
                      "reference": "Wyandotte County",
                    "geoCoordinates": []
                }
            ],
            "logisticsInfo": [
                {
                    "itemIndex": 0,
                    "selectedSla": "FedEx",
                    "addressId": "Home",
                    "selectedDeliveryChannel": "delivery",
                    "deliveryIds": [
                        {
                            "warehouseId": "1_1",
                            "dockId": "1"
                        }
                    ],
                    "lockTTL": "8d",
                    "shippingEstimate": "7d",
                    "price": 1090,
                    "deliveryWindow": null
                }
            ],
            "trackingHints": []
        },
        "paymentData": null,
        "customData": null
    }
]
``` 

| Field     | Type     | Description     |
| ---------- | ---------- | ---------- |
| marketplaceOrderId       | string       | Order ID as inserted by the Marketplace. Should be set by Marketplace itself.     |
| orderId       | string       |     |
| followUpEmail       | string       |     |
| items       | objects array       |     |
| id       | string       |     |
| quantity       | integer       |     |
| seller       | string       |     |
| priceTable       | string       |     |
| commission       | integer       |     |
| freightCommission       | integer       |     |
| price       | integer       |     |
| bundleItems       | array       |     |
| priceTags       | array       |     |
| measurementUnit       | string       |     |
| unitMultiplier       | integer       |     |
| isGift       | boolean       |     |
| clientProfileData       | object       |     |
| email       | string       |     |
| firstName       | string       |     |
| lastName       | string       |     |
| documentType       | string       |     |
| document       | string       |     |
| phone       | string       |     |
| corporateName       | string       |     |
| tradeName       | string       |     |
| corporateDocument       | string       |     |
| stateInscription       | string       |     |
| corporatePhone       | string       |     |
| isCorporate       | boolean       |     |
| userProfileId       | string       |     |
| shippingData       | object       |     |
| isFOB       | boolean       |     |
| address       | object       |     |
| addressType       | string       |     |
| receiverName       | string       |     |
| addressId       | string       |     |
| postalCode       | string       |     |
| city       | string       |     |
| state       | string       |     |
| country       | string       |     |
| street       | string       |     |
| number       | string       |     |
| neighborhood       | string       |     |
| complement       | string       |     |
| reference       | string       |     |
| geoCoordinates       | array       |     |
| selectedAddresses       | objects array    |     |
| addressType       | string       |     |
| receiverName       | string       |     |
| addressId       | string       |     |
| postalCode       | string       |     |
| city       | string       |     |
| state       | string       |     |
| country       | string       |     |
| street       | string       |     |
| number       | string       |     |
| neighborhood       | string       |     |
| complement       | string       |     |
| reference       | string       |     |
| geoCoordinates       | array       |     |
| logisticsInfo       | objects array    |     |
| itemIndex       | integer    |     |
| selectedSla       | string       |     |
| addressId       | string       |     |
| selectedDeliveryChannel       | string       |     |
| deliveryIds       | objects array       |     |
| warehouseId       | string       |     |
| dockId       | string       |     |
| lockTTL       | string       |     |
| shippingEstimate       | string       |     |
| price       | integer       |     |
| deliveryWindow       | string       |     |
| trackingHints       | array       |     |
| paymentData       | string       |     |
| customData       | string       |     |

## 3) Authorize order shipping from Seller - Marketplace calls Seller endpoint

After the order's payment on the **Marketplace** is completed, the Marketplace needs to call the *Seller* to authorize shipping the order.

### REST API call example:

Endpoint: `https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders/{orderId}/fulfill?sc={idCanal}&affiliateId={idAfiliado}`

- Verb:  **POST**  
- Content-Type:  **application/json**  
- Accept:  **application/json**

| Parameter     | Description     |
| ---------- | ---------- |
| AccountName       | VTEX Seller Account Name   |
| orderId       | Order ID, made up of the affiliate ID (meaning the Marketplace ID) + o `marketplaceOrderId`, informed during the call that sends the order (see previous step). If, for example, the affiliate's ID is `MBR` and the `marketplaceOrderId` is `956`, the `orderId` is `MBR-956`  |
| idCanal       | Trade Policy ID as registered with VTEX    |
| idAfiliado       | Affiliate ID as registered with VTEX Seller  |

#### Request body example:

```json
{
    "marketplaceOrderId": "956"
}
```

| Field     | Type     | Description     |  Mandatory? |
| ---------- | ---------- | ---------- |---------- |
| marketplaceOrderId       | string       |  ID of the order that was added by the Marketplace. Must be the same as the one given in the call body used to send the order to the Seller.    |  Yes   |

#### Response body example:

```json
{
    "orderId": "MBR-958",
    "marketplaceOrderId": "958",
    "receipt": "5c54532d-da9d-4140-a1e7-323009f977cc",
    "date": "2019-10-01T18:50:13.7394634Z",
    "items": [
        {
            "id": "4"
        },
        {
            "id": "13"
        }
    ],
    "shippingData": {
        "logisticsInfo": [
            {
                "itemIndex": 0,
                "selectedSla": "Normal",
                "selectedDeliveryChannel": "delivery",
                "shippingEstimateDate": "2019-10-08T18:50:13.217302Z"
            },
            {
                "itemIndex": 1,
                "selectedSla": "Express",
                "selectedDeliveryChannel": "pickup-in-point",
                "shippingEstimateDate": "2019-10-09T15:23:10.242501D"
            }
        ]
    }
}
```

| Field     | Type     | Description     |
| ---------- | ---------- | ---------- |
| orderId       | string       |  Order ID, formed by joining the affiliate's ID with the `marketplaceOrderId`.   |
| marketplaceOrderId       | string       | ID of the order created by the Marketplace when the order was sent to the Seller   |
| receipt | string  | Optional generic ID that serve as control reference |
| date | string  | Date when shipping was authorized |
| items       | objects array       | Contains the order's SKU IDs    |
| id  | string | SKU ID  |
| shippingData       | object       |  Contains order shipping data   |
| logisticsInfo | objects array | Contains shipping logistics data for that order |
| itemIndex | integer   |  Refers to each item inside `items`. In `logisticsInfo`, the `itemIndex` = `0` object refers to the first items in `items` array; while the `itemIndex` = `1` object refers to the second; and so on and so forth.  |
| selectedSla | string | Delivery type as set in Inventory & Delivery    |
| selectedDeliveryChannel       | string       |  Alerts whether it's a normal delivery (`delivery`) or pickup from store (`pickup-in-point`)   |
| shippingEstimateDate       | string       |  Estimated shipping date and time   |

## Marketplace Services Endpoint

<div class="alert alert-info">
  The <strong>Marketplace Services Endpoint</strong> is an endpoint that must be created by the Marketplace, with the objective of receiving 3 different bits of information sent by the Seller:<br>- Invoice<br>- Carrier tracking code (if any)<br>- Cancellation request (when it occurs)
</div>

For the next 3 integration steps, the Marketplace needs to:
1. Implement this endpoint on your side, preparing it to receive a payload as in the example shown below.
2. Give prior information about this endpoint in the order inclusion request, using the `marketplaceServicesEndpoint` (see step 2 in this article).

### REST API call example:

Endpoints: 
- To give invoice or carrier tracking code information: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice`
- To request order cancellation: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/cancel`

The `{marketplaceServicesEndpoint}` must be implemented by the Marketplace itself. The excerpt  (`/pvt/orders/{marketplaceOrderId}/invoice` or `/pvt/orders/{marketplaceOrderId}/cancel`) is inserted by VTEX, forming the routes that the Marketplace should expect in each case.

- Verb: **POST**  
- Content-Type: **application/json**  
- Accept: **application/json**  

| Parameter     | Description     |
| ---------- | ---------- |
| marketplaceOrderId       | Marketplace order ID. Must be the same as the one given in the order request body sent to the Seller.   |

#### Request body example:

```json
{
    "type": "Output",
    "invoiceNumber": "Invoice-00001",
    "carrier": "",
    "trackingNumber": "753573",
    "trackingUrl": "http://www.carriertrackingurl.com",
    "items": [ 
      {
        "id": "345117",
        "quantity": 1,
        "price": 9003
      }
    ],
    "issuanceDate": "2013-11-21T00:00:00", 
    "invoiceValue": 9508
}
```

| Field     | Type     | Description     |
| ---------- | ---------- | ---------- |
| type       | string       |  `Output` means that it's a sale; while `Input` means a return    |
| invoiceNumber       | string       |   Invoice number   |
| carrier       | string       |   Name of the carrier responsible for the shipment |
| trackingNumber       | string       |   Tracking code (when the request is performed to give Invoice information, this field is empty)   |
| trackingUrl       | string       |  Tracking URL (when the request is performed to give Invoice information, this field is empty)    |
| items       | objects array    |    Order items as they appear on the invoice  |
| id       | string    |  Item ID   |
| quantity       | integer    |   Item quantity   |
| price       | integer    |    Item price  |
| issuanceDate    | string    | Invoice issue date  |
| invoiceValue    | integer    |  Invoice value  |

## 4) Receive invoice information - Seller calls Marketplace endpoint (Marketplace Services Endpoint)

When issuing an invoice for an order, the Seller needs to send the invoice date to the Marketplace, which is done through a request sent to the __Marketplace Services Endpoint__, detailed above.

To receive the invoice information, the final endpoint must be: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice`

## 5) Receive carrier tracking code - Seller calls Marketplace endpoint (Marketplace Services Endpoint)

After shipping is authorized, the seller issues the invoice and hands the products over to the carrier. The carrier then generates a tracking code which it shares with the Seller.

The Seller then needs to pass this information onto the Marketplace, so that it, in turn, may share the tracking code with the customer that made the purchase.

The Seller sends the tracking code and URL to __Marketplace Services Endpoint__ using the following request fields:

```json
"carrier": "",
"trackingNumber": "753573",
"trackingUrl": "http://www.carriertrackingurl.com"
```

| Field     | Type     | Description     |
| ---------- | ---------- | ---------- |
| carrier       | string       |  Carrier name    |
| trackingNumber       | string   | Carrier tracking code  |
| trackingUrl       | string       | Carrier tracking URL, where end users can track their shipment  |

To receive the tracking code, the final endpoint must be as: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice`

<div class="alert alert-info">
Even though the route to receive the tracking code is the same as the one used by the Marketplace to receive the invoice (<code>.../invoice</code>), these two processes take place in two distinct steps: a first call in which the Seller sends the invoice data; followed by a second containing the tracking information.
</div>

## 6) Receive cancellation request - Seller calls Marketplace endpoint (Marketplace Services Endpoint)

Sometimes the Seller needs to request an order cancellation. This is also done through a request that is sent to the __Marketplace Services Endpoint__.

To receive and order cancellation request, the final endpoint must be: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/cancel`

__Important__: for the cancellation to work, the Marketplace must send a response to the seller's request, as shown in the example below.

### Response example:

```json
{
  "orderId": "564041714680-01",
  "receipt": "5342fde6-86d1-4220-a83b-9a992145b547",
  "date": "2015-10-08T20:36:51.2390821+00:00"
}
```

| Field     | Type     | Description     |   Mandatory?   |
| ---------- | ---------- | ---------- | ---------- |
| orderId       | string       |  Order ID, comprised of the affiliate's ID + the `marketplaceOrderId`, which is the Marketplace order ID, given by the marketplace in the order request body sent to the Seller.    |  Yes  | 
| receipt       | string       |    Generic ID used for internal control   |     |
| date       | string       |   Date and time of cancellation    |      |

