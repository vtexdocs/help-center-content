---
title: Setting up payments with Apple Pay
id: 5L3NWMgvdKswWQa6eIc008
status: PUBLISHED
createdAt: 2018-04-12T20:38:42.521Z
updatedAt: 2023-03-26T21:54:30.284Z
publishedAt: 2023-03-26T21:54:30.284Z
firstPublishedAt: 2018-05-23T19:26:11.000Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payments-with-apple-pay
legacySlug: setting-up-payments-with-apple-pay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Your customers can shop using Apple Pay, the [digital wallet](/en/faq/what-is-an-e-wallet) from Apple. For this, you need to fulfill some requirements:

- Have an account in `developer.apple.com`.
- Hire a gateway that processes payments with Apple Pay.

<div class="alert alert-warning">
  Apple Pay currently only works on MacOs, IOS operating systems, and the Safari browser. For more information, go to <a href="https://support.apple.com/en-gb/HT208531">Devices compatible with Apple Pay</a>.
</div>

With these requirements met, just follow the steps below to offer this payment condition in your store:

## Setting up the gateway affiliation
Offering payment conditions to customers in your store depends on gateway affiliates being able to process them. On the VTEX platform, the affiliations currently compatible with __Apple Pay__ are __ERedeREST__ (integration of the acquirer Rede), __Adyen__ and __Stripe__.

These articles show how to set up [ERedeREST](/en/tutorial/setting-up-rede-acquirer-with-erederest), [Adyen](/en/tutorial/how-to-configure-the-adyen-gateway-on-vtex) and [Stripe](https://help.vtex.com/en/tutorial/configuring-stripe-gateway-affiliation--fwF2wk2FQKrODrWWkvSLO).  

But remember: it's critical to [register the Merchant ID on Apple Pay](https://developers.vtex.com/vtex-rest-api/docs/setting-up-merchant-id-in-apple-pay) before setting up the gateway affiliation.

## Downloading and installing VTEX App Store application
1. On the admin side menu, click __Apps__.
2. Access the __VTEX App Store__ link or use the URL `https://apps.vtex.com/?an={{AccountName}}` directly in the browser, changing `{{AccountName}}` to the name of the store in which you want to offer Apple Pay.
3. Browse for the __Apple Pay__ app and click __Get__.
4. You will be directed to an order review screen. Check the data and click the __Confirm order and begin installation__ button.
5. You will get to the installation screen. There, you can review the application permissions and start the download (by clicking __Instalar__).
6. The app will be installed on your workspace, but you will need to fill in the __Merchant ID__ (in the __Merchant Identifier__ field) to be applied in your store.
7. Click __Save__.

## Setting up Apple Pay payment condition
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Click the __Payment conditions__ tab and then the __+__ button.
3. Select the __Apple Pay__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. In the __Process with affiliation__ field, select the option that will be used to process the payments.
6. If there is an anti-fraud set up in your store, you can activate it for this payment condition by checking the __Use Anti-Fraud__ box.
7. Choose whether you want payments to be made in cash or installments.
8. If you wish, you can also opt for a [special payment condition](/en/tutorial/special-conditions).
9. Click __Save__.

After following the steps indicated above, __Apple Pay__ will appear at your store checkout as a payment option for your customers to use.

### Related articles
- [Setting up Rede acquirer with ERedeRest](/en/tutorial/setting-up-rede-acquirer-with-erederest)
- [How to set up your Adyen gateway in VTEX platform](/en/tutorial/how-to-configure-the-adyen-gateway-on-vtex)
- [Setting up Merchant ID in Apple Pay](https://developers.vtex.com/vtex-rest-api/docs/setting-up-merchant-id-in-apple-pay)
- [Configuring payment special conditions](/en/tutorial/special-conditions)
- [What is an e-wallet?](/en/faq/what-is-an-e-wallet)
