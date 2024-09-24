---
title: 'How to integrate with Farmácias App'
id: tutorials_6271
status: PUBLISHED
createdAt: 2017-04-27T21:49:03.087Z
updatedAt: 2023-03-29T16:32:52.066Z
publishedAt: 2023-03-29T16:32:52.066Z
firstPublishedAt: 2017-04-27T23:11:18.364Z
contentType: tutorial
productTeam: Channels
author: authors_24
slugEN: integrating-with-farmacias-app
locale: en
legacySlug: integrating-with-farmacias-app
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

The Farmácias App is a mobile marketplace certified by VTEX. It is available for iOS and Android.

## Access permission

To start the integration, it is first necessary to give permission to the Farmácias App integration key. It allows the marketplace to receive and send the updates needed for the &#8211 sales flow – regarding, for example, the receipt of catalogs, shipping calculations and sending of orders.

To configure the key, proceed as follows:

1. Access the **Account Management** module;
2. Click on the **Users** tab;
3. Click on the **New user** button;
4. Complete the **E-mail** and **Full name** fields as follows:

**Email**: `vtexappkey-farmaciasapp-ISBSVR`
**Name**: `farmaciasapp`

_**Attention**: these fields must be filled out exactly as described above._

The **role** will be: IntegrationProfile-Fulfillment_Oms, IntegrationProfile-Fulfillment_Gateway

![Farmacias1](//images.contentful.com/alneenqid6w5/2rkEOHXVIEk4q8WiOWCsSs/46449655d8c76e01903a29ec6ed5492d/Farmacias1.png)

Then, click on **Save**.

Afterwards, you will have to:

1. [Create collection](http://help.vtex.com/en/tutorial/creating-a-product-collection/) (only if your store does not yet have a collection it wishes to allocate to the marketplace);
2. Create a group by departament, category or sub-category;
3. Create groups by brand;
4. [Sales policy setup](http://help.vtex.com/en/tutorial/configuring-a-marketplace-sales-policy/).

## Configuring afiliate

Lastly, the affiliate must be registered, as it is the unique identity of the marketplace in your store. To do this, follow the steps below:

1. Access the **Orders Managment** module;
2. Click on the **Settings** button;![Farmacias2](//images.contentful.com/alneenqid6w5/7Mekt0KzpmaS4M4uoEu2kC/d0b13138a044072b6ba2c7c89808eacc/Farmacias2.png)
3. Click on the **Affiliates** tab;
4. Click on the **New Affiliate** button;
5. Complete the fields as follows:

**Name**: Farmácias APP;
**ID**: FPP;
**Trade Policy**: _inform the ID of the sales policy_.
**E-mail for notifications**: _e-mail of the person responsible for the integration_;
**Search Endpoint**: https://integrador.farmaciasapp.com.br/Vtex/api/notification

![Farmacias3](//images.contentful.com/alneenqid6w5/6pnQjxLuhO8cUogU6oYoig/953a840b59416974f9a3baeff39d47cd/Farmacias3.png)

_When the payments are processed using Farmácias App, the **Usar meu meio de pagamento** option must be disabled. Check this option only for payments processed in different environments, such as payments processed on the VTEX platform._

Once these steps are completed, you must send the following data to the Farmácias App:

- Store Id Sales;
- Channel;
- Affiliate Id;
- E-mail of the person responsible for the integration;
- Phone number of the person responsible for the integration.

In the case of payments processed in environments external to the Farmácias App, the following data must also be sent:

- Bank;
- Bank code;
- Branch of recipient’s account;
- Branch digit;
- Bank account number of the recipient;
- Check digit of the recipient’s account;
- CPF or CNPJ of the recipient.

After this, the Farmácias App will do the necessary settings and tests, publishing several products in its catalog so as to place orders and test the end-to-end flow.
