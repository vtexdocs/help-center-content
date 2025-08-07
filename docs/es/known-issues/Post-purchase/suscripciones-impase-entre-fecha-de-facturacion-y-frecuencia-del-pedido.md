---
title: "Suscripciones: impase entre fecha de facturación y frecuencia del pedido"
id: 4k32lnRONWU3YzXyvXJItO
status: PUBLISHED
createdAt: 2021-06-14T20:32:51.367Z
updatedAt: 2022-12-22T14:54:57.938Z
publishedAt: 2022-12-22T14:54:57.938Z
firstPublishedAt: 2021-06-14T20:40:45.787Z
contentType: knownIssue
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
tag: Order Management
slugEN: suscripciones-impase-entre-fecha-de-facturacion-y-frecuencia-del-pedido
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El sistema de suscripciones utiliza información como la frecuencia de compra y la fecha del ciclo para generar un pedido de suscripción. Sin embargo, hay dos escenarios en los que estos dos criterios (frecuencia y fecha del ciclo de la suscripción) se contradicen y la suscripción se genera con un retraso.

## Simulación

#### Escenario 1

Supongamos que el 20/01 un cliente creó una suscripción con frecuencia mensual. Por lo tanto, recibirá el producto cada 30 días. El cliente eligió que la fecha del ciclo de suscripción sea el 5 de cada mes, es decir, se realizará la facturación de su pedido todos los días 5.

Dado que se trata de una suscripción mensual, el sistema entiende que el próximo pedido se deberá realizar 30 días después de la fecha de compra, por lo tanto, el 20/02.

En este caso, se produce un impase: el sistema no puede generar el pedido antes de los 30 días (debido a la frecuencia mensual), ni puede realizar la facturación el 20/02 (considerando que la fecha de facturación seleccionada es el 5 de cada mes).

Esto se debe a que, considerando que la fecha de facturación deseada es el 5, solo transcurrirían 15 días entre la fecha de facturación y la próxima suscripción —no los 30 días de la frecuencia mensual—.

Ante esta situación, el sistema realiza el pedido de suscripción el próximo día 5 que esté disponible: en este caso, el 05/03, cuando ya no hay impase. Debido a este conflicto, el cliente termina recibiendo su producto con retraso. 

#### Escenario 2

Ahora supongamos que a las 23:00 h del 05/09, un cliente creó una suscripción con una frecuencia mensual y eligió que la fecha del ciclo de suscripción sea el 9 de cada mes, con la expectativa de que el primer pedido se realice el 06/09.

El sistema de gestión de pedidos funciona en la zona horaria registrada previamente en la tienda (vamos a considerar GMT-3, zona horaria de Brasilia). Sin embargo, el sistema de Suscripciones funciona en la zona horaria GMT-0. Esto significa que, aunque la suscripción se creó a las 23:00 h, para el sistema de Suscripciones, se creó 3 horas más tarde, es decir, el 10/05.

En este caso, el sistema considera la fecha de creación de la suscripción 10/05 para calcular el próximo ciclo de suscripción. De esta manera, el periodo a partir del 09/06 sería menor al establecido (29 días y no la frecuencia elegida de 1 mes).

Por esta razón, el sistema define la fecha de la próxima compra para el mes 07, ya que entiende que la suscripción no puede cumplirse en el mes 06 porque el ciclo es menor a 30 días. Así, el cliente recibe el producto después de la fecha prevista.

## Workaround

Actualmente no hay solución para este problema. Si su cliente se encuentra en esta situación de impase, contacte al servicio de soporte de VTEX. 

Para evitar este tipo de situación al crear la suscripción, el cliente debe optar por la fecha de facturación que coincida con la fecha en que está realizando el pedido de suscripción (si es antes de las 21:00 h) o bien por una fecha posterior en el mismo mes.

Para las tiendas que utilizan el módulo Suscripciones V3, existe la posibilidad de [crear la suscripción sin la necesidad de realizar un pedido inmediatamente](https://help.vtex.com/es/announcements/novo-modulo-assinaturas--6PfEmqovkZF97AZUp1owdf#nuevas-funcionalidades-para-su-cliente), lo que da libertad al usuario de elegir la fecha de la primera compra.

