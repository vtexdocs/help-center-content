---
title: '¿Cómo puedo cambiar el orden de los productos en la tienda?'
id: 33nmI2G2DN3J334gFcur68
status: DRAFT
createdAt: 2019-03-13T15:49:17.305Z
updatedAt: 2022-09-08T16:42:33.128Z
publishedAt: 
firstPublishedAt: 2019-03-13T15:50:45.091Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 2zh4tqFMxyMCgwaUcsS0O2
slug: como-puedo-cambiar-el-orden-de-los-productos-en-la-tienda
locale: es
legacySlug: como-puedo-cambiar-el-orden-de-los-productos-en-la-tienda
---

Por defecto, VTEX trae los productos en orden de relevancia que tiene en el sitio, o sea, más vendidos y más visitados.

Sin embargo, puede cambiar este orden de dos maneras: a través del campo Score y a través de Querystring.

El funcionamiento del campo Puntuación se explica en el artículo [¿Cómo funciona el campo Score?](https://help.vtex.com/es/tutorial/Cómo-funciona-el-campo-score--1BUZC0mBYEEIUgeQYAKcae "haga clic aquí").

El proceso realizado a través de Querystring es más simple: solo ingrese un parámetro en la URL para cambiar el orden de visualización.

Estes son los parámetros:

- __Menor precio__: `?O=OrderByPriceASC`
- __Mayor precio__: `?O=OrderByPriceDESC`
- __Más vendidos__: `?O=OrderByTopSaleDESC`
- __Mejor evaluados__: `?O=OrderByReviewRateDESC`
- __Orden alfabética A-Z__: `?O=OrderByNameASC`
- __Orden alfabética Z-A__: `?O=OrderByNameDESC`
- __Fecha de lanzamiento (registrada en el producto)__: `?O=OrderByReleaseDateDESC`
- __Mejor descuento__: `?O=OrderByBestDiscountDESC`
- __Peor descuento__: `?O=OrderByBestDiscountASC`

Ejemplo: `http://www.{AccountName}.com.br/{departamento}/{categoria}?O=OrderByPriceASC`

<div class="alert alert-warning">
<strong>Sólo puede utilizar un parámetro de ordenación de productos a la vez.</strong> Por eso, elija el que mejor se adapte a sus necesidades (si lo necesita, puede reemplazar los parámetros utilizados).
</div>
