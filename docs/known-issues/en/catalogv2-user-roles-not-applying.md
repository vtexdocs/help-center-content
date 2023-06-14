---
title: 'CatalogV2 User Roles not Applying'
id: 3cDaOuqpAJyCL5JOMzD5nL
status: PUBLISHED
createdAt: 2022-02-25T12:18:17.776Z
updatedAt: 2022-11-25T21:55:04.311Z
publishedAt: 2022-11-25T21:55:04.311Z
firstPublishedAt: 2022-02-25T12:18:18.632Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: catalogv2-user-roles-not-applying
kiStatus: Backlog
internalReference: 489297
---

## Summary


Currently, the user role UI for the CatalogV2 application is not correctly applying the user permissions of access control when an user is utilizing the UI to create/read/update products.







## Simulation


1) Access the license manager UI for a store that has the CatalogV2 installed (/admin/license-manager/#/role-details)

2) Set a read-only user role

 ![](https://vtexhelp.zendesk.com/attachments/token/NpEBOSahA9ogF72lsW9kYRjyH/?name=inline441836406.png)

3) With these rules set, log in with the related user

4) Try to update a product, you will be able to, despite the read-only credentials.







## Workaround


Use the GraphQL APIs of the catalog v2 to manage these permissions.

