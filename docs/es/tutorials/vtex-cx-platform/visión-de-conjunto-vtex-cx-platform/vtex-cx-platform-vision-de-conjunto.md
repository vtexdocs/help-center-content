---
title: 'Información general de VTEX CX Platform'
createdAt: 2026-03-31T15:33:34.931Z
updatedAt: 2026-08-11T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-cx-platform-overview
locale: es
---

> ℹ️ Para conocer VTEX CX Platform e implementarlo en tu negocio, [agenda una demostración](https://www.vtex.com/en-us/products/cx_platform/).

**VTEX CX Platform** es la solución de comercio conversacional que permite crear agentes de inteligencia artificial (IA) autónomos para actuar en toda la jornada del cliente, desde el primer contacto hasta la posventa. Los agentes ejecutan acciones directamente en tu operación, como consultar el status de un pedido, aplicar promociones, finalizar la compra y recuperar carritos abandonados.

La plataforma se conecta nativamente a tu operación de comercio, como pedidos, catálogo, checkout y promociones. Esto les da a los agentes acceso a datos en tiempo real y les permite resolver las solicitudes de los clientes de principio a fin en una sola conversación, en canales como WhatsApp, Shopping Assistant, voz, email y redes sociales.

## Funcionalidades

Algunas de las funcionalidades de **VTEX CX Platform** son:

- Los **agentes autónomos** planifican y ejecutan tareas complejas, sin depender de flujos fijos y predefinidos.
- El **concierge de productos** recomienda ítems con base en el catálogo, el stock y las promociones en tiempo real.
- El **seguimiento de pedidos** informa el status en tiempo real mediante el acceso nativo al OMS.
- Los **cambios, devoluciones y cancelaciones** se resuelven de principio a fin, sin intervención humana.
- La **recuperación de carritos abandonados** recupera el engagement del cliente con contexto del producto y checkout directo en la conversación.
- El **pago en el chat** finaliza la compra sin salir de la conversación, con Pix, crédito o débito.
- Las **campañas conversacionales** promueven la reactivación, la reposición de stock y el upsell mediante mensajes con plantillas aprobadas.
- El módulo **Analytics** ofrece datos y métricas sobre los chats de soporte y los resultados de la operación.

Este tutorial te ayuda a navegar por la plataforma y está dividido en las siguientes secciones:

- [Registro e inicio de sesión](#registro-e-inicio-de-sesion)
- [Crear organización y proyecto](#crear-organizacion-y-proyecto)
- [Acceder al perfil](#acceder-al-perfil)
- [Sistema de permisos](#sistema-de-permisos)
- [Cambiar el idioma de la plataforma](#cambiar-el-idioma-de-la-plataforma)

## Registro e inicio de sesión

Al acceder a la plataforma puedes crear un registro gratuito o iniciar sesión en una cuenta existente.

Para crear un registro gratuito sigue los pasos a continuación:

1. Accede a [VTEX CX Platform](https://accounts.weni.ai/auth/realms/weni/login-actions/registration?client_id=weni-webapp&tab_id=GrzDdSDmT-8&client_data=eyJydSI6Imh0dHBzOi8vZGFzaC53ZW5pLmFpL3Byb2plY3RzLzZjZjZiODIzLTFkYjktNDg5Ny04NTFmLWM2OTZlOTkxMjA2NS9zZXR0aW5ncy9wcm9qZWN0L3IvaW5pdCIsInJ0IjoiY29kZSIsInJtIjoiZnJhZ21lbnQiLCJzdCI6IjcwOGI1OTA4LTcwMTktNDcxMi05YTQ5LWY3OGRhMTM5MGM2OCJ9).
2. Ingresa tu email y la contraseña deseada.
3. Haz clic en `Crear una cuenta`.

También puedes registrarte con los siguientes proveedores: **GitHub**, **Google** y **Microsoft**.

Si ya completaste el registro o recibiste una invitación para una organización, pero aún no tienes una cuenta en la plataforma completa los campos que se muestran en la pantalla y haz clic en `Siguiente`.

Para iniciar sesión en una cuenta existente sigue los pasos a continuación:

1. Accede a [VTEX CX Platform](https://accounts.weni.ai/auth/realms/weni/protocol/openid-connect/auth?client_id=weni-webapp&redirect_uri=https%3A%2F%2Fdash.weni.ai%2Fprojects%2F6cf6b823-1db9-4897-851f-c696e9912065%2Fsettings%2Fproject%2Fr%2Finit&state=708b5908-7019-4712-9a49-f78da1390c68&response_mode=fragment&response_type=code&scope=email%20profile%20openid%20offline_access&code_challenge=FEKSvKUaU81i_zufbxFiZg40t-efyp6Krh2xutDxkSY&code_challenge_method=S256).
2. Ingresa tu email y contraseña.
3. Haz clic en `Iniciar sesión`.

Si te registraste con **GitHub**, **Google** o **Microsoft** selecciona una de esas opciones para iniciar sesión.

### Llenar los datos de organización y proyecto

> ℹ️ Si tu organización ya existe y recibiste una invitación, llena los campos con nombres ficticios solo para registrarte en la plataforma. No es necesario usar los nombres reales de la empresa.

Después de llenar los campos, haz clic en `Siguiente`.

Luego, elige entre crear un agente personalizado o usar una plantilla.

Para crear un agente personalizado llena los campos a continuación:

1. **Nombre del agente**: nombre del agente, como "Soporte".
2. **Objetivo**: objetivo del agente, como "Resolver dudas de los clientes".

> ℹ️ Define claramente el objetivo principal de tu agente al interactuar con los clientes, por ejemplo: "Ayudar a los clientes a encontrar productos adecuados para sus necesidades" o "Brindar soporte técnico". Esto orienta las conversaciones de forma directa y asertiva.

3. **Contenido**: contenido de base del agente. Agregar el contenido es opcional en la etapa de registro. Se puede completar después.

> ℹ️ Al incluir una base de contenido, le das a tu agente inteligente la capacidad de responder a los usuarios con mayor eficacia. Puedes importar información esencial arrastrando y soltando archivos (el texto se integra automáticamente), agregando contenido de sitios web o escribiendo lo que quieras en la base.

Las plantillas son flujos listos con fines específicos, divididos en tres categorías: soporte, integraciones y ventas. Al hacer clic en alguna de las tarjetas de una categoría, se muestra una ventana emergente que detalla el uso de la plantilla.

> ℹ️ Si eliges una plantilla, haz clic en la pestaña correspondiente y elige una de las plantillas disponibles.

Haz clic en `Finalizar` para continuar.

## Crear organización y proyecto

Para crear una nueva organización sigue los pasos a continuación:

1. En la página de inicio de VTEX CX Platform haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Crear organización`.
2. Ingresa un nombre para tu organización, la descripción de la organización y el nombre del proyecto.
3. Haz clic en `Siguiente`.
4. En la etapa de configuración del proyecto puedes elegir entre **Crear un agente personalizado** o **Usar plantilla**.

Para crear un agente personalizado sigue las instrucciones a continuación:

1. Completa el nombre del agente y su objetivo.
2. Haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Agregar contenido`.

- En ese campo puedes agregar información que el agente utilizará en tu proyecto, como archivos de catálogo o el sitio web de tu tienda. Después, haz clic en `Finalizar`.
- Este paso es opcional al momento de crear una organización y el contenido se puede agregar después.

3. Haz clic en `Finalizar`.

Las plantillas son flujos listos con finalidades específicas, divididos en tres categorías: **Soporte**, **Integraciones** y **Ventas**.

Para usar una plantilla sigue las instrucciones a continuación:

1. Selecciona una de las plantillas, como _Soporte_ o _Captura de leads_, para ver más información.
2. Haz clic en `Usar plantilla` para activar la plantilla.
3. Completa la descripción del proyecto.
4. Haz clic en `Finalizar`.

Crear un agente personalizado o elegir una plantilla es el último paso. Para entrar a tu proyecto haz clic en `Comenzar`.

> ℹ️ Después de crear la organización y el proyecto, incluye a tu equipo configurando los permisos. Las personas que agregues a la organización tendrán acceso a todos sus proyectos. Para más información, consulta la sección [Sistema de permisos](#sistema-de-permisos).

Para más información sobre cómo agregar o gestionar miembros de la organización o del proyecto, accede al artículo [Gestionar miembros de VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/administrar-miembros-de-la-plataforma-vtex-cx).

## Cambiar el idioma de la plataforma

Para cambiar el idioma sigue los pasos a continuación:

1. Haz clic en tu nombre de usuario.
2. Haz clic en `Idioma`.
3. Elige uno de los idiomas.

- Por el momento, la plataforma ofrece cuatro opciones de idioma: **inglés**, **español**, **portugués (Brasil)** y **rumano**.

> ℹ️ Si la plataforma no cambia el idioma, puedes cerrar sesión y volver a iniciar sesión o reiniciar el navegador.

## Acceder al perfil

La sección **Perfil** permite gestionar tu cuenta y editar preferencias personales, de seguridad y de notificaciones.

En la pestaña **Perfil** puedes cambiar tu nombre, apellido, foto de perfil, número de contacto y contraseña.

En **Preferencias**, puedes seleccionar los emails de VTEX CX Platform que deseas recibir.

En **Privacidad y seguridad** puedes activar la autenticación de dos factores siguiendo los pasos a continuación:

1. Haz clic en tu nombre de usuario.
2. Haz clic en `Perfil`.
3. Selecciona la sección **Privacidad y seguridad**.
4. Habilita el botón `Activar autenticación`.
5. Haz clic en `Guardar cambios`.

Después de guardar, se cierra tu sesión de la plataforma automáticamente.

Al iniciar sesión nuevamente sigue los pasos a continuación:

1. Abre la aplicación autenticadora de tu elección y escanea el código QR que se muestra en la pantalla.
2. Ingresa en la plataforma el código de uso único que aparece en la aplicación.
3. Haz clic en `Guardar` para completar la configuración.

> ℹ️ A partir de ese momento, el inicio de sesión exigirá el código de verificación de tu aplicación autenticadora.

### Exigir autenticación en la organización

Para agregar una capa extra de seguridad a los proyectos y datos de tu organización puedes definir que solo usuarios con la autenticación de dos factores activada entren a la organización.

Para exigir la autenticación de dos factores en la organización sigue los pasos a continuación:

1. Haz clic en el ícono de <i class="fas fa-ellipsis-v" aria-hidden="true"></i> en la tarjeta de la organización.
2. Haz clic en `Configuración`.
3. Selecciona la pestaña **Seguridad**.
4. En **Autenticación de dos factores** haz clic en el botón de alternancia de **Activar autenticación**.
5. Por último, haz clic en `Guardar cambios`.

## Sistema de permisos

En VTEX CX Platform puedes gestionar diferentes permisos para cada usuario, que se dividen en dos grupos:

- [Permisos de la organización](#permisos-de-la-organizacion)
- [Permisos del proyecto](#permisos-del-proyecto)

### Permisos de la organización

Estos permisos se pueden agregar durante la creación de la organización o en cualquier momento desde el ícono de configuración de la organización.

Los permisos de la organización se describen a continuación:

- **Admin:** tiene acceso completo a la plataforma y puede agregar nuevos miembros o cambiar los permisos de los miembros existentes.
- **Financiero:** accede únicamente a la sección de facturación.
- **Contribuidor:** puede crear nuevos proyectos y editar contenido.
- **Marketing:** accede solo al módulo de **Contactos** y puede enviar plantillas de mensajes.

> ⚠️ Los permisos de la organización se aplican a todos los proyectos dentro de ella.

### Permisos del proyecto

También es posible agregar permisos a un proyecto específico, y no necesariamente a toda la organización. Para acceder a las opciones haz clic en `Gestionar miembros` en el proyecto deseado.

Los permisos de proyecto son los siguientes:

- **Moderador:** tiene acceso completo de administrador en un proyecto. Puede realizar cualquier modificación o configuración del proyecto.
- **Contribuidor:** puede editar contenido (por ejemplo, flujos, instrucciones, plantillas de mensajes).
- **Visualizador:** solo puede leer información, como flujos, contactos y mensajes, pero no puede editarla.
- **Marketing:** tiene acceso a los módulos **Campañas** y **Contactos** para configurar y gestionar el envío de campañas con plantillas.
- **Soporte humano:** permiso exclusivo de los representantes humanos. Solo tiene acceso al módulo **Live Desk**.

> ⚠️ Los permisos de un proyecto se aplican específicamente a ese proyecto y pueden ser diferentes de los permisos de la organización. Por ejemplo, si un usuario tiene permiso de administrador en la organización y de visualizador en un proyecto, puede realizar modificaciones en toda la organización, excepto en el proyecto en el que fue designado como visualizador. En ese proyecto, no puede editar la información, solo verla.
