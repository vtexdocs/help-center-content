---
title: "When loading the 'Catalog Maping' page on admin the initial message is not translated"
id: 4WszmRZ5jpeSDNTEuFIdwF
status: PUBLISHED
createdAt: 2022-12-15T12:32:17.741Z
updatedAt: 2024-02-16T20:23:22.033Z
publishedAt: 2024-02-16T20:23:22.033Z
firstPublishedAt: 2022-12-15T12:32:18.420Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: when-loading-the-catalog-maping-page-on-admin-the-initial-message-is-not-translated
locale: en
kiStatus: No Fix
internalReference: 717066
---

## Summary



This error happens in this very specific scenario:

When opening the "Catalog Mapping" page on a admin that is in any language but "pt-BR" and when there is no map made by the client yet, the initial message appears in Portuguese first but then the page reloads very fast and is it disappears.

Two scenarios can happen in this situation:
1- The message appears first in Portuguese and then the page is blank
2- The message appears first in Portuguese and then the message is correctly translated to the admin language. However, this last scenario happens rarely.


##

## Simulation




1. Open the Catalog Mapping page on a account that has no mappings made and on a different language on admin.
2. Verify that initially appears a message on Portuguese;
3. Check that when the page finishes loading is either blank or with the correct message translated.


##

## Workaround



When the first seller is added, this problem will no longer happen.

