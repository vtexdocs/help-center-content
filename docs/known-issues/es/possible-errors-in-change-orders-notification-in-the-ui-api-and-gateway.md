---
title: 'Posibles errores en la notificación de órdenes de cambio en la interfaz de usuario, la API y la pasarela.'
id: 1UeG6MyFYIUVCnH8kPwNIJ
status: PUBLISHED
createdAt: 2023-12-19T19:37:47.313Z
updatedAt: 2023-12-19T19:37:47.950Z
publishedAt: 2023-12-19T19:37:47.950Z
firstPublishedAt: 2023-12-19T19:37:47.950Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: posibles-errores-en-la-notificacion-de-ordenes-de-cambio-en-la-interfaz-de-usuario-la-api-y-la-pasarela
locale: es
kiStatus: Backlog
internalReference: 955489
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se identificaron algunos problemas en la arquitectura Change Orders V1, donde algunos casos no eran notificados en la interacción de la orden en la UI, no eran notificados en la API Get Orders, sin embargo, había un descuento o incremento en el valor. También hemos visto escenarios donde la notificación ocurre en la UI y API, sin embargo, el descuento o incremento no se realiza en el gateway.


##

## Simulación


No es posible realizar una simulación, ya que los escenarios son esporádicos y generalmente se producen debido a un error de tiempo de espera, para el que ya hemos aumentado el temporizador.



## Workaround


Inicialmente no tenemos una solución, sin embargo, vale la pena mencionar que algunos escenarios podremos ajustarlos manualmente, como por ejemplo si el registro de órdenes de cambio ocurre en el gateway y no ocurre en el Marketplace o en la interacción de órdenes de cumplimiento y en la API también.





