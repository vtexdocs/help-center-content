---
title: 'Puedo ordenar los productos en la página de acuerdo con los criterios de la tienda?'
id: qfWKX2ZekoEoayiyo0uuA
status: ARCHIVED
createdAt: 2019-01-24T20:45:49.100Z
updatedAt: 2022-09-13T15:38:47.301Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:14:24.815Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2zh4tqFMxyMCgwaUcsS0O2
slugEN: can-i-put-my-products-in-an-order-which-i-choose
locale: es
legacySlug: puedo-ordenar-los-productos-en-la-pagina-de-acuerdo-con-los-criterios-de-la
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Por defecto, VTEX trae los productos en orden de relevancia que tiene en el sitio, o sea, más vendidos y más visitados en los últimos treinta días.

Pero, es posible cambiar a través de la Querystring, insertando un parámetro en el link para cambiar la orden de exhibición.

Los parámetros también se pueden usar para redirigir URL específicas a otras URL, como páginas de listado de productos. Para obtener más información sobre esta función, acceda a [Mapeo de URL (redirección 301)](https://help.vtex.com/es/tutorial/mapeamento-de-urls-redirectimento-301--frequentlyAskedQuestions_623).

Estes son los parámetros:

- __Precio (de menor a mayor)__: `?O=OrderByPriceASC`
- __Precio (de mayor a menor)__: `?O=OrderByPriceDESC`
- __Más vendidos__: `?O=OrderByTopSaleDESC`
- __Mejor evaluados__: `?O=OrderByReviewRateDESC`
- __Orden alfabética A-Z__: `?O=OrderByNameASC`
- __Orden alfabética Z-A__: `?O=OrderByNameDESC`
- __Fecha de lanzamiento (registrada en el producto)__: `?O=OrderByReleaseDateDESC`
- __Mejor descuento__: `?O=OrderByBestDiscountDESC`
- __Score (de menor a mayor)__: `?O=OrderByScoreASC`
- __Score (de mayor a menor)__: `?O=OrderByScoreDESC`

Ejemplo: `http://www.{AccountName}.com.br/{departamento}/{categoria}?O=OrderByPriceASC`

## Artículos relacionados
- [Cómo funciona el campo Score?](https://help.vtex.com/es/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae?&utm_source=autocomplete)
- [Mapeo de URL (redirección 301)](https://help.vtex.com/es/tutorial/mapeamento-de-urls-redirecionamento-301--frequentlyAskedQuestions_623)

