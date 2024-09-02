---
title: 'Como funciona a concorrência de promoções'
id: tutorials_2270
status: PUBLISHED
createdAt: 2017-04-27T21:55:27.997Z
updatedAt: 2024-08-23T16:45:30.591Z
publishedAt: 2024-08-23T16:45:30.591Z
firstPublishedAt: 2017-04-27T23:03:50.791Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: como-funciona-a-concorrencia-de-promocoes
locale: pt
legacySlug: entendendo-a-concorrencia-de-promocoes
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

O módulo de Promoções possui uma lógica para definir qual promoção será aplicada em uma compra, assim como o [Checkout](https://help.vtex.com/pt/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) precisa selecionar qual seller irá realizar o fullfilment do pedido. Essa lógica se chama concorrência de promoções.

Os cenários em que acontece concorrência de promoções são:

- Promoções com o mesmo tipo de desconto.
- Aplicação de mais de uma promoção no mesmo item.
- Promoções não [configuradas](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricoes-e-limitacoes-de-uso) para permitir acumular promoções.

Para entender como a seleção da promoção que será aplicada funciona, vamos entender alguns conceitos do módulo de Promoções.

- [Classificação das promoções](#efeitos-de-promocoes)
- [Ordenação de aplicação das promoções](#ordenacao-de-aplicacao-das-promocoes)
- [Acumulação de promoções](#acumulacao-de-promocoes)
- [Estratégias de concorrência de promoções](#estrategias-de-concorrencia-de-promocoes)

## Efeitos de promoções

Os efeitos de promoções são relacionados ao benefício que a promoção oferece. Existem quatro tipos:

- **Desconto no preço**: são as promoções que aplicam um desconto percentual ou nominal sobre o valor do produto. Aqui, estão incluídos alguns descontos da [promoção regular](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI), [desconto progressivo](https://help.vtex.com/pt/tutorial/desconto-progressivo--tutorials_324) e qualquer outra mecânica que incida sobre o preço de um item.
- **Desconto no frete**: são as [promoções com desconto no frete](https://help.vtex.com/pt/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW).
- **Brinde**: são as promoções que concedem um brinde ao cliente.
- **Fórmula**: são as promoções com tipo de desconto nominal baseado em [fórmula](https://help.vtex.com/pt/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV), que é uma das opções da promoção regular.

## Ordenação de aplicação das promoções

A ordenação é o processo que define em que ordem as promoções serão aplicadas no carrinho. Isso é importante para entender qual será o preço final dos itens do carrinho. Essa ordenação é baseada em dois critérios:

- [Ordenação por tipo de promoção e desconto](#ordenacao-por-tipo-de-promocao-e-desconto)
- [Ordenação por valor](#ordenacao-por-valor)

### Ordenação por tipo de promoção e desconto

As promoções inseridas no carrinho seguem a seguinte disposição:

1. Percentual
2. Nominal
3. Preço Máximo
4. Compre Junto (não é uma promoção regular)
5. Frete Percentual
6. Frete Nominal
7. Brinde
8. Fórmula

### Ordenação por valor

As promoções de um mesmo tipo inseridas no carrinho são comparadas pelo seu valor de desconto. Nesse momento, o módulo de Promoções procura sempre aplicar a promoção mais vantajosa para o comprador.

Para promoções do tipo brinde, a ordenação se dá pelo maior número de brindes concedidos pela promoção. 

Exemplo:

- Promoção 1: desconto de 30% sobre o valor do produto.
- Promoção 2: desconto de 50%.

A prioridade é dada àquela promoção que conceder o maior desconto, ou seja, o carrinho irá aplicar a __Promoção 2__ e em seguida a __Promoção 1__.

A **Promoção 1** será aplicada no valor do item já descontado pela **Promoção 2**.

## Acumulação de promoções

Quando as promoções são [configuradas](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricoes-e-limitacoes-de-uso) no campo `Permitir acumular promoções` para acumularem, elas são sempre aplicadas, independente do tipo, desde que suas condições sejam atendidas. 

Todavia, elas incidem no valor já descontado pela promoção que ganhou a concorrência de promoções não acumulativas. A ordem das promoções selecionadas seguirá a ordenação por tipo e valor, como descrito no item 1. 

Logo, a sequência de aplicação é:

![promocao3 PT](//images.ctfassets.net/alneenqid6w5/1LKDzbLkhua8Gk284SEwsk/997fdac9b6380c68a729bf4d48e20af8/promocao3_PT.png)

<div class="alert alert-warning">
Pedidos de origem <a href="https://help.vtex.com/pt/tutorial/configurar-promocao-para-marketplace--tutorials_406">Marketplace</a> e Fulfillment não reconhecem acúmulo de promoção, uma vez que o uso de promoções em Marketplaces VTEX ou externos é restrito a alguns tipos específicos.</div>

## Estratégias de concorrência de promoções

Após entender como as promoções são ordenadas e acumuladas, você poderá compreender  como a concorrência de promoções não acumulativas é realizada.

A seleção de cada promoção considera apenas as promoções do mesmo tipo de desconto (conforme descrito em [Efeitos de promoções](#efeitos-de-promocoes)) e que atendam, pelo menos, um produto em comum.

Promoções de tipos diferentes ou de mesmo tipo que atendem a produtos diferentes não concorrem entre si, ou seja, elas automaticamente acumulam.

Veja a seguir as duas estratégias de concorrência de promoções: 

- [Concorrência por cenário](#concorrencia-por-cenario)
- [Concorrência por item](#concorrencia-por-item)

<div class="alert alert-info">
Por padrão, todas as contas seguem a estratégia de concorrência por cenário. Caso o modelo de concorrência por item atenda melhor suas necessidades de negócio, <a href="https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM">abra um chamado com nosso time de suporte</a> e solicite a mudança.</div>

### Concorrência por cenário

A concorrência por cenário segue a lógica de agrupar as promoções que não competem com os mesmos produtos. Então, com cada grupo criado, é feita a comparação se o grupo ou alguma promoção individual oferece maior vantagem ao cliente. 

O que conceder o melhor desconto será aplicado ao carrinho. Veja nos exemplos abaixo:

#### Exemplo 1

Pedrinho vai comprar uma camiseta de R$100, com frete de R$30. No pedido, podem ser aplicadas cinco promoções. Todas as promoções aplicáveis foram [configuradas](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricoes-e-limitacoes-de-uso) no campo `Permitir acumular promoções` para não acumularem promoções, exceto pela primeira:

| Promoções acumulativas | Promoções não acumulativas |
| ----------- | ----------- |
| 10% off | Frete máximo de R$ 20 |
| X | 80% off no frete |
| X | Desconto nominal de R$50 |
| X | Brinde ao comprar a camisa |

O carrinho final terá os preços da camisa e do frete respectivamente iguais a R$45 e R$6. O sistema de promoções começa aplicando a lógica de concorrência de promoção:

- Camiseta de **R$100**.
   - Recebe desconto nominal de *R$50*. Novo valor: **R$50**. 

- Frete de **R$30**.
   - Recebe desconto de **80%**. Novo valor: **R$6**.
   - Frete máximo de **R$20** é aplicado, mas não é válido, pois o valor já está abaixo disso.

Em seguida, as promoções acumulativas são aplicadas:

- Camiseta de ~~R$100~~. **R$50**.
   - Recebe desconto percentual de **10%**. Novo valor: **R$45**.

Assim, a compra final de Pedrinho ficaria: 

- Camiseta por **R$45**.
- Frete por **R$6**.
- Brinde ao comprar a camisa.

#### Exemplo 2

Carla montou um carrinho com 1 camiseta e 1 sapato. Esses itens fazem parte de coleções:

| Coleção | Itens | Valores |
| ----------- | ----------- |  ----------- |
| 1 | Camiseta | R$ 100 |
| 1 | Sapato | R$ 500 |
| 2 | Camiseta | R$ 100 |

- Promoções:
   1. **10%** na primeira coleção. Configurado para não acumular no campo `Permitir acumular promoções`.
   2. **25%** na segunda coleção. Configurado para não acumular no campo `Permitir acumular promoções`.
   3. **5%** no produto. Configurado para acumular no campo `Permitir acumular promoções`. Contempla todos os produtos do carrinho.

Como as duas primeiras promoções são aplicadas no produto Camiseta e não estão marcadas para acumular, elas entram em concorrência. 

Quando as promoções entram em concorrência, o módulo de promoções vai escolher a promoção que fornecerá o melhor desconto para o cliente. Veja abaixo um exemplo de concorrência por cenário.

##### Cenário 1: Aplicando a promoção 1 de 10%

| Itens | Promoções aplicadas | Valores |
| ----------- | ----------- |  ----------- |
| Camiseta | Promoção 1 e Promoção 3 | R$ 85,50 |
| Sapato | Promoção 1 e Promoção 3 | R$ 427,50 |

A camiseta ficaria com o preço de **R$ 85,50** com o desconto da *promoção de 10% e desconto de 5%* no produto. O sapato ficaria com o preço: **R$ 427,50** com *promoção 1 de 10% e o desconto de 5%* no produto.

O valor total do pedido ficaria em **R$513**.

##### Cenário 2: Aplicando a promoção 2 de 25%

| Itens | Promoções aplicadas | Valores |
| ----------- | ----------- |  ----------- |
| Camiseta | Promoção 2 e Promoção 3 | R$ 71,25 |
| Sapato | Promoção 2 e Promoção 3 | R$ 475,00 |

A camiseta ficaria com o preço: **R$ 71,25** com o desconto da *promoção 2 de 25% e desconto de 5%* no produto. O sapato ficaria com o preço: **R$ 475,00**. Apenas aplicando o *desconto de 5%* no produto, pois ele não está na coleção da promoção 2.

Neste cenário, o valor total do pedido ficaria em **R$ 542,50**.

Resumindo, como no cenário 1 o valor final do pedido fica mais barato para o cliente da loja, ele se encaixa na premissa de ofertar o melhor desconto possível. Assim, a VTEX escolhe aplicar a promoção 1 de 10% para ambos os itens. Isso porque as promoções 1 e 2 não poderiam ser aplicadas já que estão marcadas para não acumular.

### Concorrência por item

O módulo de Promoções também pode considerar o maior desconto para o cliente da loja em cada item do carrinho. Para isso, o sistema considera as promoções aplicáveis em um item e seleciona a melhor entre elas, em vez de considerar uma combinação de promoções em nível de carrinho.

Na concorrência por item, o que ocorreria seguindo os dados do exemplo anterior seria:

| Coleção | Itens | Valores |
| ----------- | ----------- |  ----------- |
| 1 | Camiseta | R$ 100 |
| 1 | Sapato | R$ 500 |

- Promoções:
   1. **10%** na primeira coleção. Configurado para não acumular no campo `Permitir acumular promoções`.
   2. **25%** na segunda coleção. Configurado para não acumular no campo `Permitir acumular promoções`.
   3. **5%** no produto. Configurado para acumular no campo `Permitir acumular promoções`. Contempla todos os produtos do carrinho.

Aplicando a promoção, os valores seriam:

| Itens | Promoção aplicada | Valores |
| ----------- | ----------- |  ----------- |
| Camiseta | Promoção 2  | R$ 75 |
| Sapato | Promoção 1 | R$ 475 |

A camiseta ficaria com o preço de **R$ 75,00** com o desconto da *promoção 2 de 25%*. O sapato ficaria com o preço de **R$ 450** com o desconto da *promoção 1 de 10%*.

Neste cenário, o valor total do pedido ficaria em **R$ 525**.

Essa opção ofereceria um desconto menor para o cliente que a seleção feita pela [concorrência por cenário](#concorrencia-por-cenario). Portanto, essa configuração depende do objetivo de negócio definido pela loja. 

Caso o modelo de concorrência por item atenda melhor suas necessidades de negócio, [abra um chamado](https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM) com nosso time de suporte e solicite a mudança.
