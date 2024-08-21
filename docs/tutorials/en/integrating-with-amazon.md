---
title: 'Integrating with Amazon'
id: 2w2vFtveNWcycooEGks2me
status: DRAFT
createdAt: 2017-10-24T19:22:17.213Z
updatedAt: 2020-03-06T13:56:49.869Z
publishedAt: 
firstPublishedAt: 2017-10-24T20:45:46.537Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: integrating-with-amazon
locale: en
legacySlug: integrating-with-amazon
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

>⚠️ This integration is valid only for the **Outdoor**, **Luggage**, **Camera and Photo, <b>House and Garden**, **Computers**, **Electronics**, **Sports**, **Jewelry**, **Books**, **Office Material**, **Tool Kit**, **Games**, **Shoes** and **Clothing** categories.

>⚠️ This integration is available for Brazil, Mexico, the United States, Canada and Europe.

## Authorize VTEX on the Amazon dashboard

In order to integrate with the Amazon Marketplace, it is necessary for the retailer to give authorization to VTEX in his Amazon Seller Central account through the US Market (_www.amazon.com_).

>❗ In the Amazon dashboard, make sure you're still connected to the US market (www.amazon.com) during all the steps. If it is not, you will receive an error message and you will need to change the market to the US (www.amazon.com) again.

 When in the Amazon developer registration step, fill in the fields as follows:  
  - Developer’s Name: VTEX  
  - Developer Account Number: 2625-4263-7910  

__During the entire authorization process on Amazon, always have the provided credentials and identifiers in hand .__ The Seller ID and MWS Auth Token, for example, are essential for configuring the integration within the VTEX platform.


## Preconfigurations in VTEX

Before configuring the integration, you should make sure that all products that ship to Amazon have:

  - __Global Category:__ if your products do not have a global registered category, you can configure the global category within the category settings, which associated products will inherit this value. To learn how to configure the global category, you can [access our article](/en/tutorial/setting-up-the-global-category).

  - __EAN:__ as Amazon's catalog is unique, it requires that the products sent have the EAN so they can merge the products of all sellers. The EAN exemption on product integration should be configured on both Amazon and VTEX. If Amazon has granted the EAN exemption to your store, [open a ticket](https://support.vtex.com/hc/en-us/requests) with the subject "[Amazon] EAN exemption" for procedure on the VTEX side.
  
  -  __Time Cost__: on Amazon there is the `fulfillment latency` field, which is __used to configure the time to prepare the delivery of a given product__. In order to fill it up massively via integration, it is necessary to fill in the [Cost Time](https://help.vtex.com/en/tutorial/how-to-register-a-dock) field in the dock associated with the sales policy used for Amazon. If this field is not filled, Amazon will use their _default_ value (2 days).

>⚠️ NOTE: it is important to fill in this field because if your store is not perfoming according to the configured time, i.e. delayed delivery, your account may be blocked.

## Integration settings

Access the admin of your VTEX account and enter the __Integration__ section. Access __Settings__ in order to click on the box with the Amazon logo and fill in the fields listed:

- __Afiliate Id__: Fill in the field with three letters to identify the affiliate. It is worth mentioning that in this field only consonants are accepted. We recommend filling in with MZN.
- __Afiliate Email__: Email for non-integrated order notification.
- __Sales Channel__: Id of the sales channel used for store integration.
- __Amazon Seller Id__: Id from your Amazon store, obtained in the process of getting the VTEX token in your Amazon account.
- __Amazon Auth Token__: Token obtained in the authorization step of the VTEX key in your Amazon account. 
- __Order Allowance Rate__: Rate of acceptance of the value divergence in the integrated order.
- __Name for the type of freight__: Name of the type of delivery registered in the Amazon panel. The name of the type of delivery is located on the __Shipping Settings__ screen, on the __Shipping Models__, __below__ the _Amazon Default Model_ box.
- __Don't send the variations of skus - Only for office category__: If your store is from the __Office__ sector, we recommend selecting the `ON` option. Currently, it is not possible to send the consolidated SKUs to Amazon. __This flag should only be used by stores from the *Office* sector__.
- __Not send price to Amazon:__ Amazon gives the possibility to use their own system for parameterizing prices on products. __To use this service, check the `ON` option so that the integration does not send VTEX prices.__ Because if prices are sent via integration they will overwrite those of the Amazon system.

## Sending SKU attributes to Amazon

If your store has to submit mandatory attributes to Amazon, visit our article [Sending SKU attributes to Amazon](/en/tutorial/sending-sku-attributes-to-amazon) to complete your integration.

That's all! Your integration with Amazon is now set up!
