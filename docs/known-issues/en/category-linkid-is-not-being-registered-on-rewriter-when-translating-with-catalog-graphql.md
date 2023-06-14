---
title: 'Category linkId is not being registered on rewriter when translating with catalog graphql'
id: 7b7KOHlxyIO4zKy2xrMuSD
status: PUBLISHED
createdAt: 2022-09-08T21:27:03.855Z
updatedAt: 2022-11-25T22:13:34.491Z
publishedAt: 2022-11-25T22:13:34.491Z
firstPublishedAt: 2022-09-08T21:27:04.567Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: category-linkid-is-not-being-registered-on-rewriter-when-translating-with-catalog-graphql
kiStatus: Backlog
internalReference: 654951
---

## Summary


When using the catalog graphql and translating the URL using the linkId the rewriter should store the linkId, but, it's not happening: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#category

The rewriter is storing the name instead of the linkId



## Simulation



Follow the documentation guide for translating the catalog content: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#mutation

Check the rewriter with the linkId that you created at admin/graphql-ide and choose rewriter app:


    { internal{ get(path: "yourLinkdIdHere"){ id } }}


This will return null

Check again, but, with the name of your translated category, but, slugified


    { internal{ get(path: "yourTranslatedCategoryNameSlugified"){ id } }}


This will return results



## Workaround



Run the following query on rewriter


    { internal{ get(path: "yourTranslatedCategoryNameSlugified"){ id from declarer type query binding  origin resolveAs } }}


Save the returned values, you will need to use them in the next step

Run the following mutation just changing the from parameter, the others must be the same as above:


    mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "route": { "from": "yourLinkId", "declarer": "yourSavedDeclarer", "type": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origin": "yourSavedOrigin", "resolveAs": "yourSavedResolveAs" }}



> For more information regarding those params, you can consult: https://developers.vtex.com/vtex-developer-docs/docs/rewriter


Now, we are going to delete the old route (the one saved with the name)


    mutation saveInternal($route: InternalInput!) { internal { delete(path: "yourTranslatedCategoryNameSlugified") { id } }}

