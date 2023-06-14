---
title: 'Tutorial: Criando a Entidade de Dados SKU no Master Data com JSON Schema'
id: RGHAXehCyQCkMSoq0A6iS
status: DRAFT
createdAt: 2017-06-26T19:00:34.174Z
updatedAt: 2020-05-25T18:55:30.140Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Master Data
author: 
slug: tutorial-criando-a-entidade-de-dados-sku-no-master-data-com-json-schema
locale: pt
legacySlug: tutorial-criando-a-entidade-de-dados-sku-no-master-data-com-json-schema
subcategory: 
---

Se você já leu o artigo <a href="https://app.contentful.com/spaces/alneenqid6w5/entries/6uLbweaMBGqOm44cESMkEQ" target="_blank">Começando a trabalhar no Master Data com JSON Schema</a> deve ter visto que a configuração de um *JSON Schema* é bem simples. Neste tutorial vamos trabalhar com a API do VTEX Master Data para criar nossos *JSON Schemas* e salvar SKU's dentro de uma Entidade de Dados nova.

___________

### O que preciso saber para fazer este tutorial?

1. Acesso a salvar e consultar documentos no VTEX Master Data em alguma loja VTEX;
2. Conhecimento da notação [JSON](http://www.json.org/json-pt.html);
3. Conhecimento de API REST;
4. 

_________

## Passo 1. Conhecendo nosso objeto

A primeira coisa que devemos pensar é: Qual o formato do meu JSON?

Para nosso exemplo vamos lidar com o seguinte objeto JSON:

```
{
  "ean": "ean-camisa-1",
  "name": "Camisa Polo",
  "price": 30
}
```

Temos nosse JSON 3 *fields*: 
- ean --> string
- name --> string
- price --> integer

## Passo 2. Gerando um JSON Schema
Para nosso objeto iremos gerar o seguinte *JSON Schema*:
```
{
  "properties": {
    "ean": { "type": "string" },
    "name": { "type": "string" },
    "price": { "type": "integer" }
  }
}
```

Esses são os campos básicos e obrigatórios de nosso SKU. Para configurá-los como obrigatórios basta adicionar na propriedade *required* o nome dos mesmos como a seguir:

```
{
  "properties": {
    "ean": { "type": "string" },
    "name": { "type": "string" },
    "price": { "type": "integer" }
  },
  "required": [ "ean", "name", "price" ]
}
```

Agora, vamos dar um título e uma descrição ao nosso *JSON Schema* para que os demais usuários saibam o que esse Schema faz.

```
{
  "title": "Base SKU",
  "description": "Validates basic SKU information",
  "properties": {
    "ean": { "type": "string" },
    "name": { "type": "string" },
    "price": { "type": "integer" }
  },
  "required": [ "ean", "name", "price" ]
}
```

### Passo 3. Salvando o JSON Schema no Master Data

Agora, vamos salvar nosso *JSON Schema* no Master Data. Para isso, vamos fazer a seguinte chamada:

```
host: https://api.vtex.com/{minha-loja}/dataentities/sku_sample/schemas/basic
method: PUT
Headers: 
  Accept: application/vnd.vtex.ds.v10+json
  x-vtex-api-appKey: {{your-AppKey}}
  x-vtex-api-appToken: {{your-AppToken}}
  Content-Type: application/json
```

### Passo 4. Consultando o JSON Schema no Master Data
NOT IMPLEMENTED

### Passo 5. Salvando um documento validando com JSON Schema
NOT IMPLEMENTED
