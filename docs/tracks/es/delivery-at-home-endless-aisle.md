---
title: 'Entrega en Casa (estante infinito)'
id: 3361eYHJpKIIQkQYCmqYiO
status: DRAFT
createdAt: 2018-06-22T14:34:27.644Z
updatedAt: 2020-08-03T19:55:44.552Z
publishedAt: 
firstPublishedAt: 2018-06-22T14:36:44.545Z
contentType: trackArticle
productTeam: Shopping
slug: entrega-en-casa-estante-infinito
locale: es
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

Si usted ha configurado su tienda utilizando el flujo del __Easy Setup__ (primer paso de esa track) su inStore ya está funcionando en el modo __Entrega en casa__, permitiendo vender productos del inventario de su e-commerce.

En caso contrario, es necesario realizar un cambio en la configuración del inStore.

Hoy en día esta configuración está presente en el Admin del Portal, más específicamente en el archivo `checkout-instore-custom.js` y por tratarse de un JavaScript presente en diversos flujos de uso de la aplicación, es importante que usted tenga conocimientos de programación antes de cambiar para evitar la ruptura de otras funcionalidades.

Para habilitar la __Entrega en casa__ usted necesita encontrar el objeto `window.INSTORE_CONFIG` presente en ese archivo y agregar la propiedad `shouldCheckIn` con el valor `false` para que inStore pase a considerar el inventario del e-commerce.

No quite ninguna de las otras propiedades presentes en ese objeto, pero el resultado debe ser algo parecido a:

```
window.INSTORE_CONFIG = {
  shouldCheckIn: false, // Allow delivery to home flow
}
```

## Múltiples entregas

En el escenario de __Entrega en casa__ es posible habilitar __Múltiples entregas__ en inStore, es decir, al finalizar una compra es posible definir diferentes tipos de entrega (económica, normal,...) para cada producto del pedido.

Esta es una funcionalidad nueva que además de depender del __Checkout V6__, necesita una configuración interna, por lo que si desea habilitarla en una tienda entre en contacto con VTEX.
