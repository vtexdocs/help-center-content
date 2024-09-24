---
title: 'Setting up payments with Nuvei'
id: 67DjdrpIaZZmhXv9Iwa6Ev
status: PUBLISHED
createdAt: 2024-03-27T12:55:27.016Z
updatedAt: 2024-09-13T17:39:52.427Z
publishedAt: 2024-09-13T17:39:52.427Z
firstPublishedAt: 2024-09-13T17:39:52.427Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-nuvei
locale: en
legacySlug: setting-up-payments-with-nuvei
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with Nuvei. Through this provider, your store can make sales with credit and debit cards.

To use Nuvei, follow the steps below:

- [Configure Nuvei on VTEX](#configuring-nuvei-provider-on-vtex)
- [Configure the DMN Url in the Cloud](#configurar-dmn-url-in-the-cloud)

## Configuring Nuvei provider on VTEX

<blockquote><ui>1. In the VTEX Admin, go to <b>Store Settings > Payment > Providers</b>, or type <b>Providers</b> in the search bar at the top of the page.</ui>

<blockquote><ui>2. On the providers screen, click the <b>New Provider</b> button.</ui>

<blockquote><ui>3. Type the name <b>nuvei-payment-provider</b> in the search bar and click on the name of the provider.</ui>

<blockquote><ui>4. In <b>Provider Authorization</b>, fill in the <b>App key</b> and <b>App token</b> fields with with your Nuvei account information.</ui>

<blockquote><ui>5. If you wish to modify the identification name to be displayed for the Nuvei provider on the VTEX Admin screen, enter the information in the <b>Name</b> field in <b>Basic Information</b>.</ui>

<blockquote><ui>6. In <b>Payment Control</b>, select whether you want to activate the provider in a test environment by clicking <b>Enable test mode</b>.</ui>

<blockquote><ui>7. To fill in the fields <b>Merchant Id</b>, <b>Merchant Site Id</b> and <b>Client Secret</b> (Secret Key), access the information available in <b>Settings > My Integration Settings</b> within the control panel of your account in the Nuvei environment.</ui>

<blockquote><ui>>⚠️ Nuvei has specific credentials (Merchant Id, Merchant Site Id and Client Secret) for each type of environment. Access the test [(Integration)](sandbox.nuvei.com) and [Live](cpanel.nuvei.com) environments to identify the credentials relating to each of them.</blockquote>
<br>  
<blockquote><ui>8. In <b>Environment</b>, select whether you want to configure the Nuvei provider in the <b>Integration</b> or <b>Live</b> environment.</ui>

<blockquote><ui>9. In <b>Test 3ds challenge Integration only</b>, if you have selected the test environment (<b>Integration</b>) it is possible to perform 3DS security tests using the <b>Force 3ds Challenge</b>, <b>Force 3ds Frictionless</b> or <b>User cardHolder name</b> options. For more information about the tests, access the <a href="https://docs.nuvei.com/documentation/integration/testing/testing-cards/?highlight=test%20cards#3d-secure-v2-test-scenarios">Nuvei</a> documentation.</ui>

 <blockquote><ui>>⚠️ Whenever the provider's **Environment** is configured as **Live**, the option selected for the **Test 3ds challenge Integration only** field must be **User cardHolder name**.</blockquote>
<br>  
<blockquote><ui>10. Click <b>Save</b>.</ui>

## Configuring DMN Url on Nuvei

To configure DMN Url information on Nuvei, follow the steps below:

1. Access your Nuvei test environment ([Integration](sandbox.nuvei.com)) or [Live](cpanel.nuvei.com).
2. On the __Settings__ menu, click __My Integration settings__.
3. In __DMN URL__, replace the __{account-name}__ field with the name of your VTEX account.

`https://master--{account-name}.myvtex.com/_v/api/nuvei-payment-provider/v0/dmn` 

To configure the payment methods to be processed by Nuvei, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Nuvei provider may take up to 10 minutes to appear at your store's checkout as a payment option.
