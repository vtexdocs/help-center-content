---
title: "Inconsistência nos status dos pedidos entre o OMS e o Pick and Pack"
id: 2qI7W8nPArA4JQKI3K3Hwx
status: PUBLISHED
createdAt: 2025-07-14T19:00:35.543Z
updatedAt: 2025-07-14T19:00:36.132Z
publishedAt: 2025-07-14T19:00:36.132Z
firstPublishedAt: 2025-07-14T19:00:36.132Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: inconsistencia-nos-status-dos-pedidos-entre-o-oms-e-o-pick-and-pack
locale: pt
kiStatus: Backlog
internalReference: 1259680
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Em alguns cenários, os pedidos que foram cancelados no OMS continuam a ser exibidos como "Ready for Handling" na lista de pedidos Pick and Pack em vez de serem atualizados automaticamente para o status de cancelados.

Isso gera confusão operacional, pois o mesmo pedido pode mostrar status divergentes entre os módulos OMS e Pick and Pack. Esse comportamento foi relatado e está associado a problemas intermitentes de sincronização entre o OMS e o Pick and Pack, historicamente vinculados a erros (como timeouts ou falhas no fluxo de eventos) na infraestrutura responsável pela propagação das atualizações de status.

## Simulação



Para reproduzir o problema:


1. Crie um pedido em uma conta VTEX com a opção Pick and Pack ativada.
2. No OMS, cancele o pedido seguindo o fluxo de cancelamento padrão.
3. Verifique o mesmo pedido no painel do Pick and Pack para ver se ele ainda aparece como "Ready for Handling".
4. Compare o status do pedido entre o OMS e o Pick and Pack.
5. Nos casos em que esse erro ocorre, o pedido é cancelado no OMS, mas permanece "Ready for Handling" no Pick and Pack

## Workaround



Não temos uma solução alternativa para esse comportamento. Atualmente, somente o lado do produto/engenharia pode resolver a discrepância.

Um tíquete de produto deve ser aberto para tomar as medidas necessárias.





