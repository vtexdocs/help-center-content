---
title: "Faststore está enviando eventos de búsqueda en páginas de colecciones con el ID de la colección a los informes de IS"
id: 14ovp9q1EJXWMRI4uCuFFY
status: PUBLISHED
createdAt: 2025-01-07T13:59:30.793Z
updatedAt: 2025-01-14T13:38:41.696Z
publishedAt: 2025-01-14T13:38:41.696Z
firstPublishedAt: 2025-01-07T13:59:32.030Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-esta-enviando-eventos-de-busqueda-en-paginas-de-colecciones-con-el-id-de-la-coleccion-a-los-informes-de-is
locale: es
kiStatus: Fixed
internalReference: 1159040
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se realiza un evento de búsqueda en la página de una colección en las tiendas Faststore, la respuesta del módulo IS analytics también contiene el ID de la colección. Esto también puede tener efectos negativos en el autocompletado.


##

## Simulación



- Intente entrar en una página de recogida
- Espere a que el módulo de análisis IS se actualice con esa información
- El ID de la colección aparecerá donde sólo debería estar el nombre de la colección



## Workaround


N/A





