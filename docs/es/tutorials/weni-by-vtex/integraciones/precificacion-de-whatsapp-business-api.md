---
title: 'Precificación de WhatsApp Business API'
id: 6PzP7aMpkaYmICNyXFlNwr
status: PUBLISHED
createdAt: 2025-09-15T15:29:16.093Z
updatedAt: 2025-10-03T14:20:32.421Z
publishedAt: 2025-10-03T14:20:32.421Z
firstPublishedAt: 2025-10-03T14:20:32.421Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-business-api-pricing
legacySlug: precificacion-de-whatsapp-business-api
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

WhatsApp cobra por conversación, no por mensaje enviado. Las conversaciones son los mensajes intercambiados entre la empresa y los clientes dentro de un período de 24 horas. Una vez que los mensajes enviados por la empresa se entregan a los clientes, se considera que la conversación ha comenzado.

Las conversaciones iniciadas por la empresa se dividen en tres categorías: **utilidad**, **autenticación** y **marketing**. Las conversaciones iniciadas por el usuario se denominan **conversaciones de servicio**.

#### **Precios basados en conversación**

Este documento explica cómo funcionan los precios basados en conversación en la plataforma de WhatsApp Business.

Los cargos se aplican por conversación, no por mensaje enviado o recibido.

Las conversaciones son mensajes intercambiados entre tú y tus clientes dentro de un período de 24 horas. Cuando los mensajes que envías son entregados a los clientes, se considera que la conversación ha comenzado y se aplica el cargo. Los criterios que determinan cuándo se inicia una conversación y cómo se categoriza se describen a continuación.

#### **Categorización de modelos**

- **Modelos de Marketing**

Los modelos de marketing son los más flexibles. Permiten a las empresas alcanzar una amplia gama de objetivos, desde generar reconocimiento hasta impulsar ventas y mucho más.

- **Modelos de utilidad**

Los modelos de utilidad se activan por una acción o solicitud del usuario. Deben incluir información específica sobre la transacción, cuenta, suscripción o interacción activa o en curso a la que se refieren. Por ejemplo, una confirmación de compra debe contener el número del pedido.

- **Modelos de autenticación**

Con los modelos de autenticación, las empresas pueden autenticar a los usuarios mediante contraseñas de un solo uso (generalmente, códigos alfanuméricos de 4 a 8 dígitos) en varias etapas del proceso de inicio de sesión (como verificación/recuperación de cuenta y desafíos de integridad).

Los modelos de autenticación son los más restrictivos. Para que un modelo sea clasificado como ""autenticación"", la empresa debe:

- Usar los modelos de mensaje de autenticación predefinidos de WhatsApp, que incluyen complementos opcionales como advertencias legales de seguridad y notificaciones de vencimiento.
- Configurar un botón de contraseña desechable (copiar código o un solo toque).
- Respetar las restricciones de contenido: no se permite el uso de **URLs**, medios o emojis en los parámetros ni en el contenido de los modelos de autenticación. Los parámetros tienen un límite máximo de 15 caracteres.

Para saber más detalles sobre los modelos, incluidos ejemplos de cada uno, accede a la documentación oficial de [Meta](https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines/).

##### **CONVERSACIONES INICIADAS POR EL USUARIO**

Servicio: Son las conversaciones iniciadas por el usuario, que ayudan a los clientes a resolver dudas.

##### **COBRO DE LAS CONVERSACIONES**

El envío de varios modelos de la misma categoría en una conversación abierta no resultará en cargos adicionales, y las conversaciones de servicio solo se iniciarán cuando no haya ventanas de conversación abiertas, y la empresa puede responder al usuario con un formato libre de mensaje en la ventana de atención al cliente de 24 horas.

##### **EXCEPCIONES**

Las conversaciones con punto de entrada gratuito son aquellas en las que el cliente contacta a la empresa a través de un botón de llamada a la acción en anuncios de clic para WhatsApp o en Páginas de Facebook. Dado que el usuario de WhatsApp Business ya está siendo cobrado por el anuncio publicado en las redes sociales, no se le cobrará por ningún modelo de mensaje enviado en esa conversación durante un período de 72 horas.

**La conversación iniciada es gratuita, sin embargo, el anuncio es cobrado.**

Recordando que: Cada cuenta de WhatsApp Business (WABA) tiene 1\.000 conversaciones iniciadas por el usuario gratuitas por mes, independientemente de la cantidad de teléfonos incluidos. El límite de conversaciones gratuitas se restablece cada mes según la zona horaria asociada a la WABA.

##### **DURACIÓN DE LA CONVERSACIÓN**

Las conversaciones de marketing, utilidad, autenticación y servicio duran 24 horas (a menos que sea una conversación por punto de entrada gratuito \- de anuncios clic para WhatsApp o de páginas de Facebook); después de este período, el tiempo se reiniciará y cualquier mensaje enviado iniciará una nueva ventana y será cobrado de acuerdo con la categoría.

#### **Precios**

**Conversaciones iniciadas por la empresa:**

- **Utilidad**: Se utiliza para facilitar una solicitud, transacción o actualización sobre transacciones en curso, incluyendo notificaciones post-venta y estados de facturas recurrentes.
- **Autenticación**: Se emplea para la autenticación de usuarios mediante contraseñas de un solo uso en varias etapas del proceso de inicio de sesión. Por ejemplo, verificación de cuenta, recuperación de cuenta y desafíos de integridad.
- **Marketing**: Se destina a promociones u ofertas, actualizaciones de información o invitaciones. Las conversaciones que no encajen en las categorías de utilidad o autenticación se considerarán de marketing.

Para obtener más información sobre esto, puedes consultar [aquí](https://weni.ai/precificacao-whatsapp/).

Para conocer sobre precios, consulta esta [documentación de Meta](https://developers.facebook.com/docs/whatsapp/pricing).
