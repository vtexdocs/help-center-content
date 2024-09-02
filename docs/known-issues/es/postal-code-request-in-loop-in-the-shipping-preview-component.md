---
title: 'Solicitud de código postal en bucle en el componente de vista previa del envío'
id: 6pcJyqvZ8u388xg04zJnnw
status: PUBLISHED
createdAt: 2022-07-25T16:47:46.301Z
updatedAt: 2022-11-25T21:51:12.684Z
publishedAt: 2022-11-25T21:51:12.684Z
firstPublishedAt: 2022-07-25T16:47:46.650Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: solicitud-de-codigo-postal-en-bucle-en-el-componente-de-vista-previa-del-envio
locale: es
kiStatus: Backlog
internalReference: 352659
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Después de alternar el código postal unas cuantas veces en el componente de vista previa de envío del carrito, el componente entra en un eterno bucle de peticiones de `/api/checkout/pub/postal-code//`

De este modo, es imposible cambiar el código postal, ya que el componente se queda atascado en el último añadido.



## Simulación


- Ir a la página de pago

- Inserte cualquier código postal, y cambie por otro, repita el cambio unas cuantas veces, hasta que el componente haga un bucle.

- Después de entrar en el bucle, el componente no permite hacer nuevos cambios.



## Workaround


N/A

