---
title: 'Inconsistência de eventos'
id: 2YnhehJXuJcsy3f3Rezn6X
status: PUBLISHED
createdAt: 2022-06-20T23:00:31.430Z
updatedAt: 2024-05-23T12:45:46.343Z
publishedAt: 2024-05-23T12:45:46.343Z
firstPublishedAt: 2022-06-20T23:00:31.899Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: event-inconsistency
locale: pt
kiStatus: Fixed
internalReference: 267299
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Quando o usuário faz um pedido no checkout, um novo fluxo de pedidos é iniciado. A partir desse momento, o gateway da VTEX é consultado quando os seguintes status de pedido são identificados: "Payment pending" (Pagamento pendente) e "Verifying invoice" (Verificando fatura). No status "Payment Pending", espera-se que uma notificação de pagamento seja enviada ao módulo Orders. Durante esse período, podem ocorrer alguns problemas com o processamento de eventos. Embora não haja apenas uma causa raiz diretamente relacionada ao problema do evento de processamento, qualquer outro problema interno ou externo vinculado ao sistema de notificação pode fazer com que o fluxo de pedidos seja bloqueado no status "pagamento pendente".

A fila de mensagens fornece um protocolo de comunicação assíncrono, no qual os eventos são colocados em uma fila para serem consumidos em um momento predeterminado no futuro. Assim, já mapeamos alguns cenários em que há inconsistência nesse fluxo para categorizá-los e resolvê-los um a um.


- Perda de evento/não gerado;
- Evento preso e não processado;
- Erros de processamento que podem causar inconsistências no banco de dados.

Este KI refere-se explicitamente aos cenários mencionados acima e não tem a intenção de esgotar todas as possibilidades de problemas de processamento de eventos que possam ocorrer. Novas causas-raiz ou problemas relacionados, como respostas ruins do provedor (o que acontece regularmente), podem levar a situações em que o pedido fica preso. Cada caso precisa ser investigado individualmente para determinar a causa raiz do problema.

## Simulação



Não há como simular esse comportamento.



## Workaround


Entre em contato com nossa equipe de suporte para reprocessar manualmente o evento.





