---
title: 'How to configure Konduto'
id: tutorials_3125
status: PUBLISHED
createdAt: 2017-04-27T21:52:18.180Z
updatedAt: 2023-03-30T16:09:33.630Z
publishedAt: 2023-03-30T16:09:33.630Z
firstPublishedAt: 2017-04-27T23:03:55.168Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: how-to-configure-konduto
legacySlug: how-to-configure-konduto
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Konduto is an anti-fraud, external system that analyzes the purchases performed, in order to prevent frauds.

This anti-fraud depends on different configurations of the [other anti-frauds that can be configured on your platform](/en/tutorial/how-to-configure-the-anti-fraud/). Therefore, this article aims to document the Konduto configuration.

## Configure your GTM

GTM is the Google Tag Manager, a Google tool that makes tags management on the site. This GTM is then associated to your account, and enters all tags configured on it to your website. [See more details on how to configure the GTM in your store.](/en/faq/integration-with-google-tag-manager/)

### Create the variable

The first step is the variable configuration. The variable name must be `kondutoId`, since it is the value indicated in the script below. The variable must be of **permanent** type. On the value of the variable, enter the _public_key_ informed by Konduto &#8211; each store has a unique id.

### Configure the tag

On your GTM account, create a tag (customized html type) with the script below.

```
<script>var __kdt = __kdt || [];__kdt.push({"public_key":"kondutoId"});__kdt.push({"post_on_load": false});(function() { var kdt = document.createElement('script');kdt.id = 'kdtjs';kdt.type = 'text/javascript';kdt.async = true;kdt.src = 'https://i.k-analytix.com/k.js';var s = document.getElementsByTagName('body')[0]; s.parentNode.insertBefore(kdt, s); })();$(function() {var period = 300;var limit = 20 * 1e3;var nTry = 0;var intervalID = setInterval(function() {var clear = limit/period <= ++nTry;if (typeof(Konduto.sendEvent) !== "undefined") {setKondutoFingerPrint();clear = true;}if (clear) { clearInterval(intervalID); }}, period);}); var setKondutoFingerPrint = function(){ var kdtFP = Konduto.getVisitorID(); window.vtex.deviceFingerprint = kdtFP; Konduto.sendEvent('page','checkout'); }</script>
```

## Configure the Gateway Affiliation

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Access **Gateways Affiliations** and click **+**.
3. Search for Anti-Fraud **Konduto.**
4. Complete the form with the data indicated by the anti-fraud.
5. 
## Configure the payment mehods

To link the **Konduto** to a form of payment:

1. Access the tab **Payment terms**.
2. Click on the desired condition or [Configuring payment conditions](/en/tutorial/how-to-configure-payment-conditions) 
3. Select the option **Use anti-fraud**.
4. Select the **Konduto**.
