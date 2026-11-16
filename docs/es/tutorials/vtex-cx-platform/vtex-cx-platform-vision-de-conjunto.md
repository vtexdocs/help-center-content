---
title: 'VTEX CX Platform'
createdAt: 2026-03-31T15:33:34.931Z
updatedAt: 2026-11-12T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-cx-platform-overview
locale: es
seeAlso:
  - /es/docs/tutorials/asignar-y-probar-agentes
  - /es/docs/tutorials/administrar-miembros-de-la-plataforma-vtex-cx
  - /es/docs/tutorials/conceptos-basicos-sobre-integraciones
  - /es/docs/tutorials/configurar-el-live-desk
---

**VTEX CX Platform** es la solución de comercio conversacional que permite crear agentes de inteligencia artificial (IA) autónomos para actuar en toda la jornada del cliente, desde el primer contacto hasta la posventa. Los agentes ejecutan acciones directamente en tu operación, como consultar el status de un pedido, aplicar promociones, finalizar la compra y recuperar carritos abandonados.

La plataforma se conecta nativamente a tu operación de comercio, como pedidos, catálogo, checkout y promociones. Esto les da a los agentes acceso a datos en tiempo real y les permite resolver las solicitudes de los clientes de principio a fin en una sola conversación, en canales como WhatsApp, Shopping Assistant, voz, email y redes sociales.

