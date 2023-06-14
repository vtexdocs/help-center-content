---
title: 'Búsqueda con . en el portal devuelve 404?FileNotFound'
id: 3Gv7Jv3fjyCwASI8MwMgmQ
status: PUBLISHED
createdAt: 2018-09-14T18:09:52.414Z
updatedAt: 2022-12-22T20:45:39.140Z
publishedAt: 2022-12-22T20:45:39.140Z
firstPublishedAt: 2018-09-14T18:25:22.860Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: busqueda-con-en-el-portal-devuelve-404filenotfound
kiStatus: Backlog
internalReference: 
---

## Sumario

El error se produce al filtrar cualquier producto que utiliza punto. La clave buscada se coloca en la dirección URL y el portal entiende esto como un nombre de archivo.

## Simulación

1. Abra un sitio VTEX
2. Busque un término que no existe (`chavebuscada`)
3. Observe que el error es `{url}/Sistema/buscavazia?ft={chavebuscada}`
4. Busque ahora un término que contenga. (`chave.buscada`)
5. Observe que el error cambia a `{url}/Sistema/404?FileNotFound={chave.buscada}`

## Workaround

Quitar el punto de búsqueda con javascript personalizado

