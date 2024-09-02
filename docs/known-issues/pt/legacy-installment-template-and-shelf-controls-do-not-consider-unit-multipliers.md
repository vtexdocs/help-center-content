---
title: 'O modelo de parcelamento legado e os controles de prateleira não consideram os multiplicadores de unidades'
id: 1E0Co7ssCUAKAgxCzlJoVn
status: PUBLISHED
createdAt: 2024-02-08T13:39:40.663Z
updatedAt: 2024-02-08T13:48:30.740Z
publishedAt: 2024-02-08T13:48:30.740Z
firstPublishedAt: 2024-02-08T13:39:41.744Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: o-modelo-de-parcelamento-legado-e-os-controles-de-prateleira-nao-consideram-os-multiplicadores-de-unidades
locale: pt
kiStatus: Backlog
internalReference: 979205
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, para a loja que usa o CMS legado, o modelo legado e os controles de prateleira não são ajustados se o SKU tiver um multiplicador de unidades.

Por exemplo, se você tiver um item com um multiplicador de unidades de 2 e um controlador de parcelamento, os dados exibidos nas prateleiras mostrarão apenas as opções de parcelamento de uma única unidade, em vez de se ajustarem a essa configuração.

## Simulação


1 - criar um sku com um multiplicador de unidades
2 - configure opções de parcelamento para ele
3 - configure um controlador relacionado a parcelas, como $product.InstallmentValue
4 - os dados exibidos serão relativos a uma única unidade, apenas

## Workaround


implemente uma personalização de front-end para substituir os dados originais que estão sendo exibidos.





