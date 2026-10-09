---
title: 'Controles para mostrar el nombre de la marca'
id: 4WF5ZfVXcIkykGCICkeQYy
status: PUBLISHED
createdAt: 2018-02-26T13:36:50.601Z
updatedAt: 2019-12-31T15:21:09.686Z
publishedAt: 2019-12-31T15:21:09.686Z
firstPublishedAt: 2018-02-26T14:13:31.398Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: controls-for-displaying-the-brand-name
legacySlug: controles-para-mostrar-el-nombre-de-la-marca
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Hay dos controles que renderizan el nombre de la marca:
- `$product.BrandName`
- `$product.Brand`

Ambos son controles de estante, es decir, sólo funcionan en páginas que usan templates de estante.

La diferencia entre los dos es la siguiente:

- El control `$product.BrandName` muestra el nombre de la marca como está registrada en el catálogo de la tienda. Por ejemplo, si usted registró una marca como "Jugos Oliveira", al usar este control, el __nombre de la marca__ será renderizado del mismo modo: "Jugos Oliveira". Este control sólo renderiza la string pura. Para manipularla en el front-end, usted puede insertar el control en un elemento HTML, como un div o un span, con la clase que desee.
- El control `$product.Brand` muestra el nombre de la marca en un __formato indicado para componer URLs__. Esto se debe a que los caracteres en mayúsculas se reemplazan por sus equivalentes en caja baja, y los espacios se reemplazan por traza. Por ejemplo, si el nombre de la marca registrada en el catálogo es "Jugos Oliveira", este control va a hacer lo siguiente: "jugos-oliveira". En este caso, el código HTML renderizado tiene el siguiente formato: `<p class="texto brand {brand}">{brand}`, donde {brand} es el nombre de la marca.
