---
title: 'Como é a estrutura API REST do TaxHub'
id: 3vYjLUeJlmse4u6qoCCKEi
status: DRAFT
createdAt: 2017-07-25T22:41:58.700Z
updatedAt: 2020-05-25T19:10:09.184Z
publishedAt: 
firstPublishedAt: 2017-07-26T17:51:47.222Z
contentType: tutorial
productTeam: Others
author: 2Y2pnNkWfSoUMMYcwemq4A
slug: como-e-a-estrutura-api-rest-do-taxhub
locale: pt
legacySlug: como-e-a-estrutura-api-rest-do-taxhub
subcategory: 
---

Introdução:

Este documento tem a finalidade de explicar e proporcionar exemplos do fluxo que mantém o novo módulo de impostos (TaxHub) por meio da interface REST. Todos os requests compartilhados aqui precisam ser feitos sob a estrutura node.js, que é a que está instalada dentro do TaxHub dentro do backoffice de VTEX.

No link seguinte poderão baixar a coleção API para importar e usar em POSTMAN

TaxHubApi: https://www.getpostman.com/collections/cc172421bd78c7423f1b

Lembrem-se de usar o accountName que está sendo utilizado em todos os requests e tomar o valor do campo “id” do primeiro request (API “GetTaxes”), pois este será o mesmo valor em todos os payload seguintes

__0.	 API Headers__
- Accept: application/json, application/vnd.vtex.lambda.v1+json
- Content-Type: application/json
- X-VTEX-API-AppKey: {{user}}
- X-VTEX-API-AppToken: {{password}}

__1.	 GetTaxes__
Lembrem-se de usar accountName que está sendo utilizado em todos os requests e tomar o valor do campo “id” do primeiro request (API “GetTaxes”), pois este será o mesmo valor em todos os payload seguintes.

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/taxeshub
- Veb: GET
- Request example: http://api.beta.vtex.com/zonaprop/taxeshub

Response:
```
[
  {
    “id”: “EBAA53E0CE605E93C7731253CE0FB008”,
    “appName”: “NAVENT-SAP”,
    “ownerId”: “073d4b3b-9c14-4878-be22-a0e5dac703d3”,
    “isPrivate”: false
  }
]
```

