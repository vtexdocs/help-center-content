---
title: 'WhatsApp Business API: Limitación de Envios Masivos en WhatsApp'
id: 1mMpu05SPvb9ZDJTSSkTEp
status: PUBLISHED
createdAt: 2025-09-15T15:32:11.616Z
updatedAt: 2025-10-03T14:20:32.366Z
publishedAt: 2025-10-03T14:20:32.366Z
firstPublishedAt: 2025-10-03T14:20:32.366Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-bussiness-api-whatsapp-message-triggering-limitation
legacySlug: whatsapp-business-api-limitacion-de-envios-masivos-en-whatsapp
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

### Limitación de Envios Masivos en WhatsApp (WhatsApp Rate Limiting)

Después de completar el proceso de aprobación e integración de WhatsApp, tu número de teléfono con Weni será activado para WhatsApp. Incluso después de la aprobación y activación de tu número, WhatsApp tiene una política de progresión en el envío de mensajes, imponiendo una limitación.

Debido a esta limitación, se recomienda a las empresas que desean enviar mensajes a más de 1,000 usuarios únicos (lo que en Weni llamamos contactos activos) que los envíen gradualmente a lo largo de una semana.

Los límites de mensajes son el número máximo de conversaciones iniciadas por la empresa (abiertas debido al envío de un modelo de marketing, utilidad o autenticación a un usuario de WhatsApp) que un número de teléfono comercial puede abrir en un período de 24 horas.

Inicialmente, los números de teléfono comercial tienen un límite de 250 conversaciones iniciadas por la empresa en un período de 24 horas, pero este límite puede ser aumentado.

##### Limitaciones de WhatsApp

Existen diferentes niveles de limitación para el envío de mensajes en WhatsApp:]

| Nivel 1 | Limitado a 1\.000 destinatarios únicos (contactos activos) por día. |
| --- | --- |
| Nivel 2 | Limitado a 10\.000 destinatarios únicos (contactos activos) por día. |
| Nivel 3 | Limitado a 100\.000 destinatarios únicos (contactos activos) por día. |
| Nivel 4 | Sin limitaciones. |

Los números recién habilitados en WhatsApp comienzan en el Nivel 1\. WhatsApp monitorea el volumen y la calidad de los mensajes y actualiza automáticamente el cliente entre los niveles según el número total de contactos activos en los últimos 7 días.

Si, dentro de este período de 7 días, un número de teléfono habilitado para WhatsApp se ha comunicado con 2 veces la cantidad de contactos activos del límite de su nivel por día y tiene una buena ""clasificación de calidad"" con WhatsApp, ese número automáticamente pasará al siguiente nivel al día siguiente.

Ten en cuenta que un número puede ser impedido de subir al siguiente nivel, o incluso bajar de nivel, si la ""clasificación de calidad"" interna de WhatsApp para ese número es baja. Weni no puede influir en esa clasificación ni mostrarla a los clientes en la Plataforma. Más adelante, proporcionaremos más detalles sobre la clasificación de calidad.Si excedes el límite diario de tu nivel, tus mensajes no serán entregados.Aviso Importante: Weni no puede mover manualmente ni solicitar que los clientes sean movidos entre los niveles de límite de mensajes. Además, WhatsApp no iniciará un número en un nivel superior ni aumentará manualmente el límite.Ejemplo 1: Un número de teléfono aprobado por WhatsApp comienza en el nivel 1\. El día 1, el número envía mensajes a 1\.000 contactos activos. El día 2, se realizan 1\.000 envíos adicionales a nuevos contactos activos. Al final del día 2, ese número sería actualizado al Nivel 2 en función del envío de 2\.000 mensajes a contactos activos distintos en los últimos 2 días.

Ejemplo 2: Un número de teléfono aprobado por WhatsApp comienza en el nivel 1\. El día 1, el número envía mensajes a 50 contactos activos. El día 2, el número envía mensajes a 150 contactos activos. El día 3, el número envía mensajes a 200 contactos activos. Durante los días 4 al 7, el número envía mensajes a 400 contactos activos cada día. Al final del día 7, el número sería actualizado al nivel 2 en función del envío de mensajes a 2\.000 contactos activos en los últimos 7 días.

Esta limitación **NO** se aplica a los mensajes enviados en respuesta a un mensaje iniciado por el usuario dentro de un período de 24 horas.

##### Clasificación de Calidad de WhatsApp

Dado que WhatsApp cifra los mensajes, depende de los comentarios de los usuarios para medir la calidad de los mensajes. WhatsApp utiliza este feedback para definir una ""clasificación de calidad"" interna que puede afectar cómo los usuarios avanzan entre los niveles de limitación. Factores como la frecuencia con la que tu número es marcado como ""denunciar spam"" o ""bloquear"" pueden influir en la clasificación de calidad. Los remitentes con una clasificación de calidad baja pueden no ser elegibles para subir de nivel, según los niveles presentados anteriormente.

##### Para mantener una alta calidad, WhatsApp recomienda lo siguiente:

- Asegúrate de que tus mensajes cumplen con la [Política de Negocios de WhatsApp](https://www.whatsapp.com/legal/business-policy/?fbclid=IwAR1ec4FMqKNTvk3K6ZQ7jzrKhrZjqVl9JF8nheX_gnjSt5io8Jrj2hbBJXE).
- Envía mensajes solo a usuarios que han optado por recibir comunicaciones de tu empresa.
- Personaliza tus mensajes y asegúrate de que sean útiles para los usuarios. Evita enviar mensajes generales de bienvenida o introductorios.
- Presta atención a la frecuencia de los mensajes; evita enviar demasiados mensajes a los mismos clientes en un solo día. Sé cuidadoso con los mensajes informativos. Optimiza tanto el contenido como la frecuencia de los envíos.
- Una clasificación de calidad baja puede impedir que un número avance a un nivel superior o, en algunos casos, provocar su degradación de nivel.
- Para más detalles, consulta la [Política de Limitaciones de Mensajes y Clasificación de Calidad de WhatsApp](https://developers.facebook.com/docs/whatsapp/messaging-limits).
