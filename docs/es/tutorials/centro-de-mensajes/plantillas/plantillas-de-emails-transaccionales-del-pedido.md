---
title: 'Plantillas de emails transaccionales del pedido'
id: 3g2S2kqBOoSGcCaqMYK2my
status: PUBLISHED
createdAt: 2018-11-06T21:01:19.818Z
updatedAt: 2025-06-04T13:15:36.864Z
publishedAt: 2025-06-04T13:15:36.864Z
firstPublishedAt: 2018-11-07T18:11:42.445Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slugEN: order-transactional-email-templates
legacySlug: lista-de-templates-de-correo-eletronico-en-el-message-center
locale: es
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

El objetivo de este artículo es listar las plantillas de e-mails transaccionales que tenemos como estándar en VTEX para el flujo del pedido. Además, vamos a especificar el gatillo necesario para el disparo de cada e-mail.

> ⚠️ Atención: las solicitudes de origen Fulfillment no reciben correos electrónicos transaccionales de VTEX. En este caso, el disparo de correos electrónicos queda a cargo del propio mercado.

Para acceder a las plantillas, siga los siguientes pasos:

1. En el Admin VTEX, accede a **Configuración de la tienda > Plantillas de email > Plantillas** o ingresa **Plantillas** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en __Templates__.
3. En la barra de búsqueda, escriba el nombre o la clave de la plantilla que desea buscar. Consulte la lista a continuación para obtener más información.

| Template | Clave | Descripción | Gatillo |
| ---------- | ---------- | ---------- | ---------- |
| Order confirmation | vtexcommerce-new-order | Correo electrónico se envía cuando se completa el pedido. | Checkout realiza un nuevo pedido. |
| Replace Order | vtexcommerce-replace-order | Se envía un correo electrónico cuando el pedido fue reemplazado con éxito. | Checkout realiza un nuevo pedido e informa a __Gestión de pedidos__ sobre el reemplazo. |
| Order change payment | vtexcommerce-order-change-payment | Notifica que el pago ha sido modificado. | El cliente cambia el pago y Checkout notifica a __Gestión de pedidos__ que el pago se ha modificado. |
| Payment pending | vtexcommerce-payment-pending | Notifica de pago pendiente. | __Gestión de pedidos__ envía el correo electrónico 48 horas después de realizar el pedido. |
| Payment approved | vtexcommerce-payment-approved | Notifica que el pago fue aprobado. | Cambios en el estado del pedido a __Pago aprobado__. |
| Change of information order | vtexcommerce-order-changed | Notifica que el [pedido ha sido modificado](/es/docs/tutorials/cambiar-items-de-un-pedido-finalizado). | Checkout notifica el evento de cambio de pedido (descuento, agregar artículo o eliminar artículo). |
| Order changed | vtexcommerce-order-changed-v2 | Notificación de que [el pedido fue modificado](/es/docs/tutorials/como-modificar-pedidos). | Checkout notifica un evento de modificación (aumento o reducción de precio, adición, remoción o sustitución de ítems, cambio de peso). |
| Order invoiced | vtexcommerce-order-invoiced | Notifica que el pedido fue facturado. | El estado del pedido cambia a __Invoiced__. |
| Cancel billed request | vtexcommerce-order-invoiced-with-cancel-request | Notifica que el pedido no puede ser cancelado después de ser facturado. | El vendedor niega una solicitud de cancelación cuando el pedido tiene el estado Manejo de envío. |
| Cancel shipped order | vtexcommerce-order-shipped-with-cancel-request | Notifica que el pedido no se puede cancelar después de que se haya enviado. | El vendedor niega una solicitud de cancelación cuando el pedido ha recibido un número de seguimiento o datos de URL de seguimiento. |
| Order shipped | vtexcommerce-order-shipped | Notifica que el pedido fue enviado. | El pedido recibe la factura con número de seguimiento o datos de URL de seguimiento. Si realiza el envío por primera vez, deberá completar ambas informaciones: `trackingNumber` y `trackingURL`. |
| Shipping Update | vtexcommerce-order-shipping-update | Notificación de eventos de envío, como "recogido por la transportadoras", por ejemplo. | El pedido debe tener la factura y un número de rastreo y una URL de rastreo vinculada a la factura. Además, debe tener los eventos de entrega, que es la información principal de esta plantilla. |
| Order delivered | vtexcommerce-order-shipping-finished | Notifica que el envío se ha completado. | El pedido debe tener la factura y un número de rastreo y una URL de rastreo vinculada a la factura. El vendedor confirma la entrega. Esta acción cambia el valor del campo `isDelivered` a `true` en el json del pedido. |
| Order cancelled | vtexcommerce-order-cancelled | Notificación de cancelación de pedido | El estado del pedido cambia a __Cancelado__. |
| [Order refund](/es/docs/tutorials/plantilla-de-email-transaccional-para-pedido-reembolsado) | vtexcommerce-order-refunded | Notificación de reembolso de pedido. | El vendedor inserta la factura con el valor reembolsado por la API [Order Invoice Notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice), con el valor `input` en el campo `type`. En el Administrador, este evento se activa cuando se hace clic en el botón **Hacer devolución de ítems** en la pantalla de detalles del pedido. |
