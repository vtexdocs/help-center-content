---
title: 'Changing the store domain'
id: frequentlyAskedQuestions_626
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.032Z
updatedAt: 2025-01-21T21:49:12.366Z
publishedAt: 2025-01-21T21:49:12.366Z
firstPublishedAt: 2019-01-24T22:02:37.712Z
contentType: tutorial
productTeam: Identity
author: authors_84
slugEN: change-the-store-domain
legacySlug: how-can-i-change-the-domain-of-my-store
locale: en
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

Changing a store [domain](/en/docs/tutorials/configuring-the-store-domain) after the go-live requires careful attention to minimize SEO problems and ensure a seamless transition without impacting the customer experience.

Learn more about the complete process for changing your domain on VTEX in the following sections:

1. [Prerequisites](#prerequisites)  
2. [Setting up the new domain](#setting-up-the-new-domain)  
3. [Deleting the previous domain](#deleting-the-previous-domain)  
4. [Redirecting the previous domain](#redirecting-the-previous-domain)  

## Prerequisites

Before you begin, make sure that:

* The new domain is registered and accessible.  
*	You have access to the domain DNS provider.

## Setting up the new domain

Follow the steps below to change your domain:

1. Create a new VTEX Admin host by following the instructions in [Registering a new host](/en/tutorial/configuring-the-store-domain--tutorials_2450#registering-a-new-host). At this stage, the DNS of the new domain must not yet be pointed to VTEX.  
2. In the VTEX Admin, check the Checkout settings in **Store Settings > Storefront > Checkout**, as described in the [Configure template in SmartCheckout](/en/docs/tutorials/configure-template-in-smartcheckout-update) article.  
   This step is essential for the Checkout to keep working after the change.  
   You must check if the sites configured are associated with the account listed in **Account Settings > Accounts**. See the [Account management](/en/docs/tutorials/account-management) article for more details.  
3. If your store uses [VTEX IO - Store Framework](https://developers.vtex.com/docs/guides/storefront-implementation) or [FastStore](https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore), contact [VTEX Support](https://supporticket.vtex.com/support) and request internal pointing, informing them of the new domain. Learn more about [internal pointing](/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#requesting-io-pointing).  
   Once the ticket has been opened, the support team has up to three business days to analyze the settings and complete the pointing process.  
4. Point the DNS to the VTEX CDN. To do this, follow the instructions in the [Go-live](/en/docs/tracks/go-live) guide.

## Deleting the previous domain

After the transition period, we recommend deactivating the old domain to ensure all customers use the new address and avoid confusion.

You can keep both domains (the old and the new) running simultaneously during the transition period, but be careful to avoid problems such as:

* Confusing customers about which is the official domain can negatively affect trust and sales.
* Negatively impacting SEO, as search engines may interpret domains as competing.

After confirming the new host's DNS propagation and internal pointing, delete the old hosts and keep only the new one:

1. In the top bar of the VTEX Admin, click your profile avatar, indicated by the initial letter of your email address.  
2. Click the **Account settings** button.  
3. Click **Account**.  
4. Click the **Stores** tab.  
5. In the row of the store where you want to delete the host, click the actions button ⁝ and then click `Edit`.  
6. In the row of the old host, click the actions button ⁝ and then click `Delete`.  

## Redirecting the previous domain

To ensure that all accesses to the previous domain are directed to the new domain, follow the instructions below:

* Set up an HTTP 302 redirect, instructing browsers to forward requests to the new domain.  
* We recommend using tools such as [redirhub.com](https://www.redirhub.com/) and [redirect.center](https://redirect.center) to create the redirection.  
* Avoid using CNAME for redirection in the DNS dashboard, as this setting doesn't guarantee proper redirection.

> ⚠️ The first few visits to the new domain are often slower than expected due to the initial cache creation. This impact is temporary and normalizes over time.
