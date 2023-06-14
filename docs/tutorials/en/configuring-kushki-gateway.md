---
title: 'Configuring Kushki gateway'
id: 69VC8nQMkEE0yu8oIyG2wG
status: PUBLISHED
createdAt: 2018-04-24T15:50:00.468Z
updatedAt: 2023-03-29T00:41:16.269Z
publishedAt: 2023-03-29T00:41:16.269Z
firstPublishedAt: 2018-04-24T19:47:19.057Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configuring-kushki-gateway
legacySlug: setting-up-kushki-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Kushki is a [gateway](/en/tutorial/what-is-a-payment-gateway) with [PCI certification](/en/faq/what-is-the-pci-ssc) focused on Latin America.

To set up Kushki, follow the steps below:

## Configuring Kushki gateway affiliation
1.	In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2.	In the __Gateway Affiliations__ tab, click on the __"+"__ button.
3.	Click on the __Kushkiv2__ connector.
4.	Fill in the fields with the __data__ provided by Kushki. 
5.	The __Application Key__ field must be filled with Kushki’s Private Key. 
6.	The __Application Token__ field must be filled with Kushki’s Public Key. 
7.	Click on __Save__.

After completing these steps, you must generate VTEX's Credentials to configure the Kushki affiliation in your store. Follow the instructions provided in the [Authentication section](https://developers.vtex.com/docs/getting-started-authentication "Authentication section") of our Developer Portal.

## Configuring payment condition
After following the steps indicated above, Kushki will be configured in your store. Thus, when entering a payment condition, it will be available in the __Process with affiliation__ field (as long as the payment method is compatible with Kushki). To learn how to set up payment conditions, read [this article](/en/tutorial/how-to-configure-payment-conditions).
