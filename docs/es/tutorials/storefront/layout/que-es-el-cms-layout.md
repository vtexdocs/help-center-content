---
title: 'Visión de conjunto de Layout'
id: EmO8u2WBj2W4MUQCS8262
status: PUBLISHED
createdAt: 2019-01-24T20:45:44.730Z
updatedAt: 2023-03-24T13:48:26.495Z
publishedAt: 2023-03-24T13:48:26.495Z
firstPublishedAt: 2019-01-24T22:11:38.588Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 245tA425AIeioKAk2eaiwS
slugEN: what-is-cms-layout
legacySlug: que-es-el-cms
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#cfe2ff; border-left: 2px solid #084298; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-bottom: 10px; padding: 15px">
  Esta funcionalidad está disponible para las tiendas que utilizan la tecnología Portal Legada.
</div>

La sección [Layout](/es/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW) te permite crear tu storefront con HTML y CSS.
## Sites and channels

Si aún no ha creado un Web Site (o desea crear un nuevo), es en ese directorio que debe ir primero. Si ya tiene un Web Site, aquí es donde usted tendrá acceso y administrará toda su estructura de carpetas.

**Sites and channels** es también el lugar donde usted podrá crear y organizar los layouts de su sitio, como veremos más adelante.

<div style="background-color:#cfe2ff; border-left: 2px solid #084298; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-bottom: 10px; padding: 15px">
  Esta función también está disponible para las tiendas que usan Site Editor.
</div>

## Binding

Antes de comenzar a organizar el contenido de su Web Site, este Web Site debe estar vinculado a un account name. De esta forma, el sistema entiende dónde se va a aplicar toda la información agregada o modificada en las carpetas, archivos o código del Web Site.

Este es un proceso fundamental para el perfecto funcionamiento de su tienda, pero también es muy simple. Sólo tienes que seguir los pasos [de este artículo](/es/tutorial/vincular-un-account-name-a-un-website-binding).

![Binding](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/que-es-el-cms-layout_1.png)

## Layouts y templates

Con su Web Site creado y vinculado a un account name, usted tendrá que definir templates y layouts.

- **Template**: aquí es donde se encuentra el código propiamente dicho. Entre otras cosas, es él quien determina cómo las informaciones van a aparecer en la pantalla, incluso la posición en que los placeholders van a aparecer. Los templates se reúnen en las carpetas **HTML Templates** y **Shelves Templates** (Templates de estante).
- **Layout**: es responsable de determinar qué elementos aparecen en una página. Es él quien configura los placeholders (elementos como banners, colecciones y otros), que serán exhibidos para el usuario final. Para funcionar, cada layout debe estar vinculado a un solo template. Usted encontrará los layouts de su Web Site organizados por carpetas en el directorio **Sites and Channels**.

## Placeholders

Son elementos (Banner DHTML, HTML, Colección, Banner, Productos relacionados) que pueden o no ser usados en las páginas de su Web Site. Se configuran en los layouts (que se almacenan en el directorio **Sites and Channels**), pero su posición en la página está determinada por el código presente en los templates (almacenados en el directorio **HTML Templates**).

El layout define qué placeholders se van a utilizar, y lo que muestran, pero es el código (es decir, el template) que va a decir dónde aparecen en la página.

## Colección
Para el CMS, las colecciones son placeholders que muestran grupos de productos (product clusters) en una página determinada. Estos grupos deben definirse en el directorio **Product Clusters (Collections)**.

## Controles
Los controles nativos de VTEX representan varias funcionalidades útiles y replicables en los templates de su sitio. Por ejemplo, al insertar el control `<vtex.cmc:productName/>` en su página de producto, el sistema mostrará automáticamente el nombre del producto.

Usted puede ver la lista completa de controles nativos para templates [en este artículo](/es/tutorial/lista-de-controles-para-templates).

## Custom Elements
Además de los controles nativos de VTEX, el sistema le permite crear controles personalizados. Se almacenan en el directorio Custom Elements, y se pueden usar en cualquier template, al igual que los controles nativos.

