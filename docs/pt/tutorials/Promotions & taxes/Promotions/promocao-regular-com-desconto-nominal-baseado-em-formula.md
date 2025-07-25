---
title: 'Promoção regular com desconto nominal baseado em fórmula'
id: 2Pwrq6THyGViNedQG381jV
status: PUBLISHED
createdAt: 2022-04-18T16:51:30.736Z
updatedAt: 2024-12-10T18:19:53.940Z
publishedAt: 2024-12-10T18:19:53.940Z
firstPublishedAt: 2022-04-18T20:27:39.893Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: regular-promotion-with-nominal-discount-based-on-formula
locale: pt
legacySlug: promocao-regular-com-desconto-nominal-baseado-em-formula
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Ao criar uma [promoção regular](/pt/tutorial/promocao-regular--tutorials_327) em **Promoções** > **Promoções** > **Criar Promoção** > **Promoção Regular**, uma das opções disponíveis no momento de escolher o tipo e o valor do desconto é o __Desconto nominal baseado em fórmula__.

Selecionando esse tipo de desconto, você precisa criar uma fórmula para definir qual será o cálculo do desconto aplicado. Neste artigo, explicamos como construir uma fórmula para atender aos objetivos da sua promoção.

![tipo-desconto-formula](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Promotions%20&%20taxes/Promotions/promocao-regular-com-desconto-nominal-baseado-em-formula_1.png)

Para construir sua fórmula, você pode utilizar [variáveis](/pt/tutorial/regular-promotion-with-nominal-discount-based-on-formula--2Pwrq6THyGViNedQG381jV#variaveis), como total, freight e quantity, realizar [operações](/pt/tutorial/regular-promotion-with-nominal-discount-based-on-formula--2Pwrq6THyGViNedQG381jV#operacoes) (soma, subtração, multiplicação e divisão) e aplicar [funções](/pt/tutorial/regular-promotion-with-nominal-discount-based-on-formula--2Pwrq6THyGViNedQG381jV#funcoes), como `min` , `max` e `floor`.

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

Se desejar, você pode usar a função `min` para [limitar o valor do desconto](/pt/tutorial/regular-promotion-with-nominal-discount-based-on-formula--2Pwrq6THyGViNedQG381jV#limitar-o-valor-do-desconto) ou a função `max` para [priorizar o maior desconto possível](/pt/tutorial/regular-promotion-with-nominal-discount-based-on-formula--2Pwrq6THyGViNedQG381jV#priorizar-o-maior-desconto-possivel). A função `floor` permite obter a parte inteira de um valor, descartando a parte decimal. Veja mais detalhes sobre como aplicar essas funções a seguir.

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

![cenario-1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Promotions%20&%20taxes/Promotions/promocao-regular-com-desconto-nominal-baseado-em-formula_2.png)

#### Cenário 2

Outro cliente adicionou ao carrinho um item cujo preço é R$ 2600. Calculando 20% desse valor, o resultado é 520, já que `total * 0.2 = 520`. Como esse valor está acima do limite (R$10), o desconto aplicado será de R$10.

![cenario-2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Promotions%20&%20taxes/Promotions/promocao-regular-com-desconto-nominal-baseado-em-formula_3.png)

#### Cenário 3

Um terceiro cliente adicionou dois itens ao carrinho: um cujo preço é R$100 e outro cujo preço é R$2600. A soma desses valores é R$2700, visto que `total = 2700`. Ao calcular 20% do valor total, obtemos o resultado de 540, já que `total * 0.2 = 540`. Como esse valor está acima do limite (R$10), o desconto total aplicado será de R$10.

![cenario-3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Promotions%20&%20taxes/Promotions/promocao-regular-com-desconto-nominal-baseado-em-formula_4.png)

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

### Aplicar desconto múltiplo com valor arredondado para baixo

Para aplicar um desconto múltiplo com base no valor arredondado para baixo, use a função `floor`, que arredonda o resultado de uma divisão para o inteiro inferior.

Por exemplo, em uma promoção que oferece um desconto de R$10 para cada R$100 em compras, calcule quantas vezes R$100 se encaixa no valor total do pedido, arredondando para baixo. Multiplique então o valor de R$10 pela quantidade de parcelas inteiras de R$100 no total do pedido para determinar o desconto.

Veja abaixo a estrutura da fórmula que permite calcular o desconto:

```
floor(total / 100) * 10
```

Essa promoção aplica o valor máximo de desconto possível com base no total da compra, considerando apenas múltiplos inteiros de R$100. Por exemplo, se o total do pedido for R$250, o cálculo aplicará um desconto de R$20, já que R$100 cabe duas vezes em R$250.
