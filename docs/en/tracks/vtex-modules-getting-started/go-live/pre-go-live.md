---
title: 'Pre-go-live'
id: 7sM5IMx02zaHvAFTm0OxiJ
status: PUBLISHED
createdAt: 2022-12-09T20:00:23.023Z
updatedAt: 2023-05-25T17:29:40.880Z
publishedAt: 2023-05-25T17:29:40.880Z
firstPublishedAt: 2022-12-09T22:07:50.195Z
contentType: trackArticle
productTeam: Reliability
slugEN: pre-go-live
locale: en
trackId: 4Ns5FxIiksmjsdX2yOTduM
trackSlugEN: go-live
order: 3
---

This stage initiates the go-live as these steps need to be carefully scheduled based on the expected go-live date.

## Registering the domain on VTEX

To connect the domain to the store, you must [register the domain in Account Management](/en/tutorial/configurando-dominios-no-license-manager).

> ⚠️ After registering your domain, you have seven days to complete the go-live. Otherwise, you must go back to the registration and save it again.

## Requesting IO pointing

If your storefront is powered by [CMS IO](/en/docs/tracks/cms-vtex-io), please submit a ticket to [VTEX Support](https://supporticket.vtex.com/support) requesting internal DNS pointing to CMS IO and provide the URL you want to be pointed. This process can take up to 3 business days.

After you receive the internal pointing confirmation, you must do the [common DNS pointing](/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#setting-up-dns-pointing) within 5 days. Otherwise the internal pointing will be deleted and you will need to redo the request.

> ℹ️ Learn more at [Go live with Store Framework](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-go-live) or [Migration from legacy CMS to Store Framework](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-migrating-storefront-from-legacy-to-io).

## Requesting special pointing

If your store access is limited by a [trade policy](/en/docs/tutorials/creating-a-trade-policy) with a conditional rule and your storefront was built with the [Legacy CMS Portal](/en/docs/tracks/legacy-cms-portal), you will need to request a special internal pointing.

An example is [B2B stores](/en/docs/tutorials/b2b-overview), which [restrict access](/en/docs/tutorials/setting-up-b2b-on-vtex) to pre-approved companies.

To request a special pointing, open a ticket with [VTEX support](https://supporticket.vtex.com/support), indicating which trade policy and conditional rule are configured. This process can take up to 3 business days.

After receiving the internal pointing confirmation, you must set up the [regular DNS pointing](/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#setting-up-dns-pointing) within five days. Otherwise, the special DNS pointing will be deleted, and you will need to redo this request.

