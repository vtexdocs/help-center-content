---
title: Como é feito o rateio de frete
id: frequentlyAskedQuestions_155
status: PUBLISHED
createdAt: 2019-01-24T20:45:51.013Z
updatedAt: 2021-09-01T13:37:27.000Z
publishedAt: 2021-09-01T13:37:27.000Z
firstPublishedAt: 2019-01-24T22:13:11.668Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: como-e-feito-o-rateio-de-frete
legacySlug: como-e-feito-o-rateio-de-frete
subcategory: 8AGXmtpbTqUE2KQu0Swwk
---

O rateio do frete é a divisão do valor do frete entre os produtos do carrinho. Ele é feito para que o valor do frete seja discriminado na nota fiscal, de forma a justificar o valor total do frete que foi cobrado. 

O cálculo é feito considerando o peso de cada produto em relação ao peso total do carrinho de compras, de forma percentual. É com esse percentual que a divisão do valor total do carrinho é feita, o que significa que o valor total cobrado será dividido de forma percentual de acordo com o peso de cada item.

Por exemplo, em um carrinho o frete foi calculado no valor de $25,00 para cinco itens (produto A, produto B, produto C, produto D e produto E) totalizando 10kg. O valor do frete total é $25,00 que é a somatória do resultado do cálculo dos fretes de cada produto conforme abaixo:

*   O produto A tem 2 kg  que é 20% do peso do carrinho. O valor do frete para esse item do carrinho é  $5,00 (que corresponde a 20% do valor total do frete).
*   O produto B tem 1,75 kg que é 17,50% do peso do carrinho. O valor do frete para esse item do carrinho é $4,38 (que corresponde a 17,50% do valor total do frete).
*   O produto C tem 500g que é 5% do peso do carrinho. O valor do frete para esse item do carrinho é $1,25 (que corresponde a 5% do valor total do frete).
*   O produto D tem 4,5 kg que é 45% do peso do carrinho. O valor do frete para esse item do carrinho é $11,25 (que corresponde a 45% do valor total do frete).
*   O produto E tem 1,25 kg que é 12,5% do peso do carrinho. O valor do frete para esse item do carrinho é  $3,13 (que corresponde a 12,50% do valor total do frete).

Para fins de usabilidade de termos, utilizamos em nossa documentação o termo "peso" ao invés de "massa". Mesmo conhecendo a diferença entre os termos e a forma correta de uso, mantemos o uso de "peso" para melhor compreensão dos usuários.

<div class="alert alert-danger">
O peso do produto não pode ser zero. Isso pode causar problemas no cálculo do custo de frete no carrinho.
</div>

## Como visualizar o rateio do frete

É possível visualizar como esse rateio do valor do frete é feito no cálculo do frete. Você pode consultar como a divisão dos valores é feita no módulo de de envio no Admin (ao simular um envio, os valores  de frete aparecem de forma detalhada), ou por API (visualizar esses valores no JSON do pedido, como retornado pela rota [Get order](https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder), dentro do detalhe de cada item no campo logisticsInfo).

Para saber mais como funciona a simulação de frete leia o artigo [Simulador de envio](https://help.vtex.com/pt/tutorial/simulacao-de-frete--tutorials_144).

