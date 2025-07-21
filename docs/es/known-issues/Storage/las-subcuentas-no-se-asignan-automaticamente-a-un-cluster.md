---
title: "Las subcuentas no se asignan automáticamente a un clúster"
id: 2sB0cc0danWbJC6FwYyzXw
status: PUBLISHED
createdAt: 2025-05-15T17:04:38.003Z
updatedAt: 2025-05-15T17:04:38.777Z
publishedAt: 2025-05-15T17:04:38.777Z
firstPublishedAt: 2025-05-15T17:04:38.777Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: las-subcuentas-no-se-asignan-automaticamente-a-un-cluster
locale: es
kiStatus: Backlog
internalReference: 1227332
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las subcuentas no se asignan automáticamente a un cluster en el momento de su creación. Como resultado, la búsqueda de datos maestros no funciona correctamente para estas subcuentas.



## Simulación



1. Crear o acceder a una subcuenta que no haya sido asignada manualmente a un cluster.
2.

Intentar llamar a la API de búsqueda de Masterdata, como:

    GET https://..com/api/dataentities/CL/search?_fields=id

3. Observe que la respuesta devuelve un error 500 que indica que la búsqueda de datos maestros no funciona.



## Workaround


La API de esta documentación también puede asignar una cuenta a un cluster - Los formularios de clientes y direcciones no existen en los multistores. Para utilizarla el usuario debe tener el recurso ADMIN_DS en su rol.





