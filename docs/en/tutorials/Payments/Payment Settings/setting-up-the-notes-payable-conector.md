---
title: 'Setting up the Notes Payable conector'
id: 7Gy0SJRVS0Qi2CuWMAqQc0
status: CHANGED
createdAt: 2018-06-22T15:15:02.946Z
updatedAt: 2024-01-19T19:28:16.938Z
publishedAt: 2023-10-18T17:29:11.714Z
firstPublishedAt: 2018-06-22T19:10:55.195Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-the-notes-payable-conector
locale: en
legacySlug: setting-up-the-notes-payable-conector
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

The __Notes Payable__ connector, as its name suggests, allows your store to accept notes payable as a payment method.

To set it up, follow the steps below:

## Setting up the Notes payable gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the `+` button.
3. Click the __Notes Payable__ Connector.
4. In __Note payable expiration date in days (maximum is 180)__ , set how many days your customer will have to pay the note before it loses its validity.
5. Under __Automatically authorize__, inform if you want to approve the payment immediately. We only recommend choosing this option in cases where payment is made on delivery or withdrawal in the store. By choosing _Yes_, the order automatically changes to the status _Preparing Delivery_ without going through any payment checks.
6. Click `Save`.

## Setting up the payment condition
After following the steps indicated above, the Notes Payable connector will be configured in your store. Thus, when registering a note payable (on Payments'  __Custom Payments__ tab), it will be available in the __Process with affiliation__ field. To learn how to register custom payments, access [How to configure a custom payment](https://help.vtex.com/en/tutorial/how-to-configure-a-custom-payment).
