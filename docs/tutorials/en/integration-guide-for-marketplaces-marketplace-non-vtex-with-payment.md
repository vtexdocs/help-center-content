---
title: Integration guide for marketplaces - Marketplace non VTEX with payment on seller
id: 4MyIxyg3p6UICk8O6w6O2W
status: DRAFT
createdAt: 2017-10-14T21:51:19.187Z
updatedAt: 2022-02-03T19:02:55.796Z
publishedAt: 
firstPublishedAt: 2017-10-14T21:55:32.638Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: integration-guide-for-marketplaces-marketplace-non-vtex-with-payment
legacySlug: integration-guide-for-marketplaces-marketplace-non-vtex-with-payment
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

<div class="alert alert-warning">
Check out the updated version of this <a href="https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide">marketplace integration guide</a> in our Developer Portal. 
</div> 

## Marketplace not Hosted on VTEX Platform selling to Sellers Hosted on VTEX Platform with Payment

This document is intended to assist on the integration of a marketplace not hosted on VTEX Platform with a Seller hosted on VTEX platform. <br/>
This model includes exchange of catalog, commercial conditions updating (price, inventory) of a SKU between a Seller hosted on VTEX platform and a Marketplace (affiliate) not hosted on VTEX platform, besides it assists in the drop of order, payment transaction and dispatch authorization sending to the Seller hosted on VTEX platform.

> SOME CONCEPTS: :
>> _Seller_ = Product owner, responsible for accomplish the  SKU delivery.<br/>
>> _Marketplace_ = Showcase owner (face with the final customer), responsible for exhibit and sell the SKU.<br/>
>> _SKU_ = Item to be exchanged and sold between Marketplace and Seller.<br/>
>> _Endpoint_ = access point of a service on the Internet, service ready to receive a request and return an answer.<br/>

#### Actions that the marketplace not hosted on VTEX shall do to implement the integration:

