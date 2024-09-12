---
title: 'Valor divergente do pedido entre o mercado e o vendedor enquanto usa a substituição de preço e promoções'
id: 4OsDOEqVDpDTen3BFyHSYf
status: PUBLISHED
createdAt: 2023-02-17T18:37:04.409Z
updatedAt: 2023-02-17T18:37:05.327Z
publishedAt: 2023-02-17T18:37:05.327Z
firstPublishedAt: 2023-02-17T18:37:05.327Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: valor-divergente-do-pedido-entre-o-mercado-e-o-vendedor-enquanto-usa-a-substituicao-de-preco-e-promocoes
locale: pt
kiStatus: Backlog
internalReference: 756629
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o preço do item vendido _minus_ descontos de mercado tem um valor negativo, ele não pode ser aplicado ao item (eles não podem ter um preço negativo), então será considerado como zero e mexerá com outros cálculos. Isso acontece quando o mercado está usando o recurso de substituição do preço do vendedor, gerando valores maiores do que a própria conta do vendedor, e depois combinando com uma promoção.


##

## Simulação



- No mercado, configurar para sobrescrever o preço do vendedor e definir um preço mais alto;
- Criar uma promoção no mercado com valor maior do que o preço do vendedor;
- Colocar um pedido;
- Você verá a diferença no valor do pedido entre o mercado e o vendedor.


##

## Workaround


Definir o preço do vendedor igual ou superior ao valor dos descontos do mercado.



