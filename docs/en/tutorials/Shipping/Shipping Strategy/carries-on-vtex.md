---
title: '​​Carriers on VTEX'
id: 7u9duMD5UQa2QQwukAWMcE
status: PUBLISHED
createdAt: 2019-01-24T20:45:39.775Z
updatedAt: 2023-07-31T22:14:54.618Z
publishedAt: 2023-07-31T22:14:54.618Z
firstPublishedAt: 2019-01-24T22:14:26.579Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: carries-on-vtex
locale: en
legacySlug: what-is-a-carrier
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Carriers are companies that deliver cargo and packages. In the context of ecommerce, carriers deliver orders to customers. Each carrier has its own operating profile, and retailers must take this into account when configuring their delivery logistics.

The retailer registers carriers on VTEX according to their shipping conditions: types of delivery, deadlines, prices, area of operation, accepted dimensions, types of products, and scheduled delivery. Once the shipping conditions are configured, the platform selects the best delivery options for the customer.

On VTEX, carriers are registered through the creation of[ shipping policies](/pt/tutorial/politica-de-envio--tutorials_140). There are two ways to do this:

* In the VTEX Admin: using the[ Shipping policies](/pt/tutorial/politica-de-envio--tutorials_140) section of the[ Shipping strategy](/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) page.
* Via API: using the[ Shipping Policies](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) API.

    In both cases, the settings configured in the[ shipping policy](/pt/tutorial/politica-de-envio--tutorials_140) are used. These settings are based on the contracts between your store and carriers, service providers, or any other type of contract for shipping services that your store offers to customers.

There are cases where it is necessary to add more than one shipping policy for the same carrier, such as when:

* The carrier offers different types of delivery to a location.
* The carrier offers scheduled delivery and unscheduled delivery services.
* The rate varies according to the type of product.

### Related articles
- [Shipping strategy](/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3)
- [Shipping policy](/en/tutorial/shipping-policy--tutorials_140)
