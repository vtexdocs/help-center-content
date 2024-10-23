---
title: 'Integration guide for marketplaces - Marketplace non VTEX'
id: 5qHw5WfVAII44IY46sM6CI
status: ARCHIVED
createdAt: 2017-10-14T21:29:48.653Z
updatedAt: 2019-12-31T15:24:09.199Z
publishedAt: 
firstPublishedAt: 2017-10-14T21:46:22.332Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: integration-guide-for-marketplaces-marketplace-non-vtex-old
locale: en
legacySlug: integration-guide-for-marketplaces-marketplace-non-vtex-old
subcategoryId: unknown-subcategory
---

## Marketplace not Hosted on VTEX platform selling to Sellers Hosted on VTEX Platform

This document is intended to assist in the integration of a marketplace not hosted on VTEX platform with a Seller hosted on VTEX platform.  <br/>
This model includes catalog exchange, updating of commercial condition (price, inventory) of a SKU between a Seller hosted on VTEX platform and a Marketplace (affiliated) not hosted on VTEX platform, besides it assists in the order drop and order sending authorization to the Seller hosted on VTEX platform.

> SOME CONCEPTS:
>> _Seller_ =  Product owner, responsible for accomplishing the SKU delivery.<br/>
>> _Marketplace_ = Showcase owner (face with the final customer), responsible for exhibit and sell the SKU.<br/>
>> _SKU_ = Item to be exchanged and sold between Marketplace and Seller.<br/>
>> _Endpoint_ = access point of a service on the Internet, service ready to receive a request and return an answer.<br/>


#### Actions that the marketplace not hosted on VTEX shall do to implement the integration:

