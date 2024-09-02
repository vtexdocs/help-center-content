---
title: 'Integração entre Marketplace não VTEX e Seller VTEX - Ações Referentes ao Envio e Processamento de Pedidos'
id: 5AiW7dZ4nGMDI9TAg43zmf
status: DRAFT
createdAt: 2019-09-16T12:52:46.627Z
updatedAt: 2022-02-03T19:17:44.983Z
publishedAt: 
firstPublishedAt: 2019-10-16T14:43:50.013Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: integracao-entre-marketplace-nao-vtex-e-seller-vtex-acoes-referentes-ao
locale: pt
legacySlug: integracao-entre-marketplace-nao-vtex-e-seller-vtex-acoes-referentes-ao
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

<div class="alert alert-warning">
Confira a versão atualizada desse <a href="https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide">guia de integração com marketplace</a> em nosso Developer Portal. 
</div> 

O passo final para integrar um Marketplace não VTEX a um Seller VTEX é permitir a comunicação com o Seller sobre __pedidos__ feitos no Marketplace.

Seis ações de integração via API REST fazem parte dessa etapa:

1. Buscar preço, estoque e dados de frete do SKU (Simulação de Carrinho).
2. Implementar rotina que insere pedido no Seller.
3. Implementar rotina que autoriza despacho de pedido no Seller.
4. Informar Nota Fiscal.
5. Informar código de rastreamento da transportadora (caso haja).
6. Receber solicitação de cancelamento (caso aconteça).

