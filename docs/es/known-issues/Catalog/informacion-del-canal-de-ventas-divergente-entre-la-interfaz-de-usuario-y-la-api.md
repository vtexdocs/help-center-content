---
title: 'Información del canal de ventas divergente entre la interfaz de usuario y la API'
id: 66bWccTAGpRbodBXvmIlHK
status: PUBLISHED
createdAt: 2023-05-04T15:30:18.265Z
updatedAt: 2023-05-08T18:33:43.359Z
publishedAt: 2023-05-08T18:33:43.359Z
firstPublishedAt: 2023-05-04T15:30:18.800Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sales-channel-info-divergent-between-ui-and-api
locale: es
kiStatus: Backlog
internalReference: 802560
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


A veces la información sobre el canal de ventas puede ser diferente dependiendo de dónde esté consultando el cliente.


##

## Simulación


Este escenario no ocurre siempre. Suele ocurrir cuando la indexación falla o no es una indexación reciente.

Compruebe el canal de ventas al que pertenece el producto a través de la interfaz de usuario.
Compruebe el canal de ventas al que pertenece el producto a través de la API:
https://{accountName}.{environment}.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{skuId}
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)



##

## Workaround


Indexa el producto.





