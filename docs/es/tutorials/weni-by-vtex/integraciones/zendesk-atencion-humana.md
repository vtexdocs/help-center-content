---
title: 'Zendesk - Atención Humana'
id: 3FSQwdnzAX3jah8euPD1Ah
status: PUBLISHED
createdAt: 2025-09-15T15:13:03.117Z
updatedAt: 2025-10-03T14:20:32.519Z
publishedAt: 2025-10-03T14:20:32.519Z
firstPublishedAt: 2025-10-03T14:20:32.519Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: zendesk-human-support
legacySlug: zendesk-atencion-humana
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

### Pasos para la integración

La integración entre la plataforma Weni y Zendesk proporciona una herramienta poderosa para gestionar la atención al cliente de manera eficiente y automatizada. Tras completar la configuración e instalación, es fundamental supervisar el funcionamiento de la integración para garantizar que todos los tickets se gestionen correctamente y que las activaciones automáticas (triggers) funcionen como se espera.

1. Crear cuenta en Zendesk
- Si aún no tienes una cuenta, crea una en Zendesk. Para este ejemplo, estamos utilizando una cuenta de prueba gratuita. ( [https://weni5623\.zendesk.com/](https://weni5623.zendesk.com/) )
- Acesse: <https://www.zendesk.com.br/>

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_1.png)

1. Acceder al proyecto en la plataforma Weni

- Dentro de tu proyecto en la plataforma Weni, ve al módulo **Applications** > **Other Apps**.
- Haz clic en el menú hamburguesa y selecciona **Add Ticketing Service**, eligiendo **Zendesk**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_2.png)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_3.png)

1. Rellena el **Subdomain** y captura la **Request URL**

- Se te pedirá que ingreses tu subdominio. Antes de enviarlo, presiona **F12** para abrir el modo desarrollador y accede al módulo **Network**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_4.png)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_5.png)

- Rellena el **Subdomain**, que es el valor antes de “zendesk.com” en la URL. Ejemplo: **weni5623** de https://weni5623\.zendesk.com/.
- Al hacer clic en **Conectar**, en el modo desarrollador aparecerán dos nuevas líneas.
- Haz clic en la segunda línea, donde la Request URL comenzará con tu subdominio, por ejemplo, https://weni5623\...
- Copia toda la URL y ábrela en otra pestaña del navegador.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_6.gif)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_7.png)

1. Autorizar el uso de la aplicación

- Autoriza el uso de la aplicación en tu cuenta de Zendesk.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_8.png)

- Después de la autorización, se mostrará una guía paso a paso para continuar.
- Guarda el **secreto** que se muestra, ya que será necesario en las siguientes etapas.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_9.png)

1. Instalar la aplicación Weni en Zendesk

Accede al [Marketplace de Zendesk](https://www.zendesk.com/marketplace/apps/) y instala la aplicación de Weni.

Si la aplicación de Weni ya está instalada en Zendesk, no es necesario reinstalarla. Continúe con el siguiente paso para **agregar cuenta**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_10.png)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_11.png)

1. Configurar la Integración en Zendesk

Las configuraciones de tu cuenta ahora están en el Centro de administración. Ve al [Centro de administración](https://weni4679.zendesk.com/admin/home) .

En Aplicaciones e integraciones, agrega la aplicación de Weni en el Marketplace si aún no lo has hecho.

Después de integrar, configura y guarda la información.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_12.png)

1. Haz clic en Aplicaciones de canal > Haz clic en tu Canal > Cuentas > Agregar cuenta.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_13.png)

Asigna un nombre a tu integración/cuenta y añade el secreto guardado en el paso 5\.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_14.png)

1. Verificar la Conexión en la Plataforma Weni

Si todos los pasos se han seguido correctamente, en Aplicaciones > Otras Aplicaciones en la Plataforma Weni, el servicio con Zendesk deberá aparecer como conectado.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_15.png)

1. Utilizar la Tarjeta ""Abrir un Ticket"" en el Flujo

Ahora puedes utilizar la tarjeta Abrir un Ticket en tu flujo en la Plataforma Weni.

Consulta: [Creación de campos personalizados.](https://help.vtex.com/es/docs/tutorials/agregando-campos-de-creacion-de-ticket-en-zendesk)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_16.png)

1. Configurar Disparadores

Configura un activador para que, cuando se cierre un Ticket, inicie un flujo de finalización para el usuario.

Además, crea activadores para evitar que los usuarios en atención inicien otros flujos no deseados.

Este es un test de apertura de tickets en Zendesk:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/zendesk-atencion-humana_17.png)

##### Próximos Pasos:

- Probar la Integración: Realiza pruebas para asegurar que la apertura de tickets y las respuestas automáticas estén funcionando según lo planeado.
- Monitoreo Continuo: Establece un proceso de revisión periódica de los activadores y flujos para garantizar que estén alineados con las necesidades del negocio.
- Ajustes y Optimización: A medida que el uso del sistema evoluciona, considera ajustar los flujos y activadores para optimizar la atención al cliente y mejorar la experiencia del usuario.
