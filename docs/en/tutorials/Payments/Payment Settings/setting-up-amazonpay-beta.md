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
![AmazonPay Panel EN](//images.contentful.com/alneenqid6w5/6KFdDouUaoD4UJaLQAsqSz/3297af465b1ae0ee5d6fad4deb750b56/AmazonPay_Panel_EN.png)
3. Go to **Integration** > **Integration Central**.  
![AmazonPay Integration Central Menu EN](//images.contentful.com/alneenqid6w5/7DmM4Mih9CvaetzlZhRqzS/fe6bdc50584f121e913383f15c111b51/AmazonPay_Integration_Central_Menu_EN.png)
4. In this screen, fill it with the following options:
  - **Connect to:** Website or Mobile tab.
  - **Ecommerce provider:** Self-developed.
  - **Payment-Type:** One-time Payments.  
![AmazonPay Integration Central Settings 1 EN](//images.contentful.com/alneenqid6w5/6KaER70LjnMU7WugdDIgIr/04ad489b186796ded30cc41a61c23648/AmazonPay_Integration_Central_Settings_1_EN.png)
5. Click on **Generate Key**. A certificate will be downloaded, which will be used later as a Private Key.
6. Your Public Key is generated with an **Store ID** and **Merchant ID**. Save them to set up the affiliation in your VTEX store.  
![AmazonPay Integration Central Settings 2 EN](//images.contentful.com/alneenqid6w5/1fiAgbd7Rs1HI6rVrKmY0L/7e193f35adce0d2c0d226cb419e94aa8/AmazonPay_Integration_Central_Settings_2_EN.png)

## Setting up the gateway affiliation

1. Access the **Payments** module on the left panel of VTEX Admin.  
![Admin Payments Menu EN](//images.contentful.com/alneenqid6w5/5dtD9EndAckFLKEyPwA5Mc/d7e4968eb5f493d47b0236be7800c2c3/Admin_Payments_Menu_EN.png)
2. Click on **Settings**.  
![Admin Payments Settings Menu EN](//images.contentful.com/alneenqid6w5/1peuzMZTDlNeVuY8N9qZQL/9765c2737e4f7f0bddffa86318fb4cbf/Admin_Payments_Settings_Menu_EN.png)
3. Access the **Gateways Affiliations** tab.
4. Click on the **+** button.  
![Admin Gateway Affiliations EN](//images.contentful.com/alneenqid6w5/3CDQN4yhyAypTvtneOGKZ1/17c55af763dab4dae8c2ef8fcd4651c9/Admin_Gateway_Affiliations_EN.png)
5. Search for the **AmazonPay** affiliation card and click on it.  
![Gateway Affiliations AmazonPay EN](//images.contentful.com/alneenqid6w5/3eKvBqrNHEDFk0x9gXybJ8/5b86a113c1a110f0629649e315b4c25e/Gateway_Affiliations_AmazonPay_EN.png)
6. Fill the **Application Key** field with your **Merchant ID** and the **Application Token** field with your **Store ID**.  
![AmazonPay Configuration EN](//images.contentful.com/alneenqid6w5/1rvQhMNYbJJINHjQkvofYp/82d1a5ce3745eb2b227eb1bbbfad920a/AmazonPay_Configuration_EN.png)
7. Click on **Save**.

## Setting up the AmazonPay app

1. Access the **Apps** module on the left panel of VTEX Admin.
2. Click on **My apps**.  
![My apps menu EN](//images.ctfassets.net/alneenqid6w5/4oRHARlS6i4lZac17nyHhC/b912df890af790633a2ada35b504e653/My_apps_menu_EN.png)
3. Find the AmazonPay app installed by VTEX and click on **Settings**.  
![Admin My apps AmazonPay EN](//images.contentful.com/alneenqid6w5/4oy769BIF5gz08hPMeFdRv/92a6cb38ddb94d4e76078959642cc57c/Admin_My_apps_AmazonPay_EN.png)
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
