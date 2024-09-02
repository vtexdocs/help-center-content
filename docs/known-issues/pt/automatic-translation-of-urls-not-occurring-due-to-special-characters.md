---
title: 'Tradução automática de URLs que não ocorrem devido a caracteres especiais'
id: 7G0WKfFFZxZ7mMEoasePld
status: PUBLISHED
createdAt: 2024-07-09T19:45:44.410Z
updatedAt: 2024-07-10T12:45:50.061Z
publishedAt: 2024-07-10T12:45:50.061Z
firstPublishedAt: 2024-07-09T19:45:45.704Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: traducao-automatica-de-urls-que-nao-ocorrem-devido-a-caracteres-especiais
locale: pt
kiStatus: Backlog
internalReference: 1062858
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar o aplicativo `admin-catalog-translations` para traduzir automaticamente o conteúdo do catálogo, o linkId pode ter problemas para ser traduzido quando tiver caracteres especiais, como `ç`. O `admin-catalog-translations` usa o `messages app` para fazer as traduções e algumas palavras podem não ser traduzidas corretamente devido a esses caracteres.

## Simulação


Tente traduzir o link de um produto que tenha uma palavra com caracteres especiais, como "calça". Se quiser traduzir essa palavra em uma URL, ela provavelmente será `calca`, que não existe no idioma português, portanto o aplicativo `message` não poderá traduzi-la automaticamente

## Workaround


** **
Você deve alterar o URL do produto manualmente, executando a seguinte mutação:

    mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "route": { "from": "/yourTranslatedLinkdId/p", "declarer": "vtex.store@2.x", "type": "product", "id": "productId", "resolveAs": "/yourOrinalLinkdId/p", "binding": "bindingId" }}






