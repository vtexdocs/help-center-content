---
title: 'How is TaxHub API REST structure'
id: 3vYjLUeJlmse4u6qoCCKEi
status: ARCHIVED
createdAt: 2017-07-25T22:41:58.700Z
updatedAt: 2020-05-25T19:10:09.184Z
publishedAt: 
firstPublishedAt: 2017-07-26T17:51:47.222Z
contentType: tutorial
productTeam: Others
author: 2Y2pnNkWfSoUMMYcwemq4A
slugEN: how-is-taxhub-api-rest-structure
locale: en
legacySlug: how-is-taxhub-api-rest-structure
subcategoryId: unknown-subcategory
---

Introduction:

The purpose of this document is to explain and give examples of the flow of new tax module (TaxHub) through the REST interface. All requests shared here must be carried out under the structure node.js that is installed within TaxHub, within VTEX backoffice.

The following link permits to download the API collection to import and use in POSTMAN

TaxHubApi: https://www.getpostman.com/collections/cc172421bd78c7423f1b

Remember to use the accountName that is being used in all requests and get the value of the “id” field of the first request (API “GetTaxes”), since this value will be used in all the next payloads

__0.	 API Headers__
- Accept: application/json, application/vnd.vtex.lambda.v1+json
- Content-Type: application/json
- X-VTEX-API-AppKey: {{user}}
- X-VTEX-API-AppToken: {{password}}

__1.	 GetTaxes__
Remember to use the accountName that is being used in all requests and get the value of the “id” field of the first request (API “GetTaxes”), since this value will be used in all the next payloads.

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/taxeshub
- Veb: GET

Request example: http://api.beta.vtex.com/zonaprop/taxeshub

Response:
```
[
 {
 "id": "EBAA53E0CE605E93C7731253CE0FB008",
 "appName": "NAVENT-SAP",
 "ownerId": "073d4b3b-9c14-4878-be22-a0e5dac703d3",
 "isPrivate": false
 }
]
```

Evidence:
![TaxHubAPIGetTax](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled category/Untitled subcategory/how-is-taxhub-api-rest-structure_1.jpg)

__2 Occupation Area__

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

In the first address (origin), use the one set up in the distribution center, and in the second (destination) use the one set up in the checkout; the answer is “TRUE” or “FALSE”.
If it is “TRUE”, continues with Fiscal Region

Request example:
```
{
 "action": "https://s3-external-1.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina.js",
 "event": {
 "account": "zonaprop",
 "origin": {
 "state": "Buenos Aires",
 "city": "Buenos Aires",
 "neighborhood": null
 },
 "destination": {
 "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
 "city": "Ciudad Autonoma de Buenos Aires",
 "neighborhood": null
 }
 }
}
```

Response:
```
{
 "response": true,
 "logs": [],
 "elapsedMilliseconds": 1,
 "memory": {
 "rss": 56066048,
 "heapTotal": 33290528,
 "heapUsed": 32187168
 }
}
```
 
Evidence:
![TaxHubOccupationArea](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled category/Untitled subcategory/how-is-taxhub-api-rest-structure_2.jpg)

__3 FiscalRegion__

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

Request example:
```
{
 "action": "https://s3-external-1.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina/fiscalregion.js",
 "event": {
 "account": "zonaprop",
 "state": "CIUDAD AUTONOMA DE BUENOS AIRES",
 "city": "Ciudad Autonoma de Buenos Aires",
 "neighborhood": null
 }
}
```
 
Response:
```
{
 "response": {
 "region": "A"
 },
 "logs": [],
 "elapsedMilliseconds": 1,
 "memory": {
 "rss": 56455168,
 "heapTotal": 34322464,
 "heapUsed": 32591648
 }
}
```

Evidence:
![TaxHubFiscalRegion](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled category/Untitled subcategory/how-is-taxhub-api-rest-structure_3.jpg)

__4	CustomerCode__
- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

In this section, we send the customer name and can connect with Master Data and bring information from the Profile System (if necessary).

Request example:
```
{
 "action": "https://s3.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina/customercode.js",
 "event": {
 "clientEmail": "jose.gabriel@vtex.com.br"
 }
}
```

Response:
```
{
 "response": "Gabriel",
 "logs": [],
 "elapsedMilliseconds": 175,
 "memory": {
 "rss": 57188352,
 "heapTotal": 34322464,
 "heapUsed": 33375144
 }
}
```

Evidence:
![TaxHubCustomerCode](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled category/Untitled subcategory/how-is-taxhub-api-rest-structure_4.jpg)

__5	ItemCode__

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

In this section, we can also bring product information (if necessary).

Request example:
```
{
 "action": "https://s3-external-1.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina/itemcode.js",
 "event": {
 "itemId": "5002"
 }
}
```

Response:
```
{
 "response": 5002,
 "logs": [],
 "elapsedMilliseconds": 600,
 "memory": {
 "rss": 57671680,
 "heapTotal": 35354400,
 "heapUsed": 33684008
 }
}
```

Evidence:

![TaxHubItemCode](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled category/Untitled subcategory/how-is-taxhub-api-rest-structure_5.jpg)

__6 Aliquot__
- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

In this section we get a third party’s API (if necessary).

Request example:
```
{
 "action": "https://s3-external-1.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina/iva/aliquot.js",
 "event": {
 "originFiscalRegion": "Calle Echevarria 874",
 "destinationFiscalRegion": "Av. Chiclana 3578",
 "customerCode": "Gabriel",
 "itemCode": "5002"
 }
}
```

Response:
```
{
 "response": {},
 "logs": [],
 "elapsedMilliseconds": 1,
 "memory": {
 "rss": 63950848,
 "heapTotal": 43585824,
 "heapUsed": 33527560
 }
}
```

Evidence:
![TaxHubAliquot](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled category/Untitled subcategory/how-is-taxhub-api-rest-structure_6.jpg)

__7 TaxValue__

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

In this section we calculate the tax amount based on the information received in Aliquot.

Request example:
```
{
 "action": "https://s3-external-1.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina/iva/taxvalue.js",
 "event": {
 "aliquot": {
 "iva": 0.6231,
 "destination": "0.190000",
 "origin": "0.190000"
 },
 "itemPrice": 200.00,
 "shippingPrice": null,
 "sellingPrice": 200.00
 }
}
```

Response:
```
{
 "response": [
 {
 "name": "SAP AC",
 "description": "[IVA] Navent",
 "value": 1
 }
 ],
 "logs": [],
 "elapsedMilliseconds": 1,
 "memory": {
 "rss": 63549440,
 "heapTotal": 42553888,
 "heapUsed": 33046416
 }
}
```

Evidence:
![TaxHubTaxValue](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled category/Untitled subcategory/how-is-taxhub-api-rest-structure_7.jpg)

[Continue reading about TaxHub with our article about its JS Structure](https://taxhub-estructura-de-app-en-js "TaxHub Estructura de App en JS")
