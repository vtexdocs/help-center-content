---
title: 'La búsqueda de autocompletar no funciona con el espacio'
id: 1ZZGCHgsnJ512DAZv1iCy7
status: PUBLISHED
createdAt: 2022-04-28T16:03:43.077Z
updatedAt: 2022-11-25T22:09:56.187Z
publishedAt: 2022-11-25T22:09:56.187Z
firstPublishedAt: 2022-04-28T16:03:43.808Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: la-busqueda-de-autocompletar-no-funciona-con-el-espacio
kiStatus: Backlog
internalReference: 568821
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



En las tiendas heredadas del Portal, la búsqueda con autocompletar no funciona si los términos de búsqueda tienen espacio.



## Simulación



- Vaya a la barra de búsqueda e intente buscar "superproducto", por ejemplo.
- La solicitud fallará.

Aunque la búsqueda con autocompletar no funciona, la búsqueda por defecto funcionará correctamente.



## Workaround


La solución para este caso es utilizar una personalización de javascript para que la búsqueda autocompletada funcione correctamente (utilizando %20 en lugar de +)

