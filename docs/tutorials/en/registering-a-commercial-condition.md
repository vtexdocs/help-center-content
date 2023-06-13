---
title: Registering a commercial condition
id: tutorials_445
status: PUBLISHED
createdAt: 2017-04-27T22:05:10.617Z
updatedAt: 2023-03-23T20:05:31.411Z
publishedAt: 2023-03-23T20:05:31.411Z
firstPublishedAt: 2017-04-27T23:03:25.137Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: registering-a-commercial-condition
legacySlug: registering-a-commercial-conditioin
subcategory: 6312YEqn0AGYCsOOESSIQM
---

A commercial condition is a grouping of SKUs that will serve to create different payment scenarios.

The configuration of the commercial condition is made in three parts:

1. Create the commercial condition.
2. Link an SKU.
3. Link a payment condition.

## Creating a commercial condition

1. In the VTEX Admin, go to __Store Settings__.
2. Under __Product__, click __Commercial Conditions__.
3. Click the `New Commercial Condition` button.
4. In the __Name__ field, enter the name of the commercial condition to be created.
5. Define whether this condition is the default one by selecting the __Default__ field.
6. Click the `Save` button.

If the commercial condition is set as default, new products registered in the store will be in this pre-selected condition.

## Linking an SKU

1. In the VTEX Admin, go to __Catalog__.
2. Click __Products and SKUs__.
3. Find the SKU you want to link and click on it.
4. When editing the SKU, select the desired commercial condition in the __Commercial condition code__ field.
5. Click `Save`.

## Linking a payment condition

1. In the VTEX Admin, go to __Store Settings__.
2. Under __Payment__, click __Settings__.
3. Click the __Payment conditions__ tab.
4. Click the payment condition in which you want to include the commercial condition.
5. Click the __Add special condition__ button.
6. Select the __Commercial Condition__ option.
7. Select the desired commercial condition.
8. You can set a criterion for this payment condition to appear in the checkout. This criterion is the percentage of items with this commercial condition included in the cart. To do this, simply fill in the field __When the percentage of SKUs of this condition is greater than__ with the desired percentage.
9. Click `Save`.
