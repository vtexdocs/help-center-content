---
title: 'Setting up payments with Stelo'
id: 6c16nRhAGWaA2mSUOOuC00
status: DRAFT
createdAt: 2018-03-02T20:20:44.376Z
updatedAt: 2024-03-18T20:21:28.181Z
publishedAt: 
firstPublishedAt: 2018-03-05T19:08:32.807Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payments-with-stelo
locale: en
legacySlug: setting-up-payments-with-stelo
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">This payment integration can no longer be configured on the platform due to the <a href="https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14">legacy provider removal process</a> and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.</div>

In addition to a [sub-acquirer](/en/tutorial/setting-up-sub-acquirer-stelo) that processes transactions carried out with various payment conditions, Stelo also offers a [digital wallet service](/en/faq/what-is-an-e-wallet). Your customer chooses to pay with it and is redirected to authentication in Stelo's environment.

To set up payments with the Stelo digital wallet in your store, you first need to register the __Stelo Redirect__ gateway affiliation.

## Setting up Stelo Redirect gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __Stelo Redirect__ connector.
4. Fill in the registration fields with the data provided by Stelo (_Client Id_ and _Client Secret_ fields).
5. In the __maxInstallments__ field, choose the maximum number of installments for payments made with Stelo.
6. In __Pais__ ("Country"), select where the payment condition will be offered (currently, the only available option is Brazil).
7. In __Moeda__ ("Currency"), inform whether you want to charge in US dollars or Brazilian reais.
8. Click __Save__.

## Setting up Stelo payment condition
1. Within the __Settings__ of Payments module, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Select __Stelo__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. If there's an anti-fraud system set up in your store, you can activate it for this payment condition by checking the __Use Anti-Fraud__ box.
6. Choose whether the payments will be cash or installments.
7. You can also set up [special payment conditions](/en/tutorial/special-conditions).
8. Click __Save__.

After following the steps indicated above, Stelo will appear at the checkout of your store as a payment option. After clicking __Finish Purchase__, your customer will be directed to the digital wallet environment, where they should follow the authentication steps.
