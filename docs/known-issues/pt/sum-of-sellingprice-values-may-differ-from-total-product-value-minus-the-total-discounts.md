---
title: 'Soma dos valores de sellingPrice pode ser diferente do valor total de produtos subtraído pelo total de descontos'
id: wo1qtfZnDfI8EylRbXiPF
status: PUBLISHED
createdAt: 2019-09-13T18:08:45.753Z
updatedAt: 2022-12-22T20:45:50.832Z
publishedAt: 2022-12-22T20:45:50.832Z
firstPublishedAt: 2019-09-14T03:33:18.921Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: soma-dos-valores-de-sellingprice-pode-ser-diferente-do-valor-total-de-produtos-subtraido-pelo-total-de-descontos
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

A soma dos valores unitários dos produtos com o desconto aplicado (propriedade `sellingPrice`) pode ser diferente do valor total de produtos subtraído pelo total de descontos.

Isso ocorre porque o cálculo do desconto unitário é um rateio do desconto total entre todos os itens e suas quantidades, o que pode gerar problemas de arredondamento. Ao somar valores que foram arredondados, detecta-se a diferença em relação ao total original.

Sendo assim, o `sellingPrice` deve ser usado como mera referência, mantendo os totalizadores como valor real.

A ocorrência é potencializada em lojas que utilizam menos de 2 casas decimais, quando o arredondamento é mais utilizado.

## Simulação

Exemplo de ocorrência:

- Carrinho com 2 unidades de um produto que custa $190;
- Total de produtos em $380;
- Desconto de 25%;
- Total de descontos em $95;
- Valor unitário com desconto fica em $142,5;
- Se a loja não utiliza casas decimais, o valor unitário final será de $142.

Neste cenário:

- Total de produtos = $380;
- Total de descontos = $95;
- Total do pedido = $285.

Porém a soma do preço de venda dos itens, que já tem o desconto aplicado, fica em $284.

## Workaround

Não temos um workaround para este cenário.

