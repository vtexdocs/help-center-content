---
title: Quantidade sendo modificada no item errado com o componente da lista de produtos (IO/SF)
id: jWaas8MOVv5NYSImgA9ao
status: PUBLISHED
createdAt: 2022-12-16T18:10:39.004Z
updatedAt: 2022-12-16T18:41:03.772Z
publishedAt: 2022-12-16T18:41:03.772Z
firstPublishedAt: 2022-12-16T18:22:18.673Z
contentType: knownIssue
productTeam: Store Framework
author: authors_84
tag: Store Framework
slug: quantidade-sendo-modificada-no-item-errado-com-o-componente-da-lista-de
kiStatus: Backlog
internalReference: 402976
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

No componente ["vtex.product-list"](https://github.com/vtex-apps/product-list), utilizado no Minicart IO/SF ([vtex.minicart](https://github.com/vtex-apps/minicart) v2) ou no "Cart v0" ([vtex.checkout-cart](https://github.com/vtex-apps/checkout-cart)), quando um carrinho tem o mesmo item fatiado em mais de uma ocorrência (por exemplo, quando é necessário para o rateio de descontos ou talvez quando tem itemAttachments), para alterar a quantidade para sua segunda ocorrência chamará o API para sua primeira ocorrência, portanto, a quantidade somada para o item estará errada.

Outros efeitos colaterais: este bug está mudando a quantidade para itens completamente diferentes, ou o item está indo para uma terceira linha - que desaparece após recarregar a página, portanto, parece um pouco relacionado com o comportamento otimista do carrinho.

## Simulação

Considerando este carrinho: [https://checkoutio.myvtex.com/cart/add/?sku=282&qty=7&seller=1&sc=1](https://checkoutio.myvtex.com/cart/add/?sku=282&qty=7&seller=1&sc=1)
- as __7 unidades__ serão apresentadas como `1+6` devido à promoção (que cortou o item para garantir seu preço unitário após ser arredondado).
- A alteração do item __2nd__ de 6 para 8 deverá resultar em `1+8`(__9 unidades__)
- esta mudança está sendo aplicada no 1º item, portanto se comportando de 1 a 8
- o resultado final é `8+6` (__14 unidades*__)

*\*os itens serão reagrupados pela API, já que o arredondamento não é um problema para o preço resultante.*

Se o carrinho tiver SKUs completamente diferentes, onde ambos podem ser apresentados fatiados (3un do SKU A como `1+2` e 3un do SKU B como `1+2`), para alterar a quantidade para o segundo item ou em sua segunda ocorrência irá se comportar como os outros bugs mencionados.

## Workaround

N/A

