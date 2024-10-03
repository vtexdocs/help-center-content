---
title: 'Customer approval'
id: 2fDHMMLJl00Pm6imiACU72
status: PUBLISHED
createdAt: 2021-03-30T16:54:48.752Z
updatedAt: 2024-06-18T22:16:38.698Z
publishedAt: 2024-06-18T22:16:38.698Z
firstPublishedAt: 2021-03-30T17:14:26.769Z
contentType: tutorial
productTeam: Master Data
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: customer-approval
locale: en
legacySlug: customer-approval
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

Customer approval is carried out in Master Data and can be done via the Admin or via API. See below for instructions on each of the two forms of approval.

## Approving customers via Admin

To approve customers in the Admin, follow the steps below:

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data.**
2. Inside the box __Profile System__, click on the  <i class="fas fa-bars"></i>   icon next to __Customers__.
3. Click the row of the customer you want to approve.
4. At the bottom of the page, click on the `Edit` button.
5. Select the checkbox next to the __Approved__ field.
6. At the bottom of the page, click on`Save`.

After that, the store content will be displayed to the selected customers. 

## Approving customers via API

You can approve multiple customers at once via a [Master Data API](https://developers.vtex.com/docs/api-reference/masterdata-api) route.

All information related to a customer can be interpreted as a document in the __Customer__ [data entity](https://help.vtex.com/en/tutorial/data-entity--tutorials_1265). Therefore, the [PATCH Update partial document](https://developers.vtex.com/docs/api-reference/masterdata-api#patch-/api/dataentities/-acronym-/documents/-id-) route must be used to change the __Approved__ field value in bulk.

Check the [Import customer data](https://developers.vtex.com/docs/guides/import-customer-data) guide to learn which fields are required for a specific individual document.
