---
title: 'Konduto AF no puede completar una solicitud cuando falta el accountId.'
id: CGHZoCfr01ATsbtiLU9ym
status: PUBLISHED
createdAt: 2022-03-03T22:09:57.638Z
updatedAt: 2022-11-25T22:05:52.845Z
publishedAt: 2022-11-25T22:05:52.845Z
firstPublishedAt: 2022-03-03T22:09:58.094Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: konduto-af-no-puede-completar-una-solicitud-cuando-falta-el-accountid
kiStatus: Backlog
internalReference: 496298
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Algunas transacciones no pueden ser terminadas porque el antifraude de Konduto no hace la solicitud adecuada porque falta el accountId utilizado para obtener la información de pago de la tabla de la base de datos de cuentas. Esto se puede validar mirando la ruta /payment donde el nodo "usedAccountId" es falso en este caso.

**{**"name": "usedAccountId", "value": "False "**}**



## Simulación


Este error no se puede reproducir en este momento, se produce de forma intermitente.



## Workaround


No hay ninguna solución disponible.

