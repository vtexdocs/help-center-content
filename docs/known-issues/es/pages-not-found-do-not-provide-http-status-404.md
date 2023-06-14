---
title: Páginas no encontradas no proporcionan HTTP Status 404
id: 45TCR3O8V2uyWcwmqYs4qS
status: PUBLISHED
createdAt: 2017-10-14T20:05:49.329Z
updatedAt: 2022-12-22T20:45:04.470Z
publishedAt: 2022-12-22T20:45:04.470Z
firstPublishedAt: 2017-10-14T20:23:53.353Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: paginas-no-encontradas-no-proporcionan-http-status-404
kiStatus: Backlog
internalReference: 
---

## Sumario

Al acceder a páginas inexistentes del sitio, el usuario se lleva a `/sistema/404` o `/sistema/busquedavacia`, según el contexto. Pero estas páginas no respetan la especificación HTTP, devolviendo el status "200 OK" en lugar de "404 Not Found", especificando que no se ha encontrado el contenido deseado.

Uno de los casos relevantes es la correcta interpretación de Google al indexar la página, de modo que las páginas con contenido no encontrado no deben mantenerse indexadas.

## Simulación

Acceder a cualquier página inexistente de la tienda, o directamente a `/sistema/404` o `/sistema/busquedavacia`, y verificar el status de respuesta HTTP del request, que será "200 OK".

## Workaround

En el caso de páginas que se indexan por Google, la mejor opción es crear un [mapeo de URL](/es/faq/mapeo-de-urls-redireccionamiento-301), direccionando el contenido de la página inexistente para una página relevante.

