---
title: 'Facilitar a operação da loja B2B'
id: 8t1f9FYBsSCopHHVujKWR
status: PUBLISHED
createdAt: 2021-03-30T14:29:12.548Z
updatedAt: 2024-05-10T10:59:55.549Z
publishedAt: 2021-05-20T18:17:16.108Z
firstPublishedAt: 2021-03-30T19:54:13.259Z
contentType: tutorial
productTeam: B2B
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: facilitating-b2b-store-operation
legacySlug: facilitar-a-operacao-da-loja-b2b
locale: pt
subcategoryId: 2LrbEY7MFeKqmdfYLBCnfi
---

Você pode facilitar a operação da sua loja através da instalação de aplicativos que buscam solucionar problemas de negócio relacionados a usabilidade da loja, vendas e pós-vendas.

> ℹ️ Todos os aplicativos a seguir podem ser instalados através da [VTEX App Store](https://apps.vtex.com/) e do [VTEX IO](https://vtex.io/).

## Ferramentas de usabilidade
| Ferramenta              | Uso                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Quickorder](https://github.com/vtex-apps/quickorder)              | Permite que o lojista faça compras em massa por meio de planilhas.                                                                                |
| [Order Quote](https://github.com/vtex-apps/order-quote)             | Possibilita que o cliente salve as informações de um determinado carrinho (SKUs, quantidade e preço de cada item) durante um determinado período de tempo.                                                                                                                                                                                                  |
| [Order Configuration](https://vtex.io/docs/components/content-blocks/vtex.order-configuration@3.1.0/readme/)     | Oferece customização para os casos de compra do cenário B2B, como revendas e consumo próprio do cliente.                                                                                                                                                                                             |
| [VTEX Intelligent Search](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search) | Habilita buscas de produtos (apenas disponível para lojas desenvolvidas com VTEX IO).                                                                                                                                                          |
| [Telemarketing](https://github.com/vtex-apps/telemarketing)           | Adiciona um componente no front da loja que permite que um analista de atendimento ao cliente represente um consumidor e faça compras em seu nome. |
| [Product Comparison](https://github.com/vtex-apps/product-comparison)      | Possibilita que o cliente compare as especificações de quatro SKUs por vez antes de finalizar uma compra, viabilizando análise mais detalhada dos produtos.                                                                                                               |

## Ferramentas de vendas

Na VTEX, existem algumas ferramentas que se adequam ao momento da venda em si e que podem ser bem aplicadas ao contexto B2B.

### Preço por pacote

No formulário de cadastro de um SKU, existe um campo chamado “Multiplicador de unidade”, que determina se aquele item será comercializado em pacotes.

Por exemplo, digamos que você tenha o SKU Camiseta Vermelha. Caso você preencha o campo “Multiplicador de unidade” com o número 5 no cadastro deste item, o SKU Camiseta Vermelha só será comercializado de cinco em cinco unidades. 

Logo, quando o cliente selecionar duas unidades no Checkout, ele estará adquirindo dez Camisetas Vermelhas em vez de duas.

Para saber mais detalhes, confira o artigo sobre [como preencher cada um dos campos do cadastro de um novo SKU](/pt/docs/tutorials/adicionar-ou-editar-sku).

### Preço por quantidade

Na VTEX, você pode definir o preço de um item de acordo com a sua quantidade. Ao configurar o [preço fixo](/pt/docs/tracks/preco-fixo-definicao-de-conceito) de um SKU, é possível definir a [quantidade mínima pela qual aquele item será vendido](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy#item-minimo-no-carrinho). Ou seja, dependendo da quantidade de itens de um produto que o consumidor adicionar ao carrinho, todos os produtos assumem determinado valor.

Vamos tomar como exemplo um produto que tenha o valor unitário de R$ 100 e que esse preço persista até 10 unidades incluídas no carrinho. Porém, se o cliente quiser comprar 12 itens de uma vez, o preço unitário fica um pouco mais barato: R$ 98.

Esse é um recurso que se adequa às necessidades de negócios atacadistas e hoje existem três formas de estabelecer um preço fixo na VTEX. Acesse o artigo sobre [como cadastrar preços fixos](/pt/docs/tracks/cadastrar-preco-fixo) para conferir todos os métodos.

> ℹ️ Antes de seguir sua leitura, confira o artigo sobre [os tipos de promoções mais utilizadas para o contexto B2B](/pt/tutorial/as-promocoes-mais-comuns-em-b2b--XoM951AzUIvfaH71UdANf?&utm_source=autocomplete).

### Kit de produtos

Na VTEX, todas as lojas contam com o recurso de [kit de produtos](/pt/tutorial/kit-registration), no qual um conjunto de itens pode ser vendido por um determinado preço. 

> ℹ️ No contexto B2B, o kit de produtos geralmente é citado como “bundle”. Ou seja, os termos “kit de produtos” e “bundle” referem-se à mesma ferramenta.

Para [cadastrar um kit de produtos](/pt/tutorial/cadastrando-kit/), confira a documentação no Help Center.

### Product Assembly Options ou Product Customizer

O Product Assembly Options, ou Product Customizer, é um aplicativo que permite que o lojista personalize a página de um produto. Para saber mais detalhes sobre como instalar o app na sua loja, confira a [recipe no IO Docs](https://vtex.io/docs/components/all/vtex.product-customizer@2.10.4/).

## Ferramentas de pós-venda

O período de pós-venda, ou post-purchase, compreende o momento em que o consumidor finaliza uma compra em uma loja até o dia em que os itens do pedido são entregues no endereço do destinatário.

Essa etapa tem algumas particularidades que podem ser impulsionadas por meio de algumas ferramentas. Citamos alguns desses recursos a seguir. 

### Gerenciamento de pedidos

Todas as lojas VTEX contam com o módulo Gerenciamento de pedidos, que é um orquestrador de todos os [pedidos](/pt/docs/tracks/o-que-e-um-pedido-na-vtex) feitos em uma loja. 

O sistema engloba:

- Todos os detalhes relacionados a cada um dos pedidos registrados na loja, como dados do comprador e método de pagamento. 

- O [fluxo de pedidos](/pt/docs/tracks/fluxo-do-pedido), uma ferramenta que monitora o status de um pedido durante todo o período de pós-venda.

- Dispositivos para o cliente atualizar status do pedido, como o faturamento.

Confira mais detalhes sobre o Gerenciamento de pedidos em nosso [FAQ sobre o módulo](/pt/tutorial/faq-vtex-gerenciamento-de-pedidos--4vddUgU784wyGYQ64cw6I8?&utm_source=autocomplete) no Help Center. 

### Pedir novamente

Todas as lojas VTEX contam com o [My account](/pt/docs/tutorials/como-funciona-a-minha-conta). 

Essa ferramenta permite que o cliente acompanhe o status do seu pedido no fluxo do pós-venda, bem como faça algumas operações. Uma delas é a de “Pedir novamente”, na qual é possível repetir um pedido feito previamente.  

![Pedir novamente reorder](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/guias-práticos/facilitar-a-operacao-da-loja-b2b_1.png)

Para saber mais detalhes sobre o My Account, confira o tutorial sobre [como configurar esta funcionalidade](/pt/docs/tutorials/configurar-o-my-account).

### Substituição de pedidos

A substituição de pedidos, ou [change order](/pt/docs/tutorials/alteracao-de-itens-de-um-pedido-finalizado), é uma funcionalidade presente no módulo de Gerenciamento de pedidos do Admin da VTEX. Esse recurso possibilita que o lojista edite pedidos que já foram realizados sem cancelá-los ou sem o auxílio do time de suporte.

Para habilitar a substituição de pedido, consulte o [artigo sobre a funcionalidade no Help Center](/pt/tutorial/how-the-order-replacement-works--3aBxdbUPKgweug68YyK8oQ).
