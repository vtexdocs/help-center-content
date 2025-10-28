---
title: 'Configuración del Webhook: Estado del envío de mensajes'
id: 4Vz0SFzmpK8tTsA2CUbWAp
status: PUBLISHED
createdAt: 2025-09-15T15:38:30.364Z
updatedAt: 2025-10-03T14:20:32.239Z
publishedAt: 2025-10-03T14:20:32.239Z
firstPublishedAt: 2025-10-03T14:20:32.239Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: webhook-configuration-message-delivery-status
legacySlug: configuracion-del-webhook-estado-del-envio-de-mensajes
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Para recibir información sobre el **estado de envío y visualización de los mensajes enviados por tu Chatbot,** puedes configurar el servicio de webhook directamente en la Plataforma de Weni.

Este servicio de webhook funcionará de la siguiente manera: **cada vez que se envíe, reciba o lea un mensaje, este webhook enviará una notificación a un servicio externo (URL) que podrá manejar estos datos.**

El manejo de los datos no se realiza dentro de la plataforma de Weni, sino en tu servicio externo de acuerdo con el tratamiento que hayas configurado.#### **¿Qué es un servicio externo y cuál usar?**

Existen diversos servicios externos y se utilizan como una **infraestructura en la nube que almacena un código** que ejecuta alguna acción. Puedes elegir qué servicio usar: [Back4app](https://www.back4app.com/#), [Pipedream](https://pipedream.com/) u otros.

Esto significa que, en estas plataformas externas, puedes configurar una URL para recibir los datos del Webhook de Weni y crear un código para manejar esos datos.

#### **Cómo configurar**

Para configurar tu webhook, ve a **Aplicaciones \> Mis Aplicaciones \> Canal de Whatsapp que deseas configurar \> Webhook \> Configurar Método, URL y Cabecera de la solicitud:**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/configuracion-del-webhook-estado-del-envio-de-mensajes_1.png)

Después de configurar el servicio de webhooks, podrás crear soluciones mediante código o aplicación externa según tu necesidad.

#### **Retorno de datos**

Los datos que los webhooks enviarán a tu servicio externo (URL) seguirán el formato Json:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/configuracion-del-webhook-estado-del-envio-de-mensajes_2.png)

El parámetro ""status"" informará el estado del mensaje, si ha sido leído aparecerá como ""read"".

¿Tienes preguntas? Contáctanos en la [comunidad de Weni.](https://comunidade.weni.ai/)
