---
title: "Cartas de acción"
id: 5TQ44l4pp84PPWdnWdg3JN
status: PUBLISHED
createdAt: 2025-09-16T16:43:29.253Z
updatedAt: 2026-11-13T14:00:00.000Z
publishedAt: 2025-10-03T14:20:03.887Z
firstPublishedAt: 2025-10-03T14:20:03.887Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: action-cards
legacySlug: cartas-de-accion
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Una carta de acción ejecuta un comando en un [flujo de automatización](https://help.vtex.com/es/docs/tutorials/introduccion-a-los-flujos), como enviar un mensaje, actualizar un contacto o abrir un ticket. Usa la lista de abajo para abrir la descripción de una carta mientras armas un flujo.

- [Enviar un mensaje al contacto](#enviar-un-mensaje-al-contacto)
- [Enviar un mensaje a otra persona](#enviar-un-mensaje-a-otra-persona)
- [Etiquetar el mensaje entrante](#etiquetar-el-mensaje-entrante)
- [Añadir una URN al contacto](#añadir-una-urn-al-contacto)
- [Añadir el contacto a un grupo](#añadir-el-contacto-a-un-grupo)
- [Eliminar el contacto de un grupo](#eliminar-el-contacto-de-un-grupo)
- [Actualizar el contacto](#actualizar-el-contacto)
- [Enviar un correo electrónico](#enviar-un-correo-electrónico)
- [Guardar un resultado para este flujo](#guardar-un-resultado-para-este-flujo)
- [Entrar en otro flujo](#entrar-en-otro-flujo)
- [Iniciar a otra persona en un flujo](#iniciar-a-otra-persona-en-un-flujo)
- [Enviar un mensaje de WhatsApp](#enviar-un-mensaje-de-whatsapp)
- [Abrir un ticket con un agente humano](#abrir-un-ticket-con-un-agente-humano)
- [Llamar a un webhook](#llamar-a-un-webhook)

## Enviar un mensaje al contacto

Esta carta envía un mensaje al contacto en la conversación actual. El contacto recibe el mensaje en el canal que está usando. Escribe el mensaje en el cuadro de texto.

### Facebook

Un mensaje masivo en un canal de Facebook necesita un tema cuando el contacto no ha enviado un mensaje en las últimas 24 horas. Define un tema para el primer mensaje del flujo.

### WhatsApp

Un mensaje en un canal de WhatsApp necesita una plantilla cuando no has recibido un mensaje del contacto en las últimas 24 horas. Define una plantilla para el primer mensaje del flujo. Para más información, consulta [Envío activo de mensajes en WhatsApp](https://help.vtex.com/es/docs/tutorials/envio-activo-de-mensajes-en-whatsapp).

### Respuestas rápidas

Las respuestas rápidas son botones de texto que orientan el siguiente paso de la conversación. Puedes añadir hasta 10 botones de texto en esta carta.

> ⚠️ Los botones de texto están disponibles en Telegram, en el canal Web, en Facebook Messenger y en WhatsApp.

### Archivos adjuntos

Puedes enviar hasta 3 archivos adjuntos en esta carta: fotos, videos, audios o documentos. Ingresa el enlace del archivo o selecciona el archivo en tu computadora. Para consultar los pasos de carga y los límites de tamaño, consulta [Agregar mídias a su mensaje](https://help.vtex.com/es/docs/tutorials/agregar-midias-a-su-mensaje).

> ⚠️ Confirma que el canal del contacto admite el archivo antes de enviarlo.

### Todos los destinos

En **Avanzado**, puedes enviar el mensaje a todos los canales vinculados al contacto, y no solo al canal preferido. El canal que el contacto use para responder pasa a ser el canal preferido, y el flujo continúa en ese canal.

Por ejemplo, si el canal preferido es WhatsApp y envías el mensaje a todos los destinos, el contacto lo recibe en todos los canales vinculados. Si el contacto responde por SMS, SMS pasa a ser el canal preferido.

> ⚠️ Envía el mensaje a todos los destinos solo cuando el contacto deba recibirlo en todos los canales vinculados. De lo contrario, deja la opción desmarcada.

## Enviar un mensaje a otra persona

Esta carta envía un mensaje a un contacto o grupo distinto del que ejecuta el flujo. El destinatario ve el mensaje. La carta no cambia un flujo ni una conversación que ya esté en ejecución para ese destinatario.

Úsala cuando tú o un grupo necesiten un aviso de que un contacto llegó a un punto específico del flujo.

## Etiquetar el mensaje entrante

Esta carta aplica una etiqueta al último mensaje que envió el contacto. Los mensajes etiquetados se reúnen en un grupo de mensajes con el mismo nombre de la etiqueta.

Por ejemplo, etiqueta un mensaje cuando el contacto muestra interés en un producto.

## Añadir una URN al contacto

Esta carta añade una URN al contacto. Una URN identifica al contacto en un canal, como un número de teléfono o un número de WhatsApp. Selecciona el tipo de URN, como teléfono, WhatsApp, SMS o Telegram, e ingresa un valor fijo o una variable de flujo.

> ⚠️ Incluye el código de país cuando añadas o cambies un número de teléfono o de WhatsApp.

Si el contacto inició la conversación en el sitio, pídele el número de WhatsApp, añádelo como URN y continúa la conversación en WhatsApp.

## Añadir el contacto a un grupo

Esta carta añade el contacto a un [grupo estático](https://help.vtex.com/es/docs/tutorials/grupos-estaticos). Si el grupo todavía no existe en la página Contactos, ingresa el nombre del grupo en el campo de selección para crearlo.

Por ejemplo, después de que un contacto complete una encuesta de satisfacción, añádelo a un grupo con los demás contactos que respondieron.

## Eliminar el contacto de un grupo

Esta carta quita al contacto de un [grupo estático](https://help.vtex.com/es/docs/tutorials/grupos-estaticos). Puedes quitar al contacto de un grupo o de todos los grupos a los que pertenece.

Por ejemplo, cuando un contacto deja de ser cliente, quítalo de ese grupo para que las acciones limitadas al grupo ya no lo incluyan.

## Actualizar el contacto

Esta carta actualiza un campo de contacto. Selecciona el campo e ingresa un valor fijo o un resultado de flujo. Si el campo todavía no existe, ingresa un nombre para crearlo. Para más información, consulta [Campo de contactos](https://help.vtex.com/es/docs/tutorials/campo-de-contactos).

Por ejemplo, cuando preguntes la edad del contacto, guarda la respuesta en un campo de contacto para que un flujo posterior pueda usarla.

## Enviar un correo electrónico

Esta carta envía un correo electrónico al contacto que ejecuta el flujo o a otro destinatario. Ingresa el destinatario, el asunto y el cuerpo del mensaje.

El correo electrónico no es un canal de conversación en VTEX CX Platform. Si el destinatario responde, la respuesta llega a la bandeja de entrada del correo configurado en la organización.

Usa esta carta para enviar un recordatorio por correo electrónico, en lugar de SMS o llamada.

## Guardar un resultado para este flujo

Esta carta crea un [resultado de flujo](https://help.vtex.com/es/docs/tutorials/cartas-de-decision#resultados-de-flujo) sin esperar un input ni una carta de decisión. Ingresa el nombre y el valor del resultado. También puedes ingresar una categoría o actualizar el valor de un resultado que ya existe.

Por ejemplo, guarda cuántas preguntas hizo un contacto sin almacenar ese recuento en un campo de contacto.

## Entrar en otro flujo

Esta carta inicia otro flujo para el contacto en la conversación actual. El flujo actual, el flujo padre, espera mientras el contacto ejecuta el nuevo flujo, el flujo hijo. Cuando el flujo hijo termina, el contacto vuelve al mismo punto del flujo padre. Selecciona el flujo en la lista.

Esta es la única carta de acción que crea [rutas](https://help.vtex.com/es/docs/tutorials/cartas-de-decision). La ruta depende de cómo termina el flujo hijo:

- **Completado:** El flujo hijo terminó.
- **Caducado:** El flujo hijo caducó.

## Iniciar a otra persona en un flujo

Esta carta inicia un flujo para un contacto o grupo que no está ejecutando el flujo actual. El flujo actual no espera a que ese flujo termine, y esta carta no crea rutas.

Elige quién entra en el flujo:

- Selecciona los contactos o los grupos.
- Crea una regla, por lo general basada en campos de contacto, que filtre qué contactos entran.
- Crea un contacto e inicia ese contacto en el flujo.

Después de elegir quién entra, selecciona el flujo que se inicia.

Por ejemplo, usa esta carta para avisar a un grupo cuando se incorpora un nuevo integrante.

## Enviar un mensaje de WhatsApp

Esta carta envía un mensaje interactivo en WhatsApp. No sustituye una plantilla aprobada por Meta cuando tu empresa inicia la conversación. Para configurar la carta, consulta [Tarjeta de mensaje de WhatsApp](https://help.vtex.com/es/docs/tutorials/tarjeta-de-mensaje-de-whatsapp).

La carta ofrece estos mensajes interactivos:

- **Respuestas rápidas:** Hasta 3 respuestas predefinidas que el contacto puede seleccionar.
- **Lista de opciones:** Un menú de hasta 10 elementos. Cada elemento tiene un título y una descripción.
- **Solicitar ubicación:** Una solicitud de la ubicación del contacto.

Según el tipo de mensaje, también puedes añadir un encabezado, con un archivo o texto, y un pie de página.

## Abrir un ticket con un agente humano

Esta carta abre un ticket para que un agente humano continúe la conversación en Live Desk. Selecciona el departamento y la cola que reciben el ticket. Para configurar departamentos y colas, consulta [Configurar Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk).

## Llamar a un webhook

Esta carta envía una solicitud de API y guarda la respuesta en una variable que puedes usar después en el flujo. Úsala para conectar el flujo con un sistema externo. Para más información, consulta [Call webhook: Cómo hacer llamadas a sistemas externos](https://help.vtex.com/es/docs/tutorials/call-webhook-como-hacer-llamadas-a-sistemas-externos).
