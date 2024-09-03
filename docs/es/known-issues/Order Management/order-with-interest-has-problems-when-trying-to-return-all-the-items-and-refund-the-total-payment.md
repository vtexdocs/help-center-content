---
title: 'El pedido con intereses tiene problemas al intentar devolver todos los artículos y reembolsar el pago total'
id: 2J5XD9jjQfZWMVg0yYMzUa
status: PUBLISHED
createdAt: 2023-09-18T20:53:08.156Z
updatedAt: 2023-09-18T20:53:08.813Z
publishedAt: 2023-09-18T20:53:08.813Z
firstPublishedAt: 2023-09-18T20:53:08.813Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: el-pedido-con-intereses-tiene-problemas-al-intentar-devolver-todos-los-articulos-y-reembolsar-el-pago-total
locale: es
kiStatus: Backlog
internalReference: 376077
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La plataforma impide la devolución de importes superiores al total del pedido. Esto se convierte en un problema para la devolución de pedidos en los que la forma de pago conlleva intereses.
Además del **importe total**, los pedidos tienen un **importe facturado** que, por motivos legales, no puede incluir los intereses aplicados en función de la forma de pago.
En consecuencia, la plataforma devuelve un error con estado 400 cuando se intenta emitir una factura de devolución con un importe superior al facturado previamente.

###

###

## Simulación



1. En su tienda, cree un pedido con intereses aplicados al pago;
2. Intenta realizar una devolución del importe total pagado a través de la API con la solicitud de envío de factura;
3. Observe que la API devuelve un error con el estado 400, indicando que no es posible emitir una factura de tipo INPUT con un importe superior al importe total del pedido.

###

###

## Workaround


N/A




