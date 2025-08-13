---
title: 'Live Shopping: Eventos'
id: 6aGLiqoKG1UoS30f3FFWch
status: PUBLISHED
createdAt: 2024-10-09T19:53:03.947Z
updatedAt: 2024-10-10T14:22:02.934Z
publishedAt: 2024-10-10T14:22:02.934Z
firstPublishedAt: 2024-10-10T14:11:52.599Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: live-shopping-events
legacySlug: live-shopping-eventos
locale: es
subcategoryId: 6cSdymcqmJQIWXQKB1XJ54
---

En esta sección aprenderás a crear y gestionar eventos de transmisión en vivo con la aplicación Live Shopping.

### Crear nuevo evento

Para crear un nuevo evento de transmisión en vivo sigue los pasos a continuación:

1. En el **Admin VTEX** accede a** Apps > Live Shopping > Eventos**.
2. Haz clic en `Nuevo` para crear un nuevo evento de transmisión en vivo.
3. Rellena los siguientes campos como se indica a continuación:
* `Nombre del evento`: nombre del evento que vas a crear.
* `Fuente UTM`: parámetros de seguimiento agregados a tu URL, que te ayudan a rastrear y analizar el tráfico de diferentes fuentes.
* (Opcional) `ID de la colección`: el ID de la colección de productos que se vinculará al evento de transmisión en vivo. Esta funcionalidad incentiva a los clientes a agregar más productos al carrito.
* (Opcional) `Hora del evento`: información interna relativa a la fecha y hora del evento que ayuda a identificarlo fácilmente en la lista de eventos.
* (Opcional) `Categoría del evento`: la categoría a la que pertenece el evento, facilitando su identificación en la lista de eventos.
1. Haz clic en `Guardar cambios` para crear el evento.

Una vez creado el evento, puedes comenzar a prepararte para una sesión de transmisión en vivo dinámica y exitosa personalizando varios aspectos de tu evento. Aprovecha las opciones de personalización disponibles para adaptar el layout del reproductor de transmisiones en vivo, configurar las promociones, gestionar el chat en vivo y personalizar la visualización de los productos destacados.

### Personalizar reproductor de video de Live Shopping

Puedes personalizar el reproductor de video de Live Shopping para adaptarlo a tus preferencias y funcionalidades deseadas. Sigue los pasos a continuación para seleccionar las opciones del reproductor.

#### Tipo de layout

Para seleccionar el estilo de layout para la transmisión de tu evento en vivo:

1. En la lista de eventos, busca el evento deseado y haz clic en el botón de flecha de la columna `Acciones`.
2. En la sección **Tipo de layout**, elige el diseño deseado para la transmisión de tu evento en vivo:
    * **Horizontal (16:9)**: proporciona una vista en formato horizontal para dispositivos que utilizan la versión de escritorio.
    * **Vertical (9:16)**: proporciona una vista en formato vertical para dispositivos que utilizan la versión móvil.

#### Configuración CMS

Para seleccionar las funcionalidades para la transmisión de tu evento en vivo sigue estos pasos:

1. En la lista de eventos, busca el evento deseado y haz clic en el botón de flecha de la columna `Acciones`.
2. En la sección **Configuración CMS**, selecciona las funcionalidades que deseas aplicar a la transmisión de tu evento en vivo:
    * **Productos de la barra lateral**: muestra una barra con los productos seleccionados en el lateral del reproductor de video.
    * **Carrusel de productos**: muestra un carrusel de productos destacados en la parte inferior del reproductor de video durante el evento en vivo.
    * **Chat**: activa una funcionalidad de chat para que los usuarios interactúen y se comuniquen durante el evento en vivo.
    * **Me gusta**: permite que los usuarios interactúen con el contenido durante el evento en vivo indicando su satisfacción con un me gusta.
    * **Carrito de checkout**: muestra un botón de añadir al carrito que redirige a los usuarios al checkout en una nueva pestaña.
    * **Vista rápida**: esta opción permite a los usuarios acceder a los detalles del producto sin necesidad de salir de la página del evento en vivo.
    * **Scroll infinito**: activa la funcionalidad de scroll infinito para la opción **Productos de la barra lateral**, que se desplaza automáticamente según la cantidad de segundos definida. Los segundos se pueden definir en el campo **Estás modificando la velocidad de la barra lateral del producto (el rango recomendado: 3 a 100 segundos). Por favor, revisa y guarda tus cambios.**
3. Haz clic en `Vista previa` para previsualizar la aplicación Live Shopping de acuerdo con los ajustes que definiste.
  ![ls-cms](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/live-shopping/live-shopping-eventos_1.png)

