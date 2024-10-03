---
title: 'Utilizando hooks de entidades de datos'
id: 3yWxApA76MucioQsQ2eY8M
status: ARCHIVED
createdAt: 2017-12-04T18:56:47.005Z
updatedAt: 2019-12-31T15:27:13.029Z
publishedAt: 
firstPublishedAt: 2017-12-06T18:43:16.588Z
contentType: tutorial
productTeam: Others
author: authors_64
slugEN: hooks-de-entidades-de-dados
locale: es
legacySlug: utilizando-hooks-de-entidades-de-datos
subcategoryId: unknown-subcategory
---

Si necesita reaccionar a los documentos guardados en Master Data, usted puede utilizar la feature de __Hooks__.

Se trata de una acción que se puede ejecutar después de que un documento se ha creado o actualizado.

Hay dos tipos de acciones posibles:
- Hacer un request
- Enviar un e-mail

### Expresiones dinámicas

Usted puede utilizar expresiones dinámicas para agregar el valor del campo en la configuración.
El estándar es:

`{!<fieldName>}`

Si necesita establecer el valor del campo de un objeto, puede acceder al campo interno mediante un punto.

Ejemplo:

`{!order.clientProfiledata.email}`

Este es un hook que envía un request:
```
{
	"properties": { ... },
	"hooks": [
		{
			"name": "send-request",
			"condition": "status=invoiced",
			"active": true,
			"action": {
				"type": "http",
				"uri": "http://my-endpoint.com/orders",
				"headers": {
					"content-type": "application/json"
				},
				"method": "POST",
				"body": {
					"orderId": "{!id}",
					"status": "invoiced"
				}
			}
		}
	]
}
```

Este es un hook que envía un e-mail:
```
{
	"properties": { ... },
	"hooks": [
    {
      "name": "send-email",
      "active": true,
      "condition": "order is not null",
      "action": {
        "type": "email",
        "provider": "default",
        "subject": "Sending an email with a hook!",
        "from": {
          "email": "noreply@my-domain.com",
          "name": "From Master Data"
        },
        "to": [
          "{!order.clientProfileData.email}"
        ],
        "bcc": [
          "mail1@my-domain.com",
          "mail2@my-domain.com",
          "mail3@my-domain.com"
        ],
        "replyTo": "noreply@my-domain.com",
        "body": "<!doctype html><body></body>{!id}</html"
      }
    }
  ]
}
```
