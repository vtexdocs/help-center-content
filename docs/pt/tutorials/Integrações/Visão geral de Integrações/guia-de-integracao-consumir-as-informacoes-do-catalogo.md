---
title: 'Guia de Integração - Consumir as informações do catálogo para utilizar em um Serviço Externo'
id: 3j15zRDuismM42Y8SoGMO2
status: PUBLISHED
createdAt: 2018-08-20T19:03:13.609Z
updatedAt: 2022-10-05T00:09:39.562Z
publishedAt: 2022-10-05T00:09:39.562Z
firstPublishedAt: 2018-08-20T19:03:44.217Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: integration-guide-consuming-catalog-information-for-use-in-an-external-service
legacySlug: guia-de-integracao-consumir-as-informacoes-do-catalogo
locale: pt
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

Este documento tem por objetivo auxiliar na integração das informações existentes no Catálogo de uma loja VTEX com algum serviço externo.

Entre os casos de uso mais comuns para essa integração, temos:

1. Integrar o catálogo da loja VTEX com marketplaces externos.
2. Enviar os dados de catálogo para ferramentas de BI.
3. Gerar relatórios externos utilizando as informações do catálogo.

Siga os passos abaixo para realizar a integração.

## Criar um afiliado

O afiliado funciona como um webhook que irá notificar o serviço externo sobre mudanças feitas nas informações de um SKU, mudanças em estoque ou mudanças em preços.

1. No menu lateral do admin, clique em __Gerenciamento de pedidos__.
2. Clique em __Configurações__.
3. Clique na aba __Afiliados__.
4. Clique no botão __Novo afiliado__.
5. Preencha os campos conforme descritos abaixo.
6. Clique em __Salvar__.

### Preencher os campos do painel de Novo Afiliado