1. Implement the endpoint to receive notification of price and inventory change - Seller hosted on VTEX will call endpoint from the Marketplace. Every time the price or/and the inventory got changed by the SKU in the Seller, the Seller must call this endpoint from the Marketplace, just to communicate the change. When receiving this request, the Marketplace comes to look for the price and inventory in the Seller on the commercial policy consultation method that we're gonna talk below:

 _Example of the call:_<br/>
 ``` https://marketplace.com.br/api/notification/ ```

 [Exemplo Completo: Enviar Notificação de Mudança de Preço e Estoque de SKU](#a1)

2. Implement SKU data search SKU data in the Seller - Marketplace will call endpoint from the Seller on VTEX.  Every time the change notification service of the Seller notify about a SKU, and the Marketplace hasn't the SKU cataloged yet,  the Marketplace comes in the Seller to look for the new SKU data.

 _Example of the call:_<br/>
 ```http://sandboxintegracao.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/2000037 ```

 [Exemplo Completo: Buscar Dados de SKU](#a2)

3. Implement commercial policy search (price and inventory, shipment, delivery type and cost) - Marketplace will call endpoint from the Seller. Every time the change notification service of the Seller notify about a SKU change (already cataloged), the Marketplace searches price or inventory in the Seller to be updated.

 _Example of the call:_<br/>
 ``` https://sandboxintegracao.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc=1&affiliateId=LAB ```

 [Exemplo Completo: Consultar Política Comercial](#a3)

4. Implement routine that places an order in the Seller - Marketplace will call endpoint from the Seller. The Marketplace will use this endpoint to place an order in the Seller.

 _Example of the call:_<br/>
 ``` https://sandboxintegracao.vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc=1&affiliateId=LAB ```

 [Exemplo Completo: Colocar um Pedido no Seller](#a7)

5. Implement routine that authorizes order's delivery procedure in the Seller - Marketplace will call endpoint from the Seller. The Marketplace will use this endpoint to authorize the sending of an order in the Seller.

 _Example of the call:_<br/>
 ``` https://[loja].vtexcommercestable.com.br/api/fulfillment/pvt/orders/[orderid]/fulfill?sc=1&affiliateId=LAB ```

 [Exemplo Completo: Autorizar um Pedido no Seller](#a7)

6. Implement endpoint to receive invoice and delivery tracking of an order's delivery - Seller will call endpoint from the Marketplace. In order data is sent an endpoint of the Marketplace services, the Seller will invoke this endpoint not only to inform invoice data as well as tracking data of shipping company. The Seller still may request a cancellation of an order that has not sent the invoice.

 _Example of the call:_<br/>
 ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ```<br/>
 ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/cancel ```<br/>

 [Exemplo Completo: Informar nota fiscal de um pedido](#a12)<br/>
 [Exemplo Completo: Informar tracking de um pedido](#a13)<br/>
 [Exemplo Completo: Solicitar cancelamento de um pedido sem nota fiscal](#a14)<br/>

 > NOTE
 >> In the POST of the order made by the Marketplace, the field "Marketplace service endpoint" must be filled with the url base of Marketplace services.

 - - -

##Abaixo segue o passo a passo detalhado de cada fluxo:

### SKU Catalog Change and SKU Sales Channel Update

SKU FLOW: price, inventory, shipping, delivery SLAs:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled category/Untitled subcategory/integration-guide-for-marketplaces-marketplace-non-vtex-old_1.png)

### Insertion and SKU Update - Flow

* Inside the store hosted on VTEX, will be created an * affiliate, that's the  interested in receiving the catalog and the commercial conditions updates.

* The affiliate must implement an endpoint where will be received information about commercial condition changes of SKUs.

* In the VTEX store , every time a SKU commercialized by the affiliate got a change in commercial condition, or got reindexed, the affiliate's notification endpoint will be called.

* When the affiliate receives a notification that a SKU changed the commercial condition, the affiliate must check if it already commercializes that SKU from that store that communicated.

  * **If YES**: The affiliate check the commercial condition on VTEX and updates himself.

  * **If NOT**: The affiliate search the SKU in the store, insert in your catalog, and then repeat the scenario "if YES".


<a name="a1"></a>
### Change Notification

Notifies the Marketplace that isn't VTEX that there was a change in commercial conditions (price, inventory, delivery SLAs) of a SKU - Affiliate Endpoint (Marketplace).

endpoint: ``` https://[affiliateendpoint}/api/notification/ ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_request:_

```json
{
	"IdSku" : "1634", //id da sku da VTEX
	"An" : "sandboxintegracao", //loja vtex
	"IdAffiliate":"PRT", // id do afilado cadastrado na loja vtex
	"StockModified": true, //mudou estoque?
	"PriceModified": true //mudou preço?
}
```

<a name="a3"></a>
### Search of Commercial Conditions

Accesses the VTEX store getting the  commercial conditions (price, inventory, delivery SLAs) of a SKU -  Endpoint of the VTEX store.

endpoint: ``` https://[storename].vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc=[idcanal]&affiliateId=[idafiliado] ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>
Parametro: **sc** // sc é o canal de vendas cadastrado  na loja VTEX<br/>
Parametro: **affiliateId** // o id do afiliado cadastrado na loja VTEX<br/>

_request:_

```json
{
    "postalCode":"22251-030",            //obrigatório se country estiver preenchido
    "country":"BRA",                     //obrigatório se postalCode estiver preenchido
    "items": [                           //obrigatório: deve conter pelo menos um objeto item
        {
            "id":"287611",               //obrigatório, string
            "quantity":1,                //obrigatório-quantidade do item a ser simulada, int
            "seller":"1"                 //loja pricipal usar sempre 1
        },
        {
            "id":"5837",
            "quantity":5,
            "seller":"1"
        }
    ]
}
```

_response:_

```json
{
    "items": [                                                     //pode vir um array vazio, caso item indisponivel
        {
			"id": "287611",                                        //obrigatório, string
			"requestIndex": 0,                                     //obrigatório, int - representa a posição desse item no array original (request)
			"price": 7390,                                         //Os dois dígitos menos significativos são os centavos //obrigatório, int
			"listPrice": 7490,                                     //Os dois dígitos menos significativos são os centavos //obrigatório, int
			"quantity": 1,                                         //obrigatório, int
			"seller": "1",                                         //id do seller cadastrado na loja // obrigatório, string,
			"priceValidUntil": "2014-03-01T22:58:28.143"           //data, pode ser nulo
			"offerings":[                                           //Array opcional, porém não pode ser nulo: enviar array vazio ou não enviar a propriedade
				{
				    "type":"Garantia",                               //obrigatório, string
				    "id":"5",                                       //obrigatório, string
				    "name":"Garantia de 1 ano",                       //obrigatório, string
				    "price":10000                                   //Os dois dígitos menos significativos são os centavos //obrigatório, int
				},
				{
				    "type":"Embalagem de Presente",
				    "id":"6",
				    "name":"Embalagem de Presente",
				    "price":250
				}
			]
        },
        {
			"id": "5837",
			"requestIndex": 1,
			"price": 890,                                          // Os dois dígitos menos significativos são os centavos
			"listPrice": 990,                                      // Os dois dígitos menos significativos são os centavos
			"quantity": 5,
			"seller": "1",
			"priceValidUntil": null
        }
    ],
    "logisticsInfo": [                                            //obrigatório (se vier vazio é considerado que o item não está disponível) -  todos os itens devem ter os mesmos SLAs
        {
            "itemIndex": 0,                                       //obrigatório, int - representa os dados de sla do item de resposta (response)
            "stockBalance": 99,                                   //obrigatório  quando o CEP foi passado no request, estoque, int
            "quantity": 1,                                        //obrigatório quando o CEP foi passado no request, qauntidade pasada no request, int
            "shipsTo": [ "BRA", "USA" ],                          //obrigatório, array de string com as siglas dos países de entrega
            "slas": [                                             //obrigatório quando o CEP foi passado no request. Pode ser um array vazio na ausencia do CEP
                {
                    "id": "Expressa",                             //obrigatório, id tipo entrega, string
                    "name": "Entrega Expressa",                   //obrigatório, nome do tipo entrega, string
                    "shippingEstimate": "2bd",                    // bd == "business days" //obrigatório, string
                    "price": 1000                                 // Os dois dígitos menos significativos são os centavos, obrigatório, int
                    "availableDeliveryWindows": [                 //opcional, podendo ser um array vazio
                    ]
                },
                {
                    "id": "Agendada",
                    "name": "Entrega Agendada",
                    "shippingEstimate": "5d",                     // d - days, bd - business days
                    "price": 800,
                    "availableDeliveryWindows": [
                         {
                            "startDateUtc": "2013-02-04T08:00:00+00:00",       //date, obrigatório se for enviado delivery window
                            "endDateUtc": "2013-02-04T13:00:00+00:00",         //date, obrigatório se for enviado delivery window
                            "price": 0        //int, obrigatório se for enviado delivery window - o valor total da entrega agendada é o valor base mais o valor desse campo
                        },
                    ]
                }
            ]
        },
        {
            "itemIndex": 1,
            "stockBalance": 1237,
            "quantity": 5,
            "shipsTo": [ "BRA" ],
            "slas": [
                {
                    "id": "Normal",
                    "name": "Entrega Normal",
                    "shippingEstimate": "5bd",                                  // bd - business days
                    "price": 200
                }
            ]
        }
    ],
    "country":"BRA",                                           //string, nulo se não enviado
    "postalCode":"22251-030"                                   //string, nulo se não enviado
}
```

<a name="a2"></a>
### Search of SKU information

Access a VTEX Store and search for a SKU data - Endpoint of a VTEX Store.

endpoint: ``` http://[storename].vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/[idsku] ```<br/>
verb: **GET**<br/>
Accept: **application/json**<br/>
Parametro: **idSku** // identificador do SKU<br/>


_response:_

```json
{
    "Id": 1634, //id da sku
    "ProductId": 1634, //id do produto pai da sku
    "NameComplete": "Primer Lisse Minute Clarins - Base Facial Alisadora 15ml", //nome completo
    "ProductName": "Primer Lisse Minute Clarins - Base Facial Alisadora",
    "ProductDescription": "<strong>Primer Lisse Minute</strong> deixa a pele imediatante alisada e suave ao toque. O primer da <strong>Clarins</strong> atenua as imperfeições e reduz a aparência dos poros. A pele fica linda a pronta para receber a make!<br/>Com o rosto limpo aplique o primer com os dedos ou com um pincel. Espalhe bem começando pela zona T (testa, nariz e queixo) em direção aos cantos externos do rosto.",
    "SkuName": "15ml",// nome da SKU
    "IsActive": true, // está ativa?
    "IsTransported": true,
    "IsInventoried": true,
    "IsGiftCardRecharge": false,
    "ImageUrl": "http://epocacosmeticos.vteximg.com.br/arquivos/ids/162097-55-55/primer-lisse-minute-15ml-clarins.jpg",
    "DetailUrl": "/primer-lisse-minute-clarins-base-facial-alisadora/p", //link do produto na loja
    "CSCIdentification": null,
    "BrandId": "2000050",//identificador da marca
	"BrandName": "Clarins", //nome da marca
    "Dimension": {//dimensões
        "cubicweight": 0.2083,
        "height": 10,
        "length": 10,
        "weight": 100,
        "width": 10
    },
    "IsKit": false,
    "KitItems": [],
    "Services": [https://serviços
        {
            "Id": 1098,
            "Name": "Embalagem presente",
            "IsFile": false,
            "IsGiftCard": false,
            "IsRequired": false,
            "Options": [
                {
                    "Id": 1098,// identificador do serviço
                    "Name": "Embalagem presente",//nome do serviço
                    "Description": "Embalagem presente",
                    "PriceName": "Embalagem presente",
                    "ListPrice": 1, //preço DE do serviço
                    "Price": 1 //preço POR do serviço
                }
            ],
            "Attachments": []
        }
    ],
    "Categories": [],
    "Attachments": [],
    "Collections": [],
    "SkuSellers": [
        {
            "SkuCommercialOffer": {
                "DeliverySlaSamples": [
                    {
                        "Region": {
                            "Id": "1",
                            "Name": "RJ",
                            "CountryCode": "BRA",
                            "ZipCode": "22080010"
                        },
                        "DeliverySlaPerTypes": [
                            {
                                "TypeName": "Normal",
                                "Price": 9.9,
                                "Time": "00:00:00"
                            }
                        ]
                    }
                ],
                "Price": 174,
                "ListPrice": 174,
                "AvailableQuantity": 22
            },
            "SellerId": "1",
            "StockKeepingUnitId": 1634,
            "SellerStockKeepingUnitId": "1634",
            "IsActive": true,
            "FreightCommissionPercentage": 0,
            "ProductCommissionPercentage": 0
        }
    ],
    "SkuPriceSheet": [],
    "Images": [ //imagens, a primeira é a principal
        {
            "ImageUrl": "http://epocacosmeticos.vteximg.com.br/arquivos/ids/162097/primer-lisse-minute-15ml-clarins.jpg",
            "ImageName": null,
            "FileId": 162097
        }
    ],
    "SkuSpecifications": [ //variações
        {
            "FieldId": 283,
            "FieldName": "Variação",
            "FieldValueIds": [ //identificador da variação
                2688
            ],
            "FieldValues": [ //valor da variação
                "15ml"
            ]
        }
    ],
    "ProductSpecifications": [],
    "ProductClustersIds": "135,149,150,151,152,153,154,155,156,157,158,159,160,161,219,310,358,366,406,407,408,451,473,480,486,525,535,546,549,552,561,569",
    "ProductCategoryIds": "/1000004/1000012/1000040/", //arvore de identificadores de categorias
    "ProductCategories": {
        "1000004": "Maquiagem", //identificador e nome da categoria
        "1000012": "Primer e Finalizador",
        "1000040": "Fixador da Maquiagem"
    },
    "CommercialConditionId": 1,
    "RewardValue": 0,
    "AlternateIds": {
        "Ean": "3380814700219",
        "RefId": "005899"
    },
    "AlternateIdValues": [
        "3380814700219",
        "005899"
    ],
    "EstimatedDateArrival": null,
    "MeasurementUnit": "un",
    "UnitMultiplier": 1,
    "InformationSource": "Indexer",
    "ModalType": null
}
```

- - -

### Cart and Payment page Simulation

This topic is intended to assist in the cart simulation between a Marketplace that isn't VTEX with a VTEX store.

### In the Cart and Payment

When a product is inserted into the cart in the Marketplace that isn't VTEX, or the cart gets some editing, a simulation consultation of cart must be done in VTEX store to check the commercial conditions validity  (price, inventory, shipment and delivery SLAs). When the customer goes to the payment section, another cart simulation must be done.

_Cart and Payment Request Flow:_

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled category/Untitled subcategory/integration-guide-for-marketplaces-marketplace-non-vtex-old_2.png)

### Cart Simulation

Accesses the VTEX store simulating a cart to check the commercial conditions and SLAs delivery - Endpoint VTEX store

endpoint: ``` https://[storename].vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc=[idcanal]&affiliateId=[idafiliado] ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>
Parametro: **sc** // sc é o canal de vendas cadastrado na loja VTEX<br/>
Parametro: **affiliateId** // affiliateId é o id do afiliado cadastrado na loja VTEX<br/>

_request:_

```json
{
    "postalCode":"22251-030",            //obrigatório se country estiver preenchido, string
    "country":"BRA",                     //obrigatório se postalCode estiver preenchido, string
    "items": [                           //obrigatório: deve conter pelo menos um objeto item
        {
            "id":"287611",               //obrigatório, string
            "quantity":1,                //obrigatório-quantidade do item a ser simulada, int
            "seller":"seller1"           //sigla do do seller criado no admin // obrigatório, string
        },
        {
            "id":"5837",
            "quantity":5,
            "seller":"seller1"
        }
    ]
}
```

_response:_

```json
{
    "items": [                                                     //pode vir um array vazio
        {
            "id": "287611",                                        //obrigatório, string
            "requestIndex": 0,                                     //obrigatório, int - representa a posição desse item no array original,
            "price": 7390,                                         // Os dois dígitos menos significativos são os centavos //obrigatório, int
            "listPrice": 7490,                                     // Os dois dígitos menos significativos são os centavos //obrigatório, int
            "quantity": 1,                                         //obrigatório, int
            "seller": "1",                                         // Id do seller cadastrado na loja // obrigatório, string,
            "priceValidUntil": "2014-03-01T22:58:28.143"           //data, pode ser nulo
            "offerings":[                                           //Array opcional, porém não pode ser nulo: enviar array vazio ou não enviar a propriedade
                {
                    "type":"Garantia",                               //obrigatório, string
                    "id":"5",                                       //obrigatório, string
                    "name":"Garantia de 1 ano",                       //obrigatório, string
                    "price":10000                                   //Os dois dígitos menos significativos são os centavos //obrigatório, int
                },
                {
                    "type":"Embalagem de Presente",
                    "id":"6",
                    "name":"Embalagem de Presente",
                    "price":250
                }
            ]
        },
        {
            "id": "5837",
            "requestIndex": 1,
            "price": 890,                                          // Os dois dígitos menos significativos são os centavos
            "listPrice": 990,                                      // Os dois dígitos menos significativos são os centavos
            "quantity": 5,
            "seller": "1",
            "priceValidUntil": null
        }
    ],
    "logisticsInfo": [                                            //**, obrigatório (se vier vazio é considerado que o item não está disponível) -  todos os itens devem ter os mesmos SLAs
        {
            "itemIndex": 0,                                       //obrigatório, int - representa os dados de sla do item de resposta (response)
            "stockBalance": 99,                                   //obrigatório  quando o CEP foi passado no request, estoque, int
            "quantity": 1,                                        //obrigatório quando o CEP foi passado no request, qauntidade pasada no request, int
            "shipsTo": [ "BRA", "USA" ],                          //obrigatório, array de string com as siglas dos países de entrega
            "slas": [                                             //obrigatório quando o CEP foi passado no request. Pode ser um array vazio
                {
                    "id": "Expressa",                             //obrigatório, id tipo entrega, string
                    "name": "Entrega Expressa",                   //obrigatório, nome do tipo entrega, string
                    "shippingEstimate": "2bd",                    // bd == "business days" //obrigatório, string
                    "price": 1000                                 // Os dois dígitos menos significativos são os centavos, obrigatório, int
                    "availableDeliveryWindows": [                 //opcional, podendo ser um array vazio
                    ]
                },
                {
                    "id": "Agendada",
                    "name": "Entrega Agendada",
                    "shippingEstimate": "5d",                     // d - "days, bd - "business days"
                    "price": 800,
                    "availableDeliveryWindows": [
                         {
                            "startDateUtc": "2013-02-04T08:00:00+00:00",       //date, obrigatório se for enviado delivery window
                            "endDateUtc": "2013-02-04T13:00:00+00:00",         //date, obrigatório se for enviado delivery window
                            "price": 0        //int, obrigatório se for enviado delivery window - o valor total da entrega agendada é o valor base mais o valor desse campo
                        },
                    ]
                }
            ]
        },
        {
            "itemIndex": 1,
            "stockBalance": 1237,
            "quantity": 5,
            "shipsTo": [ "BRA" ],
            "slas": [
                {
                    "id": "Normal",
                    "name": "Entrega Normal",
                    "shippingEstimate": "5bd",                                  // bd - "business days"
                    "price": 200
                }
            ]
        }
    ],
    "country":"BRA",                                           //string, nulo se não enviado
    "postalCode":"22251-030"                                   //string, nulo se não enviado
}
```
> In case of not sending CEP and Country info, delivery SLA will no be returned. null slas\[\].


### Send order and authorize dispatch

This topic is intended to assist a Marketplace that isn't VTEX to send an order and authorization to dispatch (proceed with the order fulfillment).

If someone want a different commercial condition for the Marketplace that isn't VTEX, must be created a new commercial policy in the VTEX store, thus being able to create different promotions (discount, shipment, etc.), only to the desired affiliate. If there aren't a different commercial policy, must be used the commercial policy from the main store (sc = 1).

_Send order and authorize dispatch request flow:_

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled category/Untitled subcategory/integration-guide-for-marketplaces-marketplace-non-vtex-old_3.png)


<a name="a7"></a>
### Send Order

When the oerder is closed in a marketplace that isn't VTEX, a POST must be done in VTEX store so it can receive the order request - Endpoint VTEX store

endpoint: ``` https://[storename].vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc=[idcanal]&affiliateId=[idafiliado] ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>
Parametro: **sc** // sc é o canal de vendas cadastrado na VTEX.<br/>
Parametro: **affiliateId** // affiliateId é o id do afiliado cadastrado n loja VTEX<br/>

_request:_

```json
[
  {
	"marketplaceOrderId": "959311095", //identificador do pedido no marketplace
	"marketplaceServicesEndpoint": "https://urlmarketplace/", //leia o tópico implementando MarketplaceServicesEndpoint Actions
	"marketplacePaymentValue": 11080, //valor que o marketplace se compromete a pagar para o Seller
	"items": [
	  {
	    "id": "2002495",
	    "quantity": 1,
	    "seller": "1",
	    "commission": 0,
	    "freightCommission": 0,
	    "price": 9990,
	    "bundleItems": [], //serviços. Ex: embalagem pra presente.
	    "itemAttachment": {
	      "name": null,
	      "content": {}
	    },
	    "attachments": [], //customização do item, Ex:camisa com o numero 10
	    "priceTags": [],
	    "measurementUnit": null, unidade de medida
	    "unitMultiplier": 0, unidade multipladora,Ex: venda por quilo
	    "isGift": false
	  }
	],
	"clientProfileData": {
	  "id": "clientProfileData",
	  "email": "32172239852@gmail.com.br",
	  "firstName": "Jonas",
	  "lastName": "Alves de Oliveira",
	  "documentType": null,
	  "document": "3244239851",
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
	    "receiverName": "Jonas Alves de Oliveira",
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
	      "selectedSla": "Normal",
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

_response:_

```json
[
  {
	"marketplaceOrderId": "959311095",
	"orderId": "123543123", //id do pedido que foi gerado na loja VTEX
	"followUpEmail": "75c70c09dbb3498c9b3bbdee59bf0687@ct.vtex.com.br",
	"items": [
	  {
	    "id": "2002495",
	    "quantity": 1,
	    "seller": "1",
	    "commission": 0,
	    "freightCommission": 0,
	    "price": 9990,
	    "bundleItems": [],
	    "priceTags": [],
	    "measurementUnit": "un",
	    "unitMultiplier": 1,
	    "isGift": false
	  }
	],
	"clientProfileData": {
	  "id": "clientProfileData",
	  "email": "5c77abaea35f4cb6824b9326942c00e5@ct.vtex.com.br",
	  "firstName": "JONAS",
	  "lastName": "ALVES DE OLIVEIRA",
	  "documentType": "cpf",
	  "document": "32133239851",
	  "phone": "1592712979",
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
	    "receiverName": "JONAS ALVES DE OLIVEIRA",
	    "addressId": "Casa",
	    "postalCode": "13476103",
	    "city": "Americana",
	    "state": "SP",
	    "country": "BRA",
	    "street": "JOÃO DAMÁZIO GOMES",
	    "number": "121",
	    "neighborhood": "SÃO JOSÉ",
	    "complement": null,
	    "reference": "Bairro Praia Azul / Posto de Saúde 17",
	    "geoCoordinates": []
	  },
	  "logisticsInfo": [
	    {
	      "itemIndex": 0,
	      "selectedSla": "Normal",
	      "lockTTL": "8d",
	      "shippingEstimate": "5d",
	      "price": 1090,
	      "deliveryWindow": null
	    }
	  ]
	},
	"paymentData":null
	}
 }
]
```

_retorno de erro:_

```json
{
	"error": {
	"code": "1",
	"message": "O verbo 'GET' não é compatível com a rota '/api/fulfillment/pvt/orders'",
	"exception": null
	}
}
```
<a name="a8"></a>
### Send authorization to dispatch

When the order payment is completed on sales channel that isn't VTEX, a POST must be done in VTEX store so the order can be treated - Endpoint of Seller

endpoint: ``` https://[storename].vtexcommercestable.com.br/api/fulfillment/pvt/orders/[orderid]/fulfill?sc=[idcanal]&affiliateId=[idafiliado] ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>
Parametro: **sc** // sc é o canal de vendas cadastrado na VTEX.<br/>
Parametro: **affiliateId** // affiliateId é o id do afiliado cadastrado n loja VTEX<br/>

_request:_

```json
{
	"marketplaceOrderId": "959311095" //id do pedido originado no canal de vendas
}
```

_response:_

```json
{
	"date": "2014-10-06 18:52:00",
	"marketplaceOrderId": "111",
	"orderId": "123543123",
	"receipt": "e39d05f9-0c54-4469-a626-8bb5cff169f8",
}
```

### Invoking Marketplace Services Endpoint Actions

The MarketplaceServicesEndpoint is to receive the Seller information regarding the invoice and order delivery tracking. It is allowed to send partial invoices, thus forcing the informer to inform not only invoice values,  as well as the items he is sending in the partial invoice. The request on VTEX will only proceed to the BILLED status when the total value of all invoices of an order got sent.

<a name="a12"></a>
### Inform Invoice data

When the Seller makes the invoice, he must send the invoice information  - endpoint VTEX platform.

endpoint: ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>
Parametro: **marketplaceorderId**<br/> //identificador do pedido do Marketplace
_request:_

```json
{
	"type": "Output", //Output(venda)|Input(devolução)
	"invoiceNumber": "NFe-00001", //numero da nota fiscal
	"courier": "", //quando é nota fiscal, dados de tracking vem vazio
	"trackingNumber": "", //quando é nota fiscal, dados de tracking vem vazio
	"trackingUrl": "",//quando é nota fiscal, dados de tracking vem vazio
	"items": [ //itens da nota
	  {
	    "id": "345117",
	    "quantity": 1,
	    "price": 9003
	  }
	],
	"issuanceDate": "2013-11-21T00:00:00", //data da nota
	"invoiceValue": 9508 //valor da nota
}
```

_response:_

```json
{
	"date": "2014-02-07T15:22:56.7612218-02:00", //data do recibo
	"orderId": "123543123",
	"receipt": "38e0e47da2934847b489216d208cfd91" //protocolo gerado, pode ser nulo
}
```

<a name="a13"></a>
### Inform Carrier Tracking

When the order is delivered to a carrier, the tracking information will be sent to the Marketplace on marketplaceServicesEndpoint that is sent on the order data - Marketplace Endpoint

endpoint: ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ``` <br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>
Parametro: **marketplaceorderId**<br/> //identificador do pedido do Marketplace

_request:_

```json
{
	"type": "Output",
	"invoiceNumber": "NFe-00001",
	"courier": "Correios", //transportadora
	"trackingNumber": "SR000987654321", //tracking number
	"trackingUrl": "http://traking.correios.com.br/sedex/SR000987654321", url de tracking
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

_response:_

```json
{
	"date": "2014-02-07T15:22:56.7612218-02:00", //data do recibo
	"orderId": "123543123",
	"receipt": "38e0e47da2934847b489216d208cfd91" //protocolo gerado, pode ser nulo
}
```

<a name="a14"></a>
### Send Cancellation Request

A cancellation request can be sent to the Marketplace on marketplaceServicesEndpoint - Marketplace Endpoint


endpoint: ``` https://marketplaceServicesEndpoint/pvt/orders/[marketplaceorderId]/cancel ``` <br/>
verb: **POST**<br/>
Parametro: **marketplaceorderId**<br/> //identificador do pedido do Marketplace


_request:_

<pre>

</pre>

_response:_

```json
{
  "orderId": "564041714680-01",
  "receipt": "5342fde6-86d1-4220-a83b-9a992145b547",
  "date": "2015-10-08T20:36:51.2390821+00:00"
}
```

> Tracking and Invoice data may be sent on the same request, you just need to fill all POST data.

