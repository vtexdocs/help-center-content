---
title: 'Setting up PayPal Plus (Transparent PayPal)'
id: 2akxq3I92k8A4kymIYOiWy
status: DRAFT
createdAt: 2018-02-20T20:15:36.950Z
updatedAt: 2024-03-18T20:30:56.156Z
publishedAt: 
firstPublishedAt: 2018-02-20T22:56:13.192Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: setting-up-paypal-plus
locale: en
legacySlug: setting-up-paypal-plus
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">This payment integration can no longer be configured on the platform due to the <a href="https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14">legacy provider removal process</a> and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.</div>

At VTEX Payments, you can set up the PayPal Plus sub-acquirer, PayPal's transparent checkout. Through this payment mode, the client simply enters their credit card information and finishes the purchase normally. Payment is made directly on your site, without the need to redirect your customers.

To set it up, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button. 
3. Type the name __PayPalPlus__ in the search bar and click on the name of the provider.
4. If you wish to modify the identification name to be displayed for the PayPal Plus on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
5. Under __Payment Control__, select whether you want to activate PayPal Plus in a test environment by clicking __Enable test mode__.
6. Fill in the fields below according to the data provided by PayPal:
    - In __Client ID__ enter the _clientId_.
    - In __Secret__ enter _secret_.
    - In __Username__ enter _userName_.
    - In __Password__ enter the _password_.
    - In __Signature__ insert the _signature_.

<blockquote><ui>  7. Under <b>Save Cards</b>, select <b>Yes</b> so the customer can select the option to save the card at checkout. If you do not wish to enable this option, select <b>No</b>.</ui>

<blockquote><ui>  8. In <b>Currency</b>, choose the transaction currency.</ui>

<blockquote><ui>  9. In <b>Transaction location</b>, select the country of the transaction.</ui>

<blockquote><ui>  10. In <b>Enable Risk API (STC)</b>, select the option according to your PayPal settings.</ui>

<blockquote><ui>  11. Click <b>Save</b>.</ui>

## Setting up PayPal Plus payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the + button.
3. Click on __PayPalPlus__.
4. Fill the __Condition name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. Select whether you want to use an anti-fraud system by selecting the __Use anti-fraud solution__ option.
7.  Indicate whether credit card payments must be made [in full or with installments](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455).
9. If you wish, you can also configure [special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
10. Click `Save`.

After following the indicated steps, PayPal Plus may take up to 10 minutes to appear at your store's checkout as a payment option.
