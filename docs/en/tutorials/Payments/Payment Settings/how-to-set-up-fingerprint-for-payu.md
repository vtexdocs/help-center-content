---
title: 'How to set up FingerPrint for PayU'
id: 4Gim58iszSuoqW2884gsu8
status: PUBLISHED
createdAt: 2017-07-19T14:43:16.588Z
updatedAt: 2021-12-09T19:52:40.752Z
publishedAt: 2021-12-09T19:52:40.752Z
firstPublishedAt: 2017-07-19T15:04:05.008Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-set-up-fingerprint-for-payu
locale: en
legacySlug: how-to-set-up-fingerprint-for-payu
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ is an identifier that acts in payment processing to improve fraud risk analysis. 

By collecting non-sensitive data, Device Fingerprint identifies and analyzes the security level of the device used to perform a given transaction. It also analyzes transactions previously performed with that device.

<div class="alert alert-info">
Each store must have only one Device Fingerprint registered. Check if you have already registered the Device Fingerprint in another connector, before proceeding with the steps below.
</div>

This article will explain how to associate the Device Fingerprint feature with the PayU affiliation.

<div class="alert alert-info">The settings documented in this article take place in an environment that is external to VTEX, therefore they may be outdated.</div>

1. Login on http://www.google.com/tagmanager/ for the stored to be set up;
2. Enter the tags section to set up the device session id;
3. Crete an “HTML Personalized” product with the following image:![payU 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-set-up-fingerprint-for-payu_1.png)
4. In the HTML field of the setup, find the HTML code that calls the code to send information to PayU:

```
<script src="/arquivos/md5.js"></script>

<script>
       function getCookie(cname) {
       var name = cname + "=";
       var ca = document.cookie.split(';');
       for(var i=0; i<ca.length; i++) {
               var c = ca[i].trim();
               if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
       }
       return "";
   }
   function microtime(get_as_float) {
       var now = new Date().getTime() / 1000;
       var s = parseInt(now, 10);

       return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
   }

   vtexjs.checkout.getOrderForm().done(function(orderForm){ // hala el valor de userProfileId
       var uid = getCookie('VtexIdclientAutCookie') + orderForm.userProfileId;
       var deviceSessionId = CryptoJS.MD5(uid+microtime());
       console.log("dsid: "+deviceSessionId);

       window.vtex.deviceFingerprint = deviceSessionId;

       console.log("fingerprint: "+window.vtex.deviceFingerprint);

       document.getElementById('gtm').innerHTML = '<p style="background:url(https://maf.pagosonline.net/ws/fp?id='+deviceSessionId+'80200)"></p>'+'<img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-set-up-fingerprint-for-payu_11.png">';
       document.getElementById('maf').innerHTML = '<object type="application/x-shockwave-flash" data="https://maf.pagosonline.net/ws/fp/fp.swf?id='+deviceSessionId+'80200" width="1" height="1" id="thm_fp"><param name="movie" value="https://maf.pagosonline.net/ws/fp/fp.swf?id='+deviceSessionId+'80200" /></object>';

       var pol_script = document.createElement('script');
       pol_script.type = 'text/javascript';
       pol_script.src = 'https://maf.pagosonline.net/ws/fp/check.js?id='+deviceSessionId+'80200';
       document.getElementById("gtm").appendChild(pol_script);
   }); // JavaScript Document
</script>

<div id="gtm"></div>
<div id="maf"></div>
```

![payU 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-set-up-fingerprint-for-payu_2.png)

It is then necessary to continue on to advanced set up in accordance with the following image:![payU 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-set-up-fingerprint-for-payu_3.png)

To set up the event, follow these steps:

1. Click on the tab More:![payU 4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-set-up-fingerprint-for-payu_4.png)
2. Create a personalized event:![payU 5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-set-up-fingerprint-for-payu_5.png)
3. Fill it in as follows:![payU 6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-set-up-fingerprint-for-payu_6.png)
4. We save the event and subsequently save the tag (tag):![payU 7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-set-up-fingerprint-for-payu_7.png)
5. Once the tag has been saved, it is necessary to publish it:![payU 8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-set-up-fingerprint-for-payu_8.png)

Once the tag has been set up, it is necessary to save the JS captured from the code. This is saved in the VTEX file manager. To do this, follow these steps:

- Accessing the VTEX panel in the CMS menu >> Layout >> File Manager >> .js File Management >> Add.

![cms js](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-set-up-fingerprint-for-payu_9.png)

__Attachment__: [md5.js](https://assets.contentful.com/alneenqid6w5/5PeWM49nPykYYeWI4cOCy4/60c61b5bcf0b4ce92f211f944ab261ad/md5.js)

### Validation

To validate it, it is necessary to enter the store and to complete the purchase process. When we arrive at the payment method, we validate the JS execution:

1. Right click on the purchase button 
2. Select Inspect Element
3. Search for the word MAF

If the result is found, it means that the setup is correct and that Fingerprint is working properly. For example:
![payU 9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/how-to-set-up-fingerprint-for-payu_10.png)
