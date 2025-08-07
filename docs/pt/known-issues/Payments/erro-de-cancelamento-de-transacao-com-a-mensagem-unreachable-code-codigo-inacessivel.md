---
title: 'Erro de cancelamento de transação com a mensagem "Unreachable code" (código inacessível)'
id: 2Y4joZlyDhbNWU9ycw32U3
status: PUBLISHED
createdAt: 2024-03-12T16:34:10.113Z
updatedAt: 2024-03-12T16:34:11.037Z
publishedAt: 2024-03-12T16:34:11.037Z
firstPublishedAt: 2024-03-12T16:34:11.037Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: erro-de-cancelamento-de-transacao-com-a-mensagem-unreachable-code-codigo-inacessivel
locale: pt
kiStatus: Backlog
internalReference: 998435
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O cancelamento de uma transação completa pode falhar ao retornar a mensagem `Código inacessível` (visível apenas por meio da API).

Esse erro ocorre no cenário de divisão de pagamento; na interface do usuário, é possível ver os registros de tentativa de cancelamento, mas nenhuma resposta.

## Simulação


Não foi possível simular esse erro.



## Workaround


É possível cancelar os pagamentos separadamente (começando pelo valor mais baixo).




