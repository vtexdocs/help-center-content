---
title: 'O MDv2 retorna o erro "504 Gateway Timeout" quando tentamos atualizar um documento passando um símbolo ou caractere especial.'
id: 6GP5QBWyIAir2oKe08giT2
status: PUBLISHED
createdAt: 2023-08-09T13:04:34.819Z
updatedAt: 2023-08-09T13:04:35.446Z
publishedAt: 2023-08-09T13:04:35.446Z
firstPublishedAt: 2023-08-09T13:04:35.446Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: o-mdv2-retorna-o-erro-504-gateway-timeout-quando-tentamos-atualizar-um-documento-passando-um-simbolo-ou-caractere-especial
locale: pt
kiStatus: Backlog
internalReference: 852966
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O comportamento da API ao tentar atualizar um documento que contém um símbolo em um campo do tipo string, como `"name": "Product1 14€"`, retornará o erro 504 Gateway timeout e não atualizará o documento.

## Simulação



1. Faça uma solicitação PUT para atualizar um documento por meio da API e, no corpo, inclua o caractere especial em um campo do tipo string.

    { "name": "Product1 14€", ...}

2.  Observe a resposta da API e verifique se ela retorna o erro 504 Gateway timeout

## Workaround


Exclua o caractere especial e digite o nome do símbolo. Por exemplo: "`14 euros`"

