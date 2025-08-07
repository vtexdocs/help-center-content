---
title: "Fallo en la reordenación de colecciones grandes"
id: 2wZN2wFAzWNIHgBVR7yp9R
status: PUBLISHED
createdAt: 2023-05-25T19:29:25.420Z
updatedAt: 2023-05-25T19:29:25.876Z
publishedAt: 2023-05-25T19:29:25.876Z
firstPublishedAt: 2023-05-25T19:29:25.876Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: fallo-en-la-reordenacion-de-colecciones-grandes
locale: es
kiStatus: Backlog
internalReference: 408140
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En la nueva interfaz de administración de colecciones, cuando un usuario intenta reordenar la visualización de pedidos de productos, la mutación GraphQL del catálogo que realiza esta acción suele fallar


##

## Simulación


1) Compruebe una colección en el módulo de colecciones con más de 1000 SKUs
2) Intente ejecutar la acción de arrastrar y soltar para reordenar
3) Compruebe que aparece un mensaje de error



##

## Workaround


No hay soluciones (sería crear una nueva colección en el orden correcto, pero no es una solución en sí misma, sólo una alternativa).





