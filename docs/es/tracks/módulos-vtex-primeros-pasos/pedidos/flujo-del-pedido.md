---
title: 'Flujo del pedido'
id: 4811ExCe3WrEiRMV3sy9n8
status: PUBLISHED
createdAt: 2019-11-14T13:46:22.682Z
updatedAt: 2023-10-24T15:32:07.852Z
publishedAt: 2023-10-24T15:32:07.852Z
firstPublishedAt: 2019-11-14T15:38:27.680Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: order-flow
locale: es
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: pedidos
order: 2
---

El [flujo del pedido](https://help.vtex.com/es/tutorial/order-flow-and-status--tutorials_196) es la ruta que sigue un pedido en la plataforma VTEX, desde el momento en que el cliente hace clic en el botón Pagar hasta que se factura o cancela el pedido.

Los cambios en el pedido - ya sean causados por el cliente, la tienda o los sistemas externos - generan cambios en el __status del pedido__. Y con eso, el pedido se mueve dentro del flujo.

## Marketplaces y Sellers

Los conceptos de [marketplace y seller](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) son fundamentales para comprender el flujo de un pedido en VTEX. Vamos a entender por qué:

- __Marketplace__ es el ambiente donde se cierra el pedido, es decir, donde el cliente realiza el proceso de pago.
- __Seller__ es el propietario del SKU. Por lo tanto, es responsable del fulfillment, es decir, de entregar el producto al cliente.

> ℹ️ Cuando la tienda vende productos en su propio ambiente y realiza sus propias entregas es Marketplace y Seller al mismo tiempo.

Es importante comprender estos conceptos porque el flujo de pedidos en el Marketplace es diferente del flujo en el Seller.

## Flujo del pedido en el Marketplace

![screenshoot fluxo marketplace ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/pedidos/flujo-del-pedido_1.JPG)

Se produce cuando la tienda actúa solamente como Marketplace en el pedido. O sea, es cuando la tienda vende productos de otra tienda: su Seller.

En este caso, la responsabilidad de la tienda se centra en __aprobar el pago__.

Una vez que el cliente completa la compra, la tienda debe esperar la confirmación del Seller antes de proceder con el pedido. Esto se debe a que necesita la confirmación del Seller, que posee los productos, de que será posible completar el pedido.

Una vez que el Seller envía esta confirmación a VTEX, el pedido pasa al estado `Pago Pendiente`. Si la transacción se completa con éxito, el status se convierte en `Pago Aprobado`.

El envío se autoriza y luego el pedido ingresa el status `Carencia para la cancelación`. En este status, el cliente todavía puede cancelar el pedido. Por defecto, el período de gracia es de media hora, pero esto se puede ajustar en la plataforma.

## Flujo del pedido en el Seller

![screenshoot fluxo seller ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/pedidos/flujo-del-pedido_2.JPG)

Se produce cuando la tienda actúa como Seller. O sea, es entonces cuando ella posee el producto.

En este caso, el pedido se cerró en otra tienda (Marketplace). Por lo tanto, el flujo del Seller comienza tan pronto como se haya realizado y aprobado el pago.

El Seller debe autorizar el envío para que el pedido salga del status `Esperando autorización para despachar` e ingrese en el status `Carencia para la cancelación`.

Una vez que se finaliza el período de carencia, el status se convierte en `Preparado para manejo`, lo que significa que el Seller puede proceder al picking y packing.

El siguiente status es `Preparando entrega`, cuando el Seller prepara la factura y el seguimiento del pedido.

## Flujo completo del pedido

![screenshoot fluxo completo ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/pedidos/flujo-del-pedido_3.JPG)

Ocurre cuando la tienda es tanto Marketplace como Seller. Es decir, es cuando el pedido se cerró en la tienda y la tienda en sí es el propietario del producto, siendo responsable del fulfillment.

En este caso, el status del pedido inicial cambia automáticamente de `Aguardando decisión del Seller` a `Pago Pendiente`

Una vez que el pago ha sido aprobado, el pedido pasa a `Pago Aprobado` y luego a `Carencia para la cancelación`.y, cuando se finaliza el período de carencia, a `Preparado para manejo` y finalmente a `Preparando entrega`.

Es decir, en este caso, los pasos de pago y entrega son responsabilidad de la tienda.

> ℹ️ Cada pedido se completa solo en uno de dos estados posibles:<br> <ul> <li>Facturado</li> <li>Cancelado</li> </ul>

> ℹ️ Para comprender el status de cada pedido con más detalle, consulte nuestra tabla con todos los status en [Entendiendo los status](https://help.vtex.com/es/tutorial/fluxo-de-pedido--tutorials_196#entiendo-los-estados).
