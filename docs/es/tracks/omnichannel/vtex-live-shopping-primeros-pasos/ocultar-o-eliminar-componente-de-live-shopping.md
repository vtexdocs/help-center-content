---
title: 'Ocultar o remover componente de Live Shopping'
id: 7e3bP6LjFgxXC210jSpl59
status: PUBLISHED
createdAt: 2025-07-23T18:14:54.073Z
updatedAt: 2025-09-15T18:23:16.624Z
publishedAt: 2025-09-15T18:23:16.624Z
firstPublishedAt: 2025-07-28T15:08:44.289Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: hiding-or-removing-live-shopping-component
locale: es
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-primeros-pasos
order: 11
---

Después de [terminar la transmisión](https://help.vtex.com/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/69PX90vv4oDWQ34nnBkiQt#finalizar-la-transmision) en Bundle o en un estudio externo y cuando el [status del evento](https://help.vtex.com/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#status-del-evento) sea `Completado`, debes ocultar el componente de **Live Shopping** o remover el código, dependiendo de tu solución de frontend. Hasta que realices esta acción, la audiencia seguirá viendo una pantalla negra en tu sitio web o landing page.

Consulta las instrucciones que corresponden a tu solución de frontend:

* [Store Framework (VTEX IO)](#store-framework-vtex-io)
* [CMS - Portal Legado](#cms-portal-legado)
* [Headless CMS](#headless-cms)

> ❗ Para evitar que tu audiencia vea una pantalla negra al finalizar la transmisión, puedes mostrar una imagen de cierre, como se indica a continuación:<ol><li>Antes de finalizar la transmisión, muestra la imagen final en Bundle o en un estudio externo.</li><li>Oculta el componente **Live Shopping** o remueve el código de la tienda (como se muestra en las siguientes secciones).</li><li>Espera aproximadamente 10 minutos después de mostrar la imagen de cierre para permitir que la caché se actualice.</li><li>Termina el evento.

## Store Framework (VTEX IO)

Para tiendas que usan [Store Framework](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework), puedes ocultar el componente de **Live Shopping** en [Site Editor](https://help.vtex.com/es/tutorial/gestionar-contenido-de-paginas-y-templates--3tMbx6HXy4Fy5r9EhboG37) siguiendo los pasos a continuación: 

1. En el Admin VTEX, accede a **Storefront > Site Editor**, o ingresa **Site Editor** en la barra de búsqueda en la parte superior de la página.
2. En la **lista de Bloques** en el lado derecho de la página, selecciona **Live Shopping**.
3. Desactiva la <i class="fas fa-toggle-off" aria-hidden="true"></i> opción `Mostrar componente`.
4. Haz clic en `Guardar`.

> ℹ️ Después de guardar la configuración del componente de **Live Shopping** en **Site Editor**, los cambios pueden tardar entre cinco y diez minutos en reflejarse en el storefront. Mientras la página se actualiza, es recomendable mostrar una imagen de cierre al final del evento.

## CMS - Portal Legado

Para tiendas que usan [CMS - Portal Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), debes remover el script de **Live Shopping** siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront > Layout**, o ingresa **Layout** en la barra de búsqueda de la parte superior de la página.
2. Haz clic en **CMS > HTML Templates**.
3. Haz clic en delete para eliminar el script de **Live Shopping** del archivo HTML donde [lo hayas agregado](https://help.vtex.com/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR#cms-portal-legado).
4. Haz clic en `Save Template` en la parte superior derecha de la plantilla.

## Headless CMS

Para tiendas que utilizan [Headless CMS](https://help.vtex.com/es/tutorial/headless-cms-vision-general--3U5gvhHdQL0jczYH8gjX09) debes remover el script de **Live Shopping** del archivo HTML donde [lo hayas agregado](https://help.vtex.com/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR#headless-cms).
