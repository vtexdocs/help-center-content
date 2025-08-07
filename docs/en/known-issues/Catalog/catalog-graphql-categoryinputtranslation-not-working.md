---
title: "Catalog GraphQL CategoryInputTranslation not working"
id: 1Zue7Roia2sYa4xNP9hF2y
status: PUBLISHED
createdAt: 2024-04-29T14:30:53.743Z
updatedAt: 2025-01-28T14:38:29.411Z
publishedAt: 2025-01-28T14:38:29.411Z
firstPublishedAt: 2024-04-29T14:30:54.577Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-graphql-categoryinputtranslation-not-working
locale: en
kiStatus: Backlog
internalReference: 1024172
---

## Summary


Currently, the method CategoryInputTranslation, for the catalog graphQL is not generating an update in the translated data for accounts.


##

## Simulation


1 - Acess VTEX's graphQL IDE and select the application vtex.catalog-graphql@1.103.1
2 - Create a mutation for the method CategoryInputTranslation
3 - Check if such update has reflected in the translated data in the website


##

## Workaround



- use `vtex.catalog-grapghql@1.103.1` via Postman

- use directly `vtex.messages@1.69.0` in GraphQL IDE

