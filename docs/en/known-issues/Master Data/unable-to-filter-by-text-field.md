---
title: 'Unable to filter by text field'
id: 3dsPrybpGgmwiuyAcq0Gl2
status: ARCHIVED
createdAt: 2019-08-05T20:19:42.133Z
updatedAt: 2022-02-14T22:43:11.713Z
publishedAt: 
firstPublishedAt: 2019-08-05T21:36:56.236Z
contentType: knownIssue
productTeam: Master Data
author: 3aBBTLS9ZKO6IcY0Goe2y2
tag: Master Data
slug: unable-to-filter-by-text-field
locale: en
kiStatus: Open
internalReference: 
---

## Summary

Even though a text field can be set to be __Public to Filter__, the user will always receive the following error message: `Cannot filter by private fields`.


## Simulation

- Visit your account’s Dynamic Storage `https://{account}.ds.vtexcrm.com.br`;

- Access the `Entidade de dados` tab, choose an entity, and set a text field to be public to filter.

When querying for that field through the API you will always receive an error message.

## Workaround

You can set the field to be a Varchar 750. This will allow you to filter normally.

