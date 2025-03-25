---
title: 'La sugerencia de dividir el paquete no funciona correctamente'
id: 1amgn9hWwc6i2nLx1U3wDC
status: ARCHIVED
createdAt: 2022-09-13T02:01:52.651Z
updatedAt: 2022-12-21T15:01:43.876Z
publishedAt: 
firstPublishedAt: 2022-09-13T02:01:53.252Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: split-package-suggestion-not-working-properly
locale: es
kiStatus: Backlog
internalReference: 656810
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La sugerencia de paquetes divididos no está funcionando correctamente, cuando se termina la compra la UI sugiere los paquetes divididos en casos de diferentes muelles o diferentes tamaños y diferentes estrategias de envío.
Hoy en día la interfaz de usuario sólo está empalmando los paquetes de los casos con diferentes (métodos de envío), incluso en el logistcsinfo tiene diferentes canales de entrega y diferentes muelles.



## Simulación


Hacer un pedido con más de un artículo, y estos artículos necesitan cada uno un canal de entrega diferente pero con el mismo Método de Envío. La UI no sugerirá la división de los paquetes porque la "selectedSla" es como la variable más significativa, ignorando los dockids por ejemplo.



## Workaround


La forma de evitarlo es cambiando el método de entrega de las Estrategias de Envío.

P.D.: Esta no es una solución adecuada, ya que incluye un comportamiento diferente en el pago.

