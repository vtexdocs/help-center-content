---
title: 'Configuring ClearSale Global anti-fraud solution'
id: 2vJNhRDEKf1w79m2MYfEWw
status: PUBLISHED
createdAt: 2021-07-06T18:05:33.325Z
updatedAt: 2021-10-04T11:49:49.414Z
publishedAt: 2021-10-04T11:49:49.414Z
firstPublishedAt: 2021-07-06T18:27:48.978Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: configuring-clearsale-global-anti-fraud-solution
locale: en
legacySlug: configuring-clearsale-global-anti-fraud-solution
subcategoryId: unknown-subcategory
---

ClearSale Global is an anti-fraud solution, available __exclusively for the international market__. Through customer behavior analysis, the solution identifies vulnerabilities and prevents possible fraud in the transactions of your store.

>ℹ️ If you are in Brazil and would like to use ClearSale, VTEX offers integration with ClearSale V3, exclusive for Brazilian customers. Please refer to the tutorial [Configuring ClearSale V3 anti-fraud solution](https://help.vtex.com/en/tutorial/configurar-antifraude-clearsale-v3--2pPORygesIqQOa6cIG6agg?&utm_source=autocomplete) to configure it.

To configure ClearSale Global, you will need to:

1. [Configure ClearSale Global anti-fraud solution](#configuring-clearsale-global-anti-fraud-solution)
2. [Configure Google Tag Manager](#configuring-google-tag-manager)
3. [Associate ClearSale Global with a payment condition](#associating-clearsales-global-solution-with-a-payment-condition)

## Configuring ClearSale Global anti-fraud solution

1. Access the VTEX __Admin__.
2. Click on __Payments > Settings__.
3. In __Gateway Affiliations__, click on the green “__+__” button.
4. In the __Anti-fraud__ section, select __ClearSaleGlobal__.
5. Complete the fields below with the information sent by ClearSale via email.
<br><br>
<ul>
  <li><b>Application key and Application token.</li></b>
  <li><b>Enable Risk Pre-Analysis.</b> (currently only available for Mexico).</li>
<li><b>API Key.</li></b>
<li><b>AnalysisLocation.</li></b>
 </ul>
  </li>
</ul>
6. Once you finish completing the fields, click on __Save.__

## Configuring Google Tag Manager

1. [Click here](http://tagmanager.google.com) and log into Google Tag Manager.
2. In the home dashboard, click on __Tag__, and then click on __New__.
3. Choose the product __Personalized HTML Tag__.
4. In the __HTML__ field, paste the code below, replacing `your_clientid` with your identifier sent to you by ClearSale (between single quotes).  
```
<script>
    var deviceFingerprintIdCSV4 = 10000000 + Math.floor(Math.random() * 99999999);
    (function (a, b, c, d, e, f, g) {
    a['CsdpObject'] = e; a[e] = a[e] || function () {
    (a[e].q = a[e].q || []).push(arguments)
    }, a[e].l = 1 * new Date(); f = b.createElement(c),
    g = b.getElementsByTagName(c)[0]; f.async = 1; f.src = d; g.parentNode.insertBefore(f, g)
    })(window, document, 'script', '//device.clearsale.com.br/p/fp.js', 'csdp');
    csdp('app', 'your_clientid');
    csdp('sessionid', deviceFingerprintIdCSV4);
    window.vtex.deviceFingerprint = deviceFingerprintIdCSV4;
</script>
```
  <ui>5. After entering the code, check the option <b>Support for document.write</b>.</ui>
<br>  
  <ui>6. In <b>Trigger In</b>, select the option <b>More</b> AND click on <b>New</b>.</ui>
<br>  
  <ui>7. Allocate a name to this trigger and choose the event type <b>Personalized Event</b>.</ui>
<br>  
  <ui>8. In <b>Trigger In</b>, define the name of the event as <b>payment</b>.</ui>
<br>  
  <ui>9. Save the trigger.</ui>
<br>  
  <ui>10. Click on the <b>Create Tag</b> button, enter a name for this tag and save.</ui>
<br>  
  <ui>11. In the top right corner, click on <b>Publish</b>.</ui>

![Fingerprint ClearSalve_Screen](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled%20category/Untitled%20subcategory/configuring-clearsale-global-anti-fraud-solution_1.png)

For more details about the code entered in Google Tag Manager, we recommend reading [this documentation](https://api.clearsale.com.br/docs/behavior-analytics) from ClearSale.

## Associating ClearSale’s Global solution with a payment condition

ClearSale Global will perform anti-fraud analysis of transactions if it is associated with the payment conditions in your store. To do this, please follow the instructions below:

1. Access the VTEX __Admin__.
2. Access the __Payments__ module.
3. Click on __Settings__.
4. In the __Payment conditions__ tab, select an existing condition, or check out the tutorial [Configuring a payment condition](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3?&utm_source=autocomplete) to create a new one.
5. Make sure the payment condition is __Active__.
6. After selecting or creating a new condition, enable the option __Use anti-fraud solution__.
7. Select the option __ClearSale Global__.
8. Click on __Save__.

After these configurations, ClearSale will be ready to be used in your store.

