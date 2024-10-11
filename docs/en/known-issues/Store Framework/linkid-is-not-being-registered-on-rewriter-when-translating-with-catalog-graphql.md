---
title: 'linkId is not being registered on rewriter when translating with catalog graphql'
id: 7b7KOHlxyIO4zKy2xrMuSD
status: PUBLISHED
createdAt: 2022-09-08T21:27:03.855Z
updatedAt: 2024-07-10T12:47:32.306Z
publishedAt: 2024-07-10T12:47:32.306Z
firstPublishedAt: 2022-09-08T21:27:04.567Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: linkid-is-not-being-registered-on-rewriter-when-translating-with-catalog-graphql
locale: en
kiStatus: Backlog
internalReference: 654951
---

## Summary


When using the catalog graphQL and translating the URL using the linkId the rewriter should store the linkId, but it's not happening: https://developers.vtex.com/docs/guides/catalog-internationalization


##

## Simulation



- Follow the documentation guide for translating the catalog content: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#mutation
- **For Category links:**
  - Check the linkId that you created at admin/graphql-ide and choose the rewriter app:

    { internal{ get(path: "yourLinkdIdHere"){ id } }}



- This will return null;
- Check again with the name of your translated category but, slugified:

    { internal{ get(path: "yourTranslatedCategoryNameSlugified"){ id } }}



- This will return results.



- **For product links:**
  - Access the product page using the translated link created using the catalog graphQL;
  - It will show a 404 Not Found.


##

## Workaround



- **For Category links:**
  - Run the following query on rewriter:

    { internal{ get(path: "yourTranslatedLinkdId"){ id from declarer type query binding  origin resolveAs } }}



- Save the returned values, you will need to use them in the next step;
- Run the following mutation just changing the from parameter, the others must be the same as above:

    mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "route": { "from": "yourLinkId", "declarer": "yourSavedDeclarer", "type": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origin": "yourSavedOrigin", "resolveAs": "yourSavedResolveAs" }}

> For more information regarding those params, you can consult: https://developers.vtex.com/vtex-developer-docs/docs/rewriter



- Now, we are going to delete the old route (the one saved with the name)

    mutation saveInternal($route: InternalInput!) { internal { delete(path: "yourTranslatedLinkdId") { id } }}



- **For product links:**
  - Run the following mutation just changing the from parameter, the others must be the same as above:

    mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "route": { "from": "/yourTranslatedLinkdId/p", "declarer": "vtex.store@2.x", "type": "product", "id": "productId", "resolveAs": "/yourOrinalLinkdId/p", "binding": "bindingId" }}



