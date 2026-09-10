---
title: 'VTEX CX Platform: logs de ejecución de las automatizaciones de WhatsApp'
slug: '2026-09-15-vtex-cx-platform-logs-de-ejecucion-de-las-automatizaciones-de-whatsapp'
createdAt: 2026-09-15T00:00:00.000Z
updatedAt: 2026-09-15T00:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: '2026-09-15-vtex-cx-platform-whatsapp-automation-execution-logs'
locale: es
announcementSynopsisES: 'La nueva pestaña Logs de las automatizaciones de WhatsApp registra cada envío con plantilla, contacto, pedido y estado, y permite filtrar, ver el JSON de los errores y exportar los datos.'
tags:
  - Nueva funcionalidad
  - Storefront
  - VTEX CX Platform
---

Ahora puedes hacer un seguimiento de la ejecución de las automatizaciones de WhatsApp de tu tienda directamente desde el Admin VTEX, en la nueva pestaña **Logs** de las automatizaciones de VTEX CX Platform. Cada intento de envío se registra con plantilla, fecha, contacto, pedido, valor y estado, lo que te permite confirmar si se envió un mensaje y entender por qué se ignoró o falló.

## ¿Qué cambió?

Anteriormente, para saber si una automatización de WhatsApp había enviado un mensaje o por qué no se había enviado, era necesario contactar al soporte.

Ahora, las automatizaciones de WhatsApp, como **WhatsApp Cart Recovery**, **WhatsApp Order Notifications** y **WhatsApp Payment Recovery**, cuentan con la pestaña **Logs**, que muestra todas las ejecuciones en la interfaz. En cada registro, encontrarás:

- **Plantilla:** modelo de mensaje utilizado en el envío, como `Abandoned Cart`.
- **Contacto:** número de WhatsApp del cliente.
- **ID del OrderForm:** ID del pedido o del carrito.
- **Valor:** pedido o carrito asociado al envío.
- **Estado:** resultado de la ejecución, que puede ser `Enviado`, `Entregado`, `Leído`, `Procesando`, `Ignorado` o `Error`.
- **Fecha:** fecha y hora de la ejecución.

Puedes buscar por contacto o ID del pedido y filtrar los registros por periodo, plantilla y estado. Al expandir un registro, verás un resumen del resultado y el botón `Ver JSON`, que muestra el rastreo completo de la ejecución.

## ¿Por qué realizamos este cambio?

Desarrollamos la pestaña **Logs** para que tengas acceso a información sobre las automatizaciones sin depender del soporte. Esta funcionalidad está disponible para todos los usuarios de VTEX CX Platform en el Admin VTEX. Sus principales ventajas son:

- **Visibilidad completa:** todas las ejecuciones quedan registradas en una única lista, con los principales datos de cada envío.
- **Diagnóstico autónomo:** la búsqueda, los filtros y el detalle en JSON permiten identificar rápidamente la causa de una falla o de un envío ignorado.
- **Exportación por email:** puedes exportar los logs y recibirlos por email para análisis o para compartirlos.

## ¿Qué se necesita hacer?

No se requiere ninguna acción para visualizar los logs de WhatsApp en VTEX CX Platform. La actualización ya está disponible en el Admin VTEX de todas las tiendas. Para consultar los logs, accede a **Storefront > VTEX CX Platform > Dashboard**, haz clic en `Configuración`, abre una automatización de WhatsApp y selecciona la pestaña **Logs**.

Para obtener más información sobre VTEX CX Platform, consulta [Introducción a CX](https://help.vtex.com/es/docs/tutorials/introducao-ao-cx).