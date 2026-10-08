---
title: 'Why does the store return an error after I change the DNS?'
excerpt: "DNS pointing is not enough. Set the account status to production in Account management before the storefront can load."
id: frequentlyAskedQuestions_2248
status: PUBLISHED
createdAt: 2017-04-27T22:25:29.934Z
updatedAt: 2019-12-31T14:24:02.113Z
publishedAt: 2019-12-31T14:24:02.113Z
firstPublishedAt: 2017-04-27T23:02:37.167Z
contentType: frequentlyAskedQuestion
productTeam: Reliability
author: authors_3
slugEN: why-is-an-error-returned-on-access-to-the-store-after-changing-the-dns
locale: en
legacySlug: why-is-an-error-returned-on-access-to-the-store-after-changing-the-dns
---

You [pointed the DNS to VTEX](/en/docs/tutorials/how-dns-configuration-works-on-vtex) and configured the store URLs, but the storefront still does not load. The cause is often in **Account**.

For the store to go live, the account status must be set to production in [Account management](/en/docs/tutorials/account-management).

If you open the store and see an error instead of the storefront, confirm that the account status is **in production**. See the [Go-live](/en/tracks/go-live--4Ns5FxIiksmjsdX2yOTduM) track for the full process.

After you set the status to production, you can access the store.
