---
title: 'Configurar um campo com autoincremento'
id: BMsHcTBXEsAMG22us4CKU
status: ARCHIVED
createdAt: 2018-03-19T14:50:46.715Z
updatedAt: 2022-09-28T12:52:52.524Z
publishedAt: 
firstPublishedAt: 2018-03-19T15:42:15.992Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slugEN: setting-up-an-auto-increment-field
locale: pt
legacySlug: configurar-um-campo-com-auto-incremento
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

O `auto increment` é uma funcionalidade do Master Data que cria valores únicos e sequenciais automcaticamente para campos do tipo `integer` quando um documento é criado.

## Como configurar

Crie um campo do tipo `integer` e adicione seu nome na lista de campos da propriedade `v-auto-increment`.
Atenção: O campo não pode ser `required`.
```
{
	"properties": {
		"valueAsAutoIncrement": {
			"type": "integer"
		}
	},
	"v-auto-increment": [
		"valueAsAutoIncrement"
	]
}
```

## Como usar

Quando salvar documentos o JSON Schema (`_schema={{schema-name}}`)deverá ser informado na querystring.
```
/api/dataentities/{{my-data-entity}}/documents?_schema={{schema-name}}
```

## Restrições

- Gravação de documentos deverá informar sempre o `JSON Schema` na querystring.
- o campo deverá ser do tipo `integer`.
- O campo `auto increment` não pode ser `required` (obrigatório).
