---
title: 'Integration between non-VTEX marketplace and VTEX Seller - Actions concerning Catalog updates'
id: 5jwV8FJ1cNRmkkWnXTZEng
status: DRAFT
createdAt: 2019-09-16T12:50:28.649Z
updatedAt: 2023-04-20T15:01:37.625Z
publishedAt: 
firstPublishedAt: 2019-10-16T19:00:57.865Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: integration-between-non-vtex-marketplace-and-vtex-seller-catalog-updates
locale: en
legacySlug: integracao-entre-marketplace-nao-vtex-e-sellers-vtex-acoes-referentes-a
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

>⚠️ Check out the updated version of this [marketplace integration guide](https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide) in our Developer Portal.

One of the steps in integrating a non-VTEX Marketplace with a VTEX Seller is to allow queries to VTEX __Catalog__ to get information on price, inventory, catalog, and shipping data changes.

The following three Catalog-related actions are required for the integration to work:

1. Receive notifications about price, inventory or catalog changes.
2. Get SKU data from Seller.
3. Get price, stock and shipping data from Seller.

For an overview of the general integration flow, access the [Integration Guide non-VTEX platform hosted Marketplaces](https://help.vtex.com/en/tutorial/integration-guide-for-marketplaces-marketplace-non-vtex--SMBUYFVEfZr0m0ttOULxj "Integração para Marketplace não VTEX").

## 1)  Price, inventory or catalog change notification - Seller calls the Marketplace endpoint

Within a VTEX-hosted store (*Seller*), an *affiliate* (**Marketplace**) is added, affiliate that wants to receive the catalog along with price and inventory updated. It's the __Seller's__ responsibility to add the affiliate.

The **Marketplace** must implement an endpoint in order to receive notifications about *Seller's* SKU data changes.

Every time a Seller's SKU changes, VTEX's broadcasting system calls this Marketplace endpoint, notifying it that there has been a change.

### REST API call example:

Notifies the non-VTEX Marketplace that a change in price, inventory or catalog has occurred.

- Endpoint: `https://{endpointDoAfiliado}/api/notification/`
- Verbo: **POST**
- Content-Type: **application/json**
- Accept: **application/json**

| Parameter     | Description     |
| ---------- | ---------- |
| AffiliateEndpoint   | Endpoint that the Marketplace should build to receive notifications   |

#### Notification JSON example:

```json
{
    "IdSku" : "1634",
    "An" : "teststore",
    "IdAffiliate": "PRT",
    "StockModified": true,
    "PriceModified": true
}
```

| Field     | Type     | Description     |
| ---------- | ---------- | ---------- |
| IdSku       | integer       | SKU ID       |
| An       | string       |    VTEX Seller account name   |
| IdAffiliate       | string       | Affiliate ID as added with the VTEX seller  |
| StockModified       | boolean       | If true, shows an inventory change; if false, no inventory change occurred       |
| PriceModified       | boolean       | If true, indicates a shift in SKU price; if false, no change in SKU price occurred       |

## 2) Search for SKU data at Seller origin - Marketplace calls Seller endpoint

When the **Marketplace** receives a notification for an SKU's data change (previous step), that SKU could already be catalogued in the Marketplace. 

Therefore, the **Marketplace** searches for SKU data at Seller origin using a REST API call detailed below, allowing it to then check if the SKU is already part of your catalog (this check should be done using the Marketplace's internal logic).

If the SKU is not part of your catalog, the **Marketplace** must decide whether to add it or not (also done internally).

### REST API call example:

Access a VTEX store (*Seller*) and search for an SKU's data.

- Endpoint: `http://{AccountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{idsku}`
- Verb: **GET**
- Content-Type: **application/json**
- Accept: **application/json**

| Parameter     | Description     |
| ---------- | ---------- |
| AccountName       | VTEX Seller Account Name       |
| idsku       | VTEX Seller's SKU ID. Same as in the previous step's notification body       |

#### Response body example:

```json
{
    "Id": 2,
    "ProductId": 2,
    "NameComplete": "MacMurray Pinot Gris Reserve 2018",
    "ProductName": "Pinot Gris Reserve 2018",
    "ProductDescription": "",
    "ProductRefId": "",
    "TaxCode": "",
    "SkuName": "MacMurray Russian River Valley Pinot Gris Reserve 2018",
    "IsActive": true,
    "IsTransported": true,
    "IsInventoried": true,
    "IsGiftCardRecharge": false,
    "ImageUrl": "http://examplestore.vteximg.com.br/arquivos/ids/1",
    "DetailUrl": "/mac-murray-reserve-2018/p",
    "CSCIdentification": null,
    "BrandId": "2000004",
    "BrandName": "MacMurray",
    "Dimension": {
        "cubicweight": 1.0000,
        "height": 8.0000,
        "length": 32.0000,
        "weight": 1200.0000,
        "width": 8.0000
    },
    "RealDimension": {
        "realCubicWeight": 0.000,
        "realHeight": 0.0,
        "realLength": 0.0,
        "realWeight": 0.0,
        "realWidth": 0.0
    },
    "ManufacturerCode": "",
    "IsKit": false,
    "KitItems": [],
    "Services": [],
    "Categories": [],
    "Attachments": [],
    "Collections": [],
    "SkuSellers": [
        {
            "SellerId": "1",
            "StockKeepingUnitId": 2,
            "SellerStockKeepingUnitId": "2",
            "IsActive": true,
            "FreightCommissionPercentage": 0.0,
            "ProductCommissionPercentage": 0.0
        },
      {
            "SellerId": "Russian River Valley AVA",
            "StockKeepingUnitId": 2,
            "SellerStockKeepingUnitId": "666",
            "IsActive": true,
            "FreightCommissionPercentage": 0.0,
            "ProductCommissionPercentage": 0.0
        }
    ],
    "SalesChannels": [
        1,
        3
    ],
    "Images": [
        {
            "ImageUrl": "http://examplestore.vteximg.com.br/arquivos/ids/1",
            "ImageName": "TestImage",
            "FileId": 155434
        }
    ],
    "Videos": [],
    "SkuSpecifications": [],
    "ProductSpecifications": [
        {
            "FieldId": 26,
            "FieldName": "Grape",
            "FieldValueIds": [
                101
            ],
            "FieldValues": [
                "Pinot Gris"
            ]
        },
        {
            "FieldId": 27,
            "FieldName": "Country",
            "FieldValueIds": [
                108
            ],
            "FieldValues": [
                "USA"
            ]
        },
        {
            "FieldId": 28,
            "FieldName": "Region",
            "FieldValueIds": [],
            "FieldValues": [
                "California"
            ]
        }
    ],
    "ProductClustersIds": "120, 129",
    "ProductCategoryIds": "/2/",
    "ProductGlobalCategoryId": 421,
    "ProductCategories": {
        "2": "White wines"
    },
    "CommercialConditionId": 1,
    "RewardValue": 0.0,
    "AlternateIds": {
        "RefId": "0002"
    },
    "AlternateIdValues": [
        "0002"
    ],
    "EstimatedDateArrival": null,
    "MeasurementUnit": "ml",
    "UnitMultiplier": 1.0000,
    "InformationSource": "Indexer",
    "ModalType": null
}
```

| Field     | Type     | Description     |
| ---------- | ---------- | ---------- |
| Id       | integer       | SKU ID       |
| ProductId       | integer       | SKU related Product ID as appears in VTEX       |
| NameComplete | string   |  Linked Product and SKU name  |
| ProductName       | string   | Product name       |
| ProductDescription       | string  | Product description. HTML is allowed. |
| ProductRefId  | string |  SKU reference code given when adding the SKU  |
| TaxCode  | string  |  SKU tax rate  |
| SkuName    | string    |   SKU name   |
| IsActive   | boolean    |   Shows whether SKU is active or not     |
| IsTransported       | boolean    | *obsolete field*    |
| IsInventoried       | boolean    | *obsolete field*    |
| IsGiftCardRecharge | boolean |  Shows whether the purchase will generate a gift voucher  |
| ImageUrl   | string       |  SKU image URL    |
| DetailUrl       | string       | SKU related product URL   |
| BrandId       | string       |  SKU related product brand ID  |
| BrandName       | string  | SKU related product brand name  |
| Dimension   | objeto   | Contains SKU dimensions, including packaging |
| cubicweight       | integer       | SKU gross cubic weight  |
| height       | integer       |  SKU gross height    |
| length       | integer       |  SKU gross length   |
| weight       | integer       |  SKU gross weight      |
| width       | integer       |  SKU gross width    |
| RealDimension       | objeto       |  Contains SKU net dimensions   |
| realCubicWeight       | integer       | SKU net cubic weight     |
| realHeight       | integer       | SKU net height |
| realLength       | integer       | SKU net length |
| realWeight       | integer       | SKU net weight  |
| realWidth       | integer       | SKU net width  |
| ManufacturerCode   | string   |  Product supplier ID |
| IsKit   | boolean   |  Shows whether the SKU is a kit   |
| KitItems       |  array      |  If a kit, contains the kit's components    |
| Services       |  array   | Contains the IDs of services related to the SKU |
| Categories       |  array  |  Contains the IDs of categories related to the SKU |
| Attachments   | array  |  Contains the IDs of files related to the SKU | 
| Collections | array |  Contains the IDs of collections related to the SKU  |
| SkuSellers | objects array |  Contains data on Seller's SKU    |
| SellerId       | string       |  ID of VTEX Seller selling this SKU      |
| StockKeepingUnitId       | integer       |   SKU ID with the Seller from where the data is fetched (the same as `id` value)     |
| SellerStockKeepingUnitId       | string       |   Third-party seller SKU ID meaning a seller acting as the Seller's seller from where the data is fetched     |
| IsActive       | boolean       |  Shows whether or not this SKU is active with that Seller      |
| FreightCommissionPercentage   | integer       |  Seller commission value on top of shipping value      |
| ProductCommissionPercentage   | integer       | Seller commission value added to product value     |
| SalesChannels | array  |  List of Trade Policy IDs that apply to this SKU  |
| Images  | objects array | Contains information on images linked to the SKU  |
| ImageUrl       | string       | Image URL       |
| ImageName       | string       | Image name as it appears in VTEX      |
| FileId       | integer       | Image ID       |
| Videos  | array |  Contains information on videos linked to the SKU |
| SkuSpecifications       | objects array       |  Contains SKU specifications |
| ProductSpecifications  | objects array   |  Contains Product specifications |
| FieldId       | integer       | SKU specification ID  |
| FieldName       | string       |  SKU specification name  |
| FieldValueIds | integer array  | Contains the specification value IDs |
| FieldValues | string array  |  Contains the specification values  |
| ProductClustersIds   | string   | Collections IDs which contain the SKU   |
| ProductCategoryIds   | string   | Department, category and subcategory IDs to which the product belongs, hierarchically stacked as in the following example: "/2/15/43/"  |
| ProductGlobalCategoryId | integer   | Global category ID to which the product belongs |
| ProductCategories | object | Contains the department, category and subcategory to which the products belong, organized by field (Category ID) and value (Category name) |
| CommercialConditionId | integer | SKU's commercial condition ID  |
| RewardValue    | integer | Rank value linked to that SKU, in case a reward program is active      |
| AlternateIds    | object | Alternative SKU IDs, such as EAN and the RefID  |
| AlternateIdValues   | array |  Alternative values for SKU IDs  |
| EstimatedDateArrival    | integer  |  Estimated catalog entry date, in case of product not part of the catalog but with this information filled in  |
| MeasurementUnit   | string   |  SKU measurement unit    |
| UnitMultiplier   | integer |   SKU unit multiplier   |
| InformationSource   | string   |  For VTEX internal use   |
| ModalType  | integer   |  Modal type linked to the SKU   |

## 3) Search for shipping price, inventory and data - Marketplace calls Seller's endpoint

The Marketplace should use the __API Fulfillment Simulation__ to get the following updated SKU data: __price__, __inventory__ and __shipping__.

This call simulates a cart in VTEX Checkout, responding with the most updated version of the data.

>⚠️ The Fulfillment Simulation call must be used by the Marketplace whenever it needs to obtain updated price, inventory or shipping data. To offer a real-time integration and, consequently, a fluid buying experience, the Marketplace must obtain this data at every step of the client's journey in the store: :
>
> - Window display
>
> - Product page
>
> - Cart
>
> - Checkout
>
> - Order Placed
>
> 
>
> Hence, you ensure that clients are not caught off-guard by potential SKU changes that the Seller failed to inform the Marketplace about.

### REST API call example:

Access a VTEX (*Seller*) store and search for SKU price, inventory and shipping data.

- Endpoint: `https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={idcanal}&affiliateId={idafiliado}`
- Verb: **POST**
- Content-Type: **application/json**

| Parameter     | Description     |
| ---------- | ---------- |
| AccountName       | VTEX Seller Account Name     |
| idcanal       | Trade Policy considered during cart simulation |
| idafiliado       | Affiliate Id considered for the simulation |

#### Request body example:

```json
{
    "postalCode": "10019",
    "country": "USA",
    "items": [
        {
            "id": "23",
            "quantity": 1,
            "seller": "1"
        },
        {
            "id": "25",
            "quantity": 2,
            "seller": "1"
        }
    ]
}
```

| Field     | Type     | Description     |   Mandatory?  |
| ---------- | ---------- | ---------- | ---------- |
| postalCode       | string       |   ZIP code for shipping calculation   |   No   |
| country       | string       |   Country for shipping calculation  |   No    |
| items | array de objetos| Array of items desired for simulation  |  Yes  |
| id | string |   desired SKU's ID    | Yes  |
| quantity       | integer       |   Quantity of desired SKU  |  Yes  |
| seller       | string       |   ID of Seller selling desired SKU. In a fulfillment simulation context, the seller must always be equal to "1" - "seller 1" means that it's the fulfillment itself.  |   Yes   |

>⚠️ The simulation to fetch price/availability must be done with only **1 unit** of the specific item. Cart simulations must obviously include all the desired items, so as to guarantee these items' context when bundled in the cart, which becomes especially important for shipping calculations.

#### Response body example

```json
{
    "items": [
        {
            "id": "23",
            "requestIndex": 0,
            "quantity": 0,
            "seller": "1",
            "merchantName": null,
            "priceValidUntil": "2019-08-17T19:40:26Z",
            "price": 13900,
            "listPrice": 15900,
            "offerings": [],
            "priceTags": [],
            "measurementUnit": "kg",
            "unitMultiplier": 1.5,
            "attachmentOfferings": []
        }
    ],
    "postalCode": "10019",
    "geoCoordinates": [],
    "country": "USA",
    "logisticsInfo": [
        {
            "itemIndex": 0,
            "addressId": null,
            "selectedSla": null,
            "selectedDeliveryChannel": null,
            "stockBalance": 0,
            "quantity": 0,
            "shipsTo": [
                "USA",
                "ROU",
                "BRA",
                "GBR"
            ],
            "slas": [],
            "deliveryChannels": [
                {
                    "id": "delivery",
                    "stockBalance": 10
                }
            ]
        }
    ],
    "pickupPoints": [],
    "messages": []
}
```

| Campo     | Type     | Descrição     |
| ---------- | ---------- | ---------- |
| items | array de objetos |      |
| id | string |      |
| requestIndex   | integer    |      |
| quantity       | integer       |      |
| seller       | string       |      |
| merchantName       | integer    |      |
| priceValidUntil       | string       |      |
| price       | integer       |      |
| listPrice       | integer       |      |
| offerings       | array       |      |
| priceTags       | array       |      |
| measurementUnit       | string      |      |
| unitMultiplier       | integer      |      |
| attachmentOfferings       | array      |      |
| postalCode       | string      |      |
| geoCoordinates       | array      |      |
| country       | string      |      |
| logisticsInfo       | array de objetos     |      |
| itemIndex       | integer      |      |
| addressId       | integer      |      |
| selectedSla       | integer      |      |
| selectedDeliveryChannel       |  integer    |      |
| stockBalance       | integer      |      |
| quantity       | integer      |      |
| shipsTo       | array      |      |
| slas       | array      |      |
| deliveryChannels       | array de objetos     |      |
| id       | string      |      |
| stockBalance       | integer      |      |
| pickupPoints       | array      |      |
| messages       | array      |      |
