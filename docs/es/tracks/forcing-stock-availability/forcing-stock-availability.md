---
title: 'Forzar disponibilidad de stock'
id: 2SgRUekV8FO4lg2aO6YTmh
status: ARCHIVED
createdAt: 2020-06-28T19:07:00.903Z
updatedAt: 2021-11-25T14:00:08.281Z
publishedAt: 
firstPublishedAt: 2020-06-28T19:11:02.443Z
contentType: trackArticle
productTeam: Shopping
slug: forzar-disponibilidad-de-stock
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: forzar-disponibilidad-de-stock
---

>❗ La configuración para forzar la disponibilidad de stock, explicada en este artículo, implica cambiar el archivo `checkout-instore-custom.js`. Esta operación solo debe ser realizada por personas con experiencia en programación. Cambios incorrectos en este archivo pueden causar errores críticos.

Por defecto, si un SKU no tiene stock en el catálogo de la tienda, no es posible vender ese SKU con inStore.

Sin embargo, hay casos en los que, incluso si el stock se pone a cero, el SKU existe y está disponible en la tienda física. Y es posible que usted desee dar a sus vendedores la capacidad de vender SKUs en esta situación.

inStore lo permite a través de una configuración realizada en el archivo `checkout-instore-custom.js` que habilita la función __Forzar Disponibilidad de Stock__.

Para activar esta función, debe incluir la propiedad `sellWithoutStockInHands` en el objeto `window.INSTORE_CONFIG`, con valor `true`.

El código debería parecerse al siguiente ejemplo:

```json
window.INSTORE_CONFIG = {
  sellWithoutStockInHands: true,
}
```

>❗ No elimine ninguna de las otras propiedades presentes en el objeto `window.INSTORE_CONFIG`, para evitar romper otras funciones.
