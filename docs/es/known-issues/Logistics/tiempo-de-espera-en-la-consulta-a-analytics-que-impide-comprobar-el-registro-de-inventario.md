---
title: "Tiempo de espera en la consulta a Analytics que impide comprobar el registro de inventario"
id: 2gQhc3JF0bcm1JeLr0lluO
status: PUBLISHED
createdAt: 2024-02-19T20:54:22.012Z
updatedAt: 2024-07-03T15:26:48.484Z
publishedAt: 2024-07-03T15:26:48.484Z
firstPublishedAt: 2024-02-19T20:54:22.861Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: tiempo-de-espera-en-la-consulta-a-analytics-que-impide-comprobar-el-registro-de-inventario
locale: es
kiStatus: Fixed
internalReference: 984482
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El registro de actualización en la interfaz de usuario de inventario a veces devuelve el error: Request failed with status code 500 for some specific SKUs, due to a timeout in the query to Analytics (where the data is stored), and no log for the SKU will be shown in the UI.

Este tiempo de espera puede deberse a un alto volumen de actualizaciones en la SKU, o a cualquier otro factor que haga que esta consulta tarde más del tiempo máximo de 40s;


##

## Simulación


Debido a que la variable es el tiempo de respuesta de la consulta a Analytics, no es posible replicarla de forma concisa.



## Workaround


No hay ninguna solución disponible.




