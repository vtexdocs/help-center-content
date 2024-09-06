---
title: 'How is the TaxHub App structure in JS'
id: 6hY8wkf8LCCS4o0KAaKUu0
status: ARCHIVED
createdAt: 2017-07-26T17:04:34.946Z
updatedAt: 2020-05-25T19:10:26.819Z
publishedAt: 
firstPublishedAt: 2017-07-26T17:52:25.165Z
contentType: tutorial
productTeam: Others
author: 2Y2pnNkWfSoUMMYcwemq4A
slug: how-is-the-taxhub-app-structure-in-js
locale: en
legacySlug: how-is-the-taxhub-app-structure-in-js
subcategoryId: unknown-subcategory
---

__Introduction__

The purpose of this document is to explain and give examples of the APP required to be developed and installed in TaxHub, so that it is possible to read and apply, to the checkout, the taxes established and calculated in the APP.

Important points before starting:

- Set up address in the distribution centers. They will be used to calculate the originShipping
- Whenever an app is installed in TaxHub of the VTEX module, the Checkout will always call it in any purchase section to calculate taxes, particularly the JURISDICTION file.
- Since the Checkout calls the TaxHub, the latter generates the communication between the App (node.js installed in TaxHub) and the Checkout. 
- In the purchase session, the TaxHub will perform the requests and send purchase data to the App to communicate with ERP and Middleware;
- With all information captured in the App through the requests, the JS will be put together so that the App itself can perform the communication in the next steps;
- All responses are expected as objects by the TaxHub, and it is important to work exactly with information required by the App, since the following requests always work based on what was returned. In case the option is to return all empty, the TaxHub will accept it, but it will return everything empty in the next steps. 

A jurisdiction.zip. file should be created; the zip structure follows the same standard and the files will be called in the order indicated below for calculation. 

Define the name of the initial file with the same country of the store. 
Example: argentina.js or mexico.js, the .js file of the main folder and folder must have the same name. The IVA folder can have any name. 

