---
title: 'Configurar Seller White Label como Ponto de Retirada (Pickup Point)'
id: 6fSUE2O0taaoKieAaiuc4e
status: ARCHIVED
createdAt: 2018-09-04T14:22:05.290Z
updatedAt: 2023-07-26T21:33:59.946Z
publishedAt: 
firstPublishedAt: 2018-09-05T20:38:04.270Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slug: configurar-seller-white-label-ponto-de-retirada-pickup-point
locale: pt
legacySlug: configurar-seller-white-label-ponto-de-retirada-pickup-point
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
---

O objetivo deste artigo é orientar o usuário da plataforma VTEX a configurar um __Seller White Label__ como __ponto de retirada__. Esta feature faz parte do escopo de estratégias de Omnichannel de uma loja, tornando-se uma importante evolução na logística de entregas e gestão de estoque.

## Contas Franquias e Sellers White Label

Conforme explicado no artigo [Definições de Conta Franquia e Seller White Label](https://help.vtex.com/pt/tutorial/white-label-seller--5orlGHyDHGAYciQ64oEgKa), toda Conta Franquia criada na VTEX é associada automaticamente como Seller White Label da conta principal.

Desta maneira, o ponto de retirada configurado na Conta Franquia servirá para atender às entregas dos pedidos realizados na Conta Principal. Neste cenário, a Conta Franquia atua como __Seller White Label__ da Conta Principal.

>❗ As configurações devem ser feitas na conta do Seller White Label. Os itens só ficarão disponíveis para retirada no checkout do cliente final se o SKU estiver disponível no estoque da conta principal e da conta do Seller White Label.

## Configurações iniciais 

Para configurar um seller white label como ponto de retirada, é preciso cadastrar:

- [Ponto de Retirada](https://help.vtex.com/pt/tutorial/creating-pickup-points--2R5ClQiwe4KoSQgsuiOw4E): com o endereço do seller white label.    
- [Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140): para exibir o Ponto de Retirada no checkout, é necessário configurar uma política de envio e vincular um ponto de retirada cadastrado.   
- [Doca](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW): agora, você deve configurar uma Doca e vincular a transportadora cadastrada com o ponto de retirada. 
- [Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137#cadastrar-estoque): você deve configurar um Estoque e vincular a política de envio cadastrada com o ponto de retirada.

## Preencher quantidade em estoque

Após configurar o __Ponto de Retirada__, a __Política de envio__, a __Doca__ e o __Estoque__, é necessário preencher a quantidade dos itens em estoque. Como a Conta Franquia não possui um catálogo próprio, tendo herdado as informações de Produtos e SKUs da __Conta Principal__, será necessário incluir as quantidades através da __importação e exportação da planilha de estoque__.

Para saber como exportar e importar esta planilha, acesse nosso artigo [Importar e exportar planilha de estoque](/pt/tutorial/importando-e-exportando-planilha-de-estoque).

Para saber em detalhes como preencher os  campos da planilha, acesse nosso artigo [Preencher campos da planilha de frete](/pt/tutorial/como-montar-a-planilha-de-frete/).

## Validar configuração

Se a configuração do ponto de retirada tiver sido feita corretamente na Conta Franquia, os SKUs com __estoque disponível e preço__ poderão ser vendidos na Conta Principal, onde a Conta Franquia vai atuar como um __Seller White Label__ e a Conta Principal funcionará como um __Marketplace__.

>⚠️ Certifique-se de que o seller white label está ativo. Para isso, acesse o Admin VTEX, em **Marketplace > Sellers > Gerenciamento**, e na linha do seller e coluna <i>Status</i>, clique em `Ativo`.

### Seller White Label/Conta Franquia

Para validar se o seller white label está realizando a entrega de um SKU através do ponto de retirada cadastrado, você deve fazer um `POST` na rota de fulfillment: 

`http://{{franchise-accountName}}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?affiliateid=SLR&sc={{salesChannel}}`

Abaixo, segue um exemplo do `body` necessário para o `POST`:

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

Caso a configuração tenha sido feita corretamente, a chamada irá retornar as informações de entrega do SKU enviado no contexto do `body`. Assim, basta verificar se a entrega está sendo feita pelo pickup point cadastrado. Abaixo, segue um exemplo de resposta da chamada:

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

### Marketplace/Conta Principal

Para validar se o Marketplace está incluindo corretamente o SKU do seller white label no carrinho, você deve fazer um `POST` na rota de checkout:

`http://{{main-accountName}}.{{environment}}.com.br/api/checkout/pub/orderforms/simulation`

Abaixo, segue um exemplo do `body` necessário para o `POST`:

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

Caso a configuração tenha sido feita corretamente, a chamada irá retornar as informações de checkout, incluindo no carrinho o SKU enviado no contexto do `body`.

Assim, basta buscar no json de resposta se a entrega do SKU pode ser feita pelo pickup point cadastrado.
