---
title: 'Configurar condições especiais de pagamento'
id: tutorials_456
status: PUBLISHED
createdAt: 2017-04-27T22:03:58.783Z
updatedAt: 2023-07-27T16:59:12.708Z
publishedAt: 2023-07-27T16:59:12.708Z
firstPublishedAt: 2017-04-27T23:03:26.753Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: special-conditions
legacySlug: condicoes-especiais
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

As condições especiais fazem parte da configuração das condições de pagamentos, as quais permitem que o lojista aumente o nível de customização da condição de pagamento, de forma que se podem criar tantas regras quanto forem necessárias. Dependendo da forma de pagamento que deseja aceitar, é possível usar as seguintes condições especiais:

Para identificar as condições especiais aplicáveis a cada forma de pagamento, no Admin VTEX, acesse **Pagamentos > Configurações > Condições de Pagamento**, selecione a forma de pagamento desejada e verifique as opções conforme ilustração abaixo.

![condições especiais de pago](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-especiais_1.png)

## Condição Comercial

Possibilita definir uma regra de pagamento para cada agrupamento de SKUs, considerando o impacto desses itens no valor total do carrinho. Para que funcione corretamente, é necessário criar condições comerciais diferentes da padrão do sistema e garantir que os SKUs que deverão obedecer a essa regra estejam devidamente associados à condição comercial.

Saiba mais como cadastrar uma nova condição comercial e associá-la a um SKU em [Cadastrar condição comercial](/pt/docs/tutorials/como-cadastrar-condicao-comercial).

## Como configurar a condição comercial na condição de pagamento

![condicao-comercial pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-especiais_2.png)

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

Se a intenção for aplicar ou não juros dependendo da representatividade do SKU A no valor total do carrinho, será necessário configurar o arrasto.

## Entendendo o Arrasto

O arrasto é uma forma de definir como a condição de pagamento será aplicada em um carrinho com SKUs de diferentes condições comerciais. Isso é possível por meio do percentual configurado no campo **Quando o percentual de SKUs dessa condição for maior que:**.

A plataforma utiliza esse valor para calcular o percentual que os itens associados à condição comercial representam no valor total do carrinho.

> ⚠️ O cálculo considera o valor total dos itens (preço × quantidade) associados à condição comercial em relação ao valor total do carrinho, e não apenas a quantidade de SKUs.

Caso o arrasto não seja configurado, a condição de pagamento será aplicada sempre que pelo menos um SKU associado à condição comercial estiver presente no carrinho.

#### Exemplo prático

Imagine que você precise oferecer um parcelamento de 24x sem juros apenas para as televisões de sua loja, desde que representem pelo menos 70% do carrinho. Mas para qualquer outro cenário, seria apresentado somente parcelamento de 10x sem juros.

Considerando que a condição comercial já foi cadastrada e associada aos respectivos SKUs no módulo de E-Commerce e, configurada na condição de pagamento com o arrasto de 70% no módulo **Pagamentos**. E que já tivesse configurado ainda, uma outra condição de pagamento com 10 parcelas sem juros sem o arrasto cadastrado, confira os cenários de carrinhos abaixo:

**Carrinho 1**
1 televisão no valor de R$ 8.000.
2 videogames no valor de R$ 1.000 cada.

Nesse caso, o valor total do carrinho é de R$ 10.000, com a televisão representando 80% dele. Portanto, será apresentada a condição de pagamento de 24x sem juros, uma vez que foi atingido o mínimo de 70% estabelecido na condição comercial.

**Carrinho 2**
2 televisões no valor de R$ 3.000 cada.
1 computador no valor de R$ 4.000.

Nesse caso, o valor total do carrinho é de R$ 10.000, com as televisões representando 60% do valor total do carrinho. Sendo assim, será apresentada ao cliente a condição de pagamento de 10x sem juros.

É possível configurar diversos outros cenários, de acordo com as necessidades da loja e com a forma como as condições de pagamento são combinadas com as condições comerciais.

