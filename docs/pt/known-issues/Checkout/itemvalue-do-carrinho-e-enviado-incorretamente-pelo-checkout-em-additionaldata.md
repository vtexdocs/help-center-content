---
title: "item.value do carrinho é enviado incorretamente pelo checkout em AdditionalData"
id: 60ZOoWOF1XNulbQ9aGdSsO
status: PUBLISHED
createdAt: 2024-12-05T20:02:47.963Z
updatedAt: 2024-12-05T20:02:48.774Z
publishedAt: 2024-12-05T20:02:48.774Z
firstPublishedAt: 2024-12-05T20:02:48.774Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: itemvalue-do-carrinho-e-enviado-incorretamente-pelo-checkout-em-additionaldata
locale: pt
kiStatus: Backlog
internalReference: 640386
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando há uma divisão de quantidade na priceDefinition devido ao arredondamento do multiplicador de unidades, o gateway pode receber um `value` e uma `quantity` diferentes no objeto do carrinho. Portanto, isso pode fazer com que o gateway execute uma solicitação em que o miniCart.Items tenha a soma dos itens diferente do valor total do pagamento.

## Simulação



- Faça um pedido com um carrinho com uma divisão de quantidade no campo priceDefinition no formulário de pedido.
- Compare o "miniCart.Items" da transação e o "priceDefinition.sellingPrices" dos pedidos, pois eles podem ter valores e quantidades diferente

## Workaround


N/A



