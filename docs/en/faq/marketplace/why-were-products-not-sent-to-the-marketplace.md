---
title: 'Why were products not sent to the marketplace?'
excerpt: "Sending products depends on Integrations plus marketplace cataloging. Check Bridge status and marketplace configuration before retrying."
id: frequentlyAskedQuestions_727
status: PUBLISHED
createdAt: 2017-04-27T22:27:52.318Z
updatedAt: 2019-12-31T14:24:53.255Z
publishedAt: 2019-12-31T14:24:53.255Z
firstPublishedAt: 2017-04-27T23:02:34.481Z
contentType: frequentlyAskedQuestion
productTeam: Marketplace
author: authors_3
slugEN: why-were-products-not-sent-to-the-marketplace
locale: en
legacySlug: why-were-products-not-sent-to-the-marketplace
---

Products reach the marketplace through two processes: the integration itself, which you can monitor in Integrations, and cataloging, which the marketplace owns.

## Check integrations

Start in Integrations. [Check the integration status of each product](/en/docs/tutorials/checking-integrations-in-bridge).

If a product is not registered, the marketplace setup may be incomplete. Review the [marketplace sales channel](/en/docs/tutorials/configuring-a-marketplace-trade-policy).

Common issues in Integrations include:

- Inactive product.
- SKU out of stock for the marketplace sales channel.
- Invalid SKU price.
- SKU without logistics for the marketplace sales channel.
- Product without the reseller flag active for the marketplace sales channel.
- SKU not in the collection sent to the marketplace.

Fix the item, wait for indexing, and monitor the product in Integrations.

## Understand the cataloging process

Cataloging maps integrated products to the marketplace's categories and brands. Only the marketplace runs this step. VTEX cannot change it.

The process is usually manual and varies by marketplace. To confirm whether your product is being cataloged, contact the marketplace.

## How to solve it

For these issues, [reprocess the product in Integrations](/en/docs/tutorials/checking-integrations-in-bridge).
