---
title: "A simulação de assinaturas retornou um erro quando o PickupPointID contém caracteres especiais"
id: aM2So6TmVffZ1ywtQsknS
status: PUBLISHED
createdAt: 2023-09-19T17:31:47.442Z
updatedAt: 2024-07-01T18:49:12.303Z
publishedAt: 2024-07-01T18:49:12.303Z
firstPublishedAt: 2023-09-19T17:31:48.217Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: a-simulacao-de-assinaturas-retornou-um-erro-quando-o-pickuppointid-contem-caracteres-especiais
locale: pt
kiStatus: No Fix
internalReference: 903332
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Para realizar um pedido de assinatura ou atualizar uma assinatura, o sistema de assinatura realiza uma simulação e, nessa simulação, utiliza os dados de entrega retornados pelo sistema de logística e, se nesses dados houver um ponto de coleta cujo ID esteja sublinhado, o sistema de assinatura não conseguirá escolher o SLA corretamente, gerando o erro "Invalid AddressProvider:...." na simulação e, consequentemente, não gerará o pedido.

## Simulação


1- Crie um ponto de coleta cujo ID tenha um sublinhado
2- Faça uma solicitação de assinatura escolhendo o ponto de coleta criado na etapa 1.
3- Aguarde a execução do primeiro ciclo e veja que ele não é executado e que o painel de assinatura registra um erro dizendo que o endereço é inválido

## Workaround


Exclua o ponto de coleta cujo ID está sublinhado, crie um novo e atualize a assinatura para que ela use esse novo ponto de coleta.





