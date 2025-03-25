---
title: 'A viewpart “shippingValue” não exibe prazos em horas corretamente'
id: 5hvl9eGxPLZAuNcFAFc9Vb
status: PUBLISHED
createdAt: 2019-09-09T20:07:14.796Z
updatedAt: 2022-12-22T20:48:53.944Z
publishedAt: 2022-12-22T20:48:53.944Z
firstPublishedAt: 2019-09-09T20:16:10.874Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: shippingvalue-viewpart-incorrectly-displays-delivery-times-in-hours
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

A viewpart `<vtex.cmc:shippingValue/>`, que pode ser usada na página de produto para calcular o valor do frete e o prazo de entrega, não exibe corretamente prazos em minutos ou horas.

Por exemplo: uma transportadora de nome “Expresso” com prazo de até 4 horas para a entrega será apresentada com o texto abaixo:

`Frete Expresso, entrega em 4h dias para o CEP 22250-040.`

## Simulação

- Acessar uma  página de produto que utilize essa viewpart.
- Ter um produto com prazo de entrega de minutos ou horas.
- Calcular o tempo de entrega por meio desse componente.
- Observar o resultado.

## Workaround

__Esse componente deve ser considerado obsoleto.__

Atualmente, indicamos que o cálculo de frete seja feito por meio da API de simulação de carrinho no Checkout.

Além disso, também é possível utilizar essa API por meio da [biblioteca Javascript “vtex.js”](https://github.com/vtex/vtex.js/tree/master/docs/checkout#simulateshippingitems-postalcode-country-saleschannel-deprecated).

