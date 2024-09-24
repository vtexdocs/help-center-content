---
title: 'Specification Values not being translated in Intelligent Search side'
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
locale: en
kiStatus: Backlog
internalReference: 784129
---

## Summary



Translating fields from one language to another using `vtex.catalog-graphql` app and making them available to be searched inside the Intelligent Search is not working properly

The indexing process and the `vtex.catalog-graphql`_ _app differ when handling Specification Values. The difference is that when calling `vtex.messages`, the indexing process uses the Specification Value's _FieldValueId_, and when registering translations, the `vtex.catalog-graphql` uses the Specification's _FieldId_. This subtle difference results in translations of Specification Values created using the `vtex.catalog-graphql `app not being picked up during the indexing process.


##

## Simulation



Follow the guide about translation specification values:

https://developers.vtex.com/docs/guides/catalog-internationalization

Check that the translation won't reflect on facets on the IS side.


##

## Workaround




- Get all Specification Values that you need to translate and their _FieldValueIds_.
- Use the translated query to grab the current translation from the messages app using the _FieldId_ as context (in the example below, _Red_ is the Specification Value, and 1 is the _FieldId _for a Color specification).

    query GetTranslation($args: TranslateArgs!) {translate(args: $args)}{"args": { "indexedByFrom": [   {      "from": "en-US",      "messages": [        {          "content": "Red",          "context": "1"        }     ]    } ], "to": "pt-BR"}}



- Create a new translation using the FieldValueId as context and the translate mutation (in the example below, 11 is the _FieldValueId_ for the Specification Value _Red_).


    mutation Save($saveArgs: SaveArgsV2!) {saveV2(args: $saveArgs)}{"saveArgs": { "to": "pt-BR", "messages": [   {      "srcLang": "en-US",      "srcMessage": "Red",      "context": "11",      "targetMessage": "Vermelho"    }]}}


Basically, instead of saving the reference based on `fieldValueId`, you will need to save the reference in the messages' context using the `fieldId`.



