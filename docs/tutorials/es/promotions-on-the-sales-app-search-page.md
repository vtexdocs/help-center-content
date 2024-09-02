---
title: 'Promociones en la página de búsqueda de Sales App'
id: 2g9JmTLKYASz8jxme2pyc9
status: PUBLISHED
createdAt: 2024-08-19T11:11:42.781Z
updatedAt: 2024-08-20T13:54:03.140Z
publishedAt: 2024-08-20T13:54:03.140Z
firstPublishedAt: 2024-08-20T13:54:03.140Z
contentType: tutorial
productTeam: Shopping
author: 2AhArvGNSPKwUAd8GOz0iU
slug: promociones-en-la-pagina-de-busqueda-de-sales-app
locale: es
legacySlug: promociones-en-la-pagina-de-busqueda-de-sales-app
subcategory: 4T6qfa6gNO6g4sAUIa6s2G
---

La funcionalidad de [promociones](https://help.vtex.com/es/tutorial/lista-de-promocoes-beta--4yB7nNdliiFxBTXE19GCIi#criar-promocoes) en la página de búsqueda de [Sales App](https://help.vtex.com/es/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6cq4E1JCmA6vCvBCCtAgIM) ha sido creada para retailers que quieran resaltar ofertas especiales directamente en los resultados de búsqueda de la Página de Listado de Productos (PLP). Esto proporciona una mejor experiencia de compra, fomenta la interacción con los clientes y aumenta la visibilidad de los productos que contienen múltiples promociones.

Para que una promoción se refleje correctamente en Sales App es necesario:

- Resaltar la promoción cuando la crees en el Admin VTEX. Solo las promociones resaltadas se mostrarán en Sales App.
- Insertar un campo llamado `salesAppHighlight` con el valor `true` en la sección de **información adicional** para resaltar la promoción en la imagen del producto.
- Insertar un campo en la sección de **información adicional** con el nombre `salesAppDisplayName` y como valor, agrega el texto que sobrescribirá el nombre predeterminado de la promoción mostrada en la página de búsqueda. Por ejemplo, "Envío gratis".

<div class = "alert alert-info">
Si deseas que la promoción sea exclusiva para la aplicación Sales App, es necesario configurar la <a href="https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV">política comercial</A> específica para Sales App.
</div>

Cuando un producto tiene múltiples promociones asociadas, el vendedor de una tienda física puede ver todas las opciones haciendo clic en la tag de la promoción mostrada en los resultados de búsqueda.

La siguiente imagen ilustra una promoción disponible en la Página de Listado de Productos (PLP).

![promoção em destaque](//images.ctfassets.net/alneenqid6w5/2YpcrGEb1eHZ0IFeOzvAj4/4100ae92c199a78d0146497191ab0b9a/promo__o_em_destaque.png)

