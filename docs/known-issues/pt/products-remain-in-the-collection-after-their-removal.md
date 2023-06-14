---
title: 'Produtos permanecem na coleção após sua remoção'
id: hyuFn96MqOsyIoM6iUqWo
status: PUBLISHED
createdAt: 2017-06-16T20:47:54.231Z
updatedAt: 2019-12-31T15:17:58.380Z
publishedAt: 2019-12-31T15:17:58.380Z
firstPublishedAt: 2017-06-16T22:45:30.819Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slug: produtos-permanecem-na-colecao-apos-sua-remocao
kiStatus: Fixed
internalReference: 
---

## Sumário

Ao remover produtos de uma coleção, eles não são reindexados. Isso faz com que a coleção ainda responda com aqueles produtos enquanto o evento de indexação não acontecer por outros meios.

Essa situação afeta qualquer cenário que faça uso de coleções para determinar o mix de produtos, como políticas comerciais, landing pages, vitrines, etc.

## Simulação

1. Ter uma coleção com um ou mais produtos.
2. Remover qualquer produto desta coleção.
3. Verificar que a coleção ainda responde com este produto em seu grupo.

## Workaround

Sempre que um produto for removido de uma coleção, é necessário reindexá-lo manualmente através de outros métodos.

O artigo [Entendendo o funcionamento da indexação](http://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-da-indexacao) demonstra algumas ações que disparam o evento de indexação.

