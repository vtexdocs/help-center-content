---
title: 'CatalogV2 User Roles not Applying'
id: 3cDaOuqpAJyCL5JOMzD5nL
status: PUBLISHED
createdAt: 2022-02-25T12:18:17.776Z
updatedAt: 2024-02-16T20:26:53.078Z
publishedAt: 2024-02-16T20:26:53.078Z
firstPublishedAt: 2022-02-25T12:18:18.632Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalogv2-user-roles-not-applying
locale: en
kiStatus: No Fix
internalReference: 489297
---

## Summary


Currently, the user role UI for the CatalogV2 application is not correctly applying the user permissions of access control when an user is utilizing the UI to create/read/update products.







## Simulation


1) Access the license manager UI for a store that has the CatalogV2 installed (/admin/license-manager/#/role-details)

2) Set a read-only user role

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

3) With these rules set, log in with the related user

4) Try to update a product, you will be able to, despite the read-only credentials.







## Workaround


Use the GraphQL APIs of the catalog v2 to manage these permissions.

