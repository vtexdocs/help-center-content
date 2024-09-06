---
title: 'Gestión y detalles de WhatsApp AI Campaigns'
id: q9JqDErMqGV4zvsYqkD4s
status: PUBLISHED
createdAt: 2024-06-25T11:58:05.514Z
updatedAt: 2024-06-25T16:28:52.542Z
publishedAt: 2024-06-25T16:28:52.542Z
firstPublishedAt: 2024-06-25T16:11:51.825Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slug: gestion-y-detalles-de-whatsapp-ai-campaigns
locale: es
legacySlug: gestion-y-detalles-de-whatsapp-ai-campaigns
subcategoryId: 4SC2gPmUH3cHD5HjGfQ5Vg
---

Esta página ofrece una descripción completa de la gestión y las características de WhatsApp AI Campaigns en la plataforma VTEX, cubriendo desde la configuración hasta el seguimiento de métricas de desempeño para optimizar la efectividad de tus campañas y maximizar las conversiones.

Consulta este artículo para aprender a gestionar y supervisar tus campañas:

- [Seleccionar fechas](#seleccionar-fechas)
- [Enviar informes](#enviar-informes)
- [Editar campaña](#editar-campaña)
- [Pausar campaña](#pausar-campaña)
- [Consultar detalles en el dashboard Análisis](#consultar-detalles-en-el-dashboard-analisis)

## Gestión de WhatsApp AI Campaigns

La página de WhatsApp AI Campaigns permite consultar información sobre análisis y campañas activas.

### Seleccionar fechas

Navega por días concretos para ver los mensajes enviados durante cada periodo.

1. En el Admin VTEX, accede a **Promociones > Campañas de WhatsApp > Vista general**.
2. Haz clic en el selector de fechas.
3. Selecciona la fecha en la que deseas consultar datos de los análisis.

### Enviar informes

1. En el Admin VTEX, accede a **Promociones > Campañas de WhatsApp > Vista general**.
2. Haz clic en `Enviar informe` en la esquina superior derecha de la sección.
3. Indica el email que recibirá el informe.
4. Haz clic en `Enviar informe`.

El informe enviado por correo electrónico será un archivo `csv` con la siguiente información:

- **userId:** identificador único del usuario que realizó la compra.
- **deliveredReminderAt:** fecha y hora en que se envió un recordatorio sobre la compra al usuario.
- **readReminderAt:** fecha y hora en que el usuario visualizó el recordatorio enviado.
- **orderCreatedAt:** fecha y hora en que se creó el pedido en el sistema.
- **hasClickedOnReminder:** indica si el usuario hizo clic o no en el recordatorio enviado.
- **checkoutItems:** lista de artículos que el usuario añadió al carrito durante el proceso de compra.
- **orderItems:** lista de artículos que fueron efectivamente comprados por el usuario.
- **orderTotal:** valor total del pedido, sumando el precio de todos los artículos comprados.
- **currency:** moneda utilizada para el pago del pedido.
- **orderFormId:** identificador único del formulario de pedido utilizado durante la compra.

### Editar campaña

Una vez configurada la campaña, puedes editar el idioma o el tipo de mensaje que deseas personalizar.

1. En el Admin VTEX, accede a Promociones > Campañas de WhatsApp > Vista general.
2. Haz clic en el ícono <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Haz clic en `Editar`.
4. Cambia la información que desees.
5. Haz clic en `Confirmar`.

### Pausar campaña

Para pausar el envío de mensajes de una campaña:

1. En el Admin VTEX, accede a Promociones > Campañas de WhatsApp > Vista general.
2. Haz clic en el ícono <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Haz clic en Pausar.
4. Haz clic en `Confirmar`.

## Consultar detalles en el dashboard Análisis

Puedes encontrar información sobre tus campañas en curso en el Admin VTEX.

![Visão geral-ES](https://images.ctfassets.net/alneenqid6w5/3QiT4K7FuFoTyhmlWYWKFl/27df78b45cdda1fd0aa89bde051172a3/Vis_o_geral-ES.png)

A continuación se detallan las métricas disponibles:

- **Mensajes entregados:** número total de mensajes que llegaron correctamente a los destinatarios previstos.
- **Mensajes leídos:** número total de mensajes abiertos por los destinatarios; esto indica el engagement del público.
- **Clics únicos:** número de usuarios que han hecho clic en los links de los mensajes.
- **Total de clics:** número total de interacciones con los botones de respuesta en los mensajes, lo que proporciona una medida cuantitativa del engagement.
- **Total de conversiones:** el número total de conversiones que ocurren después de la entrega exitosa de un mensaje a un destinatario. El total de conversiones es la suma de las dos métricas siguientes:
      - **Conversiones asistidas:** conversiones que ocurren dentro de los 3 días posteriores a la recepción del mensaje.
      - **Conversiones por Clic (CTC):** conversiones que ocurren cuando los usuarios hacen clic en el enlace del mensaje y realizan una compra dentro de los 15 días.
- **Valor total de conversiones:** valor total de pedidos proveniente de conversiones.
- **Valor total de las conversiones por clic:** valor total del pedido proveniente de las conversiones por clic.

