---
title: 'Pedidos: vista de promoción por ítem disponible para todas las tiendas'
createdAt: 2026-10-28T12:00:00.000Z
updatedAt: 2026-10-28T12:00:00.000Z
contentType: updates
productTeam: Orders
slugEN: 2026-10-28-orders-item-level-promotions-display-available-for-all-stores
locale: es
announcementSynopsisES: 'La vista de promociones por ítem en los detalles del pedido sale de la beta abierta y pasa a estar disponible para todas las tiendas VTEX.'
tags:
  - Nueva funcionalidad
  - Admin
  - Pedidos
---

La vista de promociones por ítem del módulo **Pedidos** del Admin VTEX ahora está en disponibilidad general para todas las tiendas, en todas las regiones. Esta funcionalidad, [lanzada en beta abierta](https://help.vtex.com/es/announcements/2026-07-31-pedidos-nueva-vista-de-promocion-por-item-beta-abierta) en julio de 2026, muestra las promociones que se aplicaron a cada ítem de un pedido y qué beneficios del carrito activaron esos ítems, directamente en la pantalla de detalles del pedido.

## ¿Qué cambió?

Durante la beta abierta, la vista de promociones por ítem debía activarse previa solicitud al Soporte VTEX. Ahora está activa de forma predeterminada en todas las cuentas VTEX, sin necesidad de abrir un ticket.

Con esta funcionalidad, en cada ítem del pedido se muestran los siguientes elementos:

- **Insignia de promociones:** una insignia verde al lado de la fila del producto que indica que se aplicaron una o más promociones. Cuando hay varias promociones, la insignia muestra la cantidad. Los ítems de regalo (de promociones del tipo Compra uno y lleva uno gratis) muestran la insignia de un regalo.
- **Tarjetas flotantes de promociones:** al pasar el cursor sobre la insignia, se abre un detalle con el tipo, el nombre y el valor de descuento de cada promoción, además de un descuento total cuando hay más de una promoción aplicada. Las promociones se dividen en dos secciones: **Promociones aplicadas al ítem** y **Promociones aplicadas al carrito**.
- **Precio tachado:** el precio de lista original aparece tachado junto al precio final (con el descuento aplicado).

La información de las promociones se muestra en las filas de productos de los paquetes sugeridos, las facturas emitidas, los ítems devueltos y los paquetes de notificación al ERP, en el modal **Todos los ítems** y en el flujo de creación de factura. La funcionalidad admite los siguientes tipos de promoción: Regular, Descuento progresivo, Comprar juntos, Más por menos, Compra uno y lleva uno gratis y Campaña.

> ℹ️ El módulo **Pedidos** muestra el resultado de las promociones que ya se aplicaron durante el checkout. No crea ni gestiona promociones. Para configurar promociones accede al módulo [Promociones](/es/docs/tracks/como-funcionan-las-promociones).

## ¿Por qué realizamos este cambio?

El periodo de beta abierta permitió validar la funcionalidad con tiendas de distintos perfiles y ajustar la experiencia antes de liberarla para todas las cuentas. Con la disponibilidad general, todas las operaciones de tienda pasan a tener visibilidad completa sobre los descuentos que se aplican a un pedido, sin salir de la pantalla de detalles. Las principales ventajas son:

- Información clara sobre las promociones que se aplican a cada ítem y el descuento que aporta cada una.
- Una visión clara de los beneficios aplicados al carrito, como los descuentos de envío, que se activaron a partir de los ítems del pedido.
- Verificación más rápida del precio final de un pedido antes de emitir facturas o procesar devoluciones.

## ¿Qué se necesita hacer?

No es necesaria ninguna acción. La vista de promociones por ítem ya está disponible en todas las tiendas VTEX. Para comprobarlo, accede a un pedido en **Pedidos** > **Todos los pedidos** en el Admin VTEX y pasa el cursor sobre la insignia de promociones junto a un ítem con descuento.

Para más información sobre los detalles de un pedido, consulta [Página de detalles del pedido](/es/docs/tutorials/pagina-de-detalles-del-pedido).
