---
title: 'Crear relaciones entre entidades de datos usando API'
id: 6TdIa6Q2IgWYUu2wsYIG48
status: DRAFT
createdAt: 2017-12-04T18:53:34.463Z
updatedAt: 2022-07-05T15:40:23.354Z
publishedAt: 
firstPublishedAt: 2017-12-06T18:39:34.826Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: crear-relaciones-entre-entidades-de-datos
legacySlug: crear-relaciones-entre-entidades-de-datos
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

En este artículo se muestra cómo crear una relación entre entidades de datos en la nueva versión de VTEX Master Data.

Es importante conocer la estructura del JSON Schema. Si no sabe qué es esto, consulte la documentación externa [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema).

Cuando configure un JSON Schema, usted puede definir un campo para enlazar a otra entidad de datos mediante el identificador o un campo al que hay algún índice asociado.

Ejemplo de link a través del ID:
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

Ejemplo de link por medio de un campo con un índice:
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

Como puede haber notado, en la propiedad `link` asociamos un JSON Schema de la entidad de datos con la que queremos crear una relación.

Esto creará en la respuesta un nuevo campo con el JSON del documento relacionado. Si el documento no existe con esta clave, la propiedad se rellena con `null`.

Los campos del objeto devuelto serán los mismos que los especificados en los `v-default-fields`.

Ejemplo de un GET sin schema:

PATH: `/api/dataentities/client/documents/xptodoc1`
```
{
	"clientEmail": "vtext@mail.com",
	"address": "1"
}
```

Ejemplo de un GET utilizando schema con link:

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
