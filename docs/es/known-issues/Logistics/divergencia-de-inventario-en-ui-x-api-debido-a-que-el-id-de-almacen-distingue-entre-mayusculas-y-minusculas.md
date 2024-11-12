---
title: 'Divergencia de inventario en UI x API debido a que el id de almacén distingue entre mayúsculas y minúsculas'
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
slugEN: inventory-divergence-in-ui-x-api-due-to-warehouse-id-being-case-sensitive
locale: es
kiStatus: Backlog
internalReference: 346163
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

Como en realidad la misma API crea y actualiza el almacén (Create/update warehouse: `POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses`), Logística identifica por el id qué acción debe realizarse, y como el id es sensible a mayúsculas y minúsculas, si la intención sería actualizar de id "TEST" pero se introduce el id "test", se crea un nuevo almacén, pero el inventario se replica para ambos porque el inventario es insensible a mayúsculas y minúsculas.


## Simulación


Crear un inventario con id de capital, ya sea por UI o API, por ejemplo:

    POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses{ "id": "TEST", "name": "TEST", "warehouseDocks": [{"dockId": "dock-test", "time": "05:00:00", "cost": 0.99 }]}

Actualizar el inventario de una SKU para este nuevo almacén (id "TEST"), ya sea por UI o API, por ejemplo

    PUT https://{accountName}.{environment}.com.br/api/logistics/pvt/inventory/skus/{skuId}/warehouses/{warehouseId}{ "quantity": 122}

Actualizar el tiempo y el coste del muelle de carga mediante la API con el id "test" en minúsculas, por ejemplo

    POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses{ "id": "test", "name": "TEST", "warehouseDocks": [{"dockId": "dock-test", "time": "08:00:00", "cost": 0.00 }]}

Aunque el id es el mismo, al distinguir entre mayúsculas y minúsculas se creará otro almacén:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Sin embargo, para la interfaz de usuario del inventario, el id no distingue entre mayúsculas y minúsculas, por lo que para ambos inventarios se mostrará la misma información:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

Pero comprobando en la API, cada inventario está separado, como se esperaba:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

Y luego, al eliminar el primer registro del almacén (con mayúscula "TEST"), la información del inventario en la UI sigue mostrando esa cantidad disponible para el inventario id "test" (minúscula), cuando en realidad es 0:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

Y como consecuencia de esto, la indexación de la SKU obtiene una cantidad 0, y muestra fuera de stock en la caja:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)


## Workaround


Como solución, puede actualizar el inventario del almacén específico, y si es posible, no tener el mismo id con insensibilidad a mayúsculas y minúsculas ("TEST" x "test").