> ℹ️ Para evaluar VTEX CX Platform para tu empresa, [programa una demostración](https://www.vtex.com/en-us/products/cx_platform/). Si tu tienda está en un periodo de prueba y es elegible para un plan estándar, consulta [Suscribirse a un plan de VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/suscribirse-a-un-plan-de-vtex-cx-platform).

## Principales casos de uso

Puedes usar VTEX CX Platform para:

- Ayudar a los clientes a encontrar productos según sus necesidades y la información actual del catálogo.
- Responder preguntas sobre pedidos y proporcionar actualizaciones de seguimiento.
- Automatizar cambios, devoluciones y cancelaciones elegibles.
- Recuperar carritos abandonados y dirigir a los clientes de vuelta al checkout.
- Aceptar métodos de pago compatibles dentro de una conversación.
- Enviar campañas conversacionales de reactivación, reposición y upselling.
- Transferir una conversación a un representante cuando sea necesario el soporte humano.
- Monitorear conversaciones, el rendimiento del soporte y los resultados operativos.

Las funcionalidades disponibles dependen del plan, las integraciones, los canales y la configuración del proyecto.

## Cómo se organiza la plataforma

El acceso y los recursos se organizan en dos niveles:

- **Organización:** Agrupa los proyectos y miembros de la empresa. Los roles de la organización definen el acceso en toda la organización.
- **Proyecto:** Contiene los agentes, el conocimiento, los canales, los contactos, las conversaciones y la configuración de una operación o caso de uso específico. Los roles del proyecto definen lo que cada miembro puede hacer en él.

Después de abrir un proyecto, usa el menú principal para acceder a los siguientes módulos:

- **Agent Builder:** Configura y prueba agentes de IA, agrega fuentes de conocimiento, define instrucciones y crea flujos de automatización. Consulta [Agent Builder](https://help.vtex.com/es/docs/tutorials/informacion-general-de-agent-builder).
- **Contactos:** Gestiona contactos, mensajes, campañas y disparadores de conversaciones.
- **Live Desk:** Atiende conversaciones que requieren soporte humano y consulta el historial de soporte. Consulta [Live Desk](https://help.vtex.com/es/docs/tutorials/informacion-general-de-live-desk).
- **Analytics:** Monitorea el soporte activo y analiza métricas de conversaciones, entrega de mensajes, equipo y operación. Consulta [Analytics: Métricas de atención](https://help.vtex.com/es/docs/tutorials/analytics-metricas-de-atencion).
- **Auditoría:** Revisa las conversaciones atendidas por agentes de IA, investiga resultados e identifica oportunidades de mejora. Consulta [Auditoría](https://help.vtex.com/es/docs/tutorials/auditoria-overview).
- **Integraciones:** Conecta canales de comunicación y aplicaciones externas al proyecto.
- **Configuración:** Gestiona las preferencias, credenciales, miembros y opciones de seguridad del proyecto. Consulta [Configuración de CX Platform: Workspace](https://help.vtex.com/es/docs/tutorials/configuracion-de-cx-platform-espacio-de-trabajo).

## Primeros pasos

### Crear o acceder a tu cuenta

Accede al [panel de VTEX CX Platform](https://dash.weni.ai/). Puedes crear una cuenta con email y contraseña o continuar con GitHub, Google o Microsoft. Usa el mismo método cuando vuelvas a iniciar sesión.

Si recibiste una invitación, crea o accede a la cuenta asociada con el email invitado. Después de iniciar sesión, selecciona la organización y el proyecto incluidos en la invitación.

### Crear una organización y un proyecto

Si estás configurando una nueva operación, sigue estos pasos:

1. En la página de inicio de VTEX CX Platform, haz clic en <i class="fas fa-plus" aria-hidden="true"></i> `Crear organización`.
2. Ingresa el nombre y la descripción de la organización y el nombre del proyecto.
3. Haz clic en `Siguiente`.
4. Elige cómo iniciar el proyecto:
    - **Crear un agente personalizado:** Ingresa el nombre y el objetivo del agente. También puedes agregar archivos, contenido de sitios web o textos que el agente usará como fuente de conocimiento.
    - **Usar plantilla:** Selecciona una plantilla para un caso de uso de soporte, integración o ventas, revisa sus detalles y haz clic en `Usar plantilla`.
5. Completa la información solicitada del proyecto y haz clic en `Finalizar`.
6. Haz clic en `Comenzar` para abrir el proyecto.

Agregar contenido durante la configuración es opcional. Puedes actualizar el conocimiento del agente después en **Agent Builder > Base de conocimiento**.

> ℹ️ Define un objetivo específico para el agente, como "Ayudar a los clientes a encontrar productos que satisfagan sus necesidades" o "Responder preguntas sobre pedidos". Un objetivo claro ayuda a determinar el comportamiento esperado del agente y el contenido que necesita.

Después de crear el proyecto, invita a tu equipo y asigna solo los permisos necesarios. Para ver las instrucciones, consulta [Administrar miembros de VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/administrar-miembros-de-la-plataforma-vtex-cx).

## Roles y permisos

Los permisos pueden aplicarse a toda la organización o a un proyecto específico.

### Roles de la organización

- **Admin:** Gestiona la organización, sus miembros y sus permisos.
- **Financiero:** Accede a la información de facturación.
- **Contribuidor:** Crea proyectos y edita contenido.
- **Marketing:** Accede a los contactos y envía plantillas de mensajes.

> ⚠️ Los roles de la organización se aplican a todos sus proyectos.

### Roles del proyecto

- **Moderador:** Tiene acceso administrativo completo al proyecto.
- **Contribuidor:** Edita recursos como flujos, instrucciones y plantillas de mensajes.
- **Visualizador:** Consulta la información del proyecto sin editarla.
- **Marketing:** Gestiona contactos, campañas y disparadores de campañas.
- **Soporte humano:** Accede a Live Desk para atender conversaciones con clientes.

Los roles del proyecto se aplican solo al proyecto donde fueron asignados. Para agregar miembros o cambiar sus roles, abre el menú de acciones de la organización o del proyecto y haz clic en `Gestionar miembros`.

## Preferencias personales y seguridad de la cuenta

Haz clic en tu nombre de usuario y selecciona `Perfil` para gestionar tu información personal, contraseña, preferencias de email y configuración de seguridad.

### Cambiar el idioma de la interfaz

1. Haz clic en tu nombre de usuario.
2. Haz clic en `Idioma`.
3. Selecciona **English**, **Español**, **Português (Brasil)** o **Română**.

Si el idioma de la interfaz no se actualiza, cierra sesión y vuelve a iniciarla.

### Activar la autenticación de dos factores

La autenticación de dos factores agrega un código de verificación al proceso de inicio de sesión:

1. Haz clic en tu nombre de usuario y selecciona `Perfil`.
2. Abre **Privacidad y seguridad**.
3. Activa `Activar autenticación`.
4. Haz clic en `Guardar cambios`.
5. Inicia sesión nuevamente y escanea el código QR mostrado con una aplicación autenticadora.
6. Ingresa el código de uso único generado por la aplicación y haz clic en `Guardar`.

Después de la configuración, debes ingresar un código de la aplicación autenticadora cada vez que inicies sesión.

Los administradores de la organización pueden exigir la autenticación de dos factores a todos los miembros:

1. En la tarjeta de la organización, haz clic en el ícono de menú <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
2. Haz clic en `Configuración` y abre la pestaña **Seguridad**.
3. En **Autenticación de dos factores**, activa `Activar autenticación`.
4. Haz clic en `Guardar cambios`.
