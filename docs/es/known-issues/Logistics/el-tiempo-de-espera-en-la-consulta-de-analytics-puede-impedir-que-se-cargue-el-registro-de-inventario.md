---
title: "El tiempo de espera en la consulta de Analytics puede impedir que se cargue el registro de inventario"
id: MtypX7b6X8DdljjmMIumd
status: PUBLISHED
createdAt: 2025-01-08T13:02:11.842Z
updatedAt: 2025-01-08T13:08:25.212Z
publishedAt: 2025-01-08T13:08:25.212Z
firstPublishedAt: 2025-01-08T13:02:12.879Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: el-tiempo-de-espera-en-la-consulta-de-analytics-puede-impedir-que-se-cargue-el-registro-de-inventario
locale: es
kiStatus: No Fix
internalReference: 1159693
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En la interfaz de usuario de inventario, el registro de actualización a veces no se carga para SKU específicas, mostrando el mensaje de error: Se ha producido un error al cargar los datos. La solicitud falla con el mensaje de excepción: La solicitud falla con el mensaje de excepción: `Request failed with status code 500`, que indica un tiempo de espera en la consulta a Analytics (donde se almacenan los datos). Como resultado, no se muestra ningún registro de la SKU en la interfaz de usuario.

Este tiempo de espera puede ocurrir debido a un alto volumen de actualizaciones para la SKU u otros factores que pueden causar que la consulta exceda el tiempo máximo de ejecución permitido de 40 segundos.



## Simulación


Debido a que la variable es el tiempo de respuesta de la consulta a Analytics, no es posible replicarla de forma concisa.



## Workaround


En algunos casos, refrescar la página resolverá el problema y permitirá que el registro de inventario se cargue correctamente.





