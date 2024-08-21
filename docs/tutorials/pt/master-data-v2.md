---
title: 'Master Data v2'
id: 3JJ1mlzuo88w22gO0gy0QS
status: DRAFT
createdAt: 2017-12-04T18:26:49.848Z
updatedAt: 2022-08-05T20:44:19.598Z
publishedAt: 
firstPublishedAt: 2017-12-06T18:49:21.256Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: master-data-v2
locale: pt
legacySlug: master-data-v2
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

>⚠️ **Atenção:** Esta versão não é compatível com entidades de dados da versão antiga. É possível usar esta configuração somente para novas entidades de dados.

Este artigo explica como salvar, validar e obter documentos no Master Data da VTEX. Nesta versão, usamos **JSON Schema** para validar documentos.

Se você não sabe o que é JSON Schema, por favor, confira a documentação externa [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema/).

Não é necessário criar um JSON Schema para salvar documentos. Você pode salvar em qualquer entidade de dados se o conteúdo for um JSON válido.

O JSON Schema indica como validar e indexar. Uma entidade de dados pode ou não ter múltiplos JSON Schemas.

![master-data-data-entity-schemas](https://images.contentful.com/alneenqid6w5/5Ms8eS24xOsGWcEGY0WKwu/724d0585090ee2d3bf6fc47dad7a3859/master-data-data-entity-schemas.jpg)

Um documento pode ser compatível com múltiplos JSON Schemas, mas também com nenhum.

![master-data-documents-compliant](https://images.contentful.com/alneenqid6w5/7m7NMV5Hc4Wq8aKeGeWiAY/29301b6873e1549c244d56e15cf4caf7/master-data-documents-compliant.jpg)

Isso significa que o JSON Schema é um formato de documentos em entidades de dados.

## Usando a API

A API do Master Data v2 é praticamente a mesma da versão anterior, com algumas peculiaridades para atender aos novos recursos.

A **documentação completa** da API se encontra no [Developer Portal](https://developers.vtex.com/reference/master-data-api-v2-overview).

### Salvando documentos

Se você não precisa validar seus dados, pode salvar os documentos sem qualquer configuração. Basta indicar a entidade de dados e algumas credenciais com acesso.

No caso de você precisar de alguma validação, você deve criar um Esquema JSON antes. Depois disso, você adicionará na consulta o parâmetro com nome do Esquema JSON.

`api/dataentities/{data-entity-name}/documents?_schema={my-schema}`

### Obtendo documentos

Existem três maneiras de obter documentos. Se tiver o ID, você deve usar a API de documentos.

`api/dataentities/{data-entity-name}/documents/{id}`

Para obter uma coleção de documentos, você pode usar a API de search.

`api/dataentities/{data-entity-name}/search`

E, finalmente, caso precise obter todos os documentos, você deve usar a API de scroll.

`api/dataentities/{data-entity-name}/scroll`

Como dissemos antes, os documentos podem ser compatíveis com nenhum ou com múltiplos JSON Schemas. Você pode adicionar na consulta o parâmetro do schema para filtrar os documentos com base no JSON Schema.

```
api/dataentities/{data-entity-name}/documents/{id}?_schema={my-schema}
api/dataentities/{data-entity-name}/search?_schema={my-schema}
api/dataentities/{data-entity-name}/scroll?_schema={my-schema}
```

## Configurando o JSON Schema

A leitura e alteração dos JSON Schemas é feita através da API do Master Data. As rotas específicas estão nas [pasta Schemas](https://developers.vtex.com/reference/schemas). Informações adicionais também podem ser encontradas no artigo [Começando a trabalhar no Master Data com JSON Schema](https://help.vtex.com/pt/tutorial/comecando-a-trabalhar-no-master-data-com-json-schema--6uLbweaMBGqOm44cESMkEQ)

Abaixo, indicamos as propriedades exclusivas do Master Data para configuração dos schemas para as entidades de dados.

### Campos de indexação

Use a propriedade `v-indexed` no schema para configurar os campos indexados. Você deve adicionar o campo às propriedades para gerar a configuração no indexador com o tipo correto.

```
{
  "properties": { 
    "field1": { "type": "string" }, 
    "field2": { "type": "integer" } 
  },
  "v-indexed": [ "field1", "field2" ]
}
```
### Campos padrão

Use a propriedade `v-default-fields` no schema para configurar quais campos retornarão sem indicação na query string `_fields`.

```
{
  {...},
  "v-default-fields": [ "field1", "field2" ]
}
```

### Herança de schemas

Use a propriedade `v-canonicalto` para herdar as configurações de outro JSON Schema na mesma entidade de dados.

```
{
  {...},
  "v-canonicalto": "https://{host}/api/dataentities/{data-entity-name}/schemas/{my-base-schema}"
}
```

### Habilitar campos públicos

Use a propriedade `v-security` para configurar quais campos são públicos (request sem usuário autenticado).

```
{
  {...},
  "v-security": {
    "allowGetAll": false,
    "publicRead": [ "field1" ],
    "publicWrite": [ "field1" ],
    "publicFilter": [ "field1" ]
  }
}
```

### Desativar o cache padrão

Use a propriedade `v-cache` para desativar o cache padrão.

```
{
  {...},
  "v-cache": false
}
```

### Hooks (triggers)

[Veja como configurar Triggers](https://help.vtex.com/pt/tutorial/configurar-triggers)
