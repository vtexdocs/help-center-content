---
title: 'Defining payment methods displayed on VTEX Sales App'
id: jHQQcyX3WKeUFidwSjmY1
status: PUBLISHED
createdAt: 2021-09-27T20:54:02.947Z
updatedAt: 2026-03-02T17:16:01.041Z
publishedAt: 2023-07-05T17:16:01.041Z
firstPublishedAt: 2021-09-27T20:57:59.730Z
contentType: trackArticle
productTeam: Shopping
slugEN: defining-payment-methods-displayed-on-vtex-sales-app
locale: en
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: vtex-sales-app-payments
order: 6
---

After configuring your store payment methods, you must create filters to make them available to customers on **VTEX Sales App** checkout.

To do this, you'll need to include a JavaScript code block in your store's `checkout-instore-custom.js`. The complete instructions are available in the guide [Define payment methods displayed on VTEX Sales App](https://developers.vtex.com/docs/guides/define-payment-methods-displayed-on-vtex-sales-app).

> ❗ We recommend that any changes to the `checkout-instore-custom.js` file be made by a developer, as errors at this stage can cause critical issues to the store.

## Identifying the payment condition ID

In one of the configuration steps for `checkout-instore-custom.js`, you must enter the payment condition IDs. To identify them, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, search for the desired option. If you prefer, filter the results using the search bar.
3. The payment method ID is the numerical code that appears at the top right. In the following example, the ID for `Mastercard` with 1–10 installments is `4`:

![INSERT IMAGE](link)

> ℹ️ The complete information for defining the payment methods displayed on **VTEX Sales App** is available in the guide [Define payment methods displayed on VTEX Sales App](https://developers.vtex.com/docs/guides/define-payment-methods-displayed-on-vtex-sales-app).
