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
slug: change-seller
locale: es
legacySlug: vea-como-utilizar-change-seller
subcategory: 5m1qqfnmfYKsO0KiOQC8Ky
---

El Change Seller es la funcionalidad que da a los <i>marketplaces</i> la autonomía para cambiar el <i>seller</i> que entregará el pedido.

<div class = "alert alert-info">
La funcionalidad Change Seller solo se puede configurar a través de las APIs. Para más información, consulte la <a href="https://developers.vtex.com/vtex-rest-api/docs/change-seller">documentación Change Seller para desarrolladores</a>.
</div>

Un cambio de <i>seller</i> puede ocurrir en dos situaciones:

- <i>Seller</i> cancela un pedido.
- <i>Marketplace</i> decide cambiar el <i>seller</i>.

![seller_cancela_pedido_ES](//images.ctfassets.net/alneenqid6w5/1w1If5Xirav4fZKLQlpkPn/9a1899752e5df76040cbcbdb12aaf456/seller_cancela_pedido_ES.png)

Puede [configurar el periodo para cambiar de seller de 0 a 30 días](https://developers.vtex.com/vtex-rest-api/reference/updatewindowtochangeseller), por defecto, la ventana de cambio es de dos días. Al configurar la ventana a 0 días, no hay un período efectivo para el cambio de _sellers_ y la _feature_, aunque configurada, no funciona en la práctica, lo que provoca que el pedido proceda a la cancelación.

Cuando el <i>seller</i> le notifica la cancelación, el <i>marketplace</i> puede configurar el número de días para actuar y decidir entre cancelar la compra o cambiar de <i> seller.</i> Tenga en cuenta que si opta por el cambio, el <i>marketplace</i> es el responsable de comunicarlo al cliente final.

![mkt_cancela_seller_ES](//images.ctfassets.net/alneenqid6w5/3jMZldSV2RLu4P0xoUyrE/28c420f005191ccba061053f44833275/mkt_cancela_seller_ES.png)

## Limitaciones

El cambio de _seller_ no puede realizarse en las siguientes situaciones:

- El pedido tiene ítems con servicios o anexos.
- Pedidos intermedios en caso de [Multilevel Omnichannel Inventory](https://help.vtex.com/es/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4).
- Pedidos con otros cambios.
- Pedidos con impuestos.
- Pedidos con [split de pago](https://help.vtex.com/es/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) que no utilizan tarjeta de crédito.
- Pedidos con <i>split</i> de pago entre diferentes <i>sellers</i>.
- Pedidos que utilizan el medio de pago del <i>seller</i> y no utilizan tarjeta de crédito tokenizada.
- Pedidos que utilizan el medio de pago del <i>seller</i> y tienen más de un comerciante involucrado.
- Pedidos que utilizan el medio de pago del <i>seller</i> y tienen pago en cuotas con intereses.
- Pedidos que utilizan el medio de pago del <i>seller</i> y que no tienen las mismas condiciones de pago en cuotas y medios de pago en el nuevo <i>seller.</i> 
- Pedidos realizados antes del anuncio de Change Seller.
- Pedidos en los que el <i>seller</i> original no es de VTEX.
- Cambio a un nuevo <i>seller </i>que no es de VTEX cuando hay servicios u [assembly options](https://help.vtex.com/es/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH) involucrados.
- Cuando la nueva opción solicita el envío por recogida en [puntos de recogida](https://help.vtex.com/es/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).
- En caso de que el <i>marketplace</i> decida cambiar de <i>seller</i>, el cambio solo podrá realizarse en los [status](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196) `Pago pendiente` y `Esperando confirmación del seller`.
- Pedidos de sellers externos a VTEX.
- Si la transportadora no está asociada a la misma [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) del pedido.
