---
title: 'Creating relationships between data entities using API'
id: 6TdIa6Q2IgWYUu2wsYIG48
status: DRAFT
createdAt: 2017-12-04T18:53:34.463Z
updatedAt: 2022-07-05T15:40:23.354Z
publishedAt: 
firstPublishedAt: 2017-12-06T18:39:34.826Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: creating-relationships-between-data-entities
legacySlug: creating-relationships-between-data-entities
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

This document shows how to create a relationship between data entities in the new version of VTEX Master Data.

It's important to know the structure of the JSON Schema. If you don't know what that is, please check out the external documentation [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema).

When setting up a JSON Schema, you may configure a field to link to another data entity using the ID or a field to which there is some associated index.

Example of link through ID:
```
{
	"properties": {
		"clientEmail": { "type": "string" },
		"address": {
			"type": "string",
			"link": "https://vtexaccount.vtexcommercestable.com.br/api/dataentities/address/schemas/address-schema-v1"
		}
	}
}
```

Example of link through a field with an index:
```
{
	"properties": {
		"clientEmail": { "type": "string" },
		"addressName": {
			"type": "string",
			"link": "https://vtexaccount.vtexcommercestable.com.br/api/dataentities/address/schemas/address-schema-v1",
			"linked_field": "addressName"
		}
	}
}
```

As you may have noticed, in the `link` property we associate a JSON Schema of the data entity with which we want to create a relationship.

This will create in the response a new field with the JSON of the related document. If the document doesn't exist with that key, the property will be filled with `null`. 

The fields of the returned object will be same that are specified in the `v-default-fields`.

Example of a GET without schema:

PATH: `/api/dataentities/client/documents/xptodoc1`
```
{
	"clientEmail": "vtext@mail.com",
	"address": "1"
}
```

Example of a GET query using schema with link:

PATH: `/api/dataentities/client/documents/xptodoc1`
```
{
	"clientEmail": "vtext@mail.com",
	"address": "1"
	"address_linked": {
		"id": "1"
		"city": "Rio de Janeiro"
	}
}
```
