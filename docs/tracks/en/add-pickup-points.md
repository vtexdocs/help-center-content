---
title: 'Adding pickup points'
id: 6Mk0PK5AwSVzEufC3FmtAO
status: DRAFT
createdAt: 2019-08-22T13:27:37.853Z
updatedAt: 2022-03-08T18:48:30.264Z
publishedAt: 
firstPublishedAt: 2019-09-16T13:52:23.078Z
contentType: trackArticle
productTeam: Post-purchase
slug: add-pickup-points
locale: en
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistics-101
---

There are 3 ways to add a pickup point:

- Admin
- Spreadsheet
- API REST

Follow the step-by-step below to add a pickup point in your store:

## Admin

1. Click on **Inventory & Shipping**;
2. Select the **Pickup Points** section;
3. Click on **Add new Pickup Point**;
4. Fill in the pickup point form fields. For more on each field's meaning, visit the [data entry fields](#data-entry-fields) section below;
5. **Save changes**.



![EN Cadastrar Pontos de Retirada GIF](//images.ctfassets.net/alneenqid6w5/2vf3pXYddrDf1sybyoTon/efa6e8bc465fb5188c06b1d2deaa2eef/EN_Cadastrar_Pontos_de_Retirada_GIF.gif)



### Data entry fields

- _Name_: Pickup Point name.
- _ID_: Pickup Point ID. If left blank, the system will automatically assign an ID.
- _Pickup Point address_: 
-Select the _country_ where the pickup point is located.
-In the _Pickup Point Address_ field, fill in the desired address and select the correct option for your location. Address information will be displayed on the screen, together with the geolocation for that address. You can _edit_ or _clear_ the address and insert a new one.

- _Pickup instructions_: insert information related to the pickup point for your customer to see. This information will be displayed at checkout, when the customer chooses the pickup point.
- _Tags_: you can add tags to group pickup points together, separating each tag with a comma. 
- _Working hours_: 
-In _Weekdays_, fill in that pickup points business hours. If left blank, the system will take a 24/7 schedule into account. 

- _Exceptions or holidays_:
-To add specific days and schedules when a pickup point will not be open, click on _Add an Exception_.
-Fill in the _Day_ and desired _shedule_ and then click on _add_.

## Spreadsheet

>**Before importing Pickup Points, you need to export the default spreadsheet**.

To download the default spreadsheet, follow the steps below:
1. Click on **Inventory & Shipping**;
2. Click on **Pickup Points**;
3. Click on **Upload an XLS**;
4. Click on **Download a Sample Table**;
5. Once you download the default model, change the necessary fields in the Excel file in order to include new pickup points and then save the spreadsheet on your laptop.

To upload a spreadsheet containing pickup points, follow the steps below:
1. Access **Inventory & Shipping**;
2. Click on **Pickup Points**;
3. Select the **Upload an XLS** option;
4. Click on **Choose a file**;
5. Choose the file from your laptop.


## API REST

<div class="alert alert-warning">
Authentications for the Logisitics module API REST calls must be made using AppKey and AppToken. For more info, accesss our article on <a href="https://help.vtex.com/en/tutorial/create-appkey-and-apptoken-to-authenticate-integrations--43tQeyQJgAKGEuCqQKAOI2">how to create an Appkey and AppToken to authenticate your integrations</a>
</div>

To add a **Pickup Point** through API, you need to send a __POST__ to the following endpoint:

`https://logistics.{{environment}}.com.br/api/logistics/pvt/configuration/pickuppoints/{{pickupPointId}}?an={{accountName}}`

- The request object has the following attributes:

| __Property__ | __Type__ |__Description__|
|------------------|-----------|-------------|
| name| string| Pickup Point name|
| Description| string| Pickup Point description|
| instructions| string| Instructions for the Pickup Point customer|
| address| array| Pickup Point address (array described in the fields below. Check the body example.) |
| postalCode| integer| ZIP code|
| country| string| Country|
| city| string| City|
| state| string| State|
| neighborhood| string| Neighborhood|
| street| string| Street|
| number| string| Number|
| complement| string| second address line|
| reference| string| address point of reference|
| isActive| nullable| Toggle if Pickup Point is active|
| businessHours| array| Set Pickup Point's business hours (array items described below. Check the body example.)  |
| dayOfWeek | integer| Weekday (set from 1 to 7)|
| openingTime| string| Opening hours|
| closingTime| string| Closing hours|
| tagsLabel| list| Pickup Point Tags|

We can see a header example and possible body examples for that request below.

### Headers

| Header| Value |
|------------------|-----------|
| Accept |   application/json |
| Content-Type |   application/json; charset=utf-8|
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Example

```json
{
    "id": "1a227d3",
    "name": "capitol hill store",
    "description": "",
    "instructions": "ID document must be shown",
    "formatted_address": "undefined",
    "address": {
        "postalCode": "98102",
        "country": {
            "acronym": "USA",
            "name": "United States of America"
        },
        "city": "Seattle",
        "state": "WA",
        "neighborhood": "East District",
        "street": "10th",
        "number": "",
        "complement": "",
        "reference": null,
        "location": {
            "latitude": -22.974477767944336,
            "longitude": -43.18672561645508
        }
    },
    "isActive": true,
    "businessHours": [
        {
            "dayOfWeek": 1,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"
        },
        {
            "dayOfWeek": 2,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"
        },
        {
            "dayOfWeek": 3,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"
        },
        {
            "dayOfWeek": 4,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"
        },
        {
            "dayOfWeek": 5,
            "openingTime": "08:00:00",
            "closingTime": "20:00:00"
        }
    ],
    "tagsLabel": [
        "east district", "seattle"
    ]
}
```
