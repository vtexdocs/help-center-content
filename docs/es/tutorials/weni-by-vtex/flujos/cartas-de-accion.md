---
title: 'Cartas de acción'
id: 5TQ44l4pp84PPWdnWdg3JN
status: PUBLISHED
createdAt: 2025-09-16T16:43:29.253Z
updatedAt: 2025-10-03T14:20:03.887Z
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

Después de entender un poco más sobre qué son las Cartas de acción en nuestra [Introducción a flujos](/l/es/flujos/introducci-n-a-los-flujos), ahora avanzaremos sobre qué cartas existen y qué podemos hacer con cada una de ellas.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_1.gif)

Para facilitar la navegación por este artículo, si deseas ir directamente a una carta de acción específica, solo tienes que hacer clic en su nombre a continuación:
  * **Enviar un mensaje al contacto**
  * **Enviar un mensaje a alguien m ás**
  * **Etiquetar el mensaje entrante**
  * **A ñadir una URN al contacto**
  * **A ñadir el contacto a un grupo**
  * **Eliminar el contacto de un grupo**
  * **Actualizar el contacto**
  * **Enviar un correo electr ónico**
  * **Guarda un resultado para este flujo**
  * **Entrar en otro flujo**
  * **Iniciar a otra persona en un flujo**
  * **Enviar un mensaje de WhatsApp**
  * **Abrir un ticket con un agente humano**
  * **Llamar a un webhook**

#### Envía un mensaje al contacto

La carta de acción más conocida y utilizada de la plataforma. Su función es enviar un mensaje al contacto. Este mensaje será recibido independientemente del canal en el que el usuario esté conversando, solo necesitas escribirlo en el cuadro de texto.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_2.png)

  1. **Facebook**
El envío de mensajes masivos por un canal de Facebook requiere que se especifique un tema si el usuario no ha enviado un mensaje en las últimas 24 horas. Definir un tema para usar en Facebook es especialmente importante para el primer mensaje en su flujo.![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_3.png)
  2. **WhatsApp**

El envío de mensajes por un canal de WhatsApp requiere usar una plantilla si no ha recibido un mensaje de un contacto en las últimas 24 horas. Configurar una plantilla para usar en WhatsApp es especialmente importante para el primer mensaje en su flujo. Lea el artículo sobre el [envío activo en WhatsApp](/l/es/whatsapp-business-api/disparo-activo-en-whats-app).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_4.png)

  1. Respuestas rápidas

Existe la posibilidad de enviar respuestas rápidas (botones de texto) a los usuarios, facilitando así la respuesta y sirviendo como una guía para la conversación. Actualmente, puedes agregar hasta 10 botones de texto por carta.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_5.png)

¡Atención! No todos los canales soportan botones de texto. Actualmente, los canales que tienen soporte para botones son: Telegram, Web y Facebook Messenger.
  1. Archivos

También es posible enviar archivos (adjuntos) a un usuario. Estos adjuntos pueden ser fotos, videos, audios y documentos. Para enviar estos adjuntos, solo tienes que colocar el enlace de los medios o elegir el archivo mediante el selector de archivos de tu computadora. Actualmente, puedes añadir hasta 3 adjuntos por carta.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_6.png)

Siempre verifica si el canal en el que tu público está trabajando es compatible con el tipo de medios que deseas enviar.
  1. Avanzado

La opción Avanzado (Configuración avanzada) permite activar el envío de mensajes a todos los destinos, es decir, enviar mensajes a todos los canales a los que el contacto esté vinculado, y no solo al canal preferido. Después de esto, el canal elegido por el usuario para responder se convertirá en el canal preferido para esa conversación.

Es decir, si tu canal preferido es WhatsApp, al marcar la opción de todos los destinos, el contacto recibirá el mensaje en todos los canales que tenga, y si responde por SMS, el SMS se convertirá en el nuevo canal preferido del contacto y el flujo continuará allí.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_7.png)

¡Esta configuración es útil solo en casos específicos! Si tienes dudas sobre su uso, preferiblemente déjala desmarcada.

