---
title: "Inconsistência na exibição da origem dos cancelamentos de pedidos na API Get Orders"
id: q1IZl1NguWHGzpNzro4le
status: PUBLISHED
createdAt: 2025-06-25T18:27:30.911Z
updatedAt: 2025-06-26T19:19:58.004Z
publishedAt: 2025-06-26T19:19:58.004Z
firstPublishedAt: 2025-06-25T18:27:31.540Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: inconsistencia-na-exibicao-da-origem-dos-cancelamentos-de-pedidos-na-api-get-orders
locale: pt
kiStatus: Backlog
internalReference: 1249934
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns casos de pedidos originados do fluxo nativo entre o marketplace e o vendedor, quando o cancelamento é iniciado automaticamente pelo sistema (por exemplo, falha de pagamento ou regras internas), as informações de origem do cancelamento podem não ser exibidas corretamente nas respostas das APIs Get Order e Orders do OMS.

O campo cancellationData, que identifica historicamente a origem do cancelamento (como requestedByPaymentNotification), pode conter informações genéricas - como atendimento - ou pode não exibir nenhum detalhe. Isso se deve ao processo de mesclar informações de cancelamento entre o marketplace e o vendedor, que pode substituir dados relevantes dependendo da ordem dos eventos.

## Simulação



- Gerar um pedido em uma conta com integração entre o vendedor e o marketplace.

- Simule um cancelamento automático, por exemplo, devido a uma falha na autorização de pagamento.

- Acesse a API Get Order do OMS ou Orders.

- Observe que o campo `cancellationData` pode não indicar claramente que o cancelamento foi feito pelo módulo de pagamento.

- Se possível, compare-o com a resposta da API SOS Orders, onde a origem geralmente aparece corretamente

## Workaround


Atualmente, para identificar corretamente a origem do cancelamento nos casos afetados, é necessário o apoio da equipe interna.

Recomendamos a abertura de um tíquete para analisar manualmente os registros e validar a origem real do cancelamento.






