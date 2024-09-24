---
title: 'Checkout - Setting up the cardholder document (ID) field'
id: R5Pz4ofU9ueB2e5bMhSWH
status: PUBLISHED
createdAt: 2022-04-29T12:21:40.419Z
updatedAt: 2022-05-03T18:15:16.054Z
publishedAt: 2022-05-03T18:15:16.054Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: checkout-setting-up-the-cardholder-document-id-field
locale: en
legacySlug: checkout-setting-up-the-cardholder-document-id-field
announcementImageID: ''
announcementSynopsisEN: ' Configuring the display of the cardholder ID field at checkout.'
---

To allow our partners to operate in different locations and regions, each having its own requirements and shopping characteristics, VTEX is implementing the option of choosing whether or not to show the **Cardholder Document** field at Checkout. This way, anti-fraud solutions and retailers will have the autonomy to decide if that type of information should be requested from the customer for credit or debit card purchases.

## What has changed?

Previously, when selecting a credit or debit card as a payment method on the Checkout screen, the customer had to fill out the following card information:

* Number
* Name on card
* Expiration 
* CVV
* Cardholder ID (*Cardholder Document*)

Now, if the anti-fraud solution thinks that the **Cardholder Document** field is not necessary for their anti-fraud analysis, the retailer can go to the VTEX Admin and configure whether or not the field should be displayed at Checkout.

>ℹ️ The **Cardholder Document** field must be filled out with information that is specific to each country, such as CPF (Brazil) and Social Security Number (United States). The field name will be displayed differently at Checkout, depending on the country where the purchase is taking place.

## Why did we make this change?

To adapt to the practices of different markets, which include countries where this type of ID is not required when making credit or debit card transactions.

##  What needs to be done?

To check if the anti-fraud solutions configured in your store allow changing the visibility of the **Cardholder Document** field, follow the steps below.

1. Go to the **VTEX Admin**.
2. In the **Payments** module, click on **Settings > Gateway affiliations**. 
3. After selecting the desired anti-fraud solution, check if the **Cardholder document field** option is available on the configuration screen.

![cardholder document field](//images.ctfassets.net/alneenqid6w5/23Hyo1jo4hkC3nXPmOa7NW/350f0aaab8c88555c89a9ca3f2304f6c/cardholder_document_field.png)

>⚠️ If the **Cardholder document field** option is not available on the configuration screen of your anti-fraud solution provider, the **Cardholder document** field will still be displayed at Checkout in your store, and the customer will be required to fill it out.

For more information about how to configure the visibility of this field on your store’s Checkout, see [Cardholder Document Configuration (Help Center)](https://help.vtex.com/en/tutorial/antifraud-provider--4aZtmdpgFikcsQomWyqAOq#cardholder-document-configuration).

For more information about the configuration set up internally by the anti-fraud solution, see [Cardholder Document Configuration (Developer Portal)](https://developers.vtex.com/vtex-rest-api/docs/cardholder-document-configuration).
