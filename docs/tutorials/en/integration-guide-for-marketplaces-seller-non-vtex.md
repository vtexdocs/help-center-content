---
title: 'Integration guide for marketplaces - Seller non VTEX'
id: yMji0ow0rQuYgQsg26Kus
status: DRAFT
createdAt: 2017-10-14T21:55:39.633Z
updatedAt: 2023-08-18T19:03:38.625Z
publishedAt: 
firstPublishedAt: 2017-10-14T22:00:36.965Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: integration-guide-for-marketplaces-seller-non-vtex
locale: en
legacySlug: integration-guide-for-marketplaces-seller-non-vtex
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

>⚠️ Check out the updated version of this [marketplace integration guide](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-connector) in our Developer Portal. 

## Seller non VTEX Selling in Marketplace Hosted on VTEX

This document is intended to assist in the integration of a seller not hosted on VTEX platform for a Marketplace hosted on VTEX platform. In this model are integrated products (SKUs), commercial conditions updating (price, inventory) of a SKU, besides the drop of an order and dispatch authorization sending of an order to the Seller.

> _Seller_ = Product owner, responsible for accomplish the delivery.  
> _Marketplace_ = Showcase owner, responsible for exhibit and sell the SKU.  
> _SKU_ = Item to be exchanged and sold between Seller and Marketplace.  

### Actions that the Seller not hosted on VTEX shall do to implement the integration:

