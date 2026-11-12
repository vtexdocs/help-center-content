---
title: 'Live Desk'
createdAt: 2025-09-12T16:29:16.322Z
updatedAt: 2026-11-10T21:45:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: live-desk-overview
locale: es
---

Live Desk es el módulo de soporte humano de VTEX CX Platform, disponible en todos los proyectos. Los representantes lo usan para atender el soporte en tiempo real y en un solo lugar: reciben los contactos por departamento y cola, responden por el canal del contacto y revisan cada conversación.

Este artículo cubre:

- [Roles y permisos en Live Desk](#roles-y-permisos-en-live-desk)
- [Gestionar conversaciones](#gestionar-conversaciones)
- [Redactar mensajes](#redactar-mensajes)
- [Revisar el historial de soporte y las métricas](#revisar-el-historial-de-soporte-y-las-métricas)
- [Ajustar preferencias personales](#ajustar-preferencias-personales)

## Roles y permisos en Live Desk

Tu rol en el proyecto determina qué partes de Live Desk puedes usar. Dos roles se aplican directamente al soporte humano:

- **Moderador:** tiene acceso administrativo completo al proyecto y puede configurar Live Desk.
- **Soporte humano:** atiende los chats de soporte de los departamentos y colas a los que está asignado.

Para asignar estos roles, consulta [Gestionar miembros de VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/administrar-miembros-de-la-plataforma-vtex-cx). Para los demás roles del proyecto, como Contribuidor, Visualizador y Marketing, consulta [VTEX CX Platform: Visión de conjunto](https://help.vtex.com/es/docs/tutorials/vtex-cx-platform-vision-de-conjunto).

## Gestionar conversaciones

### Identificar conversaciones pendientes

La lista de conversaciones muestra quién envió el último mensaje de cada sala, para que veas cuáles esperan una respuesta.

- Un número indica cuántos mensajes del contacto no has leído.
- Una flecha azul indica que el último mensaje del contacto ya fue leído y todavía necesita respuesta.
- El prefijo `Tú:` indica que tú enviaste el último mensaje. Se aplica a mensajes de texto y multimedia.
- Un punto azul indica que la sala fue transferida, devuelta a una cola, tomada de la cola o asignada automáticamente. El punto aparece sin importar quién envió el último mensaje.

Cuando un representante anterior envió el último mensaje de una sala transferida, la vista previa no comienza con `Tú:`. Cuando abres las conversaciones de un representante desde el dashboard, una sala que espera respuesta muestra la flecha azul y la vista previa no incluye el prefijo `Tú:`.

### Filtrar salas por cola

En la vista **Salas en espera**, filtra la lista por cola para ver solo las salas de las colas que selecciones. Puedes seleccionar una o más colas. Quita el filtro para volver a la lista completa.

Las colas disponibles en el filtro dependen de tu rol:

- Los moderadores pueden ver y filtrar por todas las colas del proyecto.
- Los usuarios con el rol **Soporte humano** solo pueden ver y filtrar por las colas a las que están asignados.

Cada cola muestra la cantidad de salas que contiene y el departamento al que pertenece.

El filtro se aplica a las salas que esperan atención. Los moderadores también pueden usarlo para las salas en curso.

> ℹ️ El filtro mantiene la distribución actual de las salas y el orden existente de la lista. Para saber cómo se distribuye el soporte entre los representantes, consulta [Distribución y enrutamiento de las atenciones](https://help.vtex.com/es/docs/tutorials/distribucion-y-enrutamiento-de-las-atenciones).

### Ver información del contacto

Para ver los detalles del cliente que estás atendiendo, haz clic en la foto o el nombre del contacto en la conversación. El panel de información del contacto incluye:

- La foto del contacto ampliada
- El canal que utiliza el contacto, como WhatsApp o Email
- La hora del último mensaje
- La opción para transferir la conversación
- La galería de medios del contacto

### Editar campos personalizados del contacto

Los representantes pueden editar los campos personalizados de un contacto durante el soporte cuando el departamento lo permite. Para activar esta opción, consulta [Configurar Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk).

Para editar un campo, sigue estos pasos:

1. En la conversación, haz clic en el nombre del contacto para abrir el panel de información.
2. Haz clic en el campo que quieres cambiar.
3. Escribe el nuevo valor.

### Descargar audio del contacto

Puedes reproducir un mensaje de audio del contacto en la conversación y descargar el archivo original. Descarga el audio cuando necesites compartirlo con otro equipo, como logística u operaciones, mientras escalas un caso internamente.

### Transferir una conversación

Desde el panel de información del contacto, puedes transferir una conversación en curso a un departamento, una cola o un representante. Las transferencias pueden ocurrir de dos formas:

- **Transferencia automática:** el agente de IA transfiere la conversación cuando la opción **Permitir que agentes de IA transfieran conversaciones a soporte humano** está activada. Elige la cola según las descripciones definidas en [Configurar Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk).
- **Transferencia manual:** un gerente o administrador transfiere la conversación. Busca por nombre de representante, cola o departamento, o selecciona un destinatario de la lista.

Después de confirmar, la conversación pasa al destinatario elegido. Para ver cómo aparece una sala transferida en la lista de conversaciones, consulta [Identificar conversaciones pendientes](#identificar-conversaciones-pendientes).

Cada representante de la lista de transferencia muestra un estado: **En línea**, **En pausa** (con el nombre de la pausa personalizada) o **Fuera de línea**. La lista muestra primero los representantes en línea, luego los que están en pausa y después los que están fuera de línea. Dentro de cada estado, los nombres se ordenan alfabéticamente. Las pausas personalizadas y la opción **Bloquear transferencia de chats a representantes offline** se configuran en [Configurar Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk).

## Redactar mensajes

### Copiar y borrar el mensaje

Al empezar a escribir en el campo de mensaje, aparecen dos acciones:

- `Copiar texto`: copia todo el contenido del campo de mensaje.
- `Borrar texto`: vacía el campo de mensaje.

### Agregar emojis, audio y archivos

Usa los botones debajo del campo de mensaje para agregar contenido:

- **Emojis:** haz clic en el botón de emojis para abrir el panel y agregar un emoji al mensaje.
- **Audio:** haz clic en el botón de audio para grabar un mensaje y reproducirlo antes de enviarlo al contacto.
- **Archivos:** haz clic en el botón de adjuntar para añadir un archivo.

Para adjuntar archivos, también puedes arrastrar un archivo al campo de mensaje o presionar `Ctrl + V` para pegar una imagen.

Para agregar un salto de línea en el campo de mensaje, presiona `Shift + Enter`.

### Usar mensajes rápidos

Los mensajes rápidos son plantillas de texto preconfiguradas. Los representantes los usan para enviar respuestas estándar durante el soporte.

El campo de mensaje muestra `Escribe tu mensaje o / para activar los mensajes rápidos`. Debajo del campo, haz clic en el botón de mensajes rápidos para abrir el panel, donde puedes ver, gestionar y registrar mensajes. Al seleccionar un mensaje, su texto llena el campo.

Puedes insertar un mensaje rápido de dos formas:

- **Usando el panel:** haz clic en el botón de mensajes rápidos y, a continuación, en el mensaje que quieras.
- **Usando un atajo:** escribe `/` seguido del atajo asignado al mensaje.

En la lista, puedes moverte entre los mensajes con las flechas del teclado y presionar `Enter` para insertar el mensaje seleccionado. También puedes configurar mensajes rápidos específicos de cada departamento al crearlo. Para más información, consulta [Configurar Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk).

### Mejorar una respuesta con IA

`Mejorar respuesta con IA` revisa un mensaje antes de enviarlo al contacto. Escribes la respuesta en el campo de mensaje y la IA corrige errores, ajusta el tono o reescribe el texto manteniendo el significado original.

> ℹ️ El botón <i class="fas fa-magic" aria-hidden="true"></i> `Mejorar respuesta con IA` solo está disponible cuando el campo de mensaje tiene texto.

Para mejorar una respuesta, sigue estos pasos:

1. En el campo de mensaje, escribe el mensaje que quieres enviar.
2. Haz clic en <i class="fas fa-magic" aria-hidden="true"></i> `Mejorar respuesta con IA`.
3. Selecciona una opción de mejora:
    - **Corregir gramática y ortografía:** corrige errores de escritura, ortografía y gramática.
    - **Hacer más empática:** reescribe el mensaje con un tono más cálido y acogedor.
    - **Reescribir para mayor claridad:** reorganiza el texto para que las explicaciones sean más claras y objetivas.
4. Espera hasta que desaparezca `Mejorando tu respuesta`.

    > ℹ️ Para cancelar mientras se muestra `Mejorando tu respuesta`, haz clic en <i class="fas fa-times" aria-hidden="true"></i> `Respuesta mejorada`.

5. Revisa el nuevo mensaje. Puedes editar el texto o hacer clic en `Original` para restaurar tu borrador.
6. Haz clic en `Enviar`.

    > ℹ️ La IA no envía el mensaje por su cuenta. La conversación se actualiza solo después de que hagas clic en `Enviar`.

### Agregar una nota interna

Una nota interna mantiene el contexto en la conversación para otros representantes, como capturas de pantalla y explicaciones más largas. Pueden leerla cuando tomen la conversación o revisarla más tarde. El contacto no la recibe.

En la conversación, la nota aparece con fondo amarillo y comienza con `Nota interna:`, seguida del texto. Los medios adjuntos aparecen como miniaturas debajo del texto.

Debajo del campo de mensaje, haz clic en el botón de nota interna, escribe la nota y envíala. Puedes usar más de un párrafo y adjuntar hasta 10 archivos multimedia.

### Agregar una firma de representante

Cuando **Usar firma** está activada para el departamento, el nombre del representante aparece en cada globo de mensaje, seguido de dos puntos. Para activarla, consulta [Configurar Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk).

## Revisar el historial de soporte y las métricas

### Seguir las métricas de soporte

El soporte humano se monitorea en el dashboard de **Live Desk** dentro del módulo **Analytics**. El dashboard tiene dos pestañas:

- **Monitoreo:** muestra datos en tiempo real de los chats de soporte en curso, como estado, tiempos promedio, volumen por cola, tag y canal, y satisfacción del cliente (CSAT). Los moderadores del proyecto pueden definir metas de tiempo para que el dashboard resalte los chats que las superan. Consulta [Analytics: Configurar alertas operativas](https://help.vtex.com/es/docs/tutorials/analytics-configurar-alertas-operativas).
- **Análisis:** muestra datos históricos de los chats de soporte cerrados en el periodo seleccionado.

Puedes filtrar los datos por departamento, cola, representante, tag, canal y periodo. Para descargar los datos que se muestran en el dashboard, haz clic en `Exportar datos`.

Para cada métrica y sección, consulta [Analytics: Métricas de atención](https://help.vtex.com/es/docs/tutorials/analytics-metricas-de-atencion). Para crear un dashboard personalizado, consulta [Analytics: Crear dashboard personalizado](https://help.vtex.com/es/docs/tutorials/crear-dashboard-personalizado).

### Ver el historial de soporte

La lista de Live Desk está en orden cronológico, del soporte más reciente al más antiguo. En esta lista, puedes ver la foto del contacto, su nombre, el representante que atendió el soporte, los tags usados en la clasificación, la fecha y un botón para abrir el chat.

Al abrir el historial del contacto, puedes ver el inicio del soporte, el historial con el bot, los eventos del chat y los tags. En un chat de soporte cerrado con respuesta CSAT nativa, el historial también muestra la puntuación CSAT y, cuando el cliente la dejó, su comentario.

Para descargar una conversación cerrada, consulta [Exportar una conversación cerrada](#exportar-una-conversación-cerrada).

### Ver el historial de webchat entre sesiones

Shopping Assistant crea un Uniform Resource Name (URN) diferente para cada sesión de webchat. Cuando abres el historial del contacto, las conversaciones de webchat del mismo contacto se agrupan si la sala se abrió con `email`, `document` o ambos.

### Ver las conversaciones de un representante

Haz clic en el nombre de un representante en el dashboard para abrir el **modo de vista de soporte del representante**. Esta vista ofrece un resumen de los detalles de soporte de cada representante. Un gerente puede tomar un chat en cualquier momento transfiriéndoselo a sí mismo. Para ver cómo aparece una sala que espera respuesta en esta vista, consulta [Identificar conversaciones pendientes](#identificar-conversaciones-pendientes).

### Exportar una conversación cerrada

Solo los moderadores del proyecto pueden exportar una conversación cerrada. Puedes exportarla hasta un año después de que se cierre. Las conversaciones activas no se pueden exportar.

> ⚠️ Mientras se procesa una exportación, las nuevas exportaciones de esta conversación están temporalmente bloqueadas.

El archivo es un informe de la conversación que incluye:

- La transcripción de los mensajes
- Los eventos del chat
- Los detalles del soporte: **Iniciado**, **Finalizado**, **Representante**, **Contacto**, **URN**, **ID del ticket**, **Tags** y **CSAT**

Para exportar una conversación cerrada, sigue estos pasos:

1. En la lista de historial, abre una conversación cerrada.
2. Haz clic en `Exportar conversación`.
3. Selecciona **PDF** o **HTML**. **PDF** viene seleccionado por defecto.
4. Selecciona **Acepto los términos y entiendo las limitaciones de la exportación**.
5. Haz clic en `Exportar conversación`.
6. Abre el email de `no-reply@weni.ai`.
7. Haz clic en `Descargar informe`.

## Ajustar preferencias personales

Estas configuraciones cambian la apariencia de Live Desk y la forma en que te avisa. No cambian departamentos, colas ni conversaciones.

### Recibir notificaciones del navegador

Live Desk ofrece notificaciones del navegador como alternativa a la alerta sonora. Para recibirlas, permite las notificaciones del sitio en la configuración de tu navegador.

### Elegir el modo claro u oscuro

Live Desk ofrece **Modo claro** y **Modo oscuro**. El modo claro es el predeterminado. El modo oscuro aplica un tema oscuro a Live Desk y al menú lateral.

Para cambiar el tema, abre **Preferencias** y selecciona **Modo claro** o **Modo oscuro**. La selección se guarda automáticamente y se aplica cada vez que inicias sesión.

## Más información

- [Configurar Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk): Aprende a crear y gestionar departamentos, colas y representantes, y a definir las reglas de soporte.
- [Distribución y enrutamiento de las atenciones](https://help.vtex.com/es/docs/tutorials/distribucion-y-enrutamiento-de-las-atenciones): Aprende cómo se distribuye el soporte entre los representantes.
- [Utilizar el disparo activo de flujos](https://help.vtex.com/es/docs/tutorials/utilizando-el-disparo-activo-de-flujos): Aprende a iniciar conversaciones con contactos desde Live Desk.
- [Usando grupos para controlar la atención humana](https://help.vtex.com/es/docs/tutorials/usando-grupos-para-controlar-la-atencion-humana): Aprende a evitar que el chatbot interrumpa un chat de soporte en curso.