En la sección **Configuración CMS**, también encontrarás el script para insertar la aplicación de transmisiones en vivo en tu storefront en el lugar que prefieras.

**Configurar opciones del evento**

En esta sección aprenderás a activar o desactivar funcionalidades específicas para tu evento en vivo.

1. En la lista de eventos, busca el evento deseado y haz clic en el botón de flecha de la columna `Acciones`.
2. En la sección **Configuración**, puedes activar o desactivar las siguientes opciones:
    * **Chat**
        * **Email obligatorio**: requiere que los usuarios proporcionen su dirección de email para participar en el chat del evento en vivo.
        * **Permitir GIF**: permite a los usuarios enviar GIF en el chat durante el evento en vivo.
        * **Activar envío de email**: envía un email al usuario cuando sus preguntas o comentarios reciban respuesta en el chat.
    * **Reproductor**
        * **Número de espectadores**: muestra el número de espectadores que están participando del evento.
        * **Ventana emergente de la transmisión**: abre el evento en una ventana emergente al acceder al sitio web del evento.
    * **Productos**
        * **Aplicar impuestos**: activa la aplicación de impuestos a los productos mostrados durante el evento en vivo. Cuando se activa esta opción, el módulo **Promociones > Impuestos** mostrará el precio del producto junto con el impuesto aplicable.

### Configurar promociones del evento

Para aumentar el engagement y las ventas, la aplicación Live Shopping permite crear promociones para eventos. Sigue los pasos a continuación para mostrar promociones durante tu evento:

1. En la lista de eventos, busca el evento deseado y haz clic en el botón de flecha de la columna `Acciones`.
2. En la sección **Promociones**, haz clic en `Seleccionar` para elegir una promoción existente que desees mostrar durante el evento en vivo.
3. Rellena los siguientes campos en función de tu situación específica:
    * **Promoción**: selecciona una promoción existente.
    * **Variable**: Selecciona la métrica o el indicador de engagement que deseas monitorear en la promoción, como me gusta, comentarios, espectadores o pedidos.
    * **Meta**: define la meta que deseas alcanzar para la variable seleccionada. Por ejemplo, puedes especificar el número de Me gusta o definir el número de pedidos a los que deseas llegar.
    * **Mensaje a mostrar**: personaliza el mensaje que se mostrará a los participantes cuando interactúen con la promoción.
    * **Seleccionar animación**: elige un estilo de animación para aumentar el impacto visual de la promoción.
4. Haz clic en `Guardar` para guardar la configuración y activar la promoción para el evento.

### Gestionar chat en vivo

Para gestionar el chat en vivo durante tu evento, busca el evento deseado en la lista de eventos y haz clic en el botón de flecha de la columna `Acciones`. En la sección **Chat en vivo** podrás ver y monitorear los comentarios en tiempo real, así como hacer un seguimiento del número de espectadores y de los me gusta. A continuación puedes consultar una lista con las funcionalidades disponibles:

![ls-livechat](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/live-shopping/live-shopping-eventos_2.png)

* **I - Datos de la tienda**: permite configurar el nombre del administrador del chat. Ingresa el nombre de la persona en el campo de entrada y haz clic en `Guardar` para guardar los cambios.
* **II - Descargar**: descarga la conversación de chat para futuras consultas o análisis.
* **III - Desfijar mensaje**: desancla un mensaje que se ha fijado previamente en la parte superior del chat.
* **IV - Fijar mensaje**: fija un mensaje en la parte superior del chat. De este modo, el mensaje fijado permanece visible aunque se publiquen nuevos mensajes.
* **V - Bloquear usuario**: bloquea al usuario que envió un determinado mensaje, impidiendo que publique más comentarios. Haz clic en el ícono de bloquear usuario y luego en `Bloquear` para confirmar.
* **VI - Eliminar**: elimina un mensaje del chat. Haz clic en el ícono de la papelera y a continuación en `Confirmar`.
* **VII - Seleccionar mensaje**: selecciona el mensaje a ser respondido. Haz clic en este ícono para enviar una respuesta al mensaje seleccionado.
* **VIII - Enviar**: Envía un mensaje de chat para interactuar activamente con los espectadores y participantes durante el evento. Escribe tu mensaje en el campo de entrada y haz clic en el ícono de enviar.