1. Implement notification call of price and inventory changing - Seller will call endpoint from VTEX. Every time the SKU changes the price or the inventory in the Seller, it must call this endpoint from the VTEX store, just communicating the change. When receiving this request the Marketplace will search the price and inventory in the Seller, in the commercial policy consultation method that we're gonna talk below.

    _Request Example:  
    ``` https://sandboxintegracao.vtexcommercestable.com.br/api/catalog_system/pvt/skuSeller/changenotification/[idSeller]/[idskuSeller] ```

    [Complete Example: Send notification of price and inventory change of SKU](#a1)

2. Implement call of SKU suggestion insertion - Seller will call endpoint from VTEX. Every time the change notification service returns SKU not found (404), the Seller must insert the suggestion in the VTEX store.

    _Request Example:  
   `https://api.vtex.com/{accountName}/suggestions/{sellerId}/{sellerskuid}`

    [Complete Example: Send suggestion of SKU](#a2)  

3. Implement endpoint for query of commercial policy (price and inventory) - VTEX calls endpoint from the Seller.  
    The store hosted on VTEX will use this method to look for price and inventory in the Seller, not only indexing (catalog price and inventory) as well as in the simulation cart.  

    _Request Example:  
    ```https://[seller].com.br/pvt/orderForms/simulation?sc=1&an=mechantname```  
> NOTE:  
> The method that queries price and inventory and the method that simulates cart are the same, but for a cache construction reason, it requires two  implementations, one being GET and another POST.  
> This is one of the main integration methods, it needs to have performance and availability, because it has direct impact on the purchase closing in the Marketplace.

    [Exemplo Completo: Consultar Política Comercial](#a3)  
    [Exemplo Completo: Simulação de Carrinho  - POST e GET](#a4)

4. Implement endpoint to receive an order - VTEX calls endpoint from the Seller. The store on VTEX will use this endpoint to put an order in the Seller.

    _Request Example:  
    ``` https://[seller].com.br/pvt/orders?sc=1&an=mechantname ```

    [Exemplo Completo: Colocar um Pedido no Seller](#a6)

5. Implement endpoint to authorize dispatch - VTEX calls endpoint from the Seller. The store on VTEX will use this endpoint to notify the Seller that it already can deliver the order.

    _Request Example:  
    ``` https://[seller].com.br/pvt/orders/[orderid]/fulfill?sc=1&an=mechantname ```

    [Exemplo Completo: Autorizar o Seller a Despachar o Pedido](#a8)

6. Implement routine to inform invoice data and delivery tracking of an order. In order's data is sent an endpoint of the Marketplace services, the Seller shall invoke this endpoint to inform invoice data as well as shipping company tracking data. The Seller still may request a cancellation of an order that has not sent the invoice yet.

    _Request Example:  
    ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ```  
    ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/cancel ```

    [Exemplo Completo: Informar nota fiscal de um pedido](#a10)  
    [Exemplo Completo: Informar tracking de um pedido](#a11)  
    [Exemplo Completo: Solicitar cancelamento de um pedido sem nota fiscal](#a12)

7. Registration validation Route - Assist the diagnosis of integration problems that have some cause, configuration incompatibility between those who are involved (Marketplace and Seller) - for the future, disconsider it.

---

## Below is a detailed step by step of each flow:

### Catalog Exchange and SKU price and inventory updating

SKU suggestion,  price and inventory updating. Every time there is a change on the price or in the inventory of a SKU in the Seller, the Seller must send a SKU change notification to the hosted store on VTEX, if the store returns in its service the response status 404, it means that the SKU doesn't exist in the store, then the Seller must send the SKU suggestion to the store. If the store returns in its service the response status 200 or 202, it means that the SKU exists in the marketplace, then the Marketplace goes in the Seller to query the new price and/or inventory.

> WARNING:  
> This model does not include images updates and description of a SKU after it's cataloged (accepted) in the Marketplace, it means that after the SKU is mapped and accepted by the Marketplace, only price and inventory will be dynamically updated.

_Flow Example:_

![](https://images.contentful.com/alneenqid6w5/6as0Pc3PGwQOYg4m8gOKY0/a08a7717551cb6649e2a15292254a096/sku-sugestion-seller-nao-vtex.png)

<a name="a1"><a/>
### Send Change Notification of SKU price and inventory

Every time there is a change on the price or in the inventory of a SKU in the Seller, the Seller must send a SKU change notification to the hosted store on VTEX.

<a title="notificar mudança de sku no marketplace" href="http://bridge.vtexlab.com.br/vtex.bridge.web_deploy/swagger/ui/index.html#!/CATALOG/CATALOG_Notification" target="_blank">[Developer] - Exemplo de Request de Notificação de Mudança - Endpoint da loja hospedada na VTEX</a>

<a name="a2"><a/>
### Enviar Sugestão de SKU para Venda

When the notification service above returns a **404 response status**, it means that the SKU **does not exist** on the Marketplace hosted on VTEX, so that the Seller sends a POST with the SKU data that it suggests to sell on the Marketplace.

> The seller give the suggestions of its SKUs and the Marketplace admin doeas the category and brand mapping through its platform, and the admin may accpet or reject the SKU suggestion sent by the Seller.

<a title="envia sugestão de sku" href="https://developers.vtex.com/reference#send" target="_blank">[Developer] - Exemplo de Request de Inserção de Sugestão de SKU - Endpoint da loja hospedada na VTEX</a>

_exemplo do PUT de dados:_

```json
{
    "ProductId": 321,
    "ProductName": "Product sample",
    "NameComplete": "My complete product name?",
    "ProductDescription": "sample",
    "BrandName": "Brand 1",
    "SkuName": "Sku sample",
    "SellerId": null,
    "Height": 1,
    "Width": 1,
    "Length": 1,
    "WeightKg": 1,
    "Updated": null,
    "RefId": "REFID123",
    "SellerStockKeepingUnitId": 567,
    "CategoryFullPath": "Category 1",
    "Images": [
        {
            "imageName": "Principal",
            "imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
        }
    ],
    "ProductSpecifications": [
        {
            "fieldName": "prodspec1",
            "fieldValue": "value1"
        }
    ],
    "SkuSpecifications": [
        {
            "fieldName": "skuspec1",
            "fieldValue": "value2"
        }
    ],
    "EAN": "EAN123",
    "MeasurementUnit": "un",
    "UnitMultiplier": 1,
    "AvailableQuantity": 111,
    "Pricing": {
        "Currency": "BRL",
        "SalePrice": 399,
        "CurrencySymbol": "R$"
    }
}
```

<a name="a3"><a/>
### SKU Price and Inventory updating

Every time there is a change on the price or in the inventory of a SKU in the Seller, the Seller must send a SKU change notification to the hosted store on VTEX. If the store returns in its service the response status 200 or 202, it means that the SKU exists in the store, then the store goes in the Seller to query the new price or inventory.

<a title="busca de condições comerciais no Seller" href="http://bridge.vtexlab.com.br/vtex.bridge.web_deploy/swagger/ui/index.html#!/FULFILLMENT/FULFILLMENT_Simulation" target="_blank">[Developer] - Exemplo de Request de Busca de Condições Comerciais - Endpoint do Seller</a>

_POST example:_

```json
{
  "items": [
    {
      "id": "2000037",
      "quantity": 1,
      "Seller": "1"
    },
    {
      "id": "34562",
      "quantity": 2,
      "Seller": "1"
    }
  ],
  "marketingData": null,
  "postalCode": "22051030", //não obrigatório
  "country": "BRA", //não obrigatório
  "selectedSla": null,
  "clientProfileData": null,
  "geoCoordinates": []
}
```

_GET Example:_

QueryString com UrlEncode:  
``` purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d&sc=1&an=shopfacilfastshop ```  
QueryString decodificada:  
``` purchaseContext={"items":[{"id":"2002129","quantity":1,"seller":"1"}],"marketingData":null,"postalCode":"22011050","country":"BRA","selectedSla":null,"clientProfileData":null,"geoCoordinates":[]}&sc=1&an=shopfacilfastshop ```  

> WARNING  
> CEP and country are not required, although, if one of them is sent, the other one becomes required.

---

### Cart Simulation

This topic is intended to assist the integrator on the cart simulation between the Marketplace hosted on VTEX and the Seller that is not VTEX. When a product (SKU) is inserted into the cart in VTEX marketplace, or the cart gets some editing, a cart simulation query is made in the Seller to check the commercial conditions validity (price, inventory, shipment and SLAs delivery).

> WARNING  
> These methods are used at the moment of order placed stage on the Marketplace, therefore, the high performance of theses methods is extremey important.

_example of a cart flow request:_

![](https://images.contentful.com/alneenqid6w5/3gmJwn1ux22muGySkwMWQc/9c058728ea65151c185cc7bc261bdf21/fechamento-fluxo-nao-vtex.png)

<a name="a4"><a/>
### Cart Simulation Update

When there is a cart update, a request will be made on the Seller to check item availability - Seller Endpoint.

endpoint: ```https://[sellerendpoint]/pvt/orderForms/simulation?sc=[idcanal]&an=[mechantname]```  
verb: **POST**  
Content-Type: **application/json**  
Accept: **application/json**  

> WARNING  
> This method requires a GET implementation that will be used to cache construction on VTEX platform side, avoiding unnecessary POST accesses.  
> 
> PARAMETERS  
> ?**sc**=[saleschannel id]**an**=[merchantname]. These parameters are used to the Seller manages which Marketplace os making requests on your services because once this model is implemented it will work to sell in any VTEX hosted Marketplace. This structure allows the Seller to work with any ammount of Marketplace at the same time.
> 
>**sc**=1&**an**=marketplaceseller, where **sc** would be the campaign (1 is default) and **an** would be the marketplace identifier. It's optional by the Seller.

_POST Request:_

```json
{
  "items": [
    {
      "id": "2000037", //identificador do item no Seller
      "quantity": 1, //quantidade desejada
      "seller": "1"
    },
    {
      "id": "34562",
      "quantity": 2,
      "seller": "1"
    }
  ],
  "marketingData": null,
  "postalCode": "22051030", // não obrigatório
  "country": "BRA", // não obrigatório
  "selectedSla": null,
  "clientProfileData": null,
  "geoCoordinates": []
}
```
O the showcase and the product page description a **GET** request will be made on the Seller to check item availability - Seller Endpoint. 

endpoint: ``` https://[sellerendpoint]/pvt/orderForms/simulation?purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d&sc=idCanal&an=merchantName ```  
verb: **GET**  
Accept: **application/json**  
Parametro: **purchaseContext** - Esse parâmetro na QueryString é o mesmo JSON do POST serializado e com URLEncode  

_request Por GET:_

QueryString com UrlEncode:  
``` purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d&sc=1&an=shopfacilfastshop ```  

QueryString decodificada:  
``` purchaseContext={"items":[{"id":"2002129","quantity":1,"seller":"1"}],"marketingData":null,"postalCode":"22011050","country":"BRA","selectedSla":null,"clientProfileData":null,"geoCoordinates":[]}&sc=1&an=shopfacilfastshop ```  

_Via POST:  
``` https://[sellerendpoint]/pvt/orderForms/simulation ```  
```json
{"items":[{"id":"13","quantity":1,"seller":"1"}],"country":"BRA"}
```

_Via GET:  
``` https://[sellerendpoint]/pvt/orderForms/simulation?purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d ```

_response (POST e GET):_

```json
{
	"items": [ //pode vir um array vazio caso item insidponivel
	    {
	        "id": "287611",// obrigatório, string - identificador so SKU
	        "requestIndex": 0, // obrigatório, int - representa a posição desse item no array original (request)
	        "price": 7390, // obrigatório, int - preço por, os dois dígitos menos significativos são os centavos
	        "listPrice": 7490, // obrigatório, int - preço de, os dois dígitos menos significativos são os centavos
	        "quantity": 1, // obrigatório, int - retornar a quantidade solicitada ou a quantidade que consegue atender
	        "seller": "1", // obrigatório, string - retonar o que foi passado no request
	        "priceValidUntil": "2014-03-01T22:58:28.143"  // pode ser nulo, string - data de validade do preço.
	        "offerings":[  //array opcional de ofertas, porém não pode ser nulo: enviar array vazio.
	            {
	                "type":"Garantia", //obrigatório, string - tipo do serviço
	                "id":"5",  //obrigatório, string - identificador do serviço
	                "name":"Garantia de 1 ano", //obrigatório, string - nome do serviço
	                "price":10000  //obrigatório, int - preço do serviço, os dois dígitos menos significativos são os centavos
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
	        "price": 890,
	        "listPrice": 990,
	        "quantity": 5,
	        "seller": "1",
	        "priceValidUntil": null
	    }
	],
	"logisticsInfo": [ // array de informações, quando produtos indisponíveis retornar vazio []
	    {
	        "itemIndex": 0, // obrigatório, int - index do array de items
	        "stockBalance": 99, // obrigatório, int - estoque que atende
	        "quantity": 1, // obrigatório, int - retornar a quantidade solicitada ou a quantidade que consegue atender
	        "shipsTo": [ "BRA"],  // obrigatório, array de string com as siglas dos países de entrega
	        "slas": [  // obrigatório,  pode ser um array vazio na ausencia de CEP.
	            {
	                "id": "Expressa",  //obrigatório, string - identificador tipo entrega
	                "name": "Entrega Expressa",// obrigatório, string - nome do tipo entrega
	                "shippingEstimate": "2bd", // obrigatório, string - doas estimados para a entrega, bd == "business days"
	                "price": 1000 // obrigatório, int - custo da entrega, os dois dígitos menos significativos são os centavos
	                "availableDeliveryWindows": [  // opcional, janelas de entrega,  podendo ser um array vazio
	                ]
	            },
	            {
	                "id": "Agendada",
	                "name": "Entrega Agendada",
	                "shippingEstimate": "5d",  // d - days, bd -business days
	                "price": 800,
	                "availableDeliveryWindows": [
	                     {
	                        "startDateUtc": "2013-02-04T08:00:00+00:00",  // date, obrigatório se for enviado delivery window
	                        "endDateUtc": "2013-02-04T13:00:00+00:00", // date, obrigatório se for enviado delivery window
	                        "price": 0 // int, obrigatório se for enviado delivery window - o valor adicional da entrega agendada
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
	                "shippingEstimate": "5bd", // bd - business days
	                "price": 200
	            }
	        ]
	    }
	],
	"country":"BRA",   // string, nulo se não enviado
	"postalCode":"22251-030"   // string, nulo se não enviado
}
```

> WARNING!  
> Shipping value must be returned by consuted item.  
> When the CEP is not sent, the SLA will return a null array []  
> On quantity field, return the requested or the quantity available.

### Send order and authorize dispatch

This topic is intended to assist the Seller to receive a order from the Marketplace, and recieve a authorization to dispatch the order.

_flow example:_

![](https://images.contentful.com/alneenqid6w5/74yZ8Wbwc0K4MGm0ISsqGe/3ce44e3feb867e4828b9dd4eec5cda9f/order-seller-nao-vtex.png)

<a name="a6"><a/>
### Sending Order

When the order is finalized ath the Marketplace hosted on VTEX, a POST is made on the Seller, so that this Seller may receive a order request - Seller Endpoint.

endpoint: ```https://sellerendpoint/pvt/orders?sc=[idcanal]&an=[mechantname]```  
verb: **POST**  
Content-Type: **application/json**  
Accept: **application/json**  

_request:_

```json
[
  {
    "marketplaceOrderId": "959311095", // identificador do pedido no market place
    "marketplaceServicesEndpoint": "https://marketplaceservicesendpoint/", // leia o tópico Invocando MarketplaceServicesEndpoint Actions
    "marketplacePaymentValue": 11080, //valor que o marketplace se compromete a pagar para o Seller
    "items": [
      {
        "id": "2002495", // identificadro da SKU no Seller
        "quantity": 1, // quantidade comprada
        "Seller": "1",
        "commission": 0,
        "freightCommission": 0,
        "price": 9990, // preço da SKU
        "bundleItems": [], // serviços. Ex: embalagem pra presente.
        "itemAttachment": {
          "name": null,
          "content": {}
        },
        "attachments": [], // customização do item, Ex:camisa com o numero 10
        "priceTags": [],
        "measurementUnit": null, // unidade de medida
        "unitMultiplier": 0, // unidade multipladora, Ex: venda por quilo
        "isGift": false
      }
    ],
    "clientProfileData": {
      "id": "clientProfileData",
      "email": "32172239852@gmail.com.br", // e-mail do cliente
      "firstName": "Jonas", // primeiro nome do ciente
      "lastName": "Alves de Oliveira", // sobrenome do cliente
      "documentType": null,
      "document": "3244239851", // documento
      "phone": "399271258", // fone
      "corporateName": null, // se pessoa juridica, razao social
      "tradeName": null, // se pessoa juridica, nome fantasia
      "corporateDocument": null, // se pessoa juridica, documento
      "stateInscription": null, // se pessoa juridica, iscrição estadual
      "corporatePhone": null, // se pessoa juridica, fone
      "isCorporate": false, // é pessoa juridica?
      "userProfileId": null
    },
    "shippingData": {
      "id": "shippingData",
      "address": {
        "addressType": "Residencial", // tipo do endereço
        "receiverName": "Jonas Alves de Oliveira", // nome do destinatário
        "addressId": "Casa", // identificador do endereço
        "postalCode": "13476103", // código postal
        "city": "Americana", // cidade
        "state": "SP", // unidade federativa
        "country": "BRA", // país
        "street": "JOÃO DAMÁZIO GOMES", // logradouro
        "number": "311", // número do endereço
        "neighborhood": "SÃO JOSÉ", // bairro
        "complement": null, // complemnto
        "reference": "Bairro Praia Azul / Posto de Saúde 17", // refrencia
        "geoCoordinates": []
      },
      "logisticsInfo": [
        {
          "itemIndex": 0, // index do array de itens
          "selectedSla": "Normal", // tipo de entrega
          "lockTTL": "8d", // dias de reserva
          "shippingEstimate": "7d", // dias estimados para a entrega
          "price": 1090, // preço da entrega
          "deliveryWindow": null // janela de entrega
        }
      ]
    },
    "openTextField": null, //opcional, string
    "marketingData": {//opcional, pode ser null
      "utmSource": "buscape",
      "utmMedium": "",
      "utmCampaign": "fretegratis",
      "utmiPage": "_",
      "utmiPart": "BuscaFullText",
      "utmiCampaign": "capa artscase para iphone 5 e 5s slimfit rachel taylor contemporary colorida   padrao"
    },
    "paymentData":null
  }
]
```

_response:_

```json
[
  {
    "marketplaceOrderId": "959311095",
    "orderId": "123543123", //** - identificador do pedido inserido no Seller
    "followUpEmail": "75c70c09dbb3498c9b3bbdee59bf0687@ct.vtex.com.br",
    "items": [
      {
        "id": "2002495",
        "quantity": 1,
        "Seller": "1",
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
]

```

_exemplo do retorno de Erro:_

```json
{
	"error": {
	"code": "1",
	"message": "O verbo 'GET' não é compatível com a rota '/api/fulfillment/pvt/orders'",
	"exception": null
	}
}
```

<a name="a8"><a/>
### Sending authorization to dispatch

When a the order payment is completed at the VTEX Marketplace (valid payment), it sends to the Seller a authorization to progress the order delivery process - Seller Endpoint.

endpoint: ```https://Sellerendpoint/pvt/orders/[orderid]/fulfill?sc=[idcanal]&an=[mechantname]```  
verb: **POST**  
Content-Type: **application/json**  
Accept: **application/json**  

_request:_

```json
{
	"marketplaceOrderId": "959311095" // identificador do pedido originado no Marketplace
}
```

_response:_

```json
{
	"date": "2014-10-06 18:52:00",
	"marketplaceOrderId": "959311095",
	"orderId": "123543123",
	"receipt": "e39d05f9-0c54-4469-a626-8bb5cff169f8",
}
```

## Invoking Marketplace Services Endpoint Actions

The MarketplaceServicesEndpoint is to receive the Seller information regarding the invoice and order delivery tracking. It is allowed to send partial invoices, thus forcing the informer to inform not only invoice values,  as well as the items he is sending in the partial invoice. The request on VTEX will only proceed to the BILLED status when the total value of all invoices of an order got sent.

<a name="a10"><a/>
### Inform Invoice data

When the Seller makes the invoice, he must send the invoice information  - endpoint VTEX platform.

endpoint: ```https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice```
verb: **POST**
Content-Type: **application/json**
Accept: **application/json**
Parametro: **orderId** // id do pedido no Seller

_request:_

```json
{
    "type": "Output", // Output|Input (venda|devolução)
    "invoiceNumber": "NFe-00001", // numero da nota fiscal
    "courier": "", // quando é nota fiscal, dados de tracking vem vazio
    "trackingNumber": "", // quando é nota fiscal, dados de tracking vem vazio
    "trackingUrl": "",// quando é nota fiscal, dados de tracking vem vazio
    "items": [ // itens da nota
      {
        "id": "345117",
        "quantity": 1,
        "price": 9003
      }
    ],
    "issuanceDate": "2013-11-21T00:00:00", // data de emissao da nota
    "invoiceValue": 9508 // valor da nota
}
```

_response:_

```json
{
    "date": "2014-02-07T15:22:56.7612218-02:00", // data do recibo
    "orderId": "123543123",
    "receipt": "38e0e47da2934847b489216d208cfd91" // protocolo gerado, pode ser nulo
}
```
<a name="a11"><a/>
### Inform Delivery Tracking

When the Seller delivers the order to a carrier, it must inform trancking information - VTEX platform Endpoint.

endpoint: ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ```  
verb: **POST**  
Content-Type: **application/json**  
Accept: **application/json**  

_request:_

```json
{
    "type": "Output",
    "invoiceNumber": "NFe-00001",
    "courier": "Correios", // transportadora
    "trackingNumber": "SR000987654321", // identificador de rastreamentor
    "trackingUrl": "http://traking.correios.com.br/sedex/SR000987654321", // url de rastreamento
    "items": [
      {
        "id": "345117",
        "quantity": 1,
        "price": 9003
      }
    ],
    "issuanceDate": "2013-11-21T00:00:00", // formato esperado
    "invoiceValue": 9508
}
```

_response:_

```json
{
    "date": "2014-02-07T15:22:56.7612218-02:00", // data do recebimento
    "orderId": "123543123",
    "receipt": "38e0e47da2934847b489216d208cfd91" // protocolo gerado confirmando o recebimento do POST (GUID)
}
```

> A Nota Fiscal e o Tracking podem ser enviados na mesma chamada, basta preencher todos os dados do POST.

<a name="a12"><a/>
### Send Cancellation Request

A cancellation request can be sent if the order is in a state that's allowed to cancel it, the order will be canceled - endpoint VTEX  platform.

endpoint: ``` https://marketplaceServicesEndpoint/pvt/orders/[marketplaceorderId]/cancel ```  
verb: **POST**  

> To cancel a order with a invoice already sent, it must be sent a new invoice with full order value.
