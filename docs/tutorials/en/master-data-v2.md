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
locale: en
legacySlug: master-data-v2
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

<div class="alert alert-warning">
<strong>Attention:</strong> This version isn't compliant with data entities of old version. It's possible to use this configuration only to new data entities.</div>

## Introduction

This document will guide you to save, validate and get documents at VTEX Master Data. In this version we use JSON Schema to validate documents. If you don't know what that is, please, check out the [JSON Schema documentation](https://spacetelescope.github.io/understanding-json-schema/).

It's not necessary to create a JSON Schema to save documents. You can save to any data entity if the content is a valid JSON.

The JSON Schema indicates how to validate and index. A data entity may or may not have multiple JSON Schemas.
![master-data-data-entity-schemas](//images.contentful.com/alneenqid6w5/5Ms8eS24xOsGWcEGY0WKwu/724d0585090ee2d3bf6fc47dad7a3859/master-data-data-entity-schemas.jpg)

A document could be compliant with none or multiple schemas.
![master-data-documents-compliant](//images.contentful.com/alneenqid6w5/7m7NMV5Hc4Wq8aKeGeWiAY/29301b6873e1549c244d56e15cf4caf7/master-data-documents-compliant.jpg)

This means that JSON Schema is a format of documents in data entities.

## Saving documents

If you don't need to validate your data, you may save your documents without any setup. Just indicate the data entity and some access credential.

In case you need some validation, you must create a JSON Schema before. After that, you'll add the name of the JSON Schema to the query.

`api/dataentities/{data-entity-name}/documents?_schema={my-schema}`

## Getting documents

There are three ways of getting documents. If you have the ID you must use the documents API.

`api/dataentities/{data-entity-name}/documents/{id}`

In case you need to get a collection of documents, you may use the search API.

`api/dataentities/{data-entity-name}/search`

And, finally, if you want to get all documents, you must use the scroll API.

`api/dataentities/{data-entity-name}/scroll`

As said before, the documents could be compliant with none or multiple JSON Schemas. You may add the schema parameter to the query in order to filter the documents based in the JSON Schema.

```
api/dataentities/{data-entity-name}/documents/{id}?_schema={my-schema}
api/dataentities/{data-entity-name}/search?_schema={my-schema}
api/dataentities/{data-entity-name}/scroll?_schema={my-schema}
```

## Indexing fields

Use the property `v-indexed` to set up the fields that are indexed. You must add the field to the properties in order to generate the indexer configuration with the right type.

```
{
  "properties": { 
    "field1": { "type": "string" }, 
    "field2": { "type": "integer" } 
  },
  "v-indexed": [ "field1", "field2" ]
}
```
## Default fields

Use the property `v-default-fields` to configure wich fields will return without indication in the \_fields query string. 

```
{
  "v-default-fields": [ "field1", "field2" ]
}
```

## Inheritance of schemas

Use the property `v-canonicalto` to set up another JSON Schema in the same data entity to inheritance.

```
{
  "v-canonicalto": "https://{host}/api/dataentities/{data-entity-name}/schemas/{my-base-schema}"
}
```

## Enabling public fields

Use the property `v-security` to set up which fields are public (request without user authentication).

```
{
  "v-security": {
    "allowGetAll": false,
    "publicRead": [ "field1" ],
    "publicWrite": [ "field1" ],
    "publicFilter": [ "field1" ]
  }
}
```

## Disabling default caching

Use the property `v-cache` to disable default caching.

```
{
  "v-cache": false
}
```

[Look how to setting up triggers in Master Data](https://help.vtex.com/en/tutorial/setting-up-triggers)
