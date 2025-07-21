---
title: 'Promoção regular com valor fidelidade'
id: 3FCip23ZtvG0sDt0rVGVmR
status: PUBLISHED
createdAt: 2022-08-23T18:21:22.729Z
updatedAt: 2022-08-23T19:37:56.358Z
publishedAt: 2022-08-23T19:37:56.358Z
firstPublishedAt: 2022-08-23T19:30:54.880Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: regular-promotion-with-reward-value
locale: pt
legacySlug: promocao-regular-com-valor-fidelidade
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

A [Promoção Regular](/pt/tutorial/promocao-regular--tutorials_327) oferece descontos de forma flexível, combinando múltiplas condições, restrições e benefícios. Uma das possibilidades desse tipo de promoção é disponibilizar um valor fidelidade para seus clientes, ou seja, um crédito que funciona como _cashback_ para utilização em compras futuras na loja. O propósito desse tipo de desconto é gerar lealdade através da recorrência de compra, ou seja, oferecer um incentivo para que os clientes voltem a fazer compras na loja.

Neste artigo, explicamos:

* [Tipos de valor fidelidade](#tipos-de-valor-fidelidade)
* [Como configurar restrições](#como-configurar-restricoes)
* [Como o valor fidelidade funciona](#como-o-valor-fidelidade-funciona)

## Tipos de valor fidelidade

É possível criar uma [promoção regular](/pt/tutorial/promocao-regular--tutorials_327) em **Promoções e Taxas > Promoções > Nova Promoção > Promoção Regular**. No momento de escolher o tipo e o valor do desconto, existem duas opções disponíveis para oferecer um valor fidelidade:

* [Valor fidelidade nominal](#valor-fidelidade-nominal)
* [Valor fidelidade percentual](#valor-fidelidade-percentual)

### Valor fidelidade nominal

O **Valor fidelidade nominal** adiciona um valor fixo de crédito na conta do usuário na sua loja. Para configurar esse tipo de valor fidelidade, é necessário preencher os seguintes campos do [formulário da promoção regular](/pt/tutorial/promocao-regular--tutorials_327#1-quais-os-dados-gerais-desta-promocao):

* **Valor nominal para programa de fidelidade:** quantia do crédito que será adicionado na conta do cliente na sua loja.
* **Aplicar crédito de fidelidade quando o status do pedido mudar para:** campo para definir a partir de qual status do pedido o crédito será disponibilizado. As opções são **Faturado** ou **Pagamento aprovado**.

No exemplo ilustrado a seguir, os clientes ganharão um crédito de R$10,00 na loja quando o status do pedido mudar para **Faturado**.

![vf-nominal-pt](https://images.ctfassets.net/alneenqid6w5/5i67rFawcAHCOpI84bBP2U/f2498f3f46cbafe7e1d8dd747422cce8/vf-nominal-pt.png)

### Valor fidelidade percentual

O **Valor fidelidade percentual** adiciona um valor percentual de crédito baseado no preço do produto adquirido. Para configurar esse tipo de valor fidelidade, é necessário preencher os seguintes campos do [formulário da promoção regular](/pt/tutorial/promocao-regular--tutorials_327#1-quais-os-dados-gerais-desta-promocao):

* **Valor percentual para programa de fidelidade:** percentual do valor do pedido que será adicionado como crédito na conta do cliente na sua loja.
* **Aplicar crédito de fidelidade quando o status do pedido mudar para:** campo para definir a partir de qual status do pedido o crédito será disponibilizado. As opções são **Faturado** ou **Pagamento aprovado**.

No exemplo ilustrado a seguir, os clientes ganharão um crédito de 20% do valor da compra quando o status do pedido mudar para **Pagamento aprovado**.

![vf-percentual-pt](https://images.ctfassets.net/alneenqid6w5/4EIq0OwX5GI1FgdWk0JHje/4373e3263836d3388356a06dc025f73a/vf-percentual-pt.png)

## Como configurar restrições

Além de definir o valor fidelidade, você deve configurar os demais dados e restrições da sua promoção, ou seja, definir os itens aos quais a promoção será aplicada e as condições para ela ser válida.

Veja a seguir alguns exemplos de restrições configuráveis para que a promoção regular com valor fidelidade seja aplicada a cenários específicos:

* Compras a partir de determinado valor.
* Compras de produtos específicos de determinada coleção.
* Endereços de entrega que fazem parte de um determinado intervalo de CEPs.
* Uma compra por cliente.

Você pode fazer essas configurações em **Promoções e Taxas > Promoções > Nova Promoção > Promoção Regular**. Para isso, siga as instruções do artigo [Promoção Regular](/pt/tutorial/promocao-regular--tutorials_327).

## Como o valor fidelidade funciona

O crédito é disponibilizado para o cliente que faz um pedido compatível com as [restrições definidas na promoção](#como-configurar-restricoes). Isso acontece após a mudança do pedido para o status definido, que pode ser **Faturado** ou **Pagamento aprovado**.

Os créditos são cumulativos, ou seja, se o cliente realizar mais pedidos dentro dos critérios da promoção, receberá mais créditos que serão somados aos anteriores que não tiverem sido utilizados. Os créditos não têm validade.

Você pode visualizar o valor concedido no [Gerenciamento de pedidos](#gerenciamento-de-pedidos).

A partir da disponibilização do crédito, o cliente pode visualizar e utilizar o valor concedido em compras futuras durante o [checkout](#checkout). 

Leia as próximas seções para obter mais detalhes sobre o valor fidelidade nos contextos a seguir:

* [Gerenciamento de pedidos](#gerenciamento-de-pedidos)
* [Checkout](#checkout)

### Gerenciamento de pedidos

Quando um cliente faz um pedido elegível para receber crédito fidelidade, você pode ver a promoção aplicada e o valor concedido no Admin VTEX, em **Gerenciamento de pedidos > Todos os pedidos**, na página de detalhes do pedido.

Na seção **Promoções e parcerias**, aparece o nome da promoção aplicada ao pedido:

<img class="db center mv9 shadow-4 pointer" src="https://images.ctfassets.net/alneenqid6w5/1LpXT5YXqbsjb02eAQUsfg/9b4ede20a2b910d2a4c2b117a4e0b7ec/detalhes-oms-pt__1_.png" alt="detalhes-do-pedido" style="margin-bottom: 20px;"> <figcaption align = "center"><em>Detalhes do pedido</em></figcaption></figure>

<img class="db center mv9 shadow-4 pointer" src="https://images.ctfassets.net/alneenqid6w5/2mriJhUbQbqrrUSbp7tjaC/b9de1a7d07c48b49026ec6d3adba4d20/detalhes-neworders-pt__1_.png" alt="detalhes-do-pedido-beta" style="margin-bottom: 20px;"> <figcaption align = "center"><em>Detalhes do pedido (Beta)</em></figcaption></figure>

Na seção __Fluxo do pedido__, é possível verificar o valor fidelidade concedido:

![fluxo-oms-pt](https://images.ctfassets.net/alneenqid6w5/62q5OKyu3BqHmbd23HVyOc/57cc8d05f5a909b360634d35bb5eb54e/fluxo-oms-pt__1_.png)

Se você utiliza a nova interface de [Detalhes do pedido (Beta)](/pt/tutorial/order-details-page-beta--2Y75n54Cc9VizrlG1N6ZNl), acesse `Ver interações` para verificar o valor concedido:

![interacoes-neworders-pt (1)](https://images.ctfassets.net/alneenqid6w5/7jjz0zNzeoZbOZ4PapQ836/0b7c14a0db14110258c907a78377ec7a/interacoes-neworders-pt__1_.png)

Considere que a promoção aplicada no pedido ilustrado oferece **Valor fidelidade percentual** de **50%**. Por isso, a cliente ganhou um crédito de `R$ 54,28` para as próximas compras na loja, que equivale a **50%** de `R$ 108,55`, o valor total do pedido.

### Checkout

O valor fidelidade disponível para uso é apresentado para os clientes da sua loja na etapa de **Pagamento** durante o checkout, conforme ilustrado a seguir.

![checkout-pt (1)](https://images.ctfassets.net/alneenqid6w5/6TNM6G9j4f3vnD7JERO6TE/60bf6f957d722190baf2c3c3e9b8a302/checkout-pt__1_.png)

O valor concedido pode ser utilizado para compor o pagamento. Para isso, o cliente deve clicar em `utilizar crédito` e, em seguida, digitar o valor que deseja utilizar.

Observe que o valor será descontado da outra forma de pagamento selecionada. No exemplo a seguir, o boleto passou a ter o valor de `R$ 113,50`, que corresponde a `R$ 167,80` menos o valor fidelidade utilizado (`R$ 54,30`).

![checkout-2-pt (1)](https://images.ctfassets.net/alneenqid6w5/6pM4KJyCPRijRDFqLHNehz/26f4604ae74e66ebfc41040164d8c1e9/checkout-2-pt__1_.png)

## Saiba mais

* [Promoção Regular](/pt/tutorial/promocao-regular--tutorials_327)
