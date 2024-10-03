---
title: 'Mode-Off: FAQ'
id: 6hbd7PuvoxuRbPCvTqjxeB
status: CHANGED
createdAt: 2021-01-21T17:29:10.793Z
updatedAt: 2024-04-11T19:26:47.407Z
publishedAt: 2024-04-11T19:22:34.569Z
firstPublishedAt: 2021-01-21T17:54:12.941Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: mode-off-faq
locale: en
legacySlug: mode-off-faq
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Mode-off is a feature of the VTEX [Payment Provider Protocol](https://developers.vtex.com/vtex-developer-docs/docs/payment-provider-protocol "Payment Provider Protocol").

This feature allows VTEX to track their payment partners’ health and stability, ensuring that the system will not cancel orders due to instabilities.

Mode-off works as follows: when VTEX identifies consecutive errors in its payment partners’ integrations, the mode-off status is activated to interrupt credit card transactions. 

As soon as the integration or partner is stable again, the mode-off status is deactivated, and our system will run processing reattempts for the transactions on standby.

Check out the main questions about the mode-off feature below:

## Do all partners have this feature activated?

Yes, all VTEX payments partners have the mode-off activated.

## What payment methods are covered by the mode-off?

Mode-off is only applicable to payment methods that can be processed asynchronously—namely, credit card.

## Does the mode-off work for payments with “boleto” (popular Brazilian off-line payment method), QR code, or redirect?

No, these payment methods require an online response and cannot be processed asynchronously. For this reason, there are no reattempts for transactions made with them.

## What’s the current rule to activate the mode-off?

The mode-off feature is activated if the partner or integration presents any instability identified through error messages, such as 500 and 408, or a timeout longer than 30 seconds over the last five minutes. This rule applies to all payment methods processed in mode-off.

>⚠️ Please remember that synchronous payment methods **cannot** be reprocessed. However, they count as errors for identifying whether a partner is stable.  

## What is the rule to deactivate the mode-off?

Transactions shall be resumed when the partner stops experiencing a rate of five errors over the last five minutes. 

## For how long VTEX runs processing reattempts for transactions on standby?

The time between transaction processing reattempts (_retries_) can be defined by the partner when sending payment information. When configuring the payment cancellation time (`delayToCancel` field) for a period of less than 1 day, retry attempts will be made every 1 hour. If the time to cancel the payment is set to be equal to or greater than 1 day, retry attempts will be made every 4 hours. For more information, visit [Create Payment endpoint](https://developers.vtex.com/docs/api-reference/payment-provider-protocol?endpoint=post-/payments).

>ℹ️ If payment is made by [PIX (Brazilian instant payment method)](https://help.vtex.com/pt/tutorial/configurar-pix-como-meio-de-pagamento--5sbNavMSJY4jyLmLKRHiOf) or the payment cancellation time is set between 5 minutes and 1 hour, retry calls will occur every 5 minutes.

## How to identify the mode-off? What to do if it is active?

The payment partner will note a high error rate and a reduction in the number of credit card payments. 

At this point, it’s essential to work to fix the instability. You should also reassure your clients by informing them the payments will be processed as soon as the system regains stability. 

## How do retailers identify instability? What should they do?

Retailers will see various credit card payments with a pending status, marked as unprocessed.

The transaction log will return the "mode-off" label.

## Once the mode-off is activated, is there any action required by retailers?

On VTEX side, no. They should only wait for the retry. 

Retailers can also contact their payment partner to understand the instability scenario if they want to.

## Where can I find technical details on how the mode-off works?

For technical information on how the mode-off works, check out our documentation on the [Developer Portal](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-purchase-flows#mode-off "").
