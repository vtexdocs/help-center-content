---
title: 'Suscripciones Los pedidos no pueden crearse una vez que la SKU se ha vinculado a un regalo no disponible'
id: 1hY76gsKwR07AohWMsmUXu
status: PUBLISHED
createdAt: 2022-03-07T14:33:11.578Z
updatedAt: 2023-05-19T19:13:18.924Z
publishedAt: 2023-05-19T19:13:18.924Z
firstPublishedAt: 2022-05-18T18:53:34.529Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: suscripciones-los-pedidos-no-pueden-crearse-una-vez-que-la-sku-se-ha-vinculado-a-un-regalo-no-disponible
locale: es
kiStatus: Fixed
internalReference: 395965
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Existe la condición de que los Pedidos desde Suscripción no se pueden crear porque están vinculados a un **regalo no disponible**, aunque los artículos de una suscripción estén disponibles.


##

## Simulación



- Para simular esto, necesita un regalo (como la promoción **Compre uno y llévese otro**) vinculado a un SKU de suscripción, y este regalo no debe estar disponible después de realizar la compra y antes del siguiente ciclo.
- El error en el ciclo de suscripción es "**No se pudo seleccionar un SLA para SKU {SKU ID}**".



## Workaround


La forma de evitar este escenario es eliminar el enlace de regalo agotado o garantizar que el regalo tiene existencias si desea crear un nuevo ciclo con el regalo.

