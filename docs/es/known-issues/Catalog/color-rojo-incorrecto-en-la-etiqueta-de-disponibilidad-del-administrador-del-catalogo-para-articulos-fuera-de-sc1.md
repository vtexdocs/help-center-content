---
title: "Color rojo incorrecto en la etiqueta de disponibilidad del administrador del catálogo para artículos fuera de sc=1"
id: 16UZBv5zFB2pwSm5WMritS
status: PUBLISHED
createdAt: 2025-04-16T21:43:49.877Z
updatedAt: 2025-04-16T21:43:50.461Z
publishedAt: 2025-04-16T21:43:50.461Z
firstPublishedAt: 2025-04-16T21:43:50.461Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: color-rojo-incorrecto-en-la-etiqueta-de-disponibilidad-del-administrador-del-catalogo-para-articulos-fuera-de-sc1
locale: es
kiStatus: Backlog
internalReference: 1212652
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la pantalla de comprobación de disponibilidad en la administración del catálogo tiene 3 tipos diferentes de color para señalar la disponibilidad de un artículo:

Verde = activo y disponible para la compra
Rojo = activo, pero no disponible para la compra
En blanco = inactivo

Sin embargo, el estado Rojo sólo tiene en cuenta la disponibilidad para el canal de venta por defecto de la tienda (normalmente sc=1). Por lo tanto, si un artículo está disponible para otros canales de venta pero no para el predeterminado, debería seguir mostrando una etiqueta verde, pero en su lugar se muestra como rojo.


##

## Simulación


1 - Para una tienda con múltiples canales de venta, cree un producto con disponibilidad para un canal de venta distinto de sc=1
2 - Compruebe su etiqueta visual de disponibilidad en el catálogo, la que se puede ver en el listado del catálogo

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/color-rojo-incorrecto-en-la-etiqueta-de-disponibilidad-del-administrador-del-catalogo-para-articulos-fuera-de-sc1_1.png)

3 - incluso con el artículo disponible para otros canales de venta, como sc=2, la etiqueta sólo se pondrá verde si está activa y disponible para sc=1.



## Workaround


-





