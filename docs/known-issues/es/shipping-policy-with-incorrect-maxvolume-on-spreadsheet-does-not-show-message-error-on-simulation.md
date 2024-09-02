---
title: 'La política de envío con un MaxVolume incorrecto en la hoja de cálculo no muestra el error del mensaje en la simulación'
id: 7zIbmadcOfI3oHmkm8LmkY
status: PUBLISHED
createdAt: 2022-05-18T18:19:04.901Z
updatedAt: 2024-02-16T20:25:21.794Z
publishedAt: 2024-02-16T20:25:21.794Z
firstPublishedAt: 2022-05-18T18:19:05.868Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: la-politica-de-envio-con-un-maxvolume-incorrecto-en-la-hoja-de-calculo-no-muestra-el-error-del-mensaje-en-la-simulacion
locale: es
kiStatus: No Fix
internalReference: 380471
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la política de envío tiene el MaxVolume en la hoja de cálculo no hay ningún mensaje de error con respecto a esto en la simulación.
Así que la cuenta no sabe por qué esta política de envío es descartada.



## Simulación


Para ver el problema el valor de MaxVoume en la hoja de cálculo debe ser menor que el cálculo del volumen del producto.
En este caso, el valor de abajo en el campo MaxVolume no permite la política de envío y esto está bien. El problema es que el sistema no muestra ningún mensaje de error relacionado con esta política de envío.



## Workaround


No hay ninguna solución para este caso.

