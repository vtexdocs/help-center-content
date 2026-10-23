---
title: 'VTEX CX Platform: soporte para BSUID y nombres de usuario de WhatsApp'
createdAt: 2026-10-06T12:00:00.000Z
updatedAt: 2026-10-06T12:00:00.000Zs
contentType: updates
productTeam: VTEX CX Platform
slugEN: 2026-10-06-vtex-cx-platform-support-for-bsuid-and-whatsapp-usernames
locale: es
announcementSynopsisES: 'VTEX CX Platform ahora identifica contactos de WhatsApp por BSUID, manteniendo conversaciones y automatizaciones activas incluso sin número de teléfono.'
tags:
  - Nueva funcionalidad
  - Admin
  - VTEX CX Platform
---

Ahora VTEX CX Platform también identifica los contactos de WhatsApp por el Business Scoped User ID (BSUID), el identificador de usuario de ámbito empresarial de WhatsApp. Así, tus conversaciones y automatizaciones siguen funcionando aunque el contacto no haya compartido su número de teléfono.

## ¿Qué cambió?

Antes, el número de teléfono era el único identificador de un contacto de WhatsApp en VTEX CX Platform. Si el contacto no compartía su número no era posible recibir sus mensajes ni enviarle templates.

Ahora, la plataforma resuelve automáticamente el identificador disponible en cada conversación:

- **Si el contacto tiene número de teléfono:** todo funciona como antes.
- **Si el contacto tiene solo BSUID:** sigues recibiendo sus mensajes y puedes enviarle templates normalmente, sin ninguna configuración adicional.

El BSUID del contacto se muestra en la página de detalles del contacto, junto a la otra información del perfil. También puedes:

- **Solicitar el número de teléfono:** los agentes pueden invitar al contacto a compartir su número voluntariamente mediante un componente nativo de WhatsApp. El contacto puede elegir si desea o no compartirlo.
- **Segmentar contactos sin teléfono:** al crear un grupo en **Contactos**, marca la opción **Contactos de WhatsApp sin teléfono** para generar un grupo inteligente con todos los contactos que tienen BSUID y no tienen número de teléfono. Así, puedes hacer seguimiento de esta audiencia de forma específica.

## ¿Por qué realizamos este cambio?

WhatsApp está evolucionando su modelo de privacidad y los usuarios podrán interactuar con las empresas usando un nombre de usuario, sin exponer su número de teléfono. Esto significa que el número deja de ser un identificador garantizado. Para que tu comunicación no se interrumpa cuando este modelo entre en vigor, desarrollamos el soporte a BSUID en VTEX CX Platform. Sus principales ventajas son:

- **Comunicación sin interrupciones:** las conversaciones entrantes y los envíos de templates siguen funcionando para cualquier contacto independientemente del identificador disponible.
- **Preparación anticipada:** tu tienda ya está lista para los cambios de identidad de WhatsApp sin depender de una actualización futura de la plataforma.
- **Enriquecimiento de perfil en cumplimiento:** puedes solicitar el número de teléfono al contacto mediante un componente oficial de WhatsApp, respetando la decisión del cliente.
- **Automatizaciones preservadas:** el soporte a BSUID está integrado a la misma capa de identificación que usan las automatizaciones nativas de WhatsApp, como carrito abandonado, recuperación de Pix (Brasil) y status del pedido.

## ¿Qué se necesita hacer?

No es necesaria ninguna acción. VTEX CX Platform identifica el contacto automáticamente sin que tengas que elegir entre número de teléfono y BSUID.

Si usas sistemas externos que dependen exclusivamente del número de teléfono como identificador del contacto, como CRMs, integraciones personalizadas, pipelines de BI o reglas de segmentación, te recomendamos planificar la adaptación de esos sistemas para que también acepten BSUID.

> ⚠️ La interacción solo por BSUID depende de que Meta libere el uso de nombres de usuario para los usuarios finales de WhatsApp. Meta todavía no ha anunciado una fecha para este lanzamiento. Por ahora, el comportamiento se ha validado en escenarios simulados y no se esperan cambios en la experiencia actual del canal de WhatsApp.

Para saber más sobre el canal WhatsApp, consulta el artículo [WhatsApp: integración con VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/whatsapp-integracion-con-vtex-cx-platform).
