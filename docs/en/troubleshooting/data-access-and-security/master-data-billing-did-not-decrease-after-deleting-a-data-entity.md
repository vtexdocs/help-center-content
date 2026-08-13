---
title: 'Master Data billing hasn''t decreased after deleting a data entity'
createdAt: '2026-08-07T00:00:00.000Z'
updatedAt: '2026-08-07T00:00:00.000Z'
contentType: tutorial
productTeam: Master Data
slugEN: master-data-billing-didn't-decrease-after-deleting-a-data-entity
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
domainFilters:
  - Master Data
  - Admin
symptomFilters:
  - Flow interruption
---

After deleting a [data entity](/docs/tutorials/data-entity) via the Master Data v1 interface, you expect your monthly billed volume to decrease, but it doesn't.

This issue occurs because deleting a data entity through the interface doesn't remove the documents (records) already stored in it. These documents continue to be counted toward the monthly billing until they are deleted through the API.

## Solution

To solve this problem, follow the steps below:

1. [Delete the entity documents via API](#delete-the-entity-documents-via-api): Remove the stored records so they're no longer included in the billed volume.
2. [Confirm the decrease in the Master Data usage dashboard](#confirm-the-reduction-in-the-master-data-usage-dashboard): Check whether the number of documents decreased after deletion.

### Deleting the entity documents via the API

Follow the instructions in the [Deleting documents in Master Data v1](https://developers.vtex.com/docs/guides/deleting-documents-in-master-data-v1) guide to delete the documents stored in the data entity. Only this deletion via API reduces the volume counted in the monthly billing.

### Confirming the decrease in the Master Data usage dashboard

After deleting the documents, go to the [Master Data usage](/docs/tutorials/checking-master-data-usage-in-the-vtex-admin) dashboard in the VTEX Admin to confirm that the entity document count has decreased.

If the billing remains unchanged after deleting the documents, contact [Support](/docs/tutorials/how-does-vtex-support-work).
