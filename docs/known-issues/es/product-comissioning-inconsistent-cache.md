---
title: 'Puesta en servicio del producto Caché incoherente'
id: 7queBSJcAG9yIlKbvWOVgY
status: PUBLISHED
createdAt: 2023-08-01T17:48:39.144Z
updatedAt: 2023-08-01T17:56:01.673Z
publishedAt: 2023-08-01T17:56:01.673Z
firstPublishedAt: 2023-08-01T17:54:19.969Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: puesta-en-servicio-del-producto-cache-incoherente
locale: es
kiStatus: Backlog
internalReference: 872364
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

Hay, a partir de 2023, dos conjuntos de API distintos para actualizar la información de un vendedor en un mercado, son:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog_system/pvt/seller
https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/seller-register/pvt/sellers/-sellerId-/commissions/categories

Estas deberían ser coherentes entre sí (y en gran medida, lo son) pero, al actualizar los datos de comisión para todas las categorías en la última, se tarda mucho en actualizar la información en la respuesta de la API catalog_system.

Esto sucede cuando la comisión se establece para la categoría raíz (por ejemplo, la carga útil a continuación)

```
[
 {
      ""categoryId"": ""default"",
      ""categoryName"": null,
      ""categoryFullPath"": [],
      ""productCommissionPercentage"": 50.0,
      ""freightCommissionPercentage"": 0.0
  }
]
```

La principal consecuencia de este retraso es que el checkout y los marktplaces utilizan mayoritariamente la respuesta catalog_system, lo que puede dar lugar a comisiones incorrectas en los pedidos.


## Simulación


1. En un marketplace, prueba a realizar una solicitud GET utilizando la API de catálogo para un vendedor determinado https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/seller/-sellerId-
2. Actualiza sus datos de comisionado de productos a través de un PUT a la misma ruta https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog_system/pvt/seller
3. Realiza otra GET y verás que la información se ha actualizado correctamente.
4. Ahora, intenta hacer lo mismo utilizando la API de registro de vendedores https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/seller-register/pvt/sellers/-sellerId-/commissions
5. Envía un payload para la categoría raíz (es decir, para toda la tienda, aparte de otras categorías con comisiones específicas) configurando cualquier productComissionPercentage https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/seller-register/pvt/sellers/-sellerId-/commissions/categories
6. Si obtiene datos a través de GET para esta misma colección, verá la información actualizada: https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/seller-register/pvt/sellers/-sellerId-/commissions
7. Sin embargo, al intentar obtener estos mismos datos a través de la API catalog_system, tardará días en actualizarse si no se realiza ninguna otra actualización.

## Workaround

- Configurar otros datos en la API de registro de vendedor, lo que fuerza una pérdida de caché.
- Actualizar directamente a través de la api catalog_system.
- Utilizar la interfaz de usuario para realizar actualizaciones.

