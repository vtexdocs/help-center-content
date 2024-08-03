---
title: 'O filtro "productClusterIds" é substituído por "productClusterNames" ao aplicar filtros adicionais'
id: 3d4BIZQBZgeK3eKwT8B1PZ
status: PUBLISHED
createdAt: 2023-09-13T22:42:57.138Z
updatedAt: 2023-09-21T18:04:57.946Z
publishedAt: 2023-09-21T18:04:57.946Z
firstPublishedAt: 2023-09-13T22:42:57.682Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: o-filtro-productclusterids-e-substituido-por-productclusternames-ao-aplicar-filtros-adicionais
locale: pt
kiStatus: Backlog
internalReference: 899508
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando uma pesquisa é iniciada com o filtro "productClusterIds", a aplicação de qualquer filtro adicional o converterá em "productClusterNames", perdendo a característica de apresentar os itens com a classificação definida manualmente na coleção de produtos.

## Simulação


O cenário pode ser visto em qualquer página, como `"store.com/111?map=productClusterIds"`, e aplicando qualquer filtro adicional, como uma categoria, especificação etc.

O usuário será direcionado para `"store.com/clothing/special-sale?initialMap=productClusterIds&initialQuery=111&map=category,productclusternames"`.



## Workaround


Não há nenhuma solução alternativa para o problema específico se você precisar da classificação especial, mas certifique-se de usar "productClusterIds" somente nos cenários necessários. Caso contrário, use o filtro como "productClusterNames".




