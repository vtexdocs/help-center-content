---
title: 'Setting up Seller White Label as a Pickup Point'
id: 6fSUE2O0taaoKieAaiuc4e
status: PUBLISHED
createdAt: 2018-09-04T14:22:05.290Z
updatedAt: 2023-03-29T18:58:34.411Z
publishedAt: 2023-03-29T18:58:34.411Z
firstPublishedAt: 2018-09-05T20:38:04.270Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slug: setting-up-seller-white-label-as-a-pickup-point
locale: en
legacySlug: setting-up-seller-white-label-as-a-pickup-point
subcategory: 1c5Btie9ou2Gg2iUo0ggqM
---

The purpose of this article is to guide the VTEX platform user to configure a __Seller White Label__ as a __pickup point__. This feature is part of a store's Omnichannel strategy scope, making it an important evolution in delivery logistics and inventory management.

## Franchise Accounts and Sellers White Label

As explained in the article [Definition of Franchise Account and Seller White Label](https://help.vtex.com/en/tutorial/white-label-seller--5orlGHyDHGAYciQ64oEgKa), every Franchise Account created in VTEX is automatically associated as the Seller White Label of the main account.

This way, the pickup point configured in the Franchise Account __ will be used to fulfill the deliveries of the orders placed in the Main Account__. In this scenario, the Franchise Account acts as the __Seller White Label__ of the Main Account.

<div class="alert alert-danger">
Settings must be made in the White Label Seller account. Items will only be available for pickup at the end customer checkout if the SKU is available in stock in both the master account and the White Label Seller account.
</div>

## Initial setup

To set up a white label seller as a pickup point, you have to configure the following:

- [Pickup point](https://help.vtex.com/en/tutorial/creating-pickup-points--2R5ClQiwe4KoSQgsuiOw4E): with the white label seller's address.    
- [Shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140): to display the Pickup Point at checkout, it is necessary to set up a shipping policy and link a registered pickup point.  
- [Loading dock](https://help.vtex.com/en/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW): configure a loading dock and link the registered Shipping policy with the pick-up point.  
- [Warehouse](https://help.vtex.com/en/tutorial/gerenciar-estoque--tutorials_137#cadastrar-estoque): you must configure a warehouse and link the registered shipping policy with the pickup point.

## Fill in Stock Quantity

After setting the __PickUp Point__, the __Shipping policy__, the __Dock___, and the __Warehoue__, it is necessary to fill in the quantity of the items in stock. Since the Franchise Account does not have its own catalogue, having inherited the Products and SKU information from the __Main Account__, it will be necessary to include the quantities through the __import and export of Inventory spreadsheet__.

To find out how to export and import this spreadsheet, access our article [import and export of the stock worksheet](http://help.vtex.com/en/tutorial/importing-and-exporting-a-stock-spreadsheet).

To know more about filling out the spreadsheet fields, access our article [Fill out the freight worksheet fields](http://help.vtex.com/en/tutorial/building-a-freight-spreadsheet/).

## Validate the configuration

If the pickup point configuration has been correctly made in the Franchise Account, SKUs with __stock available and price__ may be sold on the Main Account, where the Franchise Account will act as a __Seller White Label__ and the Main Account will function as a __Marketplace__.

### Seller White Label/Franchise Account

To check if the seller white label is delivering a SKU through the registered pickup point, you must do a `POST` on the fulfillment route:
`http://{{franchise-accountName}}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?affiliateid=SLR&sc={{salesChannel}}`

Below you can see an example of a `body` that is necessary for the `POST`:

```json
  {
    "items": [
      {
        "id": "2000270",         //skuId
        "quantity": 1,
        "seller": "1"
      }
    ],
    "postalCode": "85001",     
    "country": "USA"
  }
```
If the configuration has been made correctly, the call will return the delivery information of the SKU sent in the context of the `body`. Therefore, it’s enough to check whether the delivery is being made by the registered pickup point. Here is an example call answer:

```json
{
    "items": [
        {
            "id": "2000270",
            "requestIndex": 0,
            "quantity": 1,
            "seller": "1",
            "merchantName": null,
            "priceValidUntil": "2019-09-05T14:42:12Z",
            "price": 5500,
            "listPrice": 5500,
            "offerings": [],
            "priceTags": [],
            "measurementUnit": "un",
            "unitMultiplier": 1,
            "attachmentOfferings": []
        }
    ],
    "postalCode": "85001",
    "geoCoordinates": [],
    "country": "USA",
    "logisticsInfo": [
        {
            "itemIndex": 0,
            "addressId": null,
            "selectedSla": null,
            "selectedDeliveryChannel": null,
            "stockBalance": 5,
            "quantity": 1,
            "shipsTo": [
                "USA"
            ],
            "slas": [
                {
                    "id": "Normal (1cc6116)",
                    "deliveryChannel": "pickup-in-point",
                    "name": "Normal (1cc6116)",
                    "deliveryIds": [
                        {
                            "courierId": "1cbb75a",
                            "warehouseId": "1318516",
                            "dockId": "1b3d781",
                            "courierName": "Fast Shipping",
                            "quantity": 1
                        }
                    ],
                    "shippingEstimate": "20bd",
                    "dockEstimate": "5bd",
                    "availableDeliveryWindows": [],
                    "price": 53200,
                    "pickupStoreInfo": {
                        "isPickupStore": true,
                        "friendlyName": "Locker Arizona",
                        "address": {
                            "addressType": "pickup",
                            "receiverName": null,
                            "addressId": "1cc6116",
                            "postalCode": "85004",
                            "city": "Phoenix",
                            "state": "AZ",
                            "country": "USA",
                            "street": "North 3rd Street",
                            "number": "752",
                            "neighborhood": "Downtown",
                            "complement": "",
                            "reference": null,
                            "geoCoordinates": [
                                3345.231544494628906,
                                -11206.918148040771484
                            ]
                        },
                        "additionalInfo": "Bring your ID",
                        "dockId": "1b3d781"
                    },
                    "pickupPointId": "1cc6116",
                    "pickupDistance": 8.0277872085571289,
                    "polygonName": null
                }
            ],
            "deliveryChannels": [
                {
                    "id": "pickup-in-point",
                    "stockBalance": 5
                }
            ]
        }
    ],
    "pickupPoints": [
        {
            "friendlyName": "Locker Arizona",
            "address": {
                "addressType": "pickup",
                "receiverName": null,
                "addressId": "1cc6116",
                "postalCode": "85004",
                "city": "Phoenix",
                "state": "AZ",
                "country": "USA",
                "street": "North 3rd Street",
                "number": "752",
                "neighborhood": "Downtown",
                "complement": "",
                "reference": null,
                "geoCoordinates": [
                    3345.231544494628906,
                    -11206.918148040771484
                ]
            },
            "additionalInfo": "Bring your ID",
            "id": "1cc6116",
            "businessHours": []
        }
    ],
    "messages": []
}
```

### Marketplace/Main Account

To validate that the Marketplace is correctly including the SKU of the seller white label in the cart, you must do a `POST` on the checkout route:

`http://{{main-accountName}}.{{environment}}.com.br/api/checkout/pub/orderforms/simulation`

Below you can see an example of a `body` that is necessary for the `POST`:

```json
  {
    "items": [
      {
        "id": "2000270",         //skuId
        "quantity": 1,
        "seller": "1"
      }
    ],
    "postalCode": "85001",     
    "country": "USA"
  }
```

If the configuration has been made correctly, the call will return the checkout information, including that of the cart to where the SKU was sent in the context of the `body`.
Therefore, it’s sufficient to search in json answer if the SKU delivery can be made by the registered pickup point.

