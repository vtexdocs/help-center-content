---
title: 'Contingency Mode: novo nome da funcionalidade Mode-off'
createdAt: 2026-06-22T00:00:00.000Z
updatedAt: 2026-06-22T00:00:00.000Z
contentType: updates
productTeam: Payments
slugEN: 2026-06-22-contingency-mode-new-name-for-the-mode-off-feature
locale: pt
announcementSynopsisPT: 'A funcionalidade Mode-off passa a se chamar Contingency Mode, com um propósito mais claro e um processo de retentativa mais rápido para transações elegíveis após a recuperação de um conector de pagamento.'
tags:
  - Melhoria
  - Pagamentos
---

A VTEX renomeou a funcionalidade para deixar mais claro seu propósito: atuar automaticamente em cenários de instabilidade temporária nos conectores de pagamento.

Além da mudança de nome, a funcionalidade foi revisada para tornar o processo de retentativa mais rápido e eficaz após a recuperação do conector.


## O que mudou?

O nome **Mode-off** foi substituído por **Contingency Mode** na documentação e nas comunicações sobre a funcionalidade.

O comportamento principal do recurso permanece o mesmo. Quando a VTEX identifica falhas técnicas recorrentes em um conector de pagamento, o **Contingency Mode** pode ser ativado automaticamente para ajudar a proteger as transações elegíveis enquanto o provedor se recupera.

Adicionalmente, a VTEX implementou uma melhoria no processo de retry: após a reativação do conector, as transações que estavam na fila passam a ser reprocessadas de forma mais ágil e eficiente.

Essa melhoria beneficia especialmente pedidos com entrega expressa, que tendem a ser mais sensíveis ao tempo de aprovação e poderão ser reprocessados de forma significativamente mais rápida após a recuperação do conector.



## O que precisa ser feito?

Nenhuma ação é necessária. A ativação, a recuperação do conector e as retentativas de transações elegíveis continuam a ser gerenciadas automaticamente pela VTEX.

Para mais detalhes sobre essa funcionalidade, acesse [Contingency Mode](https://help.vtex.com/pt/docs/tutorials/mode-off-faq).

