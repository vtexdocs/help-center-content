---
title: 'Arredondamento de preço incorreto quando o multiplicador de unidade é diferente de 1'
id: 1L5RNoTBkoJxq2c22KDTRU
status: PUBLISHED
createdAt: 2022-03-21T17:43:03.979Z
updatedAt: 2022-11-25T22:14:03.772Z
publishedAt: 2022-11-25T22:14:03.772Z
firstPublishedAt: 2022-03-21T17:43:04.349Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: incorrect-price-rounding-when-unit-multiplier-is-different-from-1
locale: pt
kiStatus: Backlog
internalReference: 426275
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O preço mostrado pelo bloco vtex.produto-preço diverge devido aos arredondamentos de multiplicação de unidades.

No exemplo abaixo, o preço do produto é de $47,50 e seu multiplicador unitário é de 0,25.

Portanto, para uma unidade (0,25), o preço individual é 47,50*0,25 = 11,875.

Entretanto, quando uma simulação de checkout é realizada para este produto, o Preço de venda devolvido é arredondado para apenas 2 casas decimais: 1187.

Este preço arredondado está sendo usado para calcular o preço de venda do componente, que é o preço de uma unidade inteira, sem considerar o multiplicador. Como é arredondado antes do cálculo, o Preço de venda final é incorreto.
Neste caso, 11,87*4 = 47,48.

Um efeito colateral causado por esta questão é que o Preço de venda é considerado diferente do Preço de lista do produto, e então o Preço de lista também é exibido.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Este comportamento ocorre apenas no contexto da busca, mas não no PDP. Neste caso, o preço de venda é correto.



## Simulação


Em um contexto de busca, carregar um produto que tenha multiplicador de unidade diferente de 1 e cujo preço unitárioMultiplicador* resulta em um número com mais de 2 decimais.



## Workaround


É possível desenvolver um componente personalizado para contornar este problema.

Além disso, existe uma possibilidade menos viável que é registrar apenas valores de preço que, quando multiplicados pela unidadeMultiplicador, não resultarão em frações de 3+ decimais.

