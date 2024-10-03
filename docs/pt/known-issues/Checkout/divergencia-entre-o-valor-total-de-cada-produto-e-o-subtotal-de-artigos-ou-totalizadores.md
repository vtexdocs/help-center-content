---
title: 'Divergência entre o valor total de cada produto e o subtotal de artigos ou totalizadores'
id: 2Z8vR0cKkaSYQqF9MUX8PX
status: PUBLISHED
createdAt: 2022-01-24T20:46:09.666Z
updatedAt: 2022-11-25T22:40:22.075Z
publishedAt: 2022-11-25T22:40:22.075Z
firstPublishedAt: 2022-08-15T17:25:50.536Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: divergence-between-the-total-value-of-each-product-and-the-subtotal-of-items-or-totalizers
locale: pt
kiStatus: Backlog
internalReference: 331188
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

Em alguns casos, o valor total da encomenda difere da soma do valor total dos produtos (adicionando também o custo de envio e possíveis descontos, se existirem). Isto acontece porque o valor apresentado para os artigos faz parte do "preço de venda", uma informação da orderForm de encomenda que perde precisão devido a razões de arredondamento.

Nota: A causa conhecida pode também estar relacionada com a existência de produtos com uma unidade multiplicadora diferente de 1 na encomenda.

Um pequeno complemento é que isto gera o efeito secundário de que os descontos/promoções não aparecerão aplicados aos artigos, os quais continuarão com o seu preço original, aparecendo apenas nos totalizadores.

Os detalhes introduzidos também afetam a UI das encomendas na administração (OMS, que exibe o mesmo tipo de divergência) e podem afetar o JSON das encomendas.

No caso do JSON das encomendas, a informação "preço de venda" não deve ser utilizada devido à sua falta de precisão. Deve ser substituída pelo "preço" (preço unitário) dos artigos, juntamente com a quantidade comprada e possível existência de um multiplicador unitário, e também acrescentada/subtraída dos "priceTags" (que são modificadores de preço, depois descontos/adições). No entanto, obter o valor unitário a partir deste cálculo do valor total pode também resultar em questões de arredondamento.

Nota: Tal como o "preço de venda", o "preço" dos "priceTags" é arredondado e pode ser impreciso! Para procurar precisão e ter valores correspondentes aos totalizadores, deve ser utilizado o valor bruto dos "priceTags", que tem 5 casas decimais de precisão.


## Simulação

N/A

## Workaround


Personalização do CSS para esconder/mostrar os diferentes valores que a plataforma já fornece. Exemplo:

.cart-items .best-price .new-product-real-price,
.cart-items .quantidade-preço .preço total-preço,
.mini-cartão .item-preço {
    exibição: inline-block !importante;
}
.cart-items .best-price .new-product-price,
.cart-items .best-price .discount,
.cart-items .quantidade-preço .total-preço de venda,
.mini-cartão .preço {
    exibição: nenhuma !importante;
}

Como resultado, o carrinho de caixa e o minicartão serão baseados em **preço** e não em **preço de venda***.

