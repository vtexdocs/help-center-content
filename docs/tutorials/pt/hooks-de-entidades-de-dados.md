---
title: 'Usando hooks de entidade de dados'
id: 3yWxApA76MucioQsQ2eY8M
status: DRAFT
createdAt: 2017-12-04T18:56:47.005Z
updatedAt: 2019-12-31T15:27:13.029Z
publishedAt: 
firstPublishedAt: 2017-12-06T18:43:16.588Z
contentType: tutorial
productTeam: Others
author: authors_64
slug: data-entity-hooks
legacySlug: data-entity-hooks
subcategory: 
---

Caso você precise reagir aos documentos salvos no Master Data, você pode usar a feature de __Hooks__. 

Trata-se de uma ação que pode ser executada depois que um documento é criado ou atualizado.

É o equivalente à funcionalidade de triggers, do Master Data v1.

Há dois tipos de ações possíveis:
- Fazer um request HTTP
- Enviar um e-mail

Os hooks são configurados dentro do próprio [JSON Schema](http://help.vtex.com/pt/tutorial/master-data-v2), em um array de objetos `hooks`.

## Expressões dinâmicas

Nas configurações, você pode usar expressões dinâmicas como variáveis, para trazer o valor de um campo do documento.

O padrão é: `{!<fieldName>}`

Caso precise definir o valor do campo de um objeto, é possível acessar o campo interno com um ponto.

Exemplo: `{!order.clientProfiledata.email}`

## Condições

O hook será ativado sempre que um documento for alterado, e será disparado se a condição, configurada na propriedade `condition`, for válida.

As condições usam as mesmas expressões dos filtros da API de busca, que você pode ver em nossa [coleção do Postman](https://documenter.getpostman.com/view/164907/master-data-api-v2-beta/7EHbXTe#8b140ee9-e806-7fb6-942c-f5ba9723d57c).

**Dica:** caso queira disparar o hook somente quando um documento for incluído, use a condição `"updatedIn is null"` em conjunto com as outras regras.


## Exemplos de hooks

### Requisição HTTP

Este é um hook que envia uma requisição HTTP:
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

### Envio de e-mail

Este é um hook que envia um e-mail:
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
