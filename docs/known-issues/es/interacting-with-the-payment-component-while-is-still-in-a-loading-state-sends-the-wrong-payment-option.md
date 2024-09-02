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
slug: al-interactuar-con-el-componente-de-pago-cuando-aun-se-encuentra-en-estado-de-carga-se-envia-la-opcion-de-pago-incorrecta
locale: es
kiStatus: Backlog
internalReference: 952086
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el comprador cambia el método de pago mientras el componente de pago todavía se está cargando en la página, si el método de pago tiene opciones, el pago enviado al orderForm es incorrecto. Cuando se produce este comportamiento, el pedido no se crea y se muestra un mensaje para revisar la información de pago.


##

## Simulación



- Añada artículos al carrito y muévase hasta los datos de pago;
- Haga clic en un método de pago diferente mientras se carga la página y seleccione otra opción dentro del componente;
- El pago enviado al orderForm es erróneo, siendo la primera opción.



## Workaround


N/A




