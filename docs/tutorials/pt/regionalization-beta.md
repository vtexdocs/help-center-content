---
title: 'Regionalização (Beta)'
id: 72fwxdSLvjKC7ZAT58vlqf
status: PUBLISHED
createdAt: 2021-10-25T19:22:23.686Z
updatedAt: 2023-05-05T19:32:28.974Z
publishedAt: 2023-05-05T19:32:28.974Z
firstPublishedAt: 2021-10-25T20:06:30.150Z
contentType: tutorial
productTeam: VTEX IO
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: regionalizacao-beta
locale: pt
legacySlug: regionalizacao-beta
subcategory: 23WdCYqmn2V2Z7SDlc14DF
---

<div class="alert alert-info">
<p>Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
</div>

A Regionalização é uma funcionalidade do [VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) que permite otimizar os resultados de busca de acordo com a disponibilidade de sellers na região do cliente. Para instalar e configurar o VTEX Intelligent Search na sua loja, leia o nosso artigo [Search](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search).

A Regionalização  utiliza um comportamento do VTEX Intelligent Search — a [Disponibilidade](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/7LMQbWK5nElIkXo0NK8Kux). Ela busca os produtos disponíveis no estoque dos sellers que atendem a uma determinada região.

Lojas que possuem mais de um Seller White Label cadastrado costumam ter um estoque específico dependendo de cada região. Esse é o caso de ecommerces que são supermercados, por exemplo.

Com a Regionalização ativada, uma vez que um cliente informa seu código postal (CEP) durante a navegação na loja (antes do checkout), somente produtos disponíveis para entrega na região correspondente são exibidos nos resultados de busca.

Para começar a utilizar a Regionalização, você precisa seguir as etapas abaixo.

1. [Configuração de sellers](#1-configuracao-de-sellers)
    - [Seller 1](#seller-1)
    - [Seller White Label](#seller-white-label)
    - [Seller Abrangente](#seller-abrangente)
2. [Solicitação para ativar a Regionalização](#2-solicitacao-para-ativar-a-regionalizacao)
3. [Configuração no VTEX IO](#3-configuracao-no-vtex-io)

<div class="alert alert-warning">
  <p>Apesar de lojas regionalizadas mostrarem apenas produtos disponíveis em uma determinada região na página de listagem de produtos, os filtros não levam em consideração a regionalização. Por conta dessa limitação, é possível que os clientes da loja selecionem valores de filtros que resultam em produtos indisponíveis em sua região.</p>
</div>

## 1. Configuração de sellers 

Primeiro, é preciso entender qual  cenário de [seller](https://help.vtex.com/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w) se aplica à sua loja. Veja abaixo os cenários possíveis.

### Seller 1

Por padrão, toda loja VTEX é criada com arquitetura para atuar como seller e [marketplace](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) simultaneamente. Isso significa que sua loja VTEX será o seller com ID igual a 1, pois ela pode funcionar como um seller do seu próprio ambiente.
Esse seller é criado automaticamente na conta da loja, representando o seu estoque próprio. Isso ocorre tanto para marketplaces que vendem produtos próprios quanto para lojas que não são marketplaces, mas reúnem o checkout e [fulfillment](https://help.vtex.com/pt/tutorial/o-que-sao-pedidos-com-origem-marketplace-e-origem-fulfillment--6eVYrmUAwMOeKICU2KuG06#fulfillment) em seu ecommerce.

### Seller White Label

O [Seller White Label](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa) é um seller que os clientes finais não escolhem, ou seja, clientes não têm visibilidade da existência dele em nenhum momento do processo de compra.

Quando o consumidor adiciona produtos no carrinho e simula o frete na loja, o sistema seleciona automaticamente o Seller White Label que tem aquele produto em estoque e apresenta as formas de entrega dos sellers que oferecem as melhores condições. Para saber mais sobre o algoritmo de seleção de Sellers White Label, leia o nosso [artigo](https://help.vtex.com/pt/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa) sobre esse assunto.

Você deve configurar um ou mais Sellers White Label na sua loja, porque o Intelligent Search checa a disponibilidade de estoque dos produtos nos Sellers White Label de cada região para definir quais produtos serão exibidos para o cliente.

### Seller Abrangente

O Seller Abrangente é um tipo de seller que disponibiliza itens aos clientes que não utilizam navegação com localização definida. Assim, evita-se cenários em que produtos aparecem equivocadamente como disponíveis para clientes cuja localização o seller não atende. Para isso, o Seller Abrangente precisa ter uma área de entrega significativa para a operação da sua loja.

## 2. Solicitação para ativar a Regionalização
A segunda etapa é abrir uma solicitação para que o time da VTEX habilite a Regionalização na sua loja. Para isso, é necessário entrar em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

### 3. Configuração no VTEX IO

Para definir os requisitos de configuração de sellers necessários para habilitar a Regionalização, leia o nosso [guia Regionalization](https://developers.vtex.com/vtex-developer-docs/docs/regionalization-beta).
Depois da configuração, sua loja estará pronta para utilizar a funcionalidade de Regionalização. Quando o cliente informar sua região durante a navegação, ela será levada em consideração e a busca adaptará os resultados de acordo com essa informação.

