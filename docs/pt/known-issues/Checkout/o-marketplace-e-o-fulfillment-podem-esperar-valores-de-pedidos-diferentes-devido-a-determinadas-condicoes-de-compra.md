---
title: "O Marketplace e o Fulfillment podem esperar valores de pedidos diferentes devido a determinadas condições de compra"
id: 5LoC3DwesBWH5kr2b5u6WD
status: PUBLISHED
createdAt: 2024-05-13T20:04:19.094Z
updatedAt: 2024-05-13T20:34:01.432Z
publishedAt: 2024-05-13T20:34:01.432Z
firstPublishedAt: 2024-05-13T20:04:20.144Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: o-marketplace-e-o-fulfillment-podem-esperar-valores-de-pedidos-diferentes-devido-a-determinadas-condicoes-de-compra
locale: pt
kiStatus: Backlog
internalReference: 1032473
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As camadas do Marketplace e do Fulfillment podem esperar valores diferentes para o pedido, impedindo a conclusão da compra.
Nesses casos, o `sellingPrice` do Marketplace para o item não corresponde ao `price` do Fulfillment.

## Simulação


O problema não está necessariamente restrito a esse passo a passo exato, mas é mais fácil de reproduzir da seguinte forma:

1. Defina as casas decimais do Marketplace e do vendedor como zero.
2. Na conta do vendedor, defina o preço de um item como 49950,00 e uma promoção de Fulfillment que aplique um desconto de 15% a ele.
3. Em um Marketplace, adicione 3 unidades do item do vendedor ao seu carrinho.
4. Tente concluir a compra. A mensagem de erro "O pedido solicitado não pôde ser criado. Please try again." será exibida

## Workaround


N/A





