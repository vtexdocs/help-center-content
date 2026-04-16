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
legacySlug: o-que-preciso-fazer-para-mudar-o-dominio-da-minha-loja
locale: en
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

Changing your store [domain](/en/docs/tutorials/configure-the-store-domain) after go-live requires careful attention to minimize SEO issues and ensure a seamless transition without affecting the customer experience.

Learn more about the complete process for changing your domain on VTEX in the following sections:

1. [Prerequisites](#prerequisites)
2. [Configuring the new domain](#configuring-the-new-domain)
3. [Deleting the old domain](#deleting-the-old-domain)
4. [Redirecting the old domain](#redirecting-the-old-domain)

## Prerequisites

Before you begin, make sure that:

- The new domain is registered and accessible.
- You have access to the domain DNS provider.

## Configuring the new domain

Follow the steps below to change your domain:

1. Create the new host in the VTEX Admin by following the instructions in [Registering a new host](/docs/tutorials/configuring-the-store-domain#registering-a-new-host). At this stage, the DNS of the new domain must not yet be pointed to VTEX.

2. In the VTEX Admin, check the Checkout settings in **Store Settings > Storefront > Checkout**, as described in [Configure template in SmartCheckout](/docs/tutorials/configure-template-in-smartcheckout-update).

   This step is crucial to ensure Checkout keeps working after the change.

   You need to check if the configured sites are related to the account added in **Account settings > Accounts**. See [Account management](/docs/tutorials/account-management) for more details.

3. If your store uses [VTEX IO - Store Framework](https://developers.vtex.com/docs/guides/storefront-implementation) or [FastStore](https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore), contact [VTEX Support](https://supporticket.vtex.com/support) and request the internal pointing, providing the desired new domain. Learn more about [internal pointing](/tracks/pre-go-live#requesting-io-pointing).

   Once the ticket is opened, the support team has up to three business days to review the settings and complete the pointing.

4. Point the DNS to the VTEX CDN. To do this, follow the instructions in the [Go-live your store](/docs/tracks/go-live-process) guide.

## Deleting the previous domain

After the transition period, we recommend deactivating the old domain to ensure all customers use the new address and to avoid confusion.

You can keep both domains (old and new) running simultaneously during the transition period, but we recommend avoiding the following issues:

- Confusing customers about the official domain, which can negatively impact trust and sales.
- Negatively impacting SEO, as search engines may interpret them as competing domains.

After confirming the new host's DNS propagation and internal pointing, delete the old hosts and keep only the new one:

1. In the top bar of the VTEX Admin, click your profile avatar indicated by the initial of your email.
2. Click the **Account settings** button.
3. Click **Account**.
4. Click the **Stores** tab.
5. In the row of the store where you want to delete the host, click the actions button ⁝ and then click `Edit`.
6. In the row of the old host, click the actions button ⁝ and then click `Delete`.

## Redirecting the previous domain

To ensure that all access to the previous domain is directed to the new domain, follow the instructions below:

- Set up an HTTP 301 redirect that instructs browsers to forward requests to the new domain.
- We recommend using tools such as [Redirect-301](https://www.redirect-301.com/pt/) to create the redirect.
- Avoid using CNAME for redirects in the DNS dashboard. That setting doesn't guarantee proper redirection.

> ⚠️ The first traffic to the new domain is often slower than expected due to the initial cache creation. This effect is temporary and normalizes over time.
