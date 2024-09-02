---
title: 'Agregar texto adicional a la impresión del pedido'
id: 6x3F7K7XfiVoOPsKR9ukUG
status: DRAFT
createdAt: 2020-06-28T19:11:23.042Z
updatedAt: 2021-11-25T14:00:11.896Z
publishedAt: 
firstPublishedAt: 2020-06-28T19:17:44.814Z
contentType: trackArticle
productTeam: Shopping
slug: agregar-texto-adicional-a-la-impresion-del-pedido
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: agregar-texto-adicional-a-la-impresion-del-pedido
---

<div class="alert alert-danger">
Para agregar texto adicional a la impresión del pedido, como explicado en este artículo, es necesario cambiar el archivo JavaScript <code>checkout-instore-custom.js</code>. Esta operación solo debe ser realizada por personas con experiencia en programación. Cambios incorrectos en este archivo pueden causar errores críticos.
</div>

Por defecto, la impresión del resumen del pedido no contiene ningún texto personalizado. Si desea agregar texto adicional a la impresión del pedido, es necesario editar el archivo `checkout-instore-custom.js`.

En este archivo, dentro del objeto `window.INSTORE_CONFIG`, agregue la propiedad `printedOrderExtraText`. El valor de esta propiedad será el nuevo texto impreso. El código debería verse como el siguiente ejemplo:

```json
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Escriba su texto aquí',
}
```

<div class="alert alert-danger">
No elimine ninguna de las otras propiedades presentes en el objeto <code>window.INSTORE_CONFIG</code>, para evitar romper otras funciones.
</div>

Después de volver a cargar inStore, cada vez que un vendedor imprima un pedido, ese texto aparecerá en la impresión.

## Ejemplo

Antes de agregar texto adicional, la impresión del resumen del pedido tiene el siguiente formato:

![28. Adding extra text to the order print - 1](//images.ctfassets.net/alneenqid6w5/6kSTTkw3pk8A7aiTJXqDJJ/ec86382eb7e27484f3f37a80752a6153/28._Adding_extra_text_to_the_order_print_-_1.png)

En nuestro ejemplo, cambiamos el archivo `checkout-instore-custom.js` insertando el siguiente texto adicional:

```json
window.INSTORE_CONFIG = {
  printedOrderExtraText: 'Esta nota não tem validade fiscal',
}
```

Ahora, cada vez que se imprima un resumen del pedido, obtendremos el siguiente resultado:

![28. Adding extra text to the order print - 2](//images.ctfassets.net/alneenqid6w5/1g4wvz3z8tIEZuRSSiACps/c227091af9a69d0af04d21c2b6b0b8d3/28._Adding_extra_text_to_the_order_print_-_2.png)
