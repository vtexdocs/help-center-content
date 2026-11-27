---
title: 'Why is it not possible to integrate a VTEX marketplace with other marketplaces?'
excerpt: "A VTEX marketplace cannot sell on another marketplace. Business rules and missing seller price ownership block this kind of chain."
id: frequentlyAskedQuestions_4801
status: PUBLISHED
createdAt: 2017-04-27T22:23:24.680Z
updatedAt: 2019-12-31T14:24:50.344Z
publishedAt: 2019-12-31T14:24:50.344Z
firstPublishedAt: 2017-04-27T23:02:44.630Z
contentType: frequentlyAskedQuestion
productTeam: Marketplace
author: authors_35
slugEN: why-is-it-not-possible-to-integrate-vtex-marketplace-to-other-marketplaces
locale: en
legacySlug: why-is-it-not-possible-to-integrate-vtex-marketplace-to-other-marketplaces
---

A VTEX store that acts as a marketplace cannot sell on another marketplace. The main reasons are:

- **Business rule:** Selling on a second marketplace would mean offering third-party products without the seller's authorization.
- **Prices:** The marketplace catalog does not own the seller's prices. Even if a price layer were created, it would need constant updates to stay in sync with every change made by the seller.
- **Payments:** A VTEX marketplace can process payments with its own methods, the seller's methods, or a mix of both. An external marketplace cannot go two layers deep to request that information, so it could not capture the payment conditions set by the seller.

