---
title: 'Problema con el reembolso total de pedidos con intereses'
id: 5q0okPuWiGe8O4o9FEQCnI
status: PUBLISHED
createdAt: 2021-09-17T14:06:59.342Z
updatedAt: 2022-12-22T14:52:27.138Z
publishedAt: 2022-12-22T14:52:27.138Z
firstPublishedAt: 2021-09-17T14:13:21.966Z
contentType: knownIssue
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
tag: Order Management
slug: problema-con-el-reembolso-total-de-pedidos-con-intereses
kiStatus: Backlog
internalReference: 
---

## Sumario

La plataforma no permite el reembolso de valores superiores al valor total del pedido. Esto se convierte en un problema cuando se quiere reembolsar pedidos en los que la forma de pago implica la aplicación de intereses.

Además del **valor total**, los pedidos tienen un **valor facturado** que, por cuestiones legales, no debe incluir los intereses aplicados en función de la forma de pago.

En consecuencia, la plataforma devuelve un error con `status 400` cuando se intenta emitir una factura de reembolso con un valor superior al facturado anteriormente.

## Simulación

1. En tu tienda, crea un pedido con intereses aplicados al pago;
2. Intenta realizar el reembolso del valor total pagado mediante API con la [solicitud de envío de factura](https://developers.vtex.com/vtex-rest-api/reference/invoice#invoicenotification);
3. Observa que la API devuelve un error con `status 400`, advirtiendo que no es posible emitir una factura del tipo `ENTRADA` con un valor superior al del pedido.

## Workaround

Puedes emitir primero una factura de reembolso con el valor facturado (sin intereses) y luego otra con el valor de los intereses.