1. Implement the endpoint to receive notification of price and inventory change - Seller hosted on VTEX will call endpoint from the Marketplace. Every time the price or/and the inventory got changed by the SKU in the Seller, the Seller must call this endpoint from the Marketplace, just to communicate the change. When receiving this request, the Marketplace comes to look for the price and inventory in the Seller on the commercial policy consultation method that we're gonna talk below. Example of the call:   https://marketplace.com.br/api/notification/ 

 _request example:_<br/>
 ``` https://marketplace.com.br/api/notification/ ```

 [Example: Change Notification](#a1)

2. Implement SKU data search SKU data in the Seller - Marketplace will call endpoint from the Seller on VTEX.  Every time the change notification service of the Seller notify about a SKU, and the Marketplace hasn't the SKU cataloged yet,  the Marketplace comes in the Seller to look for the new SKU data.

 _request example:_<br/>
 ```http://sandboxintegracao.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/2000037 ```

 [Example: Fetch SKU Data](#a2)

3. Implement commercial policy search (price and inventory, shipment, delivery type and cost) - Marketplace will call endpoint from the Seller. Every time the change notification service of the Seller notify about a SKU change (already cataloged), the Marketplace searches price or inventory in the Seller to be updated. 

 _request example:_<br/>
 ``` https://sandboxintegracao.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc=1&affiliateId=LAB ```

 [Example: Cart Simulation](#a3)

4. Implement search of payment ways of the Seller - Marketplace will call endpoint from the Seller. The Marketplace will use this endpoint to search the payment ways offered by the Seller. 

 _request example:_<br/>
 ``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/merchants/payment-systems ```

 [Example: Fetch Payment Methods](#a5)

5. Implement search of parceling - Marketplace will call endpoint from the Seller. The Marketplace will use this endpoint to query the parceling offered by the Seller.

 _request example:_<br/>
 ``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/installments ```

 [Example: Fetch Payment Installment Options](#a6)

6. Implement routine to put an order in the Seller - Marketplace will call endpoint from the Seller. The Marketplace will use this endpoint to put an order in the Seller.

 _request example:_<br/>
 ``` https://sandboxintegracao.vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc=1&affiliateId=LAB ```

 [Example: Place Order in Seller](#a7)

7. Implement routine that opens payment transaction in the seller - Marketplace will call endpoint from the Seller. The Marketplace will use this endpoint to open a  payment transaction for the Seller.

 _request example:_<br/>
 ``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/transactions ```

 [Example: Create Payment Transaction in Seller](#a8)

8. Implement routine to put payment in the Seller - Marketplace will call endpoint from the Seller. The Marketplace will use this endpoint to put a payment in the Seller.

 _request example:_<br/>
 ``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/payments ```

 [Example: Confirm Payment in Seller](#a9)

9. Implement routine that puts additional payment data in the Seller - Marketplace will call endpoint from the Seller. The Marketplace will use this endpoint to put additional payment data in the Seller.

 _request example:_<br/>
 ``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/transactions/[transactionid]/additional-data ```

 [Example: Put Additional Payment Data in Seller](#a10)

10. Implement routine that authorizes the payment in the seller - Marketplace will call endpoint from the Seller. The Marketplace will use this endpoint to authorize the payment progress in the Seller.

 _request example:_<br/>
 ``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/transactions/[transactionid]/authorization-request ```

 [Example: Authorize Payment in Seller](#a11)

11. Implement endpoint to receive invoice and delivery tracking of an order's delivery - Seller will call endpoint from the Marketplace. In order data is sent an endpoint of the Marketplace services, the Seller will invoke this endpoint not only to inform invoice data as well as tracking data of shipping company. The Seller still may request a cancellation of an order that has not sent the invoice.

 _request example:_<br/>
 ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ```<br/>
 ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/cancel ```<br/>

 [Example: Invoice order](#a12)<br/>
 [Example: Add tracking information](#a13)<br/>
 [Example: Request cancellation of an order that was not invoiced](#a14)<br/>

 >NOTE
 >> In the POST of the order made by the Marketplace, the field "Marketplace service endpoint" must be filled with the url base of Marketplace services.

12. Implement routine that captures or cancels the payment in the Seller - Marketplace will call endpoint from the Seller.. The Marketplace must capture the payment when receiving the invoice and must cancel the payment when receiving a cancellation request. The complete example is described in the routine of inform and cancel an invoice, cited above.

 _capture request example:_<br/>
 ``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/transactions/[transactionId]/settlement-request ```

_canceling request example:_<br/>
``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/transactions/[transactionId]/cancellation-request ```

 - - -

## Find below a detailed step by step of each flow:

### Catalog Exchange and SKU price and inventory updating

Change SKU and pricing, inventory, shipping and delivery SLA update:

![](https://images.contentful.com/alneenqid6w5/6jPPddmz1ScOiiMKSaaW2m/8672d77783e8f8a32cd2c4c209610f10/sku-sugestion-canal-nao-vtex.png)

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

endpoint: ``` https://[storename].vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc=[idcanal]&affiliateId=[idafiliado] ```
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>
Parametro: **sc** // sc é o canal de vendas cadastrado no marketplace<br/>
Parametro: **affiliateId** // o id do afiliado cadastrado na loja VTEX<br/>

_request:_

```
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

```
{
    "items": [                                                     //pode vir um array vazio, caso item indisponivel
        {
			"id": "287611",                                        //obrigatório, string
			"requestIndex": 0,                                     //obrigatório, int - representa a posição desse item no array original (request)
			"price": 7390,                                         //Os dois dígitos menos significativos são os centavos //obrigatório, int
			"listPrice": 7490,                                     //Os dois dígitos menos significativos são os centavos //obrigatório, int
			"quantity": 1,                                         //obrigatório, int
			"seller": "1",                                         //id do seller cadastrado na loja // obrigatório, string,
			"merchantName": "sandboxintegracao",				   //se retornado significa que o pagamento deverá ser enviado, esse campo deverá ser enviado junto com o pedido também
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
			"merchantName": "sandboxintegracao",
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
                    "shippingEstimate": "5d",                     // d == "days, bd == "business days"
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
                    "shippingEstimate": "5bd",                                  // bd == "business days"
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

endpoint: ``` http://[loja].vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/[idsku] ```
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
    "Services": [//serviços
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

![](https://images.contentful.com/alneenqid6w5/g3Ozduhczuy0Iaqum6UMS/6e2b44530d4ae3770285d3fb39a8241b/fechato-canal-nao-vtex-com-pgto.png)

### Cart Simulation

Accesses the VTEX store simulating a cart to check the commercial conditions and SLAs delivery - Endpoint VTEX store

endpoint: ``` https://[storename].vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc=[idcanal]&affiliateId=[idafiliado] ```
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>
Parametro: **sc** // sc é o canal de vendas<br/>
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
			"merchantName": "sandboxintegracao",							   // referente ao pagamento, será usado ao enviar o pedido
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
			"merchantName": "sandboxintegracao",
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

> In case of not sending CEP and Country info, delivery SLA will no be returned. null slas[].

<a name="a5"></a>
### Get Available Payment Methods on Seller

Access VTEX store to get available payment methods - VTEX Store Endpoint

endpoint: ``` https://[storename].vtexpayments.com.br/api/pvt/merchants/payment-systems ```
verb: **GET**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_response:_

```json
[
    {
        "id": 6, //identificador da forma de pagamento
        "name": "Boleto Bancário", //nome da forma de pagamento
        "connectorId": 0,
        "requiresDocument": false,
        "implementation": "Vtex.PaymentGateway.BankIssuedInvoice.BankIssuedInvoicePayment",
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.BankIssuedInvoiceBBConnector",
        "groupName": "bankInvoice",
        "isCustom": false,
        "isSelfAuthorized": false,
        "allowInstallments": false,
        "isAvailable": true, // esta disponível?
        "description": null,
        "validator": {
            "regex": null,
            "mask": null,
            "cardCodeMask": null,
            "cardCodeRegex": null,
            "weights": null,
            "useCvv": false,
            "useExpirationDate": false,
            "useCardHolderName": false,
            "useBillingAddress": false,
            "validCardLengths": null
        },
        "dueDate": "2015-01-19T14:49:14.4767186Z"
    },
    {
        "id": 2, //identificador da forma de pagamento
        "name": "Visa", //nome da forma de pagamento
        "connectorId": 0,
        "requiresDocument": true,
        "implementation": "Vtex.PaymentGateway.CreditCard.Visa",
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.AdyenConnector",
        "groupName": "creditCard",
        "isCustom": false,
        "isSelfAuthorized": false,
        "allowInstallments": true, // habilita parcelamento?
        "isAvailable": true, // esta disponível?
        "description": null,
        "validator": {
            "regex": "^4", // regular expression de validação
            "mask": "9999 9999 9999 9999", // mascara de validação
            "cardCodeMask": "999", // mascara do cvv
            "cardCodeRegex": "^[0-9]{3}$", // regilar expression que valida o cvv
            "weights": [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
            "useCvv": true, //cvv é obrigatório?
            "useExpirationDate": true, //usa data de expiração?
            "useCardHolderName": true, //nome do portador obrigatório?
            "useBillingAddress": true, //usa enderço de cobrança?
            "validCardLengths": null
        },
        "dueDate": "2015-01-17T14:49:14.4767186Z"
    },
    {
        "id": 4,
        "name": "Mastercard",
        "connectorId": 0,
        "requiresDocument": true,
        "implementation": "Vtex.PaymentGateway.CreditCard.Mastercard",
        "connectorImplementation": "Vtex.PaymentGateway.Connectors.AdyenConnector",
        "groupName": "creditCard",
        "isCustom": false,
        "isSelfAuthorized": false,
        "allowInstallments": true,
        "isAvailable": true,
        "description": null,
        "validator": {
            "regex": "^5(1(0(0(0([0-9])|[1-9][0-9])|[1-9][0-9]{0})|[1-9][0-9]{0})|3(0(4(0([0-9]))|[0-3][0-9]{0}))|2[0-9]{0})|^5(3(0(4(2([0-9])|[3-9][0-9])|[5-9][0-9]{0})|[1-9][0-9]{0})|5(9(9(9([0-9])|[0-8][0-9])|[0-8][0-9]{0})|[0-8][0-9]{0})|4[0-9]{0})",
            "mask": "9999 9999 9999 9999",
            "cardCodeMask": "999",
            "cardCodeRegex": "^[0-9]{3}$",
            "weights": [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
            "useCvv": true,
            "useExpirationDate": true,
            "useCardHolderName": true,
            "useBillingAddress": true,
            "validCardLengths": null
        },
        "dueDate": "2015-01-17T14:49:14.4767186Z"
    }
]
```
<a name="a6"></a>
### Get the installments on Seller 

Access a VTEX Store to search for installments by payment methods and SKU promotions - VTEX Store Endpoint

Access the attachment below:

<a href="http://resources.vtex.com/pt-br/pci-gateway/configuration/v1/installments.html#">Anexo Consultar Parcelamento</a>

### Send order and authorize dispatch

Marketplace that isn't VTEX to send an order and authorization to dispatch (proceed with the order fulfillment). If someone want a different commercial condition for the Marketplace that isn't VTEX, must be created a new commercial policy in the VTEX store, thus being able to create different promotions (discount, shipment, etc.), only to the desired affiliate. If there aren't a different commercial policy, must be used the commercial policy from the main store (sc = 1).

![](https://images.contentful.com/alneenqid6w5/4xY2FklPgcqaEqumcwW0We/73d38049fe0b17a4fa1c4da63d4ae4af/order-canal-n-vtex-com-pgto.PNG)

<a name="a7"></a>
### Send Order

When the oerder is closed in a marketplace that isn't VTEX, a POST must be done in VTEX store so it can receive the order request - Endpoint VTEX store

endpoint: ``` https://[storename].vtexcommercestable.com.br/api/fulfillment/pvt/orders?sc=[idcanal]&affiliateId=[idafiliado]```
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
	"paymentData":{
		"merchantName":"sandboxintegracao" //campo recebido na simulação de carrinho
	},
	"openTextField": null,
	"marketingData": null
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
	"paymentData":{
		"merchantName":"sandboxintegracao",
		"merchantPaymentReferenceId":"500225" //inteiro, id do pagamento, número que será enviado junto com o pagamento para conciliação.
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
]
```

### Send Payment - Initiate transaction, send payment data, send anti-fraud data and payment authorization

After sending the order and receiveing the response with paymentData.merchantPaymentReferenceId, the order payment process transaction must be sent.

<a name="a8"></a>
### Initiate Transaction

It initiates a payment transaction using the paymentData.merchantPaymentReferenceId received from the sending order response - VTEX store Endpoint

endpoint: ``` https://[storename].vtexpayments.com.br/api/pvt/transactions ```
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_request:_

```json
{
  "value":3190, //valor do pagamento
  "referenceId":"500225", //paymentData.merchantPaymentReferenceId retornado no momento que inseriu o pedido
  "channel":"sandboxintegracao", //nome do gateway de pagamento
  "urn":""
}
```

_response:_

```json
{
    "id": "BB55ED929FF749E6BE5A835E4C811B77",
    "transactionId": "BB55ED929FF749E6BE5A835E4C811B77", // identificador da transação criada
    "referenceKey": "500225",
    "interactions": {
        "href": "/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/interactions"
    },
    "settlements": {
        "href": "/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/settlements"
    },
    "payments": {
        "href": "/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/payments"
    },
    "refunds": {
        "href": "/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/refunds"
    },
    "timeoutStatus": 0,
    "totalRefunds": 0,
    "status": "Started",
    "value": 3190,
    "receiverUri": "https://sandboxintegracao.vtexpayments.com.br:443/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/payments/",
    "startDate": "2015-01-26T18:40:31.4040955Z",
    "authorizationToken": null,
    "authorizationDate": null,
    "commitmentToken": null,
    "commitmentDate": null,
    "refundingToken": null,
    "refundingDate": null,
    "cancelationToken": null,
    "cancelationDate": null,
    "fields": [
        {
            "name": "channel",
            "value": "sandboxintegracao"
        }
    ],
    "ipAddress": null,
    "userAgent": null,
    "acceptHeader": null,
    "antifraudTid": null,
    "channel": "sandboxintegracao",
    "urn": null,
    "softDescriptor": null
}
```

<a name="a9"></a>
### Send Payment Data

It sends payment data, after the trasaction allready started - VTEX store Endpoint

endpoint: ``` https://[loja].vtexpayments.com.br/api/pvt/payments ```
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_request:_

```json
{
  "callbackUrl": "",
  "paymentsArray": "[
    {
      \"paymentSystem\": 2, //identificador da forma de pagamento
      \"paymentSystemName\": \"Visa\", //nome da forma de pagamento
      \"groupName\": \"creditCard\", //grupo da forma de pagamento, tipo
      \"currencyCode\": \"BRL\", //código da moeda
      \"installments\": 1, //numero de parcelas
      \"value\": 3190, //caso sem juros: valor total do pedido; caso parcelado com juros: multiplar o valor das parcelas com juros pelo numero de parcelas
      \"installmentsInterestRate\": 0, //juros de parcelamento
      \"installmentsValue\": 3190, //valor da parcela
      \"referenceValue\": 3190, //valor total do pedidos sem juros
      \"fields\": {
        \"document\": \"80417345615\", //documento do cartão
        \"accountId\": \"\",
        \"addressId\": \"\",
        \"cardNumber\": \"4444333322221111\", //numero do cartao, quando cartão
        \"carHolder\": \"JONAS ALVES DE OLIVEIRA\", //nome do cartão, quando cartão
        \"expireDate\": \"0617\", //mes, ano da validade do cartão
        \"cvv2\": \"171\" //codigo de validação do cartão
      },
      \"transaction\": {
        \"id\": \"BB55ED929FF749E6BE5A835E4C811B77\",//identificador da transação
        \"merchantName\": \"sandboxintegracao\",//mercahnname
        \"payments\": null
      }
    }
  ]"
}
```

_response:_

```json
200
```

<a name="a10"></a>
### Send Additional Data

It sends additional data that will be used by anti-fraud system - VTEX store Endpoint

endpoint: `https://[storename].vtexpayments.com.br/api/pvt/transactions/[transactionid]/additional-data`<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>
Parametro: **transactionid** // identificador da transação  Ex: BB55ED929FF749E6BE5A835E4C811B77<br/>

_request:_

```
[
	{
	    "name": "cart",
	    "value": "{\"items\":[
		{
						\"id\":\"122323\",
						\"name\":\"Tenis Adidas Preto I Tenis Adidas Preto I Tenis Adidas Preto I Tenis Adidas Preto I Tenis Adidas Preto I ABCDEFG\",
						\"value\":1075,
						\"quantity\":1,
						\"shippingDiscount\":0,
						\"discount\":50
		}
		],\"freight\":800,
		\"tax\":0
		}"
	},
	{
	    "name": "clientProfileData",
	    "value": "{\"email\":\"jorge.maravilha@gmail.com\",\"firstName\":\"Jorge\",\"lastName\":\"Maravilha\",\"document\":\"47402620955\",\"phone\":\"+556133318800\",\"corporateName\":null,\"tradeName\":null,\"corporateDocument\":null,\"stateInscription\":null,\"postalCode\":\"70875-010\",\"address\":{\"receiverName\":\"Jorge\",\"postalCode\":\"22231130\",\"city\":\"RIO DE JANEIRO\",\"state\":\"RJ\",\"country\":\"BRA\",\"street\":\"RUA SAO SALVADOR\",\"number\":\"41\",\"neighborhood\":\"FLAMENGO\",\"complement\":\"APTO 802\",\"reference\":null},\"gender\":null,\"birthDate\":null,\"corporatePhone\":null,\"isCorporate\":false}"
	},
	{
	    "name": "shippingData",
	    "value": "{\"receiverName\":\"JORGE\",\"postalCode\":\"70875010\",\"city\":\"BRASILIA\",\"state\":\"DF\",\"country\":\"BRA\",\"street\":\"SQN 216 BLOCO A \",\"number\":\"777\",\"neighborhood\":\"ASA NORTE\",\"complement\":\"APTO 704\",\"reference\":null}"
	}
]
```

_response:_

```
{}
```

<a name="a11"></a>
### Payment Authorization

It sends an authorization to allow the payment process progress - VTEX store Endpoint

endpoint: `https://[loja].vtexpayments.com.br/api/pvt/transactions/BB55ED929FF749E6BE5A835E4C811B77/authorization-request`<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>
Parametro: **transactionid** // identificador da transação<br/>

_request:_

```
{
    "transactionId": "BB55ED929FF749E6BE5A835E4C811B77",
    "softDescriptor": "sandboxintegracao",
    "prepareForRecurrency": false,
    "split": [
        {
            "merchant": "sandboxintegracao",
            "value": 3190,
            "remoteTransactionId": "BB55ED929FF749E6BE5A835E4C811B77"
        }
    ]
}
```

_response:_

```
{}
```

### Invoking Marketplace Services Endpoint Actions

MarketplaceServicesEndpoint is to receive the Seller information regarding the invoice and order delivery tracking. It is allowed to send partial invoices, thus forcing the informer to inform not only invoice values,  as well as the items he is sending in the partial invoice. 

<a name="a12"></a>
### Inform Invoice data

When the Seller makes the invoice, he must send the invoice information  - VTEX store Endpoint.

endpoint: ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ```
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_request:_

```
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

```
{
	"date": "2014-02-07T15:22:56.7612218-02:00", //data do recibo
	"orderId": "123543123",
	"receipt": "38e0e47da2934847b489216d208cfd91" //protocolo gerado, pode ser nulo
}
```
##### Payment capture

At the moment that the Marketplace receives the invoice, it's time to capture the payment.

endpoint: ``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/transactions/[transactionId]/settlement-request ```
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_request_
```json
  {value: 14890} //valor que deseja capturar
```
_response_
```json
{}
```

<a name="a13"></a>
### Inform Carrier Tracking

When the order is sent to the carrier, the tracking information will be sent to the Marketplace in marketplaceServicesEndpoint - Marketplace Endpoint

endpoint: ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ```
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_request:_

```
{
	"type": "Output",
	"invoiceNumber": "NFe-00001",
	"courier": "Correios", //transportadora
	"trackingNumber": "SR000987654321", /tracking number
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

```
{
	"date": "2014-02-07T15:22:56.7612218-02:00", //data do recibo
	"orderId": "123543123",
	"receipt": "38e0e47da2934847b489216d208cfd91" //protocolo gerado, pode ser nulo
}
```

<a name="a14"></a>
### Send cancellartion request

A cancellation request can be sent to the Marketplace in the marketplaceServicesEndpoint - endpoint provided by the marketplace.

endpoint: ``` https://marketplaceServicesEndpoint/pvt/orders/[marketplaceorderId]/cancel ```
verb: **GET**<br/>

##### Payment Cancellation 

At the moment that the Marketplace receives a payment cancellation request, it's time to cancel the payment transaction.

endpoint: ``` https://sandboxintegracao.vtexpayments.com.br/api/pvt/transactions/[transactionId]/cancellation-request ```
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_request_
```json
  {value: 14890} //valor que deseja cancelar, geralmente o total do pedido
```
_response_
```json
{}
```
