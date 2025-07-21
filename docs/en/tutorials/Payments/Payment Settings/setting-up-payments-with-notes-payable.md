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
locale: en
legacySlug: setting-up-payments-with-notes-payable
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

On VTEX, your store can receive payments made with __Notes Payable__. To enable this option, you must perform the following steps:

1. [Setting up the payment provider](#setting-up-a-payment-provider)
2. [Notes Payable setup](#notes-payable-setup)
3. [Setting up the payment condition](#setting-up-the-payment-condition)

<div class="alert alert-warning">
  The information in this article does not refer to the <b>Promissory</b> or <b>CardPromissory</b> payment conditions available in the Admin in <b>Store Settings > Payment > Settings > Payment Conditions</b>.
</div>

## Setting up a payment provider

To set up a payment provider,  access [Register payment and anti-fraud providers](/en/tutorial/registering-gateway-affiliations--tutorials_444).

<div class="alert alert-warning">
Check that the desired payment provider supports Notes Payable payment processing.
</div>

## Notes Payable Setup

After registering the payment provider, follow the steps below:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Click on the __Custom Payments__ tab.
3. In __Notes Payable__, click on one of the five configuration boxes.
4. Fill in the following fields:
- __Name:__ the name that will be used to identify the payment.
- __Description:__ details of the payment condition.
- __Note payable expiration date:__ the due date for your customer to pay the note payable before it expires.
- __Automatic authorization:__ select whether you want to authorize payments automatically. We recommend enabling this option only for payments on delivery or in-store pickup. By choosing Yes, the order status will automatically change to Handling shipping without requiring payment verification.
- __Change margin range:__ percentage margin range allowed for changes in the value of the Note Payable. Some customers may want to authorize [changes to orders](/en/tutorial/changing-items-from-a-complete-order--tutorials_190). In this case, please fill in the _Change margin range_ field to determine the percentage margin allowed for changes.
- __Split payment:__ choose whether to use the [split payment solution](/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx). If you opt to use it, the Note Payable will be split between the sellers and the marketplace, when applicable.
- __Automatic invoicing:__ number of days for the system to invoice the Note Payable after payment authorization. By default, Notes Payable are invoiced upon payment authorization. If this field is set to __Yes__, invoicing will no longer occur upon authorization but after the number of days you have determined.<br>

<ul> 
5. Click on <b>Save</b>.
  </ul>

## Setting up the payment condition

After completing all the steps, the notes payable payment will be configured and ready to be used in your store.

Learn how to associate it with a payment condition in our article [Configuring payment conditions](/en/tutorial/how-to-configure-payment-conditions).
