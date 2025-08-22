---
title: 'Como funciona a concorrência de promoções'
id: tutorials_2270
status: PUBLISHED
createdAt: 2017-04-27T21:55:27.997Z
updatedAt: 2025-08-08T16:42:58.333Z
publishedAt: 2025-08-08T16:42:58.333Z
firstPublishedAt: 2017-04-27T23:03:50.791Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: how-promotion-competition-works
legacySlug: entendendo-a-concorrencia-de-promocoes
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

O módulo de Promoções define qual promoção será aplicada em uma compra. Da mesma forma, o [Checkout](https://help.vtex.com/pt/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) seleciona qual seller irá realizar o fulfillment do pedido. Essa lógica é chamada de concorrência de promoções.

A concorrência de promoções ocorre quando:

- As promoções aplicadas têm o mesmo tipo de desconto.  
- Mais de uma promoção é aplicada ao mesmo item.  
- Essas promoções não estão [configuradas](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricoes-e-limitacoes-de-uso) para permitir o acúmulo.

Para que você entenda como funciona a seleção da promoção que será aplicada, conheça a seguir alguns conceitos do módulo de Promoções.

- [Classificação das promoções](#efeitos-de-promocoes)  
- [Ordenação de aplicação das promoções](#ordenacao-de-aplicacao-das-promocoes)  
- [Acumulação de promoções](#acumulacao-de-promocoes)  
- [Estratégias de concorrência de promoções](#estrategias-de-concorrencia-de-promocoes)

## Efeitos de promoções

Os efeitos de promoções são relacionados ao benefício que a promoção oferece. Existem quatro tipos:

- **Desconto no preço**: são as promoções que aplicam um desconto percentual ou nominal sobre o valor do produto. Aqui, estão incluídos alguns descontos da [promoção regular](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) e qualquer outra mecânica que incida sobre o preço de um item.  
- **Desconto no frete**: são as [promoções com desconto no frete](https://help.vtex.com/pt/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW).  
- **Brinde**: são as promoções que concedem um brinde ao cliente.  
- **Fórmula**: são as promoções com tipo de desconto nominal baseado em [fórmula](https://help.vtex.com/pt/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV), que é uma das opções da promoção regular.

## Ordenação de aplicação das promoções

A ordenação define a ordem de aplicação das promoções no carrinho e impacta no preço final dos itens. Essa ordenação considera dois critérios:

- [Ordenação por tipo de promoção, desconto e taxa](#ordenação-por-tipo-de-promocao-e-desconto)  
- [Ordenação por valor](#-ordenacao-por-valor)

### Ordenação por tipo de promoção, desconto e taxa

As promoções no carrinho seguem uma ordem predefinida para garantir a consistência do cálculo de descontos e taxas. Essa ordenação influencia diretamente o valor final dos itens e a forma como os benefícios são aplicados.

A seguir, apresentamos uma tabela que detalha como essa ordenação funciona por tipo de efeito, incluindo taxas, com a descrição de cada etapa e os tipos de promoção correspondentes.

| Ordem | Tipo de efeito | Descrição | Tipo |
| ----- | :---- | ----- | ----- |
| 1 | Preço | Desconto progressivo aplicado com base na quantidade de itens adquiridos | Desconto Progressivo |
| 2 | Preço | Desconto percentual aplicado ao valor total do pedido | Promoção regular |
| 3 | Preço | Desconto percentual aplicado apenas aos itens correspondentes à promoção | Promoção regular |
| 4 | Preço | Valor fixo descontado do valor total do pedido | Promoção regular |
| 5 | Preço | Valor fixo descontado diretamente do preço do item | Promoção regular |
| 6 | Preço | Desconto aplicado ao comprar produtos em conjunto  | Compre junto |
| 7 | Preço | Limita o preço máximo por item no pedido | Promoção regular |
| 8 | Frete | Desconto percentual aplicado ao valor do frete | Promoção regular |
| 9 | Frete | Valor fixo descontado do valor do frete (Nominal) | Promoção regular |
| 10 | Frete | Valor máximo do frete | Promoção regular |
| 11 | Brinde | Aplicação de um item de brinde como desconto | Promoção regular |
| 12 | Fórmula | Desconto calculado por meio de uma expressão ou fórmula personalizada | Promoção regular |
| 13 | Taxa | Imposto calculado com base em uma fórmula personalizada | Taxa |
| 14 | Taxa | Imposto calculado como percentual sobre o valor total do pedido. | Taxa |
| 15 | Taxa | Imposto calculado como valor fixo sobre o valor do pedido (Nominal) | Taxa |
| 16 | Taxa | Imposto percentual calculado sobre o valor do frete | Taxa |
| 17 | Recompensa | Valor fixo de cashback concedido como recompensa | Promoção regular |
| 18 | Recompensa | Percentual de cashback concedido como recompensa | Promoção regular |

### Ordenação por valor

As promoções de um mesmo tipo são comparadas pelo valor do desconto oferecido. O módulo de Promoções escolhe sempre a promoção que oferece o maior desconto ao comprador.

Para promoções do tipo brinde, a ordenação se dá pelo maior número de brindes concedidos pela promoção.

Exemplo:

- Promoção A: desconto de 30% sobre o valor do produto.  
- Promoção B: desconto de 50%.

A prioridade é dada àquela promoção que conceder o maior desconto, ou seja, o carrinho irá aplicar a **Promoção B** e em seguida a **Promoção A**.

A **Promoção A** será aplicada no valor do item já descontado pela **Promoção B**.

## Acumulação de promoções

Quando as promoções são [configuradas](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricoes-e-limitacoes-de-uso) para acumular promoções, elas são sempre aplicadas, desde que suas condições sejam atendidas.

Elas incidem sobre o valor já descontado pela promoção que venceu a concorrência entre as promoções não acumulativas. A ordem das promoções segue a ordenação por tipo e valor descrito.

A sequência de aplicação é: 

![promocao3 PT](//images.ctfassets.net/alneenqid6w5/1LKDzbLkhua8Gk284SEwsk/997fdac9b6380c68a729bf4d48e20af8/promocao3_PT.png)

<div style="background-color: #FFF8E1; border-left: 4px solid #FFC107; padding: 12px;">
  Pedidos de origem [**Marketplace**](https://help.vtex.com/pt/tutorial/configurar-promocao-para-marketplace--tutorials_406) e **Fulfillment** não reconhecem acúmulo de promoção, 
  pois o uso de promoções em Marketplaces VTEX ou externos é restrito a alguns tipos específicos.
</div>

## Estratégias de concorrência de promoções

Depois de entender a ordenação e a acumulação de promoções, veja como funciona a concorrência entre promoções que não acumulam.

A seleção de cada promoção considera apenas as promoções do mesmo tipo de desconto (conforme descrito em [Efeitos de promoções](#efeitos-de-promocoes)) e que atendam, pelo menos, um produto em comum.

Promoções de tipos diferentes ou de mesmo tipo que atendem produtos diferentes não concorrem entre si. Elas acumulam automaticamente.

Existem duas estratégias de concorrência:

- [Concorrência por cenário](#concorrencia-por-cenario)  
- [Concorrência por item](#concorrencia-por-item)

<div style="border-left: 4px solid #2196f3; background-color: #e3f2fd; padding: 12px 16px; margin: 16px 0; font-family: sans-serif; overflow: auto;">
  <p style="margin: 0;">
    Por padrão, todas as contas seguem a estratégia de concorrência por cenário. Caso a estratégia de concorrência por item atenda melhor suas necessidades de negócio, 
    <a href="https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM" target="_blank" style="color: #1976d2; text-decoration: underline;">
      abra um chamado com nosso time de suporte
    </a> 
    e solicite a mudança.
  
</div>

### Concorrência por cenário

Essa estratégia agrupa as promoções que não competem pelos mesmos produtos. Depois, o sistema compara cada grupo ou promoção individual e aplica ao carrinho a opção que oferecer o maior desconto.

#### Exemplo 1

Pedro montou um carrinho com 1 camiseta de R$100, com frete de R$30:

| Itens | Quantidade | Valores |
| :---- | :---- | :---- |
| Camiseta | 1 | R$100 |
| Frete | 1 | R$30 |

As promoções disponíveis são:

| Promoção | Descontos | Acumulativa |
| :---- | :---- | :---- |
| A  | 10% de desconto aplicado em todos os produtos | Acumulativa para todos os produtos |
| B  | Frete máximo de R$ 20 | Não acumulativa |
| C  | 80% de desconto no frete | Não acumulativa |
| D  | Desconto nominal de R$50 | Não acumulativa |
| E  | Brinde ao comprar a camiseta | Não acumulativa |

Após aplicar as promoções disponíveis:

| Itens | Quantidade | Valores |
| :---- | :---- | :---- |
| Camiseta | 1 | R$45 |
| Frete | 1 | R$6 |

O valor total do pedido ficaria em **R$51**.

**Análise Detalhada dos Cálculos:**

- Camiseta (preço original: R$ 100\)  
    - Aplicação da promoção não acumulável (promoção D):  
      - Desconto da promoção D: R$ 50\.  
      - Preço após a promoção D: R$ 100 \- R$ 50 \= R$ 50\.  
    - Aplicação da promoção acumulável (promoção A):  
      - Preço após a promoção D: R$ 50  
      - Aplicando a promoção A (10%): R$ 50 \* (1 \- 0,10) \= R$ 50 \* 0,90 \= R$ 45\.

- Frete (preço original: R$ 30\)  
    - Aplicação da promoção não acumulável (promoção C):  
      - Desconto da promoção C (80%): R$ 30 \* (80/100) \= R$ 30 \* 0,80 \= R$ 24\.  
      - Preço após a promoção C: R$ 30 \- R$ 24 \= R$ 6\.  
      - Desconto da promoção B: a promoção "Frete máximo de R$ 20" é avaliada, como o valor do frete (R$ 6\) já é inferior a R$ 20, esta promoção não oferece vantagem adicional sobre o desconto de 80% já calculado.  
      - Preço final do frete \= R$ 6\.

- Brinde  
    - Aplicação da promoção não acumulável (promoção E):  
      - Brinde concedido ao comprar a camisa

- Total do pedido  
  - Preço final da camiseta: R$ 45  
  - Preço final do frete: R$ 6  
  - Benefício adicional: brinde ao comprar a camisa.  
  - Valor total do pedido: R$ 45 \+ R$ 6 \= R$ 51

#### Exemplo 2

Carla montou um carrinho com 1 camiseta e 1 sapato:

| Itens | Quantidade | Valores |
| :---- | :---- | :---- |
| Camiseta | 1 | R$100 |
| Sapato | 1 | R$500 |

Esses produtos fazem parte de coleções:

| Itens | Coleções a que pertence |
| :---- | :---- |
| Camiseta | Coleção 1 e Coleção 2 |
| Sapato | Coleção 1 |

As promoções disponíveis são:

| Promoção | Descontos | Regras | Acumulativa |
| :---- | :---- | :---- | :---- |
| A  | 10% | Aplicado em produtos da Coleção 1 | Não acumulativa |
| B  | 25% | Aplicado em produtos da Coleção 2 | Não acumulativa |
| C  | 5% | Aplicado em todos os produtos | Acumulativa para todos os produtos |

As promoções A e B concorrem entre si, pois afetam o mesmo produto (camiseta). Quando as promoções entram em concorrência, o módulo de promoções vai escolher a promoção que fornecerá o melhor desconto para o cliente, resultando no menor valor final do pedido. Veja abaixo um exemplo de concorrência para este cenário.

##### Cenário 1: Aplicando a promoção A de 10%

Neste cenário, a camiseta e o sapato (ambos da coleção 1\) terão o desconto de 10% aplicado pela promoção A, seguido do desconto de 5% aplicado pela promoção C.

| Itens | Promoções aplicadas | Valores |
| :---- | :---- | :---- |
| Camiseta | Promoção A e Promoção C | R$85,50 |
| Sapato | Promoção A e Promoção C | R$427,50 |

Neste cenário, o valor total do pedido ficaria em **R$513,00**.

**Análise detalhada dos cálculos:**

- Camiseta (preço original: R$ 100\)  
    - Aplicação da promoção não acumulável (promoção A):  
      - Desconto da promoção A (10%): R$ 100 \* (10/100) \= R$ 100 \* 0,10 \= R$ 10\.  
      - Preço após promoção A \= R$ 100 \- R$ 10 \= R$ 90\.  
    - Aplicação da promoção acumulável (promoção C):  
      - Preço após promoção A: R$ 90\.  
      - Aplicando promoção C (5%): R$ 90 \* (1 \- 0,05) \= R$ 90 \* 0,95 \= R$ 85,50.

- Sapato (preço original: R$ 500\)  
    - Aplicação da promoção não acumulável (promoção A):  
      - Desconto da promoção A (10%): R$ 500 \* (10/100) \= R$ 500 \* 0,10 \= R$ 50\.  
      - Preço após promoção A \= R$ 500 \- R$ 50 \= R$ 450\.  
    - Aplicação da promoção acumulável (promoção C):  
      - Preço após promoção A: R$ 450\.  
      - Aplicando promoção C (5%): R$ 450 \* (1 \- 0,05) \= R$ 450 \* 0,95 \= R$ 427,50.

- Total do pedido no cenário 1  
  - Preço final da camiseta: R$ 85,50  
  - Preço final do sapato: R$ 427,50  
  - Valor total do pedido: R$ 85,50 \+ R$ 427,50 \= R$ 513,00

##### Cenário 2: Aplicando a promoção B de 25%

Neste cenário, a camiseta (único item da Coleção 2\) terá o desconto de 25% aplicado pela promoção B, seguido do desconto de 5% aplicado pela promoção C. O sapato, por não pertencer à coleção 2, receberá apenas o desconto de 5% da promoção C.

| Itens | Promoções aplicadas | Valores |
| :---- | :---- | :---- |
| Camiseta | Promoção B e Promoção C | R$71,25 |
| Sapato | Promoção C | R$475,00 |

Neste cenário, o valor total do pedido ficaria em **R$546,25**.

**Análise detalhada dos cálculos:**

- Camiseta (preço original: R$ 100\)  
    - Aplicação da promoção não acumulável (promoção B):  
      - Desconto da promoção B (25%): R$ 100 \* (25/100) \= R$ 100 \* 0,25 \= R$ 25\.  
      - Preço após promoção B \= R$ 100 \- R$ 25 \= R$ 75\.  
    - Aplicação da promoção acumulável (promoção C):  
      - Preço após promoção B: R$ 75\.  
      - Aplicando promoção C (5%): R$ 75 \* (1 \- 0,05) \= R$ 75 \* 0,95 \= R$ 71,25.

- Sapato (preço original: R$ 500\)  
    - Aplicação da promoção não acumulável:  
      - A promoção B não é aplicável, pois o sapato não pertence à "coleção 2".  
    - Aplicação da promoção acumulável (promoção C):  
      - Preço antes da promoção C (não afetado pela promoção B): R$ 500\.  
      - Aplicando promoção C (5%): R$ 500 \* (1 \- 0,05) \= R$ 500 \* 0,95 \= R$ 475,00.

- Total do pedido no cenário 2  
  - Preço final da camiseta: R$ 71,25  
  - Preço final do sapato: R$ 475,00  
  - Valor total do pedido: R$ 71,25 \+ R$ 475,00 \= R$ 546,25

A VTEX aplica a estratégia que oferece o maior desconto. Como no cenário 1 o valor final do pedido é o menor para o cliente, ela será a estratégia escolhida.

### Concorrência por item

O módulo de Promoções pode ser configurado para aplicar o maior desconto em cada item individual do carrinho, em vez de combinar promoções no nível do carrinho. A loja define essa configuração com base em sua estratégia de negócio. Caso deseje usar esse modelo e ele ainda não estiver habilitado, [abra um chamado](https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM) com o time de suporte para solicitar a mudança.

A concorrência por item funcionaria assim:

| Itens | Quantidade | Valores |
| :---- | :---- | :---- |
| Camiseta | 1 | R$100 |
| Sapato | 1 | R$500 |

Esses produtos fazem parte de coleções:

| Itens | Coleções a que pertence |
| :---- | :---- |
| Camiseta | Coleção 1 e Coleção 2 |
| Sapato | Coleção 1 |

As promoções disponíveis são:

| Promoção | Descontos | Regras | Acumulativa |
| :---- | :---- | :---- | :---- |
| A | 10% | Aplicado em produtos da Coleção 1 | Não acumulativa |
| B | 25% | Aplicado em produtos da Coleção 2 | Não acumulativa |
| C | 5% | Aplicado em todos os produtos | Acumulativa para todos os produtos |

Aplicando a concorrência por item:

| Itens | Promoção aplicada | Valores |
| :---- | :---- | :---- |
| Camiseta | Promoção B e Promoção C | R$71,25 |
| Sapato | Promoção A e Promoção C | R$427,50 |

O valor final do pedido, nesse cenário, seria **R$498,75**.

**Análise detalhada dos cálculos:**

- Camiseta (preço original: R$ 100\)  

    - Seleção da promoção não acumulável:  
      - Promoção A (10% na coleção 1): desconto de R$ 10 (preço R$ 90).  
      - Promoção B (25% na coleção 2): desconto de R$ 25 (preço R$ 75).  
      - A promoção B é a mais vantajosa para a camiseta. Preço após promoção B \= R$ 75\.  
    - Aplicação da promoção acumulável (promoção C):  
      - Preço após promoção B: R$ 75\.  
      - Aplicando promoção C (5%): R$ 75 \* (1 \- 0,05) \= R$ 75 \* 0,95 \= R$ 71,25.

- Sapato (preço original: R$ 500\)  

    - Seleção da promoção não acumulável:  
      - Promoção A (10% na coleção 1): desconto de R$ 50 (preço R$ 450).  
      - Promoção B (25% na coleção 2): não aplicável.  
      - A promoção A é a única, e portanto, a melhor não acumulável para o sapato. Preço após promoção A \= R$ 450\.  
    - Aplicação da promoção acumulável (promoção C):  
      - Preço após promoção A: R$ 450\.  
      - Aplicando promoção C (5%): R$ 450 \* (1 \- 0,05) \= R$ 450 \* 0,95 \= R$ 427,50.

- Total do pedido na estratégia "concorrência por item"  

  - Preço final da camiseta: R$ 71,25  
  - Preço final do sapato: R$ 427,50  
  - Valor total do pedido: R$ 71,25 \+ R$ 427,50 \= R$ 498,75

