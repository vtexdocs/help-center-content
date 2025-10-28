---
title: 'Setting up CyberSource gateway IO'
id: 6nhvUTrLxeacsoYG6GkGM
status: PUBLISHED
createdAt: 2018-04-30T17:34:57.517Z
updatedAt: 2025-03-07T13:27:18.752Z
publishedAt: 2025-03-07T13:27:18.752Z
firstPublishedAt: 2018-04-30T20:20:44.704Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-cybersource-gateway
legacySlug: setting-up-cybersource-gateway
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

CyberSource is a company that offers several solutions to help manage payments in your store. Among them are a [gateway](/en/tutorial/what-is-a-payment-gateway--2KH9Wdi7F6swOU4amECSOk) and [anti-fraud](/en/tutorial/what-is-anti-fraud--69SjFCc4rC6Ii0OMAeYAsG), both with integrations available at VTEX.

If you want more information about integrating Cybersource anti-fraud into your store, go to [Setting up CyberSource anti-fraud](/en/tutorial/setting-up-cybersource-antifraud--2Z88QmpRAsWmI0qaCo4aQg).

To use the Cybersource IO gateway in your store, the following actions are required:

1. [Install Cybersource IO applications (VTEX IO CLI)](#installing-cybersource-io-apps)
2. [Create authentication keys in Cybersource (Cybersource environment)](#creating-authentication-keys-in-cybersource)
3. [Perform Cybersource app settings (Admin VTEX)](#setting-up-cybersource-io-app)
4. [Configure Cybersource gateway (Admin VTEX)](#setting-up-cybersource-gateway)
5. [Configure payment conditions (Admin VTEX)](#setting-up-payment-condition)
6. [Configurar o Device Fingerprint (opcional)](#setting-up-cybersource-io-device-fingerprint-optional)
7. [Configure merchant fields (optional)](#setting-up-merchant-fields-optional)

## Installing Cybersource IO apps

The following Cybersource apps must be installed in your store account:

- __vtex.cybersource-ui__
- __vtex.cybersource__
- __vtex.cybersource-payer-auth__

> ⚠️ If you intend to use Cybersource's anti-fraud system, but want to transact payments on a non-Cybersource gateway, you will need to install the **vtex.cybersource-fraud** app.

Learn more about installing applications on a VTEX account in [Installing an app](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-an-app). 

## Creating authentication keys in Cybersource 

After installing the apps, you must create authentication keys in the Cybersource environment.

> ⚠️ Settings configured in an environment external to VTEX may be discontinued or modified without prior notice. Please check your Cybersource account for the latest information.

Follow the steps below:

1. Access [Cybersource's EBC panel](https://businesscenter.cybersource.com/ebc2/) (Enterprise Business Center) with your data.
2. In the side navigation menu, select __Payment Configuration > Key Management__.
3. Click __Generate Key__.
4. In __REST APIs__, select the __REST - Shared Secret__ option.
5. Click __Generate Key__.
6. Click __Download key__ or copy the key information using the copy function located in front of the __Key__ and __Shared Secret__ fields.

## Setting up Cybersource IO app

Once you have obtained the available authentication keys, it is time to configure the Cybersource IO app in the Admin. 

![Cybersource Admin settings EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-cybersource-gateway_1.JPG)

Follow the steps below to configure the Cybersource IO app:

1. In the VTEX Admin, go to __Apps > Installed Apps > Cybersource__, or type __Cybersource__ in the search bar at the top of the page.
2. On the __Admin Settings__ tab, fill in or select the fields below:
<br>
<ul>
<br>
    	<li>**Merchant id**: Your merchant ID at Cybersource.</li>
    	<li>**Merchant key** and **Shared secret key**: The two keys obtained in the Cybersource environment.</li>
  <li>**Processor**: Select the company that will process the payment, or click **Other** if it is not on the list.</li>
    	<li>**Region**: Select one of the regions or click **Other** if the desired region is not in the list.</li>
    	<li>**Reference Suffix (optional)**: By default, orders in the Cybersource system will be associated with the VTEX order group ID, but this setting can be used to append a suffix such as "-01".</li>
    	<li>**Custom NSU (optional)**: Replace default NSU with custom value.</li>
    	<li>**Use Order Id For Device Fingerprint**: Select whether you want to use the order ID instead of the session ID for device fingerprinting.</li>
    	<li>**Enable Tax Calculations**: Select whether you want to use Cybersource at checkout as your tax calculation provider.</li>
    	<li>**Enable transaction posting**: Select whether to enable posting completed transactions for tax reporting issues.</li>
    	<li>**Sales Channels to Exclude from Cybersource (optional)**: Enter any sales channel where you do not want to use Cybersource transactions.</li>
    	<li>**Shipping Product Code (optional)**: Enter a product code for shipping tax calculation purposes.</li>
    	<li>**Tax Nexus Regions (optional)**: Enter a list of regions where taxes must be collected.</li>
</ul>
3. Click __Save settings__.

## Setting up Cybersource gateway

To configure the Cybersource gateway, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the provider's screen, click the `New Provider` button.
3. Type __Cybersource IO__ in the search bar and click on the provider's name.
4. In __Provider Authorization__, it is not necessary to fill in the __App key__ and __App token__ fields.
5. If you wish to modify the identification name to be displayed for the Cybersource gateway on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In the __Automatic settlement__ field, select one of the following options:
<br>
<ul>
<br>
    	<li>**Use behavior recommended by the payment processor**: Capture is not automatic, but scheduled to be carried out after 4 days (or if the order is invoiced, whichever comes first).</li>
    	<li>**Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
   		<li>**Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>      
   		<li>**Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>
8. In __Provider fields__, fill in or select the fields below:
<ul>
<br>
    	<li>**Company Name**: Name of the company.</li>
      <li>**Company Tax id**: Identification number of the company.</li>
  <li>**Capture Setting**: select **Delayed Capture** to follow the standard VTEX platform procedure (separate calls for authentication and capture) or **Immediate Capture**, where a single authentication and capture call will be sent to CyberSource when the order is made.</li>
    	<li>**Payer Authentication**: If you wish to enable this option, [3-D Secure Payer Authentication da Cybersource](https://www.cybersource.com/en/solutions/fraud-and-risk-management/payer-authentication-for-3d-secure.html) must be used.</li>
    	<li>**Capture Delay** and **Capture Delay Interval**: Determine the period before automatic capture.</li>
    	<li>**Using Decision Manager**: Select whether [CyberSource Decision Manager](https://www.cybersource.com/apac/en/solutions/fraud-and-risk-management/decision-manager.html) will be active on your account.</li>
      <li>**Authorized Payments Flagged by Decision Manager**: When the status is Authorized, Fraud Reject, select the following options:</li>
      <blockquote><li>**Treat as Successful Authorizations**: Accept the order.</li></blockquote>
      <blockquote><li>**Treat as Failed Authorizations**: Deny the order.</li></blockquote>
      <blockquote><li>**Treat as Pending Authorizations**: Hold the order pending a final decision.</li></blockquote>  
</ul>
9. The __Merchant Id__, __Merchant Key__ and __Shared Secret Key__ fields must be left blank, as the values defined in step 2 of the section [Configurando o app Cybersource IO](#setting-up-cybersource-io-app) will be used. If the fields are filled in with a value, they will overwrite the information entered in step 2.
10. Click __Save__.

## Setting up payment condition

To process credit card payments through Cybersource, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__ or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the + button.
3. Click on the name of the desired credit card.
4. Fill the __Condition name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. In __Process with provider__ select the __Cybersource - IO__ option.
7. If you want to use an anti-fraud system, select the __Use anti-fraud solution__ option and choose your preferred provider.
8. If you wish, you can also [configure special payment conditions](/en/tutorial/special-conditions--tutorials_456).
9. Click __Save__.

> ⚠️ If you have previously created credit card payment conditions for other gateways (including the legacy Cybersource provider), you can set those conditions to **Inactive**. In-progress transactions initiated from that provider will still be processed by that provider, even if it is inactive. Only new transactions will be processed by the new Cybersource IO provider. If you need to revert to your previous provider for any reason, simply set their payment conditions to **Active** and the Cybersource IO payment conditions to **Inactive**.

## Setting up Cybersource IO Device Fingerprint (optional)

Device Fingerprint is an identifier that acts in payment processing to improve fraud risk analysis. 

By collecting non-sensitive data, Device Fingerprint identifies and analyzes the security level of the device used to perform a given transaction. It also analyzes transactions previously performed with that device.

> ℹ️ Each store must have only one Device Fingerprint registered. Check if you have already registered the Device Fingerprint in another connector, before proceeding with the steps below.

To configure Cybersource IO Device Fingerprint, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the <i class="fas fa-cog" alt="engrenagem azul"></i> icon of the desired website.
3. In the blue options menu located at the top of the page, click on __Chode__.
4. In __Files__, click __checkout5.custom.js__.
5. Enter the code below into the text field and click `Save`.

```
function addsDeviceFingerPrint() {
  if (!window.vtex) return;
  if (window.vtex.deviceFingerprint) return;
  $.ajax({
    type: 'get',
    async: true,
    url: rootPath() + '/api/sessions?items=*'
  }).then(function(response) {
    var ORG_ID = "{{ORG_ID}}";
    var MERCHANT_ID = "{{MERCHANT_ID}}";
    console.log('session', response);
    window.vtex.deviceFingerprint = response.id;
    var sessionId = response.id || "CYBERSOURCE";
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://h.online-metrix.net/fp/tags.js?org_id=${ORG_ID}&session_id=${MERCHANT_ID}${sessionId}`;
    document.head.appendChild(script);
    var noScript = document.createElement("noscript");
    var iframe = document.createElement("iframe");
    iframe.style = "width: 100px; height: 100px; border: 0; position: absolute; top: -5000px;";
    iframe.src = `https://h.online-metrix.net/fp/tags?org_id=${ORG_ID}&session_id=${MERCHANT_ID}${sessionId}`;
    noScript.appendChild(iframe);
    document.body.appendChild(noScript);
  })
}
```

## Setting up merchant fields (optional)

Additionally, you can define custom fields that will be included in orders forwarded from VTEX to Cybersource. 

![Cybersource Admin merchant define fields EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-cybersource-gateway_2.JPG)

See below how to create these fields:

1. In the VTEX Admin, go to __Aplicativos > Installed Apps > Cybersource__, or type __Cybersource__ in the search bar at the top of the page.
2. On the __Merchant Defined Fields__ tab, under __Merchant Defined Information__, you can insert fields following the following rules:
<ul>
<br>
    	<li>Any values outside the keys **{{}}** will be considered as a direct value.</li>
      <li>Any values between **{{}}** must be in the following format *Reference Word|Modification Word|Values*.</li>
      <li>All **reference words** can be found in the **Show all referenceable words** drop-down menu:</li>
  <blockquote><li>**Reference words** can be left blank if the **Modification Word** and **Values** are present.</li></blockquote>
  <blockquote><li>The **reference word** is case sensitive.</li></blockquote>
    	<li>**Modification words** must be **Pad**, **Date**, **Trim**, **Age**, or **Equals**. See below the characteristics when registering each of them:</li>
      <blockquote><li>**Pad**: The **Values** must be in the format **desired length:fill character**.</li></blockquote>
      <blockquote><blockquote><li>The **filled character** must be a unique value. For example, *9:x* will result in a desired length of 9, and will fill gaps with x.</li></blockquote></blockquote>
  <blockquote><blockquote><li>If the field value exceeds the **desired length**, the field will be trimmed.</li></blockquote></blockquote>         
<br>       
      <blockquote><li>**Date**: **Values** must be in the format dd/MM/yyyy or any combination thereof.</li></blockquote>
      <blockquote><blockquote><li>**M** for month must be capitalized. This format can be ordered as desired, such as **yyyy/MM** or **yyyy** or **dd/yyyy/MM**.</li></blockquote></blockquote>
      <blockquote><li>**Trim**: Will limit the maximum length of the field value without adding padding characters.</li></blockquote>
      <blockquote><li>**Age**: Will return the difference between the current date and the field value using Timespan format.</li></blockquote>
      <blockquote><li>**Equals**: Will return the boolean value of a string comparison between the field value and the comparison value.</li></blockquote>
<br>
    	<li>Each new line is considered a new field defined by the merchant.</li>

Examples:

| Value entered in Admin under `Merchant Defined Information`    | Simulated scenario     | Result     |
| ---------- | ---------- | ---------- |
| `969{{Reference|PAD|9:0}}`       | When `Reference` is 6023       | 969602300000       |
| `{{OrderId}}-01`       | Where `OrderId` is 124578       | 124578-01       |
| `{{MiniCart.Buyer.LastName}},{{MiniCart.Buyer.FirstName}}`       | Where Buyer is John Doe       | Doe,John       |        

