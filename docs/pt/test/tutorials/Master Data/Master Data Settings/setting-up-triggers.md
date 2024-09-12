---
title: 'Configurar triggers no Master Data v2'
id: 54eVOFGhS0EWyAUieoqKWo
status: ARCHIVED
createdAt: 2018-04-02T18:01:34.840Z
updatedAt: 2022-07-05T16:36:30.189Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:46:07.420Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: configurar-triggers
locale: pt
legacySlug: configurar-triggers
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

>ℹ️ Esse artigo se refere ao Master Data v2. Se você quiser utilizar o Master Data v1, veja os passos [deste artigo](https://help.vtex.com/pt/tutorial/criando-trigger-no-master-data--tutorials_1270).

Um trigger do Master Data é uma ação executada após uma inserção ou uma atualização. 

## Propriedades do JSON:

| Propriedade  | Descrição                                       |
|-----------|----------------------------------------------------|
| name      | nome do trigger                                    |
| active    | booleano para habilitar ou desabilitar o trigger   |
| condition | regra para validar o documento antes da execução   |
| runAt     | agenda a ação para um momento futuro               |
| weight    | valor percentual usado para teste A/B              |
| retry     | customização da política de retry                  |
| action    | a ação que será executada                          |

### name
É o nome do trigger e deve ser uma string com limite de 100 caracteres.

### active
Valor booleano que indica se o trigger está ativado ou desativado.

### condition
É a mesma regra da rota de search. Exemplo: `status=ready-for-handling`
Para mais informações, consulte a documentação de desenvolvedor sobre a rota de search do Master Data.

### runat
No caso de agendar uma ação para o futuro, você pode usar a propriedade `runAt`.

Exemplo 1: para agendar a execução para 10 minutos depois:

```json
    {
    	"dateTime": "now",
    	"increment": {
    		"addMinutes": 10
    	}
    }
```

Exemplo 2: Para agendar a execução para 6 meses após o valor do campo `createdIn`

```json
    {
    	"dateTime": "{!createdIn}",
    	"increment": {
    		"addMonths": 6
    	}
    }
```

### weight
Campo integer usado para distribuir ações. Veja mais informações no artigo [Configurar um teste A/B com triggers do Master Data](/pt/tutorial/configurar-teste-a-b).

### retry
Por padrão, o Master Data faz 3 tentativas em um intervalo de 10 minutos. Use esta propriedade para sobrescrever esse comportamento.

Exemplo: tentar 5 vezes em um intervalo de 30 minutos:
```json
    {
    	"times": 5,
    	"delay": {
    		"addMinutes": 30
    	}
    }
```

### action
Existem 3 tipos de ações: `Fazer um request HTTP`, `enviar um e-mail` e `salvar em outra entidade de dados`.

Configurar uma ação de request HTTP:
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

Configurar uma ação de e-mail:
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

Configurar uma ação de salvar um documento em outra entidade de dados:
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

## Exemplo completo

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

## 
