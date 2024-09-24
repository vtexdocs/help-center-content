---
title: 'Las actualizaciones de las comisiones de los vendedores no indexan las skus vinculadas'
id: GNX6sFV0thQkMLWEwxya9
status: PUBLISHED
createdAt: 2023-08-31T14:44:39.162Z
updatedAt: 2023-08-31T14:44:39.748Z
publishedAt: 2023-08-31T14:44:39.748Z
firstPublishedAt: 2023-08-31T14:44:39.748Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-commission-updates-does-not-index-binded-skus
locale: es
kiStatus: Backlog
internalReference: 891162
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el vendedor actualiza la comisión del vendedor en la interfaz de usuario de gestión de vendedores, los skus vinculados relacionados con este vendedor no se indexan automáticamente.

Nuestro sistema de pago utiliza la API stockkeepingunitbyid para obtener la información actualizada de la sku.

En esta API tenemos el objeto SkuSellers que contiene la información de la comisión. Pero si el sku no está indexado este objeto queda desactualizado.

Esto implica que en el checkout se obtiene el valor antiguo de la comisión.


##

## Simulación



1. Cambie la comisión del vendedor en la interfaz de usuario de gestión de vendedores.
2. Espere el tiempo de caché, alrededor de 10min.
3. Compruebe que en la simulación de pago la comisión está desactualizada.



## Workaround


Para evitar cerrar pedidos con el valor de comisión desactualizado, el comerciante puede indexar manualmente los skus afectados.






