---
title: "Divergencia de inventario en UI x API debido a que el id de almacén distingue entre mayúsculas y minúsculas"
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
slugEN: divergencia-de-inventario-en-ui-x-api-debido-a-que-el-id-de-almacen-distingue-entre-mayusculas-y-minusculas
locale: es
kiStatus: Backlog
internalReference: 346163
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

Como en realidad la misma API crea y actualiza el almacén (Create/update warehouse: `POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses`), Logística identifica por el id qué acción debe realizarse, y como el id es sensible a mayúsculas y minúsculas, si la intención sería actualizar de id "TEST" pero se introduce el id "test", se crea un nuevo almacén, pero el inventario se replica para ambos porque el inventario es insensible a mayúsculas y minúsculas.


## Simulación


Crear un inventario con id de capital, ya sea por UI o API, por ejemplo:

    POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses{ "id": "TEST", "name": "TEST", "warehouseDocks": [{"dockId": "dock-test", "time": "05:00:00", "cost": 0.99 }]}

Actualizar el inventario de una SKU para este nuevo almacén (id "TEST"), ya sea por UI o API, por ejemplo

    PUT https://{accountName}.{environment}.com.br/api/logistics/pvt/inventory/skus/{skuId}/warehouses/{warehouseId}{ "quantity": 122}

Actualizar el tiempo y el coste del muelle de carga mediante la API con el id "test" en minúsculas, por ejemplo

    POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses{ "id": "test", "name": "TEST", "warehouseDocks": [{"dockId": "dock-test", "time": "08:00:00", "cost": 0.00 }]}

Aunque el id es el mismo, al distinguir entre mayúsculas y minúsculas se creará otro almacén:
 ![](https://vtexhelp.zendesk.com/attachments/token/9rtOZ4rvyimyhR8a4SPYiKkcV/?name=image.png)

Sin embargo, para la interfaz de usuario del inventario, el id no distingue entre mayúsculas y minúsculas, por lo que para ambos inventarios se mostrará la misma información:
 ![](https://vtexhelp.zendesk.com/attachments/token/0yAKYzWYy5Sn023Hk28QqcDDR/?name=image.png)

Pero comprobando en la API, cada inventario está separado, como se esperaba:
 ![](https://vtexhelp.zendesk.com/attachments/token/LFPgP1tbhl81JA0e7zeW6lrwv/?name=image.png)

Y luego, al eliminar el primer registro del almacén (con mayúscula "TEST"), la información del inventario en la UI sigue mostrando esa cantidad disponible para el inventario id "test" (minúscula), cuando en realidad es 0:
 ![](https://vtexhelp.zendesk.com/attachments/token/nhn5tLzAlpiTrfRTSaZNu058S/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/YI35cmEAkxMVHpaqTE0KrHHS1/?name=image.png)

Y como consecuencia de esto, la indexación de la SKU obtiene una cantidad 0, y muestra fuera de stock en la caja:
 ![](https://vtexhelp.zendesk.com/attachments/token/Q3SECpqLt5hNL4OIkp5s55BpK/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/j3LH5atDUaQL8RzTJug42Wqq7/?name=image.png)


## Workaround


Como solución, puede actualizar el inventario del almacén específico, y si es posible, no tener el mismo id con insensibilidad a mayúsculas y minúsculas ("TEST" x "test").

