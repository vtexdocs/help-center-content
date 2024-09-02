---
title: 'Pesquisar eventos duplicados do Analytics'
id: 48h3ObR7qqRHvU36weCvjC
status: PUBLISHED
createdAt: 2023-03-15T19:40:23.229Z
updatedAt: 2024-08-05T16:28:52.160Z
publishedAt: 2024-08-05T16:28:52.160Z
firstPublishedAt: 2023-03-15T19:40:23.835Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: pesquisar-eventos-duplicados-do-analytics
locale: pt
kiStatus: Fixed
internalReference: 771986
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Alguns eventos dos relatórios da Pesquisa Inteligente estão duplicados, o que pode afetar a exibição de análise no módulo de administração de pesquisa.


#### FAQ

**1. Isso afeta todos os eventos da VTEX (por exemplo, Request Capture, painéis da página inicial do administrador, etc.)?

Não, as análises do Intelligent Search são calculadas de forma diferente e independente dessas métricas e eventos por enquanto. Esse problema afeta apenas a página Search > Analytics.

**2. Todas as métricas estão sendo calculadas em excesso?

Sim, todas as métricas brutas mostradas na página Search > Analytics estão sendo computadas em excesso no momento.

São elas: contagem de pesquisas, cliques em um termo, cliques exclusivos em um termo, contagem de transações após a pesquisa de um termo e receita gerada por essas transações, taxa de cliques e conversão.

**3. Os dados de "Exportar para CSV" também foram afetados?

Sim, os dados exportados para CSV também são afetados pelos dados supercomputados.

**4. Isso afeta o algoritmo Search Relevance e os resultados da pesquisa?

Não, embora o algoritmo de relevância da pesquisa também use os eventos de análise para calcular a pontuação de popularidade do produto, ele não usa as métricas agregadas.

## Simulação


O cenário pode ser visto ao verificar a página de administração de pesquisa para os relatórios/análises.



## Workaround


N/A

