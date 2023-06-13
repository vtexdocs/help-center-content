---
title: Configuring ClearSale v3 antifraud
id: 2pPORygesIqQOa6cIG6agg
status: PUBLISHED
createdAt: 2017-10-30T14:10:20.822Z
updatedAt: 2021-12-15T21:23:21.984Z
publishedAt: 2021-12-15T21:23:21.984Z
firstPublishedAt: 2017-10-30T14:26:53.089Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: configuring-clearsale-v3-antifraud
legacySlug: configuring-clearsale-v3-antifraud
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

To enable ClearSale v3 anti-fraud solution, you must [add the gateway affiliation](https://help.vtex.com/en/tutorial/registering-gateway-affiliations--tutorials_444) in the Payments section by choosing the **ClearSaleV3** option. The ClearSale v3 affiliation configuration contains the following fields:

- **Login**: Login.
- **Password**: Password.
- **Custom SLA in minutes (optional):** The time ClearSale will have to process the fraud analysis.
- **Product (optional):** Numeric value corresponding to the ID of the product purchased from ClearSale.
- **Transaction currency:** The currency used in the transaction.
- **Observation (optional):** Text that will be sent to ClearSale as a remark.
- **Send authenticated transactions?** Has the options **Yes** and **No**. Authenticated transactions are those where all payments have been password authenticated in the 3DSecure program.

<div class = "alert alert-info">
The ClearSale documentation on <a href="https://api.clearsale.com.br/docs/finger-print" target="_blank">FingerPrint</a> explains the script below in greater detail.
</div>

<div class="alert alert-warning">
If you want to set up the <strong>ClearSale T</strong> anti-fraud, just follow <a href="http://help.vtex.com/en/tutorial/how-to-configure-the-anti-fraud">these instructions</a>.
</div>

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

![Pasted image at 2017 10 20 01 11 PM](//images.contentful.com/alneenqid6w5/2kdI4xh9IYwKI2mSiU20yW/b850c070cc8de2ec09e690ffe6cc9c15/Pasted_image_at_2017_10_20_01_11_PM.png)

<div class="alert alert-info"> See the <a href="https://api.clearsale.com.br/docs/finger-print" target="_blank"> FingerPrint documentation</a> on ClearSale for more information on the above script. </div>

## CustomSLA field details

The value entered in the **Custom SLA in minutes** field when configuring the anti-fraud solution is one of the three possible values for the `customSLA` field. If the cart is empty, the `customSLA` value will be the value of the `shippingEstimate` field for the transaction cart. If the cart has at least one item, the `customSLA` value will be the lowest value between the `deliverySlaInMinutes` value of the first item in the cart and the **Custom SLA in minutes** value used when configuring the anti-fraud solution.

The `shippingEstimate` and `deliverySlaInMinutes` values correspond to the delivery time and are generated at checkout from information in the Logistics module. The calculation of the delivery time is explained in the article [How is the delivery time is calculated?](https://help.vtex.com/en/tutorial/how-is-the-order-delivery-deadline-calculated--1TOuKCIjGQmqOqQkEqCg82).

The `shippingEstimate` value is obtained from a calculation made by the Logistics module. The value is followed by a letter, which represents the time unit used. The letters are:

- `d` for calendar days or `bd` for working days if the time is zero or at least 24 hours.
- `h` for hours if the time is less than 24 hours and at least 2 hours.
- `m` for minutes if time is less than 2 hours.

The `shippingEstimate` field can be obtained from the `shippingData.logisticsInfo[]` items in the <a href="https://developers.vtex.com/vtex-rest-api/reference/orders#getorder" target="_blank">Get Order</a> endpoint response.

The `deliverySlaInMinutes` value is the conversion of `shippingEstimate` into minutes. If the unit is `m` (minutes), the value will be the same. If the unit is `h` (hours), the value is multiplied by 60, and if the unit is `d` (calendar days) or `bd` (working days), the value is multiplied by 1440. For example, three calendar days or `3d` is represented as `4320`. The `deliverySlaInMinutes` field is used in each item of the `minicart` in the request body of the <a href="https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow#sendantifraudpreanalysisdata" target="_blank">Send Antifraud Pre-Analysis Data</a> and <a href="https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow#sendantifrauddata" target="_blank">Send Antifraud Data</a> endpoints.

<div class="alert alert-info">
Although the time conversion in calendar days (<code>d</code>) and working days (<code>bd</code>) to minutes is the same in the <code>deliverySlaInMinutes</code> field, the delivery date may be different depending on the calendar (when there are weekends and holidays within the delivery window).
</div>
