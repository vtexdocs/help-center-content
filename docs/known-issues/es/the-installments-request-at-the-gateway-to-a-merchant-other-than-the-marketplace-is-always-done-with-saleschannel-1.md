---
title: 'La solicitud de cuotas en la pasarela a un comerciante distinto del mercado se realiza siempre con salesChannel = 1'
id: Xo2YO6ZM9Jj0ONZjXrrrJ
status: PUBLISHED
createdAt: 2022-03-27T21:08:39.176Z
updatedAt: 2022-11-25T22:05:55.885Z
publishedAt: 2022-11-25T22:05:55.885Z
firstPublishedAt: 2022-03-27T21:08:39.738Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-solicitud-de-cuotas-en-la-pasarela-a-un-comerciante-distinto-del-mercado-se-realiza-siempre-con-saleschannel-1
kiStatus: Backlog
internalReference: 391197
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las solicitudes para obtener cuotas externas en la pasarela a un vendedor distinto del mercado se realizan siempre con salesChannel = 1.
El comportamiento se ha observado en un escenario de Vendedor-Etiqueta Blanca para una cuenta de franquicia, pero también parece aplicable al contexto de los vendedores comunes, al mercado exterior.

**Comportamiento esperado**
Las solicitudes realizadas desde el mercado al gateway/mercader de un vendedor deben seguir la política comercial del punto final de cumplimiento para mantener el contexto.

**comportamiento actual
Aunque el "fulfillment endpoint" se realiza con salesChannel=2, la solicitud de cuotas se realiza en el contexto de salesChannel=1.



## Simulación



1. Elija un vendedor cuyo destino final sea diferente de salesChannel=1
2. Simular un carrito con un artículo de este vendedor
3. Observe la solicitud de pago a plazos que se hace al vendedor de este vendedor.




## Workaround


N/A

