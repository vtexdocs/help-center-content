---
title: Understanding the value of approved revenues
id: tutorials_4322
status: PUBLISHED
createdAt: 2017-04-27T21:51:05.741Z
updatedAt: 2023-05-31T16:14:13.332Z
publishedAt: 2023-05-31T16:14:13.332Z
firstPublishedAt: 2017-04-27T23:11:15.957Z
contentType: tutorial
productTeam: Billing
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: understanding-the-value-of-approved-revenues
legacySlug: understanding-the-value-of-approved-revenues
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

For VTEX, revenue is the total value of orders that received the **Financially Approved** status in the **Orders** module. For more information, see [What does VTEX consider as revenues for invoice calculation?](https://help.vtex.com/en/tutorial/o-que-a-vtex-considera-como-receita-para-apuracao--58j4cfoXfisWyemASACwSq).

## Financial Report

In the Financial Report, customers find a list of financially approved orders and the sales channels used - B2C, B2B, Call Center, VTEX Sales App, certified Marketplace, certified Seller, etc.

To access an invoice’s Financial Report, follow the steps below:

1. In the VTEX Admin, go to **Apps > Customer Credit > Invoices**, or type **Invoices** in the search bar at the top of the page.
2. Select the desired invoice.
3. Click the `Financial Report` button.

You will receive a message notifying that the requested financial report will be sent to your VTEX user email.

## Invoice details

To help customers understand their invoices, VTEX provides the details of each invoice, with a list of the amounts charged.

It contains descriptive data on the _Gross Merchandise Value_ (GMV), which is the sum of the financially approved orders in that month, detailed in the financial report, in addition to the _Monthly Fixed Fee_ and the Take Rate applied, which may vary according to your contract.

To view your invoice’s details, follow the steps below:

1. In the VTEX Admin, go to **Apps > Customer Credit > Invoices**, or type **Invoices** in the search bar at the top of the page.
2. Select the desired invoice.
3. Click `Details`.
4. Click on the arrow next to the values in the invoice.

## Understanding the values of approved revenues

The sum of the total value of the financially approved orders listed in the financial report is called _Gross Merchandise Value_ (GMV). To obtain the total value of the GMV, you must add all the values contained in _Total Value String_.

The _Take Rate_ is the monthly percentage charged on the total value of the financially approved orders. We calculate the percentage on the __total of financially approved orders__, since this is the stage at which the customer completes the entire purchase process, having used Search, Infra, Hosting, and other resources.

Different sales channels (B2C, B2B, Call Center...) have different Take Rates. To understand the percentage being charged, see the conditions in your contract.
To access the value of the financially approved orders by sales channels, you must filter it in the **Type** column.

