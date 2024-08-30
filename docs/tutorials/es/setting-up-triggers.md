---
title: 'Configurar triggers en Master Data v2'
id: 54eVOFGhS0EWyAUieoqKWo
status: DRAFT
createdAt: 2018-04-02T18:01:34.840Z
updatedAt: 2022-07-05T16:36:30.189Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:46:07.420Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: configurar-triggers
locale: es
legacySlug: configurar-triggers
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

>ℹ️ Este artículo hace referencia al Master Data v2. Si desea utilizar el Master Data v1, vea los pasos de [este artículo](https://help.vtex.com/es/tutorial/creando-trigger-en-el-master-data--tutorials_1270).

Un trigger de Master Data es una acción ejecutada después de una inserción o una actualización.

## Propiedades del JSON:

| Propiedad | Descripción |
|-----------|----------------------------------------------------|
| name | nombre del trigger |
| active | booleano para habilitar o deshabilitar el trigger |
| condition | regla para validar el documento antes de la ejecución |
| runAt | agenda la acción para un momento futuro |
| weight | valor porcentual utilizado para el A/B Test |
| retry | personalización de la política de retry |
| action | la acción que se ejecutará |

#### name
Es el nombre del trigger y debe ser una string con límite de 100 caracteres.

#### active
Valor booleano que indica si el trigger está activado o desactivado.

#### condition
Es la misma regla de la ruta de search. Ejemplo: `status=ready-for-handling`
Para obtener más información, consulte la documentación de desarrollador sobre la ruta de search del Master Data.

#### runat
En el caso de programar una acción para el futuro, usted puede utilizar la propiedad `runAt`.

Ejemplo 1: para programar la ejecución para 10 minutos después:
```json
    {
    	"dateTime": "now",
    	"increment": {
    		"addMinutes": 10
    	}
    }
```

Ejemplo 2: Para programar la ejecución para 6 meses después del valor del campo `createdIn`
```json
    {
    	"dateTime": "{!createdIn}",
    	"increment": {
    		"addMonths": 6
    	}
    }
```

#### weight
Campo integer utilizado para distribuir acciones. Más información en el artículo [Configurar un A/B test con triggers del Master Data](/es/tutorial/configurar-a-b-test).

#### retry
De forma predeterminada, el Master Data hace 3 intentos en un intervalo de 10 minutos. Utilice esta propiedad para sobrescribir este comportamiento.

Ejemplo: intentar 5 veces en un intervalo de 30 minutos:
```json
    {
    	"times": 5,
    	"delay": {
    		"addMinutes": 30
    	}
    }
```

#### action
Hay 3 tipos de acciones: `Hacer un request HTTP`, `enviar un e-mail` y `guardar en otra entidad de datos`.

Configurar una acción de request HTTP:
```json
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
```

Configurar una acción de e-mail:
```json
    {
    	"type": "email",
    	"provider": "default",
    	"subject": "My email with VTEX Master Data",
    	"to": [
    		"{!email}",
    		"test@email.com"
    	],
    	"bcc": [
    		"myemail@test.com"
    	],
    	"replyTo": "noreply@company.com",
    	"body": "My email with document {!id}."
    }
```

Configurar una acción de guardar un documento en otra entidad de datos:
```json
    {
    	"type": "save",
    	"dataEntity": "copy",
    	"json": {
    		"id": "{!id}",
    		"message": "{!message}",
    		"custom": "created/updated by VTEX Master Data triggers"
    	}
    }
```

### Ejemplo completo

```json
    {
    	"properties": {},
    	"v-triggers": [
    		{
    			"name": "copy-document",
    			"active": true,
    			"condition": "status=window-to-cancel",
    			"action": {
    				"type": "save",
    				"dataEntity": "copy",
    				"json": {
    					"id": "{!id}",
    					"message": "{!message}",
    					"custom": "created/updated by VTEX triggers"
    				}
    			},
    			"retry": {
    				"times": 5,
    				"delay": {
    					"addMinutes": 30
    				}
    			}
    		}
    	]
    }
```
