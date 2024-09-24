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

>ℹ️ Each store must have only one Device Fingerprint registered. Check if you have already registered the Device Fingerprint in another connector, before proceeding with the steps below.

This article will explain how to associate the Device Fingerprint feature with the PayU affiliation.

>ℹ️ The settings documented in this article take place in an environment that is external to VTEX, therefore they may be outdated.

1. Login on http://www.google.com/tagmanager/ for the stored to be set up;
2. Enter the tags section to set up the device session id;
3. Crete an “HTML Personalized” product with the following image:![payU 1](//images.contentful.com/alneenqid6w5/8Kc8zBKQFOmwK6G8ekgMa/2a26fa73a709b116cfdf899d4aee7a23/payU_1.png)
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

       document.getElementById('gtm').innerHTML = '<p style="background:url(https://maf.pagosonline.net/ws/fp?id='+deviceSessionId+'80200)"></p>'+'<img src="https://maf.pagosonline.net/ws/fp/clear.png?id='+deviceSessionId+'80200">';
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

![payU 2](//images.contentful.com/alneenqid6w5/4Y60ayHwaQa8ykaUQUmqgq/4a8ad711a25542b1513a75e94725c464/payU_2.png)

It is then necessary to continue on to advanced set up in accordance with the following image:![payU 3](//images.contentful.com/alneenqid6w5/2tZRZWcwFWgq6IueAKWQ4o/c64a7a0f2b6dbaad9405e3e55408fb8c/payU_3.png)

To set up the event, follow these steps:

1. Click on the tab More:![payU 4](//images.contentful.com/alneenqid6w5/1NyDU3X1EseWcCisO04okg/66d6593915e933c22768633a76b4bf92/payU_4.png)
2. Create a personalized event:![payU 5](//images.contentful.com/alneenqid6w5/Xip98CFhokwoCs22GsUyK/a1c70a419c84d2f4fa2bb0908e0336cd/payU_5.png)
3. Fill it in as follows:![payU 6](//images.contentful.com/alneenqid6w5/6Rdhtn8quA2IaqKSKeGa0u/0f7a6ed573a438475c477b5c09c331ad/payU_6.png)
4. We save the event and subsequently save the tag (tag):![payU 7](//images.contentful.com/alneenqid6w5/2AcLzAcwgMs2SwgkEqEmo2/941c852d50622d570e8fab6534780e33/payU_7.png)
5. Once the tag has been saved, it is necessary to publish it:![payU 8](//images.contentful.com/alneenqid6w5/6mpOQSBwzYq844A8uCuWck/125894734e6996cc1521b46c3562a8a7/payU_8.png)

Once the tag has been set up, it is necessary to save the JS captured from the code. This is saved in the VTEX file manager. To do this, follow these steps:

- Accessing the VTEX panel in the CMS menu >> Layout >> File Manager >> .js File Management >> Add.

![cms js](//images.ctfassets.net/alneenqid6w5/175WhPco7ew6OSEUsIG4MU/68772fc79d642781908d19163d787141/cms_js.png)

__Attachment__: [md5.js](//assets.contentful.com/alneenqid6w5/5PeWM49nPykYYeWI4cOCy4/60c61b5bcf0b4ce92f211f944ab261ad/md5.js)

### Validation

To validate it, it is necessary to enter the store and to complete the purchase process. When we arrive at the payment method, we validate the JS execution:

1. Right click on the purchase button 
2. Select Inspect Element
3. Search for the word MAF

If the result is found, it means that the setup is correct and that Fingerprint is working properly. For example:
![payU 9](//images.contentful.com/alneenqid6w5/66H4gkLslyuk0sgOgm8IWC/3d04eca1fdb8ed6a7b4cbf7065a73ec3/payU_9.png)
