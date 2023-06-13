---
title: Pedidos con changes pueden no enviar e-mail transaccional de Pedido Facturado
id: 1tyY0JutqQyJB18U9WTRXX
status: PUBLISHED
createdAt: 2019-02-17T20:45:54.094Z
updatedAt: 2022-12-22T15:19:12.863Z
publishedAt: 2022-12-22T15:19:12.863Z
firstPublishedAt: 2019-02-17T20:49:23.497Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Pricing & Promotions
slug: pedidos-con-changes-pueden-no-enviar-e-mail-transaccional-de-pedido
kiStatus: Backlog
internalReference: 
---

## Sumario

Cuando un pedido pasa por changes (es decir, cambios en pedidos ya completados, [https://help.vtex.com/es/tutorial/change-cambios-en-pedidos]), puede suceder que el e-mail de Pedido Facturado no se envíe por el sistema.

La agrupación que se realiza para emitir la factura no respeta los cambios, lo que lleva a este escenario y trae la posibilidad de que el correo electrónico del pedido facturado no se envíe correctamente.

Esto no ocurre con todos los pedidos que reciben cambios, sino con los que pasan por más de un change o cuando la agrupación creada por el sistema para la emisión de la factura no puede considerar los changes correctamente.

## Simulación

- Hacer un pedido;
- Realizar changes en el pedido, aumentando el valor y agregando un descuento (disminuyendo el valor);
- Note que el e-mail transaccional de pedido facturado no se enviará.

## Workaround

Actualmente no hay solución.

