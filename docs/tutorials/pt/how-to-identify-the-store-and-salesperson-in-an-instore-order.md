---
title: 'Como identificar a loja e vendedor em um pedido feito pelo inStore'
id: 4CXQ54PRqGKI2lOjFuJPQL
status: DRAFT
createdAt: 2020-11-07T00:10:46.437Z
updatedAt: 2022-09-14T20:42:41.119Z
publishedAt: 
firstPublishedAt: 2020-11-07T00:25:58.789Z
contentType: tutorial
productTeam: Shopping
author: 56yU9Wz6mLwmzo82TjgAHy
slug: como-identificar-a-loja-e-vendedor-em-um-pedido-feito-pelo-instore
locale: pt
legacySlug: como-identificar-a-loja-e-vendedor-em-um-pedido-feito-pelo-instore
subcategory: 
---

É comum que operações de e-commerce que adotam [estratégias de comércio unificado](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3) queiram quantificar o impacto em vendas da integração de lojas físicas. Em pedidos de prateleira infinita, onde produtos indisponíveis na loja física são recuperados a partir de outros estoques, pode ser desejável identificar a origem e o responsável pelo pedido.

Este artigo explica como usar as informações registradas em um pedido feito pelo [inStore](https://help.vtex.com/pt/tracks/instore-getting-started--6N0QlieWqboSVU2ehgAVAb) para identificar o vendedor e a loja física onde foi fechado o pedido.

## Obtendo os detalhes de um pedido

Para acessar os detalhes de um pedido específico, basta selecionar o pedido desejado em *Pedidos > Gerenciamento de pedidos > Todos os pedidos*. Este caminho é o recomendado para consultas individuais, por usuários da operação do e-commerce.

Para enviar dados de pedidos para sistemas externos, como dashboards e data lakes, recomendamos realizar uma [integração por API usando o feed de pedidos](https://developers.vtex.com/vtex-developer-docs/docs/erp-integration-set-up-order-integration). Isso permite ainda que sejam capturados detalhes do pedido que não são exibidos na interface de usuário do admin da VTEX, como o e-mail do vendedor.

## Identificação do vendedor

Quando um pedido é fechado no inStore, a identificação do usuário logado no aplicativo fica visível na parte superior da tela de detalhes do pedido no Admin. No exemplo abaixo, o nome do usuário é `A123456`.

![PT - ID do vendedor inStore](//images.ctfassets.net/alneenqid6w5/2VlKApkaFLzzxl6wRrcNkw/b46bb2740a82a8fab8988f7dd752f7ce/PT_-_ID_do_vendedor_inStore.png)

Quando os detalhes do pedido são obtidos pela [Orders API](https://developers.vtex.com/vtex-developer-docs/reference/orders), o nome do usuário está disponível no campo `callCenterOperatorData.userName`. Também é possível acessar o e-mail deste usuário em  `callCenterOperatorData.email`.

```json
"callCenterOperatorData": {
       "id": "CallCenterOperatorAttachment",
       "email": "joao.silva@exemplo.com",
       "userName": "A123456"
   }
```

Caso o usuário logado no aplicativo seja compartilhado entre vendedores da mesma loja, é possível ainda incluir a identificação do vendedor no campo de observação do cliente.

![PT - ID do vendedor inStore (alt)](//images.ctfassets.net/alneenqid6w5/2VFGuKA7ZUgcO55TPgpDWU/ce44ee5a33db7284999dc2700d964f75/PT_-_ID_do_vendedor_inStore__alt_.png)

Quando os detalhes do pedido são obtidos pela Orders API, esta informação fica disponível no campo `openTextField.value`.

```json
"openTextField": {
       "value": "A123456 - JOAO RAMOS SILVA"
   }
```

## Identificação da loja

Quando um pedido é fechado no inStore, a identificação da loja fica visível na seção de Promoções e Parcerias da tela de detalhes do pedido no Admin. No exemplo abaixo, o identificador da loja é `8b4d5ea1-2055-11ea-82fa-0ad725bc7b4f`.

![PT - ID da loja inStore](//images.ctfassets.net/alneenqid6w5/x0Czqfo4emIb8X6zgQgD2/e6867ef4cf7bd54cd471ee7d07ccd59c/PT_-_ID_da_loja_inStore.png)

Quando os detalhes do pedido são obtidos pela Orders API, esta informação fica disponível no campo `marketingData.utmSource`.

```json
"marketingData": {
       "id": "marketingData",
       "utmSource": "8b4d5ea1-2055-11ea-82fa-0ad725bc7b4f",
       "utmPartner": null,
       "utmMedium": null,
       "utmCampaign": null,
       "coupon": null,
       "utmiCampaign": null,
       "utmipage": null,
       "utmiPart": null,
       "marketingTags": [
           "instore"
       ]
   }
```

## Consulta aos dados de cadastro

O identificador do vendedor e da loja podem ser usados para consultar os dados de cadastro em `https://{accountName}.myvtex.com/admin/vtable`. 

![PT - Admin inStore](//images.ctfassets.net/alneenqid6w5/4k1KmCEABh6BJBBCBh5B4F/fe249d924308d3d2f8b7fbfbec739f05/Screen_Shot_2020-11-09_at_15.20.50.png)

<div class="alert alert-info" role="alert">As instruções abaixo explicam como fazer essas consultas usando os identificadores que aparecem em um pedido. Se necessário, entretanto, é possível buscar usando qualquer campo do cadastro de lojas e vendedores.</div>

### Busca por vendedor

Para fazer essa busca, siga as instruções abaixo:

1. Clique na barra de busca
2. Selecione a opção **Nome**
3. Selecione o sinal de igual (`=`)
4. Cole o identificador da loja (`callCenterOperatorData.userName`)
5. Aperte a tecla Enter do seu teclado

Ao concluir o passo 4, a expressão do filtro de busca deve ficar no formato `Nome:=:A123456`. Assim será possível encontrar o vendedor na listagem de vendedores, como visto na imagem abaixo.

![PT - Admin dos vendedores](//images.ctfassets.net/alneenqid6w5/601CfGNUMAQyhhWyNcpJg6/67b8789e9b10570025613023fc8e1e30/PT_-_Admin_dos_vendedores.png)

Caso prefira fazer essa consulta por API, basta usar o endpoint [Search Documents](https://developers.vtex.com/vtex-developer-docs/reference/search#searchdocuments) da [Master Data API - V2](https://developers.vtex.com/reference/master-data-api-v2-overview) para buscar pelo identificador da loja na entidade de dados `vendors`.

### Busca por loja

Para fazer essa busca, siga as instruções abaixo:

1. Clique na barra de busca
2. Selecione a opção **Id do Documento**
3. Selecione o sinal de igual (`=`)
4. Cole o identificador da loja (`marketingData.utmSource`)
5. Aperte a tecla Enter do seu teclado

Ao concluir o passo 4, a expressão do filtro de busca deve ficar no formato `Id do Documento:=:8b4d5ea1-2055-11ea-82fa-0ad725bc7b4f`. Assim será possível encontrar a loja na listagem de lojas, como visto na imagem abaixo.

![PT - Admin das lojas](//images.ctfassets.net/alneenqid6w5/ZORye3vSq6dVZ5aE4SRnl/dca845c2c8a16a01b75f9cca1b2b6d2a/PT_-_Admin_das_lojas.png)

Caso prefira fazer essa consulta por API, basta usar o endpoint [Search Documents](https://developers.vtex.com/vtex-developer-docs/reference/search#searchdocuments) da [Master Data API - V2](https://developers.vtex.com/reference/master-data-api-v2-overview) para buscar pelo identificador da loja na entidade de dados `stores`.
