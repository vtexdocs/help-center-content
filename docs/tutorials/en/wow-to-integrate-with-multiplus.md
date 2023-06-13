---
title: How to integrate with Multiplus
id: 6lR8FzZLB6QimieEWGeq8U
status: DRAFT
createdAt: 2017-05-12T17:20:20.887Z
updatedAt: 2019-12-31T15:24:42.846Z
publishedAt: 
firstPublishedAt: 2017-05-12T17:47:29.932Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: wow-to-integrate-with-multiplus
legacySlug: wow-to-integrate-with-multiplus
subcategory: 
---

### How to configure the integration

To set up the integration of your store with Multiplus, follow the steps below:

1. Access the Bridge module;
2. Click on the **Marketplaces** tab;
3. Search for the Multiplus card;
4. Click on the **Integrar** button.

Another option for the steps above is to access your store’s marketplace settings panel directly through the link below: https://NOMEDALOJA.vtexcommercestable.com.br/admin/bridge/#/settings

Replace NOMEDALOJA with the accountName of your store.

![Multiplus1](//images.contentful.com/alneenqid6w5/2NxVrnsnZCOuQOqEOIusOq/d5cd381241a842c29e81763ea6f8f506/Multiplus1.png)

After clicking on **Integrate**, a form will be displayed with some fields that must be filled in. Be attentive to mandatory fields: these show “/*” next to the text box.


#### Fields information

- **Integração**: When marked as “Ativar”, the process for making products, prices, inventory and services available will be working. If marked as “Desativar”, the affiliate will be deleted and the processes will be completed;
- **Afiliado**: Should contain only 3 letters, all consonants.  This serves to notify the integration on changes in the store’s prices, inventory and products;
- **Política comercial**: Must be filled in with the policy set up in your admin for Multiplus, functioning together with the ID of the Affiliate. All products included in the sales policy will be made available for Multiplus consumption;
- **Código Parceiro que será utilizado na Multiplus**: This code should have from 1 to 30 digits of your choice.  To qualify your sales, you must inform this code to Multiplus after carrying out the setup in Bridge. If you change this code, the new code must also be informed to Multiplus, for update purposes. Otherwise, the store will not be able to sell;
- **E-mails para a criação do Afiliado**: After saving the settings, the integration will generate the Affiliate in VTEX, and include this information in the register.

![Multiplus2](//images.contentful.com/alneenqid6w5/4lTWbmFiGcOoIkUK8KSIAm/501d2f8e79300fc814d08ac600d7b0be/Multiplus2.png)


After filling in the information, click on **Save** and wait for the “success” message to show up.

If, instead, an “error" message appears, review the fields that were filled in and try again. Should the error persist, contact VTEX customer service and report the problem.

### How the integration works

Multiplus searches for the customer’s catalog and closes the purchase through the integration.

#### Catalogation

After the store is qualified to integrate with the Multiplus partner, the integration will make available the whole Category Tree of the store, as well as the products and services included in the sales policy set up, informing whether they are available for sale.

Multiplus will consume records in two phases:

1. Total consumption on Sundays;
2. Partial consumption, carried out once per day.

Partial consumption is intended to check the daily updates regarding a product availability for sale (Availability), price information and features such as name, description, image, specifications etc.

##### Rules:

- SKUs without images and specifications will not be made available;
- Products without specifications will not be made available. 

#### Order closing

The integration of orders occurs in the whole process of closing customers' purchases. If the customer completes an order and an error takes place in the process, the order will not be closed.

The closing of purchases involve four steps:

- To check the availability of the product at VTEX: occurs more than once upon closing the purchase. This is intended to check whether the product can be sold. 
- To validate the order: checks whether the product has all the requisites for closing the purchase;
- To submit the order to VTEX: the order is entered in the store;
- To confirm the order at VTEX: enables to cancel or approve the order at VTEX.

Through the integration, Multiplus can track the status of the order in the store.

Retailers who have native integrations with other Marketplaces are familiar with the problem of different amounts that occurs when downloading the order to VTEX. The integration with Multiplus has no tolerance of value accepted upon closing the purchase. As a result, when a product is sold at Multiplus for an amount that is lower than that expected by VTEX, the order will be closed.

Regarding the order delivery SLA, the SLA with the lowest value will be considered. 


#### Critics and integration success

Criticism and successes regarding the integration can be viewed on the home page of the **Bridge** module.
https://STORENAME.vtexcommercestable.com.br/admin/bridge


#### Related articles

- [How to set up a Marketplace sales policy](http://help.vtex.com/en/tutorial/configuring-a-marketplace-sales-policy/)
- [Dock management](http://help.vtex.com/en/tutorial/registering-a-dock/)
- [Shipping simulation](http://help.vtex.com/en/tutorial/freight-simulation/)
- [Management of shipping costs](http://help.vtex.com/en/tutorial/editing-freight-values/)
