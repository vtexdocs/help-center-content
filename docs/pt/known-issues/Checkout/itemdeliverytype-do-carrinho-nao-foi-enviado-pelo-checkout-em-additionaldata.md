---
title: 'item.deliveryType do carrinho não foi enviado pelo checkout em AdditionalData'
id: lV8VxXUPOzO9cSMgNV4fj
status: PUBLISHED
createdAt: 2024-03-19T12:59:17.599Z
updatedAt: 2024-09-10T18:34:54.909Z
publishedAt: 2024-09-10T18:34:54.909Z
firstPublishedAt: 2024-03-19T12:59:18.450Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-itemdeliverytype-is-missing-sent-by-checkout-in-additionaldata
locale: pt
kiStatus: Backlog
internalReference: 1002115
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando há uma divisão de quantidade na `priceDefinition` devido ao arredondamento do multiplicador de unidades, o gateway não pode receber nenhum valor para `deliveryType` no objeto do carrinho. Portanto, isso pode fazer com que o provedor de pagamento negue o pagamento se ele usar esse campo...

## Simulação



- Faça um pedido com um carrinho com uma quantidade dividida no campo `priceDefinition` no formulário de pedido;
- Verifique o "miniCart.Items", ele pode não ter o ``deliveryType`

## Workaround


N/A



