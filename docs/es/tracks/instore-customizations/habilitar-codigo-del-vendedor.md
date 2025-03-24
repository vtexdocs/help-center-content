---
title: 'Habilitar código del vendedor'
id: 5kNtS80hbBGg58jMeF8CRv
status: ARCHIVED
createdAt: 2021-02-04T11:42:33.284Z
updatedAt: 2021-11-25T13:59:49.170Z
publishedAt: 
firstPublishedAt: 2021-02-26T12:14:28.917Z
contentType: trackArticle
productTeam: Shopping
slugEN: enabling-a-sales-rep-code
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: instore-personalizaciones
---

Asociar una venta a un determinado vendedor es una acción recurrente en múltiples escenarios de la rutina de una tienda física. 

Por lo tanto, una de las opciones de personalización de inStore es cambiar el campo [Observación](https://help.vtex.com/en/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2/8Aj21R8bll0tdrxHWjVOs) — como se explicó en el anterior artículo de esta guía—, para que este componente se convierta en un campo específico para el código del vendedor.

Una vez que se habilite, esta personalización muestra el campo `Vendor` en la parte superior de la página y añade una etapa al flujo de compra: antes del Envío, el vendedor está obligado a identificar esa venta con su código.

>❗ **Atención**: en este caso, no es posible finalizar una venta sin completar el campo `Vendor` con el código del vendedor.

## Editando el archivo Javascript

Para habilitar el código del vendedor, se necesita realizar una alteración en el código JavaScript `checkout-custom-inStore.js` que está guardado en el panel administrativo de VTEX.

>⚠️ Se **recomienda expresamente** que el responsable de modificar el código sea una persona con **experiencia en programación**.  

>ℹ️ El código del vendedor es habilitado **solo** por JavaScript.

En primer lugar, realice los ajustes descritos en el artículo [Habilitar campo de observación en la pantalla de pedido](https://help.vtex.com/es/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2/8Aj21R8bll0tdrxHWjVOs).

Después de seguir estas recomendaciones, acceda al módulo __Configuración de la cuenta__. Luego, vaya a __Configuración de la tienda > Checkout > botón azul con el ícono <i class="fas fa-cog"></i> > Código__.

Al lado derecho de la pantalla, encontrará el archivo `checkout-custom-instore.js`.

![codevendorES.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-customizations/habilitar-codigo-del-vendedor_1.png)

Acceda a este archivo y agregue el siguiente código al objeto `window.INSTORE_CONFIG`:

```json
window.INSTORE_CONFIG = {
  noteAsVendorCode: {
    type: 'input',
    skipValidation: true,
    mask: '^(HE|TU)[A-Za-z0-9]{5,8}$', // Example
  },
}
```

>❗ No remueva ninguna de las otras propiedades del objeto `window.INSTORE_CONFIG`. De lo contrario, las otras funcionalidades de su tienda podrían verse afectadas.

Además, recuerde que el anterior código es solo una opción de configuración.  

Cada responsable debe completar las propiedades del objeto `window.INSTORE_CONFIG_` de acuerdo con el funcionamiento esperado de la personalización para su tienda.

Por último, finalice haciendo clic en el botón azul __Guardar__ que se encuentra en la parte superior de la página.

![codevendor2ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-customizations/habilitar-codigo-del-vendedor_2.png)

## Entendiendo las propiedades

Como mencionamos anteriormente, el objeto `window.INSTORE_CONFIG` se escribe en JavaScript y debe ser editado, preferencialmente, por alguien que tenga experiencia en este lenguaje de programación.

Dicho esto, es importante que señalemos que el objeto está conformado por tres propiedades diferentes: 

- `type`: propriedad responsable por definir el formato del campo `Vendors`. Los valores posibles son `text`, `textarea`, destinados a grandes bloques de texto, e `input`, campo de texto que admite claves simples.

- `skipValidation`: propriedad booleana que activa, o no, la validación realizada por el Master Data. Acepta los valores `true` y `false`.

- `mask`: expresión regular variable que aplica una lógica de validación al valor de la propriedad `type`. Es decir, cada responsable de la edición del objeto `window.INSTORE_CONFIG` puede crear la expresión de la variable que crea más conveniente para el funcionamiento del código del vendedor.

Las combinaciones realizadas a partir de estas tres propiedades permiten diversas opciones de configuración para el código del vendedor.  