#### Enviar un mensaje a alguien más

Podemos enviar un mensaje a un contacto o grupo diferente al que está ejecutando el flujo. Este mensaje se mostrará al contacto/grupo sin afectar ningún flujo o conversación que pueda estar en ejecución para él en ese momento.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_8.png)

Con esto, usted o un grupo de personas de su elección podrán recibir notificaciones de los usuarios que pasen por puntos específicos de sus flujos.

#### Etiquetar el mensaje entrante

Puedes marcar el último mensaje enviado por el contacto con una etiqueta (rótulo). Todos los mensajes etiquetados se agrupan bajo el mismo nombre del rótulo. Puedes aprender más sobre mensajes y etiquetas en el artículo de [mensajes](/l/es/mensajes/mensajes-de-contacto).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_9.png)

¿Qué tal marcar todos los intereses en los productos de tu empresa? Sería una buena forma de utilizar las etiquetas.

#### Añadir una URN para al contacto

Es posible añadir nuevos URNs para tu contacto. Puedes seleccionar el tipo de URN que se añadirá (Número de teléfono, Whatsapp, SMS, Telegram, etc.) e ingresar el nuevo valor, utilizando un valor fijo o una variable de flujo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_10.png)

¿Tu lead llegó a través de tu sitio web? ¡Pregunta su número de WhatsApp y envíale un mensaje por allí! Recuerde que es necesario agregar el código identificador del país al modificar el número de teléfono o WhatsApp.

#### Añadir el contacto a un grupo

Puedes agregar el contacto a un grupo estático. Si el grupo no existe en la pestaña de contactos, puedes crear uno nuevo escribiendo el nombre deseado para el grupo en el campo de selección.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_11.png)

Para entender un poco más sobre grupos estáticos, haz [clic aquí](/l/es/grupos/grupos-estaticos).

¿El contacto respondió a una encuesta de satisfacción? Puedes agruparlo con todos los que respondieron a la encuesta.

#### Eliminar el contacto de un grupo

Puedes eliminar el contacto de algún [grupo estático](/l/es/grupos/grupos-estaticos). Además, tienes la opción de marcar para eliminar el contacto de todos los grupos a los que pertenece, sin distinción.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_12.png)

¿El contacto ya no es tu cliente? Puedes eliminarlo del grupo y así bloquear las acciones exclusivas para clientes.

#### Actualizar el contacto

Para completar los campos del contacto, solo necesitas utilizar la opción **Actualizar Contacto**. En ella, seleccionas el campo del contacto que deseas actualizar, y después puedes insertar un valor fijo o un resultado de flujo. Si el campo del contacto aún no existe, solo escribe el nombre que deseas para él.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_13.png)

¿Preguntaste la edad de tu contacto? Puedes guardar el valor para consultarlo más tarde.

#### Envía un correo electrónico

Aquí puedes enviar un correo electrónico a alguien. Este correo puede ser tanto del contacto que está ejecutando el flujo, como de cualquier otro. Recuerda que el correo electrónico no es un canal de conversación en la Plataforma Weni, es decir, si alguien responde al correo enviado, la respuesta irá a la bandeja de entrada del correo electrónico configurado en la organización (para más información, visita el artículo de [configuración de la organización](/l/es/configuracionesgenerales/configuraciones-generales-de-la-organizacion)).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_14.png)

Para enviar el correo electrónico, solo necesitas ingresar el destinatario, el asunto y el cuerpo del mensaje en los campos correspondientes.

¿Deseas enviar recordatorios rápidos a un contacto sin gastar en SMS o llamadas? ¡Envía un correo electrónico!

#### Guarda un resultado para este flujo

Podemos simular un resultado de flujo con esta carta de acción. Creándolo desde cero, sin la necesidad de un input o pasar por alguna carta de decisión. Así, solo debes elegir el nombre del resultado del flujo, asignar su valor y, si lo deseas, una categoría. Además, podemos actualizar el valor de algunos resultados de flujo ya existentes.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_15.png)

