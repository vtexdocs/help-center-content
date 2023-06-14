---
title: 'O endpoint da API de Scroll eventualmente retorna o erro 408'
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
slug: o-endpoint-da-api-de-scroll-eventualmente-retorna-o-erro-408
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao requerer uma grande quantidade de dados por meio da API de scroll, a mesma pode retornar timeout. Entretanto, o resultado esperado retorna quando efetuamos novamente a mesma request.




## Simulação

http://api.vtex.com/{{accountName}}/dataentities/{{acronym}}/scroll?isCluster=true&_size=250&_fields=email,firstName

Receba o timeout 


## Workaround

O timeout pode ser minimizado ao reduzir o tamanho do primeiro request. Isso pode ser feito por meio de um ajuste no valor, que, neste caso, pode variar de 1000 a 20:

### Antes 
http://api.vtex.com/{{accountName}}/dataentities/{{acronym}}/scroll?isCluster=true&_size=1000&_fields=email,firstName

### Depois 
http://api.vtex.com/{{accountName}}/dataentities/{{acronym}}/scroll?isCluster=true&_size=250&_fields=email,firstName


