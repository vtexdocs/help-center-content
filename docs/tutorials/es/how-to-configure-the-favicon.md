---
title: 'Configurar el favicon'
id: tutorials_6370
status: PUBLISHED
createdAt: 2017-04-27T21:48:57.080Z
updatedAt: 2020-07-09T15:57:35.902Z
publishedAt: 2020-07-09T15:57:35.902Z
firstPublishedAt: 2017-04-27T23:11:18.833Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_31
slug: como-configurar-el-favicon
locale: es
legacySlug: como-configurar-el-favicon
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

El favicon es el icono exhibido en la pestaña del browser, al lado del título de la página. El browser carga esa imagen a partir del elemento `<link rel="shortcut icon">` que referencia una imagem con extensión `.ico`.

Ejemplo:

![favicon_2](https://images.contentful.com/alneenqid6w5/2azvX7m3asGckkU6c8WAcM/2e66d9a107c0394c3f1a63afff7f3149/favicon_2-1024x537.png "Favicon 2")

Utilicé Google como ejemplo solamente para reforzar que ese recurso no es exclusivo de VTEX y se puede utilizarlo en cualquier contenido reproducido en un browser. Lea más sobre este asunto en Google. 🙂

### Favicon en VTEX

En VTEX, para asegurar que el favicon esté cargado durante toda la navegación del cliente (portal, checkout y orderPlaced), las buenas prácticas indican que los templates se configuren con el elemento `<link>`; dentro do `<head>`, de la siguiente forma:

`<link rel="shortcut icon" href="/arquivos/**{NOMBREDELATIENDA}**-favicon.ico" />`

**Obs.:** En el portal (/admin/a/) es posible configurar el favicon en otro patrón de URLs (por ejemplo, otro nombre de archivo). Sin embargo, como el Checkout y el OrderPlaced cargan la URL en ese patrón, lo indicado es cargar también en el portal de la misma manera.

**Obs. 2:** La variable `{NOMBREDELATIENDA}` debe ser sustituida por el nombre de la tienda según esté registrado en el Gestión de la cuenta.

![fav](https://images.contentful.com/alneenqid6w5/6j5eZzVMEE6E2KgqGgsOwU/c2292316f75f3620cd870c96df9e65fc/fav-1024x554.png)
