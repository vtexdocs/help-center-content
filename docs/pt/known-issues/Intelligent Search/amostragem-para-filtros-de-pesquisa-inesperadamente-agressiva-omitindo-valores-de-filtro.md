---
title: "Amostragem para filtros de pesquisa inesperadamente agressiva omitindo valores de filtro"
id: 3r9WQkX3ptt2iWjC0xKTdM
status: PUBLISHED
createdAt: 2025-04-01T01:30:33.832Z
updatedAt: 2025-04-01T01:30:34.481Z
publishedAt: 2025-04-01T01:30:34.481Z
firstPublishedAt: 2025-04-01T01:30:34.481Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: amostragem-para-filtros-de-pesquisa-inesperadamente-agressiva-omitindo-valores-de-filtro
locale: pt
kiStatus: Backlog
internalReference: 1202555
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando uma pesquisa de produto encontra mais de 30.000 resultados, para fins de eficiência, é definido que os filtros de atributos sejam computados em cima apenas dos primeiros 30.000 produtos mais relevantes (seguindo as configurações de relevância da loja) dentro da pesquisa específica.

Devido a um problema, os filtros estão sendo computados sobre produtos que não são da pesquisa específica, reduzindo o universo de filtros que deveriam ser oferecidos porque são de produtos não relacionados.

## Simulação


Para simular o cenário, considere algo como uma loja com 500 mil produtos e uma categoria específica com 35 mil produtos.

Ao navegar nessa categoria, como se espera que a amostragem use os 30 mil produtos mais relevantes, os filtros devem estar suficientemente próximos de todos os valores que a categoria pode oferecer. Entretanto, com esse problema, ela pode oferecer menos filtros do que o esperado porque a amostragem foi preenchida com produtos de outras categorias cujos filtros não serão considerados

## Workaround


N/A

