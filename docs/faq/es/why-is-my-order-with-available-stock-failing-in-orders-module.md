---
title: '¿Por qué mi pedido con stock disponible está dando error en el módulo Pedidos?'
id: 2FZHMJFo8oyWW46gYSqqOc
status: PUBLISHED
createdAt: 2018-03-07T14:26:47.000Z
updatedAt: 2023-03-31T23:05:09.937Z
publishedAt: 2023-03-31T23:05:09.937Z
firstPublishedAt: 2018-03-07T15:14:02.766Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: por-que-mi-pedido-con-stock-disponible-esta-dando-error-en-el-modulo-pedidos
legacySlug: por-que-mi-pedido-con-stock-disponible-esta-dando-error-en-oms
---

Cuando el pago de un pedido tarda muchos días para ser aprobado, algunas reservas terminan expirando, ocasionando posibles errores en el [flujo del pedido](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196) en el módulo **Pedidos**, como productos con stock no disponible.

El status reservado tiene un plazo de validez y, si el pago no se confirma hasta esa fecha, el SKU se libera a otra compra, evitando la reserva innecesaria de items.

En ese caso específico, como su stock estaba reducido y usted no tenía SKUs para los dos pedidos, uno de ellos quedó descubierto, ocasionando el error en el flujo del pedido. Es como si la venta que ocurrió en medio del proceso de reserva cogiera su stock de sorpresa.

La solución aquí es agregar stock a ese SKU, o cancelar el pedido, ya que su reserva cayó, su SKU fue dirigido a otro pedido y el stock estaba sin cobertura.
