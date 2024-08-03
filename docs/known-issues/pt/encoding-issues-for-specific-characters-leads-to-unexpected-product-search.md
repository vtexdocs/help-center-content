---
title: 'Problemas de codificação para caracteres específicos levam a uma pesquisa inesperada de produtos'
id: O0dM1H8ofJU0ahJRa6217
status: PUBLISHED
createdAt: 2024-04-24T22:09:33.395Z
updatedAt: 2024-04-24T22:09:34.217Z
publishedAt: 2024-04-24T22:09:34.217Z
firstPublishedAt: 2024-04-24T22:09:34.217Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: problemas-de-codificacao-para-caracteres-especificos-levam-a-uma-pesquisa-inesperada-de-produtos
locale: pt
kiStatus: Backlog
internalReference: 1022550
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Um problema de codificação pode afetar as pesquisas com caracteres especiais quando eles são indicados por meio do parâmetro "query", levando a resultados de pesquisa incorretos.

As pesquisas sem nenhum filtro podem usar o primeiro caminho do URL para indicar o termo de pesquisa, mas as pesquisas com filtros dependem do parâmetro "query" do URL.

## Simulação


Esse problema ocorre especialmente com o símbolo "+".

O termo de pesquisa "A+" funciona corretamente quando indicado pelo caminho do URL, mas se comportará como "A" quando indicado pelo parâmetro "query"

## Workaround


N/A





