---
title: 'New feature: Seller opt-in for promotions'
id: 1qatANjT2sZnpaYqSdHzVl
status: PUBLISHED
createdAt: 2025-09-22T11:32:44.398Z
updatedAt: 2025-09-22T19:38:42.292Z
publishedAt: 2025-09-22T19:38:42.292Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-09-22-new-feature-seller-opt-in-for-promotions
locale: en
legacySlug: new-feature-seller-opt-in-for-promotions
announcementImageID: 'undefined'
announcementSynopsisEN: 'New feature for managing seller opt-in and opt-out of promotions via API.'
---

VTEX launched a new seller opt-in feature for promotions, allowing merchants to configure promotions in their marketplaces, so sellers can choose whether to participate. With this change, sellers can now define their level of participation, giving them more control over promotional campaigns.

## Why did we make this change?
Previously, only merchants could associate sellers with promotions in the VTEX Admin, and sellers had no control over their participation. Now, with the seller opt-in for promotions feature, merchants can create promotions, and sellers have autonomy to join or leave promotions via API, using the Seller opt-in or opt-out endpoint.

See what changes with the new feature:

- Adding or removing sellers from promotions must be done exclusively via API, using the [Seller opt-in or opt-out endpoint](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration/-promotionId-/seller-opt).
- You can still create and view promotions in the Admin, but the list of participating sellers can only be edited via API.
- If invalid seller IDs are submitted, the promotion will be created but will have no effect, as it will be associated with non-existent sellers.

## What needs to be done?
No action is required. The feature will be automatically available in all VTEX accounts from September 22, 2025.

For more information, see [Seller opt-in](https://developers.vtex.com/docs/guides/seller-opt-in-promotions).

