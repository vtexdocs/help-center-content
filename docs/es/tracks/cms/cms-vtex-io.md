---
title: 'Store Framework CMS'
id: 4yB9wSl79cArd68aRBnBZ2
status: PUBLISHED
createdAt: 2022-01-10T17:28:27.583Z
updatedAt: 2024-11-18T18:06:20.182Z
publishedAt: 2024-11-18T18:06:20.182Z
firstPublishedAt: 2022-01-10T20:13:28.409Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: cms-vtex-io
locale: es
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugES: cms
---

Las tiendas desarrolladas con Store Framework tienen integración con [Site Editor](https://developers.vtex.com/docs/guides/working-with-site-editor), que funciona como un sistema de gestión de contenido o CMS (content management system). Además, dispone de otras funcionalidades, como la gestión de Páginas, Estilos y Banners.

Para construir y configurar el sitio web de tu tienda Store Framework mediante el CMS, tienes a disposición los siguientes recursos:

- [Site Editor](#site-editor)
- [Layout - Sites and channels](#layout-sites-and-channels)
- [Banners](#banners)
- [Páginas](#paginas)
- [Estilos](#estilos)
- [Multimedia](#multimedia)

## Site Editor

**[Site Editor](https://help.vtex.com/es/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1)** es una interfaz gráfica para gestionar el contenido del storefront. Te permite crear, editar, publicar y programar cambios en los componentes y el comportamiento de tu storefront.

En el Admin VTEX, Site Editor cuenta con una interfaz intuitiva que muestra los bloques definidos en el [Store Theme](https://developers.vtex.com/docs/guides/vtex-io-documentation-store-theme). Esto permite que cualquier persona pueda modificar el contenido y layout de la tienda fácilmente, sin necesidad de editar el código.

![site-editor-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/cms/cms-vtex-io_1.png)

## Layout - Sites and channels

Las tiendas desarrolladas con Store Framework también deben configurar el [binding de la tienda](https://help.vtex.com/es/tutorial/what-is-cms-layout--EmO8u2WBj2W4MUQCS8262#binding) a través de la carpeta **[Sites and channels](https://help.vtex.com/es/tutorial/o-que-e-o-cms-layout--EmO8u2WBj2W4MUQCS8262#sites-and-channels)** en la sección **Layout** del Admin VTEX.

Binding es el proceso utilizado para vincular tu sitio web a una tienda. Para más detalles, consulta el artículo [Vincular una tienda a una estructura de carpetas en CMS (binding)] (https://help.vtex.com/es/tutorial/vincular-um-account-name-a-um-website-binding).

![layout-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/cms/cms-vtex-io_2.png)

>ℹ️ A excepción de la carpeta **Sites and channels**, todas las demás funcionalidades de la sección **Layout** del Admin VTEX solo están disponibles para tiendas CMS Portal Legado. 

## Banners

Banners es la funcionalidad de Intelligent Search que muestra banners, como acciones promocionales, en la página de resultados de búsqueda del cliente. Esto se realiza mediante la asociación entre las palabras y los filtros seleccionados en la búsqueda, y mediante la configuración de banners en tu tienda.

Para saber más sobre este módulo, consulta el tutorial [Banners](https://help.vtex.com/es/v4/docs/banners--51nNoJABZ5NtvJQCucCXCy).

## Páginas

El módulo **Páginas** es donde se gestionan las páginas de tu sitio web. En el Admin VTEX, las páginas se dividen en **Predeterminado**, **Producto**, **Colecciones de productos** y **No encontrado (404)**, en las que puedes crear nuevas URL y vincularlas a un template ya definido en el [código del tema de la tienda](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-4-configuringtemplates).

![cms-store-framework-paginas-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/cms/cms-vtex-io_3.gif)

Esta sección también contiene la página **Redirecciones**, que permite configurar redirecciones desde la URL de una tienda a otra más relevante. 

![cms-store-framework-redirecionamentos-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/cms/cms-vtex-io_4.png)

Para más información sobre este módulo, consulta el tutorial [Páginas](https://help.vtex.com/es/tutorial/paginas-visao-geral--5iBUUJbK5NqG6OxlDrGNzc).

## Estilos

Esta funcionalidad te permite definir la tipografía y la paleta de colores del sitio web de tu tienda.

>⚠️ Este recurso solo funciona en [workspaces de producción](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-creating-a-production-workspace).

Para saber más sobre este módulo, consulta el tutorial [Estilos](https://help.vtex.com/es/tutorial/estilos-visao-geral--v0Db5ohEKSFIkTzSwCjVi).

## Multimedia

En el módulo Multimedia puedes gestionar los archivos multimedia de tu tienda, como imágenes y videos.

![cms-store-framework-media-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/cms/cms-vtex-io_5.png)

Para saber más sobre este módulo, consulta el tutorial [Multimedia - Visión general](https://help.vtex.com/es/tutorial/midia-visao-geral--31fhjHTt4TBoo50AmGQ9b2).

## Más información

- **[Gestionar contenido de páginas y templates](https://help.vtex.com/es/tutorial/gerenciando-conteudo-de-pagina-e-template--3tMbx6HXy4Fy5r9EhboG37):** construye el storefront de tu tienda de acuerdo con las necesidades de tu negocio, utilizando una interfaz amigable.

- **[Gestión de contenidos por binding](https://help.vtex.com/es/tutorial/gerenciando-conteudo-por-binding--5CZjZPMqi0ZNpuqzF6AUOn):** personaliza estratégicamente la apariencia de tu tienda de acuerdo con la región de los usuarios para aumentar el acceso y las tasas de venta.
