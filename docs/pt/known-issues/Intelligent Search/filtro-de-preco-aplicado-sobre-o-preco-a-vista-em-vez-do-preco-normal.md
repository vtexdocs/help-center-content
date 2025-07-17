---
title: 'Filtro de preço aplicado sobre o "preço à vista" em vez do preço normal'
id: 2EEgRV1NxYuns4eF7F0ZqD
status: PUBLISHED
createdAt: 2024-02-15T19:39:53.576Z
updatedAt: 2024-02-15T19:39:54.436Z
publishedAt: 2024-02-15T19:39:54.436Z
firstPublishedAt: 2024-02-15T19:39:54.436Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filtro-de-preco-aplicado-sobre-o-preco-a-vista-em-vez-do-preco-normal
locale: pt
kiStatus: Backlog
internalReference: 982664
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os filtros de preço são aplicados sobre o valor "spotPrice", que é o preço para condições especiais de pagamento, em vez do preço normal do item.

Isso pode afetar as expectativas e, ao mesmo tempo, divergir da maioria dos lugares, que se concentram no preço normal, como normalmente fazem as prateleiras e o carrinho, ou propriedades como "priceRange" da API.

## Simulação


Considere um produto com preço de US$ 430 com 10% de desconto em um método de pagamento específico, gerando um "preço à vista" de US$ 387.

A filtragem por itens com preço entre US$ 300 e US$ 400 retornará esse produto, que normalmente será exibido na prateleira como US$ 430 (seu preço normal), gerando a percepção de divergência.

Da mesma forma, a propriedade "priceRange" da API responderá com os seguintes valores (considerando esse produto como o único resultado para essa consulta de pesquisa), alimentando a sensação de divergência:

    "priceRange": { "sellingPrice": { "highPrice": 430, "lowPrice": 430 }, "listPrice": { "highPrice": 430, "lowPrice": 430 }}

## Workaround


N/A





