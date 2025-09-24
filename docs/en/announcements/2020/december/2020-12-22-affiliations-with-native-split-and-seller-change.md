---
title: 'Affiliations with native split and seller change'
id: HZrgfF4RMTX9DHv4erOR6
status: PUBLISHED
createdAt: 2020-12-22T23:33:48.841Z
updatedAt: 2020-12-29T15:20:14.835Z
publishedAt: 2020-12-29T15:20:14.835Z
contentType: updates
productTeam: Financial
author: 5WE9zkDdoqqUMRbxIgmp1o
slugEN: 2020-12-22-affiliations-with-native-split-and-seller-change
locale: en
legacySlug: affiliations-with-native-split-and-seller-change
announcementImageID: 'undefined'
announcementSynopsisEN: 'New capture behaviors allow seller change and make marketplaces flexible with native split affiliations.'
---

Marketplaces may need to change sellers (who deliver the product) in a variety of situations, including for example, when the seller cancels a product in case of stockout. Changing the seller can in such cases guarantee that the marketplace makes the sale and prevents payment refund.

Four new payment capture behaviors were created to grant more autonomy and flexibility to marketplaces that use payment split native affiliations and need to change a seller.

# What changed?
Payment capture in affiliations that support payment split ran automatically by default, whereas now you can select from four different behaviors. In the following two, payment capture does not happen automatically:

- **Use Payment Processor Recommended Behavior**
- **Disabled: Do Not Auto Settle**

For the other two behaviors, payment capture is automatic:

- **Immediately: Auto Settle Upon Payment Authorization**
- **Immediately: Auto Settle Once Risk Analysis Has Been Approved**

See the article on how to [Configure payment split] [1] for details related to each behavior and configuration instructions.

# Why did we make this change?
Changing a seller could only be done by marketplaces that did not use affiliations with a native payment split feature because payment authorization and  capture took place automatically by default. Being able to configure the payment capture behavior so that it does not happen automatically increases the time window between authorization and capture allowing the seller to be changed (see the article on [How to use the Change Seller option] [2] for details).

# What needs to be done?
Payment split affiliations are now capturing payments that adhere to the **Use Payment Processor Recommended Behavior**. If you choose to maintain the automatic behavior for the affiliation that supports payment split, you need to select the desired behavior from the affiliation view page where the payment split takes place.

[1](/en/tracks/split-de-pagamentos--1ouDg8q56Kuz1AgtJUY9nv/4EOhp8cdVXaHl68KykPG6)
[2](/en/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete)

