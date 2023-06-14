---
title: 'Search API usando O=OrderByNameASC ou O=OrderByNameDESC retorna resultados considerando diferença em minúsculas e maiúsculas para a primeira letra'
id: 1VqHI8kcnqRarzc1kxUGig
status: PUBLISHED
createdAt: 2022-04-07T14:04:16.705Z
updatedAt: 2022-11-25T21:46:20.647Z
publishedAt: 2022-11-25T21:46:20.647Z
firstPublishedAt: 2022-04-07T14:04:17.341Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: search-api-usando-oorderbynameasc-ou-oorderbynamedesc-retorna-resultados-considerando-diferenca-em-minusculas-e-maiusculas-para-a-primeira-letra
kiStatus: Backlog
internalReference: 305247
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Pesquisa API usando O=OrderByNameASC ou O=OrderByNameDESC retorna resultados considerando a diferença em minúsculas e maiúsculas para a primeira letra



## Simulação


Realizar qualquer pesquisa utilizando a consulta O=OrderByPriceASC com algum produto que tem um nome com letras minúsculas e outro com letras maiúsculas, que é maior que o primeiro, por exemplo (`produto E` e `Produto Z`).
Neste caso, o `Produto Z` será mostrado primeiro, pois utiliza maiúsculas na primeira letra.



## Workaround


Corrigir os nomes dos produtos para todos eles usando o mesmo padrão: Todos com letras minúsculas na primeira letra ou Todos com letras maiúsculas na primeira letra.

