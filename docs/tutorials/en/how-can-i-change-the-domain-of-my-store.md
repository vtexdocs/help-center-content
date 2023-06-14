---
title: 'Changing the domain of the store'
id: frequentlyAskedQuestions_626
status: DRAFT
createdAt: 2019-01-24T20:45:57.032Z
updatedAt: 2022-11-09T22:15:52.205Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:02:37.712Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: how-can-i-change-the-domain-of-my-store
locale: en
legacySlug: how-can-i-change-the-domain-of-my-store
subcategory: yMp6sKDiJEi66CGAIQ4ma
---

Changing the domain corresponds to changing the name of the site. In other words, if a VTEX store, for example, owns the domain **_mystore.com_** and it intends to change it to **_newdomain.com_**, the store must follow this tutorial.

<div class="alert alert-warning">
You should NOT delete the previously set up HOST, while the new setting is not propagated (Average propagation time: 15 minutes).
</div>

The VTEX platform is prepared to support domain changes without adverse impacts. To do so, just follow the steps below:

### 1. Create new HOST entries in the License Manager
In the License Manager, under “Contas,” enter the new domain as the HOST of your store. At this moment, the DNS of the new domain should not be pointed to VTEX yet. 
See below an image illustrating and giving examples of the inclusion of new HOSTs to be applied:
![Change Domain](https://images.ctfassets.net/alneenqid6w5/4FfqogdPy0UokEe2G2CICk/d044f0e997870688f9fec8163c508f73/626-en.png)

### 2. Check the settings of the new Portal
This step is crucial for the Checkout to continue operating after the change. You must check whether the Sites set up are connected to some inexisting Account Name created in License Manager. [Learn more about the portal settings here](/en/faq/configure-template-in-the-smartcheckout).

### 3. Point the DNS of the new domain to VTEX
After checking the above steps, just point the DNS of the new domain to VTEX. [Learn more about DNS pointing here](/en/tutorial/configuring-dns-pointing-to-vtex/).
