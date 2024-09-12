---
title: 'Começando a trabalhar no Master Data com JSON Schema'
id: 6uLbweaMBGqOm44cESMkEQ
status: ARCHIVED
createdAt: 2017-06-26T03:22:50.244Z
updatedAt: 2022-07-05T20:30:52.287Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:13:31.256Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: comecando-a-trabalhar-no-master-data-com-json-schema
locale: pt
legacySlug: comecando-a-trabalhar-no-master-data-com-json-schema
subcategoryId: 5gtjaqCG7eIseyCI0aSqc2
---

### Por que escolhemos JSON Schema?

O **VTEX Master Data** é uma poderosa ferramenta de customizações da VTEX. A possibilidade de armazenar informações que poderão ser utilizadas dentro do e-commerce resolve diversos cenários. E, além disso, utilizando o Master Data você não precisa se preocupar com escalabilidade, segurança e disponibilidade. Esse serviço já está validado em produção tendo por experiência anos de Black Friday's e lidando com casos em que o serviço entra no caminho crítico das lojas (dependência do Master Data para fechamento de compra).

Com a familiaridade de nossos usuários em lidar com *JSON*, escolhemos o *JSON Schema* para dar uma maior facilidade na hora de criar suas configurações. E, nessa primeira iteração, escolhemos entregar uma API REST para poder lidar com esse novo tipo de configuração.

Um *JSON Schema* é um JSON que define como seus dados serão validados. Mais informações podem ser encontradas na [documentação externa sobre *JSON Schema*](http://json-schema.org) e no guia [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema).

____

### Configurando um JSON Schema
O JSON de um *JSON Schema* é composto de algumas propriedades, são elas:

- Properties: Os *fields* com seus respectivos tipos;
- Required: *fields* obrigatórios
- Title: Um nome para o Schema

Exemplo:
```
{
  "title": "Basic information of SKU",
  "properties": {
    "name": { "type": "string" }
  },
  "required": [ "name" ]
}
```

O JSON acima define o formato básico de um SKU. No caso, somente a propriedade *name*. Também definimos esse campo como obrigatório, adicionando o nome do *field* dentro do Array da propriedade *required*.

Esse JSON Schema valida o seguinte JSON:

```
{
  "name": "T-shirt"
}
```

Adicione esses exemplos no [JSON Schema Validator clicando aqui](http://www.jsonschemavalidator.net/).

Se mudarmos nosso JSON de exemplo no Validator acima para um inteiro receberemos a seguinte mensagem de erro:

```
{
  "name": 1
}
```
**Invalid type. Expected String but got Integer.**


O *JSON Schema* valida somente os *fields* configurados em *properties*. Os *fields* excedentes serão persistidos sem validação. Para restrigir somente os *fields* configurados no *JSON Schema* veja as informações da propriedade *additionalProperties* na [documentação externa sobre *JSON Schema*](https://json-schema.org/understanding-json-schema/reference/object.html#properties).

_____________

### Mais informações
<!-- - [Tutorial: Criando a Entidade de Dados SKU no Master Data com JSON Schema](https://app.contentful.com/spaces/alneenqid6w5/entries/6uLbweaMBGqOm44cESMkEQ)-->
- [Criar relacionamentos entre entidades de dados](https://help.vtex.com/pt/tutorial/criar-relacionamentos-entre-entidades-de-dados--6TdIa6Q2IgWYUu2wsYIG48)
- [Lidando com Índices](https://help.vtex.com/pt/tutorial/configurando-indice-no-master-data--tutorials_785)
- [Configurando *Triggers*](https://help.vtex.com/pt/tutorial/configurar-triggers)
