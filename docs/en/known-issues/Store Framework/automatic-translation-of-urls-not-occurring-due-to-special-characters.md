---
title: "Automatic translation of URLs not occurring due to special characters"
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
slugEN: automatic-translation-of-urls-not-occurring-due-to-special-characters
locale: en
kiStatus: Backlog
internalReference: 1062858
---

## Summary


When using the app `admin-catalog-translations` to translate catalog content automatically the linkId may have problems to be translated when it has special characters such as `ç`. The `admin-catalog-translations` uses the `messages app` to do the translations and some words may not be correctly translated due to those characters.


##

## Simulation


Try to translate the link of a product that has a word with special characters such as `calça`. If you want to translate this word on a URL this will probably be `calca`, which doesn't exist in the Portuguese language so the `message app` will not be able to translate it automatically.


##

## Workaround


** **
You must change the URL of the product manually by running the following mutation:

    mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "route": { "from": "/yourTranslatedLinkdId/p", "declarer": "vtex.store@2.x", "type": "product", "id": "productId", "resolveAs": "/yourOrinalLinkdId/p", "binding": "bindingId" }}






