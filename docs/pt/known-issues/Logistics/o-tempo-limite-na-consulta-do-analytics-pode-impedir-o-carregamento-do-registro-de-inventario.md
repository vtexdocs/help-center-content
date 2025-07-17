---
title: "O tempo limite na consulta do Analytics pode impedir o carregamento do registro de inventário"
id: MtypX7b6X8DdljjmMIumd
status: PUBLISHED
createdAt: 2025-01-08T13:02:11.842Z
updatedAt: 2025-01-08T13:08:25.212Z
publishedAt: 2025-01-08T13:08:25.212Z
firstPublishedAt: 2025-01-08T13:02:12.879Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: o-tempo-limite-na-consulta-do-analytics-pode-impedir-o-carregamento-do-registro-de-inventario
locale: pt
kiStatus: No Fix
internalReference: 1159693
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Na interface do usuário do inventário, o registro de atualização às vezes não é carregado para SKUs específicos, exibindo a mensagem de erro: `Houve um erro ao carregar os dados. Tente novamente.` A solicitação falha com a mensagem de exceção: `Request failed with status code 500`, que indica um tempo limite na consulta ao Analytics (onde os dados estão armazenados). Como resultado, nenhum registro para a SKU é mostrado na interface do usuário.

Esse tempo limite pode ocorrer devido ao alto volume de atualização da SKU ou a outros fatores que podem fazer com que a consulta exceda o tempo máximo de execução permitido de 40 segundos.

## Simulação



## Workaround