## Política Comercial

Permite disponibilizar uma condição de pagamento para uma política comercial específica ou tantas quanto precisar configurar. Lembrando que se esse campo não for configurado, a condição será apresentada para todas as políticas comerciais da loja.

### Como configurar a política comercial na condição de pagamento

![politica-comercial pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-especiais_3.png)

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
3. Selecione o **País de origem** do banco que emitiu o cartão.
4. Selecione o **banco emissor**.
5. Caso deseje segmentar por nível do cartão, selecione o **Card level**.
6. Caso deseje segmentar por co-brand, selecione a opção desejada em **Co-brand** (essa caixa de seleção só vai aparecer se sua loja houver informado à VTEX a lista de cartões com co-brand).
7. Salve as alterações.

![banco-emissor pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-especiais_4.png)

### Exemplos

#### Banco Emissor

O Banco do Brasil oferece condições especiais de pagamento para todos os clientes que utilizam o seu cartão, o Ourocard, tanto na função de débito quanto na função de crédito.

Para oferecer essa condição especial na sua loja, bastaria selecionar **Brasil** no campo **Quando o país for:** e **Banco do Brasil** no campo **Quando o Banco Emissor for:**.

#### Card Level

Digamos que o banco Bradesco tenha um clube de vantagens exclusivo para os clientes que possuam cartão do nível **Standard**. Um dos benefícios poderia ser a possibilidade de parcelar qualquer compra em até 12 vezes, em vez de apenas em 11 vezes, opção oferecida para os demais card levels.

Neste caso, a configuração tem uma etapa a mais que a do exemplo anterior: o usuário deve selecionar as opções **Brasil** e **Bradesco** nos campos **Quando o País for:** e **Quando o Banco Emissor for:**, respectivamente. E, em seguida, deve escolher a opção **Standard** no campo **Card level**.

#### Co-brand

Digamos que você deseje oferecer uma condição especial de pagamento para clientes que paguem com o cartão da sua loja.

Neste caso, você deve selecionar o banco emissor que é o seu parceiro responsável por esse cartão e, em seguida, o nome da sua loja no campo **Co-brand**.

> ⚠️ Por padrão, a informação de que um cartão tem co-brand não está cadastrada na base de dados da VTEX. Por isso, caso sua loja deseje segmentar uma condição de pagamento por cartões da loja, você precisa enviar a lista de cartões com co-brand para o time de suporte da VTEX por meio de um ticket.

## Período

Permite configurar uma validade na condição de pagamento, para que deixe de ser aplicada na sua loja quando a data expirar.

Veja a seguir como configurar o período na condição de pagamento:

![periodo pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-especiais_5.png)

1. Dentro da condição de pagamento, clique em `Adicionar condição especial`.
3. Em seguida, clique em `Período`.
4. Clique no campo **De** e selecione a data a partir do calendário que aparece.
5. No campo ao lado, digite o horário em que a condição passará a valer (ele será gravado no sistema seguindo o padrão UTC).
6. Clique no campo **Até** e selecione a data a partir do calendário que aparece.
7. No campo ao lado, digite o horário em que a condição deixará de ser aplicada (ele será gravado no sistema seguindo o padrão UTC).
8. Salve as alterações.

#### Exemplo prático

Imagine que sua loja normalmente oferece um parcelamento em até 6x sem juros, mas quer aproveitar as vendas do final de ano para oferecer um parcelamento em até 12x sem juros. Nesse caso, bastaria seguir os passos acima e cadastrar o período para a condição de pagamento, deixar de ser aplicada em 01 de janeiro do ano seguinte, por exemplo.

> ⚠️ As condições de pagamento possuem um cache de até 10 minutos no Smart Checkout. Logo, qualquer mudança nas Condições de Pagamento do módulo **Pagamentos** pode levar até 10 minutos para entrar em produção no Smart Checkout.
