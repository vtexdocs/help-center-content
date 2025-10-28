---
title: 'Insertar componente de Live Shopping'
id: 4r5uk6XHxdYlOGMr11GFWR
status: PUBLISHED
createdAt: 2025-07-23T17:54:26.773Z
updatedAt: 2025-10-24T13:26:35.877Z
publishedAt: 2025-10-24T13:26:35.877Z
firstPublishedAt: 2025-07-28T15:07:46.555Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: placing-the-live-shopping-component
locale: es
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-primeros-pasos
order: 4
---

Una vez que tu evento esté [configurado en Bundle](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/3GKzrP9nkyRwpUyyeYUaeX) o en un estudio externo y antes de empezar la transmisión, tienes que agregar el componente de **Live Shopping** en tu sitio web, ya sea en la página de inicio de la tienda o en la [landing page](/es/tutorial/live-shopping-configurar-landing-page-para-transmisiones-en-vivo--4iBDPEpXyKSfoIqUdwHGFE). La configuración varía dependiendo de la solución de frontend de tu tienda:

* [Store Framework (VTEX IO)](#store-framework-vtex-io)
* [CMS - Portal Legado](#cms-portal-legado)
* [Headless CMS](#headless-cms)
* [FastStore](#faststore)

> ⚠️ Después de configurar el componente de **Live Shopping**, los cambios pueden tardar entre cinco y diez minutos en reflejarse en el storefront debido a la caché.

## Store Framework (VTEX IO)

En tiendas que utilizan [Store Framework](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework), sigue estos pasos para agregar el componente de **Live Shopping** desde [Site Editor](/es/tutorial/gestionar-contenido-de-paginas-y-templates--3tMbx6HXy4Fy5r9EhboG37): 

1. En el Admin VTEX, accede a **Storefront > Site Editor**, o ingresa **Site Editor** en la barra de búsqueda en la parte superior de la página.
2. En la **lista de Bloques** en el lado derecho de la página, selecciona **Live Shopping**.
3. Activa la <i class="fas fa-toggle-on" aria-hidden="true"></i> opción `Mostrar componente`.
4. Haz clic en el menú desplegable de **Eventos (en vivo)** y selecciona el evento deseado. Las opciones mostradas solo incluyen eventos con [status](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#status-del-evento) `En vivo`.
5. Haz clic en `Guardar`.

## CMS - Portal Legado

En tiendas que utilizan [CMS - Portal Legado](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), sigue los pasos a continuación para agregar el componente de **Live Shopping**: 

1. En la página **Información del evento** del [evento creado](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv), haz clic en el ícono de flecha.
2. Después de [activar el evento](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq), accede a la sección **Configuración CMS**.
3. En **Script para plantilla**, selecciona `Plantilla CMS`.
4. Copia el código en **Script para plantilla**.

  ![article_4_legacy_cms_portal_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/omnichannel/vtex-live-shopping-primeros-pasos/insertar-componente-de-live-shopping_1.png)

5. Accede a **Storefront > Layout**, o ingresa **Layout** en la barra de búsqueda de la parte superior de la página.
6. Haz clic en **CMS > HTML Templates**.
7. Pega el código en el archivo HTML deseado.

## Headless CMS

En tiendas que utilizan [Headless CMS](/es/tutorial/headless-cms-vision-general--3U5gvhHdQL0jczYH8gjX09), sigue los pasos a continuación para agregar el componente de **Live Shopping**: 

1. En la página **Información del evento** del [evento creado](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv), haz clic en el ícono de flecha.
2. Accede a la sección **Configuración CMS**.
3. En **Script para plantilla**, selecciona `Plantilla externa`.
4. Copia el código en **Script para plantilla**.

  ![article_4_headless_cms_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/omnichannel/vtex-live-shopping-primeros-pasos/insertar-componente-de-live-shopping_2.png)

5. Pega el código en el archivo HTML deseado.

> ❗ Después de configurar el evento, puedes acceder a una vista previa haciendo clic en el botón [Vista previa](/es/tracks/vtex-live-shopping-primeros-pasos--3eCHNCIx8XhZOSmX0sQT3U/125yr6jAfwiiz84JP4ppfO#vista-previa). Sin embargo, como esta vista previa muestra únicamente ciertos componentes de **Live Shopping**, te recomendamos realizar una revisión completa de todo el sitio web para confirmar que todo funcione correctamente.

## FastStore

Para insertar el componente de **Live Shopping** en tu proyecto sigue los pasos a continuación:

> ℹ️ Esta funcionalidad está disponible como solución nativa en la versión más reciente de FastStore. Si tu storefront utiliza [FastStore v1 o v2](https://developers.vtex.com/docs/guides/faststore/getting-started-faststore-versions-and-support-levels), consulta la guía [Implementing Live Shopping for FastStore previous versions](https://developers.vtex.com/docs/guides/faststore/storefront-features-implementing-live-shopping-for-faststore-previous-versions).

1. En el Admin VTEX, accede a **Apps > Live Shopping > Eventos**, o ingresa **Eventos** en la barra de búsqueda en la parte superior de la página.
2. En la columna **Acciones**, haz clic en la flecha para ir a la [página del evento](/es/tutorial/live-shopping-events--6aGLiqoKG1UoS30f3FFWch).
3. En la sección **Detalles**, copia el valor `ID`, un código único compuesto por números y letras. Puedes utilizar el botón `Copiar al portapapeles`.
4. Accede a **Storefront > Headless CMS**, o ingresa **Headless CMS** en la barra de búsqueda en la parte superior de la página.
5. Selecciona la página en la que quieres insertar el componente **Live Shopping Player**.
6. En la pestaña `Secciones`, agrega el reproductor haciendo clic en `+` **Agregar sección** en el lugar deseado.
7. En la ventana **Agregar sección**, haz clic en **Live Shopping Player**.
8. En el campo **Live Shopping Player**, pega el valor ID que copiaste. 
9. Haz clic en `Guardar`.
10. Cuando sea el momento de mostrar el reproductor en el storefront, haz clic en **Publicar > Publicar ahora**.
11. (Opcional) Si la versión de la página había sido publicada anteriormente y se abre la ventana **Sustituir versión publicada**, haz clic en **Sustituir**.

Después de unos momentos, el deploy finalizará y el status en la sección **Versiones** cambiará a `Publicado`.
