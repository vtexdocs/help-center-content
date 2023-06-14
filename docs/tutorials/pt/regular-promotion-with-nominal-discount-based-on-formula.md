---
title: Promoção regular com desconto nominal baseado em fórmula
id: 2Pwrq6THyGViNedQG381jV
status: PUBLISHED
createdAt: 2022-04-18T16:51:30.736Z
updatedAt: 2022-04-18T23:30:41.740Z
publishedAt: 2022-04-18T23:30:41.740Z
firstPublishedAt: 2022-04-18T20:27:39.893Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: promocao-regular-com-desconto-nominal-baseado-em-formula
legacySlug: promocao-regular-com-desconto-nominal-baseado-em-formula
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

Ao criar uma [promoção regular](https://help.vtex.com/pt/tutorial/promocao-regular--tutorials_327) em **Promoções e Taxas** > **Promoções** > 'Nova Promoção' > 'Promoção Regular', uma das opções disponíveis no momento de escolher o tipo e o valor do desconto é o __Desconto nominal baseado em fórmula__.

Selecionando esse tipo de desconto, você precisa criar uma fórmula para definir qual será o cálculo do desconto aplicado. Neste artigo, explicamos como construir uma fórmula para atender aos objetivos da sua promoção.

![tipo-desconto-formula](https://images.ctfassets.net/alneenqid6w5/5NTM35GkPQtUzA6CKDco9q/fa412a32b6d8d56b3652332ade308dd0/image1.png)

De modo geral, a fórmula para calcular o desconto nominal da promoção segue a mesma lógica das [fórmulas do Microsoft Excel](https://support.microsoft.com/pt-br/office/f%C3%B3rmulas-e-fun%C3%A7%C3%B5es-294d9486-b332-48ed-b489-abe7d0f9eda9), ou seja, você pode utilizar [variáveis](#variaveis) (`total`, `freight` e `quantity`), realizar [operações](#operacoes) (soma, subtração, multiplicação e divisão), e aplicar [funções](#funcoes) (`min` e `max`).

## Variáveis

Para construir a fórmula da sua promoção, você pode utilizar as variáveis descritas a seguir.

| **Variável** | **Descrição** |
|---|---|
| `total` | Soma dos preços dos produtos selecionados. |
| `freight` | Valor do frete. O frete utilizado na fórmula será o menor disponível para o pedido, independentemente da seleção do cliente. |
| `quantity` | Quantidade total de itens no carrinho. |

## Operações

Para realizar operações matemáticas, use os sinais convencionais em sua fórmula:

| **Operação** | **Sinal** |
|:---:|:---:|
| Soma | `+` |
| Subtração | `-` |
| Multiplicação | `*` |
| Divisão | `/` |

Você pode fazer uma operação de multiplicação para calcular o percentual de desconto desejado utilizando as [variáveis](#variaveis) que quiser. Exemplo: para aplicar um desconto de 50% sobre o valor total dos produtos selecionados, a fórmula seria `total * 0.5`.

Para priorizar um cálculo antes de outro, escreva o cálculo que deve ser realizado antes entre parênteses `()`. Exemplo: se uma loja quer aplicar o desconto de 40% sobre o valor total somado ao frete, a fórmula deve ser `(total + freight) * 0.4`.

<div class="alert alert-info">
  <p>Use sempre o ponto (<code>.</code>) como separador decimal.</p>
</div>

## Funções

Se desejar, você pode usar a função `min` para [limitar o valor do desconto](#limitar-o-valor-do-desconto) ou a função `max` para [priorizar o maior desconto possível](#priorizar-o-maior-desconto-possivel). Continue a leitura para mais detalhes sobre essas possibilidades.

<div class="alert alert-info">
<p>Ao utilizar funções, é necessário incluir um espaço entre a função e os parênteses de abertura. Exemplo: <code>min (total * 0.2, 10)</code>.</p>
</div>

### Limitar o valor do desconto

Caso queira limitar o valor máximo do desconto, você pode utilizar a função `min`, que apresenta como resultado o menor valor de um conjunto de valores.

Imagine o seguinte cenário: uma loja pretende aplicar um desconto de 20% sobre o valor total do carrinho, limitado a R$10.

Nesse caso, a fórmula precisa informar que se `total * 0.2` for maior que `10`, o desconto aplicado será somente `10`. Para isso, é possível estruturar a fórmula utilizando a função `min` conforme abaixo:

```
min (total * 0.2, 10)
```

Assim, a promoção vai aplicar o menor valor de desconto em cada caso, comparando o cálculo de 20% do total ao valor limite de R$10. Veja a aplicação prática desta promoção nos cenários a seguir.

#### Cenário 1

Um cliente adicionou ao carrinho um item cujo preço é R$45. Ao calcular 20% do total do preço, o resultado é 9, já que `total * 0.2 = 9`. Como 9 está abaixo do valor limite de desconto, o desconto aplicado será R$9.

![cenario-1](https://images.ctfassets.net/alneenqid6w5/22tobaXfukykfntCXBpISS/f02144b4ab13eedb33d12f478c273f3d/image3.png)

#### Cenário 2

Outro cliente adicionou ao carrinho um item cujo preço é R$ 2600. Calculando 20% desse valor, o resultado é 520, já que `total * 0.2 = 520`. Como esse valor está acima do limite (R$10), o desconto aplicado será de R$10.

![cenario-2](https://images.ctfassets.net/alneenqid6w5/6M3rMa2VKBXNtDV44J3x5w/8da8d4eb9f5facad8c1023e115a9cdae/image7.png)

#### Cenário 3

Um terceiro cliente adicionou dois itens ao carrinho: um cujo preço é R$100 e outro cujo preço é R$2600. A soma desses valores é R$2700, visto que `total = 2700`. Ao calcular 20% do valor total, obtemos o resultado de 540, já que `total * 0.2 = 540`. Como esse valor está acima do limite (R$10), o desconto total aplicado será de R$10.

![cenario-3](https://images.ctfassets.net/alneenqid6w5/2lYHI6Iw0pZ8sOyN282TDr/2d57ca1c8a1f0093721d6fc14fc96095/image2.png)

O desconto total de R$10 é distribuído proporcionalmente entre os itens, considerando o preço e a quantidade de cada um. Essa distribuição é feita automaticamente pela plataforma, seguindo a lógica explicada a seguir.

Primeiro, o valor total do desconto (R$10) é dividido pelo valor total dos itens (R$2700), da seguinte forma: `10 / 2700 = 0,0037037`.

Em seguida, multiplicando 0,0037037 pelo valor do primeiro item (R$100), obtemos o seguinte resultado: `0,0037037 * 100 = 0,37037037`. Logo, a quantia descontada do preço do primeiro item será arredondada para R$0,37. O preço final será R$99,63.

Já multiplicando 0,0037037 pelo valor do segundo item, obtemos o seguinte resultado: `0,0037037 * 2600 = 9,62962962963`. Portanto, a quantia descontada do preço do segundo item será arredondada para R$9,63. O preço final será R$2590,37.

### Priorizar o maior desconto possível

Para priorizar o maior desconto possível, você pode usar a função `max`, que apresenta como resultado o maior valor de um conjunto de valores.

Imagine que uma loja queira realizar uma promoção que aplique um desconto de 10% sobre o valor total do pedido somado ao frete, com desconto mínimo de 5 reais.

A fórmula precisa estipular que se (`total + freight) * 0.1` for menor que `5`, o desconto aplicado será `5`. Logo, ela deve ser estruturada da seguinte forma:

```
max ((total + freight) * 0.1, 5)
```

Assim, a promoção vai aplicar o maior valor de desconto em cada caso, comparando o valor mínimo de R$5 ao cálculo de 10% do total somado ao frete.
