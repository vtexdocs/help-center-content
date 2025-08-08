---
title: 'Configurar SEO a través de Headless CMS'
id: 1qaJuB28kOJRfhyaGeezGc
status: PUBLISHED
createdAt: 2025-07-14T16:29:35.269Z
updatedAt: 2025-07-14T16:59:24.399Z
publishedAt: 2025-07-14T16:59:24.399Z
firstPublishedAt: 2025-07-14T16:56:00.498Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: configuring-seo-via-headless-cms
legacySlug: configurar-seo-a-traves-de-headless-cms
locale: es
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

SEO (Search Engine Optimization) es una de las estrategias más importantes para que tu sitio web obtenga buenas posiciones orgánicas en las páginas de resultados de los buscadores.

En tiendas desarrolladas con [FastStore](https://developers.vtex.com/docs/guides/faststore), puedes gestionar la configuración de SEO a través de [Headless CMS](https://help.vtex.com/es/tutorial/headless-cms-visao-geral--3U5gvhHdQL0jczYH8gjX09).

<div class = "alert alert-info">Para tiendas desarrolladas con Store Framework, consulta <a href="https://help.vtex.com/es/tutorial/configurando-seo-em-sua-loja--1sKskEsjUSvgHyqM8oknVR">Configurar SEO en la tienda Store Framework</a>.</div>

## Instrucciones

1. En el Admin VTEX, accede a **Storefront > Headless CMS**.
2. Haz clic en la página deseada.

  <div class = "alert alert-info"><p>Esta configuración está disponible para los   siguientes <a href="https://developers.vtex.com/docs/guides/faststore/headless-cms-3-adding-content-types-and-sections">tipos de contenido</a>: <strong>Product Details Page (PDP)</strong>, <strong> Home</strong> y <strong>Landing Page</strong>.</p></div>

3. Cambia a la pestaña **Settings**.
4. En **SEO** actualiza los campos relacionados. Consulta la lista de campos por tipo de contenido en [Campos de SEO por tipo de contenido](#campos-de-seo-por-tipo-de-contenido).
5. Haz clic en `Guardar` para aplicar los cambios.

### Campos de SEO por tipo de contenido

#### Product Details Page (PDP)

En las páginas del tipo **Product Details Page (PDP)**, los siguientes campos están disponibles para configuración de SEO:

| Campo | Descripción | Ejemplo |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| ID                        | Identificador único que representa la página de un determinado producto. El ID es esencial para que los buscadores reconozcan y distingan cada PDP dentro del sitio web, evitando ambiguedades y garantizando que se indexe cada página de producto por separado.Debe ser un valor descriptivo que se concatenará a la ruta del producto. | - Valor descriptivo: `#producto`<br>• Resultado: `slug-del-producto/p#producto` |
| Main entity of page | Identificador único que representa el elemento más relevante en la página de un producto. Debe ser un valor descriptivo que se concatenará a la ruta del producto. | • Valor descriptivo: `#webpage`<br>• Resultado: `slug-del-producto/p#webpage` |

#### Home

La página **Home** tiene los siguientes campos para configuración de SEO:

| Campo | Descripción | Ejemplo |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Path                        | Ruta de la URL que se utilizará para acceder al sitio web. | `/homepage` |
| Default page title | Título mostrado en la pestaña del navegador y utilizado por los buscadores. Debe ser relevante para el contenido de la página de inicio. | Mi tienda |
| Meta tag description | Descripción resumida de la página que los buscadores muestran en los resultados de búsqueda. | Descubre las mejores ofertas en electrónicos |
| Canonical url for the page | URL canónica usada por los buscadores para determinar la versión principal de la página y evitar problemas de contenido duplicado. | `https://www.mitienda.com` |
| Nombre | Nombre del sitio web. | Mi tienda |
| Publisher ID | Identificador único de la entidad publicadora del contenido de la página. Puede ser un valor descriptivo que se concatenará a la URL de la página de inicio o una URL completa. |  • Valor descriptivo: `#organization`<br>  • URL completa: `https://www.mitienda.com/publisher` |

#### Landing Page

Las páginas de tipo **Landing Page** tienen los siguientes campos para configuración de SEO:

| Campo | Descripción | Ejemplo |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Path                        | Ruta de la URL que se utilizará para acceder a la landing page en el sitio web. | `/slug-de-la-landing-page` |
| Default page title | Título mostrado en la pestaña del navegador y utilizado por los buscadores. Debe ser relevante para el contenido de la página. | FastStore Landing Page |
| Meta tag description | Descripción resumida de la página que los buscadores muestran en los resultados de búsqueda. | Descripción de la landing page |
| Canonical url for the page | URL canónica usada por los buscadores para determinar la versión principal de la página y evitar problemas de contenido duplicado. | `https://www.minhaloja.com` |
