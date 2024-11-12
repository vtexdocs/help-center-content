---
title: 'Como es la estructura API REST del TaxHub'
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
locale: es
legacySlug: taxhub-estructura-del-api-rest
subcategoryId: unknown-subcategory
---

Este documento tiene la finalidad de explicar y proporcionar ejemplos del flujo que lleva el nuevo módulo de impuestos (TaxHub) por medio de la interface REST. Todos los request compartidos aquí necesitan ser hechos bajo la estructura node.js que es la que está instalada dentro de TaxHub dentro del backoffice de VTEX.

En el siguiente link podrán descargar la colección API para importar y usar en POSTMAN

TaxHubApi: https://www.getpostman.com/collections/cc172421bd78c7423f1b

Recuerden usar el accountName que están utilizando en todos los requests y tomar el valor del campo **id** del primer request (API “GetTaxes”), pues este mismo valor se ocupará en todos los payload siguientes.

__0.	 API Headers__
- Accept: application/json, application/vnd.vtex.lambda.v1+json
- Content-Type: application/json
- X-VTEX-API-AppKey: {{user}}
- X-VTEX-API-AppToken: {{password}}

__1.	 GetTaxes__
Recuerden usar el accountName que están utilizando en todos los request y tomar el valor del campo “id” del primer request (API “GetTaxes”), pues este mismo valor se ocupara en todos los payload siguientes

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
![TaxHubAPIGetTax](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.jpg)

__2 Occupation Area__

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

En la primer direccion (origin) se ocupara la configurada en el muelle y en la segunda (destination) se ocupara la del checkout, la respuesta es un “TRUE” o “FALSE”.
En caso “TRUE” continua Fiscal Region

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
![TaxHubOccupationArea](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.jpg)

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
![TaxHubFiscalRegion](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.jpg)

__4	CustomerCode__
- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

En esta seccion enviamos el email del cliente además de poder conectarnos a Master Data y traer información de Profile System (Si es necesario).

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
![TaxHubCustomerCode](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.jpg)

__5	ItemCode__

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

En esta seccion podremos también traer información del producto (si es necesario).

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

Evicence:

![TaxHubItemCode](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.jpg)

__6 Aliquot__
- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

En esta seccion llamamos a la API de un tercero (si es necesario).

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
![TaxHubAliquot](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.jpg)

__7 TaxValue__

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

En esta seccion se calcula el valor de impuesto con base a la informacion recibida en Aliquot.

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
![TaxHubTaxValue](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.jpg)

[Continua con TaxHub Estructura de App en JS](/es/tutorial/taxhub-estructura-de-app-en-js)
