---
title: 'Transação de compartilhamento de ordens divididas com o Change Seller: o fluxo de status é interrompido'
id: 7mWWQxEPrb6c4xDnZVakK5
status: PUBLISHED
createdAt: 2024-08-15T21:15:41.792Z
updatedAt: 2024-08-15T21:15:42.663Z
publishedAt: 2024-08-15T21:15:42.663Z
firstPublishedAt: 2024-08-15T21:15:42.663Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: transacao-de-compartilhamento-de-ordens-divididas-com-o-change-seller-o-fluxo-de-status-e-interrompido
locale: pt
kiStatus: Backlog
internalReference: 1082298
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Os pedidos divididos que compartilham a transação com vendedores de mudança não podem avançar para o faturamento. Embora todos os pedidos de vendedores intermediários sejam cancelados corretamente e o último vendedor seja faturado. Mesmo assim, a ordem do mercado não consegue completar todo o fluxo e avançar para o faturamento. E, possivelmente, após o tempo limite, acaba indo para o cancelamento.
Isso acontece porque o gateway com o conector usado não pode simplesmente "liquidar" a parte do pagamento correspondente ao vendedor que se adiantou e liquidou o pagamento total do pedido.
Quando o outro pedido faz uma mudança de vendedor, ele tenta executar uma etapa que se comunica com o gateway para informar essa mudança de vendedor (associado ao minicarro), pois para o gateway o pagamento já foi totalmente capturado devido ao erro nessa chamada, e o pedido não pode ser processado e progredir no Workflow.

## Simulação


Ordens divididas que compartilham a transação e uma dessas ordens precisa de mais de um vendedor de mudança.
Quando a transação for liquidada, o valor total será liquidado.
Portanto, ao final de todo o progresso, o mercado original da ordem dividida com o vendedor de troca não será transferido para o faturamento. E será cancelado após o tempo limite do fluxo de trabalho.



## Workaround


Infelizmente, não há atualmente nenhuma solução alternativa para esse cenário.