¿Deseas guardar la cantidad de preguntas que un contacto hizo, pero no quieres vincularlo directamente a un campo de contacto? La mejor forma es creando una variable de flujo.

#### Ingresar en otro flujo

Aquí podemos iniciar un nuevo flujo para el usuario. Cuando el usuario entra en un nuevo flujo, el flujo en el que estaba antes (que ahora puede llamarse flujo padre) queda en espera hasta su finalización. Mientras tanto, el usuario ejecutará el nuevo flujo (que ahora puede llamarse flujo hijo) y al finalizar, regresará al punto donde se detuvo en el flujo padre. Para que funcione, solo debes elegir el nombre del flujo que deseas entre las opciones existentes.

Cuando se termina la ejecución del flujo hijo, la carta **Ingresar en otro flujo** nos da la oportunidad de tener dos rutas, siendo así la única carta de acción que utiliza este concepto (para entender el concepto de ruta, visita el artículo de cartas de decisión). Estas dos rutas posibles se basan en cómo terminó el flujo hijo. Si se completó sin problemas, el flujo tomará la ruta de **Complete** , y si el flujo hijo expiró, el flujo padre utilizará la ruta de **Caducado**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_16.png)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_17.png)

Entrar en un flujo es una excelente manera de organizar tus proyectos.

#### Iniciar a otra persona en un flujo

De la misma manera que podemos enviar un mensaje a un contacto/grupo que no es el actual, también podemos iniciar un nuevo flujo.
Para decidir quién será iniciado en el flujo, podemos elegir entre tres opciones:
  1. Definir manualmente los contactos/grupos que serán iniciados en el nuevo flujo;
  2. Crear una regla lógica (normalmente basada en campos de contacto) para filtrar los contactos que deben entrar en el flujo;
  3. Crear un nuevo contacto e iniciarlo en el flujo.

Después de decidir entre estas opciones, solo queda seleccionar un flujo para ser iniciado. A diferencia de **Entrar en otro flujo** , esta carta no crea opciones de ruta, ya que no espera el fin de los flujos hijos para continuar con la ejecución del flujo padre.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_18.png)

Esta carta puede utilizarse para crear campañas reactivas, como notificar a un grupo sobre la llegada de un nuevo integrante.

#### Enviar un mensaje de WhatsApp

La carta nativa para enviar mensajes interactivos en WhatsApp permite a los usuarios utilizar de manera práctica las funcionalidades disponibles en el canal, integrando estas opciones en sus proyectos de forma sencilla.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_19.png)

Ofrece tres tipos de mensajes interactivos:
  * **Respuestas r ápidas**: Permite crear hasta 3 respuestas predefinidas que los destinatarios pueden seleccionar rápidamente.
  * **Lista de opciones** : Ofrece un menú interactivo con hasta 10 elementos, cada uno con título y descripción.
  * **Solicitar ubicaci ón**: Posibilita solicitar la ubicación del cliente final, facilitando la atención.

Además de estas interacciones, es posible incluir encabezados (con medios o texto) y pies de página en los mensajes. La disponibilidad de estos elementos varía según el tipo de mensaje interactivo elegido.
El uso de esta carta no reemplaza el uso de plantillas (mensajes preaprobados por Meta) para envíos activos.

#### Abrir un ticket con un agente humano

Esta carta se utiliza para abrir tickets de atención humana. Para que las atenciones se dirijan al módulo de Chats, es necesario seleccionar el sector (1) y la fila (2). Obtenga más información sobre cómo configurar la [atención humana en el módulo de Chats](/l/es/atencion-humana/weni-chats-configurando-el-atencion-humana).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_20.png)

#### Llamar un webhook

Esta carta permite hacer solicitudes a APIs, almacenando el retorno de esas solicitudes en una variable que se puede utilizar en el flujo. Esto facilita la conexión con otros sistemas externos. Aprende cómo hacer [llamadas a sistemas externos](/l/es/flujos/call-webhook-c-mo-hacer-llamadas-a-sistemas-externos).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/cartas-de-accion_21.png)