## URL Builder
En esta sección usted puede construir URLs más amigables, haciendo que las páginas de su sitio sean más fáciles de encontrar por el usuario.

## Files Manager
Para administrar los archivos de su sitio Web, usted puede acceder a este directorio. En él, puede agregar, borrar y modificar archivos CSS, JavaScript, XML e imágenes.

## Referencias
- [Layout](/es/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW)
- [Configuración](/es/subcategory/configuracion-de-cms--6kovkwzMRyeOOc2iEC4suM)
- [Estructura de las carpetas del Layout](/es/tutorial/cms-folder-structure--2RdMaJSv4AK4EyscmQuocu?&utm_source=autocomplete)
- [Lista de controles para plantillas](/es/tutorial/list-of-controls-for-templates--tutorials_563)
- [¿Qué son las plantillas?](/es/tutorial/o-que-sao-templates--4l7BQBYO9ycumsqua2CU88?&utm_source=autocomplete)
- [¿Qué es un sitio web?](/es/tutorial/o-que-e-um-web-site--5sPUdFEv9C02i0MMqqSo0U?&utm_source=autocomplete)
- [¿Qué son los controles?](/es/tutorial/o-que-sao-controles--6e2qsk9zu8IQuyEysKweag?&utm_source=autocomplete)
- [¿Qué son los layouts?](/es/tutorial/o-que-sao-layouts--CckPh00rZIcIUG60y8Gse?&utm_source=autocomplete)
- [¿Qué son los estantes?](/es/tutorial/o-que-sao-prateleiras--28D8d6GFfuAsuAoeWC8eq0?&utm_source=autocomplete)
- [¿Qué es binding?](/es/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W?&utm_source=autocomplete)

### Guías
- **[Crear o editar una plantilla de página](/es/tutorial/como-criar-um-template-de-pagina--frequentlyAskedQuestions_1850):** Aprende a crear plantillas de página. La plantilla de página es un modelo creado para definir una estructura HTML para presentar el contenido de las páginas.

- **[Asociar una plantilla a un layout](/en/tutorial/associando-um-template-a-um-layout--7CkgOHRj7DVbsRxyR8YQrK?&utm_source=autocomplete):** Asocia una plantilla a un layout utilizando la carpeta Sites and Channels.

- **[Gestión de placeholders](/es/tutorial/gerenciandoplaceholders--29Y7r9JqcWIqmGipReGLQI):** Un placeholder es un fragmento de código configurable que atiende a las condiciones establecidas por la tienda. Inserta y configura un placeholder, por ejemplo un banner en tu tienda.

- **[Uso de controles nativos de VTEX](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/7mGkGmo8l6wf4fXJCkWwPi?&utm_source=autocomplete):** Los controles son fragmentos de código que puedes utilizar en las plantillas de tu sitio web para realizar acciones específicas, por ejemplo, un control en una página de producto para mostrar el nombre del producto en la pantalla.

- **[¿Para qué sirve el Control Personalizado?](/es/tutorial/what-is-the-purpose-of-the-customized-control--frequentlyAskedQuestions_627):** Además de los controles nativos de VTEX, puedes crear tus propios controles.

### Controles
- [Lista de controles para templates](/es/tutorial/lista-de-controles-para-templates)
- [Control de búsqueda - fulltextSearchBox](/es/tutorial/controle-de-busca-fulltextsearchbox--tutorials_549?&utm_source=autocomplete)
- [Control de destaque de la colección](/es/tutorial/controle-de-destaque-de-colecao--1tGdb2ndjqy6yWsk2YwKMu?&utm_source=autocomplete)
- [Control de breadcrumbs](/es/tutorial/controle-de-breadcrumb--3qQS5O9XpusAC6oUqSIQMM?&utm_source=autocomplete)
- [Controles de la plantilla de estante](/es/tutorial/controles-do-template-de-prateleira--tutorials_550?&utm_source=autocomplete)
