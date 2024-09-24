---
title: 'Setting up the device fingerprint for Braspag'
id: frequentlyAskedQuestions_488
status: PUBLISHED
createdAt: 2019-01-24T20:45:54.261Z
updatedAt: 2021-12-09T19:50:42.084Z
publishedAt: 2021-12-09T19:50:42.084Z
firstPublishedAt: 2019-01-24T22:04:58.918Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-set-up-the-device-fingerprint-for-braspag
locale: en
legacySlug: how-to-set-up-the-device-fingerprint-for-braspagcybersource
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ is an identifier that acts in payment processing to improve fraud risk analysis. 

By collecting non-sensitive data, Device Fingerprint identifies and analyzes the security level of the device used to perform a given transaction. It also analyzes transactions previously performed with that device.

>ℹ️ Each store must have only one Device Fingerprint registered. Check if you have already registered the Device Fingerprint in another connector, before proceeding with the steps below.

This article will explain how to associate the Device Fingerprint feature with the Braspag affiliation.

>ℹ️ The settings documented in this article take place in an environment that is external to VTEX, therefore they may be outdated.

To enter the device fingerprint scripts required by Braspag/CyberSource, you will need to use Google Tag Manager. To do so, go to [http://www.google.com/tagmanager](http://www.google.com/tagmanager/) and access your account.

## Creation of variables (macros) and driver

- Create a variable named `trasactionPaymentId`, ype **Variável da camada de dados**, by reading the detalayer `transactionPayment.id` variable.[]![](//images.contentful.com/alneenqid6w5/2iGloCXR32IMAyWAKe8qWy/cf1108ad17e944adc63f189e67cfa93d/gtm-cybersource-variavel1-1.png)
- Create a variable named `cs_sessionId`, of type **JavaScript personalizado** and the following code:

```
function() {  
  var transactionPaymentId = {{transactionPaymentId}}  
  return transactionPaymentId.toLowerCase();
  }
```

- Create the variables `cs_orgId` and `cs_merchantId` of type **Permanente.** The values of these two variables should be filled out with the contents informed by Braspag.

![gtm-cybersource-variavel3-permanente](//images.contentful.com/alneenqid6w5/5EFSTIM6TCKUE4GEOA66kc/8c2f37cdd8cc94571f6f2ac72ec1d35b/gtm-cybersource-variavel3-permanente.png)

- Create or edit a driver for the orderPlaced screen (screen that shows purchases successfully closed) for it to be compatible with the **Evento personalizado** type and the **orderPlaced** value.

![gtm-cybersource-acionador-orderplaced](//images.contentful.com/alneenqid6w5/51IPOyaAjmowkEQ24sYyw4/7b11cddfb71c200dd1cd2c85149c7726/gtm-cybersource-acionador-orderplaced.png)

## Creation of a Braspag tag

- Create a new tag of type **HTML personalizado**;
- Name it according to your preference.

Fill it out with the HTML below:

```
<p style="background:url(https://h.online-metrix.net/fp/clear.png?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}&amp;m=1)"></p>
<img src="https://h.online-metrix.net/fp/clear.png?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}&amp;m=2" alt="">

<object type="application/x-shockwave-flash" data="https://h.online-metrix.net/fp/fp.swf?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}" width="1" height="1"id="thm_fp">
<param name="movie" value="https://h.online-metrix.net/fp/fp.swf?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}" /><div></div></object>

<script src="https://h.online-metrix.net/fp/check.js?org_id={{cs_orgId}}&amp;session_id={{cs_merchantId}}{{cs_sessionId}}" type="text/javascript"></script>
```

![braspag fingerprint](//images.ctfassets.net/alneenqid6w5/JTnL01Ko0DMc7Pu8Bp1CQ/84f93e14dac3c4471bb1d30b09fbf62e/image.png_h_250)

At last, post the changes.
