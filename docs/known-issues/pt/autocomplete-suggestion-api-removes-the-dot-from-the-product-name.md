---
title: 'A API de sugestão de preenchimento automático remove o ponto "." do nome do produto'
id: 55185IvERIwGQ3kH6H510O
status: PUBLISHED
createdAt: 2024-04-10T13:58:51.138Z
updatedAt: 2024-04-10T13:58:52.084Z
publishedAt: 2024-04-10T13:58:52.084Z
firstPublishedAt: 2024-04-10T13:58:52.084Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: a-api-de-sugestao-de-preenchimento-automatico-remove-o-ponto-do-nome-do-produto
locale: pt
kiStatus: Backlog
internalReference: 1014701
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Esse problema ocorre quando se pesquisa um termo e a sugestão de preenchimento automático retorna o nome do produto sem o caractere de ponto ".", mesmo que ele exista no nome do produto, resultando em resultados de pesquisa incorretos.

## Simulação



1. GET` https://..com.br/api/io/_v/api/intelligent-search/autocomplete_suggestions?query=`.
2. Observe as sugestões de preenchimento automático fornecidas pelo sistema.
3. Observe que o caractere de ponto está faltando no nome do produto selecionado.

Por exemplo, se o termo "headphone" (fone de ouvido) for pesquisado na API de sugestões de autocompletar, os resultados da sugestão, se contiverem um ponto no nome, serão exibidos como "Headphone Bluetooth 5 0" em vez de ter o ponto no número "5.0". O formato correto deve ser "Headphone Bluetooth 5.0".

Ao usar essa sugestão na API product_search, os resultados não serão retornados

## Workaround


N/A





