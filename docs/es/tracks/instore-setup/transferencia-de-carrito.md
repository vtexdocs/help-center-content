---
title: 'Transferencia de carrito'
id: 4UOGpAFVOUougwiGQMi4Ca
status: ARCHIVED
createdAt: 2018-06-22T17:12:42.573Z
updatedAt: 2020-08-03T19:58:03.049Z
publishedAt: 
firstPublishedAt: 2018-06-22T18:02:29.060Z
contentType: trackArticle
productTeam: Shopping
slugEN: cart-transfer
locale: es
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

La funcionalidad de __Transferencia de carrito__ permite que una compra iniciada en un dispositivo pueda ser finalizada en cualquier otro dispositivo presente en el flujo de la compra, sin la necesidad de volver a bipar los productos.

Un ejemplo de uso son tiendas en las que el cliente puede ser atendido por más de un vendedor, en ese caso, cada interacción con un vendedor éste añade los productos en un mismo carro en el inStore que va siendo transferido hasta el final de la compra, agilizando el producto el cierre del pedido y facilitando la puesta en marcha de los vendedores involucrados en esa venta, pues quita la necesidad de etiquetas con códigos de identificación de vendedor.

Para activar la __Transferencia de carrito__ en inStore, será necesario editar el archivo `checkout-instore-custom.js` presente en el administrador del Portal. Por tratarse de un JavaScript presente en diversos flujos de uso de la aplicación, es importante que usted tenga conocimientos de programación antes de cambiarlo, para evitar la ruptura de otras funcionalidades.

Dentro del archivo usted necesita encontrar el objeto `window.INSTORE_CONFIG` y añadir la propiedad` transferEnabled` con el valor `true` para habilitar la __Transferencia de carrito__.
No quite ninguna de las otras propiedades presentes en ese objeto, pero el resultado debe ser algo parecido a:

```
window.INSTORE_CONFIG = {
  transferEnabled: true, // Allow transfer carts between devices
}
```

Al realizar este cambio, debe darse cuenta de que aparecerán dos bolitas al final de la página de identificación del inStore:

![01 inStore slider transferencia](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/transferencia-de-carrito_1.png)

Al arrastrar la pantalla hacia el lateral verá la pantalla para __ "Capturar carrito" __:

![02 inStore capturar carrinho](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/transferencia-de-carrito_2.png)

En ella es posible capturar un carrito por el código del carrito, QR code o incluso por vendedor.

Para generar un código o código QR de un carro usted debe usar la opción __ "Transferir" __ presente en el carrito del inStore:

![03 inStore transferir](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/transferencia-de-carrito_3.png)
