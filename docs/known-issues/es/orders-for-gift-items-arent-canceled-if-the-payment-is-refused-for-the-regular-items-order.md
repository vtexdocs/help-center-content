---
title: 'Los pedidos de artículos de regalo no se cancelan si se rechaza el pago del pedido del artículo normal'
id: 6Yr7bEseJceNQiY2sw7Vtx
status: PUBLISHED
createdAt: 2022-10-18T22:34:21.726Z
updatedAt: 2022-11-25T21:49:34.223Z
publishedAt: 2022-11-25T21:49:34.223Z
firstPublishedAt: 2022-10-18T22:34:22.273Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: los-pedidos-de-articulos-de-regalo-no-se-cancelan-si-se-rechaza-el-pago-del-pedido-del-articulo-normal
locale: es
kiStatus: Backlog
internalReference: 679598
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los pedidos son independientes cuando no comparten la misma transacción de pago. Los pedidos creados para cumplir sólo con el artículo de regalo a través de un vendedor diferente a los demás artículos de una compra no tienen ninguna transacción de pago porque son gratuitos.

Si se rechaza el pago de los pedidos que contienen los artículos normales, no se cancelará el pedido del artículo de regalo, que seguirá su propio ciclo de vida, siendo aprobado para su envío.



## Simulación


Termina la compra en un carrito donde el vendedor que cumple con el artículo de regalo es diferente al vendedor del artículo normal. Se generarán dos pedidos, como se ha descrito anteriormente. El pago del primer artículo puede ser rechazado o cancelado, pero el pedido de regalo no recibirá esta cancelación.



## Workaround


N/A

