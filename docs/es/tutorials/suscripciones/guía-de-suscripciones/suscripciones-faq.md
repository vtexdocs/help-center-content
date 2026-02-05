---
title: 'Suscripciones: FAQ'
id: 2yumbsdX8aMQiXqKtFY4tE
status: PUBLISHED
createdAt: 2025-02-20T12:33:13.030Z
updatedAt: 2025-10-24T14:42:14.291Z
publishedAt: 2025-10-24T14:42:14.291Z
firstPublishedAt: 2025-02-20T12:42:22.848Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: subscriptions-faq
legacySlug: suscripciones-faq
locale: es
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

Esta guía tiene el objetivo de responder a las preguntas más frecuentes sobre Suscripciones. Para navegar, utilice la siguiente tabla de contenido:

### ¿Puedo tener más de una suscripción en mi tienda?
El número de suscripciones es ilimitado, tanto para su tienda como para su cliente. Esto significa que no hay un número máximo de suscripciones que puedan ser vendidas por su tienda o compradas por su cliente. Sin embargo, es importante conocer las condiciones que se aplican en las suscripciones.

### Después de crear una suscripción, ¿el cliente puede crear otras?
Sí, el cliente puede crear todas las suscripciones que desee.

### ¿Puede mi cliente comprar por suscripción y retirar en las tiendas o en puntos de recogida?
Sí, lea el artículo [Puntos de recogida para pedidos de suscripción (Beta)](/es/docs/tutorials/puntos-de-recogida-para-pedidos-de-suscripcion) para más información.

### ¿Puede mi cliente registrar más de una dirección en su suscripción?
No es posible registrar más de una dirección en la misma suscripción.

### ¿Puede mi cliente cambiar la dirección de envío de la suscripción?
Sí, el cliente puede cambiar la dirección en Mi cuenta.