- __Nome__: Preencha com o nome do sistema afiliado.
- __ID__: Código de identificação do afiliado com 3 dígitos. O ID deve conter __apenas consoantes__.
- __Política Comercial__: ID da política comercial que terá suas informações enviadas para o afiliado.
- __E-mail de Follow Up__: Endereço de e-mail que receberá informações quando o afiliado for notificado.
- __Endpoint de Search__: URL da aplicação que [receberá notificações](#atualizar-os-dados-dos-skus) sobre os SKUs, seus preços e seus estoques. Esta URL deverá ser desenvolvida pelo sistema externo para que a VTEX possa notificar as alterações nesta rota.
- __Versão do Endpoint de Search__: Mantenha este campo preenchido com a informação __1.x.x__.
- __Usar meu meio de pagamento__: Caso faça sentido para a sua integração que o serviço externo receba as informações de meios de pagamento da sua loja, marque esta flag. 

## Realizar a primeira carga com os dados dos SKUs

Após ter criado o Endpoint que receberá as informações dos produtos e ter configurado corretamente o afiliado, você deverá realizar uma primeira carga para obter os dados do Catálogo e salvá-los no banco de dados do seu serviço externo. Para isso, siga as instruções abaixo.

### 1 - Obter os dados de ID dos SKUs da sua loja

Faça um `GET` na rota `http://{accountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitids?page={page}&pagesize={page_size}` para obter como resposta um array com os ids dos SKUs existentes na sua loja.

__Parâmetros da API__:

`{accountName}`: Nome da conta da sua loja na VTEX.

`{page}`: Em qual página está sendo feita a requisição. Você deve passar por todas as páginas até que a resposta da requisição seja um array vazio (`[]`).

`{page_size}`: A quantidade de ids de SKUs a ser retornada por página. Recomendamos retornar, no máximo, 1000 ids por página.

__Exemplo de resposta__:

```json
[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]
```

### 2 - Obter os dados sobre as propriedades dos SKUs

Utilizando os IDs dos SKUs obtidos na requisição anterior, você deve fazer um `GET` na rota `http://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{{skuId}}` para obter as informações sobre as propriedades dos SKUs. A resposta deste request irá retornar as informações que caracterizam o SKU, como __Nome__, __Marca__, __Categoria__, __Coleções__, __Imagem__, se o SKU está __Ativo ou Inativo__ e __Políticas Comerciais__, por exemplo. As informações de preço e estoque ainda não são obtidas nesta etapa. 

__Parâmetros da API__:

`{accountName}`: Nome da conta da sua loja na VTEX.

`{{skuId}}`: ID do SKU a ser consultado.

__Exemplo de resposta__:

```
{
    "Id": 20,
    "ProductId": 18,
    "NameComplete": "Newest Iron 220",
    "ProductName": "Newest Iron",
    "ProductDescription": "Newest iron",
    "TaxCode": "",
    "SkuName": "220",
    "IsActive": true,
    "IsTransported": true,
    "IsInventoried": true,
    "IsGiftCardRecharge": false,
    "ImageUrl": "http://worldshopping.vteximg.com.br/arquivos/ids/155438-55-55/image-5a949c715cf84a7e9cac11cb745bfba9.jpg?v=636633199310730000",
    "DetailUrl": "/newest-iron-18/p",
    "CSCIdentification": null,
    "BrandId": "2000000",
    "BrandName": "Brand name",
    "Dimension": {
        "cubicweight": 0.0002,
        "height": 1,
        "length": 1,
        "weight": 1,
        "width": 1
    },
    "RealDimension": {
        "realCubicWeight": 0,
        "realHeight": 0,
        "realLength": 0,
        "realWeight": 0,
        "realWidth": 0
    },
    "ManufacturerCode": null,
    "IsKit": false,
    "KitItems": [],
    "Services": [],
    "Categories": [],
    "Attachments": [],
    "Collections": [],
    "SkuSellers": [
        {
            "SellerId": "1",
            "StockKeepingUnitId": 20,
            "SellerStockKeepingUnitId": "20",
            "IsActive": true,
            "FreightCommissionPercentage": 0,
            "ProductCommissionPercentage": 0
        },
        {
            "SellerId": "jbsusaqa",
            "StockKeepingUnitId": 20,
            "SellerStockKeepingUnitId": "888898",
            "IsActive": true,
            "FreightCommissionPercentage": 0,
            "ProductCommissionPercentage": 10
        }
    ],
    "SalesChannels": [
        1,
        2,
        3,
        4,
        5,
        6
    ],
    "Images": [
        {
            "ImageUrl": "http://worldshopping.vteximg.com.br/arquivos/ids/155438/image-5a949c715cf84a7e9cac11cb745bfba9.jpg?v=636633199310730000",
            "ImageName": null,
            "FileId": 155438
        }
    ],
    "SkuSpecifications": [],
    "ProductSpecifications": [],
    "ProductClustersIds": "137,139",
    "ProductCategoryIds": "/1/2/",
    "ProductGlobalCategoryId": 783,
    "ProductCategories": {
        "1": "Choir & Voice",
        "2": "For Men"
    },
    "CommercialConditionId": 1,
    "RewardValue": 0,
    "AlternateIds": {
        "RefId": "888898"
    },
    "AlternateIdValues": [
        "888898"
    ],
    "EstimatedDateArrival": null,
    "MeasurementUnit": "un",
    "UnitMultiplier": 1,
    "InformationSource": "Indexer",
    "ModalType": null
}
```

### 3 - Obter os dados de preço e estoque dos SKUs

Ainda utilizando os ids obtidos na primeira requisição, você deve fazer um `POST` na rota `https://{accountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={salesChannel}&affiliateId={affiliateId}` para obter os dados de __preço, estoque e SLA de entrega__ dos SKUs. Esta chamada simula um carrinho no Checkout da VTEX, retornando as informações mais atualizadas de preço, estoque e SLA de entrega.

__Parâmetros da API__:

`{accountName}`: Nome da conta da sua loja na VTEX.

`{salesChannel}`: Política Comercial a ser considerada na simulação.

`{affiliateId}`: Id do afiliado a ser considerado no contexto da simulação.

__Exemplo de BODY a ser preenchido no POST__:

```
{
    "postalCode":"10019", //required field if the country field is filled
    "country":"USA",      //required field if postalCode is filled
    "items": [            //required field: must contain at least one item
        {
            "id":"23",    //required field (string): SKU id you want to use in the simulation
            "quantity":1, //required field (int): quantity of the item you want to simulate
            "seller":"1"  //id of the main store: always use the value 1
        },
        {
            "id":"25",
            "quantity":2,
            "seller":"1"
        }
    ]
}
```

__Exemplo de resposta__:

```
{
    "items": [
        {
            "id": "23",
            "requestIndex": 0,
            "quantity": 0,
            "seller": "1",
            "merchantName": null,
            "priceValidUntil": "2019-08-17T19:40:26Z",
            "price": 13900,
            "listPrice": 15900,
            "offerings": [],
            "priceTags": [],
            "measurementUnit": "kg",
            "unitMultiplier": 1.5,
            "attachmentOfferings": []
        }
    ],
    "postalCode": "10019",
    "geoCoordinates": [],
    "country": "USA",
    "logisticsInfo": [
        {
            "itemIndex": 0,
            "addressId": null,
            "selectedSla": null,
            "selectedDeliveryChannel": null,
            "stockBalance": 0,
            "quantity": 0,
            "shipsTo": [
                "USA",
                "ROU",
                "BRA",
                "GBR"
            ],
            "slas": [],
            "deliveryChannels": []
        }
    ],
    "pickupPoints": [],
    "messages": []
}
```

Combinando os três tipos de request exibidos acima, você será capaz de realizar a __primeira carga__ de dados do Catálogo da VTEX para gravar na base de dados de um serviço externo.

## Atualizar os dados dos SKUs

Caso ocorram mudanças em algum produto, a VTEX irá notificar o Endpoint do afiliado sobre as informações de __todos os SKUs do produto alterado, mesmo que um dos SKUs não tenha sofrido alteração,__ realizando um POST. Segue abaixo um exemplo do payload enviado pela VTEX para o Endpoint:

```json
{
  "IdSku": "15", //Id do SKU
  "An": "accountname", //Account Name
  "IdAffiliate": "SPT", //Affiliate Id
  "DateModified": "2018-08-20T15:11:28.1978783Z", //Data de modificação
  "IsActive": false, //Indica o status do SKU, se está ativo ou inativo
  "StockModified": false, //Indica se o estoque do SKU foi modificado
  "PriceModified": false, //Indica se o preço do SKU foi modificado
  "HasStockKeepingUnitModified": true, //Indica se alguma informação do SKU foi mudada (com exceção de preço e estoque)
  "HasStockKeepingUnitRemovedFromAffiliate": false //Indica se o SKU foi removido do afiliado
}
```

Recebendo este payload, o integrador deve utilizar estas informações para decidir quais chamadas deverá fazer para atualizar as informações dos SKUs:

- Caso tenha ocorrido alteração de preço ou estoque, o integrador deve chamar a rota `https://{accountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={salesChannel}&affiliateId={affiliateId}`, conforme descrito na seção [Obter os dados de preço e estoque dos SKUs](#3-obter-os-dados-de-preco-e-estoque-dos-skus).
- Caso tenha ocorrido uma alteração no SKU que não seja de preço ou estoque, o integrador deve chamar a rota `http://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{{skuId}}`, conforme descrito na seção [Obter os dados sobre as propriedades dos SKUs](#2-obter-os-dados-sobre-as-propriedades-dos-skus).

<div class="alert alert-warning">
Caso um novo SKU seja inserido no Catálogo, ele será notificado no Endpoint de cada afiliado. Por se tratar de um novo SKU, é necessário realizar o preenchimento dos dados deste novo SKU na base de dados do serviço externo. O integrador deve verificar se o SKU notificado se trata de um SKU que ainda não existe na base de dados do serviço externo. Caso se trate de um novo SKU, o integrador deve seguir os mesmos passos descritos na seção <strong>Realizar a primeira carga com os dados dos SKUs</strong>. Caso seja um SKU já existente, o integrador deve seguir os passos da seção <strong>Atualizar os dados dos SKUs</strong>
</div>

<div class="alert alert-info">
Caso queira integrar as formas de pagamento de um seller VTEX com um marketplace externo, <a href="https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide">acesse nossa documentação</a>.
</div>
