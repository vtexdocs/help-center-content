---
title: 'Facetas de busca na API do Catálogo não retornam informações para produtos não disponíveis'
id: 1JrbscqI4BQgFqfVuRZIl8
status: PUBLISHED
createdAt: 2022-05-23T13:58:53.501Z
updatedAt: 2022-11-25T21:45:53.573Z
publishedAt: 2022-11-25T21:45:53.573Z
firstPublishedAt: 2022-05-23T13:58:53.924Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: facetas-de-busca-na-api-do-catalogo-nao-retornam-informacoes-para-produtos-nao-disponiveis
locale: pt
kiStatus: Backlog
internalReference: 583623
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Facetas de Pesquisa de Catálogo API / Portal Search Result Filtros não retornam informações para produtos indisponíveis e configurados para serem mostrados sem estoque. O produto aparecerá no Resultado da Busca, mas seus filtros não aparecerão.



## Simulação



- Criar uma categoria
- Criar um grupo de campo, dentro dessa categoria.
- Crie um campo SKU da categoria, contendo dois valores (que podem ser usados como filtros).
- Crie dois produtos, com um SKU cada um. E atribua um campo de SKU diferente para cada SKU.
(importante: não atribuir estoque aos produtos e fazê-los aparecer na página, mesmo que estejam fora de estoque).
- Ir para a página da categoria;
- Verifique o filtro SKU que não aparece - mesma resposta do Facets API `/api/catalog_system/pub/facets/search';



## Workaround


Não há solução.

