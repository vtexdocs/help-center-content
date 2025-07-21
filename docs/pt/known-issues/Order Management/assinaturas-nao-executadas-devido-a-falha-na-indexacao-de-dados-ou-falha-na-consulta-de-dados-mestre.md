---
title: "Assinaturas não executadas devido a falha na indexação de dados ou falha na consulta de dados mestre"
id: 1PspxNexEEz4GvJ5BpZZgH
status: PUBLISHED
createdAt: 2024-01-04T20:27:03.576Z
updatedAt: 2024-07-09T17:24:39.295Z
publishedAt: 2024-07-09T17:24:39.295Z
firstPublishedAt: 2024-01-04T20:27:04.193Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: assinaturas-nao-executadas-devido-a-falha-na-indexacao-de-dados-ou-falha-na-consulta-de-dados-mestre
locale: pt
kiStatus: Backlog
internalReference: 961526
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A criação de solicitações de assinatura depende do retorno de uma consulta feita ao banco de dados de assinaturas; essa consulta é feita periodicamente para identificar quais assinaturas devem ser executadas naquele período; se essa consulta falhar ou não retornar uma assinatura específica, seu ciclo não será executado e nenhum erro será registrado, resultando, assim, em uma assinatura com a nextPurchaseDate no passado.

## Simulação


Não temos como simular esse cenário devido à dependência de outros sistemas

## Workaround


Para ajustar a `nextPurchaseDate`, o usuário final pode pausar a assinatura e reativá-la. Essa ação fará com que o sistema de assinatura recalcule a data de execução e o `nextPurchaseDate` será atualizado corretamente.

Ou o cliente pode atualizar a `nextPurchaseDate` da assinatura do usuário para uma data futura por meio da API.





