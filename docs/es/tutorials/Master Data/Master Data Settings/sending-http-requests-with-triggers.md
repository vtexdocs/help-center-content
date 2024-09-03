---
title: 'Enviar requests HTTP con triggers'
id: 3YsGpf87z2auKSK2UKmOEg
status: ARCHIVED
createdAt: 2018-04-02T20:54:32.885Z
updatedAt: 2020-07-29T21:06:01.103Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:46:44.286Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: enviar-requests-http-con-triggers
locale: es
legacySlug: enviar-requests-http-con-triggers
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

Las propiedades de request HTTP son:

| Campo | Descripción |
| ---------- | ---------- |
| type | El tipo de la acción debe ser `http` |
| uri | La URI completa con protocolo |
| method | El método del request para la acción deseada |
| headers | Un objeto con los headers necesarios |
| body | El contenido del request, en el caso de los métodos POST/PUT/PATCH |

### Dynamic Expressions

Utilice expresiones dinámicas para utilizar propiedades de documento en estas configuraciones. Para ver más información, acceda al artículo sobre [Dynamic Expressions](/es/tutorial/dynamic-expressions).

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
