---
title: Configurar pontos de retirada 
id: zHHAZQGqXCHko78EmuuN1
status: DRAFT
createdAt: 2020-07-01T13:13:41.945Z
updatedAt: 2020-07-02T11:25:00.345Z
publishedAt: 
firstPublishedAt: 
contentType: trackArticle
productTeam: Shopping
slug: configurar-pontos-de-retirada
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugPT: estrategias-de-comercio-unificado
---

Pontos de retirada permitem ao cliente final retirar produtos em um local físico, seja ele uma loja da sua marca, um mini centro de distribuição ou qualquer outro local que fizer sentido para a sua operação. No contexto do Comércio Unificado, essa é uma feature essencial. É ela que permite que os produtos sejam retirados pelo cliente na loja física. Os dois cenários mais comuns, neste caso, são:
- O cliente compra online mas deseja retirar na loja.
- O cliente compra em uma loja física, mas o produto não consta no estoque dessa loja, então ele decide fechar a compra mas retirar os produtos em outra loja da sua marca, onde os produtos constem em estoque.
- O cliente está na loja, o produto consta em estoque e ele deseja levar naquele momento.

Em qualquer um desses cenários, para que o cliente consiga retirar o produto, você precisa ter cadastrado um ponto de retirada.

<div class="alert alert-info">
Pontos de retirada não dependem das features de <a href="https://help.vtex.com/tutorial/definicoes-de-conta-franquia-e-seller-white-label">Conta-franquia e Seller White Label</a>. É possível ter pontos de retirada sem contas franquias. Neste guia, entretanto, vamos explicar o uso conjunto dessas features. O motivo é que, para a maior parte dos projetos de omnichannel, essa é a arquitetura recomendada.
</div>

## Criar contas-franquias

Para solicitar a criação de contas-franquias, você deve entrar em contato com o time de Sales Controller da VTEX pelo e-mail sales-controller@vtex.com.br.

Suas contas-franquias funcionarão como Sellers White Label. Isto significa que - quando um pedido por realizado em qualquer canal, seja uma loja física ou online - o sistema buscará a entre todas elas aquela que consegue fazer a entrega com melhor SLA.

A logística e o estoque de cada uma das contas-franquias podem ser gerenciados em um ambiente VTEX separado. Para acessar esse ambiente, entre na URL `{{AccountName}}.myvtex.com/admin`, onde `{{AccountName}}` deve ser substituído pelo nome da conta-franquia.

## Criar pontos de retirada

Para que seu cliente possa comprar (seja na própria loja ou por outro canal) e retirar os produtos na própria loja, você deve configurar as lojas físicas como pontos de retirada. Para isso, siga os passos abaixo.

1. Entre no Admin da conta-franquia desejada e, no menu lateral, clique em Estoque & Entrega.
2. Clique em Pontos de retirada.
3. Clique no botão Adicionar.
4. Prencha as informações sobre a loja (nome, endereço e horário de funcionamento).

## Configurar transportadora da conta-franquia






Para configurar uma Conta Franquia como ponto de retirada, é necessário:

- Cadastrar um **ponto de retirada**.
- Configurar **Transportadora** da Conta Franquia.
- **Associar** o ponto de retirada à Transportadora criada.
- Configurar uma **Doca** da Conta Franquia. 
- Configurar um **Estoque** Conta franquia.
- Preencha a quantidade dos itens em estoque. 
  - Como a Conta Franquia não possui um catálogo próprio, tendo herdado as informações de Produtos e SKUs da Conta Principal, será necessário incluir as quantidades por meio da importação e exportação da planilha de estoque.
- Validar a configuração. 


## Validar configuração

Se a configuração do ponto de retirada tiver sido feita corretamente na Conta Franquia, os SKUs com estoque disponível e preço poderão ser vendidos na Conta Principal, onde a Conta Franquia vai atuar como um Seller White Label e a Conta Principal funcionará como um Marketplace.

Seller White Label/Conta Franquia
Para validar se o seller white label está realizando a entrega de um SKU através do ponto de retirada cadastrado, você deve fazer um POST na rota de fulfillment:
`http://{{franchise-accountName}}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?affiliateid=SLR&sc={{salesChannel}}`

Abaixo, segue um exemplo do body necessário para o POST:

