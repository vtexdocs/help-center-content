---
title: 'Starting to work on Master Data with JSON Schema'
id: 6uLbweaMBGqOm44cESMkEQ
status: ARCHIVED
createdAt: 2017-06-26T03:22:50.244Z
updatedAt: 2022-07-05T20:30:52.287Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:13:31.256Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: starting-to-work-on-master-data-with-json-schema
locale: en
legacySlug: untitled-entry-2017-06-26-at-03-22-50
subcategoryId: 5gtjaqCG7eIseyCI0aSqc2
---

### Why did we choose JSON Schema?

The **VTEX Master Data** is a powerful VTEX customization tool. The possibility to store information that can be used within e-commerce fixes several scenarios. Besides, by using Master Data, you do not need to worry about scalability, security, or availability. This service is already validated in production, having years of Black Friday's experience and dealing with cases in which the service enters the critical path of the stores (dependence on Master Data for closing the purchase).

With our users' familiarity in dealing with *JSON*, we chose the *JSON Schema* to make it easier to create their settings. And in this first interaction, we wanted to provide a REST API to deal with this new type of configuration.

A *JSON Schema* is a JSON that defines how your data will be validated. Further information can be found in [External documentation on *JSON Schema*](http://json-schema.org) and the [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema) guide.

____

### Configuring a JSON Schema
The JSON of a *JSON Schema* is composed of some properties, they are:

- Properties: *fields* with their respective types;
- Required: mandatory *fields*
- Title: Schema name

Example:
```
{
  "title": "Basic information of SKU",
  "properties": {
    "name": { "type": "string" }
  },
  "required": [ "name" ]
}
```

JSON above defines the basic format of a SKU. In this case, only the *name* property. We also define this field as mandatory by adding the *field* name into the Array of the *required* property.

This JSON Schema validates the following JSON:

```
{
  "name": "T-shirt"
}
```

Add these examples to [JSON Schema Validator by clicking here](http://www.jsonschemavalidator.net/).

If we change our JSON example in the Validator above to an integer we will be given the following error message:

```
{
  "name": 1
}
```
**Invalid type. Expected String but got Integer.**

The *JSON Schema* validates only the *fields* configured in *properties*. The exceeding *fields* will be maintained without validation. To preserve only the *fields* configured in the *JSON Schema* see the *additionalProperties* property information in [external documentation about *JSON Schema*](https://json-schema.org/understanding-json-schema/reference/object.html#properties).

_____________

### More information
<!-- - [Tutorial: Creating the SKU Data Entity in Master Data with JSON Schema](https://app.contentful.com/spaces/alneenqid6w5/entries/6uLbweaMBGqOm44cESMkEQ)-->
- [Creating relationships between data entities](https://help.vtex.com/tutorial/criar-relacionamentos-entre-entidades-de-dados--6TdIa6Q2IgWYUu2wsYIG48)
- [Dealing with indexes](https://help.vtex.com/tutorial/configurando-indice-no-master-data--tutorials_785)
- [Setting up *Triggers*](https://help.vtex.com/tutorial/configurar-triggers)
