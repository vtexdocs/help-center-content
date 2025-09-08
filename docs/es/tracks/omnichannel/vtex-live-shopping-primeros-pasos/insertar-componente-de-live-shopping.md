---
title: 'Insertar componente de Live Shopping'
id: 4r5uk6XHxdYlOGMr11GFWR
status: PUBLISHED
createdAt: 2025-07-23T17:54:26.773Z
updatedAt: 2025-09-06T19:36:04.789Z
publishedAt: 2025-09-06T19:36:04.789Z
firstPublishedAt: 2025-07-28T15:07:46.555Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: placing-the-live-shopping-component
locale: es
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-primeros-pasos
order: 4
---

Una vez que tu evento esté [configurado en Bundle](https://help.vtex.com/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/3GKzrP9nkyRwpUyyeYUaeX) o en un estudio externo y antes de empezar la transmisión, tienes que agregar el componente de **Live Shopping** en tu sitio web, ya sea en la página de inicio de la tienda o en la [landing page](https://help.vtex.com/es/tutorial/live-shopping-configuring-a-landing-page-for-live-shopping-events--4iBDPEpXyKSfoIqUdwHGFE). La configuración varía dependiendo de la solución de frontend de tu tienda:

* [Store Framework (VTEX IO)](#store-framework-vtex-io)
* [CMS - Portal Legado](#cms-portal-legado)
* [Headless CMS](#headless-cms)

> ⚠️ Después de configurar el componente de **Live Shopping**, los cambios pueden tardar entre cinco y diez minutos en reflejarse en el storefront debido a la caché.

## Store Framework (VTEX IO)

En tiendas que utilizan [Store Framework](https://help.vtex.com/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework), sigue estos pasos para agregar el componente de **Live Shopping** desde [Site Editor](https://help.vtex.com/es/tutorial/managing-page-and-template-content--3tMbx6HXy4Fy5r9EhboG37): 

1. En el Admin VTEX, accede a **Storefront > Site Editor**, o ingresa **Site Editor** en la barra de búsqueda en la parte superior de la página.
2. En la **lista de Bloques** en el lado derecho de la página, selecciona **Live Shopping**.
3. Activa la <i class="fas fa-toggle-on" aria-hidden="true"></i> opción `Mostrar componente`.

  ![article_4_store_framework_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/omnichannel/vtex-live-shopping-primeros-pasos/insertar-componente-de-live-shopping_1.png)

4. Haz clic en el menú desplegable de **Eventos (en vivo)** y selecciona el evento deseado. Las opciones mostradas solo incluyen eventos con [status](https://help.vtex.com/en/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#status-del-evento) `En vivo`.
5. Haz clic en `Guardar`.

## CMS - Portal Legado

En tiendas que utilizan [CMS - Portal Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), sigue los pasos a continuación para agregar el componente de **Live Shopping**: 

1. En la página **Información del evento** del [evento creado](https://help.vtex.com/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv), haz clic en el ícono de flecha.
2. Después de [activar el evento](https://help.vtex.com/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq), accede a la sección **Configuración CMS**.
3. En **Script para plantilla**, selecciona `Plantilla CMS`.
4. Copia el código en **Script para plantilla**.

  ![article_4_legacy_cms_portal_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/omnichannel/vtex-live-shopping-primeros-pasos/insertar-componente-de-live-shopping_2.png)

5. Accede a **Storefront > Layout**, o ingresa **Layout** en la barra de búsqueda de la parte superior de la página.
6. Haz clic en **CMS > HTML Templates**.
7. Pega el código en el archivo HTML deseado.

## Headless CMS

En tiendas que utilizan [Headless CMS](https://help.vtex.com/es/tutorial/headless-cms-overview--3U5gvhHdQL0jczYH8gjX09), sigue los pasos a continuación para agregar el componente de **Live Shopping**: 

1. En la página **Información del evento** del [evento creado](https://help.vtex.com/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv), haz clic en el ícono de flecha.
2. Accede a la sección **Configuración CMS**.
3. En **Script para plantilla**, selecciona `Plantilla externa`.
4. Copia el código en **Script para plantilla**.

  ![article_4_headless_cms_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/omnichannel/vtex-live-shopping-primeros-pasos/insertar-componente-de-live-shopping_3.png)

5. Pega el código en el archivo HTML deseado.

> ❗ Después de configurar el evento, puedes acceder a una vista previa haciendo clic en el botón [Vista previa](https://help.vtex.com/es/tracks/vtex-live-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/125yr6jAfwiiz84JP4ppfO#preview). Sin embargo, como esta vista previa muestra únicamente ciertos componentes de **Live Shopping**, te recomendamos realizar una revisión completa de todo el sitio web para confirmar que todo funcione correctamente.
