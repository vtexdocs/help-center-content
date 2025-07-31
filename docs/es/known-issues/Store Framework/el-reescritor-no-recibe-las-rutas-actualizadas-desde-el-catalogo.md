---
title: "El reescritor no recibe las rutas actualizadas desde el catálogo"
id: 48eSYkPCRaaYJZESFdob8M
status: PUBLISHED
createdAt: 2025-01-31T13:38:40.156Z
updatedAt: 2025-01-31T13:38:41.017Z
publishedAt: 2025-01-31T13:38:41.017Z
firstPublishedAt: 2025-01-31T13:38:41.017Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: el-reescritor-no-recibe-las-rutas-actualizadas-desde-el-catalogo
locale: es
kiStatus: Backlog
internalReference: 1172080
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunas actualizaciones de catálogo relacionadas con rutas no están llegando a la reescritura. Esto puede ocurrir con categorías, marcas, subcategorías o departamentos. Cuando creas una nueva ruta o editas una existente, la consulta bootstrap sería suficiente para actualizar esas rutas en la regrabadora, pero no funcionará en casos particulares. La regrabadora no recibirá la ruta, y si intentas acceder a ella en la tienda, la ruta no tendrá productos, o puede aparecer en pantalla el error "algo ha explotado".


##

## Simulación


Si tienes una ruta sin productos o con error, prueba a ejecutar primero la consulta bootstrap:
 ![](https://vtexhelp.zendesk.com/attachments/token/lgRhaWsmwABr8rF4ow1DmLNwC/?name=image.png)

    {bootstrap{brandscategories}}


Si no funciona, comprueba si el rewriter está recibiendo la ruta, si la respuesta es null entonces el rewriter no ha recibido la actualización:
 ![](https://vtexhelp.zendesk.com/attachments/token/W3vx3sa1BFL2DOSIsTh49tuvk/?name=image.png)

    {internal{get(ruta:"/prueba"){fromdeclarerid}}}



##

## Workaround


Puedes intentar añadir la ruta manualmente con la siguiente mutación:

    mutation saveInternal($route: InternalInput!) {internal {save(route: $route) {fromdeclarertypeidqueryendDatebindingresolveAsorigindisableSitemapEntry}}}



    {"ruta": {"from": "", "query": {"mapa": "" //puede ser "b" para marcas, por ejemplo}, "declarer": "vtex.store@2.x", "binding": "", "type": "", "id": "U050MLNQDL2","origin": "vtex.routes-bootstrap@0.4.3:brand-bootstrap"}}






