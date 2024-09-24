---
title: 'How does payment gateway retry work?'
id: 2JaHsjQIs0ceks0e2Mkwgu
status: PUBLISHED
createdAt: 2019-01-24T21:38:42.128Z
updatedAt: 2019-12-31T15:27:07.836Z
publishedAt: 2019-12-31T15:27:07.836Z
firstPublishedAt: 2019-01-24T21:38:42.460Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: how-does-payment-gateway-retry-work
locale: en
legacySlug: how-does-payment-gateway-retry-work
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

The retry is a VTEX gateway feature that aims to __avoid the lose of payments__. If any payment chain system is unable to proceed with a transaction at the time a payment is made, VTEX gateway retries to send the payment information. With this, the sale is not lost.

Here are the cases in which VTEX gateway performs the retries:

- Payment operator signals that a payment is still pending.
- Payment operator is offline.
- Payment operator takes longer to respond than expected.
- Tickets that have not yet been paid. In this case, the retry only happens for tickets that do not require manual reconciliation.
- Payments made with wallets that have their own query APIs (such as PagSeguro, Paypal, etc.)
- Orders that fall into manual fraud analyses.

## Related articles

- [What is a payment gateway?](/en/tutorial/what-is-a-payment-gateway)
- [Difference between payment methods and payment conditions](/en/tutorial/difference-between-payment-methods-and-payment-conditions)
- [What is an acquirer?](/en/tutorial/what-is-an-acquirer)
