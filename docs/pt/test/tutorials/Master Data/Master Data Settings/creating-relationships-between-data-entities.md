---
title: 'Criar relacionamentos entre entidades de dados usando API'
id: 6TdIa6Q2IgWYUu2wsYIG48
status: ARCHIVED
createdAt: 2017-12-04T18:53:34.463Z
updatedAt: 2022-07-05T15:40:23.354Z
publishedAt: 
firstPublishedAt: 2017-12-06T18:39:34.826Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: criar-relacionamentos-entre-entidades-de-dados
locale: pt
legacySlug: criar-relacionamentos-entre-entidades-de-dados
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

Este artigo mostra como criar um relacionamento entre entidades de dados na nova versão do VTEX Master Data.

É importante conhecer a estrutura do JSON Schema. Se você não sabe o que é isso, consulte a documentação externa [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema).

Ao configurar um JSON Schema, você pode definir um campo para vincular a outra entidade de dados usando o ID ou um campo ao qual há algum índice associado.

Exemplo de link por meio do ID:
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

Exemplo de link por meio de um campo com um índice:
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

Como você pode ter notado, na propriedade `link` associamos um JSON Schema da entidade de dados com a qual queremos criar um relacionamento.

Isso criará na response um novo campo com o JSON do documento relacionado. Se o documento não existir com essa chave, a propriedade será preenchida com `null`.

Os campos do objeto retornado serão os mesmos que aqueles especificados nos `v-default-fields`.

Exemplo de um GET sem schema:

PATH: `/api/dataentities/client/documents/xptodoc1`
```
{
	"clientEmail": "vtext@mail.com",
	"address": "1"
}
```

Exemplo de um GET usando schema com link:

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