Además, también puedes [enviar preguntas y encuestas](https://help.vtex.com/es/tutorial/live-shopping-eventos--6aGLiqoKG1UoS30f3FFWch#enviar-preguntas-y-encuestas) y[ bloquear palabras no deseadas](https://help.vtex.com/es/tutorial/live-shopping-eventos--6aGLiqoKG1UoS30f3FFWch#bloquear-palabras-no-deseadas).

#### Enviar preguntas y encuestas

La aplicación Live Shopping ofrece una funcionalidad de chat en vivo que permite a los usuarios participar activamente en el evento y compartir sus opiniones en tiempo real. Aprende a continuación cómo enviar preguntas y encuestas y aumentar el engagement de tus clientes:

1. En la lista de eventos, busca el evento deseado y haz clic en el botón de flecha de la columna `Acciones`.
2. En la sección **Preguntas**, crea las preguntas que se mostrarán a la audiencia mediante el botón `Nueva pregunta`. Puedes elegir entre preguntas y encuestas, y definir el periodo de tiempo durante el que se mostrarán. Las respuestas recibidas se almacenarán en la misma sección.
  ![ls-question](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/live-shopping/live-shopping-eventos_3.png)
3. Haz clic en `Guardar la pregunta` para guardar tu pregunta y mostrarla a tu audiencia para que puedan responder. \

#### Bloquear palabras no deseadas

Para mantener un entorno de chat agradable, puedes evitar que ciertas palabras se muestren en el chat en vivo. Consulta a continuación cómo configurar la lista de palabras bloqueadas:

1. En el menú lateral del Admin, accede a la página **Palabras  bloqueadas**.
2. Haz clic en `Nuevas` para definir las palabras que deben prohibirse en el chat en vivo.
3. Haz clic en `Guardar` para guardar los cambios.

> ℹ️ Esta función es útil para bloquear comentarios groseros, políticos o no relacionados con tu transmisión en vivo. Observa que las palabras agregadas se aplicarán a todos los eventos, sin excepción.

### Acceder al estudio de streaming

Para acceder al estudio de streaming sigue los pasos a continuación:

1. En la lista de eventos, busca el evento deseado y haz clic en el botón de flecha de la columna `Acciones`.
2. En la sección **Estudio de streaming** selecciona una de las siguientes opciones:
    * `Copiar invitación`: haz clic para copiar el link del evento y enviárselo a un coanfitrión para que pueda unirse a la transmisión en vivo.
    * `Acceder`: haz clic para acceder al estudio de streaming como anfitrión. Al hacer clic en `Acceder`, se abrirá una nueva ventana que te redirigirá al estudio de streaming.
    ![ls-profile](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/live-shopping/live-shopping-eventos_4.png)
3. En el campo `Completar mi perfil`, ingresa tu nombre y haz clic en `Continuar`. Después se te redirigirá al estudio de streaming.

### Mostrar productos durante el evento en vivo

Cuando [creas un nuevo evento](https://help.vtex.com/es/tutorial/live-shopping-eventos--6aGLiqoKG1UoS30f3FFWch#crear-nuevo-evento), tienes la opción de agregar el ID de la colección de productos que se vinculará al evento de transmisión en vivo. En la sección **Productos de la colección** puedes gestionar los productos que se mostrarán durante el evento.

Para mostrar productos durante el evento en vivo sigue estos pasos:

1. En la lista de eventos, busca el evento deseado y haz clic en el botón de flecha de la columna `Acciones`.
2. En la sección **Productos de la colección** selecciona los productos que deseas mostrar durante la transmisión en vivo activando el botón de alternancia en `Acciones`.

![ls-products](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/live-shopping/live-shopping-eventos_5.png)

### Transmitir evento en vivo

Después de realizar toda la configuración y personalización de la aplicación Live Shopping, sigue los pasos a continuación para transmitir tu evento en vivo:

1. En la lista de eventos, busca el evento deseado y haz clic en el botón de flecha de la `columna` Acciones.
2. Copia el ID del evento en la sección `Detalles`.
3. Cambia el status del evento a `En vivo` haciendo clic en el botón de alternancia `Iniciar`.
![ls-event-details](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/live-shopping/live-shopping-eventos_6.png)
  > ⚠️ El evento puede tardar hasta 3 minutos en iniciarse.

4. Accede a **Storefront > Site Editor**.
5. Busca el bloque **Live Shopping** en tu storefront, de acuerdo con el template que utilizaste, y selecciónalo.
  ![ls-transmission](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/live-shopping/live-shopping-eventos_7.png)
6. Activa el reproductor de **Live Shopping** en tu tienda a través del botón `Mostrar componente`.
7. Haz clic en `Eventos (en vivo)` para elegir el evento deseado.
8. Haz clic en `Guardar` para guardar los cambios.

> ℹ️ Utiliza el módulo Site Editor para configurar los textos, imágenes y banners que se mostrarán junto al reproductor de **Live Shopping**.

### Personalizar apariencia

Para crear una experiencia personalizada y visualmente atractiva para el evento en vivo, puedes personalizar la apariencia de la aplicación Live Shopping. Sigue los pasos a continuación para configurar la apariencia de las vistas móvil y escritorio:

1. En el Admin VTEX accede a **Apps > Live Shopping > Eventos**.
2. En la lista de eventos, busca el evento deseado y haz clic en el botón de flecha de la `columna` Acciones.
3. Cuando el evento esté en vivo, ve a la sección **Tipo de layout** y haz clic en el botón `Personalizar apariencia` para acceder al módulo de personalización.
4. En la página **Apariencia** encontrarás dos opciones: móvil y escritorio. Al seleccionar cada opción, puedes configurar y personalizar los componentes específicos de esas vistas, personalizando tanto los productos como las secciones de chat del reproductor de Live Shopping.
  ![ls-look-feel](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/live-shopping/live-shopping-eventos_8.png)
  > ℹ️ Observa que cuando entras en el módulo de personalización y empiezas a personalizar un componente, este se destacará en color azul.

5. Selecciona la versión para dispositivos móviles haciendo clic en el ícono del celular para personalizar las siguientes opciones:
    * **Productos**
        * **Productos en dispositivos móviles:** personaliza el color de fondo y el precio en cada ficha de producto.
        * **Botón Agregar al carrito:** personaliza el contenido, el color del texto y el color de fondo del botón Agregar al carrito.
        * **Destacar producto**: personaliza el texto y los colores de fondo de la tarjeta de producto que deseas destacar.
    * **Chat**
        * **Mensaje del administrador:** personaliza el fondo y los colores del texto de los mensajes enviados por el administrador del evento.
        * **Caja de comentarios:** personaliza el texto que aparecerá en el campo de texto del chat.
6. Selecciona la versión de escritorio haciendo clic en el ícono de la computadora para personalizar las siguientes opciones:
    * **Productos**
        * **Productos en escritorio:** personaliza el color del nombre de cada producto.
        * **Botón Agregar al carrito:** personaliza el contenido, el color del texto y el color de fondo del botón Agregar al carrito.
        * **Producto destacado**: personaliza el color de fondo de la tarjeta y del precio del producto destacado. Además, puedes determinar si deseas mostrar el precio o el botón Agregar al carrito debajo del producto destacado.
        * **Selección de variaciones de productos**: especifica el estilo de visualización preferido para las variaciones de productos, sea en formato circular o cuadrado.
        * **Título de la sección de productos**: personaliza el título de la sección de productos que se presenta al lado del reproductor de la transmisión en vivo.
    * **Chat**
        * **Mensaje del administrador:** personaliza el fondo y los colores del texto de los mensajes enviados por el administrador del evento.
        * **Título de la sección del chat**: personaliza el título de la sección de chat que se muestra al lado del reproductor de la transmisión en vivo.
        * **Caja de comentarios:** personaliza el texto que aparecerá en el campo de texto del chat.
        * **Botón Enviar mensaje:** personaliza el color de fondo, el ícono y el color del ícono del botón de enviar mensaje.

Una vez finalizada la personalización, actualiza el sitio web de la tienda para ver los cambios aplicados. Observa que estos ajustes de personalización se guardarán automáticamente y se aplicarán a todos tus eventos en vivo futuros.

Si deseas volver a la configuración predeterminada, haz clic en el botón `Versión predeterminada` para deshacer los cambios y restaurar la configuración original.

### Finalizar evento

Debes finalizar la transmisión en vivo para dar por concluido el evento. Sigue estos pasos:

1. En la lista de eventos, busca el evento deseado y haz clic en el botón de flecha de la columna `Acciones`.
2. Cambia el status del evento a `Finalizado` pulsando el botón de alternancia `Status`.
> ⚠️ El proceso de finalización de la transmisión en vivo puede demorar un poco. No cierres la página hasta que el proceso se complete. El status `Finalizado` cambiará a verde cuando termine.

![ls-event-info](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/live-shopping/live-shopping-eventos_9.png)

Una vez concluida la transmisión en vivo, accede a la sección **Grabación del evento** para recibirlo por email o descargarlo directamente desde el navegador, si lo deseas. La descarga suele tardar 60 minutos, y podrás consultar el porcentaje del progreso.

#### Seguimiento de datos del evento

Para obtener información valiosa sobre el desempeño de tu transmisión en vivo, puedes monitorear los datos a través de la aplicación Live Shopping. Al analizar métricas de engagement e indicadores clave de desempeño (KPI), podrás evaluar la efectividad de tu evento y tomar decisiones informadas para futuras mejoras. Sigue los pasos a continuación para acceder y revisar los datos del evento:

![ls-analytics](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/live-shopping/live-shopping-eventos_10.png)

