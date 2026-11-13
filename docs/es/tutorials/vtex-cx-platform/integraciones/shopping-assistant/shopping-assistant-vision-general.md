---
title: 'Shopping Assistant'
createdAt: 2026-11-12T18:32:00.000Z
updatedAt: 2026-11-13T14:40:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: shopping-assistant-overview
locale: es
subcategoryId: cx-platform-shopping-assistant
seeAlso:
  - /es/docs/tutorials/configurar-el-shopping-assistant
  - /es/docs/tutorials/shopping-assistant-preguntas-sugeridas
---

**Shopping Assistant** es el canal de chat web de VTEX CX Platform que permite atender a los visitantes de la tienda con un agente de inteligencia artificial (IA). Los clientes pueden resolver dudas y encontrar productos sin salir del sitio web.

El chat se muestra en un widget personalizable que se instala en el sitio web mediante un script generado por VTEX CX Platform.

## Funcionalidades principales

Con Shopping Assistant puedes:

- Personalizar el título, los mensajes, el color, el avatar y los estilos del widget.
- Mostrar el chat como una ventana flotante o incorporarlo a la página de la tienda.
- Permitir que el cliente expanda el chat a pantalla completa.
- Mostrar preguntas sugeridas por IA en las páginas de producto para facilitar el inicio de la conversación.
- Permitir el envío de mensajes de voz e imágenes.
- Conservar el historial de las conversaciones entre las sesiones del cliente.
- Definir cuándo debe reiniciarse una conversación por inactividad.
- Permitir que el agente redirija al cliente a otra página cuando envíe un enlace. Esta funcionalidad está en fase beta.
- Agregar productos sugeridos por la IA al carrito nativo de la tienda. Esta funcionalidad está en fase beta.
- Permitir que el cliente ingrese la cantidad en la tarjeta de producto de la conversación y agregue esa cantidad al carrito en una sola acción.

Las funcionalidades que se muestran en el chat dependen de las preferencias definidas en la configuración del canal.

## Experiencia del cliente

Después de instalar el script, el widget de Shopping Assistant está disponible en las páginas configuradas de la tienda. El cliente puede abrir el chat y conversar con el agente de IA sin salir del sitio web.

En las páginas de producto, Shopping Assistant puede mostrar hasta tres preguntas sugeridas basadas en la información publicada sobre el producto, como el nombre, la descripción, la marca y las especificaciones técnicas. Cuando el cliente selecciona una pregunta, el chat se abre y envía el mensaje automáticamente.

La calidad de las preguntas sugeridas depende de la calidad de la información del catálogo. Las descripciones completas y las especificaciones detalladas ayudan a generar preguntas más relevantes.

Cuando el agente muestra productos recomendados o del catálogo en la conversación, cada tarjeta de producto muestra `-`, la cantidad y `+`. El cliente puede ingresar la cantidad que desea, y esa cantidad se agrega al carrito en una sola acción. Esto ayuda a los clientes que compran varias unidades, como en operaciones B2B, supermercados y pedidos por volumen. El control de cantidad funciona con FastStore y Store Framework y está incluido en Shopping Assistant sin costo adicional.

## Configurar Shopping Assistant

Para habilitar Shopping Assistant en la tienda, debes agregar la aplicación al proyecto, personalizar el widget, definir sus preferencias e instalar el script en el sitio web. Consulta las instrucciones en [Configurar el Shopping Assistant](https://help.vtex.com/es/docs/tutorials/configurar-el-shopping-assistant).

Para saber cómo se generan las preguntas y cómo activarlas o desactivarlas, consulta [Shopping Assistant: preguntas sugeridas](https://help.vtex.com/es/docs/tutorials/shopping-assistant-preguntas-sugeridas).
