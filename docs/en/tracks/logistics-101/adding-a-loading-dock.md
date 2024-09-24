---
title: 'Adding a loading dock'
id: 5XvQ1yLpxLlIKWRw1pSiyA
status: ARCHIVED
createdAt: 2019-08-21T18:17:35.897Z
updatedAt: 2022-03-08T18:43:07.011Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:49:51.424Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: adding-a-loading-dock
locale: en
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistics-101
---

There are two ways of adding a loading dock:

- Through Admin
- By API REST

Follow the steps below to add a loading dock to your store:

## Admin

1. Go to **Inventory & Shipping**;
2. Select the **Shipping Strategy**;
3. Click on **new loading dock**;
4. Fill out the data entry fields. For more details on each field's meaning, refer to section [data entry fields](#data-entry-fields) below.;
5. **Save** changes.

![EN Cadastrar Doca GIF](//images.ctfassets.net/alneenqid6w5/5RGUQFBMdcOPn3xV49SSqW/202dce17e72e2fb8da79961326626f03/EN_Cadastrar_Doca_GIF.gif)

### Data entry fields

- _ID_: loading dock ID. If left blank, an automatic value will be attributed. 
- _Name_: loading dock name, for internal store use.
- _Trade policy_: trade policies served by this loading dock.
- _Associated carriers_: carriers served by this loading dock.
- _Processing time_: time that will added to the delivery due to the step involving this loading dock. For example, a processing time of 2 days plus a loading dock processing time of 3 days plus the carrier's processing time of 1 day means the delivery will be done in 6 days. 

>ℹ️ **Warning**: the processing time of a loading dock is independent of whether a carrier operates - or not - on weekends and holidays. Delivery time will always be the sum of inventory, carrier, and loading dock time.

- _Time overhead_: value that will be used to choose the best dock for a specific delivery. This value is added to the delivery time calculation.
- _Priority_: Value to settle loading dock selection stalemates. The higher a loading dock's priority, the more chances it has of being chosen. 
- _Endpoint WMS_: used to integrate an external WMS (warehouse management system) software with the orders processing flow.
- _Address_: loading dock address

## API REST

>⚠️ Inventory & Shipping module API REST calls must be made using AppKey and AppToken. For more info, read our article on [how to generate an Appkey and um AppToken ti authenticate your integrations](https://help.vtex.com/en/tutorial/how-to-generate-an-appkey-and-apptoken-to-integrations--43tQeyQJgAKGEuCqQKAOI2)

To add a **loading dock** using API, your need to send a __POST__ to the following endpoint:

`https://logistics.{{environment}}.com.br/api/logistics/pvt/configuration/docks?an={{accountName}}`

- The request's object has the following properties:

| __Properties__ | __Types__ |__Description__|
|------------------|-----------|-------------|
| id| object| loading dock ID|
| name| string| loading dock name|
| priority| integer| Interval from 0 to 10 used to define route priority|
| dockTimeFake| integer| processing time|
| timeFakeOverhead| integer| Overhead time|
| salesChannels| nullable| sales channels|
| wmsEndPoint| string| WMS EndPoint|
| address| array| Address (items included in the array below. Check the body example)|
| postalCode| integer| ZIP code|
| country| object| Country|
| city| string| City|
| state| string| State|
| neighborhood| string| Neighborhood|
| street| string| Street|
| number| string| Number|
| complement| string| Apartment number (if any)|

Below, we have a Header and a possible Body example that are sent in the request.

### Headers 

| Header| Value |
|------------------|-----------|
| Accept |   application/json |
| Content-Type |   application/json; charset=utf-8 |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Exemplo

```json
{
    "id": "capitol hoill",
    "name": "capitol hill Store",
    "priority": 0,
    "dockTimeFake": "00:00:00",
    "timeFakeOverhead": "00:00:00",
    "salesChannels": [
      "1"
    ],
    "salesChannel": null,
    "freightTableIds": [],
    "wmsEndPoint": "",
    "pickupStoreInfo": {
      "isPickupStore": false,
      "storeId": null,
      "friendlyName": null,
      "address": {
        "postalCode": "98102",
        "country": {
          "acronym": "USA",
          "name": "Unites States of America"
        },
        "city": "Seattle",
        "state": "WA",
        "neighborhood": "East District",
        "street": "10th Avenue",
        "number": "100",
        "complement": "",
        "coordinates": null
      },
      "additionalInfo": null,
      "dockId": null
    },
    "address": {
        "postalCode": "98102",
        "country": {
          "acronym": "USA",
          "name": "Unites States of America"
        },
        "city": "Seattle",
        "state": "WA",
        "neighborhood": "East District",
        "street": "10th Avenue",
        "number": "100",
        "complement": "",
        "coordinates": [[-43.18228090000002, -22.9460398 ]]
      }
  }
```
