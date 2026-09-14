---
title: 'Configurar SEO en tu tienda Store Framework'
id: 1sKskEsjUSvgHyqM8oknVR
status: PUBLISHED
createdAt: 2024-04-29T19:07:56.533Z
updatedAt: 2026-05-04T16:46:05Z
publishedAt: 2024-09-02T16:13:57.395Z
firstPublishedAt: 2024-04-29T19:26:31.511Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: YRJ73j8mt38D5TUleocQB
slugEN: configuring-seo-in-your-store
legacySlug: configurar-seo-en-la-tienda
locale: es
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

> ⚠️ Tutorial válido solo para tiendas Store Framework. Para tiendas desarrolladas con CMS Portal (Legado) sigue las instrucciones de la guía [Configurar el favicono en tu tienda](/es/docs/tutorials/configurar-el-favicono-de-tu-tienda)

El SEO (Search Engine Optimization) es una de las estrategias más importantes para lograr un buen posicionamiento orgánico del sitio web en las páginas de resultados de los buscadores. Configurar tags, metatags y faviconos es parte de este conjunto de estrategias para optimizar el desempeño de tu sitio web.

La tag de título ayuda a definir el tema de la página para los buscadores e influye directamente en los clics de los usuarios en los resultados de búsqueda. Por otro lado, la tag de descripción les da a los usuarios una idea de lo que pueden encontrar en el sitio web. La metatag robots controla el comportamiento de rastreo e indexación de los mecanismos de búsqueda.

En todas las tiendas desarrolladas con Store Framework pueden configurarse estos parámetros de manera nativa, siguiendo los pasos a continuación.

### Instrucciones

#### Tag de título, tag de descripción y metatag robots

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Tienda**.
2. Haz clic en la pestaña **General**.
3. Llena los campos según se describe a continuación:
  - **Nombre de la tienda:** ingresa el nombre de tu tienda.
  - **Activar la configuración por vinculación:** esta configuración solo es válida para tiendas con múltiples [bindings](/es/docs/tutorials/que-es-binding). Al activar esta opción pueden configurarse tags y metadatos específicos para cada binding de la tienda. Las tiendas que tienen un solo binding no tienen que activar esta opción.
  - **Tag de título predeterminada:** ingresa una descripción concisa que incluya palabras clave relevantes. El valor de esta tag aparece en la parte superior de la barra de título del navegador cuando alguien visita una página del sitio web de tu tienda.
  - **Tag de metadescripción:** ingresa una descripción breve del contenido de la página. Debe ser informativa y contener palabras clave relevantes.
  - **Metatag robots:** define cómo los buscadores deben rastrear e indexar una página específica. Los valores predeterminados son `index, follow`. Para ver los otros valores compatibles con Google, consulta la [lista de reglas válidas](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=es-419#directives).

  ![seo-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/configuración-de-la-tienda---storefront/configurar-seo-en-la-tienda_1.png)

### Faviconos

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Tienda**.
2. Haz clic en la pestaña **General**.
3. Haz clic en **Agregar**.

  ![favicon-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/configuración-de-la-tienda---storefront/configurar-seo-en-la-tienda_2.png)

4. Se abrirá una nueva pantalla que debe llenarse según se describe a continuación:

    - **Relación del favicono:** define la relación entre el favicono y la URL configurada en el campo **Href del favicono**. Por ejemplo, asignar el valor `icon` indica que la URL configurada está relacionada con el ícono del sitio web.
    - **Tipo de multimedia del favicono (opcional):** especifica el tipo de favicono, siguiendo los estándares de HTML y W3C. Para más información, consulta la documentación [HTML Favicon](https://www.w3schools.com/html/html_favicon.asp).
    - **Tamaño del favicono (opcional):** indica las dimensiones del favicono en el formato `{anchura}x{altura}`, por ejemplo, `180x180`.
    - **Href del favicono:** ingresa la URL completa que apunta a la ubicación donde se almacena el archivo del favicono.

   Consulta el siguiente ejemplo:

    ![relacao-favicon-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/configuración-de-la-tienda---storefront/configurar-seo-en-la-tienda_3.png)

5. Haz clic en **Aplicar** para que la configuración se refleje en tu tienda. Esto puede demorar unos minutos.

> ℹ️ El campo **Ruta del término de búsqueda** es una configuración heredada que era compatible con `vtex.search-resolver@0.x`.
