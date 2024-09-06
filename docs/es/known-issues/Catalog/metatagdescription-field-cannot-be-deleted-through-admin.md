---
title: "El campo 'MetaTagDescription' no se puede eliminar a través de Admin"
id: 7h0HlpuQnE8nWylgSWJ1lR
status: PUBLISHED
createdAt: 2024-02-08T20:21:00.735Z
updatedAt: 2024-02-08T20:21:01.739Z
publishedAt: 2024-02-08T20:21:01.739Z
firstPublishedAt: 2024-02-08T20:21:01.739Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-campo-metatagdescription-no-se-puede-eliminar-a-traves-de-admin
locale: es
kiStatus: Backlog
internalReference: 979691
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



## Simulación



- Haga clic en el producto a editar
- Borre el valor del campo `MetaTagDescription`.
- Haga clic en "Guardar" y volver al producto
- Compruebe que el valor original ya no está allí, pero el valor de la `description` se duplicó



## Workaround


Utilice la API para eliminar el valor no deseado después de actualizar el producto en el Admin
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/product/-productId-?endpoint=put-/api/catalog/pvt/product/-productId-




