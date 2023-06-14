---
title: "New API routes for automatic approval of Received SKUs"
id: 5hpcWmKE2CnTYtuDXriUzR
status: PUBLISHED
createdAt: 2020-12-18T15:52:36.273Z
updatedAt: 2020-12-18T22:15:29.469Z
publishedAt: 2020-12-18T22:15:29.469Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: new-api-routes-for-automatic-approval-of-received-skus
legacySlug: new-api-routes-for-automatic-approval-of-received-skus
announcementImageID: ""
announcementSynopsisEN: Marketplace: new API routes for automatic approval of received SKUs
---

The Received SKUs module is where marketplaces evaluate suggestions sent by sellers, in order to approve and incorporate them into their catalog or reject them. We have included new routes in our Received SKUs API, so that marketplace operators can automatically add products in a more agile way.

## More possibilities to automatically approve SKUs by API

There are different ways to [approve received SKUs](https://help.vtex.com/en/tutorial/manual-sku-cataloging--tutorials_396). In addition to the endpoints that [enable and disable](https://help.vtex.com/announcements/marketplace-improvements-on-received-skus--5AY73ocF0evsh3yzY6AMX6) the automatic approval of SKUs in your marketplace, we have added new endpoints to our API to configure approval rules. The configurations can be applied to specific sellers or to the entire marketplace account. The API allows you to configure the following fields:

- **Autoapprove:** configure rules for the automatic approval of SKUs.
- **Matcher:** add a Matcher for your marketplace. It can be VTEX’s or an external matcher.
- **Matcher Score:** set a specific score for SKU approval and rejection of received SKUs.
- **Mapping:** configure the mapping of product specifications to make approval more accurate.

.
## What do I need to do?

For now, these features are only available through REST API calls for VTEX marketplaces. If you want to implement the new automatic approval configurations in your store, check out our documentation on the [Developer Portal](https://developers.vtex.com/vtex-developer-docs/changelog/new-marketplace-endpoints-available).

