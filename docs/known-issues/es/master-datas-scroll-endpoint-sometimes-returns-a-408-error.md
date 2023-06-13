---
title: El endpoint de la API de Scroll eventualmente devuelve el error 408 
id: 4d05lBhLsBSgDknxAWaL1A
status: PUBLISHED
createdAt: 2019-06-12T18:05:38.623Z
updatedAt: 2022-12-22T20:45:34.707Z
publishedAt: 2022-12-22T20:45:34.707Z
firstPublishedAt: 2019-06-12T18:36:51.846Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: el-endpoint-de-la-api-de-scroll-eventualmente-devuelve-el-error-408
kiStatus: Backlog
internalReference: 
---

## Sumario

Al solicitar una gran cantidad de datos por medio de la API de scroll, la misma puede devolver timeout. Sin embargo, el resultado esperado retorna cuando efectuamos nuevamente el mismo request.  

## Simulación

http://api.vtex.com/{{accountName}}/dataentities/{{acronym}}/scroll?isCluster=true&_size=250&_fields=email,firstName

Reciba un timeout 


## Workaround

El timeout puede ser evitado al reducir el tamaño del primer request. Esto puede hacerse por medio de un ajuste en el valor, que, en este caso, puede variar de 1000 a 20:

### Antes
http://api.vtex.com/{{accountName}}/dataentities/{{acronym}}/scroll?isCluster=true&_size=1000&_fields=email,firstName

### Después 
http://api.vtex.com/{{accountName}}/dataentities/{{acronym}}/scroll?isCluster=true&_size=250&_fields=email,firstName



