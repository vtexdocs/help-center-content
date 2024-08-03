---
title: 'Desconto nominal + Mais por menos + Divisão para o segundo item --> desconto incorreto'
id: 4hxRWUY6P8aDR9T1KHd3Yf
status: PUBLISHED
createdAt: 2024-07-25T16:48:26.511Z
updatedAt: 2024-07-25T16:48:27.336Z
publishedAt: 2024-07-25T16:48:27.336Z
firstPublishedAt: 2024-07-25T16:48:27.336Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: desconto-nominal-mais-por-menos-divisao-para-o-segundo-item-desconto-incorreto
locale: pt
kiStatus: Backlog
internalReference: 1071119
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao configurar uma promoção de desconto nominal acumulada com a promoção "mais por menos", quando há um desconto na promoção "mais por menos" apenas para 1 de 2 itens, isso leva a um desconto incorreto no segundo item do pedido devido à divisão do checkout.

Por exemplo, digamos que haja um desconto de 50% somente para 1 de 2 itens em uma compra e ganhe e, em seguida, um desconto de -$300, com ambas as promoções acumuladas.

Digamos que o item custe US$ 200 e 2 sejam inseridos.

Os descontos **esperados** seriam:

Item (1) ---> -$100 + -$100 --> o segundo item custa apenas $100 porque não há "espaço" adicional para ser reduzido de seu preço.
Item (2) --> -$200 ---> o restante do desconto para compor o total de -$300

No entanto, o cenário que **acontece atualmente** é:

Item (1) ---> -$100 + -$100 --> o segundo item é de apenas $100 porque não há "espaço" adicional para ser reduzido de seu preço.
Item (2) --> **-$100 ---> o preço do primeiro item, a partir da divisão, é replicado**

Isso só acontece se os itens com desconto forem mais de 2 unidades do mesmo SKU e o "combo" de promoções especificado acima.

## Simulação


1 - criar uma promoção percentual
2 - crie uma promoção "compre e ganhe" que dê desconto apenas para o segundo item
3 - insira 2 unidades do referido item no carrinho

OBS: a combinação de preços e descontos deve ser feita de forma que o "valor a ser descontado" do preço do 1º item não seja suficiente para compor 50%+ do valor nominal do descont

## Workaround


-






