---
title: 'Installation and setup'
id: 3lxT3FsW1zZIewGSEiqA7s
status: CHANGED
createdAt: 2020-06-30T00:28:02.789Z
updatedAt: 2020-11-27T19:37:01.204Z
publishedAt: 2020-08-17T22:19:28.791Z
firstPublishedAt: 2020-06-30T01:07:27.553Z
contentType: trackArticle
productTeam: Apps
slug: installation-and-setup
locale: en
trackId: 2KDrouPiE4HDKUFFSG3KdN
trackSlugEN: lengow-integration
---

The [Lengow app](https://apps.vtex.com/vtex-lengow/p) is a connector that allows your VTEX store to use their e-commerce feed management solution to increase the visibility and profitability of your products on Amazon, Google Shopping, Facebook, eBay, Criteo and others.

This step explains how to install the app and fill out the basic settings for the app. After completing this, you will be ready to create your product feed.

## Installation

To install the app in your store, follow the steps below:

1. Access the [app page](https://apps.vtex.com/vtex-lengow/p) on VTEX App Store
2. Click on the **Get** button
3. Enter your account name in the **Account Info** field
4. Click on the **Confirm order and begin installation** button
5. Click on the **Install** button

After you complete these steps, the app will be installed on the account you entered. The next step is to fill out the basic settings that allow VTEX and Lengow to connect to each other.

<div class="alert alert-warning" role="alert">Your <code class="c-link">{accountName}</code> is the identifier used to access your Admin, as seen in the URL <code>https://<span class="c-link">{accountName}</span>.myvtex.com/admin</code></div>

## Connector setup

Once the Lengow app is installed in your store, a new menu option will be available under *Marketplace > Lengow Integration*. Here you will find app settings, statistics and logs. 

To get started, we will fill out basic settings that allow VTEX and Lengow to connect to each other. Each field must be filled out with information gathered either from Lengow or from different sections of the Admin. 

Once this is done, as seen in the image below, press **Save** to store the settings and move on to the next step.

![Lengow Basic Setup](//images.ctfassets.net/alneenqid6w5/47hHUySqAFsoAXKSX0ec8N/9be820ddefcc9e6893c634d7fe627b16/Screen_Shot_2020-07-01_at_22.44.34.png)

### Configure VTEX affiliate for Lengow

To fill out the **Prefix to imported orders - Affilitiate ID** field you should configure an [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) for the Lengow connector in *Orders > Orders Management > Settings*. We recommend using the settings below, with LNG as the affiliate ID and your own e-mail address for notifications.

![Lengow affiliate](//images.ctfassets.net/alneenqid6w5/7384AJaO2ZFcECDGFqWHPT/78a10bd0370a43cdd65116f067fc814c/image9.png)

### Get Lengow authentication credentials

You can find the information needed to fill out the **Lengow Account**, **Lengow API KEY** and **Lengow API Secret** fields in the [A.P.I settings](https://my.lengow.io/company/api) for your Lengow account.

<table width="100%">
  <tr>
   <td>
    <img src="https://images.ctfassets.net/alneenqid6w5/5RhkmJ5MSU7IAqKeaeIHOt/1a047d143644b5ede26e54ff0248d609/image10.png" style="display: block; margin-left: auto; margin-right: auto;" alt="Lengow Account ID" title="Lengow Account ID">
   </td>
  </tr>
  <tr>
   <td style="text-align: center;">
     <em>
       Lengow Account ID = Account ID
     </em>
   </td>
  </tr>
</table>

<table width="100%">
  <tr>
   <td>
    <img src="https://images.ctfassets.net/alneenqid6w5/4VSUTXCPjvJrDztQPuTHa7/114b813e20818cd9058ea47295f74f0c/image13.png" style="display: block; margin-left: auto; margin-right: auto;" alt="Lengow API KEY / Secret" title="Lengow API KEY / Secret">
   </td>
  </tr>
  <tr>
   <td style="text-align: center;">
     <em>
       Lengow Access Token = Access Token<br/>
       Lengow Secret = Secret
     </em>
   </td>
  </tr>
</table>

### Additional settings

- **Shop domain** should be selected as your `myvtex.com` domain
- **Lengow sandbox enabled** should be kept disabled
- **Number of Days to recover orders from today (max 30)** should be set to 1
- **Feed Format** should be set to xml
- **Exclude Out of Stock SKU** should be kept disabled
- **CheckValidGTIN** should be kept disabled
