---
title: 'As solicitações de Cold Start falham com o tempo limite e as novas tentativas de entrega não funcionam como esperado'
id: 61zSmTqfPSZTjL7PrAH737
status: PUBLISHED
createdAt: 2023-04-13T12:42:46.846Z
updatedAt: 2023-05-08T17:40:53.055Z
publishedAt: 2023-05-08T17:40:53.055Z
firstPublishedAt: 2023-04-13T12:42:47.259Z
contentType: knownIssue
productTeam: App Platform
author: 2mXZkbi0oi061KicTExNjo
tag: App Platform
slug: as-solicitacoes-de-cold-start-falham-com-o-tempo-limite-e-as-novas-tentativas-de-entrega-nao-funcionam-como-esperado
locale: pt
kiStatus: Backlog
internalReference: 789499
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um aplicativo não recebe solicitações por algum tempo, ele entra em cold start. O Courier faz várias tentativas de enviar eventos até que o aplicativo "acorde". Quando o aplicativo não "acorda", as solicitações a ele podem falhar devido a um tempo limite. Como resultado, acontece que alguns eventos parecem nunca ser enviados. Esse é um comportamento intermitente

## Simulação


Localize um aplicativo que esteja em uma inicialização a frio
Acompanhe seus registros por meio do OpenSearch
Às vezes, é possível ver que um ou mais eventos nunca serão enviados.



## Workaround


Não há nenhuma solução alternativa disponível.





