---
title: 'Setting up AmazonPay (beta)'
id: vOKroDGBg60UX0jsLcvtq
status: DRAFT
createdAt: 2021-08-23T13:52:20.219Z
updatedAt: 2021-08-24T20:29:30.208Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slugEN: setting-up-amazonpay-beta
locale: en
legacySlug: setting-up-amazonpay-beta
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>ℹ️ This feature is in beta, which means that we are working to improve it. If you have any questions, please contact [our Support](https://support.vtex.com/hc/en-us/requests).

AmazonPay Checkout, is a known payment processor and method used
worldwide. This method is available at VTEX in the affiliations list on the **Settings** page. AmazonPay gateway affiliation supports the AmazonPay payment method.

## Generating AmazonPay keys

Before setting up the affiliation in VTEX Admin, first you need to have your **Store ID** and **Merchant ID** API keys, which can be generated through the following steps:

1. Go to the [Amazon seller central website](https://sellercentral.amazon.com) and login in your account.
2. Open the menu on the left side.  
![AmazonPay Panel EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
3. Go to **Integration** > **Integration Central**.  
![AmazonPay Integration Central Menu EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)
4. In this screen, fill it with the following options:
  - **Connect to:** Website or Mobile tab.
  - **Ecommerce provider:** Self-developed.
  - **Payment-Type:** One-time Payments.  
![AmazonPay Integration Central Settings 1 EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)
5. Click on **Generate Key**. A certificate will be downloaded, which will be used later as a Private Key.
6. Your Public Key is generated with an **Store ID** and **Merchant ID**. Save them to set up the affiliation in your VTEX store.  
![AmazonPay Integration Central Settings 2 EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

## Setting up the gateway affiliation

1. Access the **Payments** module on the left panel of VTEX Admin.  
![Admin Payments Menu EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)
2. Click on **Settings**.  
![Admin Payments Settings Menu EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)
3. Access the **Gateways Affiliations** tab.
4. Click on the **+** button.  
![Admin Gateway Affiliations EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)
5. Search for the **AmazonPay** affiliation card and click on it.  
![Gateway Affiliations AmazonPay EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_8.png)
6. Fill the **Application Key** field with your **Merchant ID** and the **Application Token** field with your **Store ID**.  
![AmazonPay Configuration EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_9.png)
7. Click on **Save**.

## Setting up the AmazonPay app

1. Access the **Apps** module on the left panel of VTEX Admin.
2. Click on **My apps**.  
![My apps menu EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_10.png)
3. Find the AmazonPay app installed by VTEX and click on **Settings**.  
![Admin My apps AmazonPay EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_11.png)
4. Fill the settings according to the table below:

| Field | Description |
| - | - |
| Merchant ID | Terminal gathered from the AmazonPay Panel. |
| Store ID | Terminal gathered from the AmazonPay Panel. |
| Private Key | This is an encoded Base 64 (utf-8) format. The private key can be generated in the Admin Panel. To generate the private key must be followed the AmazonPay documentation. <br><br>Take the raw string of the Private Key generated, then use a tool to convert the text into Base64 encoded raw. To generate the Base64 format, you can use an [online converter](https://base64.guru/converter/encode/text) or the [OpenSSL tool](https://github.com/openssl/openssl) with the following CLI command in a terminal: `openssl base64 -in "infile.key" -out "outfile"`. The result string characters must be used in this field. |
| Public Key | This key is generated in AmazonPay and sent to the merchant. |
| Region | Select the one that applies: US, EU or JP. |
| Ledger Currency | Select Ledger Currency. Depends on your Contract with AmazonPay. |
| Merchant Store Name | Fill the Store Name that will appear in to the buyer is redirected (e.g.: Luxury Store). |
| Payment Intent Mode | Select either **Authorize** to execute preauthorization or **Authorize and Capture** to immediately capture the amounts. |

## What the store administrator should know

- Keep updated with this AmazonPay documentation
- We suggest using LIVE credentials and perform orders to validate the integration and certificates.
- If a problem appears at any time, we recommend double-checking the LIVE credentials. If the problem continues, contact AmazonPay support and relate the issue.
- We recommend executing authorization, settle and refund operations to validate all flows. Given any problem, if you are certain that it is not a configuration issue, then contact VTEX Technical support.
- Avoid using a sandbox test whenever possible.
