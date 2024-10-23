---
title: 'Agregar texto adicional a la impresión del pedido'
id: 6x3F7K7XfiVoOPsKR9ukUG
status: ARCHIVED
createdAt: 2020-06-28T19:11:23.042Z
updatedAt: 2021-11-25T14:00:11.896Z
publishedAt: 
firstPublishedAt: 2020-06-28T19:17:44.814Z
contentType: trackArticle
productTeam: Shopping
slugEN: adding-extra-text-to-the-order-print
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: agregar-texto-adicional-a-la-impresion-del-pedido
---

>❗ Para agregar texto adicional a la impresión del pedido, como explicado en este artículo, es necesario cambiar el archivo JavaScript `checkout-instore-custom.js`. Esta operación solo debe ser realizada por personas con experiencia en programación. Cambios incorrectos en este archivo pueden causar errores críticos.

Por defecto, la impresión del resumen del pedido no contiene ningún texto personalizado. Si desea agregar texto adicional a la impresión del pedido, es necesario editar el archivo `checkout-instore-custom.js`.

En este archivo, dentro del objeto `window.INSTORE_CONFIG`, agregue la propiedad `printedOrderExtraText`. El valor de esta propiedad será el nuevo texto impreso. El código debería verse como el siguiente ejemplo:

```json
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Escriba su texto aquí',
}
```

>❗ No elimine ninguna de las otras propiedades presentes en el objeto `window.INSTORE_CONFIG`, para evitar romper otras funciones.

Después de volver a cargar inStore, cada vez que un vendedor imprima un pedido, ese texto aparecerá en la impresión.

## Ejemplo

Antes de agregar texto adicional, la impresión del resumen del pedido tiene el siguiente formato:

![28. Adding extra text to the order print - 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/Adding extra text to the order print/agregar-texto-adicional-a-la-impresion-del-pedido_1.png)

En nuestro ejemplo, cambiamos el archivo `checkout-instore-custom.js` insertando el siguiente texto adicional:

```json
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Esta nota não tem validade fiscal',
}
```

Ahora, cada vez que se imprima un resumen del pedido, obtendremos el siguiente resultado:

![28. Adding extra text to the order print - 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/Adding extra text to the order print/agregar-texto-adicional-a-la-impresion-del-pedido_2.png)
