---
title: Integrating with Walmart
id: tutorials_420
status: DRAFT
createdAt: 2017-04-27T22:05:57.794Z
updatedAt: 2023-03-29T16:30:37.304Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:24.177Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: integrating-with-walmart
legacySlug: integrating-with-walmart
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

## First steps

Several steps are essential for us to initiate the configurations.

1. [Contract the channel](/en/tutorial/integrating-with-marketplace/).
2. Configure the [sales policy](/en/tutorial/configuring-a-marketplace-sales-policy/).
3. Configure the [logistics](/en/tutorial/configuring-logistics-for-a-marketplace/) for this sales policy.
4. Get in touch with Walmart and obtain the __user__, __password__ and __seller’s ID__ to access the API: [https://marketplace.walmart.com.br/prospection](https://marketplace.walmart.com.br/prospection).

## How to configure

1. Click on __Integrations__, in the __Marketplace__ section of the Admin's sidebar.
2. A dropdown list will open. Then, click on __Settings__.
3. In the Walmart box, click the __Integrate__ button.
4. Fill in the fields as detailed below.
6. Click on the __Save Configuration__ button. The button is active only if all fields are filled in.

## Fields

- __Enabled integration:__ When “Yes”, it activates the export of products, prices and inventory. When “No”, it activates the integration, erasing the affiliate and the access permission at Walmart.
- __Affiliate ID:__ Fill in the field with three letters to identify the affiliate. It is worth mentioning that in this field only consonants are accepted. We recommend filling with `WMT`.
- __Email for notification:__ Email that receives notifications when there are alerts in integrating orders.
- __Walmart User:__ User for authenticating imports of products, prices and inventory.
- __Walmart Password:__ Password for authenticating imports of products, prices and inventory.
- __Walmart SellerId:__ ID of the Walmart store.
- __Website URL:__ Address of the main store (insert `http://` or `https://`). I.e.: `http://www.{AccountName}.com`.
- __Trade Policy:__ ID of the sales policy to be used for the Walmart partner.

After the configuration, the integration sends all the products associated with the sales policy determined for Walmart.

<div class="alert alert-warning">
<strong>Important:</strong> Walmart does not accept HTML code in the product description fields and specification fields.
</div>


## Integration Flow

VTEX sends __products__, __prices__, and __inventory__ data to Walmart. The Admin's Integration module registers the latest update of those data.

The __order and shipping flows__ are Walmart's responsibility. VTEX receives queries, notifications, and updates from Walmart, which uses VTEX's API to make real-time shipping simulations. But you need to set up the __Orders API__ and __authenticate your integration__ first.


1 - Orders API
`http://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders?affiliateid={xxx}&sc={y}`

- Note that the term __{AccountName}__ must be replaced by the name of your store’s environment.
- You must replace the __affiliateid__ parameter by the affiliate ID set up in the previous steps.
- The value for the last parameter, __sc__, must be replaced by the ID of the [sales policy](/en/tutorial/configuring-a-marketplace-sales-policy/) used for the Walmart marketplace.


2 - [Authenticating your integration](/en/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations)
After completing the steps above, you'll need to authenticate the integration with Walmart. All you need to do is send them your appKey (learn how to [generate an appKey for authentications](/en/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations)). If you have any questions about this process, get in touch with the Walmart support team.

<div class="alert alert-warning">
Remember that you must associate the appKey to the role <strong>IntegrationProfile - Fulfillment</strong>. It has all the necessary permissions to go through the entire marketplace integration process.
</div>
