---
title: 'O modo de arredondamento de teto/piso não está funcionando corretamente entre itens com multiplicador de unidade diferente de 1'
id: 5KzOM5kEp8QpkBTX7hdil1
status: PUBLISHED
createdAt: 2024-01-18T17:53:08.668Z
updatedAt: 2024-01-18T17:53:09.229Z
publishedAt: 2024-01-18T17:53:09.229Z
firstPublishedAt: 2024-01-18T17:53:09.229Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: roundingmode-ceilingfloor-not-working-properly-among-items-with-unitmultiplier-other-than-1
locale: pt
kiStatus: Backlog
internalReference: 968349
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



É possível definir, por meio de uma tarefa para a equipe de produtos, a alteração da forma como o valor do desconto é arredondado no carrinho.
Em um cenário em que a conta está usando um modo de arredondamento de teto ou piso, esse arredondamento não funcionará corretamente com itens com unitmultiplier diferente de 1.

Isso ocorre porque o unitMultiplier desse item é 100,0. Quando o RnB arredonda o valor do desconto para o checkout, ele arredonda o preço unitário. Portanto, ele pega o valor de uma unidade pequena e o arredonda para cima. Em seguida, ele pega o desconto total, divide-o pela quantidade vezes o unitMultiplier e arredonda-o para duas casas decimais.
Como o RnB leva em conta apenas duas casas decimais, ele arredonda para 0,01 ou 0,02.

## Simulação



Exemplo:
Desconto total: -3.96
Desconto unitário = -3,96 / (2*100) = -0,0198

Então, qual item receberá 0,0198% do desconto, em vez de 3,96%

## Workaround



Uma solução válida seria voltar a definir no roundingMode, para que o problema pare de ocorrer.





