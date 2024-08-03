---
title: 'New Subscriptions module'
id: 6PfEmqovkZF97AZUp1owdf
status: PUBLISHED
createdAt: 2021-02-02T15:31:07.376Z
updatedAt: 2022-01-03T16:06:38.858Z
publishedAt: 2022-01-03T16:06:38.858Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: new-subscriptions-module
locale: en
legacySlug: new-subscriptions-module
announcementImageID: ''
announcementSynopsisEN: 'The Subscriptions module is the VTEX solution for recurring orders in your store, and it is continuously evolving.'
---

<div class="alert alert-info">
  <p>This update only applies to stores that have the Subscriptions module. For stores that do not use this feature, nothing will change.</p>
</div>

The Subscriptions module is the VTEX solution for recurring orders in your store, and it is continuously evolving. The module was enhanced to streamline the system performance and deliver new features that improve the customer experience in your store. This article describes all the changes made in the Subscriptions module and how to adapt your store accordingly. 

## What has changed?

Module upgrades include:
-  Improvements in viewing and managing subscriptions in your customer’s account.
-  Changes in the calculation of the Subscription order cycle date.
-  Changes in API routes used in your store’s external integrations.

If you are a retailer that does not use our APIs in your integrations, you do not have to configure the module from scratch or adapt it. Our system will automatically implement the new module. 

If you are a retailer or partner that uses our Subscriptions API, you must implement the new routes for your integrations to work with the new module. You will be assisted by the VTEX team during the entire migration process, ensuring a seamless transition to the new module. [Learn more about the migration in our documentation in the Developer Portal.](https://developers.vtex.com/vtex-developer-docs/docs/subscriptions-v3-migration-guide)

### New features for your customer

The improvements to the Subscription system include new features for your end customer. The __My Account__ page interface that customers access on your store’s website now includes the following features: 

#### Subscription details 
Our subscription details page has been redesigned to improve customer experience by reducing the time to find information and perform tasks. In addition, a new feature allows you to add items to an existing subscription.

![img1 subscriptions EN](https://images.ctfassets.net/alneenqid6w5/YTLE4SVoIbfDCdH9BK97s/01b71fce5ac6f65621c37a917a798050/img1_subscriptions_EN.png)

#### Notification box
Now you can use a notification box to improve your communication with users about actions they need to perform or to communicate important events about your subscriptions.

![img2 subscriptions EN](https://images.ctfassets.net/alneenqid6w5/4SOJIaVfD2pnRqDK8oChFM/b925e16f3a4eefc38b2b2edc6af2333a/img2_subscriptions_EN.png)

#### Adding products to your subscription
You can also add new items to your subscription by searching for products available in the store.

![img3 subscriptions EN](https://images.ctfassets.net/alneenqid6w5/1QLpkpJqU4GmAxG2kQl34s/adbd8d1d4cc519b9f687e27f4fea3a5a/img3_subscriptions_EN.png)

#### Creating a new subscription
A long-awaited feature is now available: a screen for creating subscriptions. You can now configure a new subscription without the need to go through the checkout and place an order. To do that, click on the __New subscription__ button on the subscriptions list.

![img4 subscriptions EN](https://images.ctfassets.net/alneenqid6w5/1Olba34z68eZB3VqeGLPvL/784b7439f54cedde4fc381f3a275f556/img4_subscriptions_EN.png)

### New subscription concept in the VTEX system
Previously, in the VTEX system, a subscription consisted of an SKU linked to a purchase configuration. It allowed the customer to subscribe to SKUs with different shipping addresses and different payment methods—which represented an evolution compared to the first version of the system.

#### Before:
![img5 subscriptions EN](https://images.ctfassets.net/alneenqid6w5/36iPClYx89vn03OHhkUfho/107288b39d263aad20e153aa3c0a045a/img5_subscriptions_EN.png)

![img6 subscriptions EN](https://images.ctfassets.net/alneenqid6w5/3R0ImpMVwP9C81ndi5oCvg/18bbe8fa02f3361873d6e2ceba450d01/img6_subscriptions_EN.png)

![img7 subscriptions EN](https://images.ctfassets.net/alneenqid6w5/W44xbs0MAAwYxjyU8Dj4E/6e0250e84776f69dad0d8f1c17ee1eff/img7_subscriptions_EN.png)

The subscription now consists of an SKU list and a particular purchase configuration. This means that we have removed the concept of Subscription Groups from our system. For more information, read our article [How subscription works](https://help.vtex.com/en/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453). The diagram below shows our new subscription concept:

#### Now:
![img8 subscriptions EN](https://images.ctfassets.net/alneenqid6w5/1tNo9gQza7gWuDXZPRxQRO/33a97511d0c48f954b9de33bcad8fa40/img8_subscriptions_EN.png)

### Subscription order cycle date

We also changed the way of calculating the subscription order cycle date. Users can now change the date of their orders more easily. A new [API](https://developers.vtex.com/vtex-developer-docs/reference/cycles) allows you to choose precisely the next date, without the need to change the subscription frequency to match the desired date.

## What do I have to do?
Remember that if your store does not use our APIs in their integrations, no adaptation is needed on your side. The implementation will be automatic. 
If you are a retailer or partner that used our subscriptions API, please note that every subscription API route previously defined will be replaced by new ones. You will be assisted by the VTEX team during the entire migration process, ensuring a seamless transition to the new module. Check out our [Integration with the New Subscription Module Guide](https://developers.vtex.com/vtex-developer-docs/docs/subscriptions-v3-migration-guide). 

<div class="alert alert-info">
You can request the new Subscriptions UI by contacting our customer <a href="https://help.vtex.com/en/tutorial/opening-tickets-to-vtex-support--16yOEqpO32UQYygSmMSSAM">support</a>. Your store needs to enable and install <a href="https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG">Intelligent Search</a> in order to use the new UI.  
</div>
