---
title: 'Verificar status de integração no painel do Integrações'
id: tutorials_422
status: PUBLISHED
createdAt: 2017-04-27T22:05:50.596Z
updatedAt: 2020-02-19T20:51:05.382Z
publishedAt: 2020-02-19T20:51:05.382Z
firstPublishedAt: 2017-04-27T23:03:24.679Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: verificando-integracao-no-bridge
locale: pt
legacySlug: verificando-integracao-no-bridge
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

O __Integrações__ é o módulo responsável pelo gerenciamento de todos os marketplaces utilizados por sua loja. É neste módulo que deve ser realizado o cadastro de toda nova integração com marketplace.

No Integrações, é possível acompanhar a integração com os diversos marketplaces ativos, verificando a integração de __pedido,__ __produto__, __rastreio__, __preço__ e  __estoque__. Além disso, é possível visualizar o status de integração de cada item e realizar o __reprocessamento__ desses status, caso necessário. 

## Navegação do Integrações

No Integrações, você pode consultar as cinco abas de integração listadas abaixo:

1. [Pedidos](#pedidos)
2. [Produtos](/pt/tutorial/verificando-integracao-no-bridge/#produtos)
3. [Rastreio](/pt/tutorial/verificando-integracao-no-bridge/#rastreio)
4. [Preço](/pt/tutorial/verificando-integracao-no-bridge/#preco)
5. [Estoque](/pt/tutorial/verificando-integracao-no-bridge/#estoque)

Em todas as telas há um __filtro__ , uma __caixa  de busca__ e um botão __Expandir Todos__, que exibe os detalhes de cada linha.

Também é possível exportar um relatório com as informações do Integrações clicando no botão __Exportar para excel__. Você pode utilizar o filtro para exportar apenas as informações desejadas.

## Pedidos

Na opção __Pedidos__, o Integrações exibe o log de pedidos realizados nos marketplaces em que sua loja está integrada. Temos quatro colunas que informam: 

- __Código__ do pedido.
- __Afiliado__ onde foi realizado o pedido.
- __Status__ do pedido, que pode ser *processo com sucesso* ou *processo com erro*.
- __Data de processamento__, que indica a última vez em que o pedido foi processado.

Você pode visualizar mais detalhes clicando sobre as informações do pedido.

Em caso de erro, será exibido um log detalhado sobre as causas do pedido não ter sido integrado. Para solucionar estes erros, você pode clicar no botão __?__. Você será encaminhado para [nosso artigo](/pt/faq/erros-de-pedidos-no-bridge-como-resolver) com orientações para a resolução do erro. Após ter feito as correções, você deve clicar no botão __Ações__ e escolher a opção __Reprocessar__.


## Produtos

Na opção __Produtos__, o Integrações exibe o log de produtos que foram enviados para os marketplaces em que sua loja está integrada. Temos quatro colunas que informam: 

- __Código__ do SKU.
- __Afiliado__ para o qual foi enviado o SKU.
- __Status__ do envio do SKU, que pode ser *processo com sucesso* ou *processo com erro*.
- __Data de processamento__, que indica a última vez em que um envio do SKU foi processado.

Você pode visualizar mais detalhes clicando sobre as informações do SKU.

Em caso de erro, será exibido um log detalhado sobre as causas do produto não ter sido enviado para o afiliado. Após ter feito as correções, você deve clicar no botão __Ações__ e escolher a opção __Reprocessar SKU__.

## Rastreio

Na opção __Rastreio__, o Integrações exibe o log do envio dos pedidos realizados nos marketplaces em que sua loja está integrada. Temos quatro colunas que informam: 

- __Código__ do pedido.
- __Afiliado__ onde foi realizado o pedido.
- __Status__ do rastreio, que pode ser *processo com sucesso* ou *processo com erro*.
- __Data de processamento__, que indica a última vez em que o rastreamento foi processado.

Você pode visualizar mais detalhes clicando sobre as informações do rastreio.

Em caso de erro, será exibido um log detalhado sobre o envio do pedido. Após ter feito as correções, você deve clicar no botão __Ações__ e escolher a opção __Reprocessar__.

## Preço

Na opção __Preço__, o Integrações exibe o log de preços de produtos que foram enviados para os marketplaces em que sua loja está integrada. Temos quatro colunas que informam: 

- __Código__ do SKU.
- __Afiliado__ para o qual foi enviado o preço do SKU.
- __Status__ do envio do preço do SKU, que pode ser *processo com sucesso* ou *processo com erro*.
- __Data de processamento__, que indica a última vez em que o envio de preço do SKU foi processado.

Você pode visualizar mais detalhes clicando sobre as informações do envio do preço.

Em caso de erro, será exibido um log detalhado sobre o envio do preço. Após ter feito as correções, você deve clicar no botão __Ações__ e escolher a opção __Reprocessar__.

## Estoque

Na opção __Estoque__, o Integrações exibe o log de estoque de produtos que foram enviados para os marketplaces em que sua loja está integrada. Temos quatro colunas que informam:

- __Código__ do SKU.
- __Afiliado__ para o qual foi enviado o estoque do SKU.
- __Status__ do envio do estoque do SKU, que pode ser *processo com sucesso* ou *processo com erro*.
- __Data de processamento__, que indica a última vez em que o envio de estoque do SKU foi processado.

Você pode visualizar mais detalhes clicando sobre as informações do envio do estoque.

Em caso de erro, será exibido um log detalhado sobre o envio do estoque. Após ter feito as correções, você deve clicar no botão __Ações__ e escolher a opção __Reprocessar__.

## Artigos Relacionados

- [Como funciona a regra de disponibilidade mínima](/pt/tutorial/entendendo-a-regra-de-disponibilidade-minima)
- [Por que o pedido do marketplace não integrou?](/pt/faq/por-que-o-pedido-do-marketplace-nao-integrou)
