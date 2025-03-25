---
title: 'Los links internos de una pagina de una colección tienen una URL canonical inexistente'
id: 1sJzMe74vio2Wkm60q6m6i
status: PUBLISHED
createdAt: 2017-12-21T17:38:14.109Z
updatedAt: 2022-12-22T20:46:13.577Z
publishedAt: 2022-12-22T20:46:13.577Z
firstPublishedAt: 2017-12-21T18:42:13.086Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: pages-internal-collection-links-have-a-nonexistent-canonical-url
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al crear una URL en el CMS y asociar la url a una colección por defecto, se consigue crear una url amigable para una colección.

Al ingresar a este link, se genera un resultado de búsqueda con un sidebar de filtros laterales. Al hacer click en cualquiera de esos filtros, al link final de la URL se le agregan el ID de la colección, junto con otros parámetros.

Al ingresar a cualquiera de esos links y analizar la URL canonical, se evidencia que se excluyen los parametros y se mantiene el ID de la colección al final de la URL como un path, lo que genera que esta url canónica sea inexistente en VTEX e impacta en el SEO de la tienda.

## Simulación

1. Ingresar al link que presenta el contenido de la colección.
2. Ingresar en cualquier link de los filtros laterales.
3. Inspeccionar el HTML y analizar el tag canonical.
4. Ingresar a la URL indicada en el tag canonical y se evidencia que tiene el ID de la colección al final y no existe esa URL.

## Workaround

Actualmente no hay workarround para este caso.

