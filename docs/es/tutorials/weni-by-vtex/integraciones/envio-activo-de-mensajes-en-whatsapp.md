---
title: 'Envío activo de mensajes en WhatsApp'
id: 20E0eUtogj84N0vf6nZeia
status: PUBLISHED
createdAt: 2025-09-15T15:27:41.354Z
updatedAt: 2025-10-03T14:20:32.448Z
publishedAt: 2025-10-03T14:20:32.448Z
firstPublishedAt: 2025-10-03T14:20:32.448Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: active-message-dispatch-on-whatsapp
legacySlug: envio-activo-de-mensajes-en-whatsapp
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Antes que nada, es importante entender la diferencia entre *envío activo* y *pasivo*.

El **envío pasivo** ocurre cuando el usuario final se pone en contacto con la empresa de forma voluntaria. En ese momento, se inicia un flujo de conversación a partir del primer mensaje enviado por el usuario a la empresa.

Por otro lado, el **envío activo** ocurre cuando la empresa toma la iniciativa de iniciar una conversación con el usuario. Para que el envío activo sea realizado, el mensaje a enviar debe pasar por un proceso de validación guiado por Meta y, solo después de su preaprobación, es posible enviarlo a los usuarios. En la Plataforma Weni, llamamos a este modelo de mensaje ""Template Message"".

#### **Envío a través del módulo de flujos**

Después de la preaprobación del Template Message, se puede comenzar a construir el flujo conversacional. El primer paso es agregar la tarjeta ""Actualizar Contacto"" y elegir la opción ""Canal"", ya que esta definirá desde qué canal se realizará el envío. En esta etapa, elige tu canal de WhatsApp.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/envio-activo-de-mensajes-en-whatsapp_1.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/envio-activo-de-mensajes-en-whatsapp_2.png)

El **segundo paso** es agregar la tarjeta ""Enviar mensaje"", en la casilla de texto simplemente escriba la siguiente expresión: `@(“”)`. Vea la imagen a continuación:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/envio-activo-de-mensajes-en-whatsapp_3.png)

La expresión anterior indica que se enviará un Template Message (modelo de mensaje) y que este campo no será tomado en cuenta, ya que el modelo de mensaje a enviar a los clientes puede seleccionarse en la pestaña ""WhatsApp"", ubicada en la misma tarjeta de ""Enviar Mensaje"", como se muestra en la imagen anterior. Al hacer clic en la pestaña ""WhatsApp"", es posible acceder a los mensajes que han sido preaprobados y seleccionarlos para su envío, como se ilustra en la siguiente imagen.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/envio-activo-de-mensajes-en-whatsapp_4.png)

En este momento, también es posible añadir variables que harán el mensaje más personalizado, como, por ejemplo, la variable @contact.name, que llama al usuario por el nombre registrado en su propio WhatsApp.

Este proceso siempre se realiza para el primer mensaje y es exclusivo para el canal de WhatsApp. Después de la entrega del Template Message, si el usuario responde, la empresa puede continuar el flujo de mensajes libremente con las demás tarjetas de acción. Toda la construcción del flujo puede planificarse normalmente después de la primera tarjeta de Template Message. Para que el usuario pueda responder, es necesario agregar una tarjeta ""Esperar Respuesta"", creando así una experiencia de atención continua.

Después de seleccionar el mensaje, basta con hacer clic en el botón ""Enviar Flujo"", ubicado en la esquina superior derecha de la pantalla, y realizar el envío a un contacto específico o a un grupo de contactos.

Finalmente, para verificar si todo ocurrió correctamente, basta con acceder al módulo ""Estudio"" y, en la pestaña ""Flujo"", es posible seguir el historial de envíos, obteniendo información importante como errores, flujos iniciados y mucho más. Esta gestión es esencial, especialmente para implementar mejoras en tu chatbot.

#### **Enviando flujo desde el módulo de estudio**

También es posible enviar un Template Message desde el módulo ""Estudio"", seleccionando el contacto al que deseas enviar el mensaje y haciendo clic en el menú de opciones, ubicado en la esquina superior derecha. Luego, simplemente selecciona ""Iniciar en el Flujo"", elige el flujo y envía. Esta es otra posibilidad que ofrece la Plataforma Weni para realizar el envío activo. Observa la imagen a continuación:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/envio-activo-de-mensajes-en-whatsapp_5.png)

El proceso de envío activo es el mismo para todos los canales de comunicación, pero la creación del Template Message es exclusiva para el canal de WhatsApp. Esto significa que, mientras que el uso del Template Message no es necesario para otros canales, en WhatsApp solo es posible enviar un modelo de mensaje (inicio del flujo). En los demás canales, es posible enviar más de un mensaje sin limitaciones previas.
