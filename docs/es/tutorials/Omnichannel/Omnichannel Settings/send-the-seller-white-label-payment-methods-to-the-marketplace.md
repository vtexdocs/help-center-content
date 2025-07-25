---
title: 'Send the Seller White Label payment methods to the Marketplace'
id: bfvtPzZyikacSqgkgeGW
status: PUBLISHED
createdAt: 2018-09-27T20:35:08.990Z
updatedAt: 2019-12-31T15:21:55.409Z
publishedAt: 2019-12-31T15:21:55.409Z
firstPublishedAt: 2018-09-27T20:42:48.820Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: send-the-seller-white-label-payment-methods-to-the-marketplace
locale: en
legacySlug: untitled-entry-2018-09-27-at-08-35-08
subcategoryId: 3wullenAJiAcWY0a6K4UOE
---

The objective of this tutorial is to teach how to send the payment options from a White Label Seller to a Marketplace.

This feature allows for purchases made on an e-commerce to be completed with the payment options of a physical store. This decreases the complexity of the operation, separating centers of cost, since the invoice and the payments will be attributed directly to the Registration Number of the physial store, which acts as White Label Seller of a Marketplace.

>ℹ️ This configuration replaces the old feature of ** Alternative Accounts** for this scenario.

## Registering payment options on the Seller White Label

1. In the Admin menu of the Franchise Account, which acts as Seller White Label, click on__Payments__
2. Select **Settings**
3. [Register the gateway affiliation](http://help.vtex.com/en/tutorial/registering-gateway-affiliations/) that will be used by the Seller White Label to process payments
4. [Configure the payment options](http://help.vtex.com/en/tutorial/how-to-configure-payment-conditions) that will be sent to Marketplace

## Register an affiliate to send payment options

To send payment options to a Marketplace, it’s necessary for the Seller White Label to register an __affiliate__. To do that, follow the steps below:

1. In the admin menu of your store, click on __Order Management__
2. Select __Settings__
3. Click on the __Affiliates__ tab
4. Click on the green button __New Affiliate__
5. Fill out the fields as listed below and then select __Save__

### Registration fields

- __Name:__ Insert the Marketplace name to where the payment options will be sent 
- __ID__: Insert a three-letter seal to identify the Marketplace
- __Trade Policy__: ID of the commercial of the Seller White Label that will send the information to the Marketplace
- __E-mail for notifications__: Fill in with an e-mail that will receive notifications about the integration
- __Search Endpoint__: This field in not mandatory
- __Search Endpoint_ Version_: Select the option __1.x.x__
- __Use my payment option__: Select this checkbox for your payment options for the Marketplace. By selecting this option, the payment options that are registered with the Seller White Label will be sent to the Marketplace checkout.


