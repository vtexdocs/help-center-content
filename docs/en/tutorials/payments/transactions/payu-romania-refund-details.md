---
title: 'PayU Romania refund details'
id: 29N1K0IzzGs2a6S2OyyqEi
status: PUBLISHED
createdAt: 2018-08-20T18:40:53.455Z
updatedAt: 2019-12-31T15:23:53.456Z
publishedAt: 2019-12-31T15:23:53.456Z
firstPublishedAt: 2018-08-20T18:55:19.400Z
contentType: tutorial
productTeam: Financial
author: authors_24
slugEN: payu-romania-refund-details
legacySlug: payu-romania-refund-details
locale: en
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

> ⚠️ This article applies only for payments made in **Romania**.

Payment cancellations (also called voids – they can be placed only for the full amount) or refunds (total or partial) are not processed immediately, but with a timeout instead. 

Here is the logic of the [PayU system](/en/tutorial/setting-up-payu-global-gateway):
PayU waits for __6 hours__ from the moment when the void request was received (which means unblocking the money from the client's bank account) or from the moment when the refund request was received (meaning total or partial return of the money after the payment has been completed. This is a safety measure (both for PayU and the client) for cases when the request is placed by accident or if the customer changes their mind and no longer wants a void or refund.

If an order is finished/completed today and PayU will receive a full or partial refund request today, VTEX will wait 24 hours before we send the request further to the issuing bank, in order to avoid any possible operational issues. 

From PayU's experience, there have been cases when the bank got confused with this kind of requests. That's why this safety measure was implemented. 

If we're talking about an order completed yesterday or several days ago, with a refund request filed today, we will only wait for the 6 hours specified above before communicating with the issuing bank.

All the above applies to both manual requests (placed from the PayU cPanel) or server-to-server (VTEX) requests (voids or refunds).

If we ever need to remove a payment request from the system before the timeout expires, the procedure is that you identify the payment in the PayU cPanel, click on the reference number to open the window with order details, go to the __Refund Details__ tab and click the __Delete__ button. 

If the Delete button is not active and the timeout has not expired, you can quickly send an email request to `help@payu.ro` so that PayU staff will be able to delete the void/refund request directly from the system, but only if it has not already been sent to the issuing bank.

If the void or refund request has already been sent by the system to the issuing bank, we will no longer be able to delete/stop it in any way.

![PayU Romania](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/transactions/payu-romania-refund-details_1.png)

Once PayU has sent the void or refund request to the issuing bank, the status of the order will be updated in the PayU cPanel as `REVERSE` (for voids) or `REFUND`. And VTEX is going to receive a webhook from PaymentsOS, so the order status can also be updated on the platform (on Payments and consequently reflected in the OMS).

The amount of time of unblocking or returning the money to the customer’s account will vary according to each issuing bank’s own system and internal procedures. Some banks operate such requests within 1 to 2 days after receiving them from PayU, while others can wait up to 2 weeks.
