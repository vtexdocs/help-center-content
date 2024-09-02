---
title: 'La carga de archivos con dos o más archivos existentes no actualiza todos los archivos, sólo el primero.'
id: 2LHdzsFFe83E1Tf0Z4j66y
status: PUBLISHED
createdAt: 2022-03-17T00:20:51.454Z
updatedAt: 2024-02-16T20:23:18.080Z
publishedAt: 2024-02-16T20:23:18.080Z
firstPublishedAt: 2022-03-17T00:20:52.317Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: la-carga-de-archivos-con-dos-o-mas-archivos-existentes-no-actualiza-todos-los-archivos-solo-el-primero
locale: es
kiStatus: No Fix
internalReference: 418253
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La carga de archivos con dos o más archivos existentes no actualiza todos los archivos, sólo el primero.


##

## Simulación


- Ve a /admin/a, administrador de archivos, y añade 2 o más archivos para subir;
- Ahora sube otros dos archivos con el mismo nombre:
- Recibiremos un aviso indicándonos que el fichero existe, preguntándonos si queremos reemplazarlo.

Esta advertencia nos está diciendo sólo acerca de un archivo, el segundo no está siendo validado.

- Ambos archivos se cargan, pero sólo uno reemplazará al anterior.



## Workaround


Actualice un archivo cada vez.

