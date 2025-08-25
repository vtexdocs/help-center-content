---
title: 'Setting up payments with Nuvei'
id: 67DjdrpIaZZmhXv9Iwa6Ev
status: PUBLISHED
createdAt: 2024-03-27T12:55:27.016Z
updatedAt: 2025-08-18T14:50:12.265Z
publishedAt: 2025-08-18T14:50:12.265Z
firstPublishedAt: 2024-09-13T17:39:52.427Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-nuvei
legacySlug: setting-up-payments-with-nuvei
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with Nuvei. Through this provider, your store can make sales with credit, debit cards, OXXO, PSE, notes payable, among others.

To use Nuvei, follow the steps below:

- [Configure Nuvei on VTEX](#configuring-nuvei-provider-on-vtex)
- [Configure the DMN Url in the Cloud](#configurar-dmn-url-in-the-cloud)

## Configuring Nuvei provider on VTEX

<blockquote><ui>1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.</ui>

<blockquote><ui>2. On the providers screen, click the **New Provider** button.</ui>

<blockquote><ui>3. Type the name **nuvei-payment-provider** in the search bar and click on the name of the provider.</ui>

<blockquote><ui>4. In **Provider Authorization**, fill in the **App key** and **App token** fields with with your Nuvei account information.</ui>

<blockquote><ui>5. If you wish to modify the identification name to be displayed for the Nuvei provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.</ui>

<blockquote><ui>6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.</ui>

<blockquote><ui>7. To fill in the fields **Merchant Id**, **Merchant Site Id** and **Client Secret** (Secret Key), access the information available in **Settings > My Integration Settings** within the control panel of your account in the Nuvei environment.</ui>

<blockquote><ui>> ⚠️ Nuvei has specific credentials (Merchant Id, Merchant Site Id and Client Secret) for each type of environment. Access the test [(Integration)](sandbox.nuvei.com) and [Live](cpanel.nuvei.com) environments to identify the credentials relating to each of them.</blockquote>
<br>  
<blockquote><ui>8. In **Environment**, select whether you want to configure the Nuvei provider in the **Integration** or **Live** environment.</ui>

<blockquote><ui>9. In **Test 3ds challenge Integration only**, if you have selected the test environment (**Integration**) it is possible to perform 3DS security tests using the **Force 3ds Challenge**, **Force 3ds Frictionless** or **User cardHolder name** options. For more information about the tests, access the [Nuvei](https://docs.nuvei.com/documentation/integration/testing/testing-cards/?highlight=test%20cards#3d-secure-v2-test-scenarios) documentation.</ui>

 <blockquote><ui>> ⚠️ Whenever the provider's **Environment** is configured as **Live**, the option selected for the **Test 3ds challenge Integration only** field must be **User cardHolder name**.</blockquote>
<br>  
<blockquote><ui>10. Click **Save**.</ui>

## Configuring DMN Url on Nuvei

To configure DMN Url information on Nuvei, follow the steps below:

1. Access your Nuvei test environment ([Integration](sandbox.nuvei.com)) or [Live](cpanel.nuvei.com).
2. On the __Settings__ menu, click __My Integration settings__.
3. In __DMN URL__, replace the __{account-name}__ field with the name of your VTEX account.

`https://master--{account-name}.myvtex.com/_v/api/nuvei-payment-provider/v0/dmn` 

To configure the payment methods to be processed by Nuvei, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Nuvei provider may take up to 10 minutes to appear at your store's checkout as a payment option.
