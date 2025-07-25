---
title: 'Setting up payments with Wabi'
id: 2H3myi3n1MQ60UN5QFpLsN
status: PUBLISHED
createdAt: 2025-02-26T18:23:04.579Z
updatedAt: 2025-02-26T18:55:43.933Z
publishedAt: 2025-02-26T18:55:43.933Z
firstPublishedAt: 2025-02-26T18:55:43.933Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-wabi
locale: en
legacySlug: setting-up-payments-with-wabi
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Wabi payment provider. With this provider, your store can make sales through Notes Payable.

To configure Wabi, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider button.
3. Type the name **Wabi** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Wabi.
5. If you wish to modify the identification name to be displayed for the Wabi provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. Click `Save`.

## Setting up payment condition Notes Payable

If you have not yet configured promissory notes as a payment method in other connectors in your store, go to [Setting up payments with Notes Payable](/en/tutorial/setting-up-payments-with-notes-payable--5pW7avTwtyQcMu4uiW8quQ).

Then, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. On **Custom Payment**, click the button corresponding to the name used for the note payable payment method (configured in the previous section).
4. Activate the condition in the **Status** field.
5. On **Process with provider**, select **wabipartnerbo-wabi-v0**.
6. If you wish, you can also configure [payment special conditionso](/en/tutorial/special-conditions--tutorials_456).
7. Click `Save`.

After following the indicated steps, Wabi may take up to 10 minutes to appear at your store`s checkout as a payment option.

