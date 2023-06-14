---
title: 'Enviar requests HTTP com triggers'
id: 3YsGpf87z2auKSK2UKmOEg
status: DRAFT
createdAt: 2018-04-02T20:54:32.885Z
updatedAt: 2020-07-29T21:06:01.103Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:46:44.286Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: enviar-requests-http-com-triggers
locale: pt
legacySlug: enviar-requests-http-com-triggers
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

As propriedades de request HTTP são:

| Campo     | Descrição     |
| ---------- | ---------- |
| type       | O tipo da ação deve ser `http`       |
| uri       | A URI completa com protocolo       |
| method       | O método do request para a ação desejada       |
| headers       | Um objeto com os headers necessários       |
| body       | O conteúdo do request, no caso de métodos POST/PUT/PATCH       |

### Dynamic Expressions

Use dynamic expressions para utilizar propriedades do documento nestas configurações. Para ver mais informações, acesse o artigo sobre [Dynamic Expressions](/pt/tutorial/dynamic-expressions).

### POST:

```json
    {
      "properties": { ... },
      "v-triggers": [
        {
          "type": "http",
	        "uri": "http://mydomain.com/api/test",
	        "method": "POST",
	        "headers": {
		        "content-type": "application/json"
	        },
	        "body": {
		        "id": "{!id}",
		        "test": "TestValue",
		        "count": 25
	        }
        }
      ]
    }
```

### GET:

```json
    {
      "properties": { ... },
      "v-triggers": [
      {
        "type": "http",
	      "uri": "http://mydomain.com/api/{!id}",
	      "method": "GET",
	      "headers": {
		      "content-type": "application/json"
	      }
      ]
    }
```
