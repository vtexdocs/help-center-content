---
title: "O pedido com status de verificação de fatura não é atualizado para faturado."
id: 2FRiGkhLT3JID4I5MvoGo6
status: PUBLISHED
createdAt: 2022-03-03T18:37:58.724Z
updatedAt: 2025-02-24T15:20:26.097Z
publishedAt: 2025-02-24T15:20:26.097Z
firstPublishedAt: 2022-03-03T18:37:59.222Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: o-pedido-com-status-de-verificacao-de-fatura-nao-e-atualizado-para-faturado
locale: pt
kiStatus: Backlog
internalReference: 500245
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Às vezes, o valor total da transação já foi capturado, mas seu status não é atualizado para "liquidado" ou "concluído". Isso pode acontecer quando há uma inconsistência entre o que foi **realmente capturado** pelo provedor externo e o que foi registrado pelo gateway como **solicitado para captura**. Isso torna impossível avançar a transação e faturar o pedido. O pedido ficará preso em "verificação de fatura".

## Simulação


Não é possível simular esse problema, mas podemos ver que ele existe verificando com a API `https://.myvtex.com/api/payments/pvt/transactions//settlements` a diferença entre a matriz de solicitações e a matriz de ações.
Se houver uma divergência entre esses dois valores totais, poderemos confirmar a inconsistência

## Workaround


Abra um tíquete para o Suporte ao produto - Pagamentos, para prosseguir manualmente com o fluxo da transação.




