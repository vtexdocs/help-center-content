---
title: Habilitar recomendación de producto
id: 321NRjb9YjABQPReJJ5wr2
status: DRAFT
createdAt: 2020-06-28T18:47:06.689Z
updatedAt: 2021-11-25T13:59:58.252Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:55:50.482Z
contentType: trackArticle
productTeam: Shopping
slug: habilitar-recomendacion-de-producto
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: habilitar-recomendacion-de-producto
---

<div class = "alert alert-danger">
El cambio en la configuración de recomendaciones de productos en inStore, explicado en este artículo, implica cambiar los archivos <code>checkout-instore-custom.js</code> y <code>checkout-instore-custom.css</code>. Esta operación solo debe ser realizada por personas con experiencia en programación. Cambios incorrectos en estos archivos pueden causar errores críticos.
</div>

Por defecto, inStore muestra una lista de productos sugeridos al vendedor en dos etapas del pedido:
- En el carrito
- En la página del producto

Si desea ocultar estas recomendaciones, debe editar los archivos `checkout-instore-custom.css` y `checkout-instore-custom.js`.

## Editando el archivo CSS

Al igual que el archivo JavaScript de personalización inStore, se debe acceder a `checkout-instore-custom.css` a través del panel administrativo de VTEX (como se explica en el artículo sobre [personalizaciones en el inStore](https://help.tex.com/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/4mwdBrFsmE2EPE0FzgX28b)).

![25. Enable product recommendations - 1 - ES.png?h=250](//images.ctfassets.net/alneenqid6w5/nEA1Zz5EeltimlFEFSMzy/8f489dd051c79453fd858d5376699c79/25._Enable_product_recommendations_-_1_-_ES.png_h_250)

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

<div class="alert alert-danger">
No elimine ninguna de las otras propiedades presentes en el objeto <code>window.INSTORE_CONFIG</code>, para evitar romper otras funciones.
</div>
