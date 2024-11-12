---
title: 'Integration guide for marketplaces - Seller non VTEX with payment on marketplace'
id: bNY99qbQ7mKsSMMuq2m4g
status: DRAFT
createdAt: 2017-10-14T22:00:43.107Z
updatedAt: 2022-05-03T18:21:29.769Z
publishedAt: 
firstPublishedAt: 2017-10-14T22:05:34.127Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: integration-guide-for-marketplaces-seller-non-vtex-with-payment
locale: en
legacySlug: integration-guide-for-marketplaces-seller-non-vtex-with-payment
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

>⚠️ Check out the updated version of this [marketplace integration guide](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-connector) in our Developer Portal. 

## Seller not VTEX Selling in the Marketplace Hosted on VTEX Receiving Payment

This document intends to assist in the integration of a seller not hosted on VTEX platform for a Marketplace hosted on VTEX platform. <br/>

In this model are integrated products (SKUs) commercial condition updating (price, inventory) of a SKU, besides the drop of an order, payment data (for Sellers Payments) and order dispatch authorization for the Seller.

> _Seller_ = Product owner, responsible for accomplish the delivery.<br/>
> _Marketplace_ = Showcase owner, responsible for exhibit and sell the SKU.<br/>
> _SKU_ = Item to be exchanged and sold between Seller and Marketplace.<br/>

## Actions that the Seller not hosted on VTEX shall do to implement the integration:

