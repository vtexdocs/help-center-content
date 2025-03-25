---
title: 'error de bloqueo al utilizar las API de catálogo'
id: 6A4jBKBKIzn87mxNQJ4YQN
status: PUBLISHED
createdAt: 2023-07-14T18:29:11.937Z
updatedAt: 2023-07-19T14:16:39.062Z
publishedAt: 2023-07-19T14:16:39.062Z
firstPublishedAt: 2023-07-14T18:29:13.088Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: deadlocked-error-when-using-catalog-apis
locale: es
kiStatus: Backlog
internalReference: 862626
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



## Simulación



1. Utilice, por ejemplo, la API Add SKU to Subcollection (https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit) para añadir muchos skus a una colección en poco tiempo;
2. 2. Compruebe que pueden producirse errores, como un bloqueo.



## Workaround


Intenta hacer menos peticiones por minuto.





