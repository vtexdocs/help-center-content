---
title: 'What are utm_source, utm_campaign, and utm_medium'
id: 2wTz7QJ8KUG6skGAoAQuii
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.092Z
updatedAt: 2022-11-28T19:10:34.068Z
publishedAt: 2022-11-28T19:10:34.068Z
firstPublishedAt: 2019-01-24T22:11:24.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: what-are-utm-source-utm-campaign-and-utm-medium
legacySlug: what-are-utm-source-utm-campaign-and-utm-medium
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

Urchin Tracking Modules (UTMs) are URL parameters commonly used in marketing contexts to track the traffic that comes to the pages of the site.

You can, for example, define that whenever a user comes to your store from a click on a Facebook ad, the URL will be mounted with the parameter `utm_source=fb`.

Or you can define that, for that same UTM, certain benefits will be applied. That is, whenever a customer comes from Facebook, a certain benefit will be applied to the order made by them.

In a nutshell, the platform allows you to take certain actions according to the origin of the traffic to the store.

<div class="alert alert-info">
On the <strong>Orders Management</strong> screen, only utm_source is <a href="https://help.vtex.com/en/tutorial/filtering-orders-on-the-oms">available for filter</a>.
</div>

### Types of UTM

Conceptually, VTEX works with three types of UTM:
- __utm_source__: The source of the traffic, that is, from which site, advertiser, or publication the user came from.
- __utm_medium__: The advertising or marketing media used to reach your site (examples: banner, cpc, newsletter).
- __utm_campaign__: The name of the campaign that defines a particular marketing context (examples: Christmas, launch, promo01).

But you can use these UTMs in whatever way meets your business rules best.

Therefore, in practice, what matters is defining the correct action for the values of these parameters.

<div class="alert alert-danger">
Notice: <strong>special characters</strong> should not be used in UTMs. These variables on function properly when <strong> alphanumerical, hiphen and underscore </strong> characters are used.
</div>

For more information about issues with adding UTMs to cart, go to [Why are the UTMs not being applied to the cart?](https://developers.vtex.com/vtex-rest-api/docs/check-marketing-utms-used-at-checkout#why-are-the-utms-not-being-applied-to-the-cart).

### Related articles

- [What are the internal UTMs utmi_cp, utmi_pc and utmi_p](/en/faq/what-are-the-internal-utms)
