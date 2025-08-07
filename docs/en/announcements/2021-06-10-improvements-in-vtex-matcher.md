---
title: 'Improvements in VTEX matcher'
id: 13KA505i1EQT24u7CPIPrP
status: PUBLISHED
createdAt: 2021-06-10T12:17:25.857Z
updatedAt: 2021-07-19T13:01:43.550Z
publishedAt: 2021-07-19T13:01:43.550Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2021-06-10-improvements-in-vtex-matcher
locale: en
legacySlug: improvements-in-vtex-matcher
announcementImageID: ''
announcementSynopsisEN: "VTEX matcher has been redesigned to improve the cataloging of sellers' SKUs in the marketplace"
---

[VTEX Matcher](/en/tutorial/understanding-vtex-matcher-scoring--tutorials_424) is a tool available on marketplaces for analyzing products and SKUs submitted by sellers to speed up the [cataloging](/en/tutorial/sugerindo-e-aprovando-skus/) process. It analyzes items received and searches for matches in the marketplace catalog. If there is a match, it associates the item with an SKU or existing product. If there is no match, it creates a new product in the catalog.

The previous matcher system had some limitations when associating products. It included criteria that affected the optimization of the process. With the new configuration, the system now applies enhanced rules for SKU analysis and cataloging.

## What has changed?

The following improvements have been made in the matcher system: 

| Before                                                                                                                                                                                                         | Now                                                                                                                                                                                                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The matcher considered only the SKU name when searching for matches in the marketplace catalog.                                                                                                                | __More analysis criteria:__ VTEX Matcher now analyzes items in the marketplace catalog considering their name, EAN, and Ref ID. For associating an item with an SKU or existing product, there must be a match on at least two of these criteria.  |
| VTEX Matcher did not recognize special characters in the SKU name.                                                                                                                                              | __Special characters:__ VTEX Matcher now reads special characters in the SKU name to better identify them.                                                                                                                                         |
| VTEX Matcher discarded SKU specifications in text format, so they were not added to the associated product.                                                                                                     | __SKU specifications in text format:__ VTEX Matcher now converts SKU specifications from a text format into unstructured data, enabling them to become variations on the associated product.                                                       |
| SKUs of the same product sent simultaneously to the marketplace were analyzed individually. For this reason, VTEX Matcher created new products for each SKU rather than associating them with a single product. | __Handling concurrent SKUs:__ SKUs of the same product now follow a prioritization criterion. The SKU received first has priority in the analysis, which prevents the VTEX Matcher from creating separate products for each SKU.                       |
| Only SKUs received after the auto-approve setting was enabled were analyzed according to the auto-approve rule.                                                                                                | __Auto-approve:__ when the user enables the auto-approve option, all pending SKUs are analyzed.                                                                                                                                                   |

## Why did we make this change?
These improvements aim to generate more accurate matches, enhancing the process of associating sellers’ products with the marketplace catalog. The new rules applied to VTEX Matcher prevent it from creating new products incorrectly and bring more security and agility to the cataloging process. 

## What needs to be done?
No action is required. The upgrade is automatic for all VTEX marketplaces that use VTEX Matcher.

Learn more in our documentation on the [VTEX matcher](/en/tutorial/understanding-vtex-matcher-scoring--tutorials_424), [auto-approve setting](https://developers.vtex.com/vtex-rest-api/reference/sku-approval-settings#activate-autoapprove-for-account), and [cataloging received SKUs](/en/tutorial/sugerindo-e-aprovando-skus/).

