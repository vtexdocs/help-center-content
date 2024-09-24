---
title: 'Marketplace: improvements on Received SKUs'
id: 5AY73ocF0evsh3yzY6AMX6
status: PUBLISHED
createdAt: 2020-10-26T23:30:54.501Z
updatedAt: 2020-11-11T15:16:04.418Z
publishedAt: 2020-11-11T15:16:04.418Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: marketplace-improvements-on-received-skus
locale: en
legacySlug: marketplace-improvements-on-received-skus
announcementImageID: ''
announcementSynopsisEN: 'Block SKUs from being resent by sellers and also configure automatic approval for received SKUs'
---

The Received SKUs dashboard is where marketplaces evaluate suggestions sent by sellers. They can either approve and add the SKUs to their catalog or reject them. 

Now, when rejecting a received SKU, the marketplace blocks this SKU from being resent by the seller. We have also made new APIs available for marketplaces to create automatic and manual approval rules for received SKUs.

## Received SKUs: block the receipt of specific SKUs

Before, when the marketplace declined SKU suggestions, they were not blocked from being sent again. Marketplaces had to indicate to sellers the improper receipt of those SKUs because if they were later updated by the seller, they would return to the Received SKUs list, and the marketplace would have to reject them again.

Starting from October 28th, 2020, rejecting a received SKU will imply blocking its sending by sellers. This means that sellers won't be able to send their entire catalog at once whenever they send new or updated SKUs to the marketplace. 

No configuration is needed to activate this functionality - it will be installed automatically on the VTEX platform. To learn more about SKU blocking in the Received SKUs module, check out our article about [Manual SKU Cataloging](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396). 

It is worth noting that this action can be undone. It is possible to approve a blocked SKU through REST API if the marketplace wishes to receive it again as a suggestion from the seller. To learn more about SKU approval, access our API documentation on the Developer Portal.

![EN SKUs Recebidos Announcement](//images.ctfassets.net/alneenqid6w5/5UdF6jOSwSvqYQIng9w7mS/fab32d8d2bbf1b59bace4e2fb0d85ac5/EN_SKUs_Recebidos_Announcement.jpg)

## Configuring automatic SKU approval

We have also developed a new API to configure approval rules for received SKUs. 

Previously it was not possible to configure automatic SKU approval to streamline your marketplace workflow. We have developed seven different endpoints for you to manage SKU approval settings in the Received SKUs module. 

The REST API routes allow you to enable automatic SKU approval for specific sellers or the entire marketplace.

This functionality is only available through REST API. See our [Approval Settings API](https://developers.vtex.com/vtex-developer-docs/reference/sku-approval-settings) documentation to learn more. 

