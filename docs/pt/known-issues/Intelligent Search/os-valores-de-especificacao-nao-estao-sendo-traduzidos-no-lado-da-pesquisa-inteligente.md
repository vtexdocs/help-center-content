---
title: 'Os valores de especificação não estão sendo traduzidos no lado da Pesquisa Inteligente'
id: 3z40dVHozP36jrMvxq3TKe
status: PUBLISHED
createdAt: 2024-09-23T20:47:41.373Z
updatedAt: 2024-09-26T21:39:53.046Z
publishedAt: 2024-09-26T21:39:53.046Z
firstPublishedAt: 2024-09-23T20:47:42.169Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: specification-values-not-being-translated-in-intelligent-search-side
locale: pt
kiStatus: Backlog
internalReference: 784129
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



A tradução de campos de um idioma para outro usando o aplicativo `vtex.catalog-graphql` e a disponibilização deles para serem pesquisados na Pesquisa inteligente não está funcionando corretamente.

O processo de indexação e o aplicativo `vtex.catalog-graphql`_ diferem ao lidar com valores de especificação. A diferença é que, ao chamar `vtex.messages`, o processo de indexação usa o _FieldValueId_ do valor da especificação e, ao registrar traduções, o `vtex.catalog-graphql` usa o _FieldId_ da especificação. Essa sutil diferença faz com que as traduções de valores de especificação criados usando o aplicativo `vtex.catalog-graphql` não sejam coletadas durante o processo de indexação.

## Simulação



Siga o guia sobre valores de especificação de tradução: https://developers.vtex.com/docs/guides/catalog-internationalization

Verifique se a tradução não se refletirá nas facetas do lado do IS

## Workaround




- Obtenha todos os valores de especificação que você precisa traduzir e seus _FieldValueIds_.
- Use a consulta traduzida para obter a tradução atual do aplicativo de mensagens usando o _FieldId_ como contexto (no exemplo abaixo, _Red_ é o valor da especificação e 1 é o _FieldId _ para uma especificação de cor).

    query GetTranslation($args: TranslateArgs!) {translate(args: $args)}{"args": { "indexedByFrom": [ { "from": "en-US", "messages": [ { "content": "Red", "context": "1" } ] } ], "to": "pt-BR"}}



- Crie uma nova tradução usando o FieldValueId como contexto e a mutação translate (no exemplo abaixo, 11 é o _FieldValueId_ para o valor de especificação _Red_).

    mutation Save($saveArgs: SaveArgsV2!) {saveV2(args: $saveArgs)}{"saveArgs": { "to": "pt-BR", "messages": [ { "srcLang": "en-US", "srcMessage": "Red", "context": "11", "targetMessage": "Vermelho"    }]}}


Em resumo, em vez de salvar a propriedade "context" com base apenas no `fieldValueId`, você também precisará salvá-la no contexto das mensagens usando o `fieldId`.

Observe que ambas as traduções são necessárias, pois diferentes partes da loja usarão maneiras diferentes de consultá-la; o "FieldValueId" é usado pelas informações do Catalog/Search, e o "FieldId" pode ser usado diretamente pela estrutura do Store.





