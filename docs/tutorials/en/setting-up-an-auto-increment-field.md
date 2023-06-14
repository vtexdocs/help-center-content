---
title: 'Setting up an auto increment field'
id: BMsHcTBXEsAMG22us4CKU
status: DRAFT
createdAt: 2018-03-19T14:50:46.715Z
updatedAt: 2022-09-28T12:52:52.524Z
publishedAt: 
firstPublishedAt: 2018-03-19T15:42:15.992Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: setting-up-an-auto-increment-field
legacySlug: setting-up-an-auto-increment-field
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

The `auto increment` is a Master Data feature that automatically creates unique and sequential values to `integer` type fields when a document is created.

## How to set it up

Create an `integer` field and add its name in the `v-auto-increment` property.
Attention: The field cannot be `required`.
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

## How to use it

When saving documents you must add the JSON Schema (`_schema={{schema-name}}`) in querystring.
```
/api/dataentities/{{my-data-entity}}/documents?_schema={{schema-name}}
```

## Constraints

- Insert and update must add the JSON Schema in the querystring.
- The field type must be an `integer`.
- The `auto increment` field cannot be `required`.
