---
title: 'Facilitar a operação da loja B2B'
id: 8t1f9FYBsSCopHHVujKWR
status: CHANGED
createdAt: 2021-03-30T14:29:12.548Z
updatedAt: 2024-05-10T10:59:55.549Z
publishedAt: 2021-05-20T18:17:16.108Z
firstPublishedAt: 2021-03-30T19:54:13.259Z
contentType: tutorial
productTeam: B2B
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: facilitar-a-operacao-da-loja-b2b
locale: pt
legacySlug: facilitar-a-operacao-da-loja-b2b
subcategoryId: 2LrbEY7MFeKqmdfYLBCnfi
---

Você pode facilitar a operação da sua loja através da instalação de aplicativos que buscam solucionar problemas de negócio relacionados a usabilidade da loja, vendas e pós-vendas.

>ℹ️ Todos os aplicativos a seguir podem ser instalados através da [VTEX App Store](https://apps.vtex.com/) e do [VTEX IO](https://vtex.io/).

## Ferramentas de usabilidade
| Ferramenta              | Uso                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Quickorder](https://github.com/vtex-apps/quickorder "Quickorder")              | Permite que o lojista faça compras em massa por meio de planilhas.                                                                                |
| [Order Quote](https://github.com/vtex-apps/order-quote "Order Quote")             | Possibilita que o cliente salve as informações de um determinado carrinho (SKUs, quantidade e preço de cada item) durante um determinado período de tempo.                                                                                                                                                                                                  |
| [Order Configuration](https://vtex.io/docs/components/content-blocks/vtex.order-configuration@3.1.0/readme/ "Order Configuration")     | Oferece customização para os casos de compra do cenário B2B, como revendas e consumo próprio do cliente.                                                                                                                                                                                             |
| [VTEX Intelligent Search](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search "VTEX Intelligent Search") | Habilita buscas de produtos (apenas disponível para lojas desenvolvidas com VTEX IO).                                                                                                                                                          |
| [Telemarketing](https://github.com/vtex-apps/telemarketing "Telemarketing")           | Adiciona um componente no front da loja que permite que um analista de atendimento ao cliente represente um consumidor e faça compras em seu nome. |
| [Product Comparison](https://github.com/vtex-apps/product-comparison "Product Comparison")      | Possibilita que o cliente compare as especificações de quatro SKUs por vez antes de finalizar uma compra, viabilizando análise mais detalhada dos produtos.                                                                                                               |

## Ferramentas de vendas

Na VTEX, existem algumas ferramentas que se adequam ao momento da venda em si e que podem ser bem aplicadas ao contexto B2B.

### Preço por pacote

No formulário de cadastro de um SKU, existe um campo chamado “Multiplicador de unidade”, que determina se aquele item será comercializado em pacotes.

Por exemplo, digamos que você tenha o SKU Camiseta Vermelha. Caso você preencha o campo “Multiplicador de unidade” com o número 5 no cadastro deste item, o SKU Camiseta Vermelha só será comercializado de cinco em cinco unidades. 

Logo, quando o cliente selecionar duas unidades no Checkout, ele estará adquirindo dez Camisetas Vermelhas em vez de duas.

Para saber mais detalhes, confira o artigo sobre [como preencher cada um dos campos do cadastro de um novo SKU](https://help.vtex.com/pt/tutorial/sku-registration-fields--21DDItuEQc6mseiW8EakcY).

### Preço por quantidade

Na VTEX, você pode definir o preço de um item de acordo com a sua quantidade. Ao configurar o [preço fixo](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy) de um SKU, é possível definir a [quantidade mínima pela qual aquele item será vendido](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy#item-minimo-no-carrinho). Ou seja, dependendo da quantidade de itens de um produto que o consumidor adicionar ao carrinho, todos os produtos assumem determinado valor.

Vamos tomar como exemplo um produto que tenha o valor unitário de R$ 100 e que esse preço persista até 10 unidades incluídas no carrinho. Porém, se o cliente quiser comprar 12 itens de uma vez, o preço unitário fica um pouco mais barato: R$ 98.

Esse é um recurso que se adequa às necessidades de negócios atacadistas e hoje existem três formas de estabelecer um preço fixo na VTEX. Acesse o artigo sobre [como cadastrar preços fixos](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3g39iXkQza4AW7C7L814mj "como cadastrar preços fixos") para conferir todos os métodos.

>ℹ️ Antes de seguir sua leitura, confira o artigo sobre [os tipos de promoções mais utilizadas para o contexto B2B](https://help.vtex.com/pt/tutorial/as-promocoes-mais-comuns-em-b2b--XoM951AzUIvfaH71UdANf?&utm_source=autocomplete).

### Kit de produtos

Na VTEX, todas as lojas contam com o recurso de [kit de produtos](https://help.vtex.com/pt/tutorial/kit-registration?locale=en "kit de produtos"), no qual um conjunto de itens pode ser vendido por um determinado preço. 

>ℹ️ No contexto B2B, o kit de produtos geralmente é citado como “bundle”. Ou seja, os termos “kit de produtos” e “bundle” referem-se à mesma ferramenta.

Para [cadastrar um kit de produtos](https://help.vtex.com/pt/tutorial/cadastrando-kit/ "kit de produtos"), confira a documentação no Help Center.

### Product Assembly Options ou Product Customizer

O Product Assembly Options, ou Product Customizer, é um aplicativo que permite que o lojista personalize a página de um produto. Para saber mais detalhes sobre como instalar o app na sua loja, confira a [recipe no IO Docs](https://vtex.io/docs/components/all/vtex.product-customizer@2.10.4/ "recipe no IO Docs.").

## Ferramentas de pós-venda

O período de pós-venda, ou post-purchase, compreende o momento em que o consumidor finaliza uma compra em uma loja até o dia em que os itens do pedido são entregues no endereço do destinatário.

Essa etapa tem algumas particularidades que podem ser impulsionadas por meio de algumas ferramentas. Citamos alguns desses recursos a seguir. 

### Gerenciamento de pedidos

Todas as lojas VTEX contam com o módulo Gerenciamento de pedidos, que é um orquestrador de todos os [pedidos](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2sl6hj2eqwgqbDgTF6y5qE "pedidos") feitos em uma loja. 

O sistema engloba:

- Todos os detalhes relacionados a cada um dos pedidos registrados na loja, como dados do comprador e método de pagamento. 

- O [fluxo de pedidos](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/4811ExCe3WrEiRMV3sy9n8 "fluxo de pedidos"), uma ferramenta que monitora o status de um pedido durante todo o período de pós-venda.

- Dispositivos para o cliente atualizar status do pedido, como o faturamento.

Confira mais detalhes sobre o Gerenciamento de pedidos em nosso [FAQ sobre o módulo](https://help.vtex.com/pt/tutorial/faq-vtex-gerenciamento-de-pedidos--4vddUgU784wyGYQ64cw6I8?&utm_source=autocomplete "FAQ sobre o módulo") no Help Center. 

### Pedir novamente

Todas as lojas VTEX contam com o [My account](https://help.vtex.com/pt/tutorial/como-funciona-o-my-account--2BQ3GiqhqGJTXsWVuio3Xh "My account"). 

Essa ferramenta permite que o cliente acompanhe o status do seu pedido no fluxo do pós-venda, bem como faça algumas operações. Uma delas é a de “Pedir novamente”, na qual é possível repetir um pedido feito previamente.  

![Pedir novamente reorder](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/facilitar-a-operacao-da-loja-b2b-0.png)

Para saber mais detalhes sobre o My Account, confira o tutorial sobre [como configurar esta funcionalidade](https://help.vtex.com/pt/tutorial/configurar-o-my-account--23Ayv5D6b86UBnYfoXqZL1 "como configurar esta funcionalidade").

### Substituição de pedidos

A substituição de pedidos, ou [change order](https://help.vtex.com/pt/tutorial/change-making-changes-to-an-order--3d1XLIgPQcwaKGyMiWaYog "Change Order"), é uma funcionalidade presente no módulo de Gerenciamento de pedidos do Admin da VTEX. Esse recurso possibilita que o lojista edite pedidos que já foram realizados sem cancelá-los ou sem o auxílio do time de suporte.

Para habilitar a substituição de pedido, consulte o [artigo sobre a funcionalidade no Help Center](https://help.vtex.com/pt/tutorial/how-the-order-replacement-works--3aBxdbUPKgweug68YyK8oQ "artigo sobre a funcionalidade no Help Center").
