---
title: 'How to integrate with Google Shopping'
id: tutorials_7034
status: ARCHIVED
createdAt: 2017-04-27T21:48:21.080Z
updatedAt: 2021-04-15T21:41:15.677Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:42.177Z
contentType: tutorial
productTeam: Channels
author: authors_41
slugEN: new-google-shopping-api-integration
locale: en
legacySlug: new-google-shopping-api-integration
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

The new Google Shopping integration has stopped using the XML to enable the integration through API and the follow-up in real time through the __Integrations__ session.

XML has not been discontinued; it can still be usued, however the API uses much faster, reliable, modern resources.

To enable this new Google Shopping integration, your Google Merchant Center account should be linked to Google Adwords, where a shopping type campaign must exist in order for product which are active in the Merchant Center to become available and come up in Google search results.

For further information on Shopping’s campaigns and ads, refer to [this Google article](https://support.google.com/google-ads/answer/2454022?co=ADWORDS.IsAWNCustomer%3Dfalse&hl=en)

## Setup

1. In Admin, click on __Integrations__.
2. Select __Settings__
3. On the Google Shopping option, then on __Integrate__. 

You must populate this setup form with your Merchant Center code; choose the desired Sales Policy; and indicate an e-mail for creating the Google Shopping affiliate in Orders Management. It is also possible to enable/disable the integration by switching between the **ON**/**OFF** buttons. 

On Integrations, retailers can also choose whether or not to send promotional prices.  This flag is enabled by default. However, the flag can be disabled if the store does not intend to send products with promotional values.  

The ID of the merchant’s account, in the case of multi-client (the ID informed must br that of the sub-account related to the merchant).

Note: If the retailer notices that product prices are different, or that the store is using an automated update data scheme that it does not want to disable (it wants to use both options, integration + automated Google Shopping update), the retailer may keep it enabled, as long as promotional prices are contained in the automated updates tag.  Otherwise, the retailer can disable the Integrations. 

## Authorizing the integration

The next step is to authorize VTEX access to your Merchant Center and send your products. First of all, login to Google Merchant Center using the existing master user\*.

\*Keep in mind that the Google Shopping master email is the only one that allows you to manage users.

The next step, in Integrations, is to click on **Authorize** and then on the **Authenticate my account** button. You will be directed to a Google’s page where you will grant access to VTEX so that it can use the Merchant’s APIs. Click on **Grant Access**.

A notification will appear on the screen saying that the "access was successfully granted". 

After following all the steps above, your store will be ready to send its products to Google Shopping. Products are sent to the extent they are indexed.

In the current integration, **ALL** the products indexed are sent to Google Shopping. The “by collection” condition does not exist at this moment. 

## Considerations

#### Sent products
In the current integration, **all** of the products available in the sales policy will be sent to Google Shopping, without the possibility to filter by collection at the moment. This resource is in our backlog and will be made available in the future.

#### Sent price
The price defined in the trade policy linked to Google Shopping is sent. If a discounted price is present, it will be sent instead of the full price. If a discount for prepayment in full already exists (associated with the **"boleto” payment method**), it will be applied to the product price prior to shipping.

#### Price when several sellers exist
When dealing with a marketplace, we always send the best offer available among sellers.

#### EAN/GTIN
GTIN is treated. If the product has EAN, we sent it, and if the EAN were invalid, the error would be displayed on Integrations as "invalid EAN = GoogleShopping bad request".

#### Description size
We respect Google Shopping's description limit, sending a maximum of five thousand characters.

#### Other integrations
You should not use two integrations running while Google Shopping is active. Only our API integration should be active with Google Shopping is being used, disabling others such as XML for example.

#### Site URL
The exact site URL should be filled in the Google Merchant console, minding whether WWW is used or not, or HTTP or HTTPS. Links are built based on this data, therefore if data is incorrectly inserted, Google Analytics will not be able to correctly take the redirects into account.

#### Product expiration date
Google automatically gives products a 30 day expiration date unless updates are applied (which can include any change in the product, be it price, inventory, or specifications).

#### Title size
The limit is 150 characters, however Google annoucements only display 70 characters. The integration sends up to 150 characters, made up of the Product Title + SKU Title; [read more about this here](https://support.google.com/merchants/answer/6098378?hl=en).

>⚠️ **Attention:** The XML integration has not been discontinued, but if the integration is done by XML and the Integrations module (API) the products will appear duplicated.


