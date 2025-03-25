---
title: 'La interfaz de usuario duplica la selección de fecha y hora para la entrega programada cuando tiene división de entrega'
id: 6nPIfnI47XKI0YYNEEPenR
status: PUBLISHED
createdAt: 2022-04-28T20:03:10.918Z
updatedAt: 2022-11-25T21:53:53.493Z
publishedAt: 2022-11-25T21:53:53.493Z
firstPublishedAt: 2022-04-28T20:03:11.884Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-duplicating-date-and-time-selection-for-scheduled-delivery-when-it-has-delivery-division
locale: es
kiStatus: Backlog
internalReference: 569132
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Cuando el usuario llega a la caja y la entrega está programada y hay más de un artículo en el que la división de la entrega se lleva a cabo, por lo tanto, los artículos que salen de una X e Y SLA.
Al seleccionar la primera fecha de entrega y al refrescar la página, la UI termina seleccionando la misma fecha y hora también para la segunda selección, aunque el usuario no haya interactuado con el modal de selección.



## Simulación



Habiendo programado la entrega y también dividiendo los paquetes entre diferentes ANS, eligiendo sólo la selección de fecha y hora para el primer paquete, refrescando la página y dándose cuenta de que la selección también se hizo para el segundo paquete.




## Workaround


N/A

