---
title: 'Pedidos: nueva vista de promoción por ítem (beta abierta)'
createdAt: 2026-07-31T00:00:00.000Z
updatedAt: 2026-07-31T00:00:00.000Z
contentType: updates
productTeam: Orders
slugEN: 2026-07-31-orders-new-item-level-promotions-display-open-beta
locale: es
announcementSynopsisES: 'El módulo Pedidos ahora muestra qué promociones se aplicaron a cada ítem de un pedido. Esta funcionalidad se encuentra disponible en beta abierta y se activa previa solicitud.'
tags:
  - Beta
  - Pedidos
  - Promociones
---

Presentamos una nueva vista de promociones en **Pedidos**, donde puedes consultar las promociones que se aplicaron a cada ítem de un pedido y los beneficios del carrito que esos ítems activaron. Con este cambio, el personal de la tienda puede consultar el desglose de los descuentos directamente en la pantalla de detalles del pedido sin salir del pedido ni consultar las promociones en otra sección. Esta funcionalidad está disponible globalmente en beta abierta y se activa previa solicitud.

## ¿Qué cambió?

Antes, los detalles del pedido no mostraban cómo se aplicaba una promoción a cada ítem. Ahora, el módulo Pedidos muestra la información de las promociones por ítem para que puedas ver exactamente cuáles se aplicaron y qué impacto tuvieron.

La información de las promociones se muestra en distintas secciones de Pedidos:

- **Partidas de productos** en agrupaciones sugeridas, facturas emitidas, ítems devueltos y notificaciones al ERP.
- **Modal Todos los ítems**, que muestra la lista completa de ítems y se accede desde la barra lateral de detalles del pedido.
- **Flujo de creación de factura**, donde se muestran las promociones aplicadas a cada ítem.

La vista admite los siguientes tipos de promociones: Regular, Descuento progresivo, Comprar juntos, Más por menos, Compra uno y lleva uno gratis y Campaña.

Se muestran los siguientes elementos:

- **Insignia de promociones:** una insignia verde al lado de la fila del producto que indica que se aplicaron una o más promociones. Cuando hay varias promociones, la insignia muestra la cantidad. Los ítems de regalo (de promociones del tipo Compra uno y lleva uno gratis) muestran la insignia de un regalo.
- **Tarjetas flotantes de promociones:** al pasar el cursor sobre la insignia se muestra un panel con dos secciones. Cada fila muestra el tipo de promoción, el nombre y el valor del descuento, además de un descuento total cuando hay más de una promoción aplicada. Las dos secciones son las siguientes:
  - **Promociones aplicadas al ítem**: descuentos aplicados directamente al ítem.
  - **Promociones aplicadas al carrito**: descuentos en el envío y otros descuentos aplicados al carrito.
- **Precio tachado:** el precio de lista original aparece tachado junto al precio final (con el descuento aplicado).

> ℹ️ La página Pedidos muestra el resultado de las promociones que ya se aplicaron durante el checkout. No crea ni gestiona promociones. Para configurar promociones accede al módulo [Promociones](/es/docs/tracks/como-funcionan-las-promociones).

## ¿Por qué realizamos este cambio?

Las principales ventajas de poder consultar cómo afectan los descuentos a un pedido sin salir de la pantalla de detalles son:

- Información clara sobre las promociones que se aplican a cada ítem y el descuento que aporta cada una.
- Una vista clara de los beneficios aplicados al carrito, como los descuentos de envío, que se activaron a partir de los ítems del pedido.
- Verificación más rápida del precio final de un pedido antes de emitir facturas o procesar devoluciones.

## ¿Qué se necesita hacer?

Esta funcionalidad ya se encuentra disponible en beta abierta. Para probarla, abre un ticket con el [Soporte VTEX](/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex) solicitando acceso.
