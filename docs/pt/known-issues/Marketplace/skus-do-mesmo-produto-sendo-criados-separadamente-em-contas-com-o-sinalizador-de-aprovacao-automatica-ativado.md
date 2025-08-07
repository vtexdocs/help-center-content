---
title: "Skus do mesmo produto sendo criados separadamente em contas com o sinalizador de aprovação automática ativado"
id: 5xWm9hzTO0Yuv0e2UuMgH6
status: PUBLISHED
createdAt: 2024-01-09T12:39:19.465Z
updatedAt: 2024-07-22T19:31:17.990Z
publishedAt: 2024-07-22T19:31:17.990Z
firstPublishedAt: 2024-01-09T19:59:00.420Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: skus-do-mesmo-produto-sendo-criados-separadamente-em-contas-com-o-sinalizador-de-aprovacao-automatica-ativado
locale: pt
kiStatus: Fixed
internalReference: 962986
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





