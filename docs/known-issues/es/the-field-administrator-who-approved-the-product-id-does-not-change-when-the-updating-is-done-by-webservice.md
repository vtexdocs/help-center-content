---
title: 'Campo “Administrador que aprobó el producto (id)” no cambia cuando la actualización se hace por webservice'
id: 5R6Jj0aglq0gUu2OakqgUw
status: PUBLISHED
createdAt: 2017-04-11T22:17:03.345Z
updatedAt: 2022-12-22T20:48:33.851Z
publishedAt: 2022-12-22T20:48:33.851Z
firstPublishedAt: 2017-04-11T22:24:05.649Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Web Service
slug: campo-administrador-que-aprobo-el-producto-id-no-cambia-cuando-la-actualizacion-se-hace-por-webservice
kiStatus: Backlog
internalReference: 
---

## Sumario

Cuando la modificación en el producto se hace por Web Service no es grabado el usuario que hizo la actualización.

La plataforma mantiene el último usuario en vez de sobrescribir con la información del Web Service.

## Simulación

Actualizar un producto vía Web Service.

## Workaround

No hay un workaround práctico. La alternativa sería acceder a los productos tras su actualización por Webservice y guardar nuevamente, y así dejando registrado el último usuario.