Se deseja ver o fluxo geral da integração, veja o artigo [Guia de integração para Marketplace não hospedado na plataforma VTEX.](https://help.vtex.com/pt/tutorial/guia-de-integracao-para-marketplaces-marketplace-nao-vtex--SMBUYFVEfZr0m0ttOULxj "Integração para Marketplace não VTEX").

## 1) Buscar preço, estoque e dados de frete - Marketplace chama endpoint do Seller

<div class="">
  Este é o mesmo request usado na última fase de <a href="">integração com o catálogo do Seller</a>.
</div>

Quando um produto é inserido no carrinho do **Marketplace** ou é feita alguma edição no carrinho, o **Marketplace** deve realizar uma consulta de simulação de carrinho no *Seller* para checar se os dados de preço, estoque e frete atualmente aplicados continuam válidos. 

Em seguida, quando o cliente vai para o pagamento, outra simulação de carrinho deve ser realizada, novamente para checar se os dados do SKU continuam válidos.

### Exemplo de chamada API REST:

Buscar preço, estoque e dados de frete do SKU no Seller e simular um carrinho com esses dados.

Endpoint: `https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={idcanal}&affiliateId={idafiliado}`

- Verbo: **POST**  
- Content-Type:  **application/json**  
- Accept:  **application/json**

| Parâmetro     | Descrição     |
| ---------- | ---------- |
| AccountName       | Account Name do Seller VTEX       |
| idcanal       | Política Comercial a ser considerada na simulação do carrinho |
| idafiliado       | Id do afiliado a ser considerado no contexto da simulação |

Exemplos de body do request e da resposta, assim como a descrição de cada campo, podem sem encontrados na terceira etapa do [artigo sobre integração com o catálogo do Seller]().

## 2) Inserir pedido no Seller - Marketplace chama endpoint no Seller

Quando um pedido é fechado no **Marketplace**, este chama um endpoint do Seller por meio da __API de Place Order__ para inserir o pedido no Seller.

### Exemplo de chamada API REST:

Endpoint: `https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc={idCanal}&affiliateId={idAfiliado}`

- Verbo: **POST**  
- Content-Type: **application/json**  
- Accept: **application/json**

| Parâmetro     | Descrição     |
| ---------- | ---------- |
| AccountName       | Account Name do Seller VTEX   |
| idCanal       | ID da Política Comercial cadastrada na VTEX    |
| idAfiliado       | ID do afiliado cadastrado no Seller VTEX   |

#### Exemplo de body do request:

```json
[
  {
    "marketplaceOrderId": "956",
    "marketplaceServicesEndpoint": "https://urlmarketplace/", 
    "marketplacePaymentValue": 16080,
    "items": [
      {
        "id": "2",
        "quantity": 1,
        "seller": "1",
        "commission": 0,
        "freightCommission": 0,
        "price": 9990,
        "bundleItems": [], 
        "itemAttachment": {
          "name": null,
          "content": {}
        },
        "attachments": [],
        "priceTags": [],
        "measurementUnit": null,
        "unitMultiplier": 0,
        "isGift": false
      }
    ],
    "clientProfileData": {
      "id": "clientProfileData",
      "email": "32172239852@gmail.com.br",
      "firstName": "Júlio",
      "lastName": "Augusto de Oliveira",
      "documentType": null,
      "document": "11412787742",
      "phone": "399271258",
      "corporateName": null,
      "tradeName": null,
      "corporateDocument": null,
      "stateInscription": null,
      "corporatePhone": null,
      "isCorporate": false,
      "userProfileId": null
    },
    "shippingData": {
      "id": "shippingData",
      "address": {
        "addressType": "Residencial",
        "receiverName": "Júlio Augusto de Oliveira",
        "addressId": "Casa",
        "postalCode": "13476103",
        "city": "Americana",
        "state": "SP",
        "country": "BRA",
        "street": "JOÃO DAMÁZIO GOMES",
        "number": "311",
        "neighborhood": "SÃO JOSÉ",
        "complement": null,
        "reference": "Bairro Praia Azul / Posto de Saúde 17",
        "geoCoordinates": []
      },
      "logisticsInfo": [
        {
          "itemIndex": 0,
          "selectedSla": "Correios",
          "lockTTL": "8d",
          "shippingEstimate": "7d",
          "price": 1090,
          "deliveryWindow": null
        }
      ]
    },
    "paymentData":null,
    "openTextField": null
  }
]
```

| Campo     | Type     | Descrição     |  Obrigatório?  | 
| ---------- | ---------- | ---------- | ---------- |
| marketplaceOrderId   | string    |        |      |
| marketplaceServicesEndpoint   | string    |        |     |
| marketplacePaymentValue   | integer    |        |      |
| items   | array de objetos   | Contém os dados de venda dos SKUs do pedido |   |
| id   | string    | ID do SKU conforme cadastrado na VTEX       |    |
| quantity   | integer    |  Quantidade do item no carrinho      |    |
| seller   | string    |        |    |
| commission   | integer    |        |     |
| freightCommission   | integer    |        |     |
| price   | integer    |        |     |
| bundleItems   | array    |        |     |
| itemAttachment   | objeto    |        |     |
| name   | string    |        |     |
| content   | objeto    |        |     |
| attachments   | array    |        |     |
| priceTags   | array    |        |    |
| measurementUnit   | integer    |        |     |
| unitMultiplier   | integer    |        |     |
| isGift   | boolean    |        |      |
| clientProfileData   | objeto    |        |      |
| id   | string    |        |      |
| email   | string    |        |      |
| firstName   | string    |        |      |
| lastName   | string    |        |      |
| documentType   | string    |        |      |
| document   | string    |        |     |
| phone   | string    |        |      |
| corporateName   | string    |        |     |
| tradeName   | string    |        |    |
| corporateDocument   | string    |        |     |
| stateInscription   | string    |        |    |
| corporatePhone   | string    |        |     |
| isCorporate   | boolean    |        |    |
| userProfileId   | string    |        |    |
| shippingData   | objeto    |        |    |
| id   | string    |        |    |
| address   | objeto    |        |    |
| addressType   | string    |        |    |
| receiverName   | string    |        |    |
| addressId   | string    |        |    |
| postalCode   | string    |        |    |
| city   | string    |        |    |
| state   | string    |        |    |
| country   | string    |        |    |
| street   | string    |        |    |
| number   | string    |        |    |
| neighborhood   | string    |        |    |
| complement   | string    |        |    |
| reference   | string    |        |     |
| geoCoordinates   | array    |        |     |
| logisticsInfo   | array de objetos    |        |     |
| itemIndex   | integer    |        |    |
| selectedSla   | string    |        |    |
| lockTTL   | string    |        |    |
| shippingEstimate   | string    |        |    |
| price   | integer    |        |    |
| deliveryWindow   | string    |        |    |
| paymentData   | string    |        |    |
| openTextField   | string    |        |     |

#### Exemplo de body da resposta:

```json
[
    {
        "marketplaceOrderId": "956",
        "orderId": "MBR-956",
        "followUpEmail": "9762a2a9028a4b5d8eb9a8ff909d15ce@ct.vtex.com.br",
        "items": [
            {
                "id": "2",
                "quantity": 1,
                "seller": "1",
                "priceTable": null,
                "commission": 0,
                "freightCommission": 0,
                "price": 13890,
                "bundleItems": [],
                "priceTags": [],
                "measurementUnit": "un",
                "unitMultiplier": 1.0000,
                "isGift": false
            }
        ],
        "clientProfileData": {
            "email": "fba45537f5c84d4092cf064da742fe3d@ct.vtex.com.br",
            "firstName": "Júlio",
            "lastName": "Augusto de Oliveira",
            "documentType": "cpf",
            "document": "11412787742",
            "phone": "399271258",
            "corporateName": null,
            "tradeName": null,
            "corporateDocument": null,
            "stateInscription": null,
            "corporatePhone": null,
            "isCorporate": false,
            "userProfileId": null
        },
        "shippingData": {
            "isFOB": false,
            "address": {
                "addressType": "Residencial",
                "receiverName": "Júlio Augusto de Oliveira",
                "addressId": "Casa",
                "postalCode": "13476103",
                "city": "Americana",
                "state": "SP",
                "country": "BRA",
                "street": "JOÃO DAMÁZIO GOMES",
                "number": "311",
                "neighborhood": "SÃO JOSÉ",
                "complement": null,
                "reference": "Bairro Praia Azul / Posto de Saúde 17",
                "geoCoordinates": []
            },
            "selectedAddresses": [
                {
                    "addressType": "Residencial",
                    "receiverName": "Júlio Augusto de Oliveira",
                    "addressId": "Casa",
                    "postalCode": "13476103",
                    "city": "Americana",
                    "state": "SP",
                    "country": "BRA",
                    "street": "JOÃO DAMÁZIO GOMES",
                    "number": "311",
                    "neighborhood": "SÃO JOSÉ",
                    "complement": null,
                    "reference": "Bairro Praia Azul / Posto de Saúde 17",
                    "geoCoordinates": []
                }
            ],
            "logisticsInfo": [
                {
                    "itemIndex": 0,
                    "selectedSla": "Correios",
                    "addressId": "Casa",
                    "selectedDeliveryChannel": "delivery",
                    "deliveryIds": [
                        {
                            "warehouseId": "1_1",
                            "dockId": "1"
                        }
                    ],
                    "lockTTL": "8d",
                    "shippingEstimate": "7d",
                    "price": 1090,
                    "deliveryWindow": null
                }
            ],
            "trackingHints": []
        },
        "paymentData": null,
        "customData": null
    }
]
``` 

| Campo     | Type     | Descrição     |
| ---------- | ---------- | ---------- |
| marketplaceOrderId       | string       | ID do pedido inserido pelo Marketplace. Deve ser definido pelo próprio Marketplace.     |
| orderId       | string       |     |
| followUpEmail       | string       |     |
| items       | array de objetos       |     |
| id       | string       |     |
| quantity       | integer       |     |
| seller       | string       |     |
| priceTable       | string       |     |
| commission       | integer       |     |
| freightCommission       | integer       |     |
| price       | integer       |     |
| bundleItems       | array       |     |
| priceTags       | array       |     |
| measurementUnit       | string       |     |
| unitMultiplier       | integer       |     |
| isGift       | boolean       |     |
| clientProfileData       | objeto       |     |
| email       | string       |     |
| firstName       | string       |     |
| lastName       | string       |     |
| documentType       | string       |     |
| document       | string       |     |
| phone       | string       |     |
| corporateName       | string       |     |
| tradeName       | string       |     |
| corporateDocument       | string       |     |
| stateInscription       | string       |     |
| corporatePhone       | string       |     |
| isCorporate       | boolean       |     |
| userProfileId       | string       |     |
| shippingData       | objeto       |     |
| isFOB       | boolean       |     |
| address       | objeto       |     |
| addressType       | string       |     |
| receiverName       | string       |     |
| addressId       | string       |     |
| postalCode       | string       |     |
| city       | string       |     |
| state       | string       |     |
| country       | string       |     |
| street       | string       |     |
| number       | string       |     |
| neighborhood       | string       |     |
| complement       | string       |     |
| reference       | string       |     |
| geoCoordinates       | array       |     |
| selectedAddresses       | array de objetos    |     |
| addressType       | string       |     |
| receiverName       | string       |     |
| addressId       | string       |     |
| postalCode       | string       |     |
| city       | string       |     |
| state       | string       |     |
| country       | string       |     |
| street       | string       |     |
| number       | string       |     |
| neighborhood       | string       |     |
| complement       | string       |     |
| reference       | string       |     |
| geoCoordinates       | array       |     |
| logisticsInfo       | array de objetos    |     |
| itemIndex       | integer    |     |
| selectedSla       | string       |     |
| addressId       | string       |     |
| selectedDeliveryChannel       | string       |     |
| deliveryIds       | array de objetos       |     |
| warehouseId       | string       |     |
| dockId       | string       |     |
| lockTTL       | string       |     |
| shippingEstimate       | string       |     |
| price       | integer       |     |
| deliveryWindow       | string       |     |
| trackingHints       | array       |     |
| paymentData       | string       |     |
| customData       | string       |     |

## 3) Autorizar despacho de pedido no Seller - Marketplace chama endpoint no Seller

Depois que o pagamento do pedido é concluído no **Marketplace**, este precisa fazer uma chamada para o *Seller* com o objetivo de autorizar o despacho do pedido.

### Exemplo de chamada API REST:

Endpoint: `https://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders/{orderId}/fulfill?sc={idCanal}&affiliateId={idAfiliado}`

- Verbo:  **POST**  
- Content-Type:  **application/json**  
- Accept:  **application/json**

| Parâmetro     | Descrição     |
| ---------- | ---------- |
| AccountName       | Account Name do Seller VTEX   |
| orderId       | ID do pedido, composto pelo ID do afiliado (ou seja do Marketplace) + o `marketplaceOrderId`, informado na chamada de inserção do pedido (ver passo anterior). Se, por exemplo, o ID do afiliado é `MBR` e o `marketplaceOrderId` é `956`, o `orderId` é `MBR-956`  |
| idCanal       | ID da Política Comercial cadastrada na VTEX    |
| idAfiliado       | ID do afiliado cadastrado no Seller VTEX   |

#### Exemplo de body do request:

```json
{
    "marketplaceOrderId": "956"
}
```

| Campo     | Type     | Descrição     |  Obrigatório? |
| ---------- | ---------- | ---------- |---------- |
| marketplaceOrderId       | string       |  ID do pedido inserido pelo Marketplace. Deve ser igual ao informado no body da chamada de inserção de pedido no Seller.    |  Sim   |

#### Exemplo de body da resposta:

```json
{
    "orderId": "MBR-958",
    "marketplaceOrderId": "958",
    "receipt": "5c54532d-da9d-4140-a1e7-323009f977cc",
    "date": "2019-10-01T18:50:13.7394634Z",
    "items": [
        {
            "id": "4"
        },
        {
            "id": "13"
        }
    ],
    "shippingData": {
        "logisticsInfo": [
            {
                "itemIndex": 0,
                "selectedSla": "Normal",
                "selectedDeliveryChannel": "delivery",
                "shippingEstimateDate": "2019-10-08T18:50:13.217302Z"
            },
            {
                "itemIndex": 1,
                "selectedSla": "Express",
                "selectedDeliveryChannel": "pickup-in-point",
                "shippingEstimateDate": "2019-10-09T15:23:10.242501D"
            }
        ]
    }
}
```

| Campo     | Type     | Descrição     |
| ---------- | ---------- | ---------- |
| orderId       | string       |  ID do pedido, formado pela união do ID do afiliado com o `marketplaceOrderId`.   |
| marketplaceOrderId       | string       | ID do pedido criado pelo Marketplace no passo de inserção do pedido no seller   |
| receipt | string  | ID genérico que serve opcionalmente como referência para controle |
| date | string  | Momento em que o despacho foi autorizado |
| items       | array de objetos       | Contém os IDs dos SKUs do pedido    |
| id  | string | ID do SKU  |
| shippingData       | objeto       |  Contém dados de envio do pedido   |
| logisticsInfo | array de objetos | Contém dados logísticos do envio do pedido |
| itemIndex | integer   |  Refere-se a cada item dentro de `items`. Dentro de `logisticsInfo`, o objeto de `itemIndex` = `0` refere-se ao primeiro item da array `items`; o objeto de `itemIndex` = `1` refere-se ao segundo item da array `items`; e assim por diante.  |
| selectedSla | string | Tipo de entrega conforme cadastrado no módulo de Estoque & Entrega    |
| selectedDeliveryChannel       | string       |  Indica se é um envio normal (`delivery`) ou uma retirada em loja (`pickup-in-point`)   |
| shippingEstimateDate       | string       |  Data e hora estimados para o envio   |

## Marketplace Services Endpoint

<div class="alert alert-info">
  O <strong>Marketplace Services Endpoint</strong> é um endpoint que deve ser criado pelo Marketplace, com o objetivo de receber três informações diferentes enviadas pelo Seller:<br>- Nota Fiscal<br>- Código de rastreamento da transportadora (se houver)<br>- Solicitação de cancelamento (se acontecer)
</div>

Para os três próximos passos da integração, o Marketplace precisa:
1. Implementar esse endpoint do seu lado, preparando-o para receber um payload como o do exemplo abaixo.
2. Informar esse endpoint anteriormente no request de inserção do pedido, por meio do campo `marketplaceServicesEndpoint` (veja o passo 2 deste artigo).

### Exemplo de chamada API REST:

Endpoints: 
- Para informar dados da Nota Fiscal ou código de rastreamento: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice`
- Para solicitar cancelamento do pedido: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/cancel`

O `{marketplaceServicesEndpoint}` deve ser implementado pelo Marketplace. O trecho seguinte (`/pvt/orders/{marketplaceOrderId}/invoice` ou `/pvt/orders/{marketplaceOrderId}/cancel`) é inserido pela VTEX, formando as rotas que devem ser esperadas pelo Marketplace em cada caso.

- Verbo: **POST**  
- Content-Type: **application/json**  
- Accept: **application/json**  

| Parâmetro     | Descrição     |
| ---------- | ---------- |
| marketplaceOrderId       | ID do pedido no Marketplace. Deve ser igual ao informado no body da chamada de inserção de pedido no Seller.   |

#### Exemplo de body do request:

```json
{
    "type": "Output",
    "invoiceNumber": "NFe-00001",
    "courier": "",
    "trackingNumber": "753573",
    "trackingUrl": "http://www.carriertrackingurl.com",
    "items": [ 
      {
        "id": "345117",
        "quantity": 1,
        "price": 9003
      }
    ],
    "issuanceDate": "2013-11-21T00:00:00", 
    "invoiceValue": 9508
}
```

| Campo     | Type     | Descrição     |
| ---------- | ---------- | ---------- |
| type       | string       |  Se for `Output`, significa que trata-se de uma venda; se for `Input`, trata-se de uma devolução    |
| invoiceNumber       | string       |   Número da Nota Fiscal   |
| courier       | string       |   Nome da transportadora responsável pelo envio |
| trackingNumber       | string       |   Código de rastreamento do envio (quando a chamada é para informar a Nota Fiscal, este campo vem vazio)   |
| trackingUrl       | string       |  URL para rastreamento do envio (quando a chamada é para informar a Nota Fiscal, este campo vem vazio)    |
| items       | array de objetos    |    Itens do pedido que constam na Nota Fiscal  |
| id       | string    |  ID do item    |
| quantity       | integer    |   Quantidade do item   |
| price       | integer    |    Preço do item  |
| issuanceDate    | string    | Data de emissão da Nota Fiscal  |
| invoiceValue    | integer    |  Valor da Nota Fiscal  |

## 4) Receber informação de Nota Fiscal - Seller chama endpoint do Marketplace (Marketplace Services Endpoint)

Ao emitir a Nota Fiscal referente a um pedido, o Seller precisa enviar os dados dessa Nota Fiscal para o Marketplace. Ele faz isso por meio do request enviado ao __Marketplace Services Endpoint__, explicado acima.

Para receber informação de Nota Fiscal, o endpoint final esperado deve ser: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice`

## 5) Receber código de rastreamento da transportadora - Seller chama endpoint do Marketplace (Marketplace Services Endpoint)

Depois que o despacho é autorizado, o seller emite a Nota Fiscal e entrega os produtos à transportadora. Com isso, a transportadora pode gerar um código de rastreamento do envio e informá-lo ao Seller.

O Seller precisa, então, repassar essa informação ao Marketplace, para que este, por sua vez, informe o código de rastreamento ao cliente que fez a compra.

O Seller envia o código e a URL de rastreamento para o __Marketplace Services Endpoint__ por meio dos seguintes campos do request explicado acima:

```json
"courier": "",
"trackingNumber": "753573",
"trackingUrl": "http://www.carriertrackingurl.com"
```

| Campo     | Type     | Descrição     |
| ---------- | ---------- | ---------- |
| courier       | string       |  Nome da transportadora    |
| trackingNumber       | string   | Código de rastreamento da transportadora  |
| trackingUrl       | string       | URL de rastreamento da transportadora, onde o cliente final acompanha o andamento do envio  |

Para receber o código de rastreamento, o endpoint final esperado deve ser: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice`

<div class="alert alert-info">
Embora a rota para recebimento do código de rastreamento seja a mesma onde o Marketplace recebe a Nota Fiscal (<code>.../invoice</code>), esses dois processos acontecem em duas etapas. Ou seja, numa primeira chamada o Seller envia os dados da Nota Fiscal; e numa segunda chamada envia os dados de rastreamento.
</div>

## 6) Receber solicitação de cancelamento - Seller chama endpoint do Marketplace (Marketplace Services Endpoint)

Às vezes o seller precisa solicitar o cancelamento de um pedido. Ele faz isso também por meio de um request enviado ao __Marketplace Services Endpoint__.

Para receber uma solicitação de cancelamento de pedido, o endpoint final esperado deve ser: `https://{marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/cancel`

__Importante__: para o cancelamento funcionar, o Marketplace deve enviar uma resposta à chamada do seller, conforme o formato do exemplo abaixo.

### Exemplo de resposta:

```json
{
  "orderId": "564041714680-01",
  "receipt": "5342fde6-86d1-4220-a83b-9a992145b547",
  "date": "2015-10-08T20:36:51.2390821+00:00"
}
```

| Campo     | Type     | Descrição     |   Obrigatório?   |
| ---------- | ---------- | ---------- | ---------- |
| orderId       | string       |  ID do pedido, formado pelo ID do afiliado + o `marketplaceOrderId`, que é o ID do pedido no Marketplace, informado por este no body da chamada de inserção de pedido no Seller.    |  Sim  | 
| receipt       | string       |    ID genérico que pode servir como referência para controle   |     |
| date       | string       |   Data e hora em que aconteceu o cancelamento    |      |
