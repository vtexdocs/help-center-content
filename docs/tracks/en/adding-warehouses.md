---
title: Adding a warehouse
id: 3mlfDHjikOgUna1SS2Nr1Y
status: DRAFT
createdAt: 2019-08-21T13:46:49.042Z
updatedAt: 2022-03-08T18:42:46.857Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:48:16.576Z
contentType: trackArticle
productTeam: Post-purchase
slug: adding-warehouses
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistics-101
---

There are two ways to add warehouses:

- Through Admin
- By API REST

Follow the steps below to add a warehouse to your store:

## Admin

1. Access **Inventory & Shipping**;
2. Access the **Shipping Strategy** section;
3. Click on **New Warehouse**;
4. Fill out the inventory form fields. For more on each field's meaning, see the [Data Entry Fields](#data-entry-fields) section below.
5. **Save**.

![EN Cadastrar Estoque GIF](https://images.ctfassets.net/alneenqid6w5/4teusm8ha4Qp7z2SJ8C6R6/d1e9f85854f1da52135f6920b1ad8aaa/EN_Cadastrar_Estoque_GIF.gif)

### Data Entry Fields

- _ID (optional):_ warehouse identifier. If left blank, an automic value will be filled in.
- _Name:_ warehouse name.
- _Delivering from:_ loading docks that will handle that respective warehouse. You can select more than one loading dock, filling out the processing time and extra fee for each one. Select the _loading dock_ and click on __include__. 

## API REST

<div class="alert alert-warning">
Inventory & Shipping module API REST call authentications must be done with AppKey and AppToken. For more info, access our article on <a href="https://help.vtex.com/en/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes--43tQeyQJgAKGEuCqQKAOI2">how to create an AppKey and AppToken to authenticate your integrations.</a>
</div>

To add a **warehouse** using API, you'll need to send a __POST__ to the following endpoint:

`https://logistics.{{environment}}.com.br/api/logistics/pvt/configuration/warehouses?an={{accountName}}`

- The request object has the following properties:

| __Properties__ | __Types__ |__Description__|
|------------------|-----------|-------------|
| id| string| warehouse ID 
| name| string| warehouse name|
| warehouseDocks| array| warehouse linked dock (items pertaining to the array described below. Check the body example)
| dockId| string| Dock ID|
| name| string| Select dock name |
| time| string| Processing time (in days) |
| cost| float| Cost|
| translateDays| string| Set time range|
| costToDisplay| string| Cost to be displayed|

Below, we have a Header and possible Body example that are sent in the request.

### Headers 

| Header| Value |
|------------------|-----------|
| Accept |   application/json |
| Content-Type |   application/json; charset=utf-8 |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Example 

```json
{
  "id": "15bfc76",ac
  "name": "Main Warehouse",
  "warehouseDocks": [
    {
      "dockId": "1a8bce3",
      "name": "Main Distribution Center",
      "time": "3.00:00:00",
      "cost": "5.00",
      "translateDays": "days",
      "costToDisplay": "5,00"
    }
  ]
}
```
