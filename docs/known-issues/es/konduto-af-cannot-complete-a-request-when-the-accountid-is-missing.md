---
title: 'Konduto AF no puede completar una solicitud cuando falta el accountId.'
id: CGHZoCfr01ATsbtiLU9ym
status: PUBLISHED
createdAt: 2022-03-03T22:09:57.638Z
updatedAt: 2023-06-20T17:54:26.840Z
publishedAt: 2023-06-20T17:54:26.840Z
firstPublishedAt: 2022-03-03T22:09:58.094Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: konduto-af-no-puede-completar-una-solicitud-cuando-falta-el-accountid
locale: es
kiStatus: Backlog
internalReference: 496298
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Existe un problema para aprobar algunas transacciones que está relacionado con el sistema antifraude Konduto. Este problema surge cuando el sistema no puede realizar la petición necesaria debido a la ausencia del accountId, que es necesario para recuperar la información del pago de la base de datos de cuentas. Puede comprobarlo examinando la ruta "/payment", donde encontrará el nodo "usedAccountId" con valor "False" en estos casos.

**{**"name": "usedAccountId", "value": "False "**}**

Además, este problema suele observarse cuando un usuario elimina su propia tarjeta de la página MiCuenta inmediatamente después de realizar un pedido.



## Simulación


Siga el paso anterior, que consiste en eliminar una tarjeta inmediatamente después de realizar un pedido utilizando Konduto Antifraude.



## Workaround


N/A





