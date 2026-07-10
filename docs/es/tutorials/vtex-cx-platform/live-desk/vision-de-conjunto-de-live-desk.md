---
title: "Visión de conjunto de Live Desk"
createdAt: 2025-09-12T16:29:16.322Z
updatedAt: 2026-07-10T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: live-desk-overview
locale: es
---

Live Desk es el módulo oficial de soporte humano de VTEX CX Platform, nativo en todos los proyectos de la plataforma. Con él, los representantes realizan el soporte a los clientes en tiempo real y en un solo lugar: reciben los contactos distribuidos por departamento y cola, responden a través de diferentes canales y acompañan el historial de cada conversación.

En este artículo, conocerás los principales conceptos y funciones del módulo:

- [Permisos de usuario](#permisos-de-usuario)
- [Funcionalidades](#funcionalidades)
- [Historial y dashboard](#historial-y-dashboard)
- [Configuración y recursos relacionados](#configuración-y-recursos-relacionados)

## Permisos de usuario

Los permisos de usuario representan atribuciones referentes a cada usuario en el proyecto. En Live Desk, indican los siguientes roles:

- **Representante:** utiliza el módulo Live Desk para realizar el soporte. Tiene permiso mínimo en el sistema y visualiza solamente el módulo Live Desk y el dashboard con sus métricas individuales. El soporte dirigido al representante se define por el departamento y la cola en la que está incluido.
- **Gerente de soporte:** gestiona los departamentos de soporte de Live Desk. Tiene permiso para visualizar la configuración relacionada con el departamento que gestiona, visualizar los contactos que están en las colas y realizar el soporte. En el dashboard, visualiza las métricas del departamento en el que es gerente.
- **Administrador:** posee todos los niveles de permiso, crea departamentos y delega gerentes de soporte para los departamentos. En el dashboard, tiene una vista general de toda la operación.

Para saber cómo asignar estos roles, consulta el artículo [Gestionar miembros de VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/administrar-miembros-de-la-plataforma-vtex-cx).

## Funcionalidades

### Visualizar información del contacto

Al hacer clic en la foto o en el nombre del contacto en cualquier área de la conversación, accedes al panel de información del contacto, que presenta la foto ampliada, datos como el canal a través del cual el contacto está conversando, el horario del último mensaje, la función de transferir chat y la galería de medios del contacto.

### Crear y enviar mensajes rápidos

Los mensajes rápidos permiten registrar plantillas de mensajes para uso ágil durante el soporte. Al hacer clic en el botón de mensajes rápidos, accedes al panel de la función, donde puedes visualizar, gestionar y registrar mensajes. Al seleccionar el mensaje deseado, el texto registrado llena el campo del editor de texto.

Puedes utilizar los mensajes rápidos de dos maneras:

- Abre el panel haciendo clic en el botón de mensajes rápidos y, a continuación, haz clic en el mensaje deseado.
- Al registrar el mensaje, define una palabra clave como atajo. Para utilizarla, solo tienes que escribir `/` seguido del atajo.

Puedes navegar por los mensajes con las flechas del teclado y presionar `Enter` para usar el mensaje. Al escribir el texto del atajo, la herramienta también realiza la búsqueda específica.

También es posible configurar mensajes rápidos específicos por departamento. Esta configuración se realiza durante la creación del departamento. Para más información, accede a [Configure Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk).

### Transferir chat

La función de transferir chat dirige el contacto a un departamento, cola o representante específico y se puede acceder en el panel de información del contacto. La transferencia puede ser accionada por el agente de IA, cuando esta opción está activada en la configuración, o manualmente por un gerente o administrador. En la transferencia manual, es posible buscar por nombre de un representante, cola o departamento, o seleccionar un destinatario en la lista exhibida. Al confirmar la transferencia, el contacto es encaminado al destinatario elegido.

Para saber cómo se distribuye el soporte entre los representantes, consulta [Distribución y enrutamiento de las atenciones](https://help.vtex.com/es/docs/tutorials/distribucion-y-enrutamiento-de-las-atenciones).

### Grabar y enviar audio

A través de los botones del cuadro de texto, puedes grabar y enviar un audio. Antes del envío, puedes reproducir el audio y después enviarlo al contacto.

### Adjuntar archivos

Para adjuntar archivos, arrástralos hasta el cuadro de texto. También puedes usar el atajo `Ctrl + V` para pegar imágenes directamente, sin adjuntarlas manualmente.

### Enviar emojis

Live Desk ofrece un panel completo de emojis, que ayudan a transmitir el tono y la intención de los mensajes durante el soporte.

### Insertar salto de texto

Para auxiliar en la organización visual del mensaje, puedes insertar saltos de línea presionando `Shift + Enter`.

### Configurar firma activa

La firma activa agrega el nombre del representante que está respondiendo a cada mensaje intercambiado. Para activarla, sigue estos pasos:

1. Accede a la organización y al proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Configuración**.
3. Haz clic en **Live Desk**.
4. En la pestaña **Sectores**, haz clic en el menú de acciones <i class="fas fa-ellipsis-v" aria-hidden="true"></i> del departamento deseado y en `Editar`.
5. En la pestaña **Opciones adicionales**, activa la opción **Usar firma**.
6. Haz clic en `Guardar cambios`.

> ℹ️ Después de la activación, el nombre del representante aparecerá en el globo de mensaje seguido de dos puntos.

### Editar campos de contacto

La edición de campos de contacto permite que corrijas datos incorrectos o actualices información del cliente durante el soporte. Para habilitar esta función, sigue estos pasos:

1. Accede a la organización y al proyecto que deseas modificar en [VTEX CX Platform](https://dash.weni.ai/orgs).
2. En el menú lateral, haz clic en **Configuración**.
3. Haz clic en **Live Desk**.
4. En la pestaña **Sectores**, haz clic en el menú de acciones <i class="fas fa-ellipsis-v" aria-hidden="true"></i> del departamento deseado y en `Editar`.
5. En la pestaña **Opciones adicionales**, activa la opción **Permitir que los representantes editen la información personalizada del contacto**.
6. Haz clic en `Guardar cambios`.

> ℹ️ Para editar un campo, abre el panel de información haciendo clic en el nombre del contacto y, a continuación, haz clic en el campo deseado para insertar el nuevo valor.

### Recibir notificación vía navegador

Live Desk ofrece notificaciones vía navegador como alternativa a la alerta sonora. Para recibirlas, permite las notificaciones del sitio en la configuración de tu navegador.

## Historial y dashboard

### Dashboard y métricas

El seguimiento del soporte humano se realiza en el dashboard del módulo **Analytics**, dividido en dos pestañas:

- **Monitorización:** datos en tiempo real del soporte en curso, como status, tiempos promedio, volumen por cola y tag, y CSAT.
- **Analytics:** datos históricos del soporte finalizado en el periodo seleccionado.

Puedes filtrar los datos por departamento, cola, representante, tag y periodo, además de exportarlos con el botón `Exportar datos`.

Para la descripción completa de cada métrica y sección, consulta el artículo [Analytics: Métricas de atención](https://help.vtex.com/es/docs/tutorials/analytics-metricas-de-atencion). Para crear visualizaciones personalizadas, consulta el artículo [Analytics: Crear dashboard personalizado](https://help.vtex.com/es/docs/tutorials/crear-dashboard-personalizado).

### Visualización del historial

La lista de Live Desk queda en orden cronológico, del soporte más reciente al más antiguo. En este listado, puedes ver la foto del contacto, el nombre, el representante que realizó el soporte, los tags usados en la clasificación, la fecha y un botón para abrir el chat.

Al visualizar el historial del contacto, puedes ver el inicio del soporte, el historial con el bot, los acontecimientos del chat y los tags usados para clasificarlo.

### Modo de visualización

Al hacer clic en el nombre del representante en el dashboard, se abre el **modo de visualización del soporte del representante**. Así, es posible tener una vista general de los detalles del soporte por representante, y un gerente puede asumir un chat en cualquier momento, transfiriendo el soporte hacia sí mismo.

## Configuración y recursos relacionados

Para configurar y utilizar Live Desk en tu operación, consulta los artículos relacionados:

- [Configure Live Desk](https://help.vtex.com/es/docs/tutorials/configurar-el-live-desk): crea y gestiona departamentos, colas y representantes, y define las reglas de soporte.
- [Distribución y enrutamiento de las atenciones](https://help.vtex.com/es/docs/tutorials/distribucion-y-enrutamiento-de-las-atenciones): entiende cómo se distribuye el soporte entre los representantes.
- [Utilizar el disparo activo de flujos](https://help.vtex.com/es/docs/tutorials/utilizando-el-disparo-activo-de-flujos): inicia conversaciones activamente con contactos a través de Live Desk.
- [Usando grupos para controlar la atención humana](https://help.vtex.com/es/docs/tutorials/usando-grupos-para-controlar-la-atencion-humana): evita que el chatbot interrumpa el soporte en curso.