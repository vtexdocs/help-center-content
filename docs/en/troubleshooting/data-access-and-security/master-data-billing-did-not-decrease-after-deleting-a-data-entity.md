---
title: 'Master Data billing did not decrease after deleting a data entity'
createdAt: '2026-08-07T00:00:00.000Z'
updatedAt: '2026-08-07T00:00:00.000Z'
contentType: tutorial
productTeam: Master Data
slugEN: master-data-billing-did-not-decrease-after-deleting-a-data-entity
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
domainFilters:
  - Master Data
  - Admin
symptomFilters:
  - Stuck status or flow
---

After deleting a [data entity](/en/docs/tutorials/data-entity) through the Master Data v1 interface, you expect the monthly billed volume to decrease, but this doesn't happen.

This issue occurs because deleting a data entity through the interface doesn't remove the documents (records) already stored in it. These documents keep being counted in the monthly billing until they're deleted via the API.

## Solution

To solve this issue, follow the steps below:

1. [Delete the entity's documents via the API](#delete-the-entitys-documents-via-the-api): remove the stored records so they stop being counted in the billing.
2. [Confirm the decrease in the Master Data usage dashboard](#confirm-the-decrease-in-the-master-data-usage-dashboard): check whether the number of documents decreased after the deletion.

### Delete the entity's documents via the API

Follow the instructions in the [Deleting documents in Master Data v1](https://developers.vtex.com/docs/guides/deleting-documents-in-master-data-v1) guide to delete the documents stored in the data entity. Only this deletion via the API reduces the volume counted in the monthly billing.

### Confirm the decrease in the Master Data usage dashboard

After deleting the documents, access the [Master Data usage](/en/docs/tutorials/checking-master-data-usage-in-the-vtex-admin) dashboard in the VTEX Admin to confirm that the entity's document count decreased.

If the billing remains unchanged after deleting the documents, contact [Support](/en/docs/tutorials/how-vtex-support-works).
