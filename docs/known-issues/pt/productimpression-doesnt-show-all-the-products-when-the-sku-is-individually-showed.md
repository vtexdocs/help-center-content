---
title: 'ProdutoImpressão não mostra todos os produtos quando o SKU é mostrado individualmente'
id: 43HBv7fXndckoe9mCbMlwW
status: PUBLISHED
createdAt: 2022-12-16T12:23:06.408Z
updatedAt: 2022-12-21T18:15:49.063Z
publishedAt: 2022-12-21T18:15:49.063Z
firstPublishedAt: 2022-12-16T12:23:06.957Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: produtoimpressao-nao-mostra-todos-os-produtos-quando-o-sku-e-mostrado-individualmente
locale: pt
kiStatus: Backlog
internalReference: 717617
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando a loja "separa" o SKU de um produto a ser exibido individualmente na fachada da loja, o ProductImpression do GTM só vê os produtos por seu productID, não por cada SKUId. Portanto, se o produto tiver 3 SKUs diferentes na página de busca, a ProductImpression o mostrará apenas como um produto.


##

## Simulação


Vá a qualquer loja que "desprenda" a SKU de um produto em produtos individuais e tente ver a Impressão do Produto da Camada de Dados no GTM.


##

## Workaround



N/A





