---
title: 'Como é calculado o custo de envio quando há um item com promoção de frete no carrinho?'
id: 3EaQjxkErC6OKAWCWYSMiw
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.018Z
updatedAt: 2023-03-29T19:56:11.668Z
publishedAt: 2023-03-29T19:56:11.668Z
firstPublishedAt: 2019-01-24T22:04:11.324Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: como-e-calculado-o-custo-de-envio-quando-ha-um-item-com-promocao-de-frete
legacySlug: como-e-calculado-o-custo-de-envio-quando-ha-um-item-com-promocao-de-frete
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

Este artigo tem como objetivo esclarecer como funciona o rateio do custo de frete entre os itens de um carrinho quando um destes itens possui uma promoção de frete.

## Divisão do custo de envio entre os itens

O custo de envio leva em conta o __peso dos produtos__ adicionados a um carrinho. Estes pesos estão cadastrados na [planilha de frete de uma transportadora](/pt/tutorial/como-montar-a-planilha-de-frete/).

Quando há mais de um item no carrinho, o custo do envio dividido por cada item é __proporcional ao seu peso__, tendo como referência o peso total do carrinho.

Vamos analisar como seria feito o cálculo da divisão do custo de envio num carrinho com 5 itens, com custo total de envio de 200 unidades monetárias:

<div class="alert alert-info">
Para descobrir o custo de envio de um carrinho, faça uma <a href="http://help.vtex.com/pt/tutorial/simulacao-de-frete/">simulação de frete</a>.
<br>
Para saber o peso de um SKU, acesse o cadastro do SKU na página <strong>Produtos e SKUs</strong> no menu <strong>Catálogo</strong> e busque por <strong>Peso para Frete</strong>.
</div>

- __Custo Total de Envio:__ 200
- __Peso do Produto A:__ 20
- __Peso do Produto B:__ 25
- __Peso do Produto C__: 15
- __Peso do Produto D__: 10
- __Peso do Produto E__: 30
- __PESO TOTAL__ = 100

O cálculo do custo de envio de cada item será dado pela seguinte fórmula: 

__Custo Total de Envio x (Peso do Produto / PESO TOTAL)__

Aplicando a fórmula acima, temos:

__200 x (20/100) = 40__

O *Custo Total de Envio* é __200__. Vemos que o *Peso do Produto A* representa __20%__ do peso total do carrinho (__20/100__). 

Portanto, o *Custo de Envio do Produto A* será __40__.

## Divisão do custo de envio quando há promoção de frete no carrinho

Quando há uma __promoção de frete__ para alguns itens no carrinho, o cálculo de rateio do custo de envio ocorre conforme descrito na seção anterior.

Vamos supor um cenário onde o __Produto B__ receba uma promoção de *10% no valor do seu frete*.

Aplicando a fórmula, temos:

__200 x (25/100) = 50__

O *Custo Total de Envio* é __200__. Vemos que o __Peso do Produto A__ representa __25%__ do peso total do carrinho (__25/100__). 

Portanto, o *Custo de Envio do Produto B* será __50__.

Como o produto B possui uma promoção de 10% no valor do seu frete, o custo de envio será:

__50 - (50 x 10%) = 45__

Caso o produto B tivesse uma promoção de Frete Grátis, seu custo de envio seria __zero__:

__50 - (50 x 100%) = 0__

Portanto, para calcular o impacto de uma promoção de frete no custo de envio de um item, é necessário calcular o custo de envio proporcional ao peso do item e aplicar o percentual de desconto a este valor.
