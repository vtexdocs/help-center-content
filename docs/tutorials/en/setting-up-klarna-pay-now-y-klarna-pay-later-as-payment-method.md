---
title: 'Setting up Klarna Pay Now and Klarna Pay Later as a payment method'
id: 4nsW4t3jGU9f8qqGoVjVtz
status: DRAFT
createdAt: 2020-12-04T15:02:01.008Z
updatedAt: 2022-12-23T20:23:59.263Z
publishedAt: 
firstPublishedAt: 2020-12-04T19:45:04.488Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: setting-up-klarna-pay-now-y-klarna-pay-later-as-payment-method
locale: en
legacySlug: setting-up-klarna-pay-now-y-klarna-pay-later-as-a-payment-method
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

[Klarna Pay Now and Klarna Pay Later](https://www.klarna.com/us/what-is-klarna/) are payment options by Klarna. While Klarna Pay Now offers instant payments, Klarna Pay Later allows payments by invoice and in up to 36 installments.

For each of these payment methods there are different setup requirements:

- __Klarna Pay Now__: it can currently only be used with the Adyen gateway. Before starting to configure this payment method, it is necessary to [configure the Adyen gateway](https://help.vtex.com/es/tutorial/como-configurar-el-gateway-adyen-en-vtex--tutorials_2337#) in your shop.

- __Klarna Pay Later__: it can be used with Klarna or Adyen gateway affiliations.
    - __Klarna__: you need to [setting up Klarna affiliation](/es/tutorial/setting-up-klarna-pay-now-y-klarna-pay-later-as-payment-method#setting-up-klarna-affiliation) and install the _vtexdemoemea.klarna@2.0.9_ (or later version) in your store. Learn more how to install the app at [Installing an app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-installing-an-app).
    - __Adyen__: you need to [setting up Adyen affiliation](https://help.vtex.com/en/tutorial/how-to-configure-the-adyen-gateway-on-vtex--tutorials_2337#). To complete this configuration, ask Adyen to enable the field __Live Endpoint URL Prefix__ in your shop and fill in according to the information described in [this documentation](https://www.adyen.help/hc/en-us/articles/360014322079-How-can-I-find-the-endpoint-URL-for-my-LIVE-account-).

<div class="alert alert-warning">
Klarna Pay Now and Klarna Pay Later are only enabled for SmartCheckout V6, and only customers from the European and US markets can use their solutions, so they are not applicable payment methods for Brazilian customers.
</div>

## Setting up Klarna affiliation

To configure Klarna affiliation, follow the steps below:

1. Access the __Admin__ VTEX.
2. Click on __Payments__.
3. Then, click on __Settings__.
4. In the __Gateway affiliations__ tab, click on the __+__ button.   
5. Click on the __Klarna__ connector.
6. Fill in the __Application Key__ and __Application Token__ fields with data provided by Klarna.
7. Click on __Save__.  

<div class="alert alert-warning">
  If you are using the Klarna connector in a Test environment, the <b>Application Key</b> must be set to <i>playground.{Klarna User}</i>. When used in a Production environment, the <b>Application Key</b> field should be your <i>Klarna User</i>.
</div>

## Klarna Pay Now

To set up Klarna Pay Now, follow the step-by-step below:

1. Access the __Admin__ VTEX.
2. Click on __Payments__.
3. Then, click on __Settings__.   
4. In the __Payment Conditions__ tab, click on the __+__ button.    
5. Choose the payment condition __Klarna Pay Now__.   
6. Fill the __Rule Name__ field with a name of your choice for identification. 
7. Activate the condition in the __Status__ field.    
8. Under __Process with affiliation__, select the __Adyen__ option.    
9. If you want to use an anti-fraud system, select the option __Use anti-fraud__.   
10. If you want, you can also [configuring payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455?&utm_source=autocomplete).
11. Click on __Save__.

After following the indicated steps, Klarna Pay Now connector may take up to 10 minutes to appear at your store's checkout as a payment option.

## Klarna Pay Later

To set up Klarna Pay Later, follow the step-by-step below:

1. Access the __Admin__ VTEX.
2. Click on __Payments__.
3. Then, click on __Settings__.    
4. In the __Payment Conditions__ tab, click on the __+__ button.    
5. Choose the payment condition __Klarna__.   
6. Fill the __Rule Name__ field with a name of your choice for identification. 
7. Activate the condition in the __Status__ field.     
8. Under __Process with affiliation__, select the __Adyen__ or __Klarna__ option.    
9. If you want to use an anti-fraud system, select the option __Use anti-fraud__.   
10. If you want, you can also [configuring payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455?&utm_source=autocomplete).
11. Click on __Save__.

After following the indicated steps, Klarna Pay Later connector may take up to 10 minutes to appear at your store's checkout as a payment option.
