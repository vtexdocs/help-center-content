---
title: "El módulo Redirects permite incluir redirecciones sin un patrón predeterminado"
id: CPYuvozpHXr86gQliImSV
status: PUBLISHED
createdAt: 2024-10-04T17:26:34.553Z
updatedAt: 2025-04-10T14:32:49.765Z
publishedAt: 2025-04-10T14:32:49.765Z
firstPublishedAt: 2024-10-04T17:26:36.228Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: el-modulo-redirects-permite-incluir-redirecciones-sin-un-patron-predeterminado
locale: es
kiStatus: Backlog
internalReference: 729503
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El módulo Redirecciones permite la inclusión de URLs sin un patrón predeterminado, ya que no existe validación del formato correcto. Los usuarios que incluyan redirecciones iniciadas por querystring, por ejemplo, podrán subir la hoja de cálculo o insertarla directamente a través de la UI y, en consecuencia, esto puede provocar incoherencias en el funcionamiento del módulo, presentación de datos en el frontal, etc.

La incoherencia más común es no poder acceder a algunas redirecciones al hacer clic en ellas.


##

## Simulación


- Cree, vía UI u hoja de cálculo, redirecciones con querystrings (por ejemplo, cualquier URL que contenga `?` )
- Intenta acceder a ella



## Workaround


No existe una solución para este caso, pero si desea eliminar la redirección y no puede acceder a ella, deberá ejecutar la consulta de reescritura:

    mutation{ redirect{ delete(path: "/{palabra}"){ id } }}





