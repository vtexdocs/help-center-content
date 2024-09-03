---
title: 'Collections page in Organization Details shows only 20 collections'
id: 1NL46GlhANQoa6IzGSSwdS
status: PUBLISHED
createdAt: 2023-08-31T20:02:37.675Z
updatedAt: 2024-04-23T21:35:34.440Z
publishedAt: 2024-04-23T21:35:34.440Z
firstPublishedAt: 2023-08-31T20:02:38.351Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: collections-page-in-organization-details-shows-only-20-collections
locale: en
kiStatus: Fixed
internalReference: 891511
---

## Summary


The Collections page in Organization Details shows only 20 collections even after changing the row quantity in the bottom of the page.


##

## Simulation



- Make sure you have more than 20 active collections;
- In the admin, go to the B2B Organizations page, select an organization;
- Go to the Collections tab; you will see only 20 collections available.


##

## Workaround


If the desired collection does not appear in the Collections tab, assign it using GraphQL IDE:

- Access GraphQL IDE;
- Select the app `vtex.b2b-organizations-graphql`;
- Use the mutation below and add the values for `id`, `name`, `collections.id` and `collections.name`

    mutation { updateOrganization ( id: "" name: "" status: "active" collections: [{ id: "" name: "" }] ){ status message }}





