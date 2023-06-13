---
title: Configuring Mercado Pago's Device Fingerprint
id: m2knP9z69HGHHBIiFq0Ga
status: PUBLISHED
createdAt: 2021-07-05T13:25:37.711Z
updatedAt: 2021-12-09T19:38:43.090Z
publishedAt: 2021-12-09T19:38:43.090Z
firstPublishedAt: 2021-07-05T13:34:09.043Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configuring-mercado-pagos-device-fingerprint
legacySlug: configuring-mercado-pagos-device-fingerprint
subcategory: 
---

__Device Fingerprint__ is an identifier that acts in payment processing to improve fraud risk analysis. 

By collecting non-sensitive data, Device Fingerprint identifies and analyzes the security level of the device used to perform a given transaction. It also analyzes transactions previously performed with that device.

<div class="alert alert-info">
Each store must have only one Device Fingerprint registered. Check if you have already registered the Device Fingerprint in another connector, before proceeding with the steps below.
</div>

This article will explain how to associate the Device Fingerprint feature with the Mercado Pago affiliation.

1. Access the VTEX __Admin__.
2. In the __Store Setup__ section, click on __Checkout__.
3. In __Default__, click on the blue gear icon.
4. Go to the __Code__ tab.
5. In the right side of the page, under __Files__, select one of the following options:

- If you use checkout V5, select __checkout5-custom.js__.
- If you use checkout V6, select __checkout6-custom.js__.

<ui>
6. In the field that will appear, delete the warning message and enter the following code:
  </ui>

```
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
console.log("MP-deviceId 2020 " + script.getAttribute("output").value );
```

<ui>
  Click on <b>Save</b> to apply the code to checkout.  
  </ui>

Once you have completed the steps above, you will have Device Fingerprint installed in your store.

## Checking Device Fingerprint operation

To ensure the Device Fingerprint feature is operating properly, you must analyze the details of an order placed using Mercado Pago as a payment method. Follow the steps below:

1. Go to the VTEX __Admin__.
2. In the __Payments__ module, click on __Transactions__.
3. Select the most recent transaction paid via Mercado Pago. 
4. Click on __+ Information__.
5. Search for the __deviceFingerprint__ field and check if the code starts with the word armor, as illustrated below.

![Device Fingerprint Armor](//images.ctfassets.net/alneenqid6w5/2py5aLnSL2AZD9U29Bj9Nw/e4183659ac15c29fec5611d96b0b1b52/DEVICEFINGERPRINTARMOR.png)

<ui>
6. Then, send the transaction ID to the Mercado Pago support team. You can find this ID in the <b>authorizationConnectorResponse</b> field.
  </ui>

![Authorization](//images.ctfassets.net/alneenqid6w5/5FTRfpgGc7HJZUNaZicEb4/1d84e9df5bb987aa4b3acf9a0f1904e1/AUTHORIZATION.png)

<ui>
7. Copy the ID and <a href=https://www.mercadopago.com.br/developers/en/support>send an email</a> with this information to Mercado Pago requesting them to validate the transaction. 
  </ui>

Once you have received Mercado Pago’s confirmation, Device Fingerprint will be ready to be used in your store.
