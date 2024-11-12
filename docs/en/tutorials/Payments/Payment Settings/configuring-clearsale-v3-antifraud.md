---
title: 'Configuring ClearSale v3 antifraud'
id: 2pPORygesIqQOa6cIG6agg
status: PUBLISHED
createdAt: 2017-10-30T14:10:20.822Z
updatedAt: 2024-11-08T18:13:21.419Z
publishedAt: 2024-11-08T18:13:21.419Z
firstPublishedAt: 2017-10-30T14:26:53.089Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: configuring-clearsale-v3-antifraud
locale: en
legacySlug: configuring-clearsale-v3-antifraud
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with ClearSaleV3 [anti-fraud](https://help.vtex.com/en/tutorial/how-to-configure-the-anti-fraud--tutorials_446). Through this system, it is possible to increase the level of security in payment transactions carried out in your store using risk analyzes that identify possible fraud.
Para configurar o ClearSaleV3, siga os passos abaixo:

To configure ClearSaleV3, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __ClearSaleV3__ in the search bar and click on the name of the provider.
4. If you wish to modify the identification name to be displayed for the ClearSaleV3 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
5. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
6. Fill in the information below according to your ClearSale settings:
<br>
<ul>
<br>
  <li><b>Login</b>: Login.</li>
  <li><b>Password</b>: Password.</li>
  <li><b>Custom SLA in minutes (optional)</b>: Period in which ClearSale will have to process the fraud analysis.</li>
  <li><b>Product (optional)</b>: Numeric value. Corresponds to the product ID contracted on ClearSale.</li>
  <li><b>Transaction currency</b>: Currency in which the transaction is carried out.</li>
  <li><b>Observation (optional)</b>: Text that will be sent to ClearSale as a remark.</li>
  <li><b>Send authenticated transactions?</b>: Indicates whether payment transactions must be authenticated with a password in the 3DSecure program.</li>
</ul>
7. Click `Save`.

>ℹ️ If you have a mobile application that uses VTEX APIs at checkout, it is necessary to implement fingerprint data collection to be sent to Clearsale, according to the platform used by the application. Find out more at [Clearsale Behavior Analytics](https://api.clearsale.com.br/docs/behavior-analytics" target="_blank).
>
> With the SDK implementation, it is necessary to collect the <span class="bg-muted-4">sessionId</span> value and send it in the <span class="bg-muted-4">deviceFingerprint</span> via [API when creating the payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).

## Creating a Google Tag Manager tag

Configuring ClearSale v3 anti-fraud solution requires creating a tag in Google Tag Manager, as described in the following steps:

1. Sign in to your [Google Tag Manager](https://tagmanager.google.com/) account.
2. Click on __Tag__ and then on __New__.
3. Choose the product __Personalized HTML Tag__.
4. Enter the following script, replacing `your-app` with the identifier sent to you by ClearSale (between single quotes):

  ```
    var deviceFingerprintIdCSV4 = 10000000 + Math.floor(Math.random() * 99999999);
    (function (a, b, c, d, e, f, g) {
    a['CsdpObject'] = e; a[e] = a[e] || function () {
    (a[e].q = a[e].q || []).push(arguments)
    }, a[e].l = 1 * new Date(); f = b.createElement(c),
    g = b.getElementsByTagName(c)[0]; f.async = 1; f.src = d; g.parentNode.insertBefore(f, g)
    })(window, document, 'script', '//device.clearsale.com.br/p/fp.js', 'csdp');
    csdp('app', 'your-app');
    csdp('sessionid', deviceFingerprintIdCSV4);
    window.vtex.deviceFingerprint = deviceFingerprintIdCSV4;
  ```

5. Check the option __Support for document.write__.
6. In __Trigger In__, select the option __More__ and click on __New__.
7. Allocate a name to this trigger and choose the event type __Personalized Event__.
8. In __Trigger In__, define the name of the event as __payment__.
9. Save the trigger.
10. Click on the __Create Tag__ button, enter a name for this tag and save.
11. In the top right corner, click on __Publish__.

![Pasted image at 2017 10 20 01 11 PM](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

>ℹ️ See the [ FingerPrint documentation](https://api.clearsale.com.br/docs/finger-print" target="_blank) on ClearSale for more information on the above script.

## CustomSLA field details

The value entered in the **Custom SLA in minutes** field when configuring the anti-fraud solution is one of the three possible values for the `customSLA` field. If the cart is empty, the `customSLA` value will be the value of the `shippingEstimate` field for the transaction cart. If the cart has at least one item, the `customSLA` value will be the lowest value between the `deliverySlaInMinutes` value of the first item in the cart and the **Custom SLA in minutes** value used when configuring the anti-fraud solution.

The `shippingEstimate` and `deliverySlaInMinutes` values correspond to the delivery time and are generated at checkout from information in the Logistics module. The calculation of the delivery time is explained in the article [How is the delivery time is calculated?](https://help.vtex.com/en/tutorial/how-is-the-order-delivery-deadline-calculated--1TOuKCIjGQmqOqQkEqCg82).

The `shippingEstimate` value is obtained from a calculation made by the Logistics module. The value is followed by a letter, which represents the time unit used. The letters are:

- `d` for calendar days or `bd` for working days if the time is zero or at least 24 hours.
- `h` for hours if the time is less than 24 hours and at least 2 hours.
- `m` for minutes if time is less than 2 hours.

The `shippingEstimate` field can be obtained from the `shippingData.logisticsInfo[]` items in the <a href="https://developers.vtex.com/vtex-rest-api/reference/orders#getorder" target="_blank">Get Order</a> endpoint response.

The `deliverySlaInMinutes` value is the conversion of `shippingEstimate` into minutes. If the unit is `m` (minutes), the value will be the same. If the unit is `h` (hours), the value is multiplied by 60, and if the unit is `d` (calendar days) or `bd` (working days), the value is multiplied by 1440. For example, three calendar days or `3d` is represented as `4320`. The `deliverySlaInMinutes` field is used in each item of the `minicart` in the request body of the <a href="https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow#sendantifraudpreanalysisdata" target="_blank">Send Antifraud Pre-Analysis Data</a> and <a href="https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow#sendantifrauddata" target="_blank">Send Antifraud Data</a> endpoints.

>ℹ️ Although the time conversion in calendar days (`d`) and working days (`bd`) to minutes is the same in the `deliverySlaInMinutes` field, the delivery date may be different depending on the calendar (when there are weekends and holidays within the delivery window).
