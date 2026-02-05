---
title: 'Instalar Live Shopping'
id: 5r4DSCZCdQUErgJzLGtiMD
status: PUBLISHED
createdAt: 2025-07-23T17:40:02.306Z
updatedAt: 2025-10-24T13:10:34.190Z
publishedAt: 2025-10-24T13:10:34.190Z
firstPublishedAt: 2025-07-28T15:07:26.166Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: installing-live-shopping
locale: es
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-primeros-pasos
order: 2
---

La solución **Live Shopping** es compatible con las siguientes tecnologías de frontend:

* [Store Framework (VTEX IO)](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework)
* [CMS Portal (Legado)](/es/docs/tracks/cms-portal-legado)
* [Headless CMS](/es/docs/tutorials/headless-cms-vision-general)
* [FastStore](https://developers.vtex.com/docs/guides/faststore/storefront-features-implementing-live-shopping-for-faststore)
* Tiendas externas

## Prerrequisito

Exceptuando las tiendas externas, todas las soluciones de frontend deben tener [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference) instalada.

## Obtener la aplicación VTEX Live Shopping

A menos que seas una tienda externa, debes seguir los pasos a continuación:

1. Accede a [VTEX Live Shopping](https://apps.vtex.com/vtexventures-livestreaming/p) en VTEX App Store. También puedes acceder a ella a través del Admin VTEX por **Apps > App Store > VTEX Live Shopping**.
2. Haz clic en `Obtener app` para instalar la aplicación. Inicia sesión en tu cuenta VTEX de ser necesario.
3. Haz clic en `Finalizar compra`.
4. Haz clic en `Ir a la página de instalación`.
5. Acepta los Términos de uso haciendo clic en `Instalar`.

## Pasos de instalación para VTEX IO

Como **VTEX Live Shopping** afecta el storefront mostrando un componente al iniciar el evento, tu equipo técnico debe implementar la solución siguiendo las instrucciones de la [documentación para desarrolladores](https://developers.vtex.com/docs/apps/vtexventures.livestreaming#for-vtex-io).

## Pasos de instalación para FastStore

Para integrar **Live Shopping** en un proyecto que utiliza [FastStore](https://developers.vtex.com/docs/guides/faststore), consulta la guía para desarrolladores [Implementing Live Shopping for FastStore](https://developers.vtex.com/docs/guides/faststore/storefront-features-implementing-live-shopping-for-faststore).

> ℹ️ Esta funcionalidad está disponible como solución nativa en la versión más reciente de FastStore. Si tu storefront utiliza [FastStore v1 o v2](https://developers.vtex.com/docs/guides/faststore/getting-started-faststore-versions-and-support-levels), consulta la guía [Implementing Live Shopping for FastStore previous versions](https://developers.vtex.com/docs/guides/faststore/storefront-features-implementing-live-shopping-for-faststore-previous-versions).
