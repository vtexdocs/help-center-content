---
title: 'La traducción automática de URL no se produce debido a caracteres especiales'
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
slug: la-traduccion-automatica-de-url-no-se-produce-debido-a-caracteres-especiales
locale: es
kiStatus: Backlog
internalReference: 1062858
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



## Simulación


Intenta traducir el enlace de un producto que tiene una palabra con caracteres especiales como `calça`. Si quieres traducir esta palabra en una URL probablemente será `calca`, que no existe en el idioma portugués por lo que la `messages app` no podrá traducirla automáticamente.



## Workaround


** **
Debe cambiar la URL del producto manualmente ejecutando la siguiente mutación:

    mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "ruta": { "origen": "/yourTranslatedLinkdId/p", "declarer": "vtex.store@2.x", "type": "product", "id": "productId", "resolveAs": "/yourOrinalLinkdId/p", "binding": "bindingId" }}






