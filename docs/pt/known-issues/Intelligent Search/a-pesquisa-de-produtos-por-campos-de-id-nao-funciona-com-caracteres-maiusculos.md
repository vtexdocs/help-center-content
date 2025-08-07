---
title: "A pesquisa de produtos por campos de ID não funciona com caracteres maiúsculos"
id: iSeLIcjYkEsjj1OkotUqk
status: PUBLISHED
createdAt: 2025-04-04T00:45:00.414Z
updatedAt: 2025-04-04T00:45:01.483Z
publishedAt: 2025-04-04T00:45:01.483Z
firstPublishedAt: 2025-04-04T00:45:01.483Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: a-pesquisa-de-produtos-por-campos-de-id-nao-funciona-com-caracteres-maiusculos
locale: pt
kiStatus: Backlog
internalReference: 1205216
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A pesquisa por um ID, como o "refId" de um produto ou SKU, não funciona corretamente ao inserir caracteres maiúsculos.

A pesquisa não encontrará nenhum resultado pelo ID, mas poderá encontrar produtos se o ID corresponder a algum campo pesquisável do produto, o que pode vir do comportamento de autocorreção (_fuzzy_).

## Simulação



- Registre um produto com "refId" como "ABC123".
- Pesquise por "abc123", e o produto será encontrado.
- Pesquise "ABC123", e o produto não será encontrado

## Workaround


Crie um atributo de especificação para espelhar o valor desse ID e defina-o como um campo pesquisável. Ele não poderá aplicar a classificação mais alta para correspondências de ID nem funcionar para correspondências parciais de ID, mas ajudará o produto a ser encontrado.

