---
title: 'How to integrate with YOP'
id: tutorials_4206
status: PUBLISHED
createdAt: 2017-04-27T21:51:42.320Z
updatedAt: 2025-08-26T17:46:58.501Z
publishedAt: 2025-08-26T17:46:58.501Z
firstPublishedAt: 2017-04-27T23:11:14.915Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: integrating-with-yop
legacySlug: integrating-with-yop
locale: en
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

## First steps

Some steps are essential for us to start configuring integration with the YOP marketplace.
1. Configure the [sales policy](http://help.vtex.com/en/tutorial/configuring-a-marketplace-sales-policy/);
2. Configure the [logistics](http://help.vtex.com/en/tutorial/configuring-logistics-for-a-marketplace/) for this sales policy;
3. Contact YOP;

## How to configure it

### Configure the role

1. Access the **Account settings** menu;
2. Click on the **Users** tab;
3. Click on the **New user** button;
4. Enter **e-mail** and **Full name**;
5. Search for and select the roles **IntegrationProfile-Fulfillment\_Oms** (to add the new orders);
6. Click on **Add;**
7. Click on the **Save** button.

### Configure the affiliate

[Follow the instructions in our manual and complete the fields as indicated below](http://help.vtex.com/en/tutorial/configuring-affiliates/).

- **Name** YOP
- **ID:** YPP
- **Trade Policy:** ID of the sales policy to be assumed by the marketplace.
- **E-mail for notifications:** Email address that will receive any notification of conflict when integrating orders.
- **Search Endpoint:** https://yop.land/vtex/notifications
- **Search Endpoint version:** Today, only 1 exists, and it cannot be altered &#8211; Default: 1.x.x;
- **Use my payment method:** Do not use.

### Create a free freight promotion 

[See our manual on how to create a promotion for the marketplace](https://help.vtex.com/tutorial/configurar-promocao-para-marketplace--tutorials_406).

## Go further

[How integration with the marketplaces works](http://help.vtex.com/en/tutorial/integrating-with-marketplace/).

