---
title: 'Updating prices in marketplaces'
id: tutorials_384
status: PUBLISHED
createdAt: 2017-04-27T22:07:41.136Z
updatedAt: 2025-02-19T16:56:02.391Z
publishedAt: 2025-02-19T16:56:02.391Z
firstPublishedAt: 2017-04-27T23:03:22.797Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 56yU9Wz6mLwmzo82TjgAHy
slugEN: updating-prices-in-marketplaces
legacySlug: updating-prices-for-marketplace
locale: en
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

Marketplace price updates depend on two factors:

- Editing product prices in the [price table](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8) linked to the trade policy used by the marketplace integration.
- [Product indexing](https://help.vtex.com/en/tutorial/understanding-how-indexation-works--tutorials_256) after new prices are added. 
- For a scheduled fixed price to be applied in the marketplace, a price change must be made in the corresponding price list. This change acts as a trigger to notify the marketplace of the new price.

<div class="alert alert-warning">
  <p>Only <a href="https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3g39iXkQza4AW7C7L814mj">fixed prices</a> are used by our native marketplace integrations. Other scenarios seen in our <a href="https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx">price system architecture</a> are available only in VTEX marketplaces.</p>
</div>
