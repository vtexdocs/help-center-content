---
title: Configurar condições especiais de pagamento
id: tutorials_456
status: PUBLISHED
createdAt: 2017-04-27T22:03:58.783Z
updatedAt: 2023-02-24T20:54:02.331Z
publishedAt: 2023-02-24T20:54:02.331Z
firstPublishedAt: 2017-04-27T23:03:26.753Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: condicoes-especiais
legacySlug: condicoes-especiais
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

As condições especiais fazem parte da configuração das condições de pagamentos, as quais permitem que o lojista aumente o nível de customização da condição de pagamento, de forma que podem criar tantas regras quanto forem necessárias. Dependendo da forma de pagamento que deseja aceitar, é possível usar as seguintes condições especiais:

Para identificar as condições especiais aplicáveis a cada forma de pagamento, no Admin VTEX, acesse __Pagamentos > Configurações > Condições de Pagamento__, selecione a forma de pagamento desejada e verifique as opções conforme ilustração abaixo.

![condições especiais de pago](//images.ctfassets.net/alneenqid6w5/1DllASa2BBHO7VjL1krOqD/7d7e10782385dcd7f76019a6ac8390e0/Condi____o_especial_de_pagamento.png)

<div class = "alert alert-info">
  <p>As condições especiais das regras de pagamento são aplicadas somente para o número de parcelas. A forma de pagamento permanece a mesma.</p>
</div>

## Condição Comercial

Possibilita definir uma regra de pagamento para cada agrupamento de SKUs, mas para que funcione corretamente, se faz necessário primeiro que crie condições comerciais diferentes da padrão do sistema e, que os SKUs que deverão obedecer a essa regra estejam devidamente associadas à condição comercial.

Para saber como cadastrar uma nova condição comercial e associá-la a um SKU, leia o documento [Cadastrar condição comercial](https://help.vtex.com/pt/tutorial/como-cadastrar-condicao-comercial--tutorials_445).

## Como configurar a condição comercial na condição de pagamento

![condicao-comercial pt](//images.ctfassets.net/alneenqid6w5/3VXKTcFtIkca4iwioWw648/6d574cddd91fd57ad6610631b11129c7/condicao-comercial.png)

1. Dentro da condição de pagamento, clique em `Adicionar condição especial`.
2. Em seguida, clique em `Condição Comercial`.
3. Selecione a condição desejada na lista.
4. Preencha o arrasto de acordo com o cenário que deseja.
5. Salve as alterações.

É importante ressaltar que se houver duas condições de pagamentos para a mesma forma de pagamento, onde a única diferença entre elas é a condição comercial e, em um carrinho tiver dois SKUs diferentes, cada um associado a uma condição comercial diferente, prevalecerá o que oferecer o menor preço final para o cliente.

#### Exemplo prático

- SKU A associado à condição comercial personalizada.
- SKU B associado à condição comercial padrão.
- Forma de pagamento 10x com juros 2,5% em todas as parcelas, configurado com a condição comercial personalizada.
- Forma de pagamento 10x **sem juros**, configurado com a condição comercial padrão

**Carrinho 1**  
Somente com SKU A, será apresentada a possibilidade de pagar em até 10x com juros de 2,5%.

**Carrinho 2**  
Somente com SKU B, será apresentada a possibilidade de pagar em até 10x sem juros.

**Carrinho 3**  
Com os SKUs A e B, será apresentada a possibilidade de pagar em até 10x sem juros.

Se a intenção for, dependendo de quando o SKU A represente do carrinho, seja ou não aplicado os juros, aí então será necessário configurar o arrasto.

## Entendendo o Arrasto

O arrasto é uma forma de definir como a condição de pagamento vai ser aplicada em um carrinho, com SKUs de diferentes condições comerciais. Isso é possível através do percentual cadastrado no campo “Quando o percentual de SKUs dessa condição for maior que:”.

A plataforma usa esse valor para validar com o cálculo que determina o percentual relativo de cada SKU em relação ao carrinho, que é avaliado a partir da quantidade e do preço dos SKUs que estão associados a essa condição comercial.

Caso o arrasto não seja configurado, a condição de pagamento sempre será aplicada quando pelo menos um SKU associado à condição comercial estiver presente no carrinho.

#### Exemplo prático

Imagine que você precise oferecer um parcelamento de 24x sem juros apenas para as televisões de sua loja, desde que representem pelo menos 70% do carrinho. Mas para qualquer outro cenário, seria apresentado somente parcelamento de 10x sem juros.

Considerando que a condição comercial já foi cadastrada e associada aos respectivos SKUs no módulo de E-Commerce e, configurada na condição de pagamento com o arrasto de 70% no módulo _Pagamentos_. E que já tivesse configurado ainda, uma outra condição de pagamento com 10 parcelas sem juros sem o arrasto cadastrado, confira os cenários de carrinhos abaixo:

**Carrinho 1**  
1 televisão no valor de R$ 8.000.
2 videogames no valor de R$ 1.000 cada.
Nesse caso o valor total do carrinho seria de R$ 10.000, com a televisão representando 80% dele. Então seria apresentada a condição de pagamento de 24x sem juros, uma vez que foi atingido o mínimo de 70% estabelecido na condição comercial.

**Carrinho 2**
2 televisões no valor de R$ 3.000 cada.
1 computador no valor de R$ 4.000.
Nesse caso o valor total do carrinho seria de R$ 10.000, com as televisões representando 60% (2x R$ 3.000) do mesmo. Sendo assim seria apresentada ao cliente a condição de pagamento de 10x sem juros.

Claro, além desses cenários daria para fazer muitos outros de acordo com a necessidade da loja e a forma como as condições de pagamento forem configuradas em conjunto com as condições comerciais.

## Política Comercial

Permite disponibilizar uma condição de pagamento para uma política comercial específica ou tantas quanto precisar configurar. Lembrando que se esse campo não for configurado, a condição será apresentada para todas as políticas comerciais da loja.

Como configurar a política comercial na condição de pagamento

![politica-comercial pt](//images.ctfassets.net/alneenqid6w5/25wX7GscdqwUmiWQC4Oi4U/291c228f5deee2036890f4e6bbb812d0/politica-comercial.png)

1. Dentro da condição de pagamento, clique em `Adicionar condição especial`.
3. Em seguida em `Política Comercial (Canal de Vendas)`.
4. Selecione as políticas desejadas.
5. Salve as alterações.

#### Exemplo prático

Imagine que sua loja oferece pagamento com até 10x sem juros e 12x com juros no cartão de crédito Visa. Mas possui uma política comercial para vender produtos da marca Samsung, com um hotsite próprio em até 24x sem juros. Nesse caso, bastaria criar uma nova condição de pagamento com cartão de crédito Visa, com 24 parcelas sem cadastro de juros e adicionar a política comercial definida para a venda dos produtos da Samsung.

## Banco Emissor

Permite restringir uma condição de pagamento, caso o Cartão de Crédito e/ou Cartão de Débito tenha sido emitido por algum banco emissor específico, de acordo com o país.

Como configurar o banco emissor na condição de pagamento:

1. Na configuração de uma condição de pagamento, clique em `Adicionar condição especial`.
2. Em seguida, clique em `Banco Emissor`.
3. Selecione o __País de origem__ do banco que emitiu o cartão.
4. Selecione o __banco emissor__.
5. Caso deseje segmentar por nível do cartão, selecione o __Card level__.
6. Caso deseje segmentar por co-brand, selecione a opção desejada em __Co-brand__ (essa caixa de seleção só vai aparecer se sua loja houver informado à VTEX a lista de cartões com co-brand).
7. Salve as alterações.

![banco-emissor pt](//images.ctfassets.net/alneenqid6w5/6e5Hf9tpLyuSkoGk08oOcw/38c528cd80c158b750a06ce3b99beea0/banco-emissor.png)

### Exemplos

#### Banco Emissor

O Banco do Brasil oferece condições especiais de pagamento para todos os clientes que utilizam o seu cartão, o Ourocard, tanto na função de débito quanto na função de crédito.

Para oferecer essa condição especial na sua loja, bastaria selecionar “Brasil” no campo __Quando o país for:__ e “Banco do Brasil” no campo __Quando o Banco Emissor for:__.

#### Card Level

Digamos que o banco Bradesco tenha um clube de vantagens exclusivo para os clientes que possuam cartão do nível “Standard”. Um dos benefícios poderia ser a possibilidade de parcelar qualquer compra em até 12 vezes, em vez de apenas em 11 vezes, opção oferecida para os demais card levels.

Neste caso, a configuração tem uma etapa a mais que a do exemplo anterior: o usuário deve selecionar as opções “Brasil” e “Bradesco” nos campos __Quando o País for:__ e __Quando o Banco Emissor for:__, respectivamente. E, em seguida, deve escolher a opção __Standard__ no campo __Card level__.

#### Co-brand

Digamos que você deseje oferecer uma condição especial de pagamento para clientes que paguem com o cartão da sua loja.

Neste caso, você deve selecionar o banco emissor que é o seu parceiro responsável por esse cartão e, em seguida, o nome da sua loja no campo __Co-brand__.

<div class="alert alert-warning">
Por padrão, a informação de que um cartão tem co-brand <strong>não</strong> está cadastrada na base de dados da VTEX. Por isso, caso sua loja deseje segmentar uma condição de pagamento por cartões da loja, você precisa enviar a lista de cartões com co-brand para o time de suporte da VTEX por meio de um ticket.
</div>

## Período

Permite configurar uma validade na condição de pagamento, para que deixe de ser aplicada na sua loja quando a data expirar.

Veja a seguir como configurar o período na condição de pagamento:

![periodo pt](//images.ctfassets.net/alneenqid6w5/4zOoeve2Q8mgqkCQGQIWoq/5a37b26881341ce133c582693816bf18/periodo.png)

1. Dentro da condição de pagamento, clique em `Adicionar condição especial`.
3. Em seguida, clique em `Período`.
4. Clique no campo __De__ e selecione a data a partir do calendário que aparece.
5. No campo ao lado, digite o horário em que a condição passará a valer (ele será gravado no sistema seguindo o padrão UTC).
6. Clique no campo __Até__ e selecione a data a partir do calendário que aparece.
7. No campo ao lado, digite o horário em que a condição deixará de ser aplicada (ele será gravado no sistema seguindo o padrão UTC).
8. Salve as alterações.

#### Exemplo prático

Imagine que sua loja normalmente oferece um parcelamento em até 6x sem juros, mas quer aproveitar as vendas do final de ano para oferecer um parcelamento em até 12x sem juros. Nesse caso, bastaria seguir os passos acima e cadastrar o período para a condição de pagamento, deixar de ser aplicada em 01 de janeiro do ano seguinte, por exemplo.

<div class = "alert alert-warning">
  <p>As condições de pagamento possuem um cache de até 10 minutos no Smart Checkout. Logo, qualquer mudança nas Condições de Pagamento do módulo <strong>Pagamentos</strong> pode levar até 10 minutos para entrar em produção no Smart Checkout.</p>
</div>
