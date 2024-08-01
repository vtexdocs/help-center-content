---
title: 'Habilitar transferencia de carrito entre dispositivos'
id: 1PqUW2NuQzaVxTJp0lBK0r
status: DRAFT
createdAt: 2020-06-28T18:40:36.128Z
updatedAt: 2021-11-25T13:59:54.379Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:46:41.828Z
contentType: trackArticle
productTeam: Shopping
slug: habilitar-transferencia-de-carrito-entre-dispositivos
locale: es
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugES: habilitar-transferencia-de-carrito-entre-dispositivos
---

<div class="alert alert-danger">
La habilitación de la transferencia de carrito, explicada en este artículo, implica cambiar el archivo JavaScript <code>checkout-instore-custom.js</code>. Esta operación solo debe ser realizada por personas con experiencia en programación. Cambios incorrectos en este archivo pueden causar errores críticos.
</div>

La funcionalidad de __Transferencia de Carrito__ de inStore permite que una compra iniciada en un dispositivo se complete en cualquier otro dispositivo presente en el flujo de compra, sin la necesidad de leer otra vez el código de los productos.

Un ejemplo de uso son las tiendas donde el cliente puede ser atendido por más de un vendedor. En este caso, en cada interacción con un vendedor diferente, el vendedor puede agregar productos al mismo carrito utilizado por el vendedor anterior. Este mismo carrito se transfiere entre un vendedor y otro, hasta que se cierre la compra. 

Esto agiliza el pedido y facilita la comisión a los vendedores que participan en la compra, ya que elimina la necesidad de etiquetas con códigos de identificación del vendedor.

Para activar la __Transferencia de Carrito__ en inStore, es necesario editar el archivo `checkout-instore-custom.js`. Dentro del archivo, usted debe encontrar el objeto `window.INSTORE_CONFIG` y agregar la propiedad `transferEnabled` con el valor `true`. No elimine ninguna de las otras propiedades presentes en ese objeto. El resultado debería ser similar a:

```json
window.INSTORE_CONFIG = {
  transferEnabled: true, // Permitir transferencia de carritos entre dispositivos
}
```

Después de realizar este cambio, abra el menú inStore y actualice los datos haciendo clic en el botón __Restaurar Datos__. Una vez hecho esto, aparecerá un slider en la parte inferior de la página de identificación de inStore:

![24. Enable cart transfer between devices - 1 - ES.png?h=250](//images.ctfassets.net/alneenqid6w5/62BOCXeTPeE0Qa4dJQvAWV/01364823bc0b73dd1b8f383215f6602e/24._Enable_cart_transfer_between_devices_-_1_-_ES.png_h_250)

Cuando arrastre la pantalla hacia la derecha, verá la pantalla para __Capturar Carrito__, como se muestra en la imagen a continuación.

![24. Enable cart transfer between devices - 2 - ES.png?h=250](//images.ctfassets.net/alneenqid6w5/7GdTfFFfOFLoogeWZCHThR/0287a10b7fe85ed4fb1cd4a17045fc36/24._Enable_cart_transfer_between_devices_-_2_-_ES.png_h_250)

En esta pantalla, el vendedor puede capturar un carrito utilizando uno de estos tres métodos:
- Código del carrito
- Código QR
- Vendedor

## Compartir un carrito

Para compartir un carrito, el vendedor puede generar un código numérico o un código QR. Para hacer esto, mientras está en la pantalla del carrito, haga clic en el botón __Transferir__. Vea un ejemplo en la imagen a continuación.

![24. Enable cart transfer between devices - 3 - ES.png?h=250](//images.ctfassets.net/alneenqid6w5/lur8HH4iTaiw0KKkq7UHn/90dd5fa5297759372d7cb5c8f083559e/24._Enable_cart_transfer_between_devices_-_3_-_ES.png_h_250)
