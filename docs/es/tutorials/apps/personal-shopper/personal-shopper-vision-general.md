---
title: 'Personal Shopper - Información general'
id: 12dC0UMD0C6x6kw43LF8MH
status: PUBLISHED
createdAt: 2024-11-19T15:03:14.481Z
updatedAt: 2024-11-21T19:19:22.351Z
publishedAt: 2024-11-21T19:19:22.351Z
firstPublishedAt: 2024-11-21T16:43:30.533Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: personal-shopper-overview
legacySlug: personal-shopper-vision-general
locale: es
subcategoryId: 2vuGumwWQ432unGlyOOXXc
order: 1
---

**Personal Shopper** es una aplicación que permite a las empresas organizar sesiones de compras en vivo en la tienda, facilitando la interacción en tiempo real con los clientes. Durante estas sesiones el personal shopper puede mostrar productos, responder preguntas y agregar productos al carrito del cliente. Esta experiencia interactiva de compra está diseñada para aumentar las ventas, generar engagement con los clientes y crear lealtad a la marca.

> ⚠️ La aplicación Personal Shopper está diseñada para sellers que desean mostrar nuevas colecciones a clientes de alto valor o a clientes B2B. Estas sesiones en vivo tienen como objetivo proporcionar una experiencia de compra más personalizada que la que ofrece [Live Shopping](/es/docs/tutorials/live-shopping).

La aplicación Personal Shopper es compatible con dispositivos de escritorio y móviles.
aplicación Personal Shopper es compatible con dispositivos de escritorio y móviles.

| ![mobile-personalshopper](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/personal-shopper/personal-shopper-vision-general_1.gif)     | ![desktop-personalshopper](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/personal-shopper/personal-shopper-vision-general_2.gif)     |
| ---------- | ---------- |
| Personal Shopper móvil       | Personal Shopper computadora       |

Personal Shopper se ofrece en los siguientes idiomas: inglés, español, portugués y catalán. Actualmente está disponible en los siguientes países:

* Argentina
* Australia
* Brasil
* Canadá
* Chile
* Colombia
* Francia
* Alemania
* Italia
* México
* Países Bajos
* Perú
* Portugal
* España
* Reino Unido
* Estados Unidos

Para comenzar, sigue esta guía e instala la aplicación Personal Shopper en tu entorno VTEX.

Personal Shopper es una aplicación paga con diferentes planes de suscripción: **Standard** y **Pro**. El costo de la suscripción depende del plan que elijas, ya que cada uno proporciona un número específico de minutos mensuales de transmisiones en vivo.

Para realizar un seguimiento del uso de tu plan en la aplicación Personal Shopper, ve a **Apps > Personal Shopper > Configuración**. En la pestaña `Gestión de Personal Shopper` encontrarás la sección **Plan**, donde podrás ver los detalles de uso de tu plan. Esta sección proporciona información sobre tu suscripción y uso, ayudándote a monitorear y administrar tu plan de forma eficaz.

