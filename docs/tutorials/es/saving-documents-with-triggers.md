---
title: 'Guardar documentos con triggers'
id: 2j6N4aqbty6akUsiU2aCeo
status: DRAFT
createdAt: 2018-04-10T15:06:46.310Z
updatedAt: 2020-07-29T19:59:22.912Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:45:36.448Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: guardar-documentos-con-triggers
legacySlug: guardar-documentos-con-triggers
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Propriedades del request:

| Campo     | Descripción     |
| ---------- | ---------- |
| dataEntity       | El nombre de la entidad de datos       |
| json       | El objeto que será guardado       |

## Dynamic Expressions

Utilize dynamic expressions para usar las propriedades del documento en estas configuraciones. Para más información, lea el artículo sobre [Dynamic Expressions](/es/tutorial/dynamic-expressions)

## Ejemplo

```
    {
      "properties": { ... },
      "v-triggers": [
        {
          "type": "save",
	        "json": {
		        "name": "{!name}"
	        }
        }
      ]
    }
```
