---
title: 'VTEX CX Platform: soporte para BSUID y nombres de usuario de WhatsApp'
createdAt: 2026-10-06T12:00:00.000Z
updatedAt: 2026-10-06T12:00:00.000Zs
contentType: updates
productTeam: VTEX CX Platform
slugEN: 2026-10-06-vtex-cx-platform-support-for-bsuid-and-whatsapp-usernames
locale: es
announcementSynopsisES: 'VTEX CX Platform ahora identifica contactos de WhatsApp mediante el BSUID, lo que mantiene activas las conversaciones y automatizaciones incluso sin número de teléfono.'
tags:
  - Nueva funcionalidad
  - Admin
  - VTEX CX Platform
---

Ahora VTEX CX Platform también identifica contactos de WhatsApp mediante el Business Scoped User ID (BSUID), el identificador de usuario con alcance de negocio de WhatsApp. Gracias a esto, tus conversaciones y automatizaciones siguen funcionando incluso cuando el contacto no compartió su número de teléfono.

> ⚠️ Meta está habilitando gradualmente la interacción solo por BSUID. Hasta entonces, este comportamiento se validó en escenarios simulados y no se espera ningún cambio en la experiencia actual del canal de WhatsApp.

## ¿Qué cambió?

Antes, el número de teléfono era el único identificador de un contacto de WhatsApp en VTEX CX Platform. Si el contacto no compartía su número, no era posible recibir sus mensajes ni enviarle plantillas.

Ahora, la plataforma resuelve automáticamente el identificador disponible en cada conversación:

- **Si el contacto tiene número de teléfono:** todo funciona como antes.
- **Si el contacto solo tiene BSUID:** sigues recibiendo sus mensajes y puedes enviar plantillas normalmente, sin ninguna configuración adicional.

El BSUID del contacto aparece en la página de detalles del contacto, junto con la otra información del perfil. También puedes:

- **Solicitar el número de teléfono:** los agentes pueden invitar al contacto a compartir su número voluntariamente mediante un componente nativo de WhatsApp. El compartir es opcional y solo ocurre si el contacto lo acepta.
- **Segmentar contactos sin teléfono:** al crear un grupo en **Contactos**, selecciona la opción **Contactos de WhatsApp sin teléfono** para generar un grupo inteligente con todos los contactos que tienen BSUID y no tienen número de teléfono. Así puedes dar seguimiento a ese público de forma específica.

## ¿Por qué realizamos este cambio?

WhatsApp está evolucionando su modelo de privacidad y los usuarios podrán interactuar con las empresas usando un nombre de usuario, sin exponer su número de teléfono. Esto significa que el número deja de ser un identificador garantizado. Para que tu comunicación no se interrumpa cuando este modelo entre en vigor, desarrollamos el soporte para BSUID en VTEX CX Platform. Sus principales ventajas son:

- **Comunicación sin interrupciones:** las conversaciones entrantes y los envíos de plantillas siguen funcionando para cualquier contacto, sin importar el identificador disponible.
- **Preparación anticipada:** tu tienda ya está lista para los cambios de identidad de WhatsApp, sin depender de una actualización futura de la plataforma.
- **Enriquecimiento de perfil conforme a la normativa:** puedes solicitar el número de teléfono al contacto mediante un componente oficial de WhatsApp, respetando la decisión del cliente.
- **Automatizaciones preservadas:** el soporte para BSUID está integrado a la misma capa de identificación que usan las automatizaciones nativas de WhatsApp, como carrito abandonado, recuperación de Pix y status del pedido.

## ¿Qué se necesita hacer?

No se requiere ninguna acción. La identificación del contacto la realiza automáticamente VTEX CX Platform, sin que necesites elegir entre número de teléfono y BSUID.

Si utilizas sistemas externos que dependen exclusivamente del número de teléfono como identificador del contacto, como CRMs, integraciones personalizadas, pipelines de BI o reglas de segmentación, te recomendamos planificar la adaptación de esos sistemas para que también acepten el BSUID.

Para saber más sobre el canal de WhatsApp, consulta el artículo [WhatsApp: Integración con VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/whatsapp-integracion-con-vtex-cx-platform).
