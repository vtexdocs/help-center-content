---
title: Pedido com status de Verificação de Fatura não é atualizado para Faturação.
id: 2FRiGkhLT3JID4I5MvoGo6
status: PUBLISHED
createdAt: 2022-03-03T18:37:58.724Z
updatedAt: 2022-11-25T22:04:20.586Z
publishedAt: 2022-11-25T22:04:20.586Z
firstPublishedAt: 2022-03-03T18:37:59.222Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: pedido-com-status-de-verificacao-de-fatura-nao-e-atualizado-para-faturacao
kiStatus: Backlog
internalReference: 500245
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Devido a uma inconsistência, há uma diferença entre o que foi realmente capturado e o que foi solicitado para a captura. Tornando impossível a fatura do pedido.



## Simulação


Não é possível simular este problema, mas podemos ver que ele existe verificando com a API https://{account}.myvtex.com/api/payments/pvt/transactions/{transactionId}/settlements requests and actions.
Se houver uma divergência entre os valores totais, então podemos confirmar a inconsistência




## Workaround


A maneira como resolvemos isso atualmente é inserir uma entrada de liquidação com o valor diretamente no banco de dados, assim, quando clicamos para faturar na OMS, quem ligar para o gateway entenderá que os valores correspondem, e não precisamos mais ligar para nenhuma liquidação, permitindo que a ordem seja movimentada

