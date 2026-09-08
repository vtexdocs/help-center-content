---
title: 'Configurar zoom y miniaturas en tiendas CMS Portal (Legado)'
id: 5ZqoOjGFgIkESq2KyyEYus
status: PUBLISHED
createdAt: 2017-10-12T15:38:58.079Z
updatedAt: 2026-08-13T00:00:00.000Z
publishedAt: 2023-03-24T20:53:11.795Z
firstPublishedAt: 2017-10-12T15:48:58.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: setting-up-zoom-and-thumbnails-in-cms-portal-legacy-stores
legacySlug: configurar-o-tamanho-padrao-da-imagem-de-zoom
locale: es
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

> ⚠️ Este tutorial solo es válido para tiendas CMS Portal (Legado). Para las tiendas desarrolladas con [Store Framework](https://help.vtex.com/es/docs/tracks/implementacion-del-frontend#store-framework), consulta la documentación del componente [Product Images](https://developers.vtex.com/docs/apps/vtex.store-components/productimages).

En tu tienda CMS Portal (Legado), puedes configurar los siguientes efectos de visualización en el storefront directamente en el Admin VTEX:

- [Zoom](#configurar-zoom): amplía la imagen del producto cuando el cliente pasa el mouse sobre ella, lo que permite ver los detalles en un tamaño mayor.
- [Miniaturas](#configurar-miniaturas): versiones reducidas y comprimidas de las imágenes, que se muestran en vitrinas y listas para acelerar la carga de la página.

## Antes de comenzar

Antes de configurar el zoom o las miniaturas en tu tienda, consulta el artículo [Configurar tipos de archivo](/es/docs/tutorials/configurar-tipos-de-archivos) para saber cómo configurar los tipos de archivo.

## Configurar el zoom

Para que el zoom del producto funcione correctamente en tu tienda **CMS Portal (Legado)**, configura el tipo `Producto - Zoom` en **Configuración de la tienda > Storefront > Configuración > Tipos de archivos**. Más información en [Configurar tipos de archivos](/es/docs/tutorials/configurar-tipos-de-archivos).

De forma predeterminada, este tipo suele venir con **1000×1000** píxeles. Esto significa que:

- El zoom resultante muestra la imagen con ese tamaño.
- La imagen registrada en Catálogo debe tener un tamaño **igual o superior** a la configuración de `Producto - Zoom`. Si la imagen es más pequeña, el zoom no se activa (o solo funciona para algunas imágenes).

Antes de realizar el ajuste en **Tipos de archivos**, confirma que el zoom esté activo en la plantilla de la página. Más información en [Activar el zoom del producto en la plantilla de la página](/es/docs/tutorials/activar-el-zoom-del-producto-en-la-plantilla-de-la-pagina).

### Casos de uso

- Cargas una imagen de **1200×1200**. En la página de producto se muestra de **600×600** y, al pasar el mouse, el zoom la amplía a **1000×1000** (valor predeterminado de `Producto - Zoom`).
- Solo tienes imágenes de **800×800**. En ese caso, configura `Producto - Zoom` a **800×800**. En la página de producto la imagen aparece como **600×600** y el zoom la amplía a **800×800**. La ampliación es menor porque el tamaño configurado en `Producto - Zoom` es menor.

## Configurar las miniaturas

Las miniaturas (o thumbnails) permiten la carga rápida de la página y facilitan el reconocimiento de los productos, ya que se pueden mostrar varias en la pantalla al mismo tiempo.

Para esto, las imágenes se redimensionan y comprimen de acuerdo con la configuración del CMS. Si el tamaño del archivo (en KB) es muy bajo, la compresión puede afectar la calidad de la miniatura.

Para que las miniaturas de producto se muestren con una calidad adecuada en tu tienda **CMS Portal (Legado)**, configura el tipo `Producto - Thumb` en **Configuración de la tienda > Storefront > Configuración > Tipos de archivos**. Más información en [Configurar tipos de archivos](/es/docs/tutorials/configurar-tipos-de-archivos).

El campo **Tamaño máximo en KB** de este tipo define el límite de compresión de las miniaturas. Esto significa que:

- Si el valor es muy bajo, las imágenes se comprimen demasiado y la calidad de las miniaturas puede verse afectada.
- Aumentar el **tamaño máximo en KB** reduce la compresión y mejora la calidad visual de las miniaturas. Ajusta el valor hasta conseguir la calidad deseada.