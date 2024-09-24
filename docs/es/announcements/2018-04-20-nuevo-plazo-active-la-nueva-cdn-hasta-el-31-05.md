---
title: 'NUEVO PLAZO: active la nueva CDN hasta el 31/05'
id: 1NHO2lx3tyWaqcwMG6u62q
status: PUBLISHED
createdAt: 2018-04-20T21:14:47.734Z
updatedAt: 2019-12-31T15:13:46.401Z
publishedAt: 2019-12-31T15:13:46.401Z
contentType: updates
productTeam: Reliability
author: authors_24
slugEN: new-deadline-activate-the-new-cdn-until-may-31
locale: es
legacySlug: nuevo-plazo-active-la-nueva-cdn-hasta-el-31-05
announcementImageID: ''
announcementSynopsisES: 'Activar HTTPS, actualizar el CNAME y solicitar el nuevo CDN antes de la fecha límite evitará problemas en su tienda.'
---

Debido al gran número de tiendas que no se prepararon para la activación del HTTPS y de el nuevo CDN, decidimos prorrogar el plazo final de migración a __31 de mayo__.

## ¿Qué es la nueva CDN?
CDN es la red usada para entregar todo el contenido de su sitio (texto, imágenes, vídeos). La nueva CDN es mejor y más segura, pero su tienda necesita realizar algunas acciones para usarla. Para más detalles, lea abajo o acceda [este artículo del Help](/es/tutorial/activar-nueva-cdn-de-vtex).

## ¿Por qué este cambio es crítico?
__Si tu tienda no hace los cambios necesarios, ella saldrá del aire.

## ¿Qué se debe hacer?
Usted necesita realizar sólo 3 acciones para dejar su tienda lista para el cambio:
- Activar HTTPS en todo el sitio
- Actualizar el CNAME
- Llenar este formulario: [Actualización para la nueva CDN](https://docs.google.com/forms/d/e/1FAIpQLSdae71lH2ppAgjDw_bJ8E2ZMnL8psm3pEEXbEViQOSsx5eVwQ/viewform)

__Cumpliendo estos pasos, su tienda no tendrá problemas.__ Para más detalles, siga el paso a paso que se describe a continuación o acceda a [este artículo](/es/tutorial/activar-nueva-cdn-de-vtex). Si no está seguro de cómo realizar estos cambios o no sabe si su tienda ya es adecuada, __enviar este comunicado a su equipo de soporte técnico de TI o agencia asociada. Es fundamental que su tienda realice estas acciones para continuar vendiendo.

## Informaciones complementarias
A pesar del plazo algunas medidas ya se han implementado para todas las tiendas:
- En el Portal V2 (páginas del checkout) ya no es permitido HTTP. Todas las tiendas ahora tragan por HTTPS en estas páginas.
- En el Portal CMS, todas las carpetas que se crean o cambien serán forzadas a HTTPS.
- Cuentas inactivas o que no estaban en producción se actualizaron automáticamente a HTTPS.

Es importante recordar que, para completar la migración a nuevo CDN, es fundamental activar el HTTPS en todo su website. Los detalles de cómo hacer esto están [en este artículo del Help](/es/tutorial/activar-https-en-todo-el-sitio).

Después de activar HTTPS, debe:
- Actualizar su DNS al nuevo CNAME de VTEX.
- Solicitar la activación del CDN.

Si el dominio de su tienda apunta a algo que contenga `vtexcommerce.com.br` o `hodor.vtex.com`, eso significa que todavía usa el CNAME antiguo. La actualización es necesaria porque sólo será posible tener contenido en el dominio `{hostname}.cdn.vtex.com`.

>⚠️ Después de **31 de mayo**, todos los CNAME antiguos dejarán de entregar las tiendas. Si usted está usando un CNAME antiguo, **su tienda ya no funcionará**.

Después de activar HTTPS y actualizar al nuevo CNAME de VTEX, necesitará solicitar la activación del nuevo CDN. Si esto no se realiza hasta __31 de mayo__, la activación se realizará de manera automática. Por eso, es fundamental que usted realice todas las acciones ya comunicadas anteriormente y reforzadas en este anuncio. Así, usted evita problemas en la tienda que podrían ser evitados.

Para el paso a paso completo de cómo activar el nuevo CDN (incluida la actualización de CNAME), [acceda a este artículo del Help](/es/tutorial/activar-nueva-cdn-de-vtex).