> ℹ️ Para más información sobre planes y precios, consulta la página [Personal Shopper](https://vtex.com/mx-es/vtex-personal-shopper/).

Una vez instalada [la aplicación Personal Shopper](https://developers.vtex.com/docs/apps/vtexventures.personal-shopper-free#installation), accede al Admin y ve a **Apps**. En la sección **Personal Shopper** encontrarás las siguientes páginas:

* **Videollamadas:** actúa como página central para que los personal shoppers gestionen de forma eficiente las videollamadas e interacciones con los clientes. Es la página más utilizada por los personal shoppers, ya que permite acceder a funcionalidades esenciales para la gestión de las videollamadas y la disponibilidad, como:
  * Crear videollamadas personalizadas y compartirlas con los clientes.
  * Activar o desactivar disponibilidad para atender videollamadas.
  * Ver la lista de clientes que están a la espera de una videollamada.
  * Acceder a la lista de clientes que agendaron una videollamada.
* **Analytics:** proporciona información y datos relevantes relacionados con el desempeño del personal shopper y las interacciones con los clientes. Estas son las secciones y funcionalidades disponibles en la página Analytics:
  * **General:** proporciona acceso al historial general de videollamadas de la tienda categorizado por personal shopper. Esta información ofrece una visión general del total de videollamadas realizadas por cada personal shopper. Puedes consultar más detalles en la pestaña Personal shopper.
  * **Personal shopper**: permite buscar personal shoppers específicos y consultar su historial de videollamadas,  accediendo a información relevante como el historial de videollamadas, productos comentados, datos de clientes, carritos agregados, compras realizadas, duración de las videollamadas e incluso descargar las grabaciones de las videollamadas. Además, puedes revisar los detalles de la encuesta de satisfacción e identificar el dispositivo utilizado por el cliente para realizar la videollamada.
  * **Historial de videollamadas:** proporciona acceso a los detalles específicos de cada videollamada, incluida la lista de todos los personal shoppers participantes. Si es aplicable, también se puede descargar el chat.
* **Configuración**: permite agregar y gestionar personal shoppers, configurar mensajes y notificaciones personalizados dirigidos al cliente y definir otras opciones de configuración para adaptar la aplicación a tus necesidades específicas.

## Configuración

### Personal Shopper: crear landing page

1.	En el Admin VTEX, accede a **Storefront > Páginas**.
2.	Haz clic en `Crear nueva` para crear una nueva landing page para Personal Shopper.
3.	Rellena los siguientes campos como se indica a continuación:
    * **Título**: asigna un nombre a tu landing page (por ejemplo, personal shopper).
    * **URL**: especifica la ruta URL de tu landing page (por ejemplo, `personal-shopper`).
    * **Requiere autenticación**: determina si se requiere autenticación para acceder a la landing page.
    * **Descripción**: agrega una metadescripción que describa la página.
    * **Palabras clave**: ingresa palabras clave relevantes para optimizar la descubribilidad en los motores de búsqueda.
    * **Templates**: selecciona la plantilla adecuada para la página. Por ejemplo: `livestreamingdemo.store-theme@1.x:store.custom#ps-call`
4.	Haz clic en `Guardar` para crear la nueva landing page para Personal Shopper.

### Personal Shopper: configurar preferencias

Para configurar tus preferencias sigue los pasos a continuación:

1.	En el Admin VTEX, accede a **Apps > Personal Shopper > Configuración**.
2.	Haz clic en la pestaña `Configuración de personal shoppers`.
3.	En la sección **Cuenta general**, rellena los campos siguiendo los pasos a continuación:
    * **URL del cliente**: ingresa la URL de la página que creaste en la sección [Personal Shopper: crear landing page](/es/docs/tutorials/personal-shopper-vision-general#personal-shopper-crear-landing-page). Por ejemplo, `https://www.mystore.com/personal-shopper`.
    * **Nombre de la tienda**: ingresa el nombre de tu tienda. Este nombre se utilizará en los emails que se envíen a los clientes y a los personal shoppers.
4.	En la sección **Política de privacidad & Términos y condiciones**, configura los links y el texto adecuados para solicitar el consentimiento del usuario con relación a la política de privacidad y los términos y condiciones del procesamiento de datos.
5.	En la sección **Mensajes y notificaciones**, personaliza los siguientes mensajes:
    * **Mensaje para notificar al personal shopper**: ingresa el mensaje que se enviará para notificar al personal shopper sobre una solicitud de ayuda del cliente.
    * **Mensaje para notificar al cliente agendado**: ingresa el mensaje que se enviará al cliente una vez programada la sesión de personal shopper.
    * **Mensaje para notificar al cliente que ya puede acceder a su cita con el personal shopper**: ingresa el mensaje que se enviará al cliente para unirse a una sesión de personal shopper.
    * **Mensaje para notificar al cliente**: ingresa el mensaje que se enviará al cliente una vez que el personal shopper esté listo.
    * **Mensaje de cancelación**: ingresa el mensaje que se enviará en caso de cancelación.
6.	En la sección **Carrito y checkout** selecciona las opciones:
    * Si deseas redirigir el carrito al minicart o al resumen del pedido.
7.	En la sección **Estilos CSS**, realiza las siguientes acciones:
    * Copia um template de invitación por email.
    * Agrega un link para tu hoja de estilo CSS.
    * Selecciona el selector CSS del minicart de tu tienda si lo deseas.
8.	Haz clic en `Guardar cambios` para guardar tus preferencias.

En la sección **Configuración CMS**, también encontrarás el script de Personal Shopper para agregar a tu template o página principal.

### Agregar personal shoppers

Para gestionar eficazmente las interacciones con los clientes y ofrecerles asistencia personalizada, es esencial agregar personal shoppers a la aplicación Personal Shopper. Estos desempeñan un papel fundamental atendiendo las videollamadas de los clientes, brindándoles orientación y recomendando productos según su experiencia. Sigue los pasos a continuación para agregar un personal shopper en el Admin:

1.	En el Admin VTEX, accede a **Apps > Personal Shopper > Configuración**.
2.	En la pestaña `Gestión de personal shoppers`, haz clic en `Nuevo` para registrar un nuevo personal shopper.
3.	Rellena los siguientes campos:
    * **Nombre**: ingresa el nombre del personal shopper.
    * **Email**: ingresa la dirección de email del personal shopper.
    * 	**Teléfono**: ingresa el número de teléfono del personal shopper.
    * **Colecciones de productos**: especifica los ID de colecciones asociadas al personal shopper.
    * **Disponibilidad**: selecciona el horario en que el personal shopper estará disponible.
    * **Repetir semanalmente**: selecciona si la disponibilidad del personal shopper se repetirá semanalmente.
4.	Haz clic en `Crear personal shopper` para guardar los datos y agregar el personal shopper al sistema.

Al crear perfiles para personal shoppers y asignarles horarios de trabajo y colecciones de productos específicos, garantizas que los clientes tengan acceso a los especialistas adecuados en el momento oportuno.

### Gestionar permisos

Consulta en esta sección cómo crear roles y asignar permisos exclusivos en los módulos de Personal Shopper. Esto te permite restringir el acceso a la información y a las acciones que elijas para garantizar la seguridad y la integridad de la aplicación Personal Shopper.

Ten en cuenta que si un usuario no tiene permiso para acceder a un módulo específico, verá un mensaje indicando la falta de acceso. Para obtener acceso al módulo el usuario debe ponerse en contacto con el administrador de la cuenta.

Las siguientes etapas debe realizarlas un usuario con permisos de `Owner`.

### Crear roles

Para establecer permisos restringidos y exclusivos en la aplicación es necesario crear roles. Los usuarios pueden tener asignados estos roles para acceder a módulos específicos dentro de la aplicación.

1.	Accede al Admin VTEX.
2.	Después, ve a **Configuración de la cuenta > Roles de usuario**.
3.	Haz clic en `Nuevo rol` para crear un rol de personal shopper.
4.	En el campo **Seleccionar rol**, elige la opción `Custom`.
5.	Ingresa un nombre para el rol que refleje los permisos o el perfil deseado.
6.	En la sección **Productos y recursos**, selecciona la opción `Personal Shopper App`. Se mostrarán los tres módulos descritos a continuación. Dependiendo del rol y los permisos deseados, selecciona uno, dos, o los tres módulos a los que tendrá acceso el usuario:
    * **Videollamada**: permite al usuario iniciar, recibir y crear videollamadas personalizadas.
    * **Analytics**: permite la visualización de las métricas generales e individuales, así como el historial de videollamadas.
    * **Configuración**: permite definir la configuración de Personal Shopper.
7.	Después de seleccionar los módulos, agrega los emails de los usuarios que tendrán acceso a este rol.
8.	Haz clic en `Guardar`.

### Asociar roles a usuarios

Una vez creados los roles adecuados, puedes asociar usuarios a estos roles siguiendo los pasos a continuación:

1.	Accede al Admin VTEX.
2.	Después, ve a **Configuración de la cuenta > Usuarios**.
3.	Haz clic en `+ Nuevo` para crear un nuevo usuario (si es necesario) o busca el usuario existente en la lista.
4.	Si creas un nuevo usuario, ingresa el email del usuario al que deseas conceder acceso en el campo **Email**. De lo contrario, pasa a la etapa 5.
5.	Haz clic en `+ Agregar roles`.
6.	Selecciona los roles deseados de la lista marcando las casillas correspondientes y haz clic en `Agregar roles`.
7.	Haz clic en `Guardar` para aplicar los cambios y asociar los roles al usuario.

### Gestionar personal shoppers

En el Admin VTEX, accede a **Apps > Personal Shopper > Configuración**. En la pestaña `Gestión de personal shoppers` puedes realizar las siguientes acciones:

* **Buscar personal shopper**: utiliza la barra de búsqueda para buscar personal shoppers por nombre, número de teléfono, email o productos de la colección. Esto te permite encontrar rápidamente personal shoppers específicos en tu lista.
* **Editar personal shopper**: haz clic en el ícono de lápiz situado junto al personal shopper para editar las opciones guardadas. Esto te permite actualizar datos como nombre, email, número de teléfono, disponibilidad y productos de la colección.
* **Eliminar personal shopper**: haz clic en el ícono de papelera situado junto al personal shopper para eliminarlo del sistema. Esta acción elimina permanentemente al personal shopper y su información asociada.

### Crear videollamada

Si estás registrado como personal shopper puedes crear videollamadas con tus clientes mediante la aplicación Personal Shopper de la siguiente manera:

1.	Accede al Admin VTEX usando el email asociado a tu cuenta de Personal Shopper.
2.	Ve a **Apps > Personal Shopper > Videollamadas**.
3.	Haz clic en `Crear videollamada privada`.
4.	Rellena los siguientes campos:
    * **Nombre:** ingresa el nombre del cliente que participará en la videollamada.
    * **Email**: ingresa la dirección de email del cliente para la comunicación y las notificaciones relacionadas con eventos.
    * **Teléfono (opcional)**: ingresa el número de teléfono del cliente para activar opciones de contacto adicionales.
    * **Producto (opcional)**: si es aplicable, especifica el producto de interés que se presentará en la videollamada.
    * **Selecciona la plataforma que estás usando**: VTEX IO o VTEX Portal (también conocida como VTEX CMS Portal (Legado)).
5.	Haz clic en `Crear videollamada`.
6.	Selecciona `Iniciar videollamada instantánea` para comenzar la sesión con el cliente o `Crea una videollamada para más tarde` para programarla.

![calls-personalshopper](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/personal-shopper/personal-shopper-vision-general_3.png)

Si eliges iniciar una videollamada instantánea, haz clic en `Iniciar videollamada` para comenzar la sesión. Esto te permite interactuar con el cliente en tiempo real y ofrecer asistencia personalizada. Para conocer detalles más técnicos sobre funcionalidades de la videollamada, consulta la sección [Realización de videollamada](/es/docs/tutorials/personal-shopper-vision-general#realizacion-de-la-videollamada). En este caso, asegúrate de conceder al navegador los permisos necesarios para el acceso al micrófono y a la cámara y así evitar problemas durante la videollamada.

Si optas por programar una videollamada para más tarde, recibirás el link para compartirlo con los participantes. Para más información, consulta la sección [Ingresar a un evento programado](/es/docs/tutorials/personal-shopper-vision-general#ingresar-a-un-evento-programado).

### Gestionar disponibilidad

Además de crear sus propias videollamadas, los clientes también tienen la opción de solicitar sesiones de consulta con personal shoppers. Para garantizar que tú, como personal shopper, puedas ser asignado a estas sesiones, es importante que gestiones tu status de disponibilidad, para lo que debes seguir los pasos a continuación:

1.	Accede al Admin VTEX usando el email asociado a tu cuenta de Personal Shopper.
2.	Ve a **Apps > Personal Shopper > Videollamadas**.
3.	Activa el botón `Disponible/Activo` para cambiar tu status en función de tu disponibilidad para participar en las sesiones. Activa el botón cuando estés disponible para participar en las sesiones y desactívalo cuando no tengas disponibilidad.

Al establecer tu status como disponible, indicas al sistema que tienes disponibilidad para atender clientes por videollamada. Esto aumenta la probabilidad de ser asignado a las sesiones. Recuerda actualizar periódicamente tu status de disponibilidad en función de tu horario y disponibilidad para ofrecer el mejor servicio posible a los clientes.

### Ingresar a un evento programado

Para unirte a un evento solicitado por un cliente o a un evento que hayas creado previamente sigue los pasos a continuación:

1.	Accede al Admin VTEX usando el email asociado a tu cuenta de Personal Shopper.
2.	Ve a **Apps > Personal Shopper > Videollamadas**.
3.	Busca al cliente deseado en la sección **Clientes esperando a que ingreses**.
4.	Haz clic en `Ingresar` para unirte a la llamada con el cliente.
5.	Haz clic en `Iniciar videollamada`.

Para conocer detalles más técnicos sobre la videollamada una vez iniciada, consulta la sección [Realización de la videollamada](/es/docs/tutorials/personal-shopper-vision-general#realizacion-de-la-videollamada).

Asegúrate de conceder al navegador los permisos necesarios para el acceso al micrófono y a la cámara y así evitar problemas durante la videollamada.

### Realización de la videollamada

Al participar en una videollamada como personal shopper tendrás acceso a varias herramientas, según se presentan a continuación:

![call-personalshopper](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/personal-shopper/personal-shopper-vision-general_4.png)

* **I - Micrófono:** permite a los participantes controlar su audio silenciándose o reactivando el sonido.
* **II - Cámara:** permite a los participantes encender o apagar su cámara durante la videollamada.
* **III - Más opciones:** muestra opciones adicionales en el siguiente orden:
  * **Cambiar cámara:** permite a los participantes alternar entre la cámara frontal o trasera de su dispositivo.
  * **Compartir pantalla:** permite a los participantes compartir toda su pantalla o aplicaciones específicas con otros en la videollamada.
  * 	**Link de la videollamada:** copia el link compartible para que otras personas se unan a la videollamada en curso.
* **IV - Finalizar videollamada:** permite que los participantes finalicen la sesión.
* **VI - Ver participantes:** permite a los participantes ver una lista de los asistentes presentes en la videollamada.
* **VII - Chat:** Permite a los participantes intercambiar mensajes de texto y archivos durante la videollamada.
* **VIII - Productos:** Muestra un menú lateral que permite a los participantes ver los productos relacionados con la videollamada actual, buscar otros productos de la tienda y compartirlos con otras personas.

### Seguimiento de datos del evento

La página **Analytics** proporciona información y datos relevantes relacionados con el desempeño de tus actividades en Personal Shopper. Para acceder a **Analytics** sigue los pasos a continuación. En el Admin VTEX, ve a **Apps > Personal Shopper > Analytics**. Aquí podrás consultar las siguientes pestañas:

* **General**: presenta una visión general de las métricas y estadísticas de desempeño relacionadas con tus actividades en Personal Shopper.
* **Personal shopper**: permite buscar y ver métricas de desempeño individuales para cada personal shopper. Puedes hacer un seguimiento de métricas como el número de videollamadas, las ventas generadas, las ventas de los productos de la colección y los productos de la colección vendidos por cada personal shopper.
* **Historial de videollamadas**: proporciona un registro detallado de todos los ítems comprados durante las videollamadas. Puedes consultar el historial de videollamadas realizadas y los productos seleccionados durante cada videollamada.

#### General

La sección General presenta una visión general de las métricas y estadísticas de desempeño relacionadas con tus actividades en Personal Shopper. Puedes utilizar los siguientes filtros para refinar tu análisis:

* **Buscar por personal shopper o email**: busca personal shoppers específicos por nombre o dirección de email. Esta funcionalidad permite obtener datos de desempeño individuales rápidamente.
* **Fecha**: selecciona el rango de fechas deseado para obtener los datos de análisis correspondientes. De manera predeterminada, se selecciona el mes en curso.

Dentro de la sección General tendrás acceso a las siguientes métricas:

* **Número de videollamadas**: número total de videollamadas realizadas durante el rango de fechas seleccionado.
* **Ventas**: ingresos totales generados por las ventas durante el rango de fechas seleccionado.
* **Ventas de productos de la colección**: ingresos totales generados por las ventas de los productos de la colección.
* **Total de productos vendidos de la colección**: número total de productos vendidos de la colección.
* **Duración de las videollamadas**: duración total de todas las videollamadas durante el rango de fechas seleccionado (en minutos).
* **NPS promedio**: medida de satisfacción y fidelidad de los clientes. Se calcula con base en el feedback de los clientes e indica el porcentaje de clientes promotores, detractores y neutrales. Puedes hacer clic en `Respuestas` para ver el feedback de los clientes y obtener información detallada sobre la puntuación NPS.

También se proporciona una tabla que contiene información de análisis para cada personal shopper, incluyendo las siguientes métricas:

* **Nombre**: nombre del personal shopper.
* **Videollamadas**: número total de videollamadas realizadas por el personal shopper.
* **Ventas**: ingresos totales de ventas generados por el personal shopper.
* **Ventas de la colección**: total de ingresos generados exclusivamente por productos de la colección por el personal shopper.
* **Carritos**: número de carritos creados por el personal shopper.
* **Productos de la colección vendidos**: número total de productos vendidos de la colección por el personal shopper.
* **Móvil**: porcentaje de ventas del personal shopper   realizadas en dispositivos móviles.
* **Escritorio**: porcentaje de ventas del personal shopper   realizadas en dispositivos de escritorio.
* **NPS promedio**: promedio de Net Promoter Score del personal shopper.

También puedes descargar el análisis haciendo clic en el botón `Descargar`.

#### Personal shopper

En la sección **Personal shopper**, puedes monitorear los datos de un personal shopper específico. Utiliza los siguientes filtros para refinar tu análisis:

* **Buscar por personal shopper o email**: busca personal shoppers específicos por nombre o dirección de email.
* **Fecha**: selecciona el rango de fechas deseado para obtener los datos de análisis correspondientes. De manera predeterminada, se selecciona el mes en curso.
* **Status**: filtra los datos por el status del evento. Puedes elegir entre eventos con status `Cancelado`, `Finalizado` y `Archivado`.

La tabla de la sección **Personal shopper** muestra las métricas filtradas para el personal shopper seleccionado, incluyendo:

* **Fecha de creación**: fecha en la que se creó el evento.
* **Producto**: producto vendido durante el evento.
* **Status**: status del evento, ya sea Cancelado, Finalizado o Archivado.
* **Nombre del cliente**: nombre del cliente asociado a la venta.
* **Carritos**: número de carritos creados durante el evento.
* **Productos de la colección vendidos**: número total de productos de la colección vendidos durante el evento.
* **Ventas**: ingresos totales de ventas generados por el evento del personal shopper.
* **Ventas de la colección**: ingresos totales generados exclusivamente por los productos de la colección.
* **Duración de la videollamada**: duración del evento.
* **Grabación**: link a la grabación del evento. Cuando la grabación esté disponible, podrás hacer clic en el ícono correspondiente para acceder a ella.
* **NPS**: NPS del evento. Si se aplica, puedes hacer clic en el ícono del globo para ver las respuestas detalladas de los clientes.
* **Tipo de dispositivo**: tipo de dispositivo utilizado durante el evento, que puede ser móvil o escritorio.

También tienes la opción de descargar los datos del historial de videollamadas para su posterior análisis y acceso sin conexión haciendo clic en `Descargar`.

#### Historial de videollamadas

La sección Historial de videollamadas te permite ver y gestionar el historial de videollamadas realizadas con la aplicación Personal Shopper. Puedes utilizar los siguientes filtros para refinar tu análisis:

* **Búsqueda por producto, cliente, personal shopper, etc.**: Búsqueda de videollamadas específicas a partir de un producto, cliente, personal shopper u otros criterios relevantes.
* **Fecha**: selecciona el rango de fechas deseado para obtener los datos de análisis correspondientes. De manera predeterminada, se selecciona el mes en curso.

La tabla de la página Historial de videollamadas presenta una visión general de los registros de videollamadas, mostrando la siguiente información:

* **Producto**: miniatura de la imagen del producto asociado a la videollamada.
* **ID**: ID del producto asociado a la videollamada.
* **Nombre del producto**: nombre del producto asociado a la videollamada.
* **Nombre del cliente**: nombre del cliente que participó en la videollamada.
* **Email del cliente**: email del cliente que participó en la videollamada.
* **Teléfono**: número de teléfono del cliente que participó   en la videollamada.
* **Fecha de creación**: fecha y hora en que se produjo la videollamada.
* **Personal shopper**: personal shopper que realizó la videollamada.
* **Status**: status de la videollamada, que indica si fue cancelada, finalizada o archivada.
* **Chat**: si aplica, link para descargar el historial de chat asociado a la videollamada.
* **Grabación**: link a la grabación de la videollamada, cuando esté disponible.
* **NPS**: NPS asociado a la llamada, que representa la satisfacción y fidelidad del cliente.

También tienes la opción de descargar los datos del historial de videollamadas para su posterior análisis y acceso sin conexión haciendo clic en `Descargar`.

### Gestionar el uso de tu plan

Para realizar un seguimiento del uso de tu plan en la aplicación Personal Shopper, ve a **Apps > Personal Shopper > Configuración**. En la pestaña `Gestión de Personal Shopper` encontrarás la sección **Plan**, donde podrás ver los detalles de uso de tu plan. Esta sección proporciona información sobre tu suscripción y uso, ayudándote a monitorear y administrar tu plan de forma eficaz.
