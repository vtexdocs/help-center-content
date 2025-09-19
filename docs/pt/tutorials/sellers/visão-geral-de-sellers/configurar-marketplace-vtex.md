---
title: 'Configurar marketplace VTEX'
id: 7splyp5MqIyt2Iyz5jsNzb
status: PUBLISHED
createdAt: 2022-01-26T21:27:16.808Z
updatedAt: 2024-05-23T15:18:17.648Z
publishedAt: 2024-05-23T15:18:17.648Z
firstPublishedAt: 2022-01-26T23:06:58.565Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: configuring-vtex-marketplace
legacySlug: configurar-marketplace-vtex
locale: pt
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

A arquitetura de uma loja VTEX possibilita anunciar e vender produtos em outras lojas, sejam elas VTEX ou não. Ao  vender produtos de outros sellers em seu ambiente, uma loja VTEX  se torna um marketplace VTEX. Um marketplace é um tipo de comércio colaborativo, modelo que oferece vantagens e benefícios para as partes envolvidas. Mais informações sobre parceiros e oportunidades de crescimento no ecossistema VTEX em [Estratégias de marketplace na VTEX](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402). 

Para atuar como marketplace, é necessário configurar os seguintes passos na plataforma VTEX:

1. [Definir política comercial](#definir-politica-comercial)
2. [Integrar seller](#integrar-seller) 
3. [Mapear arquitetura do Catálogo](#mapear-arquitetura-do-catalogo)
4. [Configurar seleção de sellers no checkout](#configurar-selecao-de-sellers-no-storefront-e-checkout)
5. [Configurar storefront](#configurar-storefront)
6. [Configurar pagamentos](#configurar-pagamentos)

## Definir política comercial

A [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) é o que determina o sortimento de produtos, os preços, os pagamentos, as promoções, a segmentação de clientes e a estratégia de envio da sua loja VTEX em um canal de venda. É necessário [criar uma nova política comercial](/pt/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) quando uma dessas configurações for diferente para os sellers que atuam na sua vitrine. 

Se você deseja que as mesmas configurações sejam aplicadas em seus canais de venda, não é necessário criar uma política comercial nova, pois uma mesma política comercial pode ser usada para diferentes canais de venda.

Se deseja criar mais políticas comerciais, é possível [contratar políticas comerciais adicionais](/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X). Não há cobrança de taxas para a contratação de políticas comerciais adicionais para integrar lojas VTEX com conectores nativos, conectores certificados ou outras lojas VTEX.

## Integrar seller

Sellers são as lojas donas do produto, e responsáveis pelo fulfillment dos pedidos realizados em um marketplace. Para atuar como marketplace na VTEX, é necessário adicionar os sellers que deseja. Existem duas possibilidades para integração de sellers:

- **Seller VTEX:** loja hospedada na plataforma VTEX.  
- **Seller Externo:** loja hospedada em outra plataforma de ecommerce, ou que ainda não está hospedada em nenhuma plataforma.  

Para adicionar sellers ao seu marketplace pelo Admin VTEX, siga as instruções em [Adicionar Seller](/pt/tutorial/configurando-seller/). Também é possível realizar esse processo por meio de integração de API. Para isso, siga as instruções em [External Seller Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-guide). Se o seller que você deseja adicionar ainda não tem uma conta VTEX ou não está hospedado em nenhuma plataforma, sugerimos adicioná-lo por meio do [Seller Portal](#seller-portal--beta).

### Seller Portal

O [Seller Portal](/pt/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK) é uma edição da plataforma VTEX que permite que sellers se conectem e vendam seus produtos em marketplaces. Marketplaces hospedados na VTEX podem convidar sellers que já têm uma conta VTEX para se conectarem por meio do Seller Portal. Também é possível convidar sellers hospedados em outras plataformas ou aqueles que ainda não estão hospedados em nenhuma plataforma para criar uma conta no Seller Portal de forma rápida e sem atritos.

> ℹ️ Para ativar o Seller Portal para seus sellers, é necessário que o marketplace solicite essa funcionalidade entrando em contato com o CSM da sua conta na VTEX.

Uma vez contratado o uso do Seller Portal, para adicionar sellers a uma conta de Seller Portal, siga as instruções em [Convite de Sellers](/pt/tutorial/marketplace-convite-de-sellers-beta--6rb2FkcslmDueJ689Ulb9A).

## Mapear arquitetura do Catálogo

O [catálogo](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7kz4uWVq6NoaOdUpiJv4PR) dos sellers que vendem produtos no seu marketplace tem uma estrutura diferente da sua, sejam eles sellers VTEX ou externos. Existem dois momentos em que é necessário compatibilizar os catálogos: 

- Quando o seller envia seus produtos pela primeira vez para um marketplace VTEX.
- Quando há produtos de sellers com informações não mapeadas.

Isso permite que os produtos enviados pelo seller sejam inseridos com as informações equivalentes no catálogo do marketplace VTEX. 

Para realizar esta etapa, siga as instruções em [Mapeamento de categorias, marcas e especificações para marketplace](/pt/tutorial/mapeando-categorias-e-marcas-para-marketplace/). 

## Configurar seleção de sellers no storefront e checkout

Sellers diferentes podem ser exibidos durante a experiência de compra no seu marketplace, dependendo da configuração de algumas funcionalidades. Os sellers apresentados no carrinho e no storefront variam de acordo com a [visibilidade](/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label) definida para cada um, e a [localização](/pt/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc) do consumidor. Já o [Algoritmo de seleção de sellers](/pt/tutorial/white-label-sellers-selection-algorithm--3MemNQ4pKkWCpMdzI27AHa) define quais sellers são exibidos no checkout como opções de fulfillment.

### Visibilidade

É possível definir se a loja do seller será visível na experiência de compra do seu marketplace ou não, para que os consumidores identifiquem informações sobre o seller do qual está comprando. Para isso, os sellers podem ser configurados como:

- **Seller identificável:** o seller é visível no *storefront* do seu marketplace e escolhido pelo consumidor durante a experiência de compra no buy box.  
- **Seller não identificável (white label):** [sellers white label](/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label) são contas franquia na VTEX, ocultos na experiência de compra e selecionados automaticamente pelo sistema do checkout para o fulfillment.  

Para adicionar um seller não identificável (white label), é necessário ter esse modelo previsto no contrato com a VTEX. solicite a adição de uma conta franquia seguindo as instruções em [Solicitar criação de conta franquia](/pt/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl#solicitar-criacao-de-conta-franquia). Toda conta franquia é criada como seller white label e não é possível mudar o tipo de seller após a sua criação. Saiba mais em [Adicionar sellers](/pt/tutorial/adding-a-seller--tutorials_392). 

### Localização

A localização em que o consumidor se encontra quando acessa o seu marketplace afeta a sua experiência de compra. O sortimento de preços e produtos que aparecem no _storefront_ (frente da loja) depende dos sellers disponíveis para essa região. 

Um marketplace pode obter a informação da localização do usuário na vitrine e durante o checkout capturando coordenadas ou recebendo o CEP informado pelo próprio cliente, por exemplo. Para isso, é necessário utilizar a funcionalidade _Region _do [VTEX Session](/pt/tutorial/vtex-session-visao-geral-do-sistema-de-sessoes--6C4Edou6bYqqEAOCAg2MQQ), o sistema de gerenciamento de sessões do seu ecommerce. A funcionalidade _Region_ permite que uma loja exiba preços e disponibilidades diferentes de acordo com as regiões atendidas pelos seus. Para configurar sellers por localização no _Region_, siga as instruções em [Preço e disponibilidade de SKUs por Region](/pt/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc).

Quando o VTEX Session não tem acesso à localização do consumidor, ainda é preciso apontar um sortimento de produtos de sellers na experiência de compra. Nesse cenário, o algoritmo de seleção de sellers indica [sellers abrangentes](/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI), que são capazes de entregar pedidos em todas as regiões atendidas pelo seu marketplace.

> ℹ️ A funcionalidade Region está adaptada apenas para lojas que utilizam o VTEX IO, e não é válida para o Portal CMS Legado.

## Configurar storefront

É preciso configurar o _storefront_ (frente da loja) da sua loja para  considerar as informações dos sellers na experiência de compra. Isso pode ser feito tanto no Portal CMS Legado quanto em lojas que utilizam o [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs).

Para lojas que ainda utilizam o Portal CMS Legado, configure os seguintes [controles](/pt/tutorial/lista-de-controles-para-templates--tutorials_563) nos templates do seu ecommerce:

<table>
  <tr>
   <td>**Controle**
   </td>
   <td>**Descrição**
   </td>
  </tr>
  <tr>
   <td>&lt;vtex.cmc:sellerDescription />
   </td>
   <td>**SellerDescription:** nome e imagem cadastrados para o seller do produto em questão.
   </td>
  </tr>
  <tr>
   <td>&lt;vtex.cmc:SellerOptions />
   </td>
   <td>**SellerOptions:** exibe os sellers que entregam o produto da página, o preço do produto vendido por cada seller e o parcelamento (limite de até 3 preços diferentes).
   </td>
  </tr>
  <tr>
   <td>&lt;vtex.cmc:sellerInfo />
   </td>
   <td>**SellerInfo:** exibe as informações cadastradas para o seller. Deve ser utilizado na página de detalhes de um seller, na pasta seller-info.
   </td>
  </tr>
</table>

Para lojas que utilizam o [VTEX IO](https://vtex.com/us-en/store-framework/), confira o app [Seller Selector](https://github.com/vtex-apps/seller-selector), usado para indicar o número de sellers que seu marketplace tem para cada produto. Dessa forma, compradores podem comparar os preços de cada seller e adicionar o produto desejado ao seu carrinho.

Para lojas que utilizam o [VTEX IO](https://vtex.com/us-en/store-framework/), é possível criar um [anexo](/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) para habilitar a funcionalidade [Assembly Options](/pt/tutorial/assembly-options-en--5x5FhNr4f5RUGDEGWzV1nH). Esta feature é adequada para sellers que gerenciam cenários complexos, como a customização de produtos, em que há diferentes combinações de produtos, quantidade, itens adicionais, custos e estoque. Se a instalação da Assembly Option for feita na conta do seller, sua exibição se dá no checkout. Para aparecer na página do produto, é necessário adicionar a Assembly Option na conta do marketplace.

## Configurar pagamentos

Existem diferentes cenários relacionados a pagamentos em marketplaces VTEX, com suas próprias configurações. Saiba mais sobre as opções para Split de pagamentos e as configurações necessárias para que o seller ou o marketplace processem pagamentos em [Pagamentos em marketplace VTEX](/tutorial/pagamentos-em-marketplaces-vtex--2kYOfWCZYweJkYl18bw9yD). 

_____________

Agora que você já configurou a plataforma VTEX para se tornar um marketplace, é preciso realizar as [Ações para a operação de marketplaces VTEX](/pt/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev).

## Saiba mais

- [Aprovar anúncios recebidos](/pt/tutorial/sugerindo-e-aprovando-skus/)
- [Informações compartilhadas entre marketplace e seller na VTEX](/pt/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3)
