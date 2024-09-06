---
title: 'Comenzando a trabajar en el Master Data con JSON Schema'
id: 6uLbweaMBGqOm44cESMkEQ
status: ARCHIVED
createdAt: 2017-06-26T03:22:50.244Z
updatedAt: 2022-07-05T20:30:52.287Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:13:31.256Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: comenzando-a-trabajar-en-el-master-data-con-json-schema
locale: es
legacySlug: comenzando-a-trabajar-en-el-master-data-con-json-schema
subcategoryId: 5gtjaqCG7eIseyCI0aSqc2
---

### ¿Por qué elegimos JSON Schema?

**VTEX Master Data** es una poderosa herramienta de personalización de VTEX. La posibilidad de almacenar información que puede ser utilizada en el comercio electrónico resuelve diferentes escenarios. Además, al utilizar el Master Data usted no necesita preocuparse por la escalabilidad, seguridad y disponibilidad. El servicio se validó en producción, contando con la experiencia de años de Black Friday y atendiendo casos en que el servicio entra en el camino crítico de las tiendas (dependencia del Master Data para el cierre de compras). 

Por la familiaridad que nuestros usuarios tienen con *JSON*, escogimos el *JSON Schema* para darles más facilidades en el momento de crear su configuración. Y, en esta primera interacción, optamos por entregarles una API REST para que puedan utilizar ese nuevo tipo de configuración. 

Un *JSON Schema* es un JSON que define cómo se validarán sus datos. Puede encontrar más información en la [documentación externa sobre *JSON Schema*](http://json-schema.org) y en la guía [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema).

____

### Configurando un JSON Schema
El JSON de un *JSON Schema* está compuesto por algunas propiedades, estas son:

- Properties: los *campos* con sus tipos respectivos.
- Required: los *campos* obligatorios.
- Title: el nombre del Schema.

Ejemplo:
```
{
  "title": "Basic information of SKU",
  "properties": {
    "name": { "type": "string" }
  },
  "required": [ "name" ]
}
```

El JSON anterior define el formato básico de un SKU. En este caso, la propiedad solo es el campo *name*. También definimos ese campo como obligatorio, agregando su nombre dentro del Array de la propiedad *required* .

Ese JSON Schema valida el siguiente JSON:

```
{
  "name": "T-shirt"
}
```

Agregue estos ejemplos en el [JSON Schema Validator haciendo clic aquí](http://www.jsonschemavalidator.net/).

Si modificamos nuestro ejemplo de JSON en el Validator del link anterior y sustituimos su valor por un entero, recibiremos el siguiente mensaje de error: 

```
{
  "name": 1
}
```
**Invalid type. Expected String but got Integer.**


El *JSON Schema* solo valida los campos configurados en *properties*. Los campos excedentes permanecerán sin validación. Para restringir solo los campos configurados en el *JSON Schema* vea la información de la propiedad *additionalProperties* en la [documentación externa sobre *JSON Schema*](https://json-schema.org/understanding-json-schema/reference/object.html#properties).

_____________

### Más información
<!-- - [Tutorial: Creando una entidad de datos SKU en el Master Data con JSON Schema](https://app.contentful.com/spaces/alneenqid6w5/entries/6uLbweaMBGqOm44cESMkEQ)-->
- [Crear relaciones entre entidades de datos](https://help.vtex.com/es/tutorial/criar-relacionamentos-entre-entidades-de-dados--6TdIa6Q2IgWYUu2wsYIG48)
- [Configurar índices](https://help.vtex.com/es/tutorial/configurando-indice-no-master-data--tutorials_785)
- [Configurar *Triggers*](https://help.vtex.com/es/tutorial/configurar-triggers)
