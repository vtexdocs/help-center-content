---
title: 'Regionalização'
id: 72fwxdSLvjKC7ZAT58vlqf
status: PUBLISHED
createdAt: 2021-10-25T19:22:23.686Z
updatedAt: 2025-07-24T18:57:43.188Z
publishedAt: 2025-07-24T18:57:43.188Z
firstPublishedAt: 2021-10-25T20:06:30.150Z
contentType: tutorial
productTeam: VTEX IO
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: regionalization
legacySlug: regionalizacao-beta
locale: pt
subcategoryId: 30Kdgc6wJkMWgcXLB8mGr7
---

A Regionalização é uma funcionalidade do [VTEX Intelligent Search](/pt/docs/tracks/visao-geral-intelligent-search) que permite otimizar os resultados de busca de acordo com a disponibilidade de sellers na região do cliente. Para instalar e configurar o VTEX Intelligent Search na sua loja, leia o nosso artigo [Search](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search).

A Regionalização  utiliza um comportamento do VTEX Intelligent Search — a [Disponibilidade](/pt/docs/tutorials/disponibilidade). Ela busca os produtos disponíveis no estoque dos sellers que atendem a uma determinada região.

Lojas que possuem mais de um Seller White Label cadastrado costumam ter um estoque específico dependendo de cada região. Esse é o caso de ecommerces que são supermercados, por exemplo.

Com a Regionalização ativada, uma vez que um cliente informa seu código postal (CEP) durante a navegação na loja (antes do checkout), somente produtos disponíveis para entrega na região correspondente são exibidos nos resultados de busca.

Para começar a utilizar a Regionalização, você precisa seguir as etapas abaixo.

1. [Configuração de sellers](#1-configuracao-de-sellers)
    - [Seller 1](#seller-1)
    - [Seller White Label](#seller-white-label)
    - [Seller Abrangente](#seller-abrangente)
2. [Solicitação para ativar a Regionalização](#2-solicitacao-para-ativar-a-regionalizacao)
3. [Configuração no VTEX IO](#3-configuracao-no-vtex-io)

> ⚠️ Apesar de lojas regionalizadas mostrarem apenas produtos disponíveis em uma determinada região na página de listagem de produtos, os filtros não levam em consideração a regionalização. Por conta dessa limitação, é possível que os clientes da loja selecionem valores de filtros que resultam em produtos indisponíveis em sua região.

## 1. Configuração de sellers 

Primeiro, é preciso entender qual  cenário de [seller](/pt/docs/tutorials/o-que-e-um-seller) se aplica à sua loja. Veja abaixo os cenários possíveis.

### Seller 1

Por padrão, toda loja VTEX é criada com arquitetura para atuar como seller e [marketplace](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex) simultaneamente. Isso significa que sua loja VTEX será o seller com ID igual a 1, pois ela pode funcionar como um seller do seu próprio ambiente.
Esse seller é criado automaticamente na conta da loja, representando o seu estoque próprio. Isso ocorre tanto para marketplaces que vendem produtos próprios quanto para lojas que não são marketplaces, mas reúnem o checkout e [fulfillment](/pt/docs/tutorials/fluxo-e-status-de-pedidos#fulfillment) em seu ecommerce.

### Seller White Label

O [Seller White Label](/pt/docs/tutorials/seller-white-label) é um seller que os clientes finais não escolhem, ou seja, clientes não têm visibilidade da existência dele em nenhum momento do processo de compra.

Quando o consumidor adiciona produtos no carrinho e simula o frete na loja, o sistema seleciona automaticamente o Seller White Label que tem aquele produto em estoque e apresenta as formas de entrega dos sellers que oferecem as melhores condições. Para saber mais sobre o algoritmo de seleção de Sellers White Label, leia o nosso [artigo](/pt/docs/tutorials/selecao-de-sellers-white-label) sobre esse assunto.

Você deve configurar um ou mais Sellers White Label na sua loja, porque o Intelligent Search checa a disponibilidade de estoque dos produtos nos Sellers White Label de cada região para definir quais produtos serão exibidos para o cliente.

### Seller Abrangente

O Seller Abrangente é um tipo de seller que disponibiliza itens aos clientes que não utilizam navegação com localização definida. Assim, evita-se cenários em que produtos aparecem equivocadamente como disponíveis para clientes cuja localização o seller não atende. Para isso, o Seller Abrangente precisa ter uma área de entrega significativa para a operação da sua loja.

## 2. Solicitação para ativar a Regionalização
A segunda etapa é abrir uma solicitação para que o time da VTEX habilite a Regionalização na sua loja. Para isso, é necessário entrar em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

### 3. Configuração no VTEX IO

Para definir os requisitos de configuração de sellers necessários para habilitar a Regionalização, leia o nosso [guia Regionalization](https://developers.vtex.com/vtex-developer-docs/docs/regionalization-beta).
Depois da configuração, sua loja estará pronta para utilizar a funcionalidade de Regionalização. Quando o cliente informar sua região durante a navegação, ela será levada em consideração e a busca adaptará os resultados de acordo com essa informação.

