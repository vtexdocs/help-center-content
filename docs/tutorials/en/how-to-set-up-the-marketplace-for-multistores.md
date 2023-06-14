---
title: 'Setting up marketplace for multistores'
id: frequentlyAskedQuestions_672
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.416Z
updatedAt: 2023-03-29T00:45:09.386Z
publishedAt: 2023-03-29T00:45:09.386Z
firstPublishedAt: 2019-01-24T21:55:19.554Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: how-to-set-up-the-marketplace-for-multistores
legacySlug: how-to-set-up-the-marketplace-for-multistores
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

Integrations is the VTEX module that performs the integration between your stores and external marketplaces. It's a module that exists independently for each store in your account.

In a scenario of __multistores__, this concept is of fundamental importance. For example, if your account has three stores, it means that each store can have its own Integrations. So it's necessary to make some settings so that Integrations correctly reads the information of each store that exists in your account.

In order for your products to be sent to the marketplace, the trade policy being used needs to be linked to the website binding. Follow the steps below to perform the setup correctly:

1. In the VTEX Admin, access **Storefront > Layout**
2. Click the __CMS__ folder, and then click __Sites and Channels__.
3. Click the website.
4. [Link an account name and the trade policies you want](/en/tutorial/linking-an-account-name-to-a-website-binding) to this website.

The trade policies configured in the steps above will be available for the Integrations of this particular store. Now, just access the Integrations with the account name of this store (`https://{account-name}.vtexcommercestable.com.br/admin/bridge/`) and [set it up](/en/tutorial/integrating-with-marketplace).
