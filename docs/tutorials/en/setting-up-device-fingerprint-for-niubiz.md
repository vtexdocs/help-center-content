---
title: 'Setting up Device Fingerprint for Niubiz'
id: opa2M7CHVjCzlEY95nexP
status: PUBLISHED
createdAt: 2021-01-07T14:05:56.827Z
updatedAt: 2023-03-23T15:32:49.504Z
publishedAt: 2023-03-23T15:32:49.504Z
firstPublishedAt: 2021-01-07T15:34:38.735Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: setting-up-device-fingerprint-for-niubiz
locale: en
legacySlug: setting-up-device-fingerprint-for-niubz
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ is an identifier that acts in payment processing to improve fraud risk analysis. 

By collecting non-sensitive data, Device Fingerprint identifies and analyzes the security level of the device used to perform a given transaction. It also analyzes transactions previously performed with that device.

<div class="alert alert-info">
Each store must have only one Device Fingerprint registered. Check if you have already registered the Device Fingerprint in another connector, before proceeding with the steps below.
</div>

This article will explain how to associate the Device Fingerprint feature with the Niubiz affiliation.  

This requires generating an identifier using [Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/ "Google Tag Manager") and then associating it to the affiliation via the Admin.   

## Creating the identifier

<div class="alert alert-info">
This step may be outdated as it is performed in an external environment.
</div>          

First, you need to create the identifier.

Follow these instructions:

1. Log in to your __Google Tag Manager__ account.
2. From the left-nav menu, select the__ Tags tab and click on new__. 
3. Then click on __Tag configuration__. 
4. From the right-nav tag type menu, select the __"Custom HTML" option__. 
5. Fill in the HTML field with the following __javascript code__.
    ```    
    <script>
    window.vtex.deviceFingerprint = getuuid() ;
    console.log('fingerprint: '+window.vtex.deviceFingerprint);
    initDFP(window.vtex.deviceFingerprint);
    var localSessionId = null;
    function doProfile(orgId, sessionId, hostname){
    console.log('Starting profile using ' + hostname + ' for orgId ' + orgId + ' with sessionId ' + sessionId + ' on ' + Math.floor(Date.now() / 1000));
    var head = document.getElementsByTagName("head").item(0);
    var url = "https://" + hostname + "/tags.js?org_id=" + orgId + "&session_id=" + sessionId + "&page_id=1&allow_reprofile=1";
    console.log(url);
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", url);
    head.appendChild(script); console.log('Profile should have started...');
    body = document.getElementsByTagName("body").item(0);
    noscript = document.createElement("noscript");
    iframe = document.createElement("iframe");
    iframe.setAttribute("style", "width: 100px; height: 100px; border: 0; position:absolute; top: -5000px;");
    iframe.setAttribute("src", url);
    noscript.appendChild(iframe);
    body.insertBefore(noscript, body.childNodes[0]);
    }
    function initDFP(sessionId) {
    localSessionId = sessionId;
    console.log('Init profiling ', Math.floor(Date.now() / 1000))
    var timeout = 3000;
    var sasOrgId = "507f9ifk";
    var csOrgId = "1snn5n9w";
    var merchantId = "vndp";
    var hostname = "h.online-metrix.net/fp"; 
    doProfile(sasOrgId, sessionId, "m.vnforapps.com");
    setTimeout(startOnTimer(sessionId) , timeout); }
    function startOnTimer(sessionId) {
    var csOrgId = "1snn5n9w";
    var merchantId = "vndp";
    var hostname = "h.online-metrix.net/fp";
    doProfile(csOrgId, merchantId + sessionId, hostname); }
    function getuuid() {
    var dt=new Date().getTime();
    var uuid='xxxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g,function(c){
          var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      });
    return uuid;
    }
    function tmx_profiling_complete(sessionId) {
      console.log('Finished ', sessionId, '-', Math.floor(Date.now() / 1000));
    }
    </script>
    ```
6. In the __"Advanced settings" section__, leave the __values empty__. 
7. Click on __Triggers__.
8. Choose the __"Custom event" option__.
9. Fill in the __"Event name" field with the value ".*"__
10. Check the __"Use regex matching" box__.
11. Under "This trigger fires on", click on the __"Some custom events" option__.
12. __Save__ and publish the settings.

Google Tag Manager will then create the identifier. 

<div class="alert alert-warning">
Please write down the ID in a place you can easily find it.
</div>

##  Configuration in the VTEX Admin

With the ID in hand, you must link it with the Niubiz affiliation in the Admin.

Follow the step by step instructions below:

1. In the VTEX Admin, go to **Store Settings > Storefront > Checkout**, or type **Checkout** in the search bar at the top of the page.
3. In the "Default" configuration box, click on __the blue gear button__.
4. On top of the page, select the __"Checkout" tab__.
5. Fill in the "Google Tag Manager" field with the __newly generated ID__.
6. __Save__ your changes. 
