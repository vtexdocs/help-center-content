---
title: 'Encomendas Vendedor 1 não tem notificações sobre o tipo de gancho de Encomendas para Pagamento Estatal Aprovado'
id: 4FurUuRzROSdEckWPFXH1w
status: PUBLISHED
createdAt: 2022-08-18T18:04:03.821Z
updatedAt: 2022-11-25T22:01:47.345Z
publishedAt: 2022-11-25T22:01:47.345Z
firstPublishedAt: 2022-08-18T18:04:04.564Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: encomendas-vendedor-1-nao-tem-notificacoes-sobre-o-tipo-de-gancho-de-encomendas-para-pagamento-estatal-aprovado
kiStatus: Backlog
internalReference: 640925
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Encomendas Vendedor 1, onde o MKT e FFMT está na mesma conta, não tem notificações sobre o tipo de gancho de Encomendas para o estado "Pagamento-Aprovado".

O S3 não está salvando este status, e devido ao fato de que as notificações não estão sendo enviadas.



## Simulação



Certifique-se de que a configuração do gancho tenha o tipo configurado como FromOrders e o pagamento do estado - aprovado no filtro.
Gerar um tipo de ordem de venda 1.
Nenhuma notificação será enviada.

Confirmar em logs Splunk.



## Workaround


Se possível, o cliente pode usar o tipo "FromWorkflow". Neste tipo, a notificação é OK.

