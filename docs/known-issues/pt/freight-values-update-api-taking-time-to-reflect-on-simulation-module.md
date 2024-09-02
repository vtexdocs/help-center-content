---
title: 'Atualização de valores de frete API que leva tempo para refletir sobre o módulo de simulação'
id: 7Gclw70xDYX34fOah2aWAa
status: PUBLISHED
createdAt: 2022-07-26T17:47:10.996Z
updatedAt: 2023-01-03T20:23:50.817Z
publishedAt: 2023-01-03T20:23:50.817Z
firstPublishedAt: 2022-07-26T17:47:11.865Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: atualizacao-de-valores-de-frete-api-que-leva-tempo-para-refletir-sobre-o-modulo-de-simulacao
locale: pt
kiStatus: Backlog
internalReference: 621230
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As atualizações do valor do frete estão levando mais de 1 dia para refletir sobre a simulação de embarque quando a atualização foi solicitada usando o método API POST. Esta questão é intermitente, geralmente a atualização leva apenas alguns minutos.



## Simulação


Use a API para atualizar os valores de frete, então você verá a atualização no módulo de Logística, que pode ser confirmada usando o ponto final da API GET Freight values ou baixando a planilha de valores de frete. No entanto, esta atualização pode não ser refletida com precisão na simulação de embarque, e você verá os valores antigos como possibilidades na simulação.

Passos:

1 - Atualização dos valores de frete => POST API /api/logística/pvt/configuração/configuração/carga/valores/atualização

2- Verificar a modificação da atualização em => API GET /api/logística/pvt/configuração/carga/0/valores (ou você pode ver esta atualização também baixando a planilha de valores de frete)

3 - Usando simulação de embarque no Admin ou na API de simulação de carrinho mostrará os valores antigos, não os corretos executados nos passos 1 e 2.



## Workaround


A solução para este caso é baixar a planilha e carregar a mesma planilha para a Política de Embarque.

