---
title: Rastreo de pedidos a través de JadLog devuelve confirmación de entrega sin que se haya entregado el pedido
id: 6tu2YbryI8gkiWiE0Ioe2g
status: PUBLISHED
createdAt: 2017-10-02T19:59:26.648Z
updatedAt: 2022-12-22T14:52:58.644Z
publishedAt: 2022-12-22T14:52:58.644Z
firstPublishedAt: 2017-10-02T20:37:26.997Z
contentType: knownIssue
productTeam: Post-purchase
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Order Management
slug: rastreo-de-pedidos-a-traves-de-jadlog-devuelve-confirmacion-de-entrega-sin-que-se-haya-entregado-el-pedido
kiStatus: Backlog
internalReference: 
---

## Sumario

El rastreo de pedidos de JadLog está devolviendo a VTEX la confirmación de la entrega sin que el pedido haya sido completado. Es decir, al recibir la información de que la entrega fue hecha, automáticamente, enviamos a los clientes el e-mail de confirmación, aunque el producto no esté en la dirección de entrega.

## Simulación

Una vez finalizado el pedido, los emails de rastreo se envían al cliente. Sin embargo, con el error del intercambio de información, es posible notar que los mensajes de confirmación de entrega se envían al mismo tiempo (o hasta antes) que los emails de envío de pedidos.

Ejemplo:

- 02/10 15:21:57 - Pedido es hecho
- 02/10 15:22:02 - Pedido es pagado y su pago es aprobado
- 02/10 15:22:31 - E-mail de confirmación de entrega del pedido
- 02/10 15:22:54 - E-mail de confirmación de que el pedido fue enviado

## Workaround

Por el momento, la mejor opción es inhabilitar el rastreo vía JadLog.

