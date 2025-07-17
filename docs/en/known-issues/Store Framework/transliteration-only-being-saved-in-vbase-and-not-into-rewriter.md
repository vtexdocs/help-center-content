---
title: "Transliteration only being saved in vbase and not into rewriter"
id: 3ngFt1qXOUjmY5L84dk6in
status: PUBLISHED
createdAt: 2023-12-12T19:54:12.171Z
updatedAt: 2024-02-16T20:26:46.444Z
publishedAt: 2024-02-16T20:26:46.444Z
firstPublishedAt: 2023-12-12T19:54:13.102Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: transliteration-only-being-saved-in-vbase-and-not-into-rewriter
locale: en
kiStatus: No Fix
internalReference: 738334
---

## Summary



When transliterating the urls through the catalog rewriter is not storing it, or is not receiving any notification through the broadcaster, we are only storing it in vbase


##

## Simulation



Transl

Check the rewriter with the linkId that you created at admin/graphql-ide and choose the rewriter app:


    { internal{ get(path: "yourLinkdIdHere"){ id } }}




##

## Workaround



Run the following query on the rewriter


    { internal{ get(path: "yourTranslatedCategoryNameSlugified"){ id from declarer type query binding  origin resolveAs } }}


Save the returned values, you will need to use them in the next step

Run the following mutation just changing the from parameter, the others must be the same as above:


    mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id binding resolveAs origin } }}{ "route": { "from": "yourLinkId", "declarer": "yourSavedDeclarer", "type": "yourSavedType", "binding": "yourSavedBinding", "id": "yourSavedId", "origin": "yourSavedOrigin", "resolveAs": "TheOriginalNameOfTheCategory" --here in cyrilic }}



> For more information regarding those params, you can consult: https://developers.vtex.com/vtex-developer-docs/docs/rewriter


Now, we are going to delete the old route (the one saved with the name)


    mutation saveInternal($route: InternalInput!) { internal { delete(path: "yourTranslatedCategoryNameSlugified") { id } }}