```json
 {
    "items": [
      {
        "id": "2000270",         //skuId
        "quantity": 1,
        "seller": "1"
      }
    ],
    "postalCode": "85001",     
    "country": "USA"
  }
```

Caso a configuração tenha sido feita corretamente, a chamada irá retornar as informações de entrega do SKU enviado no contexto do body. Assim, basta verificar se a entrega está sendo feita pelo pickup point cadastrado. Abaixo, segue um exemplo de resposta da chamada:

```json
{
    "items": [
        {
            "id": "2000270",
            "requestIndex": 0,
            "quantity": 1,
            "seller": "1",
            "merchantName": null,
            "priceValidUntil": "2019-09-05T14:42:12Z",
            "price": 5500,
            "listPrice": 5500,
            "offerings": [],
            "priceTags": [],
            "measurementUnit": "un",
            "unitMultiplier": 1,
            "attachmentOfferings": []
        }
    ],
    "postalCode": "85001",
    "geoCoordinates": [],
    "country": "USA",
    "logisticsInfo": [
        {
            "itemIndex": 0,
            "addressId": null,
            "selectedSla": null,
            "selectedDeliveryChannel": null,
            "stockBalance": 5,
            "quantity": 1,
            "shipsTo": [
                "USA"
            ],
            "slas": [
                {
                    "id": "Normal (1cc6116)",
                    "deliveryChannel": "pickup-in-point",
                    "name": "Normal (1cc6116)",
                    "deliveryIds": [
                        {
                            "courierId": "1cbb75a",
                            "warehouseId": "1318516",
                            "dockId": "1b3d781",
                            "courierName": "Fast Shipping",
                            "quantity": 1
                        }
                    ],
                    "shippingEstimate": "20bd",
                    "dockEstimate": "5bd",
                    "availableDeliveryWindows": [],
                    "price": 53200,
                    "pickupStoreInfo": {
                        "isPickupStore": true,
                        "friendlyName": "Locker Arizona",
                        "address": {
                            "addressType": "pickup",
                            "receiverName": null,
                            "addressId": "1cc6116",
                            "postalCode": "85004",
                            "city": "Phoenix",
                            "state": "AZ",
                            "country": "USA",
                            "street": "North 3rd Street",
                            "number": "752",
                            "neighborhood": "Downtown",
                            "complement": "",
                            "reference": null,
                            "geoCoordinates": [
                                3345.231544494628906,
                                -11206.918148040771484
                            ]
                        },
                        "additionalInfo": "Bring your ID",
                        "dockId": "1b3d781"
                    },
                    "pickupPointId": "1cc6116",
                    "pickupDistance": 8.0277872085571289,
                    "polygonName": null
                }
            ],
            "deliveryChannels": [
                {
                    "id": "pickup-in-point",
                    "stockBalance": 5
                }
            ]
        }
    ],
    "pickupPoints": [
        {
            "friendlyName": "Locker Arizona",
            "address": {
                "addressType": "pickup",
                "receiverName": null,
                "addressId": "1cc6116",
                "postalCode": "85004",
                "city": "Phoenix",
                "state": "AZ",
                "country": "USA",
                "street": "North 3rd Street",
                "number": "752",
                "neighborhood": "Downtown",
                "complement": "",
                "reference": null,
                "geoCoordinates": [
                    3345.231544494628906,
                    -11206.918148040771484
                ]
            },
            "additionalInfo": "Bring your ID",
            "id": "1cc6116",
            "businessHours": []
        }
    ],
    "messages": []
}
```

Marketplace/Conta Principal
Para validar se o Marketplace está incluindo corretamente o SKU do seller white label no carrinho, você deve fazer um POST na rota de checkout:
http://{{main-accountName}}.{{environment}}.com.br/api/checkout/pub/orderforms/simulation
Abaixo, segue um exemplo do body necessário para o POST:

```json
 {
    "items": [
      {
        "id": "2000270",         //skuId
        "quantity": 1,
        "seller": "1"
      }
    ],
    "postalCode": "85001",     
    "country": "USA"
  }
```

Caso a configuração tenha sido feita corretamente, a chamada irá retornar as informações de checkout, incluindo no carrinho o SKU enviado no contexto do body.
Assim, basta buscar no json de resposta se a entrega do SKU pode ser feita pelo pickup point cadastrado.
