---
title: 'Setting up payments with Notes Payable'
id: 5pW7avTwtyQcMu4uiW8quQ
status: PUBLISHED
createdAt: 2018-06-21T20:20:24.484Z
updatedAt: 2025-02-26T18:35:04.108Z
publishedAt: 2025-02-26T18:35:04.108Z
firstPublishedAt: 2018-06-25T15:42:31.515Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-notes-payable
legacySlug: setting-up-payments-with-notes-payable
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

On VTEX, your store can receive payments made with Notes Payable. To enable this option, you must perform the following steps:

1. [Setting up the payment provider](#setting-up-a-payment-provider)
2. [Notes Payable setup](#notes-payable-setup)
3. [Setting up the payment condition](#setting-up-the-payment-condition)

> ⚠️ The information in this article does not refer to the **Promissory** or **CardPromissory** payment conditions available in the Admin in **Store Settings > Payment > Settings > Payment Conditions**.

## Setting up a payment provider

To set up a payment provider,  access [Register payment and anti-fraud providers](/en/docs/tutorials/registering-gateway-affiliations).

> ⚠️ Check that the desired payment provider supports Notes Payable payment processing.

## Notes Payable Setup

After registering the payment provider, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. Click on the **Custom Payments** tab.
3. In **Notes Payable**, click on one of the available configuration boxes (Config).
4. Fill in the following fields:
- **Name:** the name that will be used to identify the payment.
- **Description:** details of the payment condition.
- **Note payable expiration date:** the due date for your customer to pay the note payable before it expires.
- **Automatic authorization:** select whether you want to authorize payments automatically. We recommend enabling this option only for payments on delivery or in-store pickup. By choosing Yes, the order status will automatically change to Handling shipping without requiring payment verification.
- **Change margin range:** percentage margin range allowed for changes in the value of the Note Payable. Some customers may want to authorize [changes to orders](https://help.vtex.com/docs/tutorials/how-order-modification-works). In this case, please fill in the **Change margin range** field to determine the percentage margin allowed for changes.
- **Split payment:** choose whether to use the [split payment solution](/en/docs/tutorials/split-payment). If you opt to use it, the Note Payable will be split between the sellers and the marketplace, when applicable.
- **Automatic invoicing:** number of days for the system to invoice the Note Payable after payment authorization. By default, Notes Payable are invoiced upon payment authorization. By configuring this field, billing will no longer occur upon authorization and will begin after the number of days defined by the customer.

5. Click on `Save`.

## Setting up the payment condition

After completing all the steps, the notes payable payment will be configured and ready to be used in your store.

Learn how to associate it with a payment condition in our article [Configuring payment conditions](/en/docs/tutorials/how-to-configure-payment-conditions).
