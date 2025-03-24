---
title: 'A API de pesquisa não aceita caracteres especiais'
id: 4wBStygR6YPA6g5lgvPGqa
status: PUBLISHED
createdAt: 2023-02-15T12:39:13.771Z
updatedAt: 2023-02-28T18:20:34.738Z
publishedAt: 2023-02-28T18:20:34.738Z
firstPublishedAt: 2023-02-15T12:39:14.210Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: search-api-does-not-accept-special-characters
locale: pt
kiStatus: Backlog
internalReference: 754363
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A API de pesquisa de catálogo, documentada aqui: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search/-search- , não aceita termos com caracteres especiais como "apóstrofo" ou "aspas".

O retorno do erro em consultas como esta é: `Mal pedido! Scripts não são permitidos!`


##

## Simulação



1. Tente usar a API de busca com um termo que use ' , por exemplo: GET https://{accountName}.{environment}.com.br/api/catalog_system/pub/products/search?ft=anyterm'
2. Verifique se a mensagem de erro aparece.


##

## Workaround


Nenhuma solução.