The call order should be also followed for development:
![TaxHubTree](https://images.contentful.com/alneenqid6w5/5hPFG8m6pUCMuIg8e2Iymm/957b9c89844099db690e82abe53c2b7a/TxHubTree.jpg)

After the changes, the file should be uploaded to VTEX in the .zip format always with the same folder structure.

The collection will be in Postman to validate de operation of javascripts. https://www.getpostman.com/collections/f29298ccf69003fd7210

The customerCode.js file is the input parameter orderFormId; this will provide full access to the orderForm of the purchase cart to use data. It is important to send an additional parameter in the call to avoid being in looping between the checkout and taxhub.
/api/checkout/pub/orderForm/{orderFormId}?disableAutoCompletion=true

__Folders & JavaScripts Structure__
Levels structure
```
 JURISDICTION/
 {{COUNTRY_NAME}}.JS
 {{COUNTRY_NAME}}/
 FISCALREGION.JS
 CUSTOMERCODE.JS
 ITEMCODE.JS
 {{TAX_NAME}}/
 ALIQUOT.JS
 TAXVALUE.JS
```

__Notes__

1. The previous structure is the minimum required for the APP to work in checkout sessions.
2. The folder and JS with the tag {{COUNTRYNAME}} needs to be called exactly with the name of the country for which the tax will be calculated.
3. In the folder with the tag {{TAX_NAME}}, it is advisable to use the name of the tax that will be displayed in the checkout, but it is possible to give any other name. 
4. If it is necessary to calculate more than one tax in the checkout, it is possible to create a second folder {{TAX_NAME}} with the name of the second tax (and include the JS required).
5. The APP will be executed for each different item (rather than for number of items) in the shopping cart.

__JavaScript's Protocol__
❖	Occupation Area.JS
This javascript will receive a request with the initial origin address located in the Distribution Center (VTEX Logistics module) and also the customer’s address. The application itself identifies and responds to TaxHub whether it is possible to buy or not. 

The response the application needs to perform is a Boolean structure; this means only a "true" or "false" based on the server response to permit or not continue with the purchase. 

Request:
```
{ 
"origin": {
"country": "Argentina",
"state": "Buenos Aires",
"city": "Ciudad Autónoma de Buenos Aires", "neighborhood": "Palermo"
}, 
"destination": {						
"country": "Argentina", 
"state": "Mendoza",
"city": "Mendoza", 
"neighborhood": "Villa Nueva"
}
 }
```

Response: boolean
Example:
```
{
“true“						
}
```

❖	FISCALREGION.JS
In this step, the APP will receive a TaxHub request with the customer’s address, where the application can confirm, directly with the server, the tax conditions for this region or, on the other hand, the App itself may have set up in its own structure the handling of tax to be calculated for the tax region. 

It should be noted that all responses performed by the application will be used and returned in the following TaxHub request.
				
Request:
```
{
“country": “Argentina", 
“state": “BA“,
“city": “Buenos Aires“, 
“neighborhood": “Palermo“						
}
```

Response: object 

Example:
```				
{
“region": “A“,
"taxCompliance": "true"					
}
```

❖	CUSTOMERCODE.JS
The application will receive here a TaxHub request with the customer’s EMAIL and accountName (store’s name in the VTEX system) and we can connect to the Master Data and bring information from the Profile System (if necessary).

With this information received by the App, these data will be sent to the external server to be processed and the information required for the Checkout will be received for calculation of the taxes for this customer. 					

Request:		
```
{
"account": "zonaprop",
"clientEmail": "jose.gabriel@vtex.com.br"						
}
```

Response: object 

Example:						
```
{
"dni": "31009878"
}
```

❖	ITEMCODE.JS
In this step, the application will receive a TaxHub request with the ID SKU and accountName (store’s name in the VTEX system). In this section it is also possible to bring product information (if necessary).

With this information received by the App, these data will be sent to the external server to be processed and the information required for the Checkout will be returned for calculation of the taxes for this customer.
				
Request:
```
{
"account": "zonaprop", 
"itemId": "408"						
}
```

Response: object

Example:					
```
{
"refId": “45FSA3A”, 
"imported": false					
}
```

❖	ALIQUOT.JS
In this step, the application will receive a TaxHub request with all the logic previously composed with the responses of the application. 

With this final data, the application will have what is necessary to calculate taxes for the purchase. The response here will be exactly the formula to calculate the tax amount and apply it to the shopping cart. 

Focus on the following fields:

- __"originFiscalRegion"__: Address established in the Distribution Center (required in the stores that use the TaxHub application);
- __"destinationFiscalRegion":__ Customer’s address filled in at the time of the purchase. 
- __"endpoint":__ Server initially set up on the backend interface of the Tax Hub. This is an optional field.
- __"authorizationHeader":__ Authentication key of the “endpoint” server. This is an optional field.					

Request:					
```
{
	"originFiscalRegion": object,		  //Objeto Dock Address
	"destinationFiscalRegion": object,  //Objeto Final client address
	"customerCode": object,		   //Objeto CLIENTECODE.JS
	"itemCode": object,			   //Objeto ITEMCODE.JS
	"endpoint": "http://www.server.com/taxes", //Optional (set on TaxHub backoffice)
	"authorizationHeader": "GDFKFDJDKDLKJLKFDJLKFDJFL" //Optional
}
```

Response: object 

Example:
```
{
"mva": 0.6543,					
"destination": 0.34,
“origin”: 0.11,
“expression”: “((((event.sellingPrice + ((event.sellingPrice + event.shippingPrice) * event.aliquot.mva)) * event.aliquot.destination) - (event.sellingPrice * event.aliquot.origin)) * 1.000000)”
}
```

❖	TAXVALUE.JS
In this step, the formula that was returned in ALIQUOT.JS will be used again to calculate the tax payable (the formula returned in ALIQUOT.JS does not have a standard, the idea is to use exactly what the (external) serves need as calculation basis).

When this calculation is successful, it will return exactly the tax name and respective amount referring to the item in the purchase. 					

Request:
```					
{
"aliquot": object, //Objeto aliquot
"itemPrice": 79.00,
"shippingPrice": 5.00, 
"sellingPrice": 70.00						
}
```
						
Response: TaxValue[] 

Example:			
```
[{
"name": “IVA”, 
"value": 12.90						
}]
```

__JavaScript Archive__
*__Recommended structure__*

```
(function () { 
'use strict';						
var requestPromise = require("request-promise");
exports.run = function (event, context) {
try {
let objectResponse = {}; 
context.done(null, objectResponse);
} catch (e) 
{ context.done(e, null);					
}; 
};						
}).call(this);
```

__Notes __
1. __"event"__: Input object that includes the aforementioned properties. 
2. __"context"__: Callback function. The first parameter should bring the error, if any. The object of the answer should be in the second parameter.
3. __Importing__: Libraries Only libraries developed by VTEX.
