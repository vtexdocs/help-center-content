---
title: 'La API de actualización de los valores de la carga tarda en reflejarse en el módulo de simulación'
id: 7Gclw70xDYX34fOah2aWAa
status: PUBLISHED
createdAt: 2022-07-26T17:47:10.996Z
updatedAt: 2023-01-03T20:23:50.817Z
publishedAt: 2023-01-03T20:23:50.817Z
firstPublishedAt: 2022-07-26T17:47:11.865Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: la-api-de-actualizacion-de-los-valores-de-la-carga-tarda-en-reflejarse-en-el-modulo-de-simulacion
locale: es
kiStatus: Backlog
internalReference: 621230
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las actualizaciones del valor del flete están tardando más de 1 día en reflejarse en la simulación de envío cuando la actualización se solicitó mediante el método POST de la API. Este problema es intermitente, normalmente la actualización tarda sólo unos minutos.



## Simulación


Utilice la API para actualizar los valores de carga, entonces verá la actualización en el módulo de Logística, que puede confirmar utilizando el punto final de la API GET Freight values o descargando la hoja de cálculo de los valores de carga. Sin embargo, es posible que esta actualización no se refleje con exactitud en la simulación de envío, y verá los valores antiguos como posibilidades en la simulación.

Pasos:

1 - Actualizar los valores de carga => API POST /api/logistics/pvt/configuration/freights/values/update

2- Comprobación de la modificación de la actualización en => API GET /api/logistics/pvt/configuration/freights/0/values (o también puede ver esta actualización descargando la hoja de cálculo de valores de flete)

3 - Utilizando la simulación de envíos en el Admin o la API de simulación de carros mostrará los valores antiguos, no los correctos ejecutados en el paso 1 y 2.



## Workaround


La solución para este caso es descargar la hoja de cálculo y cargar la misma hoja de cálculo para la política de envíos.

