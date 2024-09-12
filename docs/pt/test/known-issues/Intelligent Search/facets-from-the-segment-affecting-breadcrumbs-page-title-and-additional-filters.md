---
title: 'Facetas do Segmento que afetam os breadcrumbs, o título da página e os filtros adicionais'
id: 3lBgcsjxiZxoDvnPhbMXgo
status: PUBLISHED
createdAt: 2024-06-27T22:57:42.875Z
updatedAt: 2024-06-27T22:57:43.965Z
publishedAt: 2024-06-27T22:57:43.965Z
firstPublishedAt: 2024-06-27T22:57:43.965Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: facetas-do-segmento-que-afetam-os-breadcrumbs-o-titulo-da-pagina-e-os-filtros-adicionais
locale: pt
kiStatus: Backlog
internalReference: 1057254
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A propriedade "facets" armazenada no Segmento/Sessão para um contexto de navegação funciona para limitar os resultados da pesquisa a filtros predefinidos. Por exemplo, ela é usada por "B2B Organizations" para restringir o que um usuário pode ver na loja.

Essas facetas podem afetar o comportamento de títulos de página e breadcrumbs, gerando valores inesperados que não fazem parte dos filtros aplicados na página. Todos os filtros são considerados ao gerar esses valores, não apenas os filtros explícitos da página, que devem ignorar as facetas do Segment.

Isso também pode afetar o URL da página à medida que você aplica filtros adicionais, que serão mesclados com as facetas do Segment.

## Simulação



- Associe um usuário a uma organização B2B que esteja limitada a algumas coleções de produtos (A);
- Crie uma página de destino que mostre uma coleção diferente (B);
- Os breadcrumbs e o título da página podem mostrar o nome da coleção A em vez da coleção B
- Selecione filtros de pesquisa adicionais na página de destino, como uma categoria ou marca;
- Observe que o URL (e também os breadcrumbs e o título da página) também mostrará a coleção A em vez de ficar limitado à coleção B

## Workaround


N/A

