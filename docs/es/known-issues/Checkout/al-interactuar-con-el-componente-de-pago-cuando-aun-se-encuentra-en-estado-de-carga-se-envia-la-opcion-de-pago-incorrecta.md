---
title: 'Al interactuar con el componente de pago cuando aún se encuentra en estado de carga, se envía la opción de pago incorrecta.'
id: 4kSvM6fti8YfgcUyl4qFJs
status: PUBLISHED
createdAt: 2023-12-12T22:07:58.762Z
updatedAt: 2023-12-12T22:07:59.474Z
publishedAt: 2023-12-12T22:07:59.474Z
firstPublishedAt: 2023-12-12T22:07:59.474Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: interacting-with-the-payment-component-while-is-still-in-a-loading-state-sends-the-wrong-payment-option
locale: es
kiStatus: Backlog
internalReference: 952086
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el comprador cambia el método de pago mientras el componente de pago todavía se está cargando en la página, si el método de pago tiene opciones, el pago enviado al orderForm es incorrecto. Cuando se produce este comportamiento, el pedido no se crea y se muestra un mensaje para revisar la información de pago.


##

## Simulación



- Añada artículos al carrito y muévase hasta los datos de pago;
- Haga clic en un método de pago diferente mientras se carga la página y seleccione otra opción dentro del componente;
- El pago enviado al orderForm es erróneo, siendo la primera opción.



## Workaround


N/A




