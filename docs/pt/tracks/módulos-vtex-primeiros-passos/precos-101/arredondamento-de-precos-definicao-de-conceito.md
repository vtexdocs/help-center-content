---
title: 'Arredondamento de Preços- Definição de conceito'
id: 1tUIUvF6BUkDgMsknGaMkF
status: PUBLISHED
createdAt: 2019-07-04T13:53:48.537Z
updatedAt: 2024-08-27T17:14:21.711Z
publishedAt: 2024-08-27T17:14:21.711Z
firstPublishedAt: 2019-07-17T19:47:01.156Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: rounding-rules-concept-definition
locale: pt
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precos-101
order: 12
---

## Definições

Arredondamento de Preços é uma estratégia de precificação que se baseia no __arredondamento de preços__. Este método tem como objetivo influenciar a decisão de compra do consumidor ao exibir preços com um formato mais amigável.

Um uso comum desta técnica é visto em casos em que produtos são vendidos com *“descontos de um centavo”*. Ao invés de ofertar uma televisão por um valor de R$ 4000,00, uma loja exibe um preço de R$ 3999,99.

A ideia é criar a impressão de que o produto está sendo vendido por um preço mais acessível.

## Regras do Arredondamento de Preços 

O preço psicológico depende de três condições para que uma nova regra seja cadastrada: 

- O intervalo de preços
- O número de dígitos que serão arredondados
- Os métodos de arredondamento.  

As regras de arredondamento de preços são aplicáveis apenas ao valor inicial do produto antes da aplicação de qualquer desconto ou promoção (preço base). Não se aplicam a preços fixos e promoções. Nesses casos, os valores são considerados finais e exatos, sendo exibidos aos clientes exatamente como foram definidos, sem qualquer ajuste adicional.

## Intervalo de preços

O __intervalo de preços__ é o critério que determina quais SKUs serão elegíveis à regra do arredondamento de preços. Nesta condição, você deve decidir quais faixas de preço serão afetadas pelo arredondamento. 

## Número de dígitos

Você deve definir quantos dígitos serão arredondados de acordo com o intervalo de preços estabelecido para uma determinada regra. 

Se o intervalo de preços for, por exemplo, de R$ 100,00 até R$ 500,00, __o número máximo de algarismos que podem ser arredondados é quatro__, já que o valor limite R$ 500,00 tem *cinco dígitos*. Neste cenário, você também pode escolher o arredondamento para __três, dois ou apenas um algarismo__.

O __número máximo__ de dígitos afetados pela regra de arredondamento de preços é variável. Isso vai depender da quantidade de algarismos da faixa de preço que foi estabelecida para a regra.

## Métodos de arredondamento

Para finalizar a configuração do arredondamento de preços, você deve escolher entre três __métodos de arredondamento__: a *Regra do Nove*, a *Regra dos Noves* e a *Regra do Zero*.

Com o objetivo de simplificar a explicação, vamos considerar que a regra de arredondamento será aplicada aos __dois primeiros algarismos__, *contados da direita para a esquerda*:

- *Regra do Nove*: o segundo algarismo, da direita para a esquerda, será __substituído por nove__ e o primeiro será __substituído por zero__. Vamos utilizar como exemplo um preço de *R$ 100,00*. O sistema irá considerar os dois valores mais próximos deste preço que tenham *“90”* como os dois primeiros algarismos, ou seja, *100,90* e *99,90*. Como a diferença entre 100,00 e 99,90 é __menor__ que a diferença entre 100,00 e 100,90, __o preço será arredondado para 99,90__.

- *Regra dos Noves*: o segundo algarismo, da direita para a esquerda, será __substituído por nove__ e o primeiro também será __substituído por nove__. Vamos utilizar como exemplo um preço de *R$ 100,00*. O sistema irá considerar os dois valores mais próximos deste preço que tenham *“99”* como os dois primeiros algarismos, ou seja, *100,99* e *99,99*. Como a diferença entre 100,00 e 99,99 é __menor__ que a diferença entre 100,00 e 100,99, __o preço será arredondado para 99,99__.

- *Regra do Zero*: o segundo algarismo, da direita para a esquerda, será __substituído por zero__ e o primeiro também será __substituído por zero__. Vamos utilizar como exemplo um preço de *R$ 100,25*. O sistema irá considerar os dois valores mais próximos deste preço que tenham *“00”* como os dois primeiros algarismos, ou seja, *100,00* e *200,00*. Como a diferença entre 100,25 e 100,00 é __menor__ que a diferença entre 100,25 e 200,00, __o preço será arredondado para 100,00__.

> ℹ️ Se a diferença do preço original para o valor superior e para o valor inferior for a mesma, o **arredondamento será feito para cima**.

## Exemplo

Digamos que uma televisão nova no mercado seja vendida por R$ 5.000,00. No entanto, você percebe que o volume de vendas dessa mercadoria não está de acordo com o esperado.

Para reverter essa situação e atrair novos consumidores, é possível usar uma estratégia de arredondamento de preços. Neste caso, uma possível aplicação da funcionalidade seria usar a __*Regra do Nove*__, com arredondamento de __três dígitos__. 

Assim, o valor cairia para R$4.999,00, dando a impressão de que o produto está com o preço mais em conta. 
