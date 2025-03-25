---
title: 'Habilitar recomendación de producto'
id: 321NRjb9YjABQPReJJ5wr2
status: ARCHIVED
createdAt: 2020-06-28T18:47:06.689Z
updatedAt: 2021-11-25T13:59:58.252Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:55:50.482Z
contentType: trackArticle
productTeam: Shopping
slugEN: enabling-product-recommendations
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: habilitar-recomendacion-de-producto
---

>❗ El cambio en la configuración de recomendaciones de productos en inStore, explicado en este artículo, implica cambiar los archivos `checkout-instore-custom.js` y `checkout-instore-custom.css`. Esta operación solo debe ser realizada por personas con experiencia en programación. Cambios incorrectos en estos archivos pueden causar errores críticos.

Por defecto, inStore muestra una lista de productos sugeridos al vendedor en dos etapas del pedido:
- En el carrito
- En la página del producto

Si desea ocultar estas recomendaciones, debe editar los archivos `checkout-instore-custom.css` y `checkout-instore-custom.js`.

## Editando el archivo CSS

Al igual que el archivo JavaScript de personalización inStore, se debe acceder a `checkout-instore-custom.css` a través del panel administrativo de VTEX (como se explica en el artículo sobre [personalizaciones en el inStore](https://help.tex.com/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/4mwdBrFsmE2EPE0FzgX28b)).

![25. Enable product recommendations - 1 - ES.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/enabling-product-recommendations/habilitar-recomendacion-de-producto_1.png)

En el archivo `checkout-instore-custom.css`, incluya la siguiente regla CSS:

```json
#recommendation-shelf {
  display: none;
}
```

Esto oculta el componente de recomendación de productos en el front end.

No olvides guardar el archivo.

## Edición del archivo JavaScript

Además de editar el archivo CSS, es necesario realizar un cambio en el archivo `checkout-instore-custom.js`. Abra este archivo en el Admin de VTEX y, dentro del objeto `window.INSTORE_CONFIG`, agregue la propiedad `adviceEnabled`, con el valor `false`. El código debería verse así:

```json
window.INSTORE_CONFIG = {
  recommendationsEnabled: false, // ocultando recomendaciones (el valor predeterminado para mostrar es true)
}
```

Guarde el archivo con el cambio, luego abra el menú de la aplicación inStore y actualice los datos haciendo clic en el botón __Restaurar datos__. Una vez hecho esto, los vendedores ya no verán recomendaciones de productos.

>❗ No elimine ninguna de las otras propiedades presentes en el objeto `window.INSTORE_CONFIG`, para evitar romper otras funciones.
