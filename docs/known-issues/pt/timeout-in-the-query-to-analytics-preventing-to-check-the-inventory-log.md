---
title: 'Tempo limite na consulta para que o Analytics impeça a verificação do registro de inventário'
id: 2gQhc3JF0bcm1JeLr0lluO
status: PUBLISHED
createdAt: 2024-02-19T20:54:22.012Z
updatedAt: 2024-07-03T15:26:48.484Z
publishedAt: 2024-07-03T15:26:48.484Z
firstPublishedAt: 2024-02-19T20:54:22.861Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: tempo-limite-na-consulta-para-que-o-analytics-impeca-a-verificacao-do-registro-de-inventario
locale: pt
kiStatus: Fixed
internalReference: 984482
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O registro de atualização na interface do usuário do inventário às vezes retorna o erro: A solicitação falhou com o código de status 500 para algumas SKUs específicas, devido a um tempo limite na consulta ao Analytics (onde os dados são armazenados), e nenhum registro para a SKU será mostrado na interface do usuário.

Esse tempo limite pode ser devido a um alto volume de atualizações na SKU ou a qualquer outro fator que faça com que essa consulta demore mais do que o tempo máximo de 40s;

## Simulação


Devido ao fato de a variável ser o tempo de resposta da consulta ao Analytics, não é possível replicar de forma concisa.



## Workaround


Não há nenhuma solução alternativa disponível.




