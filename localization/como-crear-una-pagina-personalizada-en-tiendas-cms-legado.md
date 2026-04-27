---
title: "Cómo crear una página personalizada en tiendas CMS Legado"
createdAt: 2026-03-09T16:56:01.751Z
locale: es
slugEN: "creating-a-custom-page-in-legacy-cms-stores"
---

Esta guía describe cómo crear una página personalizada en tiendas desarrolladas con [CMS Portal (Legado)](https://help.vtex.com/es/docs/tracks/cms-portal-legado). Consulta a continuación las instrucciones para configurar una nueva página, asociar una plantilla y vincularla a una URL personalizada.

## Instrucciones

### Configura la plantilla

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. En la sección **Layout**, haz clic en **CMS > HTML Templates**.
3. Decide si deseas:
   * Reutilizar una plantilla existente que ya tenga el layout necesario.
   * Crear una nueva plantilla específica para la página personalizada. Si vas a crear una nueva plantilla sigue las instrucciones de la guía [Crear o editar un template de página](https://help.vtex.com/es/docs/tutorials/como-crear-un-template-de-pagina).
4. Abre la plantilla que se utilizará en la página personalizada y configura la estructura de acuerdo con el diseño deseado:
   * Agrega marcadores de posición o componentes de contenido, como banners, bloques HTML y estanterías de productos.
   * Configura las opciones necesarias, como título, metatags u opciones de layout ofrecidas por los [controles nativos](https://developers.vtex.com/docs/guides/list-of-controls-for-templates) del Portal CMS (Legado).
5. Haz clic en `Save Template` para guardar la plantilla.

> ℹ️ Más información en [¿Qué son templates?](https://help.vtex.com/es/docs/tutorials/que-son-templates)

![new-layout-es](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/es/tutorials/storefront/layout/new-layout-es.png)

### Crea la URL de la página personalizada

Ahora debes crear la ruta URL de la página personalizada:

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. En la sección **Layout**, accede a **CMS > Sites and channels**.
3. Haz clic en el sitio web deseado.
4. Haz clic en la carpeta raíz (`/`).
5. En el lado derecho de la pantalla, haz clic en `new folder`.
6. Llena los campos según se describe a continuación:
   * **Folder Name:** ruta de la URL
   * **Marketing Context (Default):** define si se puede acceder a la página mediante [parámetros UTM](https://help.vtex.com/es/docs/tutorials/que-son-utm-source-utm-campaign-y-utm-medium). Este campo es opcional.
   * **Search Context (Default):** agrega parámetros de búsqueda.
   * **Protocol:** define el protocolo de comunicación entre un servidor web y un navegador web. Recomendado: `HTTPS`.
   * **Cache Type:** define el comportamiento de almacenamiento en caché del navegador. Recomendado: `Local and Remote`.
   * **Authentication Required?:** define si solo se podrá acceder a la página después de la autenticación del usuario. Si esta opción está activada, solamente usuarios autenticados podrán acceder a la página.
7. Haz clic en `Save Folder` para guardar la nueva página.

![new-folder-es](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/es/tutorials/storefront/layout/new-folder-es.gif)

### Crea el layout para la nueva página

Ahora debes crear un layout y asociarlo con la plantilla configurada en el [primer paso](#configura-la-plantilla):

1. Haz clic en la carpeta (folder) creada en el [paso anterior](#crea-la-url-de-la-pagina-personalizada).
2. En el lado derecho de la pantalla, haz clic en `new layout` para crear un nuevo layout.
3. Llena los campos según se describe a continuación:
   * **Layout name:** nombre del layout en el CMS.
   * **Body Class:** (opcional) define una clase CSS aplicada al elemento `<body>` de la página, utilizada para personalizar el estilo en el frontend.
   * **Template:** selecciona la plantilla HTML configurada en el [primer paso](#configura-la-plantilla).
   * **Active:** si marcas la casilla, la página queda activa y visible en la URL.
   * **Default page:** si marcas la casilla, la página se considerará la página predeterminada de esa carpeta (por ejemplo, la página de inicio de un directorio específico).
4. Haz clic en `Save Layout` en la parte superior de la página para guardar el layout.

Para más detalles, consulta la guía [Asociar un template con un layout](https://help.vtex.com/es/docs/tutorials/asociar-un-template-con-un-layout).
