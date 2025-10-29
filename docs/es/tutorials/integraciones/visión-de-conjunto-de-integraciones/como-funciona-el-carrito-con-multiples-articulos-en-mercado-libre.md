---
title: '¿Cómo funciona el carrito con múltiples artículos en Mercado Libre?'
id: 4dC1deB8bY260W0Ge4ycOq
status: PUBLISHED
createdAt: 2019-01-24T20:45:36.404Z
updatedAt: 2019-12-31T15:26:21.601Z
publishedAt: 2019-12-31T15:26:21.601Z
firstPublishedAt: 2019-01-24T22:08:07.847Z
contentType: tutorial
productTeam: Channels
author: 245tA425AIeioKAk2eaiwS
slugEN: how-does-the-cart-with-multiple-items-work-in-mercado-livre
legacySlug: como-funciona-el-carrito-con-multiples-articulos-en-mercado-libre
locale: es
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

Mercado Libre ha realizado una actualización que permite la inclusión de más de un artículo diferente en el carrito. El llamado __carrito con múltiples artículos__ trajo una nueva lógica de tratamiento de la identificación de pedidos y productos, lo que hizo que fuera necesario cambiar la forma en que VTEX trabaja con esos datos.

## Cómo funciona en Mercado Libre
Con la nueva funcionalidad, Mercado Libre pasó a exhibir sólo un ID para el pedido, independientemente de la cantidad de productos añadidos en el carrito. Sin embargo, el back-end no trabaja con ese dato, asignando un ID diferente par cada artículo, además de un ID único para la entrega.

Esto significa que el código único de identificación del pedido sólo aparece en la pantalla del usuario final y no forma parte de los datos que se comparten con otros sistemas (como la plataforma VTEX).

## Cómo funciona en VTEX
Mercado Libre envía a VTEX los IDs procesados en el back-end: el de la entrega y los indiviales de cada ítem del pedido. Como el ID único del pedido no se envía a nuestra plataforma, fue necesario hacer un cambio en nuestra integración con Mercado Livre.

En lugar de usar los IDs de cada artículo (lo que generaría pedidos separados en nuestro sistema), invertimos la lógica y pasamos a considerar el ID de entrega para identificar el pedido como un todo. Así, la integración puede trabajar con sólo el código de entrega (shipment_Id), el único proporcionado por Mercado Libre, que es compartido por todos los productos de un mismo pedido.

Usted puede encontrar los dos IDs a través del informe enviado desde el panel de integraciones en el Admin de VTEX.

![mercalo-livre-pedido-id-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/visión-de-conjunto-de-integraciones/como-funciona-el-carrito-con-multiples-articulos-en-mercado-libre_1.png)

> ⚠️ Esta lógica de funcionamiento se aplica a todos los tipos de entrega, con excepción de aquellos que incluyen pickup points. En estos casos, la plataforma sigue utilizando el identificador antiguo.
