---
title: 'A solicitação de serviço de imposto usa shippingData.address mesmo quando um carrinho tem dois endereços selecionados'
id: 21t5R3AmcllYam4mXqX6lY
status: PUBLISHED
createdAt: 2024-08-01T13:11:10.623Z
updatedAt: 2024-08-01T13:11:11.796Z
publishedAt: 2024-08-01T13:11:11.796Z
firstPublishedAt: 2024-08-01T13:11:11.796Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-request-uses-shippingdataaddress-even-when-a-cart-has-two-selected-address
locale: pt
kiStatus: Backlog
internalReference: 1074168
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Em um carrinho com itens para retirada e entrega, a simulação do checkout considera apenas as informações do objeto shippingData.address para a solicitação do serviço de imposto. Por exemplo, considerando que esses endereços são de estados diferentes e que o provedor de impostos considera impostos diferentes para cada estado, um dos itens terá o imposto errado aplicado.

## Simulação



- Configurar o serviço de impostos;
- Adicione dois itens a um carrinho com diferentes endereços selecionados: um para retirada e outro para entrega

## Workaround


N/A




