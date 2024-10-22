---
title: 'El módulo Redirects permite incluir redirecciones sin un patrón predeterminado'
id: CPYuvozpHXr86gQliImSV
status: PUBLISHED
createdAt: 2024-10-04T17:26:34.553Z
updatedAt: 2024-10-04T17:26:36.228Z
publishedAt: 2024-10-04T17:26:36.228Z
firstPublishedAt: 2024-10-04T17:26:36.228Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: redirects-module-allows-the-inclusion-of-redirects-without-a-predetermined-pattern
locale: es
kiStatus: Backlog
internalReference: 729503
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El módulo Redirecciones permite la inclusión de URLs sin un patrón predeterminado, ya que no existe validación del formato correcto. Los usuarios que incluyan redirecciones iniciadas por querystring, por ejemplo, podrán subir la hoja de cálculo o insertarla directamente a través de la UI y, en consecuencia, esto puede provocar incoherencias en el funcionamiento del módulo, presentación de datos en el frontal, etc.

La incoherencia más común es no poder acceder a algunos redireccionamientos al hacer clic en él.


##

## Simulación


 - Crea, vía UI u hoja de cálculo, redirecciones con querystrings (por ejemplo, cualquier url que contenga `?` )
 - Intenta acceder



## Workaround


N/A




