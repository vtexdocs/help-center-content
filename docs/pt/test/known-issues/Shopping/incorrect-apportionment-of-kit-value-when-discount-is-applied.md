---
title: 'Rateio incorreto do valor do kit quando desconto é aplicado'
id: mZLhWgjrvEa0eISE4syUE
status: PUBLISHED
createdAt: 2017-04-06T17:27:01.147Z
updatedAt: 2022-12-22T20:45:25.176Z
publishedAt: 2022-12-22T20:45:25.176Z
firstPublishedAt: 2017-05-18T19:56:56.627Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: rateio-incorreto-do-valor-do-kit-quando-desconto-e-aplicado
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Quando é aplicado um desconto, há uma divergência entre o valor total de um kit e a soma dos valores de seus componentes.

### Exemplo 1:

Um kit tem o preço de R$ 7,72. Este kit recebe um desconto de R$ 1,16. Quando o rateio do preço do kit é realizado entre seus componentes, a soma do preço dos componentes fica em R$ 7,70.

### Exemplo 2:

Um kit tem o preço de R$ 7,72. Este kit recebe um desconto de R$ 1,16. Quando o rateio do desconto é realizado entre seus componentes, a soma do desconto dos componentes fica em R$ 1,40.

Este erro ocorre por conta do arredondamento realizado nas divisões dos valores.

Com essa diferença de valores, os lojistas não conseguem inserir a Nota Fiscal em seus sistemas.

## Simulação

1. No Módulo **Catalog**, cadastrar um kit com 4 componentes;
2. No Módulo **Pricing**, crie uma promoção para esse Kit;
3. Feche um pedido com esse kit com a promoção aplicada;
4. O JSON ou XML do pedido vai exibir a divergência entre o valor total e o valor da soma das partes.

## Workaround

Este é um cenário intermitente. A solução momentânea é inserir manualmente os valores para que o ERP consiga gerar a nota fiscal com o valor correto.

