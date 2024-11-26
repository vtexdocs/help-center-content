---
title: 'Erro ao chegar a páginas acima de 333 em uma lista de entidades (mais de 10.000 documentos)'
id: 1COJ1WZILFeFqA4XWIseYY
status: PUBLISHED
createdAt: 2023-02-27T19:29:52.721Z
updatedAt: 2023-02-27T19:29:53.278Z
publishedAt: 2023-02-27T19:29:53.278Z
firstPublishedAt: 2023-02-27T19:29:53.278Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-reaching-pages-over-333-on-a-entity-list-more-than-10000-documents
locale: pt
kiStatus: Backlog
internalReference: 334407
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando a loja tem mais de 10.000 documentos, portanto mais de 333 páginas, ao tentar alcançar as últimas páginas sobre CRM, há um erro de mensagem:

    VTEX - Dados Mestres: Ocorreu um erro inesperado no sistema. Por favor tente novamente, caso o erro persista entre em contato com a VTEX.

 ![](https://vtexhelp.zendesk.com/attachments/token/5wXQPX2etczf6IiyzGFLAtIvp/?name=inline1653316518.png)


##

## Simulação



1. Ir a um CRM sobre uma entidade com muitos dados (mais de 10k documentos);
2. O erro ocorrerá ao tentar chegar a uma página que recuperaria o 10.000º documento ou mais. Normalmente pela página 334 (10000 / 30 = 333,33 ~~ 334)


##

## Workaround


Se a loja desejar recuperar os últimos dados, eles podem usar a API de documentos Scroll:

- MasterData v1: https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/scroll
- MasterData v2: https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/scroll

