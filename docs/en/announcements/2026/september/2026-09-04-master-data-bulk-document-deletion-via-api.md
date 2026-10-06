---
title: 'Master Data: Bulk document deletion via API'
createdAt: 2026-09-04T00:00:00.000Z
updatedAt: 2026-09-04T00:00:00.000Z
contentType: updates
productTeam: Master Data
slugEN: 2026-09-04-master-data-bulk-document-deletion-via-api
locale: en
announcementSynopsisEN: 'You can now bulk delete all documents in a Master Data entity that match a filter, reducing your billed storage volume.'
tags:
  - New feature
  - Master Data
---

VTEX stores now support bulk deletion of [Master Data](/en/docs/tutorials/master-data) documents via API. With this new feature, you can delete all documents in a [data entity](/en/docs/tutorials/data-entity) that match a filter in one go.

## What has changed?

Previously, the only way to delete documents was to go through the data entity, deleting one document at a time, which made cleaning up large volumes of data slow and error-prone. Now, a single API request initiates an asynchronous process to delete all documents that match the provided filter. This feature is available for Master Data v1 and v2 data entities.

> ❗ Bulk deletion is permanent, and deleted documents can't be recovered. Before starting the deletion, check how many documents your filter selects.

## Why the change?

The use of [custom data entities](/en/docs/tutorials/master-data#entidades-de-dados-personalizadas) is billed monthly, with tiers based on the total number of documents stored. Deleting documents via the API is the only way to reduce this volume, since deleting a data entity through the Master Data v1 interface doesn't delete stored documents.

## What needs to be done?

No action is required; the feature is already available. When you need to reduce the volume of documents stored in your store, your development team can perform a bulk deletion via API.

## Learn more

* [Bulk deleting documents in Master Data](https://developers.vtex.com/docs/guides/bulk-deleting-documents-in-master-data)
* [Master Data](/en/docs/tutorials/master-data)
* [Checking Master Data usage in the VTEX Admin](/en/docs/tutorials/checking-master-data-usage-in-the-vtex-admin)
* [Master Data billing hasn't decreased after deleting a data entity](/en/docs/tutorials/master-data-billing-did-not-decrease-after-deleting-a-data-entity)
