---
title: 'La API del almacén demuestra la eliminación de puntos de recogida (almacén inStore)'
id: obATI7B4MgRb2lNExdXcV
status: PUBLISHED
createdAt: 2022-05-10T20:45:27.127Z
updatedAt: 2022-11-25T21:59:11.134Z
publishedAt: 2022-11-25T21:59:11.134Z
firstPublishedAt: 2022-05-10T20:45:27.527Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: la-api-del-almacen-demuestra-la-eliminacion-de-puntos-de-recogida-almacen-instore
kiStatus: Fixed
internalReference: 573017
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se elimina un punto de recogida que está vinculado a un almacén (almacén inStore), el punto de recogida sigue vinculado al almacén si se consulta a través de la API.



## Simulación


Para simular este comportamiento, debemos:

- Crear un punto de recogida;
- Vincular este punto de recogida a un almacén;
- Eliminar el punto de recogida;
- Consultar (vía API) el almacén, y verificar que el punto de recogida sigue vinculado al `pickuPointIds`.



## Workaround


Como solución, puede eliminar este punto de recogida del almacén a través de la API de creación/actualización del almacén.

