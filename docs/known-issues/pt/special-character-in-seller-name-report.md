---
title: 'Caráter especial no relatório do nome do vendedor'
id: 13FMy6rGbNacrS7MUYTT48
status: PUBLISHED
createdAt: 2023-02-17T13:18:20.237Z
updatedAt: 2023-02-17T13:18:20.925Z
publishedAt: 2023-02-17T13:18:20.925Z
firstPublishedAt: 2023-02-17T13:18:20.925Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: carater-especial-no-relatorio-do-nome-do-vendedor
kiStatus: Backlog
internalReference: 756243
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Especificamente para o caráter especial ":", quando temos um vendedor com este caráter especial no nome, e tentamos filtrá-lo para a elaboração de relatórios, temos o seguinte quando o vemos em "devtools":

"Não pode retornar nulo para campo não-nulo ReportDetails.rowNumber".


##

## Simulação


Para simular este comportamento, é necessário selecionar um vendedor que contenha este caráter especial no nome e tentar remover um relatório do mesmo.


##

## Workaround


Para Workaround, este caráter especial deve ser removido do nome do vendedor.





