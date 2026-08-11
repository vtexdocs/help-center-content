---
title: 'Información general de VTEX CX Platform'
createdAt: 2026-03-31T15:33:34.931Z
updatedAt: 2026-07-30T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugES: informacion-general-vtex-cx-platform
locale: es
---

> ℹ️ Para conocer VTEX CX Platform e implementarlo en tu negocio, [agenda una demostración](https://www.vtex.com/en-us/products/cx_platform/).

**VTEX CX Platform** es la solución de commerce conversacional que te permite crear agentes de inteligencia artificial (IA) autónomos para actuar en todo el recorrido del cliente, desde el primer contacto hasta la posventa. Estos agentes ejecutan acciones directamente en tu operación, como consultar el estado de un pedido, aplicar promociones, finalizar la compra y recuperar carritos abandonados.

La plataforma se conecta de forma nativa a tu operación de commerce, como pedidos, catálogo, checkout y promociones. Esto da a los agentes acceso a datos en tiempo real y les permite resolver las solicitudes de los clientes de principio a fin en una sola conversación, en canales como WhatsApp, webchat, voz, email y redes sociales.

## Funcionalidades

Conoce algunas de las funcionalidades de **VTEX CX Platform**:

- **Agentes autónomos** planifican y ejecutan tareas complejas sin depender de flujos fijos y predefinidos.
- **Concierge de productos** recomienda ítems con base en el catálogo, el stock y las promociones en tiempo real.
- **Seguimiento de pedidos** informa el estado en tiempo real mediante el acceso nativo al OMS.
- **Cambios, devoluciones y cancelaciones** se resuelven de principio a fin sin intervención humana.
- **Recuperación de carritos abandonados** vuelve a involucrar al cliente con el contexto del producto y checkout directo en la conversación.
- **Pago en el chat** finaliza la compra sin salir de la conversación, con Pix, crédito o débito.
- **Campañas conversacionales** promueven la reactivación, reposición de stock y upsell mediante mensajes con templates aprobados.
- **Analytics** ofrece datos y métricas sobre las interacciones y los resultados de la operación.

Este tutorial te ayuda a navegar por la plataforma y está dividido en las siguientes secciones:

- [Registrarse e iniciar sesión](#registrarse-e-iniciar-sesión)
- [Crear organización y proyecto](#crear-organización-y-proyecto)
- [Acceder al perfil](#acceder-al-perfil)
- [Sistema de permisos](#sistema-de-permisos)
- [Cambiar el idioma de la plataforma](#cambiar-el-idioma-de-la-plataforma)

## Registrarse e iniciar sesión

Al acceder a la plataforma, puedes crear un registro gratuito o iniciar sesión en una cuenta existente.

Para crear un registro gratuito, sigue los pasos a continuación:

1. Accede a [VTEX CX Platform](https://accounts.weni.ai/auth/realms/weni/login-actions/registration?client_id=weni-webapp&tab_id=GrzDdSDmT-8&client_data=eyJydSI6Imh0dHBzOi8vZGFzaC53ZW5pLmFpL3Byb2plY3RzLzZjZjZiODIzLTFkYjktNDg5Ny04NTFmLWM2OTZlOTkxMjA2NS9zZXR0aW5ncy9wcm9qZWN0L3IvaW5pdCIsInJ0IjoiY29kZSIsInJtIjoiZnJhZ21lbnQiLCJzdCI6IjcwOGI1OTA4LTcwMTktNDcxMi05YTQ5LWY3OGRhMTM5MGM2OCJ9).
2. Ingresa tu email y la contraseña deseada.
3. Haz clic en `Crear una cuenta`.

También puedes registrarte con los siguientes proveedores: **GitHub**, **Google** y **Microsoft**.

Si completaste el registro o recibiste una invitación para una organización pero aún no tienes registro en la plataforma, completa los campos que se muestran en la pantalla y haz clic en `Continuar`.

Para iniciar sesión en una cuenta existente, sigue los pasos a continuación:

1. Accede a [VTEX CX Platform](https://accounts.weni.ai/auth/realms/weni/protocol/openid-connect/auth?client_id=weni-webapp&redirect_uri=https%3A%2F%2Fdash.weni.ai%2Fprojects%2F6cf6b823-1db9-4897-851f-c696e9912065%2Fsettings%2Fproject%2Fr%2Finit&state=708b5908-7019-4712-9a49-f78da1390c68&response_mode=fragment&response_type=code&scope=email%20profile%20openid%20offline_access&code_challenge=FEKSvKUaU81i_zufbxFiZg40t-efyp6Krh2xutDxkSY&code_challenge_method=S256).
2. Ingresa tu email y tu contraseña.
3. Haz clic en `Iniciar sesión`.

Si tu registro se hizo con **GitHub**, **Google** o **Microsoft**, selecciona una de esas opciones para iniciar sesión.

### Completar los datos de organización y proyecto

> ℹ️ Si tu organización ya existe y fuiste invitado a ella, completa los campos con nombres ficticios solo para registrarte en la plataforma. No es necesario usar los nombres reales de la empresa.

Después de completar los campos, haz clic en `Continuar`.

A continuación, elige entre crear un agente personalizado o usar un template.

Para crear un agente personalizado, completa los campos a continuación:

1. **Nombre del agente**: nombre del agente, como "Atención".
2. **Objetivo**: objetivo del agente, como "Resolver dudas de los clientes".

> ℹ️ Define claramente el objetivo principal de tu agente al interactuar con los clientes, por ejemplo: "Ayudar a los clientes a encontrar productos adecuados a sus necesidades" o "Proporcionar soporte técnico". Esto orienta las conversaciones de forma directa y asertiva.

3. **Contenido**: contenido de base del agente. Completar el contenido es opcional en la etapa de registro y puede agregarse después.

> ℹ️ Al incluir una base de contenido, capacitas a tu agente inteligente para responder a los usuarios con más eficacia. Puedes importar información esencial arrastrando y soltando archivos, con el texto integrado automáticamente, insertando contenidos de sitios web o escribiendo lo que desees en la base.

Los templates son flujos listos con finalidades específicas, divididos en tres categorías: soporte, integraciones y ventas. Al hacer clic en una de las tarjetas de una categoría, se muestra un pop-up que detalla el uso del template.

> ℹ️ Si optas por un template, haz clic en la pestaña correspondiente y elige uno de los templates disponibles.

Haz clic en `Finalizar` para seguir adelante.

## Crear organización y proyecto

Para crear una nueva organización, sigue los pasos a continuación:

1. En la página inicial de VTEX CX Platform, haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Crear organización`.
2. Ingresa un nombre para tu organización, la descripción de la organización y el nombre del proyecto.
3. Haz clic en `Continuar`.
4. En la etapa de configuración del proyecto, puedes elegir entre **Crear un agente personalizado** o **Usar template**.

Para crear un agente personalizado, sigue los pasos a continuación:

1. Completa el nombre del agente y el objetivo de ese agente.
2. A continuación, haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Agregar contenido`.
  - En este campo, puedes agregar información que el agente usará en tu proyecto, como archivos de catálogo o el sitio web de tu tienda. Después, haz clic en `Finalizar`.
  - Esta etapa es opcional en el momento de creación de una organización y el contenido puede agregarse después.
3. Haz clic en `Finalizar`.

Los templates son flujos listos con finalidades específicas, divididos en tres categorías: **Soporte**, **Integraciones** y **Ventas**.

Para usar un template, sigue los pasos a continuación:

1. Selecciona uno de los templates, como _Soporte_ o _Captura de Leads_, para ver más información.
2. Haz clic en `Usar template` para activar el template.
3. Completa la descripción del proyecto.
4. Haz clic en `Finalizar`.

Después de crear un agente personalizado o elegir un template, se completa la última etapa. Para entrar en tu proyecto, haz clic en `Comenzar`.

> ℹ️ Después de crear la organización y el proyecto, incluye a tu equipo configurando los permisos. Las personas agregadas a la organización tendrán acceso a todos los proyectos creados dentro de ella. Para saber más, consulta la sección [Sistema de permisos](#sistema-de-permisos).

Para saber cómo agregar o gestionar miembros de la organización o del proyecto, accede al artículo [Gestionar miembros de VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/gestionar-miembros-de-vtex-cx-platform).

## Cambiar el idioma de la plataforma

Para cambiar el idioma, sigue los pasos a continuación:

1. Haz clic en tu nombre de usuario.
2. Haz clic en `Idioma`.
3. Elige uno de los idiomas.
  - Actualmente, la plataforma ofrece cuatro opciones de idioma: **English**, **Español**, **Português (Brasil)** y **Română**.

> ℹ️ Si la plataforma no cambia el idioma, puedes cerrar sesión y volver a iniciarla o reiniciar el navegador.

## Acceder al perfil

La sección **Perfil** te permite gestionar tu cuenta y editar preferencias personales, de seguridad y notificaciones.

En la pestaña **Perfil**, puedes cambiar tu nombre, apellido, foto de perfil, número de contacto y contraseña.

En **Preferencias**, seleccionas qué emails deseas recibir de VTEX CX Platform.

En **Privacidad y seguridad**, puedes activar la autenticación de dos factores siguiendo los pasos a continuación:

1. Haz clic en tu nombre de usuario.
2. Haz clic en `Perfil`.
3. Selecciona la sección **Privacidad y seguridad**.
4. Activa el botón `Habilitar autenticación`.
5. Haz clic en `Guardar cambios`.

Después de guardar, se cierra tu sesión en la plataforma automáticamente.

Al iniciar sesión nuevamente, sigue los pasos a continuación:

1. Abre la aplicación de autenticación de tu elección y escanea el código QR que se muestra en la pantalla.
2. En la plataforma, ingresa el código de uso único que aparece en la aplicación.
3. Haz clic en `Guardar` para completar la configuración.

> ℹ️ A partir de entonces, el inicio de sesión requerirá el código de verificación que se muestra en tu aplicación de autenticación.

### Solicitud de autenticación en la organización

Para agregar una capa extra de seguridad a los proyectos y datos de tu organización, puedes permitir que solo usuarios con la autenticación de dos factores habilitada ingresen a la organización.

Para solicitar la autenticación de dos factores en la organización, sigue los pasos a continuación:

1. Haz clic en el ícono <i class="fas fa-ellipsis-v" aria-hidden="true"></i> en la tarjeta de la organización.
2. Haz clic en `Configuración`.
3. Selecciona la pestaña **Seguridad**.
4. En **Autenticación de dos factores**, haz clic en el botón de alternancia de **Activar autenticación**.
5. Por último, haz clic en `Guardar cambios`.

## Sistema de permisos

En VTEX CX Platform, puedes gestionar diferentes permisos para cada usuario, divididos en dos grupos:

- [Permisos de la organización](#permisos-de-la-organización)
- [Permisos del proyecto](#permisos-del-proyecto)

### Permisos de la organización

Estos permisos pueden agregarse en la etapa de creación de la organización o en cualquier momento mediante el ícono de configuración de la organización.

Los permisos de la organización se describen a continuación:

- **Admin:** tiene acceso completo a la plataforma y puede agregar nuevos miembros o cambiar los permisos de los miembros existentes.
- **Financiero:** accede solo al área de facturación.
- **Contributor:** puede crear nuevos proyectos y editar contenido.
- **Marketing:** accede solo al módulo de **Contactos** y puede enviar templates de mensajes.

> ⚠️ Los permisos de la organización se aplican a todos los proyectos dentro de ella.

### Permisos del proyecto

También es posible agregar permisos a un proyecto específico, y no necesariamente a toda la organización. Para acceder a las opciones, haz clic en `Gestionar miembros` en el proyecto deseado.

Los permisos del proyecto son los siguientes:

- **Moderador:** tiene acceso completo de administrador de un proyecto. Puede realizar cualquier cambio o configuración del proyecto.
- **Contributor:** puede editar contenido (por ejemplo, flujos, instrucciones, templates de mensajes).
- **Viewer:** solo lee información, como flujos, contactos, mensajes, pero no puede editarla.
- **Marketing:** tiene acceso a los módulos **Campañas** y **Contactos** para configurar y gestionar envíos de campañas con templates.
- **Human support:** permiso exclusivo del agente humano. Solo tiene acceso al módulo **Live Desk**.

> ⚠️ Los permisos de un proyecto se aplican específicamente al proyecto y pueden ser diferentes de los permisos de organización. Por ejemplo, si un usuario tiene permiso de Admin en la organización y de Viewer en un proyecto, puede realizar modificaciones en toda la organización, excepto en el proyecto en el que fue designado como Viewer. En ese proyecto, no puede editar la información, solo visualizarla.
