---
title: 'Pix: nueva configuración de caducidad del código QR'
id: 6hYRjcoAkWytju8o1DvGUs
status: PUBLISHED
createdAt: 2025-02-20T13:51:07.729Z
updatedAt: 2025-03-19T17:41:57.282Z
publishedAt: 2025-03-19T17:41:57.282Z
contentType: updates
productTeam: Others
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2025-02-20-pix-new-qr-code-expiration-setting
locale: es
legacySlug: pix-nueva-configuracion-de-caducidad-del-codigo-qr
announcementImageID: 'undefined'
announcementSynopsisES: 'La configuración del tiempo de vencimiento del Código QR PIX está disponible para tiendas VTEX.'
---

Para optimizar las operaciones de pago en la plataforma, VTEX implementará una nueva configuración del tiempo de vencimiento de QR Code Pix (exclusivo Brasil).

## ¿Qué va a cambiar?

Actualmente, los códigos de QR Code Pix están disponibles en pantalla durante 10 minutos, y el pago puede realizarse en un máximo de 15. Transcurrido este plazo, el pedido se anula y debe realizarse una nueva compra.

![PIX QR Code](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2025/febrero/2025-02-20-pix-nueva-configuracion-de-caducidad-del-codigo-qr_1.png)

A partir del __26 de marzo de 2025__, el tiempo de validez de QR Code Pix podrá configurarse entre 15 y 60 minutos, lo que dará a los clientes más flexibilidad al pagar.

Para configurar un nuevo tiempo de vencimiento para QR Code Pix, el proveedor de pagos debe ingresar el tiempo deseado, en segundos, en el campo `delayToCancel` presente en la respuesta del endpoint [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) para cada nueva transacción.

Ejemplo:

Si deseas que todos los nuevos códigos de QR Code Pix generados por la tienda tengan la opción de pagarse en un máximo de 30 minutos (1800 segundos), el campo `delayToCancel` debe llenarse en la respuesta del conector como `1800`.

## ¿Qué se necesita hacer?

Antes del __26 de marzo de 2025__, verifica que el campo `delayToCancel` esté completado en la respuesta de las autorizaciones del conector de tu tienda y sigue las instrucciones a continuación:

- __El campo `delayToCancel` del endpoint [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) devuelve un valor menor o igual a 15 minutos (900 segundos) para PIX__: no es necesario realizar ninguna acción y el tiempo de vencimiento seguirá siendo de 15 minutos. Si deseas modificar este periodo, ponte en contacto con tu proveedor de pago solicitando la inclusión del valor deseado.

- __El campo `delayToCancel` del endpoint [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) está devolviendo un valor superior a 15 minutos (900 segundos) para pago con Pix__: revisa si el valor se ajusta a las necesidades actuales de tu tienda y, de ser necesario, ponte en contacto con tu proveedor de pago para modificarlo.

> ⚠️ Los valores configurados deben estar entre 15 minutos (900 segundos) y 60 minutos (3600 segundos).

A partir del __26 de marzo de 2025__, el tiempo de vencimiento del código de QR Code Pix se ajustará al valor indicado en el campo `delayToCancel`, devuelto por tu proveedor de pagos en el endpoint [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).

