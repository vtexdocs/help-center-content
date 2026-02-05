---
title: 'Installing Live Shopping'
id: 5r4DSCZCdQUErgJzLGtiMD
status: PUBLISHED
createdAt: 2025-07-23T17:40:02.306Z
updatedAt: 2025-10-24T13:10:34.190Z
publishedAt: 2025-10-24T13:10:34.190Z
firstPublishedAt: 2025-07-28T15:07:26.166Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: installing-live-shopping
locale: en
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-getting-started
order: 2
---

The **Live Shopping** solution is compatible with the following frontend technologies:

* [Store Framework (VTEX IO)](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework)
* [Legacy CMS Portal](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj)
* [Headless CMS](/en/docs/tutorials/headless-cms-overview)
* [FastStore](https://developers.vtex.com/docs/guides/faststore/storefront-features-implementing-live-shopping-for-faststore)
* External stores

## Prerequisite

Except for external stores, all other frontend solutions must have [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference) installed.

## Getting the Live Shopping app

Unless you are an external store, you must follow the steps below:

1. Access [VTEX Live Shopping](https://apps.vtex.com/vtexventures-livestreaming/p) on VTEX App Store. You can also access it via the VTEX Admin through **Apps > App Store > VTEX Live Shopping**.
2. Click `Get app` to install the app. Log in to your VTEX account if necessary.
3. Click `Place order`.
4. Click `Go to install page`.
5. Click `Install`.
6. Agree to the Terms of Service by clicking `Install`.

## Installation steps for VTEX IO

Since **VTEX Live Shopping** impacts your storefront by displaying a component when the event begins, your technical team must implement it following the instructions provided in our [developer documentation](https://developers.vtex.com/docs/apps/vtexventures.livestreaming#for-vtex-io).

## Installation steps for FastStore

To integrate **Live Shopping** into a project using [FastStore](https://developers.vtex.com/docs/guides/faststore), see the guide [Implementing Live Shopping for FastStore](https://developers.vtex.com/docs/guides/faststore/storefront-features-implementing-live-shopping-for-faststore).

> ℹ️ This feature is available as a native solution in the latest version of FastStore. If your storefront uses [FastStore v1 or v2](https://developers.vtex.com/docs/guides/faststore/getting-started-faststore-versions-and-support-levels), see the guide [Implementing Live Shopping for FastStore previous versions](https://developers.vtex.com/docs/guides/faststore/storefront-features-implementing-live-shopping-for-faststore-previous-versions).
