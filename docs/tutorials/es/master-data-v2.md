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
legacySlug: master-data-v2
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

<div class="alert alert-warning">
<strong>Atención:</strong> Esta versión no es compatible con las entidades de datos de la versión anterior. Se puede utilizar esta configuración sólo para nuevas entidades de datos.</div>

## Introducción

Este artículo explica cómo guardar, validar y obtener documentos en el Master Data de VTEX. En esta versión, utilizamos JSON Schema para validar documentos. Si usted no sabe qué es JSON Schema, por favor, consulte la documentación externa [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema/).

No es necesario crear un JSON Schema para guardar documentos. Usted puede guardar en cualquier entidad de datos si el contenido es un JSON válido.

JSON Schema indica cómo validar e indizar. Una entidad de datos puede o no tener varios JSON Schemas.
![master-data-data-entity-schemas](//images.contentful.com/alneenqid6w5/5Ms8eS24xOsGWcEGY0WKwu/724d0585090ee2d3bf6fc47dad7a3859/master-data-data-entity-schemas.jpg)

Un documento puede ser compatible con varios JSON Schemas, pero también con ninguno.
![master-data-documents-compliant](//images.contentful.com/alneenqid6w5/7m7NMV5Hc4Wq8aKeGeWiAY/29301b6873e1549c244d56e15cf4caf7/master-data-documents-compliant.jpg)

Esto significa que JSON Schema es un formato de documentos en entidades de datos.

## Guardar documentos

Si no necesita validar sus datos, usted puede guardar sus documentos sin ninguna configuración. Sólo tiene que indicar la entidad de datos y alguna credencial de acceso.

En caso de que necesite alguna validación, se debe crear un JSON Schema antes. Después de eso, usted agregará en la consulta el nombre del JSON Schema.

`api/dataentities/{data-entity-name}/documents?_schema={my-schema}`

## Obteniendo documentos

Hay tres maneras de obtener documentos. Si tiene el identificador, usted debe utilizar la API de documentos.

`api/dataentities/{data-entity-name}/documents/{id}`

Para obtener una colección de documentos, se puede utilizar la API de búsqueda.

`api/dataentities/{data-entity-name}/search`

Y, finalmente, si necesita obtener todos los documentos, usted debe utilizar la API de scroll.

`api/dataentities/{data-entity-name}/scroll`

Como hemos dicho antes, los documentos pueden ser compatibles con ninguno o con varios JSON Schemas. Usted puede agregar a la consulta el parámetro del schema para filtrar los documentos basados en el JSON Schema.

```
api/dataentities/{data-entity-name}/documents/{id}?_schema={my-schema}
api/dataentities/{data-entity-name}/search?_schema={my-schema}
api/dataentities/{data-entity-name}/scroll?_schema={my-schema}
```

## Campos de indización

Utilice la propiedad `v-indexed` para configurar los campos indexados. Se debe agregar el campo a las propiedades para generar la configuración en el indizador con el tipo correcto.

```
{
  "properties": { 
    "field1": { "type": "string" }, 
    "field2": { "type": "integer" } 
  },
  "v-indexed": [ "field1", "field2" ]
}
```
## Campos estándar

Utilice la propiedad `v-default-fields` para configurar qué campos vuelven sin indicación en la query string \_fields.

```
{
  "v-default-fields": [ "field1", "field2" ]
}
```

## Herencia de los esquemas

Utilice la propiedad `v-canonicalto` para configurar otro JSON Schema en la misma entidad de datos para herencia.

```
{
  "v-canonicalto": "https://{host}/api/dataentities/{data-entity-name}/schemas/{my-base-schema}"
}
```

## Habilitar campos públicos

Utilice la propiedad `v-security` para configurar qué campos son públicos (request sin usuario autenticado).

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

## Deshabilitar la caché predeterminada

Utilice la propiedad `v-cache` para deshabilitar el cache predeterminado.

```
{
  "v-cache": false
}
```

[Mira cómo configurar triggers en Master Data](https://help.vtex.com/es/tutorial/configurar-triggers)
