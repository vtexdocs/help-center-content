---
title: 'Why is the order in the "Verifying Invoice" status?'
id: 5VJjxRjeH6SimiG0Wkk2gm
status: PUBLISHED
createdAt: 2019-01-24T20:45:44.680Z
updatedAt: 2022-07-19T13:18:05.248Z
publishedAt: 2022-07-19T13:18:05.248Z
firstPublishedAt: 2019-01-24T21:53:54.764Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: why-is-the-order-in-the-verifying-invoice-status
locale: en
legacySlug: why-is-the-order-in-the-verifying-invoice-status
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---


There are two cases in which an order can have the status `Verifying invoice`:

* When the order was partially invoiced, i.e., when the invoice does not comprise the total order amount. In this case, you can continue the order flow by checking whether:
    * The invoice contains only a part of the order items. In this case, you must enter the invoices that add up to the total order amount.
    * The invoice contains errors. In this case, you must ensure that the invoice contains the correct information.
    * There is an issue with the external integration that is affecting the invoice submission. In this case, you must submit a new invoice.
* When the payment was not [settled](https://help.vtex.com/en/tutorial/configuring-maximum-automatic-payment-capture-time-frame--7dwcaxrcgcFJUk7umqPBw2). In this case, the order remains with the status `Verifying invoice` until the settlement is confirmed by the gateway. If the settlement does not occur, it is necessary to place the order again, as this issue is related to the gateway, not to the store.

## Learn more

For more information, please refer to the articles below.

* [Order flow](https://help.vtex.com/en/tutorial/order-flow-on-the-oms--tutorials_196);
* [Adding an invoice to an order](https://help.vtex.com/en/tutorial/entering-tax-receipts-in-the-order--tutorials_193).

