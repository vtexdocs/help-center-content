---
title: Imposibilidad de exportar documentos con campos de dos entidades diferentes
id: 5ed6rXDZNpVa5VOyAGrttf
status: PUBLISHED
createdAt: 2019-04-11T00:23:14.583Z
updatedAt: 2022-12-22T20:46:24.799Z
publishedAt: 2022-12-22T20:46:24.799Z
firstPublishedAt: 2019-04-11T21:57:42.707Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: imposibilidad-de-exportar-documentos-con-campos-de-dos-entidades-diferentes
kiStatus: Backlog
internalReference: 
---

## Sumario

El usuario desea exportar documentos que tienen campos de dos entidades diferentes. Sin embargo, la posibilidad de exportar entre entidades fue descontinuada recientemente, impidiendo al usuario hacer la exportación.

En este ejemplo, analizaremos un caso en el que el usuario desea exportar exportar emails desde la entidad de dirección.


## Simulación



## Workaround

Para obtener el mismo resultado, basta con seguir los siguientes pasos:

1. Acceda a la entidad AD y seleccione los campos deseados marcando el campo userID, incluso.
2. A continuación, seleccione los campos deseados en la entidad CL, también marcando el campo userID.
3. Con las dos plantillas en mano, es posible unir las dos informaciones en una plantilla sólo utilizando el userId como clave.