Los retailers también pueden modificar la dirección cuantas veces sea necesario utilizando el endpoint [Update subscription by ID](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#patch-/api/rns/pub/subscriptions/-id-) a través del campo `shippingAddress`.

### ¿Puede mi cliente crear una suscripción con varios productos?
Sí, pueden crearse suscripciones con varios SKUs.

La cantidad de ítems en la suscripción dependerá del stock disponible en el momento en que se genera el pedido de recurrencia. Por ejemplo, si el cliente tiene 4 SKUs en la suscripción y solo hay 3 disponibles, la suscripción se generará con esos 3 SKUs. En estos casos, el ítem faltante no se cobra y la suscripción se marca como Parcial en **Mi cuenta**.

También puedes comunicar al cliente a través del módulo [Centro de mensajes](/es/docs/tutorials/correos-electronicos-transaccionales-para-pedidos-de-suscripciones) que el pedido de suscripción se generó de manera parcial. La clave de esta plantilla de mensaje es `vtexcommerce-subscriptions-partialorder`.

### ¿Puedo otorgar un descuento en los productos de un plan de suscripción?
Sí, siempre y cuando crees una promoción regular y marques la casilla `Pedido de suscripción`. Para más información sobre cómo crear promociones, consulta la serie de artículos [Crear promoción Regular](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI).

### ¿Cuál es el plazo de entrega y la regla de flete?
El plazo de entrega y la regla de flete se basan en las políticas de entrega vigentes en la tienda en el momento del ciclo del pedido.

### ¿Puede mi cliente pagar en cuotas sus pedidos de suscripción?
Sí, cuando se configure la tienda para permitir el pago de pedidos de suscripción en cuotas. Esto se realiza a través del endpoint [Editar configuración de suscripciones](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings), marcando los campos `isMultipleInstallmentsEnabledOnCreation` y `isMultipleInstallmentsEnabledOnUpdate` como `true` (verdadero).

### ¿Qué pasa si la tarjeta de mi cliente es cancelada?
No se genera el pedido de suscripción debido a la falta de medio de pago. Gracias al email de recordatorio del pedido de suscripción enviado dos días antes de que se genere, el cliente puede verificar la validez de la tarjeta con anterioridad.

Si la tarjeta del cliente fue cancelada y este no se dio cuenta antes de que se generara el pedido de la suscripción, puede generar un pedido individual en **Mis suscripciones**. Ese pedido tiene todos los ítems de la suscripción, pero no cuenta como un pedido de la suscripción y no cambia la fecha de suscripciones pasadas o futuras.

Además, el cliente puede cambiar la tarjeta registrada en la suscripción en cualquier momento. Si la tarjeta del cliente fue cancelada y este ingresó una nueva tarjeta después de la fecha de recurrencia, el pedido de suscripción no se genera y el próximo cobro se intentará en la nueva tarjeta.

Nuestro módulo [Centro de mensajes](/es/docs/tutorials/correos-electronicos-transaccionales-para-pedidos-de-suscripciones) permite activar el envío de un email para comunicar que no se aprobó el pago de la suscripción. La clave de esta plantilla de mensaje es `vtexcommerce-subscriptions-payment-not-approved`.

### ¿Puede mi cliente solicitar una entrega programada para pedidos de Suscripción?
Todavía no es posible solicitar entregas programadas para pedidos de Suscripción. Ese escenario no se atiende para que su cliente no se vea afectado negativamente si la configuración logística de su tienda cambia. Sin embargo, su cliente puede crear una nueva suscripción con la fecha futura de la primera entrega en el día que desee.   

### ¿Cómo puedo cancelar, omitir o pausar un pedido de suscripción de mi cliente?
Actualmente no es posible modificar la suscripción del cliente a través del Admin VTEX. Solo se puede pausar, cancelar u omitir un pedido de suscripción a través de Televentas, en el dashboard de suscripciones del cliente (Mi cuenta) o mediante [API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#overview).

### ¿Es posible agregar ítems de Sellers o Marketplaces en un pedido de Suscripción?
Suscripciones pueden ser creadas con ítems de la propia tienda, de sellers VTEX o de sellers white lable (cuenta franquicia).

### Si el administrador de la tienda crea una regla para un valor mínimo, ¿esta regla podrá afectar a las suscripciones?
Sí, si el valor del pedido de suscripción es inferior al límite definido por la configuración _Valor mínimo total de la compra_. Tenga en cuenta que nuestro sistema de Suscripción no admite ciclos, o pedidos con un valor total de $0.

### Necesito que en el checkout solo se muestre el plan, sin listar los productos que lo componen, y que el valor del plan refleje el total de los productos seleccionados que tienen descuento. ¿Es posible crear esta personalización?
No, para incluir una suscripción en el checkout, es necesario que al menos un ítem esté suscrito.

### Si el precio de un SKU cambia, ¿se verá afectada la suscripción de mi cliente?
De forma predeterminada, sí. El precio que paga el cliente por su suscripción se basa en el precio registrado para cada SKU. La suscripción del cliente no sigue las condiciones de precio del primer pedido realizado. El pedido se realiza con los mismos productos que el pedido original, pero el precio se calculará en función de lo que está configurado en el momento del siguiente ciclo del pedido.

Puedes modificar la configuración para nuevas suscripciones mediante API utilizando el request [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings). Envía `true` (verdadero) en el campo `useItemPriceFromOriginalOrder` para utilizar el precio del primer pedido.

### ¿A qué hora se crean pedidos de suscripción?
De forma predeterminada, la creación de pedidos de suscripción se realiza entre 6:00 y 7:00 a. m. UTC-3.

Sin embargo, puedes establecer otra hora mediante API utilizando el request [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings). Envía la hora nueva en el campo `executionHourInUtc`.

### ¿La funcionalidad Suscripciones funciona con el Seller Portal?
No, Suscripciones no funciona con el [Seller Portal](/es/tutorial/how-to-set-up-your-store-on-seller-portal).

### ¿Cómo crear suscripciones a partir de pedidos originales que tienen SKUs con anexos?
De forma predeterminada, las tiendas no crean pedidos de suscripción incorporando [anexos](/es/docs/tutorials/que-es-un-anexo) de SKUs del pedido original, es decir, los anexos no se consideran en pedidos recurrentes. Esta configuración se puede cambiar, pero solo a través de API utilizando el endpoint [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings). Más información en [How to keep attachments from original orders in subscriptions](https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions).
