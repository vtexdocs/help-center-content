---
title: 'Configurar el favicono de tu tienda'
id: tutorials_6370
status: PUBLISHED
createdAt: 2017-04-27T21:48:57.080Z
updatedAt: 2024-09-23T20:18:14.557Z
publishedAt: 2024-09-23T20:18:14.557Z
firstPublishedAt: 2017-04-27T23:11:18.833Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_31
slugEN: configuring-favicon-in-your-store
legacySlug: como-configurar-el-favicon
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ Este tutorial solo es válido para tiendas CMS Portal Legado. Para tiendas desarrolladas con Store Framework, sigue las instrucciones de la sección **Faviconos** de la guía [Configurar SEO en la tienda Store Framework](/es/tutorial/configurar-seo-en-la-tienda--1sKskEsjUSvgHyqM8oknVR#faviconos).

Un favicono es el pequeño ícono asociado a un sitio web que se muestra en la pestaña del navegador al lado del título de la página, en favoritos, en el historial de navegación y en otros lugares donde aparece la dirección del sitio web, como las páginas de resultados de búsqueda.

![favicon-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/configurar-el-favicono-de-tu-tienda_1.png)

El favicono ayuda a los usuarios a identificar rápidamente un sitio web cuando tienen varias pestañas abiertas o cuando consultan sus favoritos, mejorando la experiencia y reforzando la identidad y credibilidad de la marca.

Para configurar el favicono en tiendas CMS Portal Legado, sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Storefront > Layout > CMS > Files Manager > imagens**.

    ![files-manager](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/configurar-el-favicono-de-tu-tienda_2.png)

2. En la segunda columna, haz clic en `Add`.

    ![add-image](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/configurar-el-favicono-de-tu-tienda_3.png)

3. Haz clic en `Browse for file`para agregar el archivo de imagen en formato `.ico`.

    > ⚠️ El nombre del archivo debe seguir el formato ***{storeName}**-favicon.ico*. Sustituye la variable **{storeName}** por el nombre de la tienda registrado en [Gestión de la cuenta](/es/tutorial/gestion-de-la-cuenta--2vhUVOKfCaswqLguT2F9xq).

4. Configura los [templates](/es/tutorial/que-son-templates--4l7BQBYO9ycumsqua2CU88) con el elemento `<link>` dentro de `<head>` como sigue: `<link rel="shortcut icon" href="/arquivos/**{storeName}**-favicon.ico" />`. Debes sustituir la variable `{storeName}` por el nombre de la tienda.

    > ℹ️ Puedes configurar el favicono con otro nombre de archivo. Sin embargo, eso creará una URL con formato diferente. Se recomienda mantener el formato antes mencionado, ya que Checkout y OrderPlaced lo utilizan al cargar la URL.
