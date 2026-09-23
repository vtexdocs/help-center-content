---
title: 'WhatsApp: Integración con VTEX CX Platform'
createdAt: 2025-09-15T15:02:52.737Z
updatedAt: 2026-09-09T19:40:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: whatsapp-vtex-cx-platform-integration
locale: es
---

La integración de WhatsApp en VTEX CX Platform conecta un número comercial de WhatsApp Business a tu proyecto. Con el canal activo, la tienda envía y recibe mensajes por ese número y gestiona la configuración de la cuenta sin salir de la plataforma.

Después de vincular tu cuenta de Meta y crear el canal, puedes:

- Consultar los identificadores del número y de la cuenta de WhatsApp Business (WABA) y acceder a las plantillas de mensaje.
- Editar el perfil público visible para el cliente en WhatsApp, como imagen, descripción, sector, sitios web, email y dirección.
- Configurar un webhook para que un sistema externo reciba los eventos de mensaje.
- Hacer un seguimiento del volumen de conversaciones por categoría de cobro y solicitar un informe detallado por email.
- Solicitar la verificación de la cuenta con Meta para desbloquear límites mayores de envío e intervalos menores entre mensajes.

En este tutorial, aprenderás a integrar WhatsApp al proyecto, crear y configurar el canal y verificar tu cuenta de WhatsApp Business.

## Integrar WhatsApp al proyecto

Para iniciar la integración de WhatsApp, sigue estos pasos:

1. En el proyecto deseado, accede a **Configuración > Canales**.
2. En **Canales de comunicación**, localiza la tarjeta **WhatsApp** o escribe **WhatsApp** en el campo de búsqueda.
4. Selecciona la tarjeta **WhatsApp**.
5. Haz clic en `+ Agregar`.
6. En el pop-up, haz clic en `Continuar`. La plataforma abre el flujo de conexión con Meta. Sigue los pasos en la pantalla para vincular tu cuenta de Meta con VTEX CX Platform.

## Crear el canal

Con la cuenta vinculada a Meta y el número verificado, integra el canal en la plataforma:

1. Haz clic en `Crear canal`.
2. Selecciona el número que se vinculará a la integración de WhatsApp en VTEX CX Platform.

Este canal está disponible en **Configuración > Canales > Mis aplicaciones > WhatsApp [número de WhatsApp]**.

## Configurar el canal

Al hacer clic en la tarjeta del número, puedes gestionar el contenido del canal de ese número de teléfono de WhatsApp, como cambiar la foto de perfil, ver plantillas, cambiar la descripción, conectar con webhook y verificar tu cuenta.

### General

En la pestaña **General**, consultas los identificadores del número y de la cuenta de WhatsApp Business y accedes a las plantillas del canal. Los campos que se muestran en esta pestaña son de solo lectura. Para modificarlos, debes acceder a tu cuenta de Meta Business.

En la sección **Gestionar contenido**, haz clic en `Ver mis plantillas` para abrir las plantillas de mensaje asociadas al número.

La sección **Canal de WhatsApp** muestra los datos de la línea conectada. Los campos visibles son:

| Campo | Descripción |
| --- | --- |
| **Número de teléfono** | Número comercial conectado al canal. |
| **Nombre para mostrar de WhatsApp** | Nombre que WhatsApp muestra al usuario. |
| **Idioma predeterminado para plantillas** | Idioma predeterminado de las plantillas. Si no está definido, la interfaz muestra un guion (`-`). |
| **Certificado** | Certificado asociado al número. Cuando no aplica, la interfaz muestra `N/A`. |
| **Estado de consentimiento** | Estado de consentimiento del número. Si no está definido, la interfaz muestra un guion (`-`). |

La sección **Cuenta de WhatsApp Business** muestra los identificadores de la cuenta de WhatsApp Business vinculada al canal. Los campos visibles son:

