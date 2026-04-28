---
title: 'Change Seller'
id: 5TBAwO2kOAMw44uyaaQMQO
status: PUBLISHED
createdAt: 2018-02-05T21:31:15.704Z
updatedAt: 2023-06-13T14:35:00.451Z
publishedAt: 2023-06-13T14:35:00.451Z
firstPublishedAt: 2018-03-05T14:10:53.091Z
contentType: tutorial
productTeam: Channels
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: change-seller
legacySlug: vea-como-utilizar-change-seller
locale: es
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

El Change Seller es la funcionalidad que da a los *marketplaces* la autonomía para cambiar el *seller* que entregará el pedido.

> ℹ️ La funcionalidad Change Seller solo se puede configurar a través de las APIs. Para más información, consulte la [documentación Change Seller para desarrolladores](https://developers.vtex.com/vtex-rest-api/docs/change-seller).

Un cambio de *seller* puede ocurrir en dos situaciones:

- *Seller* cancela un pedido.
- *Marketplace* decide cambiar el *seller*.

![seller_cancela_pedido_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/pedidos/change-seller_1.png)

Puede [configurar el periodo para cambiar de seller de 0 a 30 días](https://developers.vtex.com/vtex-rest-api/reference/updatewindowtochangeseller), por defecto, la ventana de cambio es de dos días. Al configurar la ventana a 0 días, no hay un período efectivo para el cambio de _sellers_ y la _feature_, aunque configurada, no funciona en la práctica, lo que provoca que el pedido proceda a la cancelación.

Cuando el *seller* le notifica la cancelación, el *marketplace* puede configurar el número de días para actuar y decidir entre cancelar la compra o cambiar de * seller.* Tenga en cuenta que si opta por el cambio, el *marketplace* es el responsable de comunicarlo al cliente final.

![mkt_cancela_seller_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/pedidos/change-seller_2.png)

## Limitaciones

El cambio de _seller_ no puede realizarse en las siguientes situaciones:

- El pedido tiene ítems con servicios o anexos.
- Pedidos intermedios en caso de [Multilevel Omnichannel Inventory](/es/docs/tutorials/multilevel-omnichannel-inventory).
- Pedidos con otros cambios.
- Pedidos con impuestos.
- Pedidos con [split de pago](/es/docs/tutorials/split-de-pagos) que no utilizan tarjeta de crédito.
- Pedidos con *split* de pago entre diferentes *sellers*.
- Pedidos que utilizan el medio de pago del *seller* y no utilizan tarjeta de crédito tokenizada.
- Pedidos que utilizan el medio de pago del *seller* y tienen más de un comerciante involucrado.
- Pedidos que utilizan el medio de pago del *seller* y tienen pago en cuotas con intereses.
- Pedidos que utilizan el medio de pago del *seller* y que no tienen las mismas condiciones de pago en cuotas y medios de pago en el nuevo *seller.* 
- Pedidos realizados antes del anuncio de Change Seller.
- Pedidos en los que el *seller* original no es de VTEX.
- Cambio a un nuevo *seller *que no es de VTEX cuando hay servicios u [assembly options](/es/docs/tutorials/assembly-options) involucrados.
- Cuando la nueva opción solicita el envío por recogida en [puntos de recogida](/es/docs/tutorials/puntos-de-recogida).
- En caso de que el *marketplace* decida cambiar de *seller*, el cambio solo podrá realizarse en los [status](/es/docs/tutorials/flujo-y-status-de-pedidos) `Pago pendiente` y `Esperando confirmación del seller`.
- Pedidos de sellers externos a VTEX.
- Si la transportadora no está asociada a la misma [política comercial](/es/docs/tutorials/como-funciona-una-politica-comercial) del pedido.
