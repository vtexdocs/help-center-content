---
title: Skus do mesmo produto sendo criado separadamente (contas com a bandeira Autoapprove habilitada)
id: 1nkfd9OuKTFsnBWe1k6dif
status: PUBLISHED
createdAt: 2023-02-15T12:22:35.143Z
updatedAt: 2023-02-15T12:22:35.839Z
publishedAt: 2023-02-15T12:22:35.839Z
firstPublishedAt: 2023-02-15T12:22:35.839Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: skus-do-mesmo-produto-sendo-criado-separadamente-contas-com-a-bandeira-autoapprove-habilitada
kiStatus: Backlog
internalReference: 467112
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O vendedor envia um lote com skus do mesmo produto (todas as variações possíveis do produto).

Em vez de ser criado como um produto com suas variações, todos os skus estão sendo criados separadamente.

Este comportamento está acontecendo porque a conta no mercado tem a bandeira Autoapprove habilitada e o vendedor está enviando todos os skus de uma só vez.

Normalmente, o sistema tem um cadeado, pelo nome do produto, para evitar este tipo de situação, já que o Matcher tem mais de uma fila processando o skus. Mas esta fechadura não é implementada no fluxo de trabalho da Auto-aprovação.


##

## Simulação


1. Habilitar a bandeira Autoaprovar no Mercado;
2. O vendedor envia um lote de produtos e seus skus (variações) de uma só vez;
3. O primeiro skus do produto é criado corretamente, mas os outros são criados separadamente.


##

## Workaround


Para evitar esta situação, há duas maneiras possíveis.

1. O vendedor envia o skus lentamente dentro de um período de tempo;
2. Desativar a bandeira Autoapprove no Mercado.





