---
title: "​​My store's order still has the status "Verifying invoice'"
id: 2YY7ILOOd0lEjpiT7SSgag
status: PUBLISHED
createdAt: 2024-08-16T18:32:15.867Z
updatedAt: 2024-08-16T18:56:49.382Z
publishedAt: 2024-08-16T18:56:49.382Z
firstPublishedAt: 2024-08-16T18:52:24.803Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: my-stores-order-still-has-the-status-verifying-invoice
locale: en
legacySlug: my-stores-order-still-has-the-status-verifying-invoice
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags / Keywords:** order, order status, invoice, partial invoice, verifying invoice.

When following your store [order flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196), you may come across an order that has the status `Verifying invoice` for longer than expected. This status means the platform is verifying that the payment has been settled and the order's invoice has been correctly added, which are required conditions for the order to move forward in the flow.

The status `Verifying invoice` usually indicates the following reasons:

* There was a problem with the [payment settlement](https://help.vtex.com/en/tutorial/configurar-tempo-maximo-para-captura-automatica--7dwcaxrcgcFJUk7umqPBw2).
* The invoice was not correctly added to the order, or the [invoice](https://help.vtex.com/en/tutorial/faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v) was only partially processed.

## Solution

Regarding payment settlement, the order remains with the `Verifying invoice` status until the [gateway](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) confirms the payment, which is indicated by the status `Settled` in the [transaction flow](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y). If the settlement isn’t completed after a while, a new order must be created, as the issue is related to the gateway and not the platform.

For the invoice, you need to ensure that the total amount of the order was invoiced and that the information sent was correct, as described in the section below.

### Invoicing an order

Here are some common order invoicing errors and how to fix them:

* **The invoice entered only refers to some of the items:** Submit a new invoice with the missing amount to cover the total amount of the order.
* **Invoice with errors:** Check the invoice details and make sure they are correct. Some of the required fields that may have been incorrectly completed are the invoice number and URL. Remember that each invoice must have a unique number.
* **There is a problem in the integration that is affecting the sending of the invoice:** Submit a new invoice manually.

To invoice the order (fully or partially) or edit the invoice data via the VTEX Admin, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Click the desired order. You can find it [using the filters](https://help.vtex.com/en/tutorial/como-filtrar-pedidos--tutorials_192).
3. In the **Pending invoicing** section, click `Invoice`.
4. Click the desired option, either sending the invoice as a single invoice or referencing the items.
5. Complete the fields.
6. Click `Save Invoice`.

>ℹ️ You can find detailed instructions on how to submit an invoice via the VTEX Admin in [How to invoice an order](https://help.vtex.com/en/tutorial/faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v). If you want to invoice the order via API, use the [Order invoice notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice) endpoint.

>ℹ️ If the order needs to be adjusted, you can [change the order via the VTEX Admin](https://help.vtex.com/en/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw).

