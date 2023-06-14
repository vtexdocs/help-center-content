---
title: 'Manage SKUs in inventory'
id: 6q8viq5Rvdb9mPDKs8MWKO
status: DRAFT
createdAt: 2019-09-23T12:29:35.372Z
updatedAt: 2022-03-08T18:44:41.035Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:56:10.686Z
contentType: trackArticle
productTeam: Post-purchase
slug: manage-skus-in-inventory
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistics-101
---

Now that all components pertaining to the logistics route have been added, they may be managed according to their individual requirements.

As previously mentioned, the route's first step is the inventory.

Therefore, all SKUs that will be available for delivery with a carrier must be included in the system. This is valid for every inventory pertaining to any logistics route, with no exceptions.

The Admin benefits from the __Manage item in inventory__ tool, which allows you to update the available SKU quantity in whatever inventory that action is necessary.

There are three different ways to complete this operation:
- Through Admin
- Using a spreadsheet
- Or by API.

Details below.

## Admin

You can manage SKU quantities in inventory through VTEX's own Admin. You can only edit one or several SKUs at once.

Let's go through the step-by-step:
1. Access the __Inventory & Shipping__ module;
2. Click on __Inventory__;
3. Either search for a product or filter by max quantity in inventory;
4. Choose between the __Edit only one__ or the __Edit selected__ option to edit one or several SKUs at the same time;
5. Fill out the fields with the new quantity of items available in inventory;
6. __Save__ changes.
7. 
## Spreadsheet 

To bulk edit and update the inventory of several SKUs, follow the [import and export an inventory spreadsheet](https://help.vtex.com/en/tutorial/importando-e-exportando-planilha-de-estoque?locale=en) step-by-step.

However, make sure that you're familiar with how to correctly fill in the spreadsheet. Follow our [guidelines on how to fill in an inventory spreadsheet](https://help.vtex.com/en/tutorial/filling-in-an-inventory-spreadsheet--2EQ0XOe8aA0UyQso0k2kkA).

## API REST

<div class="alert alert-warning">
Price module REST API call authentications must be made using an AppKey and AppToken. For more info, access our article on  <a href="https://help.vtex.com/en/tutorial/creatoing-appkey-and-apptoken-to-authenticate-integrations--43tQeyQJgAKGEuCqQKAOI2">how to generate an Appkey and an AppToken to authenticate your integrations</a>
</div>

To use API to change the quantity of an SKU in inventory, you'll need to send a __PUT__ to the following endpoint:

`https://logistics.{{environment}}.com.br/api/logistics/pvt/inventory/skus/{{skuId}}/warehouses/{{warehouseId}}?an={{accountName}}`

The object that must be sent in the request's body has the following properties:

| __Property__ | __Type__ |__Description__|
|------------------|-----------|-------------|
| unlimitedQuantity | boolean | Defines whether this SKU has unlimited inventory  |
| dateUtcOnBalanceSystem | DateTimeOffset | Date/time. Defines the moment corresponding to the chosen inventory. It's useful for releasing reservations of orders being handled. When left `null`, the value will be the date/time of the request.  |
| quantity| integer | New SKU quantity to be written in the inventory |

Below we have a Header and possible Body example that can be sent in the request.
 
### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/json |
| Content-Type | application/json; charset=utf-8 |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Example 

```json
{
    "unlimitedQuantity": false,
    "dateUtcOnBalanceSystem": null,
    "quantity": 243
}
```
