---
title: 'La fecha de caducidad de la condición especial no se elimina'
id: 4UuFAcukNrutyJOthTPxAA
status: PUBLISHED
createdAt: 2022-03-21T19:49:55.408Z
updatedAt: 2022-11-25T22:08:07.423Z
publishedAt: 2022-11-25T22:08:07.423Z
firstPublishedAt: 2022-03-21T19:49:55.888Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-fecha-de-caducidad-de-la-condicion-especial-no-se-elimina
locale: es
kiStatus: Backlog
internalReference: 547046
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el cliente configura una Condición Especial para un periodo de tiempo y quiere eliminar esta configuración, sólo se elimina el periodo, la recurrencia de esta configuración no se elimina. Esto significa que aunque se elimine la configuración de programación de la Condición de Pago, el campo `dateIntervals` sigue indexando y deja de indexar la Regla de Pago.



## Simulación



1. Establezca una nueva condición de pago y añada la fecha de vencimiento y la recurrencia de la condición especial.
2. Utilice el punto final Get Rules by Id para ver los campos `beginDate`, `endDate` y `dateIntervals`. Ambos están llenos.
3. A continuación, elimine la fecha de caducidad y la recurrencia de la configuración de la condición especial.
4. Utilice el punto final Get Rules by Id para ver los campos `beginDate`, `endDate` y `dateIntervals`. El campo `dateIntervals` seguirá teniendo la información eliminada anteriormente.



## Workaround


Una posible solución sería duplicar la Condición de Pago, para que la nueva regla no tenga la configuración de `dateIntervals`. Así, la primera condición de pago puede ser eliminada.

