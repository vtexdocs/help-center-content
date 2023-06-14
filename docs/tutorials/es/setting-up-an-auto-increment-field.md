---
title: 'Configurar un campo con autoincremento'
id: BMsHcTBXEsAMG22us4CKU
status: DRAFT
createdAt: 2018-03-19T14:50:46.715Z
updatedAt: 2022-09-28T12:52:52.524Z
publishedAt: 
firstPublishedAt: 2018-03-19T15:42:15.992Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: configurar-un-campo-con-auto-incremento
locale: es
legacySlug: configurar-un-campo-con-auto-incremento
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

El `auto increment` es una funcionalidad de Master Data que crea valores únicos y secuenciales automáticamente para campos del tipo `integer` cuando se crea un documento.

## Cómo configurar

Cree un campo de tipo `integer` y añada su nombre en la lista de campos de la propiedad `v-auto-increment`.
Atención: El campo no puede ser `required`.
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

## Cómo usar

Al guardar documentos, el JSON Schema (`_schema={{schema-name}}`) deberá ser informado en la querystring.
```
/api/dataentities/{{my-data-entity}}/documents?_schema={{schema-name}}
```

## Restricciones

- La grabación y actualización de documentos siempre debe indicar el JSON Schema en la querystring.
- El campo deberá ser del tipo `integer`.
- El campo `auto increment` no puede ser `required` (obligatorio).
