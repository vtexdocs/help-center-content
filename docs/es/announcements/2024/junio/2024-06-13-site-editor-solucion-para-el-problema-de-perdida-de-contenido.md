---
title: 'Site Editor: solución para el problema de pérdida de contenido'
id: 1mnrlSMyMmU1iAUyEquVYB
status: PUBLISHED
createdAt: 2024-06-13T12:25:13.359Z
updatedAt: 2024-06-13T13:29:05.308Z
publishedAt: 2024-06-13T13:29:05.308Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-06-13-site-editor-fixed-content-loss-issue
locale: es
legacySlug: site-editor-solucion-para-el-problema-de-perdida-de-contenido
announcementImageID: 'undefined'
announcementSynopsisES: 'Site Editor: actualización de almacenamiento para mejor desempeño y confiabilidad.'
---

El 12 de junio, se actualizó el almacenamiento de contenido del [Site Editor](/es/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) para todas las cuentas que lo utilizan para solucionar el problema de la [pérdida intermitente de contenido de Site Editor](/es/known-issues/intermitent-site-editor-content-loss--3a5MlAoD2Z7Gu6HDS8wihD). Esta actualización optimiza el desempeño y la confiabilidad del almacenamiento, además de reducir el espacio que ocupa el contenido almacenado.

## ¿Qué cambió?
Anteriormente, los frecuentes cambios en el contenido de Site Editor podían resultar en que el archivo `content.json` se volviera excesivamente grande, lo que causaba la pérdida de contenido [al promover un workspace de producción a master](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspaces-best-practices#deployment-and-workspace-promotion) o al instalar una nueva versión en un workspace de prueba.

Por este motivo, mejoramos la arquitectura de almacenamiento y la solución de partición de archivos en Site Editor. La solución optimizada almacena el contenido en archivos más pequeños y específicos, diseñados para ese tipo de contenido, en lugar de en un solo archivo grande. Este cambio reduce el tamaño de los archivos en aproximadamente un 90 %, lo que disminuye el espacio de almacenamiento necesario por página y mejora el desempeño general y la entrega de contenido.

## ¿Qué se necesita hacer?
No es necesaria ninguna acción. La actualización se implementó automáticamente en todas las tiendas VTEX que utilicen Site Editor.

Si después del 12 de junio la pérdida de contenido continúa, abre un ticket para el equipo de [soporte VTEX](https://help.vtex.com/es/support).

