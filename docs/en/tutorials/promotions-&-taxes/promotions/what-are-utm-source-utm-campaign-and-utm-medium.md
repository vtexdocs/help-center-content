---
title: 'Campaign tracking with UTM parameters'
id: 2wTz7QJ8KUG6skGAoAQuii
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.092Z
updatedAt: 2025-05-26T16:32:16.492Z
publishedAt: 2025-05-26T16:32:16.492Z
firstPublishedAt: 2019-01-24T22:11:24.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: what-are-utm-source-utm-campaign-and-utm-medium
legacySlug: what-are-utm-source-utm-campaign-and-utm-medium
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

UTMs (Urchin Tracking Modules) are URL parameters commonly used in marketing to track website traffic.

> ℹ️ UTM parameters aren't created or managed directly on the VTEX platform. They need to be added manually to the URLs of marketing campaigns. You should use external tools, like [Google Analytics](https://analytics.google.com/), to analyze the traffic data obtained from parameters.

For example, when you click on a Facebook ad, you'll be directed to a URL containing the parameter `utm_source=fb`.

You can also link specific promotions to certain UTM values, and whenever a customer comes to the website using a URL that has UTM parameters configured, a promotion can be applied to their purchase and the marketplace can identify it.

### Types of UTM
You can use three types of UTM for traffic tracking:

- **utm_source:** Identifies the traffic source, such as a website, advertiser, or publication.
- **utm_medium:** Specifies the advertising medium, such as banner, CPC (cost per click), or newsletter.
- **utm_campaign:** Defines the campaign name, indicating the marketing context, such as Christmas, release, or promotion.

> ℹ️ On the Order Management page, only the `utm_source` parameter is [available for filtering](https://help.vtex.com/en/tutorial/como-filtrar-pedidos).

> ❗ Don't use special characters in UTM values (example:`utm_source=#fb`). Only alphanumeric characters, hyphens, and underscores are supported.

For more information about issues related to applying UTMs to carts, see [Why are the UTMs not being applied to the cart?](https://developers.vtex.com/vtex-rest-api/docs/check-marketing-utms-used-at-checkout#why-are-the-utms-not-being-applied-to-the-cart).

### Related articles
- [What are the internal UTMs utmi_cp, utmi_pc and utmi_p](https://help.vtex.com/en/faq/o-que-sao-as-utms-internas-utmi_cp-utmi_pc-e-utmi_p)
