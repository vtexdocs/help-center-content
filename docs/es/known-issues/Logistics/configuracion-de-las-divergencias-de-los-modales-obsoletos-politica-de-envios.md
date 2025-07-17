---
title: "Configuración de las divergencias de los modales obsoletos - Política de envíos"
id: TYWgIv5xOTUBWdC63FbK5
status: PUBLISHED
createdAt: 2022-05-18T18:20:55.870Z
updatedAt: 2024-02-16T20:27:05.367Z
publishedAt: 2024-02-16T20:27:05.367Z
firstPublishedAt: 2022-05-18T18:20:56.247Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: configuracion-de-las-divergencias-de-los-modales-obsoletos-politica-de-envios
locale: es
kiStatus: No Fix
internalReference: 445866
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hay un escenario con respecto a los modales usados y obsoletos que no coinciden.

Las políticas de envío no muestran correctamente los modales usados y obsoletos y está causando dudas en las simulaciones porque la política de envío no se permite manejar.

Todo parece normal en la configuración de la interfaz de usuario, pero la comprobación en la API es posible para ver la falta de coincidencia de los modales.




## Simulación


El SKU tiene configurado un modal obsoleto.
En la política de envío no se muestra como obsoleta en la interfaz de usuario.




## Workaround


Hay dos maneras de solucionar esto, la primera es cambiar el Modal on SKU a uno soportado por la política de envíos.

O incluir el obsoleto en la política de envío por la API.

