---
title: 'Atualização incorreta do preço quando uma promoção não aplica o desconto a todos os mesmos itens em um carrinho'
id: 1nXGR7pKjyc0Rmo0UzMOns
status: PUBLISHED
createdAt: 2024-05-01T20:07:04.369Z
updatedAt: 2024-05-01T20:07:16.339Z
publishedAt: 2024-05-01T20:07:16.339Z
firstPublishedAt: 2024-05-01T20:07:05.363Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: atualizacao-incorreta-do-preco-quando-uma-promocao-nao-aplica-o-desconto-a-todos-os-mesmos-itens-em-um-carrinho
locale: pt
kiStatus: Backlog
internalReference: 1025539
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando uma promoção aplica um desconto a apenas um item da mesma SKU (por exemplo, uma promoção Mais por Menos), se houver uma segunda promoção para essa mesma SKU, o cálculo do desconto será aplicado ao valor já descontado pela primeira promoção, resultando em um desconto menor do que o que seria concedido se a segunda promoção fosse aplicada ao preço inicial da SKU.

O problema ocorre na atualização de preços quando uma promoção não aplica o desconto a todos os mesmos itens em um carrinho e isso causa uma "divisão" (dois itens iguais com preços diferentes). Quando a segunda promoção é aplicada, ela é aplicada ao preço errado.

O erro não ocorre por causa de uma promoção específica.

## Simulação



## Workaround



