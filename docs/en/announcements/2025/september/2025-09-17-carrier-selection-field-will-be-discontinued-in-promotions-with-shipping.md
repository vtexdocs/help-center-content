---
title: 'Carrier selection field will be discontinued in promotions with shipping method'
id: 2jA6SUpunQlVwHoru1OnCZ
status: PUBLISHED
createdAt: 2025-09-17T10:41:12.993Z
updatedAt: 2025-09-17T10:53:14.410Z
publishedAt: 2025-09-17T10:53:14.410Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-09-17-carrier-selection-field-will-be-discontinued-in-promotions-with-shipping
locale: en
legacySlug: carrier-selection-field-will-be-discontinued-in-promotions-with-shipping
announcementImageID: 'undefined'
announcementSynopsisEN: 'Carrier selection field disabled in promotions with shipping method since July 2025.'
---

To simplify the configuration of shipping methods, the VTEX development team has deprecated the `isSlaSelected` field.  Manual configuration of this field has been disabled to ensure predictable behavior.

## What has changed?
Previously, promotions based on shipping methods could be manually controlled by selecting or deselecting the carrier field. Now, the system automatically determines this behavior based on the configured benefit type. This change aims to standardize the field's behavior and prevent inconsistencies in the customer experience at checkout.

## What needs to be done?
As of July 23, 2025, the system automatically configures this field according to the type of promotion benefit.

No action is needed for active promotions. Existing promotions that had this field configured will retain their behavior until edited. Once saved again, the system will take over control of the value. Note that it's no longer possible to create new promotions using this manual configuration.

