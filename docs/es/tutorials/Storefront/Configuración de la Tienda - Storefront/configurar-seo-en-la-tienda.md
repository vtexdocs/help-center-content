---
title: 'Configurar SEO en la tienda Store Framework'
id: 1sKskEsjUSvgHyqM8oknVR
status: PUBLISHED
createdAt: 2024-04-29T19:07:56.533Z
updatedAt: 2024-09-02T16:13:57.395Z
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

SEO (Search Engine Optimization) es una de las estrategias más importantes para que tu sitio web logre un buen posicionamiento orgánico en las páginas de resultados de los motores de búsqueda. La configuración de tags, metatags y faviconos es parte del conjunto de estrategias para optimizar el desempeño de tu sitio web.

La tag de título ayuda a definir el tema de la página para los motores de búsqueda e influye directamente en los clics de los usuarios en los resultados de búsqueda. La tag de descripción les da a los usuarios una idea de lo que pueden encontrar en el sitio web. La metatag robots controla el comportamiento de rastreo e indexación de los mecanismos de búsqueda.

En todas las tiendas VTEX IO se pueden configurar estos parámetros de forma nativa siguiendo los pasos descritos a continuación.

### Instrucciones

#### Tag de título, tag de descripción y metatag robots

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Tienda**.
2. Haz clic en la pestaña **General**.
3. Rellena los campos según se describe a continuación:

  - **Nombre de la tienda**: ingresa el nombre de tu tienda.
  - **Activar la configuración por vinculación**: esta opción solo es válida para tiendas que tienen varios bindings. Activarla te permite configurar ajustes específicos de tags y metatags para cada binding de la tienda. Las tiendas que tienen un solo binding no tienen que activar esta opción.
  - **Tag de título predeterminada**: ingresa una descripción breve y que incluya palabras clave relevantes. El valor de esta tag aparece en la parte superior de la barra de título del navegador cuando alguien visita una página del sitio web de tu tienda.
  - **Metatag de descripción**: ingresa una descripción breve del contenido de la página que sea informativa y contenga palabras clave relevantes.
  - **Metatag robots**: define cómo los motores de búsqueda deben rastrear e indexar una página específica. Los valores predeterminados son `index, follow`. Para ver los otros valores compatibles con Google, consulta la [lista de reglas válidas](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=es-419#directives).

  ![seo-es](//images.ctfassets.net/alneenqid6w5/4JajNswh0yiVmfWvsPWbEa/614ecc04bb0994fbab579bc917aeaafa/seo-es.png)

#### Faviconos

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Tienda**.
2. Haz clic en la pestaña **General**.
3. Haz clic en **Agregar**.

  ![favicon-es](//images.ctfassets.net/alneenqid6w5/3NtSCr6cKVn7dDqsXn8jBN/1befbd1af3f398f6ef7d7bc575f32f5b/favicons-es.png)

4. Rellena la pantalla que se abre según se describe a continuación:

     - **Relación del favicono**: define la relación entre la URL configurada en el campo *Href del favicono* y el favicono del sitio web. Por ejemplo, asignar el valor `icon` indica que la URL configurada está relacionada al ícono del sitio web.
     - **Tipo de multimedia del favicono** (opcional): especifica el tipo del favicono siguiendo los estándares de HTML y de W3C. Para más información, consulta la documentación [HTML Favicon](https://www.w3schools.com/html/html_favicon.asp).
     - **Tamaño del favicono** (opcional): indica las dimensiones del favicono en formato {anchura}x{altura}. Por ejemplo: 180x180.
     - **Href del favicono**: ingresa la URL completa que apunta al lugar donde se almacena el archivo del favicono.

    A continuación se muestra un ejemplo:

    ![relacao-favicon-es](//images.ctfassets.net/alneenqid6w5/4gJkfubRqf9lhtRiryrMMA/a400fa8cb893d6012d400210198b3963/relacao-favicon-es.png)

5. Haz clic en **Aplicar** para que la configuración se refleje en tu tienda. Esto puede demorar unos minutos.

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">El campo <strong>Ruta del término de búsqueda</strong> es un ajuste heredado que era compatible con <code>vtex.search-resolver@0.x</code>.
</div>
