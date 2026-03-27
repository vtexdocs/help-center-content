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
slugEN: changing-the-store-domain
legacySlug: o-que-preciso-fazer-para-mudar-o-dominio-da-minha-loja
locale: en
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

Changing the [domain](docs/tutorials/change-the-store-domain) of a store after go-live requires careful attention to minimize SEO issues, avoid downtime, and ensure a seamless transition without impacting customer experience.

> ⚠️ Do not remove or modify the existing domain until the migration is fully complete and validated. This ensures the store remains accessible during the transition and avoids downtime.

## Prerequisites

Before you begin, make sure that:

- The new domain is registered and accessible.
- You have access to the domain DNS provider.
- The old domain stays active throughout the entire migration process.

## Overview

To complete the domain migration, you need to follow these steps:

1. [Add the new domain](#1-add-the-new-domain) without removing the previous one, keeping the old domain active in License Manager.
2. [Request internal migration from VTEX](#2-request-internal-migration-from-vtex), ensuring all DNS records and internal settings are properly propagated.
3. [Update URLs and validate the new domain](#3-update-urls-and-validate-the-new-domain) only after confirming all DNS changes have been applied.
4. [Remove the old domain](#4-remove-the-old-domain) once the new domain is fully functional and validated.
5. [Configure redirect](#5-configure-redirect) from the old domain to the new one.

## 1) Add the new domain

Add the new domain in the License Manager without removing the previous domain:

1. Create the new host in the VTEX Admin by following the instructions in [Registering a new host](/docs/tutorials/configuring-the-store-domain#registering-a-new-host). At this stage, the DNS of the new domain must not yet be pointed to VTEX.

2. In the VTEX Admin, check the Checkout settings in **Store Settings > Storefront > Checkout**, as described in [Configure template in SmartCheckout](/docs/tutorials/configure-template-in-smartcheckout-update).

   This step is crucial to ensure Checkout keeps working after the change.

   You need to check if the configured sites are related to the account added in **Account settings > Accounts**. See [Account management](/docs/tutorials/account-management) for more details.

> ⚠️ Do not delete the old domain and do not change the DNS yet.

## 2. Request internal migration from VTEX

If your store uses [VTEX IO - Store Framework](https://developers.vtex.com/docs/guides/storefront-implementation) or [FastStore](https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore), contact [VTEX Support](https://supporticket.vtex.com/support) and request the internal domain migration, providing the desired new domain.

VTEX will perform the internal migration, ensuring all DNS records and internal settings are correctly propagated.

Learn more about [internal pointing](/tracks/pre-go-live#requesting-io-pointing).

Once the ticket is opened, the support team has up to three business days to review the settings and complete the pointing.

After internal pointing is confirmed, complete the DNS pointing to the VTEX CDN. To do this, follow the instructions in the [Go-live your store](/docs/tracks/go-live-process) guide.

## 3. Update URLs and validate the new domain

Only after confirming all DNS changes have been correctly applied, validate the following:

1. The DNS of the new domain is fully propagated.
2. Full store navigation on the new domain is working as expected.
3. The URLs in the codebase are updated (when applicable).
4. External integrations (gateways, anti-fraud solution, webhooks, APIs, etc.) are working as expected.

> ⚠️ Only proceed to the next step after confirming the new domain is fully functional and stable.

## 4. Remove the old domain

After validating the new domain is fully functional, remove the old domain:

1. In the top bar of the VTEX Admin, click your profile avatar indicated by the initial of your email.
2. Click the **Account settings** button.
3. Click **Account**.
4. Click the **Stores** tab.
5. In the row of the store where you want to delete the host, click the actions menu ⁝ and then click `Edit`.
6. In the row of the old host, click the actions menu ⁝ and then click `Delete`.

You can keep both domains (old and new) running simultaneously during the transition period, but be careful to avoid problems such as:

- Confusing customers about the official domain, which can negatively impact trust and sales.
- Negatively impacting SEO, as search engines may interpret them as competing domains.

## 5. Configure redirect

To ensure that all access to the previous domain is directed to the new domain, follow the instructions below:

- Set up an HTTP 302 redirect that instructs browsers to forward requests to the new domain.
- We recommend using tools such as [redirect.center](https://redirect.center) or [direcionar.com.br](https://direcionar.com.br) to create the redirect.
- Avoid using CNAME for redirects in the DNS dashboard. That setting doesn't guarantee proper redirection.

> ⚠️ The first traffic to the new domain is often slower than expected due to the initial cache creation. This effect is temporary and normalizes over time.
