---
title: 'A API do OrderForm impede a seleção do método de envio para o mesmo item em diferentes vendedores'
id: 4dEfq7lNqTLF7SFIOaRsc2
status: PUBLISHED
createdAt: 2023-01-27T21:56:04.190Z
updatedAt: 2023-07-05T14:33:51.370Z
publishedAt: 2023-07-05T14:33:51.370Z
firstPublishedAt: 2023-01-27T21:56:04.914Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-api-preventing-the-shipping-method-selection-for-the-same-item-under-different-sellers
locale: pt
kiStatus: Fixed
internalReference: 742139
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Embora um formulário de pedido ofereça suporte para que a mesma SKU seja adicionada várias vezes por meio de diferentes vendedores, ele não permite que o método de envio (SLA) seja selecionado individualmente, onde a logística de um vendedor é completamente independente dos outros.

Apesar disso, após informar o endereço ou escolher um método de envio disponível apenas para uma ocorrência específica do SKU, as demais ocorrências estarão sob um SLA diferente sem que isso seja um problema. Portanto, o problema se restringe à solicitação de seleção do SLA entre itens nesse cenário ou via simulação de orderForm.

## Simulação


Em um carrinho com o mesmo item adicionado mais de uma vez, mas por meio de vendedores diferentes, tente selecionar seus métodos de envio (SLAs) por meio da API usando opções diferentes para cada um. O mesmo cenário também pode ser tentado por meio da API de simulação, declarando um "selectedSlaId". A API recusará a ação apresentando a mensagem "Same item cannot have more than one SLA selected" (O mesmo item não pode ter mais de um SLA selecionado)

## Workaround


N/A




