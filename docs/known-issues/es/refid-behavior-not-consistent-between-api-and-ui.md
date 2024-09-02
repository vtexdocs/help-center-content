---
title: 'El comportamiento de RefId no es coherente entre la API y la interfaz de usuario'
id: 4007iEJ8bCN96PBY0nsIB4
status: PUBLISHED
createdAt: 2023-09-29T13:11:04.826Z
updatedAt: 2023-10-20T13:41:48.679Z
publishedAt: 2023-10-20T13:41:48.679Z
firstPublishedAt: 2023-09-29T13:11:05.384Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-comportamiento-de-refid-no-es-coherente-entre-la-api-y-la-interfaz-de-usuario
locale: es
kiStatus: Backlog
internalReference: 910050
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente tenemos dos comportamientos para el código refid, vía API no es posible que sea el mismo que otros productos, pero vía UI nos permite insertar el mismo valor que ya tienen otros productos.


##

## Simulación



Crear un producto con un código redIf
Cree otro producto e intente utilizar el mismo código refId que el otro, vía API no será posible pero vía UI sí.



## Workaround



Si necesita utilizar los mismos refIds para diferentes productos, introdúzcalos a través de la interfaz de usuario.





