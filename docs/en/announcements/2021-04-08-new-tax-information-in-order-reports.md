---
title: 'New tax information in order reports'
id: 5w4kBsXd6DIzBjyGMe5Tmy
status: PUBLISHED
createdAt: 2021-04-08T18:19:51.100Z
updatedAt: 2021-04-09T13:56:32.437Z
publishedAt: 2021-04-09T13:56:32.437Z
contentType: updates
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2021-04-08-new-tax-information-in-order-reports
locale: en
legacySlug: new-tax-information-in-order-reports
announcementImageID: ''
announcementSynopsisEN: 'The Taxes column in the order report has been modified to make it easier to view the total amount of taxes applied.'
---

You can use order reports to analyze the performance of promotions or as packing slips, to facilitate store logistics.

The **Taxes** column in the [order report](https://help.vtex.com/en/tutorial/orders-worksheet--31m1ewsmsEe0WS4So2aGMY) has been modified to make it easier for retailers to view the total amount of taxes applied to each order.

## What has changed?

Previously, the **Taxes** column listed only taxes [added at **Checkout**](https://help.vtex.com/en/tutorial/inserting-taxes-in-the-cart--2wY5ePTTRz17EBhO3F7XBQ) (values identified as `Tax`). The report did not account for custom taxes[ created in the Admin's **Promotions & Taxes** module](https://help.vtex.com/en/tutorial/creating-surchargestaxes--tutorials_321), which means it didn’t include values specified as `CustomTax`.

The **Taxes** column now displays the sum of the taxes added at Checkout (`Tax`) and the taxes created in **Promotions & Taxes** (`CustomTax`).

For stores that do not apply taxes or whose total amount of taxes is 0, the **Taxes** column will be displayed empty in the report, so as not to affect the experience of clients who use this data structure.

## Why did we make this change?

The previous report did not contain information on custom taxes created in the **Promotions & Taxes** module (`CustomTax`). For this reason, retailers using this configuration could not see the total amount of taxes being charged.

With the change, the total amount of taxes applied to each order is now shown in the **Taxes** column. It increases the accuracy of data for packing slips.

## What needs to be done?

No action is needed. The change will be implemented automatically in all VTEX stores. From now on, all order reports will be generated in the new format.

Learn how to export orders in our tutorial [Export orders in Orders management](https://help.vtex.com/en/tutorial/exporting-orders-in-orders-managment--tutorials_6417) and learn more about the report structure in our article [Order report](https://help.vtex.com/en/tutorial/orders-worksheet--31m1ewsmsEe0WS4So2aGMY).
