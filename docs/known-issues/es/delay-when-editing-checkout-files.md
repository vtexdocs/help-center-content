---
title: Edición lenta de archivos de Checkout
id: 4uKQzzpNfbYLKZdhTW4f0O
status: PUBLISHED
createdAt: 2019-09-16T17:25:55.922Z
updatedAt: 2022-12-22T20:45:22.907Z
publishedAt: 2022-12-22T20:45:22.907Z
firstPublishedAt: 2019-09-19T23:45:08.460Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: edicion-lenta-de-archivos-de-checkout
kiStatus: Backlog
internalReference: 
---

## Sumario

Puede editar los archivos de la tienda directamente desde su navegador cuando fueron cargados por el administrador de Checkout.
 
En algunos casos, se recomienda seleccionar todo el contenido, copiarlo en un editor externo y luego pegar el contenido nuevamente en Administrador para completar las actualizaciones.

Sin embargo, este proceso puede ser bastante lento cuando el archivo tiene un tamaño considerable. Especialmente si los idiomas utilizados son CSS y Javascript.

En algunas situaciones, el acceso al archivo de administrador puede verse completamente comprometido.

## Simulación

Intente acceder o editar cualquier archivo a través de la pantalla Admin.

## Workaround

Para obtener archivos ya cargados, siempre puede acceder a su ruta pública desde "/files/file.xyz".

Para actualizar o cargar un nuevo archivo, el usuario puede usar la opción "Disponible" en el menú __Nuevo> Carga de archivo__. En ese caso, simplemente complete el nombre del destino y seleccione el archivo que desea cargar.
 
Sin embargo, si el nombre del archivo ya existe en la tienda, el nuevo contenido sobrescribirá el material anterior y, por lo tanto, finalizará la actualización.

