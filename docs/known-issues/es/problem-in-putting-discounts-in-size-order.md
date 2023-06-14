---
title: 'Problema en el orden del mejor descuento'
id: 7JlXcIcicgQwkOkCuce4Ow
status: PUBLISHED
createdAt: 2017-04-03T20:07:11.542Z
updatedAt: 2022-12-22T20:45:13.711Z
publishedAt: 2022-12-22T20:45:13.711Z
firstPublishedAt: 2017-04-03T20:24:06.588Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: problema-en-el-orden-del-mejor-descuento
kiStatus: Backlog
internalReference: 
---

## Sumario

El orden del sitio no está funcionando correctamente, pues cuando se hace el filtro por mejor precio o mejores evaluaciones, los productos se ordenan aparentemente de modo aleatorio, o siguiendo un filtro anterior, sin observar el filtro solicitado.

Los filtros se renderizan en forma automática cuando se usa el control `<vtex.cmc:searchResult/>`.

## Simulación

- Abrir una página de vidriera.
- Usar el filtro para ordenar la vidriera.
- o forzar directamente en la URL por www.{AccountName}.com.br/categoria?PS=12&O=OrderByReviewRateDESC.

## Workaround

Omitir esta opción de filtro del combo renderizado por el control `<vtex.cmc:searchResult/>` vía JavaScript.

