---
title: 'Al subir más de un archivo existente a la vez, no se actualizan todos los archivos en el File Manager'
id: 3uuWWVR3g8hFuXnPQ2Yaa8
status: PUBLISHED
createdAt: 2021-09-27T20:50:23.329Z
updatedAt: 2022-12-22T20:41:03.382Z
publishedAt: 2022-12-22T20:41:03.382Z
firstPublishedAt: 2021-09-27T20:57:22.900Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: uploading-more-than-one-existing-file-at-a-time-does-not-update-all-files-in-file-manager
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Cuando se envían simultáneamente dos o más archivos existentes en el File Manager, solo se actualizará el primer archivo.

## Simulación

1. En el Admin de VTEX, haz clic en el módulo **CMS**.
2. Haz clic en **Layout**.
3. Haz clic en la carpeta **CMS**.
4. Haz clic en la carpeta **Files Manager**.
5. Haz clic en una de las carpetas del **Files Manager**.
6. Haz clic en el botón `Add` y selecciona dos o más archivos con el mismo nombre que los existentes. 
7. Haz clic en `Save File`.

A continuación, se mostrará el siguiente mensaje:

![File manager](//images.contentful.com/alneenqid6w5/4Z7tY3FKCDV1Cz6Whji6HI/d730b6accf6caeb81b373745b20c337d/image.png)

Esto significa que solo se identifica un archivo; los demás no se validan. Se cargan todos los archivos, pero solo uno de ellos sustituirá a su versión anterior.

## Workaround

Para evitar el problema, puedes actualizar un archivo a la vez.

