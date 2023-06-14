---
title: 'Using data entity hooks'
id: 3yWxApA76MucioQsQ2eY8M
status: DRAFT
createdAt: 2017-12-04T18:56:47.005Z
updatedAt: 2019-12-31T15:27:13.029Z
publishedAt: 
firstPublishedAt: 2017-12-06T18:43:16.588Z
contentType: tutorial
productTeam: Others
author: authors_64
slug: hooks-de-entidades-de-dados
locale: en
legacySlug: hooks-de-entidades-de-dados
subcategory: 
---

In case you need to react with the documents saved in the Master Data you can use the __Hooks__ feature.

It's an action that could be executed after a document is created or updated.

There are two types of actions:
- Call a request
- Send an email

### Dynamic expressions

Use the dynamic expressions to add the field value in the setup.
The pattern is:

`{!<fieldName>}`

If you need to set the field value of an object you can access the internal field using a dot. 

Example:

`{!order.clientProfiledata.email}`

This is a hook that sends a request:
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

This is a hook that sends an email:
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
