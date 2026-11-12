---
title: 'Configurar el Shopping Assistant'
createdAt: 2025-09-15T14:12:38.155Z
updatedAt: 2026-11-12T12:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: configure-shopping-assistant
locale: es
---

Shopping Assistant es el canal de chat web de VTEX CX Platform que permite atender a los visitantes del sitio web con un agente de IA. Puedes personalizar la apariencia y el comportamiento del widget y, a continuación, instalar el chat en el sitio web mediante un script generado por la plataforma.

Este tutorial explica cómo acceder al canal, personalizar su apariencia, configurar sus preferencias e instalar el script en el sitio web.

## Instalar la aplicación

Para instalar la aplicación en tu tienda, sigue estos pasos:

1. En el proyecto correspondiente, accede a **Configuración > Canales**.
2. Haz clic en la pestaña **Descubrimiento**.
3. Ingresa **Shopping Assistant** en el campo de búsqueda o busca la tarjeta de la aplicación.
4. Haz clic en el botón <i class="fas fa-plus" aria-hidden="true"></i> para agregar la aplicación al proyecto.

## Acceder a la aplicación

Para abrir la configuración de Shopping Assistant, sigue estos pasos:

1. En el proyecto, accede a **Configuración > Canales**.
2. Haz clic en la pestaña **Mis aplicaciones**.
3. En la sección **Aplicaciones instaladas**, haz clic en la tarjeta de **Shopping Assistant** que deseas configurar.

Al hacer clic en la tarjeta, se abre la ventana de configuración de **Shopping Assistant**, que contiene las pestañas **Apariencia**, **Preferencias** y **Código script**. También se muestra una vista previa del widget para que puedas comprobar el resultado de los cambios.

## Personalizar la aplicación

Puedes personalizar el Shopping Assistant del proyecto modificando la apariencia y las funcionalidades del agente.

### Apariencia

La pestaña **Apariencia** define el aspecto del widget de chat. En ella puedes configurar los siguientes campos:

- **Título del chat:** Nombre que se muestra en el encabezado del widget.
  - Al hacer clic en <i class="fas fa-plus" aria-hidden="true"></i> `Más`, puedes agregar campos opcionales:
    - **Subtítulo del chat:** Texto que aparece debajo del título.
    - **Mensaje de notificación del chat:** Mensaje que aparece en la notificación del chatbot.
    - **Texto del placeholder:** Placeholder del campo de mensaje.
- **Color principal:** Color principal del chat.
- **Imagen del avatar:** Avatar del agente en el chat.
- **CSS personalizado:** Carga un archivo CSS para aplicar estilos personalizados al widget.

### Preferencias

La pestaña **Preferencias** define el comportamiento del chat. En ella puedes configurar los siguientes campos:

| Sección | Funcionalidad | Descripción |
| --- | --- | --- |
| **Comportamiento** | Modo incorporado | Activa esta opción para mostrar el chat incorporado en la página de la tienda. Si prefieres mostrarlo como una ventana flotante, desactívala. |
| **Comportamiento** | Mostrar botón de pantalla completa | Muestra un botón que permite al usuario expandir el chat a pantalla completa. |
| **Comportamiento** | Iniciar chat en pantalla completa | Abre el chat directamente en pantalla completa cuando el usuario inicia una conversación. |
| **Comportamiento** | Indicador de mensajes no leídos | Muestra un indicador visual cuando el usuario tiene mensajes no leídos. |
| **Comportamiento** | Usar optimización de conexión | Activa esta opción para conectar el chat al Socket solo cuando el usuario abre el chat o cuando su último mensaje se envió hace menos de 24 horas (tiempo de inicialización automática del Socket). Si prefieres que el chat se conecte automáticamente al Socket, desactívala. |
| **Retail** | Preguntas sugeridas por IA (Nuevo) | Muestra botones de interacción rápida en la página de producto. La IA analiza el SKU para sugerir automáticamente las preguntas más relevantes de los clientes. |
| **Retail** | Permitir que Shopping Assistant redirija automáticamente la página **(Beta)** | Permite que Shopping Assistant redirija automáticamente al usuario a otra página cuando se envía un enlace durante la conversación. Esta funcionalidad está actualmente en fase beta y puede cambiar. |
| **Retail** | Agregar al carrito de la tienda **(Beta)** | Permite que los usuarios agreguen productos sugeridos por la IA directamente al carrito nativo de la tienda, en lugar de utilizar un carrito administrado por Shopping Assistant. Se recomienda para tiendas con carritos o flujos de checkout personalizados. Esta funcionalidad está actualmente en fase beta y puede cambiar. |
| **Medios** | Mostrar botón de grabación de voz | Muestra un botón que permite al usuario enviar mensajes de voz en el chat. |
| **Medios** | Mostrar botón de cámara | Muestra un botón que permite al usuario enviar imágenes en el chat. |
| **Historial de chats e inactividad** | Mantener historial de mensajes | Conserva el historial de mensajes de la conversación entre las sesiones del usuario. |
| **Historial de chats e inactividad** | Reiniciar conversación por inactividad del contacto | Reinicia automáticamente la conversación después de un periodo de inactividad del usuario. Cuando esta opción está habilitada, puedes definir el periodo de inactividad en el campo siguiente, con el formato HH:mm. |
| **Historial de chats e inactividad** | Tiempo entre mensajes | Define el intervalo entre los mensajes enviados por el agente. |

### Código script

La pestaña **Código script** genera el código para instalar Shopping Assistant en el sitio web. Para instalar el chat, sigue estos pasos:

1. Después de finalizar la configuración de Shopping Assistant, haz clic en `Guardar cambios`. Esto genera el código script con las preferencias guardadas.
2. Haz clic en la pestaña **Código script**.
3. Copia el código que se muestra o haz clic en `Descargar script`.
4. En el código del sitio web, pega el script encima de la última etiqueta `</body>`.
