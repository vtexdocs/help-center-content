---
title: 'La carga del Administrador de Archivos con dos o más archivos existentes no actualiza todos los archivos, sólo el primero'
id: 2LHdzsFFe83E1Tf0Z4j66y
status: PUBLISHED
createdAt: 2022-03-17T00:20:51.454Z
updatedAt: 2022-11-25T22:10:54.509Z
publishedAt: 2022-11-25T22:10:54.509Z
firstPublishedAt: 2022-03-17T00:20:52.317Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: la-carga-del-administrador-de-archivos-con-dos-o-mas-archivos-existentes-no-actualiza-todos-los-archivos-solo-el-primero
kiStatus: Backlog
internalReference: 418253
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La carga del Administrador de Archivos con dos o más archivos existentes no actualiza todos los archivos, sólo el primero



## Simulación


- Ve a /admin/a, administrador de archivos, y añade 2 o más archivos para subir;
- Ahora sube otros dos archivos con el mismo nombre:
- Recibiremos un aviso diciéndonos que el archivo existe, preguntándonos si queremos reemplazarlo.

Esta advertencia nos está diciendo sólo sobre un archivo, el segundo no está siendo validado.

- Ambos archivos se cargan, pero sólo uno reemplazará al más antiguo.



## Workaround


Actualizar un archivo por vez.

