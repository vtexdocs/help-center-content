---
title: 'Nuevos requisitos de Google y Yahoo para los remitentes de emails en masa'
id: 4Tb5eIYJVnKHAK2hPHY1uZ
status: PUBLISHED
createdAt: 2024-01-25T21:37:28.950Z
updatedAt: 2024-01-26T00:23:10.235Z
publishedAt: 2024-01-26T00:23:10.235Z
contentType: updates
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: new-google-and-yahoo-requirements-for-bulk-email-senders
locale: es
legacySlug: nuevos-requisitos-de-google-y-yahoo-para-los-remitentes-de-emails-en-masa
announcementImageID: ''
announcementSynopsisES: 'Nuevos requisitos de Google y Yahoo para remitentes de emails en masa.'
---

Google y Yahoo están aplicando nuevos requisitos a los remitentes de emails en masa. El objetivo es garantizar una mayor seguridad a los destinatarios, reducir el volumen de spam y ofrecer una mejor experiencia a los usuarios.

A partir de febrero de 2024, según sus [directrices para remitentes de correos](https://support.google.com/a/answer/81126?hl=es&visit_id=638412075303779567-3830782619&rd=1), Google exigirá nuevos requisitos a los remitentes que envíen 5000 o más mensajes al día a cuentas de Gmail. Del mismo modo, Yahoo también ha definido nuevas [prácticas en materia de entregabilidad masiva de emails](https://senders.yahooinc.com/best-practices/). Estas empresas han especificado que deben cumplirse los siguientes requisitos:

* Autenticación de email del remitente.
* Facilitar la opción de anular la suscripción.
* Límite para la tasa de emails marcados como spam.

Si los remitentes no siguen estas directrices, existe la posibilidad de que los emails enviados sean rechazados o dirigidos a la carpeta de spam del destinatario.

## ¿Qué cambió?

A partir de febrero de 2024, Google y Yahoo exigirán los siguientes requisitos a los remitentes de emails en masa:

| **Requisitos** | **Descripción** |
| :--- | :--- |
| Autenticación de email del remitente | Los remitentes deben autenticar el origen de su email utilizando los siguientes protocolos:<ul><li>[SPF](https://support.google.com/a/answer/33786?sjid=4150033421619503412-SA) (Sender Policy Framework)</li><li>[DKIM](https://support.google.com/a/answer/174124?sjid=4150033421619503412-SA) (DomainKeys Identified Mail)</li><li>[DMARC](https://support.google.com/a/answer/2466580?sjid=4150033421619503412-SA) (Domain-based Message Authentication, Reporting & Conformance)</li></ul>Al realizar estos ajustes, te proteges contra el spoofing (emails falsos enviados en nombre de tu dominio) y evitas que tus emails enviados se marquen como spam.Más información en [Evitar el spam, el spoofing y el phishing con la autenticación de Gmail](https://support.google.com/a/answer/10583557?hl=es#:~:text=La%20autenticaci%C3%B3n%20tambi%C3%A9n%20ayuda%20a,mensajes%20pueden%20marcarlos%20como%20spam.). |
| Facilitar la opción de anular la suscripción | Los destinatarios deben tener la opción de darse de baja de tus mensajes con un solo clic, y el procesamiento de dicha baja debe completarse en un plazo de dos días.Más información en [Suscripciones](https://support.google.com/mail/answer/81126#subscriptions) (Google) y [Support one click unsubscribe](https://blog.postmaster.yahooinc.com/post/182917670818/dont-want-to-be-marked-as-spam-support-one-click) (Yahoo). |
| Límite para tasa de emails marcados como spam | Los destinatarios deben considerar tus emails como deseables, por lo que la tasa de emails marcados como spam debe ser inferior al 0.1% y el remitente debe evitar que alcance o supere el 0.3 %. Esta tasa se refiere al número de emails marcados como spam por los destinatarios, dividido por el número total de emails recibidos.Puedes utilizar [Postmaster Tools](https://support.google.com/mail/answer/14289100) para monitorear datos sobre grandes volúmenes de emails de Gmail, y [Complaint Feedback Loop](https://senders.yahooinc.com/complaint-feedback-loop/) para el mismo servicio de Yahoo. |

Los requisitos mencionados se consideran básicos en lo que respecta a la gestión de envío de emails. Para más información sobre las prácticas recomendadas de entregabilidad de emails en Google, consulta [Directrices para remitentes de correos](https://support.google.com/a/answer/81126?hl=es&visit_id=638412075303779567-3830782619&rd=1); para consultar contenido en Yahoo, accede a [Email deliverability best practices](https://senders.yahooinc.com/best-practices/).

## ¿Qué se necesita hacer?

Para ser un remitente de emails en masa y cumplir los requisitos de Google y Yahoo, debes:

* [Configurar la autenticación del email del remitente](#configurar-la-autenticacion-del-email-del-remitente)
* [Facilitar la opción de anular la suscripción a los destinatarios](#facilitar-la-opcion-de-anular-la-suscripcion)
* [Controlar el límite de la tasa de spam](#controlar-el-limite-de-la-tasa-de-spam)

Si no se siguen estas directrices, existe la posibilidad de que los emails enviados sean rechazados o dirigidos a la carpeta de spam del destinatario. Puedes verificar si cumples con los requisitos de Google utilizando [Postmaster Tools](https://support.google.com/mail/answer/14289100).

### Configurar la autenticación del email del remitente

* Configura la [autenticación SPF](https://support.google.com/a/answer/33786?sjid=4150033421619503412-SA) para tu dominio de envío.
* Configura la autenticación [DKIM](https://support.google.com/a/answer/174124?sjid=4150033421619503412-SA) para tu dominio de envío.
* Configura la [autenticación DMARC](https://support.google.com/a/answer/2466580?hl=es#dmarc-setup) para tu dominio de envío (puedes comprobar si tienes un [registro DMARC válido](https://dmarcian.com/dmarc-inspector/)).
* Define una política DMARC para tu dominio (consulta la [implementación recomendada por Google](https://support.google.com/a/answer/10032473?hl=es)).

### Facilitar la opción de anular la suscripción

* Ofrece a los destinatarios la opción de anular la suscripción de los emails con [un solo clic](https://blog.postmaster.yahooinc.com/post/182917670818/dont-want-to-be-marked-as-spam-support-one-click).
* Incluye un link visible para cancelar la suscripción en el cuerpo del mensaje.
* Procesa la solicitud de cancelación en hasta 2 días.

### Controlar el límite de la tasa de spam

* Mantén las tasas de spam por debajo del 0.1 %.
* Evita alcanzar una tasa de spam igual o superior al 0.3 %.
* Monitorea las tasas de spam informadas. En Gmail, utiliza [Postmaster Tools](https://gmail.com/postmaster); en Yahoo, [Complaint Feedback Loop](https://senders.yahooinc.com/complaint-feedback-loop/).

## Artículos relacionados

| **VTEX** | **Google** | **Yahoo** |
| :--- | :--- | :--- |
| <ul><li>[Buenas prácticas de SPF (Sender Policy Framework)](https://help.vtex.com/es/tutorial/best-practices-on-spf--42t0lkl2VyC6Yewc4wA6wI)</li><li>[Setting up the SPF](https://developers.vtex.com/docs/guides/setting-up-the-spf)</li><li>[Setting up DKIM for transactional emails](https://developers.vtex.com/docs/guides/setting-up-dkim-for-transactional-emails)</li><li>[Generate DKIM keys](https://developers.vtex.com/docs/api-reference/message-center-api#post-/api/mail-service/pvt/providers/-EmailProvider-/dkim)</li></ul> | <ul><li>[Directrices para remitentes de correos](https://support.google.com/a/answer/81126?hl=es&visit_id=638412075303779567-3830782619&rd=1)</li><li>[Preguntas frecuentes sobre las directrices para remitentes de correos](https://support.google.com/a/answer/14229414?hl=es-bo)</li><li>[Evitar el spam, el spoofing y el phishing con la autenticación de Gmail](https://support.google.com/a/answer/10583557?hl=es#:~:text=La%20autenticaci%C3%B3n%20tambi%C3%A9n%20ayuda%20a,mensajes%20pueden%20marcarlos%20como%20spam)</li><li>[Comunicado de Google](https://blog.google/products/gmail/gmail-security-authentication-spam-protection/)</li></ul> | <ul><li>[Best practices - Deliverability](https://senders.yahooinc.com/best-practices/)</li><li>[FAQs - Deliverability](https://senders.yahooinc.com/faqs/)</li><li>[Comunicado de Yahoo](https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam)</li></ul> |

