---
title: 'complementName in productContext is not translated'
id: 6Gol274XThpldM99pDuHAC
status: PUBLISHED
createdAt: 2024-09-10T18:15:06.126Z
updatedAt: 2024-09-10T18:15:07.916Z
publishedAt: 2024-09-10T18:15:07.916Z
firstPublishedAt: 2024-09-10T18:15:07.916Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: complementname-in-productcontext-is-not-translated
locale: en
kiStatus: Backlog
internalReference: 1095907
---

## Summary


Since the Catalog Search Documents Translation API does not translate the field for short description called complementName the product context shows the original text in Internationalized stores.


##

## Simulation



- Translate a short description (complementName) in an Internationalized store. It can be either through Messages or Catalog Translation app.
- Check the productContext for that product in a different language using React Dev Tools or querying the productContext.
- You'll see that its value is not translated.

- You can check that the catalog API does not bring this value translated: `curl --location 'http://api.vtexinternal.com/api/search-documents/documents/translations/?an=&decompress=true' \`



##

## Workaround


None VTEX native app uses this field. But if your are using in a Custom app you can create a new SKU or Product specification to use as the complementName or query the translation in your custom app.