Evidence:
![TaxHubAPIGetTax](https://images.contentful.com/alneenqid6w5/4CaoACwzqEYcUQem6okKQO/0e295bc9101cc0b46e7669a49b6f99e3/TaxHubAPIGetTax.jpg)

__2 Occupation Area__

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

No primeiro endereço (origin) se ocupará o configurado nas docas e no segundo (destination) se ocupará o do checkout, a resposta é “TRUE” ou “FALSE”.
Caso seja “TRUE”, continua Fiscal Region

Request example:

```
{
  “action”: “https://s3-external-1.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina.js”,
  “event”: {
    “account”: “zonaprop”,
    “origin”: {
      “state”: “Buenos Aires”,
      “city”: “Buenos Aires”,
      “neighborhood”: null
    },
    “destination”: {
      “state”: “CIUDAD AUTONOMA DE BUENOS AIRES”,
      “city”: “Ciudad Autonoma de Buenos Aires”,
      “neighborhood”: null
    }
  }
}
```

Response:
```
{
  “response”: true,
  “logs”: [],
  “elapsedMilliseconds”: 1,
  “memory”: {
    “rss”: 56066048,
    “heapTotal”: 33290528,
    “heapUsed”: 32187168
  }
}
```
 
Evidence:
![TaxHubOccupationArea](https://images.contentful.com/alneenqid6w5/2lJDIuKFz6AwgM62eI6aWA/c0bab0f8e5016e3ced947cfb94050d43/TaxHubOccupationArea.jpg)

__3 FiscalRegion__

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

Request example:
```
{
  “action”: “https://s3-external-1.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina/fiscalregion.js”,
  “event”: {
    “account”: “zonaprop”,
    “state”: “CIUDAD AUTONOMA DE BUENOS AIRES”,
    “city”: “Ciudad Autonoma de Buenos Aires”,
    “neighborhood”: null
  }
}
```
 
Response:
```
{
  “response”: {
    “region”: “A”
  },
  “logs”: [],
  “elapsedMilliseconds”: 1,
  “memory”: {
    “rss”: 56455168,
    “heapTotal”: 34322464,
    “heapUsed”: 32591648
  }
}
```

Evidence:
![TaxHubFiscalRegion](https://images.contentful.com/alneenqid6w5/3i7TuC4rJYwoIWY62UwgE0/5cfc50a55c0e068a2dea68573a636a1b/TaxHubFiscalRegion.jpg)

__4	CustomerCode__
- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

Nesta seção, enviamos o e-mail do cliente, além de podermos nos conectar ao Master Data e trazermos informações do Profile System (se for necessário).

Request example:
```
{
  “action”: “https://s3.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina/customercode.js”,
  “event”: {
    “clientEmail”: “jose.gabriel@vtex.com.br”
  }
}
```

Response:
```
{
  “response”: “Gabriel”,
  “logs”: [],
  “elapsedMilliseconds”: 175,
  “memory”: {
    “rss”: 57188352,
    “heapTotal”: 34322464,
    “heapUsed”: 33375144
  }
}
```

Evidence:
![TaxHubCustomerCode](https://images.contentful.com/alneenqid6w5/5ANPppLxvikIK4Kkaoe6qM/3d5033469dc13154c1bae8ddaeb02c06/TaxHubCustomerCode.jpg)

__5	ItemCode__

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

Nesta seção, poderemos também trazer informação do produto (se for necessário).

Request example:
```
{
  “action”: “https://s3-external-1.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina/itemcode.js”,
  “event”: {
    “itemId”: “5002”
  }
}
```

Response:
```
{
  “response”: 5002,
  “logs”: [],
  “elapsedMilliseconds”: 600,
  “memory”: {
    “rss”: 57671680,
    “heapTotal”: 35354400,
    “heapUsed”: 33684008
  }
}
```

Evicence:

![TaxHubItemCode](https://images.contentful.com/alneenqid6w5/4im391LOekSmYIgWgeqIIK/078dbcbb83861e5b90d9b0b9519778e5/TaxHubItemCode.jpg)

__6 Aliquot__
- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

Nesta seção, chamamos a API de um terceiro (se for necessário).

Request example:
```
{
  “action”: “https://s3-external-1.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina/iva/aliquot.js”,
  “event”: {
    “originFiscalRegion”: “Calle Echevarria 874”,
    “destinationFiscalRegion”: “Av. Chiclana 3578”,
    “customerCode”: “Gabriel”,
    “itemCode”: “5002”
  }
}
```

Response:
```
{
  “response”: {},
  “logs”: [],
  “elapsedMilliseconds”: 1,
  “memory”: {
    “rss”: 63950848,
    “heapTotal”: 43585824,
    “heapUsed”: 33527560
  }
}
```

Evidence:
![TaxHubAliquot](https://images.contentful.com/alneenqid6w5/6d6Kgove5GaWM2As0EAqmg/6959389c39c4d0c69cccd1982ccf7c6e/TaxHubAliquot.jpg)

__7 TaxValue__

- Host: http://api.beta.vtex.com
- API: /{{accountName}}/lambda/run
- Veb: POST

Nesta seção, calcula-se o valor do imposto com base na informação recebida em Aliquot.

Request example:
```
{
  “action”: “https://s3-external-1.amazonaws.com/vtex-taxhub/EBAA53E0CE605E93C7731253CE0FB008/argentina/iva/taxvalue.js”,
  “event”: {
    “aliquot”: {
      “iva”: 0.6231,
      “destination”: “0.190000”,
      “origin”: “0.190000”
    },
    “itemPrice”: 200.00,
    “shippingPrice”: null,
    “sellingPrice”: 200.00
  }
}
```

Response:
```
{
  “response”: [
    {
      “name”: “SAP AC”,
      “description”: “[IVA] Navent”,
      “value”: 1
    }
  ],
  “logs”: [],
  “elapsedMilliseconds”: 1,
  “memory”: {
    “rss”: 63549440,
    “heapTotal”: 42553888,
    “heapUsed”: 33046416
  }
}
```

Evidence:
![TaxHubTaxValue](https://images.contentful.com/alneenqid6w5/53rujXNKTYs0kugAMwSca8/53b29d1078e0960a39360bdad84e4b7e/TaxHubTaxValue.jpg)

[Continue lendo sobre o TaxHub com o artigo sobre a estructura em JS](http://help.vtex.com/pt/tutorial/como-e-a-estrutura-de-app-em-js-do-taxhub)
