---
title: 'Integration Guide - Consuming catalog information for use in an External Service'
id: 3j15zRDuismM42Y8SoGMO2
status: PUBLISHED
createdAt: 2018-08-20T19:03:13.609Z
updatedAt: 2022-10-05T00:09:39.562Z
publishedAt: 2022-10-05T00:09:39.562Z
firstPublishedAt: 2018-08-20T19:03:44.217Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: integration-guide-consuming-catalog-information-for-use-in-an-external-service
legacySlug: integration-guide-consuming-catalog-information-for-use-in-an-external-service
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

This document aims to help integrate the information in the catalog of a VTEX store with some external service.

Among the most common use cases for this integration, we have:

1. Integrate the VTEX Store catalog with external marketplaces.
2. Send catalog data to BI tools.
3. Generate external reports using the information in the catalog.

Follow the steps below to perform the integration.

## Create an affiliate

The affiliate acts as a webhook that will notify the external service about changes made to an SKU's information, changes in inventory or changes in pricing.

1. On the admin side menu, click __Order Management__.
2. Click __Settings__.
3. Click the __Affiliates__ tab.
4. Click the __New Affiliate__ button.
5. Fill in the fields as described below.
6. Click __Save__.

### Fill in the New Affiliate panel fields

- __Name__: Fill in the name of the affiliate system.
- __ID__: Affiliate identification code with 3 digits. The ID must contain __only consonants__.
- __Trade Policy__: Id of the trade policy whose information will be sent to the affiliate.
- __Follow Up E-mail__: E-mail address that will receive information when the affiliate is notified.
- __Search Endpoint__: URL of the application that [will receive notifications](#update-sku-data) about the SKUs, their prices and their stocks. This URL must be developed by the external system so that VTEX can notify the changes through this route.
- __Search Endpoint Version__: Keep this field populated with the value __1.x.x__.
- __Use my payment method__: If it makes sense for your integration that the external service receives the payment information of your store, check this flag.

## Perform the first load with SKU data

After you have created the Endpoint that will receive product information and have successfully configured the affiliate, you must first load the Catalog data and save it to your external service database. To do this, follow the instructions below.

### 1 - Get your store's SKUs ID data

Do a `GET` in the path `http://{accountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitids?page={page}&pagesize={page_size}` to get an array with the IDs of the SKUs in your store.

__API Parameters__:

`{accountName}`: Your store account name in VTEX.

`{page}`: The page where the request is being made. You must go through all the pages until the request response is an empty array (`[]`).

`{page_size}`: The amount of SKU IDs to be returned per page. We recommend returning a maximum of 1000 ids per page.

__Example of response__:

```json
[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]
```

### 2 - Get the data about SKU properties

Using the IDs of the SKUs obtained in the previous request, you should do a `GET` on the route `http://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{{skuId}}` to get information about the properties of the SKUs. The response of this request will return the information that characterizes the SKU, such as __Name __, __Brand__, __Category__, __Collections__, __Image__, if the SKU is __Active or Inactive__ and __Trade Policies__, for example. Pricing and inventory information are not yet available in this step.

__API Parameters__:

`{accountName}`: Your store account name in VTEX.

`{{skuId}}`: ID of the SKU to be queried.

__Example of answer__:

```
{
    "Id": 20,
    "ProductId": 18,
    "NameComplete": "Newest Iron 220",
    "ProductName": "Newest Iron",
    "ProductDescription": "Newest iron",
    "TaxCode": "",
    "SkuName": "220",
    "IsActive": true,
    "IsTransported": true,
    "IsInventoried": true,
    "IsGiftCardRecharge": false,
    "ImageUrl": "http://worldshopping.vteximg.com.br/arquivos/ids/155438-55-55/image-5a949c715cf84a7e9cac11cb745bfba9.jpg?v=636633199310730000",
    "DetailUrl": "/newest-iron-18/p",
    "CSCIdentification": null,
    "BrandId": "2000000",
    "BrandName": "Brand name",
    "Dimension": {
        "cubicweight": 0.0002,
        "height": 1,
        "length": 1,
        "weight": 1,
        "width": 1
    },
    "RealDimension": {
        "realCubicWeight": 0,
        "realHeight": 0,
        "realLength": 0,
        "realWeight": 0,
        "realWidth": 0
    },
    "ManufacturerCode": null,
    "IsKit": false,
    "KitItems": [],
    "Services": [],
    "Categories": [],
    "Attachments": [],
    "Collections": [],
    "SkuSellers": [
        {
            "SellerId": "1",
            "StockKeepingUnitId": 20,
            "SellerStockKeepingUnitId": "20",
            "IsActive": true,
            "FreightCommissionPercentage": 0,
            "ProductCommissionPercentage": 0
        },
        {
            "SellerId": "jbsusaqa",
            "StockKeepingUnitId": 20,
            "SellerStockKeepingUnitId": "888898",
            "IsActive": true,
            "FreightCommissionPercentage": 0,
            "ProductCommissionPercentage": 10
        }
    ],
    "SalesChannels": [
        1,
        2,
        3,
        4,
        5,
        6
    ],
    "Images": [
        {
            "ImageUrl": "http://worldshopping.vteximg.com.br/arquivos/ids/155438/image-5a949c715cf84a7e9cac11cb745bfba9.jpg?v=636633199310730000",
            "ImageName": null,
            "FileId": 155438
        }
    ],
    "SkuSpecifications": [],
    "ProductSpecifications": [],
    "ProductClustersIds": "137,139",
    "ProductCategoryIds": "/1/2/",
    "ProductGlobalCategoryId": 783,
    "ProductCategories": {
        "1": "Choir & Voice",
        "2": "For Men"
    },
    "CommercialConditionId": 1,
    "RewardValue": 0,
    "AlternateIds": {
        "RefId": "888898"
    },
    "AlternateIdValues": [
        "888898"
    ],
    "EstimatedDateArrival": null,
    "MeasurementUnit": "un",
    "UnitMultiplier": 1,
    "InformationSource": "Indexer",
    "ModalType": null
}
```

### 3 - Obtain SKU price and inventory data

Still using the IDs obtained in the first request, you should do a `POST` on the route `https://{accountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={salesChannel}&affiliateId={affiliateId}` to get the __price, inventory, and delivery SLA__ data from the SKUs. This call simulates a cart in VTEX Checkout, returning the most up-to-date price, inventory, and delivery SLA information.

__API Parameters__:

`{accountName}`: Your store account name in VTEX.

`{salesChannel}`: Trade Policy to be considered in the simulation.

`{affiliateId}`: Affiliate ID to be considered in the context of the simulation.

__Example of BODY to fill in POST__:
```
{
    "postalCode":"10019", //required field if the country field is filled
    "country":"USA",      //required field if postalCode is filled
    "items": [            //required field: must contain at least one item
        {
            "id":"23",    //required field (string): SKU id you want to use in the simulation
            "quantity":1, //required field (int): quantity of the item you want to simulate
            "seller":"1"  //id of the main store: always use the value 1
        },
        {
            "id":"25",
            "quantity":2,
            "seller":"1"
        }
    ]
}
```

__Example of response__:
```
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
            "deliveryChannels": []
        }
    ],
    "pickupPoints": [],
    "messages": []
}
```

By combining the three request types shown above, you will be able to perform the __first load__ of data from the VTEX Catalog to write to the database of an external service.

## Update SKUs data

In the event of any product changes, VTEX will notify the Affiliate Endpoint of the information on all SKUs of the changed product even if one of the SKUs has not changed, performing a POST. Here is an example of the payload sent by VTEX to the Endpoint:

```json
{
  "IdSku": "15", //SKU ID
  "An": "accountname", //Account Name
  "IdAffiliate": "SPT", //Affiliate ID
  "DateModified": "2018-08-20T15:11:28.1978783Z", //Change date
  "IsActive": false, //Indicates the SKU status, if it's active or inactive
  "StockModified": false, //Indicates if the SKU stock has been modified
  "PriceModified": false, //Indicates if the SKU price has been modified
  "HasStockKeepingUnitModified": true, //Indicates if any SKU information has been changed (except price and stock)
  "HasStockKeepingUnitRemovedFromAffiliate": false //Indicates if the SKU has been removed from the affiliate
}
```

Receiving this payload, the integrator must use this information to decide which calls to make to update the SKU information:

- If there has been a price or stock change, the integrator should call the `https://{accountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={salesChannel}&affiliateId={affiliateId}`, as described in the section [Obtain SKU price and inventory data](#3-obtain-sku-price-and-inventory-data).
- If there has been a change in the SKU other than price or inventory, the integrator should call the `http://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{{skuId}}`, as described in the section [Get the data about SKU properties](#2-get-the-data-about-sku-properties).

<div class="alert alert-warning">
If a new SKU is inserted into the catalog, it will be notified at the endpoint of each affiliate. Because it is a new SKU, it's necessary to fill in the data of this new SKU in the database of the external service. The integrator shall verify that the notified SKU does not yet exist in the external service database. If it's a new SKU, the integrator must follow the same steps described in the <strong>Perform the first load with SKU data</strong> section. If it's an existing SKU, the integrator must follow the steps in the section <strong>Update SKUs data</strong>
</div>

<div class="alert alert-info">
If you want to integrate the payment methods of a VTEX seller with an external marketplace, <a href = "https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide">go to our documentation</a>.
</div>
