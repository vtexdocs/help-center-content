---
title: 'Salvar documentos com triggers'
id: 2j6N4aqbty6akUsiU2aCeo
status: DRAFT
createdAt: 2018-04-10T15:06:46.310Z
updatedAt: 2020-07-29T19:59:22.912Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:45:36.448Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: salvar-documentos-con-triggers
locale: pt
legacySlug: salvar-documentos-con-triggers
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Propriedades da chamada:

| Campo     | Descrição     |
| ---------- | ---------- |
| dataEntity       | O nome da entidade de dados       |
| json       | O objeto que será salvo       |

## Dynamic Expressions

Utilize dynamic expressions para usar as propriedades do documento nessas configurações. Para mais informações, consulte o artigo sobre [Dynamic Expressions](/pt/tutorial/dynamic-expressions)

## Exemplo

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
