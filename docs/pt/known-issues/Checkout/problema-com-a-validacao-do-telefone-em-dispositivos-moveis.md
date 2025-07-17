---
title: "Problema com a validação do telefone em dispositivos móveis"
id: 2KpjpNZEbAZ7PFFPvMvwNA
status: PUBLISHED
createdAt: 2024-01-12T14:24:34.604Z
updatedAt: 2024-01-12T14:24:56.084Z
publishedAt: 2024-01-12T14:24:56.084Z
firstPublishedAt: 2024-01-12T14:24:35.388Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: problema-com-a-validacao-do-telefone-em-dispositivos-moveis
locale: pt
kiStatus: Backlog
internalReference: 964802
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A validação do campo do telefone em dispositivos móveis não está se comportando como pretendido. Quando o número esperado de caracteres é atingido, a validação marca corretamente o campo com uma verificação. Entretanto, quando caracteres adicionais são adicionados e, em seguida, removidos um a um, a validação não reconhece que a contagem de caracteres ainda é maior do que a esperada, marcando incorretamente a entrada como válida. A validação também marca como válidas entradas com menos caracteres do que o esperado.

## Simulação



## Workaround



