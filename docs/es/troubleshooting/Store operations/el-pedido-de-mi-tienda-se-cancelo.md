---
title: 'El pedido de mi tienda se canceló'
id: 6qOCSBno1vS9TmHWWveOc
status: PUBLISHED
createdAt: 2025-02-04T13:04:34.645Z
updatedAt: 2025-02-04T13:30:15.393Z
publishedAt: 2025-02-04T13:30:15.393Z
firstPublishedAt: 2025-02-04T13:30:15.393Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: my-store-order-was-canceled
locale: es
legacySlug: el-pedido-de-mi-tienda-se-cancelo
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags:** pedidos, status del pedido, cancelación

Un pedido realizado se puede cancelar antes de que complete el flujo esperado. Para identificar el motivo de la cancelación, es necesario verificar todas las comunicaciones efectuadas entre las integraciones de pago, ya que para facturar una compra, la misma debe pasar por varias etapas que pueden activar la cancelación.

Smart Checkout es compatible con el recurso "Pre-Auth" de algunos adquirentes. Esto significa que la plataforma realiza la validación de los datos de la tarjeta en el propio entorno de checkout. Si hay algún problema, el usuario recibe una notificación para que cambie el medio de pago y el retailer no pierda la venta.

En este proceso se crea un pedido. Si ocurre una denegación por parte del operador, se cancela la transacción.

## Solución

Para identificar el motivo de la cancelación debes:

- [Verificar las interacciones del pago](#verificar-las-interacciones-del-pago)
- [Verificar las interacciones del pedido](#verificar-las-interacciones-del-pedido)

### Verificar las interacciones del pago

En la sección **Pedidos > Transacciones** del Admin VTEX se registran todas las interacciones del pago, tanto con el operador/gateway de pago como con el sistema antifraude, que son los agentes responsables por la mayoría de las cancelaciones realizadas.

Cuando ocurre una cancelación, el agente responsable registra en los eventos de la transacción del pedido un mensaje que identifica el motivo de la acción. Para saber cómo consultar los eventos, accede a [Ver detalles de la transacción en Pedidos](/es/tutorial/como-visualizar-detalhes-do-pedido/).

### Verificar las interacciones del pedido

El módulo **Pedidos** del Admin VTEX permite analizar el origen de la cancelación del pedido si la cancelación fue realizada por el marketplace o por la propia tienda.

Para ver las interacciones de un pedido, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos** o ingresa **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. Busca el pedido utilizando la barra de búsqueda y los filtros disponibles en **Todos los pedidos**. 
3. Haz clic en el pedido deseado y se te redirigirá a la [Página de detalles del pedido](/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
4. En la sección **Historial del pedido**, haz clic en `Ver interacciones`.

#### Cancelación por el marketplace

Si el marketplace realizó la cancelación, puedes identificar las interacciones a través de la clave utilizada en la solicitud de cancelación (`Cancel requested`), como en el siguiente ejemplo: `vtexappkey-nomedomarketplace-keydomktp`.

Si la cancelación no fue realizada por el marketplace, se mostrará el nombre del usuario que realizó la acción `Cancel requested` o la clave de la integración con VTEX (`Cancel requested by vtexappkey-appvtex`).

#### Cancelación por la tienda

En el módulo **Pedidos** del Admin VTEX, se pueden cancelar pedidos manualmente o por medio de una solicitud de cancelación enviada por el ERP.

Además, el cliente puede solicitar la cancelación del pedido al retailer mientras esté en el status `Periodo cancelación`. En este caso, el pedido primero tiene el status `Cancelación solicitada` y después de la aprobación pasa a `Cancelado`.

Puedes ver todas las modificaciones del pedido en la [Página de detalles del pedido](/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).

<div class="alert alert-warning"> <p> Para pedidos originados en un marketplace pero cancelados por la tienda, la integración no notifica automáticamente la cancelación al marketplace. En estos casos, <b>es necesario cancelar manualmente el pedido directamente en la interfaz del marketplace</b>.</p> </div>
