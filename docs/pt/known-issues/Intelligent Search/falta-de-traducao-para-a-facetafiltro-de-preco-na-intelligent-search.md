---
title: "Falta de tradução para a faceta/filtro de preço na Intelligent Search"
id: 6c6GnC1dKGViJ2h0ZoY5pm
status: PUBLISHED
createdAt: 2024-01-31T21:33:04.796Z
updatedAt: 2024-01-31T21:33:05.556Z
publishedAt: 2024-01-31T21:33:05.556Z
firstPublishedAt: 2024-01-31T21:33:05.556Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: falta-de-traducao-para-a-facetafiltro-de-preco-na-intelligent-search
locale: pt
kiStatus: Backlog
internalReference: 974840
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O Intelligent Search não aplica a tradução ao nome do filtro/faceta "price" para idiomas adicionais quando consultado via REST API.

O idioma principal ainda retorna a cadeia de caracteres esperada como sua configuração interna, mas qualquer outro idioma retornará isso com "Price" como um valor fixo.

## Simulação


Em uma loja com vários idiomas, defina as traduções para o contexto da Pesquisa inteligente por meio do serviço de mensagens para os idiomas secundários e consulte-o usando a API de facetas. Os valores de "Price" não serão considerados, embora funcionem para qualquer outro rótulo, como as categorias e a marca.



## Workaround


N/A




