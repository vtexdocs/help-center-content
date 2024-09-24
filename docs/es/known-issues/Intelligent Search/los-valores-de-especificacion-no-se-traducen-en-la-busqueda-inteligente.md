---
title: 'Los valores de especificación no se traducen en la búsqueda inteligente'
id: 3z40dVHozP36jrMvxq3TKe
status: PUBLISHED
createdAt: 2024-09-23T20:47:41.373Z
updatedAt: 2024-09-23T20:47:42.169Z
publishedAt: 2024-09-23T20:47:42.169Z
firstPublishedAt: 2024-09-23T20:47:42.169Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: specification-values-not-being-translated-in-intelligent-search-side
locale: es
kiStatus: Backlog
internalReference: 784129
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



La traducción de campos de un idioma a otro mediante la aplicación `vtex.catalog-graphql` y su disponibilidad para realizar búsquedas en la búsqueda inteligente no funciona correctamente.

El proceso de indexación y la aplicación "vtex.catalog-graphql" difieren en el manejo de los valores de especificación. La diferencia es que cuando se llama a `vtex.messages`, el proceso de indexación utiliza el _FieldValueId_ del valor de especificación, y cuando se registran traducciones, `vtex.catalog-graphql` utiliza el _FieldId_ de la especificación. Esta sutil diferencia provoca que las traducciones de los valores de especificación creados mediante la aplicación `vtex.catalog-graphql` no se recojan durante el proceso de indexación.


##

## Simulación



Siga la guía sobre la traducción de valores de especificación:

https://developers.vtex.com/docs/guides/catalog-internationalization

Compruebe que la traducción no se reflejará en las facetas del lado IS.



## Workaround




- Obtenga todos los valores de especificación que necesita traducir y sus _FieldValueIds_.
- Utilice la consulta traducida para obtener la traducción actual de la aplicación de mensajes utilizando el _FieldId_ como contexto (en el ejemplo siguiente, _Red_ es el valor de especificación, y 1 es el _FieldId _para una especificación de color).

    query GetTranslation($args: TranslateArgs!) {translate(args: $args)}{"args": {"indexedByFrom": [ {"from": "en-US", "messages": [ { "content": "Red", "context": "1" } } ], "to": "pt-BR"}}



- Cree una nueva traducción utilizando el FieldValueId como contexto y la mutación translate (en el ejemplo siguiente, 11 es el _FieldValueId_ para el valor de especificación _Red_).


    mutation Save($saveArgs: SaveArgsV2!) {saveV2(args: $saveArgs)}{"saveArgs": {"to": "pt-BR", "messages": [ { "srcLang": "en-US", "srcMessage": "Red", "context": "11", "targetMessage": "Vermelho"    }]}}


Básicamente, en lugar de guardar la referencia basada en `fieldValueId`, tendrá que guardar la referencia en el contexto de los mensajes utilizando el `fieldId`.




