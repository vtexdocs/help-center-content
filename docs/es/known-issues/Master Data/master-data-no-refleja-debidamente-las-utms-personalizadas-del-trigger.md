---
title: "Master Data no refleja debidamente las UTMs personalizadas del trigger"
id: 5IUv6xx8MpUBMxJaUDUzN7
status: PUBLISHED
createdAt: 2019-06-10T22:34:10.000Z
updatedAt: 2022-12-22T20:45:28.543Z
publishedAt: 2022-12-22T20:45:28.543Z
firstPublishedAt: 2019-06-10T22:37:05.187Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: master-data-no-refleja-debidamente-las-utms-personalizadas-del-trigger
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Durante el proceso de creación del trigger de e-mail, el usuario puede configurar una UTM personalizada. En su lugar, el Master Data siempre utilizará VTEXCEM como UTM, a diferencia de lo establecido por el usuario final.

## Simulación

1. Crear un trigger
2. Configurar UTM a CEM
3. Abandonar un carrito
4. Note que el e-mail utiliza UTM VTEXCEM en lugar de CEM

## Workaround

No hay workaround para este escenario.

