---
title: 'Integração entre Marketplace não VTEX e Seller VTEX - Ações Referentes à Atualização de Catálogo'
id: 5jwV8FJ1cNRmkkWnXTZEng
status: DRAFT
createdAt: 2019-09-16T12:50:28.649Z
updatedAt: 2023-04-20T15:01:37.625Z
publishedAt: 
firstPublishedAt: 2019-10-16T19:00:57.865Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: integracao-entre-marketplace-nao-vtex-e-seller-vtex-acoes-referentes-a
legacySlug: integracao-entre-marketplace-nao-vtex-e-seller-vtex-acoes-referentes-a
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

<div class="alert alert-warning">
Confira a versão atualizada desse <a href="https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide">guia de integração com marketplace</a> em nosso Developer Portal. 
</div> 

Um dos passos para integrar um Marketplace não VTEX a um Seller VTEX é permitir consultas ao __Catálogo__ da VTEX com o objetivo de obter informações de mudança de preço, estoque, catálogo e dados de frete.

As três ações abaixo, referentes ao Catálogo, são necessárias para o funcionamento da integração:

1. Receber notificação de que houve mudança no preço, estoque ou catálogo.
2. Obter dados do SKU no Seller.
3. Obter preço, estoque e dados de frete no Seller.

Se deseja ver o fluxo geral da integração, veja o artigo [Guia de integração para Marketplace não hospedado na plataforma VTEX](https://help.vtex.com/pt/tutorial/guia-de-integracao-para-marketplaces-marketplace-nao-vtex--SMBUYFVEfZr0m0ttOULxj "Integração para Marketplace não VTEX").

## 1) Notificação de mudança no preço, estoque ou catálogo - Seller chama endpoint do Marketplace

Dentro da loja hospedada na VTEX (*Seller*), será cadastrado um *afiliado* (o **Marketplace**), que é o interessado em receber o catálogo e as atualizações de preço e estoque. É responsabilidade do __Seller__ fazer esse cadastro.

O **Marketplace** deve implementar um endpoint para receber notificações sobre alterações nos dados de SKUs do *Seller*.

Toda vez que um SKU do Seller sofre alguma alteração, o sistema de broadcasting da VTEX chama esse endpoint do Marketplace, notificando que houve uma mudança.

### Exemplo de chamada API REST:

Notifica o Marketplace não VTEX de que houve uma mudança no preço, estoque ou catálogo.

- Endpoint: `https://{endpointDoAfiliado}/api/notification/`
- Verbo: **POST**
- Content-Type: **application/json**
- Accept: **application/json**

| Parâmetro     | Descrição     |
| ---------- | ---------- |
| endpointDoAfiliado   | Endpoint que o Marketplace deve construir para receber notificações   |

#### Exemplo de JSON da notificação:

```json
{
    "IdSku" : "1634",
    "An" : "lojateste",
    "IdAffiliate": "PRT",
    "StockModified": true,
    "PriceModified": true
}
```

| Campo     | Type     | Descrição     |
| ---------- | ---------- | ---------- |
| IdSku       | integer       | ID do SKU cadastrado na VTEX       |
| An       | string       |    account name do seller VTEX   |
| IdAffiliate       | string       | ID do afilado cadastrado no seller VTEX   |
| StockModified       | boolean       | Se for true, indica que houve mudança de estoque; se for false, não houve mudança de estoque       |
| PriceModified       | boolean       | Se for true, indica que houve mudança no preço do SKU; se for false, não houve mudança no preço do SKU       |

## 2) Busca de dados do SKU no Seller - Marketplace chama endpoint do Seller

Quando o **Marketplace** recebe uma notificação de mudança nos dados de um SKU (passo anterior), esse SKU pode já estar catalogado no Marketplace ou não. 

O **Marketplace**, então, busca os dados do SKU no Seller por meio da chamada API REST descrita abaixo para depois poder conferir se o SKU já está em seu catálogo (essa conferência deve ser feita por meio de uma lógica interna do Marketplace).

Se o SKU não estiver em seu catálogo, o **Marketplace** deve decidir se deseja adicioná-lo (também por meio de uma lógica interna).

### Exemplo de chamada API REST:

Acessa uma loja VTEX (o *Seller*) e busca dados de um SKU.

- Endpoint: `http://{AccountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{idsku}`
- Verbo: **GET**
- Content-Type: **application/json**
- Accept: **application/json**

| Parâmetro     | Descrição     |
| ---------- | ---------- |
| AccountName       | Account Name do Seller VTEX       |
| idsku       | ID do SKU cadastrado no Seller VTEX. Esse dado é informado no body da notificação do passo anterior       |

#### Exemplo de body de resposta:

```json
{
    "Id": 2,
    "ProductId": 2,
    "NameComplete": "Garzón Albariño Reserva 2018",
    "ProductName": "Garzón Albariño Reserva 2018",
    "ProductDescription": "",
    "ProductRefId": "",
    "TaxCode": "",
    "SkuName": "Garzón Albariño Reserva 2018",
    "IsActive": true,
    "IsTransported": true,
    "IsInventoried": true,
    "IsGiftCardRecharge": false,
    "ImageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155434-55-55/Garzon-Albariño-Reserva-2018.png?v=637037218769130000",
    "DetailUrl": "/garzon-albarino-reserva-2018/p",
    "CSCIdentification": null,
    "BrandId": "2000004",
    "BrandName": "Garzón",
    "Dimension": {
        "cubicweight": 1.0000,
        "height": 8.0000,
        "length": 32.0000,
        "weight": 1200.0000,
        "width": 8.0000
    },
    "RealDimension": {
        "realCubicWeight": 0.000,
        "realHeight": 0.0,
        "realLength": 0.0,
        "realWeight": 0.0,
        "realWidth": 0.0
    },
    "ManufacturerCode": "",
    "IsKit": false,
    "KitItems": [],
    "Services": [],
    "Categories": [],
    "Attachments": [],
    "Collections": [],
    "SkuSellers": [
        {
            "SellerId": "1",
            "StockKeepingUnitId": 2,
            "SellerStockKeepingUnitId": "2",
            "IsActive": true,
            "FreightCommissionPercentage": 0.0,
            "ProductCommissionPercentage": 0.0
        },
      {
            "SellerId": "pedro",
            "StockKeepingUnitId": 2,
            "SellerStockKeepingUnitId": "666",
            "IsActive": true,
            "FreightCommissionPercentage": 0.0,
            "ProductCommissionPercentage": 0.0
        }
    ],
    "SalesChannels": [
        1,
        3
    ],
    "Images": [
        {
            "ImageUrl": "http://lojadobreno.vteximg.com.br/arquivos/ids/155434/Garzon-Albariño-Reserva-2018.png?v=637037218769130000",
            "ImageName": "TestImage",
            "FileId": 155434
        }
    ],
    "Videos": [],
    "SkuSpecifications": [],
    "ProductSpecifications": [
        {
            "FieldId": 26,
            "FieldName": "Uva",
            "FieldValueIds": [
                101
            ],
            "FieldValues": [
                "Albariño"
            ]
        },
        {
            "FieldId": 27,
            "FieldName": "País",
            "FieldValueIds": [
                108
            ],
            "FieldValues": [
                "Uruguai"
            ]
        },
        {
            "FieldId": 28,
            "FieldName": "Região",
            "FieldValueIds": [],
            "FieldValues": [
                "Maldonado"
            ]
        }
    ],
    "ProductClustersIds": "120, 129",
    "ProductCategoryIds": "/2/",
    "ProductGlobalCategoryId": 421,
    "ProductCategories": {
        "2": "Vinhos Brancos"
    },
    "CommercialConditionId": 1,
    "RewardValue": 0.0,
    "AlternateIds": {
        "RefId": "0002"
    },
    "AlternateIdValues": [
        "0002"
    ],
    "EstimatedDateArrival": null,
    "MeasurementUnit": "un",
    "UnitMultiplier": 1.0000,
    "InformationSource": "Indexer",
    "ModalType": null
}
```

| Campo     | Type     | Descrição     |
| ---------- | ---------- | ---------- |
| Id       | integer       | ID do SKU cadastrado na VTEX       |
| ProductId       | integer       | ID do produto relacionado a esse SKU conforme cadastrado na VTEX       |
| NameComplete | string   |  Nome do produto e nome do SKU concatenados  |
| ProductName       | string   | Nome do produto cadastrado na VTEX       |
| ProductDescription       | string  | Descrição do produto cadastrado na VTEX. É permitido usar HTML. |
| ProductRefId  | string |  Código de referência informado no cadastro do SKU  |
| TaxCode  | string  |  Taxa de imposto associada ao SKU  |
| SkuName    | string    |   Nome do SKU cadastrado na VTEX   |
| IsActive   | boolean    |   Indica se o SKU está ativo     |
| IsTransported       | boolean    | *Campo obsoleto*    |
| IsInventoried       | boolean    | *Campo obsoleto*    |
| IsGiftCardRecharge | boolean |  Indica se a compra vai gerar um vale-compra  |
| ImageUrl   | string       |  URL da imagem do SKU     |
| DetailUrl       | string       | URL do produto relacionado a esse SKU   |
| BrandId       | string       |  ID da marca do produto relacionado a esse SKU |
| BrandName       | string  | Nome da marca do produto relacionado a esse SKU  |
| Dimension   | objeto   | Contém as dimensões do SKU, incluindo embalagem |
| cubicweight       | integer       | Peso cúbico do SKU, incluindo embalagem  |
| height       | integer       |  Altura do SKU, incluindo embalagem    |
| length       | integer       |  Comprimento do SKU, incluindo embalagem   |
| weight       | integer       |  Peso do SKU, incluindo embalagem      |
| width       | integer       |  Largura do SKU, incluindo embalagem    |
| RealDimension       | objeto       |  Contém as dimensões reais do SKU   |
| realCubicWeight       | integer       | Peso cúbico real do SKU     |
| realHeight       | integer       | Altura real do SKU  |
| realLength       | integer       | Comprimento real do SKU |
| realWeight       | integer       | Peso real do SKU  |
| realWidth       | integer       | Largura real do SKU  |
| ManufacturerCode   | string   |  ID do fornecedor do produto |
| IsKit   | boolean   |  Indica se o SKU é um kit   |
| KitItems       |  array      |  Contém os componentes do kit, se for kit    |
| Services       |  array   | Contém os IDs dos serviços relacionados ao SKU |
| Categories       |  array  |  Contém os IDs das categorias relacionadas ao SKU |
| Attachments   | array  |  Contém os IDs dos anexos relacionados ao SKU | 
| Collections | array |  Contém os IDs das coleções relacionadas ao SKU  |
| SkuSellers | array de objetos |  Contém dados sobre    |
| SellerId       | string       |  ID do Seller VTEX que vende esse SKU      |
| StockKeepingUnitId       | integer       |   ID do SKU no Seller do qual os dados estão sendo puxados (é o mesmo valor de `id`)     |
| SellerStockKeepingUnitId       | string       |   ID do SKU num Seller terceiro, ou seja, que atua como Seller do Seller de onde os dados estão sendo puxados     |
| IsActive       | boolean       |  Indica se o SKU está ativo nesse Seller      |
| FreightCommissionPercentage   | integer       |  Valor cadastrado de comissão sobre o valor do frete para esse Seller      |
| ProductCommissionPercentage   | integer       | Valor cadastrado de comissão sobre o valor do produto para esse Seller       |
| SalesChannels | array  |  Lista dos IDs das Políticas Comerciais que se aplicam a esse SKU  |
| Images  | array de objetos | Contém informações das imagens atreladas ao SKU  |
| ImageUrl       | string       | URL da imagem       |
| ImageName       | string       | Nome da imagem conforme cadastra na VTEX      |
| FileId       | integer       | ID da imagem       |
| Videos  | array |  Contém informações dos vídeos atrelados ao SKU |
| SkuSpecifications       | array de objetos       |  Contém as especificações do SKU      |
| ProductSpecifications  | array de objetos   |  Contém as especificações do Produto |
| FieldId       | integer       | ID da especificação de SKU  |
| FieldName       | string       |  Nome da especificação de SKU  |
| FieldValueIds | array de integers | Contém os IDs dos valores da especificação |
| FieldValues | array de strings  |  Contém os valores da especificação  |
| ProductClustersIds   | string   | IDs das coleções que contêm o SKU   |
| ProductCategoryIds   | string   | IDs do departamento, categoria e subcategoria aos quais o produto pertence, organizados hierarquicamente como no seguinte exemplo: "/2/15/43/"  |
| ProductGlobalCategoryId | integer   | ID da categoria global à qual pertence o produto |
| ProductCategories | objeto | Contém o departamento, a categoria e a subcategoria aos quais o produto pertence, organizados por campo (ID da categoria) e valor (Nome da categoria)  |
| CommercialConditionId | integer | ID da condição comercial do SKU  |
| RewardValue    | integer | Valor da pontuação atrelado a esse SKU, caso haja programa de pontos       |
| AlternateIds    | objeto | Contém IDs alternativos para o SKU, como o EAN e o RefID  |
| AlternateIdValues   | array |  Contém valores alternativos de IDs do SKU  |
| EstimatedDateArrival    | integer  |  Data estimada para entrada em catálogo, no caso de produtos fora de catálogo com essa informação cadastrada  |
| MeasurementUnit   | string   |  Unidade de medida do SKU    |
| UnitMultiplier   | integer |   Unidade de multiplicação do SKU   |
| InformationSource   | string   |  Dado de uso interno da VTEX    |
| ModalType  | integer   |  Tipo de modal atrelado ao SKU   |

## 3) Buscar preço, estoque e dados de frete - Marketplace chama endpoint do Seller

O Marketplace deve então usar a __API de Fulfillment Simulation__ para obter os dados atualizados do SKU: __preço__, __estoque__ e dados de __frete__.

Essa chamada simula um carrinho no Checkout da VTEX, retornando a versão mais atualizada desses dados.

<div class="alert alert-warning">
A chamada de Fulfillment Simulation deve ser usada pelo Marketplace sempre que for necessário obter preço, estoque e dados de frete atualizados. Para oferecer uma integração em tempo real e, como consequência, uma experiência de compra fluida, o Marketplace deve obter esses dados em todas as etapas da jornada do cliente na loja:<br>- Vitrine<br>- Página de produto<br>- Carrinho<br>- Checkout<br>- Order Placed<br><br>Com isso, você garante que o cliente não será surpreendido por possíveis mudanças em um SKU ocorridas no Seller e não informadas no Marketplace. 
</div>

### Exemplo de chamada API REST:

Acessa uma loja VTEX (*Seller*) e busca preço, estoque e dados de frete de um SKU.

- Endpoint: `https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={idcanal}&affiliateId={idafiliado}`
- Verbo: **POST**
- Content-Type: **application/json**

| Parâmetro     | Descrição     |
| ---------- | ---------- |
| AccountName       | Account Name do Seller VTEX       |
| idcanal       | Política Comercial a ser considerada na simulação do carrinho |
| idafiliado       | Id do afiliado a ser considerado no contexto da simulação |

#### Exemplo de body do request:

```json
{
    "postalCode": "10019",
    "country": "USA",
    "items": [
        {
            "id": "23",
            "quantity": 1,
            "seller": "1"
        },
        {
            "id": "25",
            "quantity": 2,
            "seller": "1"
        }
    ]
}
```

| Campo     | Type     | Descrição     |   Obrigatório?  |
| ---------- | ---------- | ---------- | ---------- |
| postalCode       | string       |   CEP para cálculo de frete   |   Não   |
| country       | string       |   País para cálculo de frete  |   Não    |
| items | array de objetos| Array de itens desejados para a simulação  |  Sim  |
| id | string |   ID do SKU desejado    | Sim  |
| quantity       | integer       |   Quantidade do SKU desejado  |  Sim  |
| seller       | string       |   ID do seller que vende o SKU desejado. No contexto de simulação de fulfillment, o seller deve ser sempre "1" - "seller 1" significa que é o próprio fulfillment em questão.  |   Sim   |

<div class="alert alert-warning">
A simulação para obter preço/disponibilidade deve ser feita somente com <strong>1 unidade</strong> do item específico. Já simulações de carrinho devem naturalmente incluir todos os itens desejados, a fim de garantir o contexto desses itens quando em conjunto no carrinho, o que é especialmente importante para o cálculo do frete.
</div>

#### Exemplo de body de resposta

```json
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
            "deliveryChannels": [
                {
                    "id": "delivery",
                    "stockBalance": 10
                }
            ]
        }
    ],
    "pickupPoints": [],
    "messages": []
}
```

| Campo     | Type     | Descrição     |
| ---------- | ---------- | ---------- |
| items | array de objetos |      |
| id | string |      |
| requestIndex   | integer    |      |
| quantity       | integer       |      |
| seller       | string       |      |
| merchantName       | integer    |      |
| priceValidUntil       | string       |      |
| price       | integer       |      |
| listPrice       | integer       |      |
| offerings       | array       |      |
| priceTags       | array       |      |
| measurementUnit       | string      |      |
| unitMultiplier       | integer      |      |
| attachmentOfferings       | array      |      |
| postalCode       | string      |      |
| geoCoordinates       | array      |      |
| country       | string      |      |
| logisticsInfo       | array de objetos     |      |
| itemIndex       | integer      |      |
| addressId       | integer      |      |
| selectedSla       | integer      |      |
| selectedDeliveryChannel       |  integer    |      |
| stockBalance       | integer      |      |
| quantity       | integer      |      |
| shipsTo       | array      |      |
| slas       | array      |      |
| deliveryChannels       | array de objetos     |      |
| id       | string      |      |
| stockBalance       | integer      |      |
| pickupPoints       | array      |      |
| messages       | array      |      |
