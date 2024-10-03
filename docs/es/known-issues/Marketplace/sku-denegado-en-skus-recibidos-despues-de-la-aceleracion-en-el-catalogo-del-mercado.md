---
title: 'Sku denegado en Skus recibidos después de la aceleración en el catálogo del mercado'
id: 4fleOaKNp6ALXdmZcAVCg0
status: PUBLISHED
createdAt: 2024-01-23T12:50:23.697Z
updatedAt: 2024-01-23T12:50:24.398Z
publishedAt: 2024-01-23T12:50:24.398Z
firstPublishedAt: 2024-01-23T12:50:24.398Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: sku-denied-on-received-skus-after-throttling-on-marketplace-catalog
locale: es
kiStatus: Backlog
internalReference: 970208
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al aprobar un nuevo producto en Skus Recibidos (automática o manualmente) el módulo de sugerencias se comunica con el catálogo del Marketplace para realizar la acción.
Si en este momento el módulo de catálogo devuelve un error de estrangulamiento, el sku acaba siendo rechazado por el matcher a pesar de tener toda la información correcta.


##

## Simulación


Este no es un escenario fácil (o habitual) de replicar porque depende de que otro sistema no funcione como debería y devuelva un throttling.



## Workaround


Aprobar el sku manualmente desde el área de rechazados de Skus Recibidos.





