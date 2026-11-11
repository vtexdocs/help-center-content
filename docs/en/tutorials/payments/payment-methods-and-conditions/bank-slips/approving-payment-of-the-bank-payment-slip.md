---
title: 'Approving boleto payments (for stores in Brazil)'
createdAt: 2017-04-27T22:16:19.919Z
updatedAt: 2026-10-29T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: approving-payment-of-the-bank-payment-slip
locale: en
hidden: false
---

Payment approval confirms that the customer has paid the order amount and allows the order to move forward in the flow. For orders paid with boleto, you can approve the payment manually in the Orders module or via API.

> ⚠️ When you approve the payment, the order moves forward even if the boleto hasn't been paid. Since [ERP integrations](https://developers.vtex.com/docs/guides/erp-integration-guide) follow the [order flow](/en/docs/tutorials/order-flow-and-status), the order is also integrated into the store back office as usual. That's why we recommend caution: Confirm you've received the amount before approving each payment. If a payment is approved by mistake, you can [cancel the order](/en/docs/tutorials/canceling-orders).

To approve the payment manually, follow the steps below:

1. In the VTEX Admin, go to **Orders > Transactions**, or type **Transactions** in the search bar at the top of the page.
2. Search for the transaction by the customer email, name, or document, or by other data listed in [Searching transactions on Payments](/en/docs/tutorials/searching-for-transactions-on-payments), and click it. If you're on the order details page, click **See details** to open the transaction directly.
3. In the boleto payment card, click `Flag payment`.

![NotificarEN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-methods-and-conditions/bank-slips/approving-payment-of-the-bank-payment-slip_1.png)

**After the payment is approved, the order enters the normal purchase flow.**

> ℹ️ To approve payments, you must have a [role](/en/docs/tutorials/roles) with the `Notify payment` [License Manager resource](/en/docs/tutorials/license-manager-resources) in the `OMS access` category of the **OMS** product.

To approve the payment via API, see the [Send payment notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/payments/-paymentId-/payment-notification) endpoint documentation.
