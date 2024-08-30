---
title: 'Erasing customer data'
id: 1R9Fn7A06Ifj4R9YD4JTKU
status: PUBLISHED
createdAt: 2022-04-14T13:28:53.209Z
updatedAt: 2023-06-23T15:06:52.315Z
publishedAt: 2023-06-23T15:06:52.315Z
firstPublishedAt: 2022-04-14T13:50:08.688Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: erasing-customer-data
locale: en
legacySlug: deleting-customer-data
subcategory: 6uJgdHqWf1Mo0rUfgxseTn
---

According to data protection policies, such as [GDPR and LGPD](https://vtex.com/us-en/privacy-and-agreements/vtex-commitment/), companies using customer personal data are required to delete collected information upon the customer's request. This means that VTEX allows you to request the erasure of data collected from your store's customers. 

## Before submitting a data erase request

Before [submitting a data erase request via Support](#request-erasure-via-support), you need to check which Master Data entities store customer data in your operation.

You must be careful not to erase any data from the [native Master Data entities](#native-master-data-entities). However, you must manually erase customer information stored in [other Master Data entities](#other-data-entities), in case your store keeps any of it. You can find more details about this below.

### Native Master Data entities

Upon your [request via Support](#request-erasure-via-support), VTEX will delete the data from the native **CL** and **AD** data entities. You should not delete data from these entities.

### Other data entities

If your store keeps customer information in other data entities, you need to manually delete this data before requesting the data erasure via Support. Use the Master Data API:

1. Search for the document with the [Search Document](https://developers.vtex.com/vtex-rest-api/reference/searchdocuments-1) endpoint

2. Use a [Delete Document](https://developers.vtex.com/vtex-rest-api/reference/deletedocument-1) request

>❗ Do not do this for the **CL** and **AD** entities. 

## Request erasure via support

You must request the erasure of your customers' personal data from VTEX platform by opening a ticket with the [VTEX Support](https://help.vtex.com/en/support).

To request the deletion of customer personal data, follow the steps below.

1. Access the [VTEX Support](https://help.vtex.com/en/support).
2. Fill in your full name in the **Name** field and in the **Store** field select the name of the store you want to open the ticket for.
3. Click the `Continue` option.
4. Select the `Technical` option.
5. In the **Problem type** field, select `I would like to request a setup`.
6. In the **Subject of the request** field, fill in the following information:
   * Data Subject Request
   * VTEX accounts
   * Email linked to VTEX accounts whose data must be erased
7. In the field **Your experience with the platform**, select the option that corresponds to your experience as a user of the VTEX platform.
8. Fill in the **Describe what happened in detail** field with details of your request.
9. Click `Submit`.

>⚠️ Please request the erasure of data for only one account, i.e. one shopper email per ticket. If you include more than one email, the ticket will be returned.

Your request will be sent to our support team. Upon completion of the ticket, a certificate will be issued to the email where the ticket was opened confirming the completion of the erasure of the data.
