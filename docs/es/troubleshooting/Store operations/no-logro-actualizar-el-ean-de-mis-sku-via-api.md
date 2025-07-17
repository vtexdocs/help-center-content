---
title: 'No logro actualizar el EAN de mis SKU vía API'
id: 1gHfGo3TpSTHqb5ZNzwq3m
status: PUBLISHED
createdAt: 2024-06-18T16:50:42.770Z
updatedAt: 2024-11-08T18:51:55.033Z
publishedAt: 2024-11-08T18:51:55.033Z
firstPublishedAt: 2024-06-18T17:28:22.909Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: i-cant-update-the-ean-of-my-skus-via-api
locale: es
legacySlug: no-logro-actualizar-el-ean-de-mis-sku-via-api
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags:** Catálogo, SKU, producto, EAN

Al intentar actualizar el EAN (número de artículo europeo), que contiene información del código de barras de un SKU en el Admin VTEX y en la API, podrías encontrar problemas de sincronización del catálogo de la tienda, lo que afectaría la gestión del stock y la experiencia del cliente.

## Solución

Para resolver este problema, considera [eliminar el EAN del SKU](#eliminar-ean-del-sku) para luego [agregar un nuevo EAN](#etapa-1-agregar-nuevo-ean-al-sku).

### Eliminar EAN del SKU

Para actualizar el EAN del SKU actual, primero debes eliminar todos los EAN asociados al SKU. 

- [Delete SKU EAN](https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/stockkeepingunit/-skuId-/ean/-ean-): utiliza el endpoint para eliminar un EAN específico.
- [Delete all SKU EAN values](https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/stockkeepingunit/-skuId-/ean): utiliza el endpoint para eliminar todos los EAN asociados al SKU.

#### Etapa 1: agregar nuevo EAN al SKU

Solamente después de eliminar los EAN de un SKU será posible agregar un nuevo EAN. Para hacerlo, utiliza el endpoint [Create SKU EAN](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/ean/-ean-) para crear el nuevo valor de EAN.

#### Etapa 2: consultar la actualización del EAN del SKU

Una vez que se haya agregado el nuevo valor de EAN, utiliza el endpoint [Get SKU by EAN](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/sku/stockkeepingunitbyean/-ean-) para comprobar la actualización. Los nuevos valores de EAN se mostrarán en el arreglo `AlternateIdValues`.

```json
"AlternateIdValues":
[
"8781",
"878181"
]
```