1. Implement notification call of price and inventory changing - Seller will call endpoint from VTEX. Every time the SKU changes the price and/or the inventory in the Seller, it must call this endpoint from the VTEX store, just communicating the change. When receiving this request the Marketplace will search the price and inventory in the Seller, in the commercial policy consultation method that we're gonna talk below.

 _Request Example:_<br/>
 ``` https://sandboxintegracao.vtexcommercestable.com.br/api/catalog_system/pvt/skuSeller/changenotification/[idSeller]/[idskuSeller] ```

 [Exemplo Completo: Enviar Notificação de Mudança de Preço e Estoque de SKU](#a1)

2. Implement call of SKU suggestion insertion - Seller will call endpoint from VTEX. Every time the change notification service returns SKU not found (404), the Seller must insert the suggestion in the VTEX store.

 _Request Example:_<br/>
 ``` https://sandboxintegracao.vtexcommercestable.com.br/api/catalog_system/pvt/sku/SuggestionInsertUpdatev2 ```

 [Exemplo Completo: Enviar Sugestão de SKU](#a2)

3. Implement endpoint for query of commercial policy (price and inventory) - VTEX calls endpoint from the Seller. The store hosted on VTEX will use this method to look for price and inventory in the Seller, not only indexing (catalog price and inventory) as well as in the simulation cart.

 _Request Example:_<br/>
 ``` https://[seller].com.br/pvt/orderForms/simulation?sc=1&an=mechantname ```

 > NOTE:
 >> The method that queries price and inventory and the method that simulates cart are the same, but for a cache construction reason, it requires two  implementations, one being GET and another POST. 
 >> This is one of the main integration methods, it needs to have performance and availability, because it has direct impact on the purchase closing in the Marketplace.

 [Exemplo Completo: Consultar Política Comercial](#a3) <br/>
 [Exemplo Completo: Simulação de Carrinho  - POST e GET](#a4) <br/>

4. Implement endpoint for parcelling queries - VTEX calls endpoint from the Seller. The store on VTEX will use this endpoint to query the parcelling offered by the Seller.

 _Request Example:_<br/>
 ``` https://[seller].com.br/pvt/installments/options?sc=1&an=mechantname ```

 > NOTE:
 >> It also needs to have performance and availability, because it has direct impact on the purchase closing in the Marketplace.

 [Exemplo Completo: Consultar Formas de Parcelamento no Seller](#a5)

5. Implement endpoint to receive an order - VTEX calls endpoint from the Seller. The store on VTEX will use this endpoint to put an order in the Seller.

 _Request Example:_<br/>
 ``` https://[seller].com.br/pvt/orders?sc=1&an=mechantname ```

 [Exemplo Completo: Colocar um Pedido no Seller](#a6)

6. Implement endpoint to receive payment data - VTEX calls endpoint from the Seller. The store on VTEX will use this endpoint to send the payment to the Seller.

 _Request Example:_<br/>
 ``` https://[seller].com.br/pvt/payments/?sc=1&an=mechantname ```

 > The payment data has the return url, where the Seller will notify the store on VTEX about the payment status , what means that the Seller must implement routine to inform payment status in the VTEX store.

 [Exemplo Completo: Colocar um Pagamento no Seller](#a7)

7. Implement endpoint to close the transaction and authorize dispatch -VTEX calls endpoint from the Seller. The store on VTEX will use this endpoint to notify the seller that already knows about the approved payment, and that seller already can deliver the order.

 _Request Example:_<br/>
 ``` https://[seller].com.br/pvt/orders/[orderid]/fulfill?sc=1&an=mechantname ```

 [Exemplo Completo: Autorizar o Seller a Despachar o Pedido](#a8)

8. Implement endpoint to receive an order cancellation request - VTEX calls endpoint from the Seller. The store on VTEX will use this endpoint to request the cancellation of an order in the Seller.

 _Request Example:_<br/>
 ``` https://[seller].com.br/pvt/orders/[orderId]/cancel?sc=1&an=mechantname' ```

 [Exemplo Completo: Solicitar Cancelamento de Pedido](#a81)

9. Implement routine to inform invoice data and delivery tracking of an order. In order's data is sent an endpoint of the Marketplace services, the Seller shall invoke this endpoint to inform invoice data as well as shipping company tracking data. The Seller still may request a cancellation of an order that has not sent the invoice yet.

 _exemplo da chamada:_<br/>
 ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ```<br/>
 ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/cancel ```<br/>

 [Exemplo Completo: Informar nota fiscal de um pedido](#a10)<br/>
 [Exemplo Completo: Informar tracking de um pedido](#a11)<br/>
 [Exemplo Completo: Solicitar cancelamento de um pedido sem nota fiscal](#a12)<br/>

 > IMPORTANT: <br/>
 > It is required that all Seller paths are under the same host. Example:
 >> ``` https://HOSTDOSELLER/pvt/orderForms/simulation ```<br/>
 >> ``` https://HOSTDOSELLER/pvt/installments/options ```<br/>
 >> ``` https://HOSTDOSELLER/pvt/orders ```<br/>
 >> ``` https://HOSTDOSELLER/pvt/payments/ ```<br/>
 >> ``` https://HOSTDOSELLER/pvt/orders/[orderid]/fulfill ```<br/>
 >> ``` https://HOSTDOSELLER/pvt/orders/[orderid]/cancel ```<br/>

 > WARNING:
 >> If the Seller doesn't have a PCI certified environment to receive the payment data, a new model must be used, that's the creation of an account on VTEX gateway to the Seller receive the payment transactions. In this model there is no need of the seller to implement the steps 4 and 6 of the flow.

---

## Below is a detailed step by step of each flow:

### Catalog Exchange and SKU price and inventory updating

SKU suggestion,  price and inventory updating. Every time there is a change on the price or in the inventory of a SKU in the Seller, the Seller must send a SKU change notification to the hosted store on VTEX, if the store returns in its service the response status 404, it means that the SKU doesn't exist in the store, then the Seller must send the SKU suggestion to the store. If the store returns in its service the response status 200 or 202, it means that the SKU exists in the marketplace, then the Marketplace goes in the Seller to query the new price and/or inventory.

> WARNING:
>> This model does not include images updates and description of a SKU after it's cataloged (accepted) in the Marketplace, it means that after the SKU is mapped and accepted by the Marketplace, only price and inventory will be dynamically updated.

_flow example:_

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

<a name="a1"><a/>
### Send Change Notification of SKU price and inventory

Every time there is a change on the price or in the inventory of a SKU in the Seller, the Seller must send a SKU change notification to the hosted store on VTEX.

<a title="notificar mudança de sku no marketplace" href="http://bridge.vtexlab.com.br/vtex.bridge.web_deploy/swagger/ui/index.html#!/CATALOG/CATALOG_Notification" target="_blank">[Developer] - Exemplo de Request de Notificação de Mudança - Endpoint da loja hospedada na VTEX</a>

<a name="a2"><a/>
### Send SKU Suggestion for Sale

When the notification service described above returns a response status 404 means that the SKU does not exists in the marketplace hosted on VTEX, then the seller sends a POST with the SKU data that wants to suggest to sell in the Marketplace. 

> The Seller makes the suggestions of his SKUs and the Marketplace administrator performs the mapping of brands and categories through the Marketplace administration page, then accepts or not the SKU suggestion sent by the Seller.

<a title="envia sugestão de sku" href="http://bridge.vtexlab.com.br/vtex.bridge.web_deploy/swagger/ui/index.html#!/CATALOG/CATALOG_Sugestion" target="_blank">[Developer] - Exemplo de Request de Inserção de Sugestão de SKU - Endpoint da loja hospedada na VTEX</a>

_POST example:_

```json
{
  "BrandId": null,
  "BrandName": "RAY BAN",
  "CategoryFullPath": "Oculos/Oculos de Sol/Masculino",
  "CategoryId": null,
  "EAN": [
    "0123456789123"
  ],
  "Height": 0.5,
  "Id": null,
  "Images": [
    {
      "ImageUrl": "http://www.cristalliotica.com.br/image/magictoolbox_cache/8c95d73fec130487c102a73bf1ab42ce/1/1/113/thumb450x450/2790576687/zoom-RAY%20BAN%204187%20Chris%206077_4V.jpg",
      "ImageName": "Principal",
      "FileId": null
    },
    {
      "ImageUrl": "http://www.cristalliotica.com.br/image/magictoolbox_cache/8c95d73fec130487c102a73bf1ab42ce/1/1/113/thumb450x450/2436023899/zoom-RAY%20BAN%204187%20Chris%206077_4V%201.jpg",
      "ImageName": "Lateral",
      "FileId": null
    }
  ],
  "IsAssociation": false,
  "IsKit": false,
  "IsProductSuggestion": false,
  "Length": 10,
  "ListPrice": 39900,
  "ModalId": null,
  "Price": 39900,
  "ProductDescription": "Oculos de sol feito de material de primira qualidade, com lentes anti reflexo e astes confortáveis",
  "ProductId": null,
  "ProductName": "Oculos de Sol RAY BAN",
  "ProductSpecifications": [
    {
      "FieldId": 0,
      "FieldName": "Origem",
      "FieldValueIds": null,
      "FieldValues": [
        "Importado"
      ]
    },
    {
      "FieldId": 0,
      "FieldName": "Capa Inclusa",
      "FieldValueIds": null,
      "FieldValues": [
        "Sim"
      ]
    }
  ],
  "ProductSupplementaryFields": null,
  "RefId": null, // obrigatório quando o EAN não for enviado
  "SellerId": "Cristalli",
  "SellerModifiedDate": null,
  "SellerStockKeepingUnitId": "cristalli00011", // identificador da SKU no Seller, trocar esse id para os testes
  "SkuId": null,
  "SkuName": "Oculos de Sol RAY BAN Lente Polarizada",
  "SkuSpecifications": [
    {
      "FieldId": 0,
      "FieldName": "Lente Polarizada",
      "FieldValueIds": null,
      "FieldValues": [
        "Sim"
      ]
    }
  ],
  "SkuSupplementaryFields": null,
  "SynonymousPropertyNames": null,
  "WeightKg": 0.2,
  "Width": 0.5
}
```

<a name="a3"><a/>
### SKU Price and Inventory updating

Every time there is a change on the price or in the inventory of a SKU in the Seller, the Seller must send a SKU change notification to the hosted store on VTEX. If the store returns in its service the response status 200 or 202, it means that the SKU exists in the store, then the store goes in the Seller to query the new price or inventory.

<a title="busca de condições comerciais no Seller" href="http://bridge.vtexlab.com.br/vtex.bridge.web_deploy/swagger/ui/index.html#!/FULFILLMENT/FULFILLMENT_Simulation" target="_blank">[Developer] - Exemplo de Request de Busca de Condições Comerciais - Endpoint do Seller</a>

_POST Example:_

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

QueryString com UrlEncode: <br/>
``` purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d&sc=1&an=shopfacilfastshop ``` <br/>
QueryString decodificada: <br/>
``` purchaseContext={"items":[{"id":"2002129","quantity":1,"seller":"1"}],"marketingData":null,"postalCode":"22011050","country":"BRA","selectedSla":null,"clientProfileData":null,"geoCoordinates":[]}&sc=1&an=shopfacilfastshop ``` <br/>

> WARNING
>> CEP and country are not required, although, if one of them is sent, the other one becomes required.

---

### Cart Simulation and Parcelling Consultation

This topic is intended to assist the integrator on the cart simulation, to query parcelling between the VTEX marketplace and a store that isn't VTEX. Simulate an order and query the parcelling ways.

> WARNING
>> These methods are used at the moment of purchase closing in the Marketplace, that's why it's very important these methods are performative and with a high availability, for a good conversion.

### In the Cart and Payment

When a product is inserted into the cart in the Marketplace that isn't VTEX, or the cart gets some editing, a simulation consultation of cart must be done in VTEX store to check the commercial conditions validity  (price, inventory, shipment and delivery SLAs). 

*Request flow example:*

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

<a name="a4"><a/>
### Cart Simulation (POST AND GET)

When there is a cart update, a **POST** call will be done at the Seller to check items availability - Seller Endpoint.

endpoint: ``` https://[sellerendpoint]/pvt/orderForms/simulation?sc=[idcanal]&an=[mechantname] ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

> WARNING
>> This method requires a GET implementation, that will be used to cache construction on VTEX platform side, avoiding unnecessary POST accesses. <br/>

> PARAMETROS
>> ?**sc**=[saleschannel id]**an**=[merchantname]. These parameters are used to the Seller manages which Marketplace os making requests on your services because once this model is implemented it will work to sell in any VTEX hosted Marketplace. This structure allows the Seller to work with any ammount of Marketplace at the same time.

>>>**sc**=1&**an**=marketplaceseller, where **sc** would be the campaign audiences (1 is default) and **an** would be the marketplace identifier. It's optional by the Seller.

_POST request:_

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

On the showcase and the product page description a **GET** request will be made on the Seller to check item availability - Seller Endpoint. 

endpoint: ``` https://[sellerendpoint]/pvt/orderForms/simulation?purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d&sc=idCanal&an=merchantName ```<br/>
verb: **GET**<br/>
Accept: **application/json**<br/>
Parametro: **purchaseContext** - Esse parâmetro na QueryString é o mesmo JSON do POST serializado e com URLEncode<br/>

_GET request:_

QueryString com UrlEncode: <br/>
``` purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d&sc=1&an=shopfacilfastshop ``` <br/>
QueryString decodificada: <br/>
``` purchaseContext={"items":[{"id":"2002129","quantity":1,"seller":"1"}],"marketingData":null,"postalCode":"22011050","country":"BRA","selectedSla":null,"clientProfileData":null,"geoCoordinates":[]}&sc=1&an=shopfacilfastshop ``` <br/>

_Via POST:_<br/>
``` https://[sellerendpoint]/pvt/orderForms/simulation ```<br/>
```json
{"items":[{"id":"13","quantity":1,"seller":"1"}],"country":"BRA"}
```

_Via GET:_<br/>
``` https://[sellerendpoint]/pvt/orderForms/simulation?purchaseContext=%7b%22items%22%3a%5b%7b%22id%22%3a%2213%22%2c%22quantity%22%3a1%2c%22seller%22%3a%221%22%7d%5d%2c%22country%22%3a%22BRA%22%7d ```

_response (GET e POST):_

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
	    	"merchantName": "shopfacilfastshop", // se o pagamento for no seller, retornar o que recebeu no parametro an.
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
			"merchantName": "shopfacilfastshop", // se o pagamento for no seller, retornar o que recebeu no parametro an.
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
> > Shipping value must be returned by consuted item. <br/>
> > When the CEP is not sent, the SLA will return a null array [] <br/>
> > No campo quantity, retornar o solicitado ou a quantidade que consegue atender. <br/>
> > On quantity field, return the requested or the quantity available.

<a name="a5"><a/>
### Check Installment Options

> Just implement this method to PCI Certified Sellers

When the customer goes to the payment section, a query to the Seller will be done to search for payment methods. The Seller **non** VTEX must previously know the payment ids of the VTEX MArketplace - Seller Endpoint.

> Most common payment ids on VTEX store gateways:
>> 1-American Express <br/>
>> 2-Visa <br/>
>> 3-Diners <br/>
>> 8-Hipercard <br/>
>> 4-Mastercard <br/>

endpoint: ``` https://[sellerendpoint]/pvt/installments/options?sc=[idcanal]&an=[mechantname] ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_request:_

```json
{
    "PaymentSystemsIds":[1,2,4], //ids das formas de pagamento na loja VTEX
    "SubtotalAsInt":27280, //total que se deseja parcelar
    "Items":[ //opcional
        {
        "PriceAsInt":24800, //preço do SKU
        "Quantity":1, //quantidade do SKU
        "Id":"1940388", //string, identificador do SKU no Seller.
        "SellerId":"1",
        "SalesChannel":1 //identificador do canal de vendas no Seller, caso exista
        }
    ],
    "PostalCode":"22051030" //CEP, opcional
}
```

_response:_

```json
[
	{
	  "paymentSystem": 2, // int -identificador da forma de pagamento
	  "name": "Visa",
	  "groupName": "creditCard",
	  "value": 27280, // int, valor solicitado para parcelar
	  "installments": [
		{
		  "count": 5, // int, numero de parcelas
		  "value": 5556, // int, valor da parecela
		  "interestRate": 170, // int, taxa de juros, será divido por 100
		  "hasInterestRate": true // boolean - tem juros?
		},
		{
		  "count": 4,
		  "value": 6820,
		  "interestRate": 0,
		  "hasInterestRate": false
		},
		{
		  "count": 3,
		  "value": 9093,
		  "interestRate": 0,
		  "hasInterestRate": false
		},
		{
		  "count": 2,
		  "value": 13640,
		  "interestRate": 0,
		  "hasInterestRate": false
		},
		{
		  "count": 1,
		  "value": 27280,
		  "interestRate": 0,
		  "hasInterestRate": false
		}
	  ]
	},
	{
	  "paymentSystem": 1,
	  "name": "American Express",
	  "groupName": "creditCard",
	  "value": 27280,
	  "installments": [
		{
		  "count": 5,
		  "value": 5456,
		  "interestRate": 0,
		  "hasInterestRate": false
		},
		{
		  "count": 4,
		  "value": 6820,
		  "interestRate": 0,
		  "hasInterestRate": false
		},
		{
		  "count": 3,
		  "value": 9093,
		  "interestRate": 0,
		  "hasInterestRate": false
		},
		{
		  "count": 2,
		  "value": 13640,
		  "interestRate": 0,
		  "hasInterestRate": false
		},
		{
		  "count": 1,
		  "value": 27280,
		  "interestRate": 0,
		  "hasInterestRate": false
		}
	  ]
	},
	{
	  "paymentSystem": 4,
	  "name": "Mastercard",
	  "groupName": "creditCard",
	  "value": 27280,
	  "installments": [
		{
		  "count": 5,
		  "value": 5456,
		  "interestRate": 0,
		  "hasInterestRate": false
		},
		{
		  "count": 4,
		  "value": 6820,
		  "interestRate": 0,
		  "hasInterestRate": false
		},
		{
		  "count": 3,
		  "value": 9093,
		  "interestRate": 0,
		  "hasInterestRate": false
		},
		{
		  "count": 2,
		  "value": 13640,
		  "interestRate": 0,
		  "hasInterestRate": false
		},
		{
		  "count": 1,
		  "value": 27280,
		  "interestRate": 0,
		  "hasInterestRate": false
		}
	  ]
	}
]
```

---

### Send Order and Inform Payment

This topic is intended to assist the Seller non VTEX to receive a order, the payment, and to communicate the payment status update.

> WARNING:
>> If the Seller doesn't have a certified environment to receive payment data, a new model must be used, which is the creation a new VTEX gateway account to the Seller receive payment transactions.

_exemplo do fluxo de chamadas de descida de pedido, pagamento e atualização de status de pagamento:_

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

<a name="a6"><a/>
### Send Order

When the order is closed in a VTEX marketplace, a POST is done on the Seller, so it can receive the order request - Seller Endpoint.

endpoint: ``` https://sellerendpoint/pvt/orders?sc=[idcanal]&an=[mechantname] ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_request:_

```json
[
  {
    "marketplaceOrderId": "959311095", // identificador do pedido no market place
    "marketplaceServicesEndpoint":"http://sandboxintegracao.vtexcommercestable.com.br/api/oms", // leia o tópico Invocando MarketplaceServicesEndpoint Actions
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
      "email": "26e6a2f59cef4f8bb09882d7cf758d71@ct.vtex.com.br", // e-mail do cliente
      "firstName": "Jonas", // primeiro nome do ciente
      "lastName": "Alves de Oliveira", // sobrenome do cliente
      "documentType": null,
      "document": "3244239851", // documento
      "phone": "+552123232323", // fone
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
    "paymentData":{
		"merchantName":"shopfacilfastshop" //identificador do marketplaceseller
	}
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
   "paymentData":{
		"merchantName":"shopfacilfastshop", // devolver o parametro an recebido no request
		"merchantPaymentReferenceId":"123543123" // inteiro, id do pagamento, número que será enviado junto com o pagamento para conciliação.
	}
  }
]

```

> NOTE:
>> Return a integer identifier paymentData.merchantPaymentReferenceId field that will be used in the future on the payment mapping with the order. The value returned in this field will identify this order payment.

##### ERRORS TREATMENT:

Everytime an error occurs, it must be sent a JSON as we may check below:

_Error response JSON:_

```json
{
	"error": {
	"code": "1",
	"message": "O verbo 'GET' não é compatível com a rota '/api/fulfillment/pvt/orders'",
	"exception": null
	}
}
```
>> On the error, it must be sent the following info on the header:<br/>
**x-vtex-error-code** error code and<br/>
**x-vtex-error-message** message error<br/>

| code  |       message                                     |
|:------|:--------------------------------------------------|
|ORD021 |SKU not found                                      |
|FMT002 |Unavailable inventory                              |
|FMT009 |Duplicate order                                    |
|FMT010 |Shipping method not available                      |
|ORD008 |Unexpected error on the order creation + Message   |

<a name="a7"><a/>
###Send Payment

> Just implement this method on PCI certified Sellers

When the order payment is informed on the VTEX hosted marketplace, a POST will be done at the Seller sending the data related to the order payment = Seller Endpoint.

endpoint: ``` https://sellerendpoint/pvt/payments/?sc=[idcanal]&an=[mechantname] ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

_request:_

```json
{
  "referenceId": "1075", // merchantPaymentReferenceId retornado no request do place order
  "transactionId": "9F8EDAE2DEB540ABB66D97E8C8E3975C", // identificador da transação
  "paymentData": {
    "id": "8051344EF1D240839E408FFF79F847CE", // identificador do pagamento
    "paymentSystem": 2, // identificador da forma depagamento
    "cardNumber": "444433332221111", // numero do cartão
    "cardHolder": "Jonas Bolognim",  // nome do cartão
    "expiryMonth": 4, // mes de expiração
    "expiryYear": 2021, // ano de expiração
    "value": 33594, // valor do pagamento
    "installments": 2, // numero de parcelas
    "cvv2": "071",  // codigo verificador
    "document": "088.965.818-85", //opcional, documento do pagador (será enviado se antifraude ligado)
    "documentType": null //opcicional
  },
  "callbackUrl": "https://shopfacilfastshop.vtexpayments.com.br/api/pvt/callback/vtxstd/transactions/9F8EDAE2DEB540ABB66D97E8C8E3975C/payments/8051344EF1D240839E408FFF79F847CE/return", //url para falar de volta com o gateway de pagamento.
  "shoppingCart": { //resumo do carrinho
    "items": [
      {
        "id": "OB7727437",
        "name": "Capa Defender para Galaxy S4 em Policarbonato e TPU Cinza e Branca - Otter box - 7727437 CNZ/BCO",
        "value": 28113,
        "quantity": 1,
        "priceTags": [],
        "components": null,
        "shippingDiscount": 0,
        "discount": 0,
        "refId": null,
        "productId": null,
        "sellingPrice": 281.13
      }
    ],
    "freight": 4724, //valor do frete
    "orderUrl": "http://sandboxintegracao.vtexcommercebeta.com.br/admin/checkout/#/orders?q=545843519913",
    "tax": 0, //opcional, impostos
    "shippingdate": null, //opcional, data de entrega
    "shippingestimated": "21bd" //dias estimados para entrega
  }
}
```
> IMPORTANT!
>> The "paymentData.merchantPaymentReferenceId" field comes as "referenceId" on the payment data, and it is useful to relate payment to order.

When receiving the POST with the payment data, the Seller must synchronously answer with "undefined" status while there isn't information about the payment process result (anti-fraud, authorization and approve). The payment status must be informed through the callback URL (assynchronous response),

_Payment CallbackUrl POST example:_

```json
{
  	"paymentId" : "F5C1A4E20D3B4E07B7E871F5B5BC9F91", // string, obrigatorio, "paymentData.Id", recebido no POST de pagamento
	"status" : "undefined",    // string, obrigatorio, [approved | denied | undefined]
  	"authorizationId": "", // string, identificador da autorização quando aprovado.
  	"bankIssueInvoiceUrl":"urldoboleto" // string, url do boleto bancario
}
```

> NOTE:
>> Payment Data response POST must be assybchronous

<a name="a8"><a/>
### Send authorization to dispatch

When the order payment is completed on the Seller, a POST must be done on payment "callbackUtl", informing payment success ("status":"approved"). At this moment, the Marketplace hosted on VTEXsends a authorization to dispatch the order on the Seller - Seller Endpoint.

endpoint: ``` https://Sellerendpoint/pvt/orders/[orderid]/fulfill?sc=[idcanal]&an=[mechantname] ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

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

> Payment Denied on the Seller
>> Send on the assynchronous return URL the POST with "denied" status.

<a name="a81"><a/>
### Send Order Cancellation Request 

When an order payment is denied on the Seller, a POST must be done on the payment "callbackUrl", informing payment denied ("status":"denied"), at this moment the Marketplace hosted on VTEX sends an order cancellation requesnt on the Seller - Seller Endpoint.

endpoint: ``` https://Sellerendpoint/pvt/orders/[orderid]/cancel?sc=[idcanal]&an=[mechantname] ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

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

MarketplaceServicesEndpoint is to receive the Seller information regarding the invoice and order delivery tracking. It is allowed to send partial invoices, thus forcing the informer to inform not only invoice values, as well as the items he is sending in the partial invoice. The request on VTEX will only proceed to the INVOICED status when the total value of all invoices of an order got sent.

<a name="a10"><a/>
### Inform Invoice data

When the Seller makes the invoice, he must send the invoice information - endpoint VTEX platform.

endpoint: ```https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice```
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>
Parametro: **marketplaceorderId** // identificador do pedido no Marketplace<br/>

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

When a Seller delivers the order to a carrier, it must informs the tracking information - VTEX platform Endpoint.

endpoint: ``` https://marketplaceServicesEndpoint/pub/orders/[marketplaceorderId]/invoice ```<br/>
verb: **POST**<br/>
Content-Type: **application/json**<br/>
Accept: **application/json**<br/>

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

> A Nota Fiscal e o Tracking de rastreamento podem ser enviados na mesma chamada, basta preencher todos os dados do POST.

<a name="a12"><a/>
### Send Cancellation Request

A cancellation request can be sent if the order is in a state that's allowed to cancel it, the order will be canceled - endpoint VTEX platform.

endpoint: ``` https://marketplaceServicesEndpoint/pvt/orders/[marketplaceorderId]/cancel ```<br/>
verb: **GET**<br/>
