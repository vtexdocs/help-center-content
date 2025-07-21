---
title: "Posibles errores en la notificación de órdenes de cambio en la interfaz de usuario, la API y la pasarela."
id: 1UeG6MyFYIUVCnH8kPwNIJ
status: PUBLISHED
createdAt: 2023-12-19T19:37:47.313Z
updatedAt: 2025-04-22T18:47:10.530Z
publishedAt: 2025-04-22T18:47:10.530Z
firstPublishedAt: 2023-12-19T19:37:47.950Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: posibles-errores-en-la-notificacion-de-ordenes-de-cambio-en-la-interfaz-de-usuario-la-api-y-la-pasarela
locale: es
kiStatus: No Fix
internalReference: 955489
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Importante: Sugerimos utilizar el nuevo **Cambio V2** ya que el esfuerzo fue en la creación de esta nueva característica._

Algunos problemas fueron identificados en la arquitectura de Órdenes de Cambio V1, donde algunos casos no fueron notificados en la interacción de la orden en la UI, y no fueron notificados en la API de Obtener Órdenes, sin embargo, hubo un descuento o aumento en el valor. También hemos visto escenarios en los que la notificación se produce en la UI y en la API, sin embargo, el descuento o aumento no se realiza en la pasarela.

Tenemos un segundo punto, que es cuando el cambio es insertado vía MKP y el vendedor es whitelabel, en estos casos, ¡el cambio puede no ser replicado en el Vendedor!
¡Lo correcto es realizar el cambio a través del vendedor!


##

## Simulación


No es posible realizar una simulación, ya que los escenarios son esporádicos y generalmente ocurren debido a un error de tiempo de espera, para lo cual ya hemos aumentado el temporizador.



## Workaround


Inicialmente, no tenemos una solución.

