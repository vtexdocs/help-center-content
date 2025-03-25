---
title: 'Cambiar pedidos completados'
id: 3d1XLIgPQcwaKGyMiWaYog
status: ARCHIVED
createdAt: 2017-11-08T14:04:58.922Z
updatedAt: 2021-05-11T21:20:45.295Z
publishedAt: 
firstPublishedAt: 2017-11-08T14:08:29.393Z
contentType: tutorial
productTeam: Post-purchase
author: authors_35
slugEN: change-making-changes-to-an-order
locale: es
legacySlug: change-cambios-en-pedidos
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Lidiar con eventuales cambios en las compras luego de que el cliente finalice un pedido ha sido un problema recurrente en el mercado online, principalmente considerando el área de grocery. Esos cambios pueden ocurrir por varios motivos como, por ejemplo, fin del stock de un determinado ítem, cambios en las mediciones originales, reposición de ítem por un similar, descuentos por eventuales trastornos, etc.

Para suplir ese tipo de demanda, VTEX pone a disposición del propietario de la tienda la funcionalidad __Change__, que permite crear descuentos, modificar ítems y/o aumentar precio.

La funcionalidad Change se permite en el estado Handling, Waiting for fulfillment o Ready for Invoicing y se puede dividir en tres partes:

1. Modificación de ítem: permite la remoción y la adición de SKU. Sin embargo, queda a cargo del propietario de la tienda la actualización de stock y reserva.
2. Creación de descuento: permite la cancelación de un determinado valor de las transacciones existentes en pedido.
3. Adición de precio: crea una nueva transacción con el valor adicional sin pago en cuotas. Esa funcionalidad está restricta solamente a compras con tarjeta de crédito. El conector también debe soportar compras sin uso de CVV, además de sequences duplicados.

Esta funcionalidad está 100% disponible vía [API](https://developers.vtex.com/reference/orders#registerchange). Vía interfaz el módulo de Gestión de pedidos actualmente no permite la adición de precio.