| Campo | Descripción |
| --- | --- |
| **Nombre WABA** | Nombre de la cuenta de WhatsApp Business. |
| **ID del WABA** | Identificador de WhatsApp Business en Meta. |
| **Mensajes en nombre de** | Identidad en nombre de quien se envían los mensajes. Si no está definido, la interfaz muestra un guion (`-`). |
| **ID del huso horario** | Huso horario de WhatsApp Business, en formato IANA. Ejemplo: `America/Sao_Paulo`. |
| **Namespace** | Namespace de las plantillas de WhatsApp Business. |

### Perfil

En la pestaña **Perfil**, defines la información pública del número, visible para los clientes en WhatsApp. Puedes editar los siguientes campos:

- **Imagen de perfil:** imagen asociada al perfil de WhatsApp.
- **Descripción:** descripción de la organización u objetivo del chatbot.
- **Sector de la organización:** sector de la organización.
- **Sitios web:** direcciones del sitio web de la tienda. Puedes incluir hasta dos sitios web.
- **Email corporativo:** email para contacto con los usuarios.
- **Dirección:** dirección comercial de tu tienda.

Si modificaste alguno de los campos y deseas guardar, haz clic en `Guardar cambios`. Para salir sin guardar, haz clic en `Configurar después`.

### Webhook

En la pestaña **Webhook**, defines el endpoint que recibe las notificaciones del canal. Utiliza esta pestaña cuando un sistema externo necesita procesar los eventos de mensaje fuera de VTEX CX Platform.

Para configurar el webhook, completa los siguientes campos:

| Campo | Descripción |
| --- | --- |
| **Método** | Método HTTP de la solicitud. Las opciones son: `GET`, `POST`, `PUT`, `PATCH` y `DELETE`. |
| **URL del webhook** | URL del servicio que recibirá las notificaciones. |
| **Clave** | Clave de la solicitud HTTP. |
| **Valor** | Valor referente a la clave. |

Si modificaste alguno de los campos y deseas guardar, haz clic en `Guardar cambios`. Para salir sin guardar, haz clic en `Configurar después`.

### Conversaciones

La pestaña **Conversaciones** muestra el volumen de conversaciones del número, agrupado por las categorías de cobro de WhatsApp, y permite solicitar un informe detallado por email.

Para consultar el volumen de conversaciones, sigue los pasos a continuación:

1. En **Filtrar por**, selecciona el intervalo de fechas en formato `DD/MM/YYYY ~ DD/MM/YYYY`.
2. Después de filtrar por intervalo de tiempo, la tabla **Número de conversaciones** muestra la cantidad de conversaciones de cada categoría.
3. Si deseas recibir un informe detallado de las conversaciones del intervalo de tiempo seleccionado, haz clic en `Solicitar informe`.
  - Puedes recibir detalles de mensajes de hasta 6 meses atrás.

### Verificación de la cuenta

En la pestaña **Verificación de la cuenta**, puedes realizar la verificación con Meta. La verificación desbloquea límites mayores de envío de mensajes e intervalos menores entre mensajes.

> ⚠️ Solo puedes realizar la verificación de la cuenta cuando alcances 50 conversaciones o 50 plantillas enviadas.

Para verificar tu cuenta, sigue las siguientes instrucciones:

1. Selecciona las siguientes casillas de verificación:
  - Esta compañía es una entidad legal.
  - El administrador de la cuenta es un representante de la compañía.
  - La compañía cumple con la Política de WhatsApp Business.
2. Haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Subir archivos` para cargar los documentos de tu compañía.
3. Al final, haz clic en `Enviar`.

A continuación, destacamos algunos documentos sugeridos al verificar tu cuenta con Meta:

| País | Documentos |
| --- | --- |
| Brasil | - Documento o licencia de registro de la compañía (por ejemplo, CNPJ) <br> - Documento de asociación o contrato social (por ejemplo, MEI). <br> - Comprobante de pago de impuestos, comprobante bancario o factura de servicios públicos. |