---
title: 'Skus do mesmo produto sendo criados separadamente (contas com o sinalizador Autoapprove ativado)'
id: 1nkfd9OuKTFsnBWe1k6dif
status: PUBLISHED
createdAt: 2023-02-15T12:22:35.143Z
updatedAt: 2023-11-28T19:01:37.291Z
publishedAt: 2023-11-28T19:01:37.291Z
firstPublishedAt: 2023-02-15T12:22:35.839Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: skus-do-mesmo-produto-sendo-criados-separadamente-contas-com-o-sinalizador-autoapprove-ativado
locale: pt
kiStatus: Fixed
internalReference: 467112
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O vendedor envia um lote com skus do mesmo produto (todas as variações possíveis do produto).

Em vez de serem criados como um produto com suas variações, todos os skus estão sendo criados separadamente.

Esse comportamento está ocorrendo porque a conta do marketplace tem o sinalizador Autoapprove ativado e o vendedor está enviando todos os skus de uma vez.

Normalmente, o sistema tem um bloqueio, por nome de produto, para evitar esse tipo de situação, pois o Matcher tem mais de uma fila para processar os skus. Mas esse bloqueio não está implementado no fluxo de trabalho Autoapprove.

## Simulação


1. Ative o sinalizador Autoapprove no Marketplace;
2. O vendedor envia um lote de produtos e seus skus (variações) de uma só vez;
3. O primeiro skus do produto é criado corretamente, mas os outros são criados separadamente

## Workaround


Para evitar essa situação, há duas maneiras possíveis.

1. O vendedor envia os skus lentamente dentro de um período de tempo;
2. Desativar o sinalizador Autoapprove no Marketplace.





