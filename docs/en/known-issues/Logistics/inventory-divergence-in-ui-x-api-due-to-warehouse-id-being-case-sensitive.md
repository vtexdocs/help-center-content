---
title: 'Inventory divergence in UI x API due to warehouse id being case sensitive'
id: 3YBSu7M0KqY7JU10wVplFG
status: PUBLISHED
createdAt: 2022-06-27T14:34:38.139Z
updatedAt: 2022-11-25T22:44:44.786Z
publishedAt: 2022-11-25T22:44:44.786Z
firstPublishedAt: 2022-06-27T14:34:38.490Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: inventory-divergence-in-ui-x-api-due-to-warehouse-id-being-case-sensitive
locale: en
kiStatus: Backlog
internalReference: 346163
---

## Summary


As actually the same API creates and updates the warehouse (Create/update warehouse: `POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses`), Logistics identifies by the id what action should be taken, and as the id is case sensitive, if the intention would be to update de id "TEST" but id "test" is entered, a new warehouse is created, but the inventory is replicated for both because the inventory is case insensitive.



## Simulation


Create an inventory with capital id, either by UI or API, for example:

    POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses{ "id": "TEST", "name": "TEST", "warehouseDocks": [{ "dockId": "dock-test", "time": "05:00:00", "cost": 0.99 }]}


Update the inventory of a SKU for this new warehouse (id "TEST"), either by UI or API, for example:

    PUT https://{accountName}.{environment}.com.br/api/logistics/pvt/inventory/skus/{skuId}/warehouses/{warehouseId}{ "quantity": 122}


Update the loading dock time and cost by API with lowercase id "test", for example:

    POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses{ "id": "test", "name": "TEST", "warehouseDocks": [{ "dockId": "dock-test", "time": "08:00:00", "cost": 0.00 }]}


Although the id is the same, being case sensitive will cause another warehouse to be created:
 ![](https://vtexhelp.zendesk.com/attachments/token/9rtOZ4rvyimyhR8a4SPYiKkcV/?name=image.png)

However, for the inventory UI, the id is not case sensitive, so for both inventories the same information will be shown:
 ![](https://vtexhelp.zendesk.com/attachments/token/0yAKYzWYy5Sn023Hk28QqcDDR/?name=image.png)

But checking on the API, each inventory is separated, as expected:
 ![](https://vtexhelp.zendesk.com/attachments/token/LFPgP1tbhl81JA0e7zeW6lrwv/?name=image.png)

And then, when deleting the first warehouse record (with capital letter "TEST"), the inventory information in the UI keeps showing that quantity available for the id "test" inventory (lowercase), where it is actually 0:
 ![](https://vtexhelp.zendesk.com/attachments/token/nhn5tLzAlpiTrfRTSaZNu058S/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/YI35cmEAkxMVHpaqTE0KrHHS1/?name=image.png)

And as a consequence of this, the SKU indexing gets 0 quantity, and it shows out of stock in the checkout:
 ![](https://vtexhelp.zendesk.com/attachments/token/Q3SECpqLt5hNL4OIkp5s55BpK/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/j3LH5atDUaQL8RzTJug42Wqq7/?name=image.png)



## Workaround


As a workaround, you can update the inventory of the specific warehouse, and if possible, not have the same id with case insensitive ("TEST" x "test").

