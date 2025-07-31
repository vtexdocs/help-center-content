---
title: "Faststore V1/V2 no devuelve información SEO en la consulta Graphql"
id: 4nZnX8sj9J90xtkNpYIgZ4
status: PUBLISHED
createdAt: 2023-11-01T17:08:35.090Z
updatedAt: 2025-05-12T14:03:41.681Z
publishedAt: 2025-05-12T14:03:41.681Z
firstPublishedAt: 2023-11-01T17:08:35.767Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-v1v2-no-devuelve-informacion-seo-en-la-consulta-graphql
locale: es
kiStatus: No Fix
internalReference: 929029
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Tenemos una consulta de producto cuando accedemos al playground de Graphql para ejecutar consultas en Faststore V1 y V2. La documentación indica que el campo SEO de esa consulta debe devolver la información SEO, pero esto no está sucediendo.


##

## Simulación



- accede a tu tienda usando el playground Graphql
- ejecuta la consulta de producto con los campos SEO
-

compare con la información SEO del producto en el catálogo, verá que el valor devuelto será el título y la descripción del propio producto, no del campo SEO

También puede ver que esto ocurre en el dominio final al comprobar la información SEO en la pestaña de elementos.




## Workaround


Puedes recuperar los otros campos del StoreSEO extendiendo el GraphQL Schema, como explica el doc:
https://v1.faststore.dev/reference/api/objects/#storeseo
 ![](https://vtexhelp.zendesk.com/attachments/token/qtLb0Xc4mlmkq0AXngefRrPiF/?name=image.png)

Pero la información de `title` y `description` seguirá presentando el problema.





