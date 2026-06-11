---
title: 'New events available in Audit'
createdAt: 2026-06-10T00:00:00.000Z
updatedAt: 2026-06-10T00:00:00.000Z
contentType: updates
productTeam: Storage
slugEN: 2026-06-10-new-events-available-in-audit
locale: en
announcementSynopsisEN: 'We''ve expanded the Audit event list with new records for the VTEX ID, Master Data, Orders, and Gift Cards applications, providing greater visibility into sensitive operations in your store.'
tags:
  - New
  - Audit
---

We've expanded the list of events recorded by [Audit](https://help.vtex.com/docs/tutorials/audit), a VTEX Admin module that stores the history of actions performed in different applications. The new features cover the **VTEX ID**, **Master Data**, **Orders**, and **Gift Cards** applications.

## What has changed?

The list of [events available in Audit](https://help.vtex.com/docs/tutorials/events-available-in-audit) now includes the following records:

### VTEX ID

| Actions | Event description | Event details |
|---|---|---|
| UserLogin | User logged in to the VTEX Admin. | User ID. |
| UserLogout | User logged out of the VTEX Admin. | User ID. |

### Master Data

| Actions | Event description | Event details |
|---|---|---|
| ReadPersonalInformation | Read personal information. Applicable only to interactions with the CL and AD entities in the CRM interface. | Document ID. |
| CreatePersonalInformation | Created personal information. Applicable only to interactions with the CL and AD entities in the CRM interface. | Document ID. |
| UpdatePersonalInformation | Updated personal information. Applicable only to interactions with the CL and AD entities in the CRM interface. | Document ID. |
| DeletePersonalInformation | Deleted personal information. | Document ID. |
| SearchPersonalInformation | Searched personal information. Applicable only to interactions with the CL and AD entities in the CRM interface. | Search details. |

### Orders

| Actions | Event description | Event details |
|---|---|---|
| GetUnmaskedPersonalInformation | Read unmasked personal information in an order. | Order ID. |
| UpdatePersonalInformation | Updated personal information in an order. | Order ID. |

### Gift card

| Actions | Event description | Event details |
|---|---|---|
| LIST_GIFT_CARD_TRANSACTIONS | Viewed gift card transactions. | Gift card ID. |
| VIEW_GIFT_CARD_CONDITIONS | Viewed gift card conditions. | Gift card ID. |
| CREATE_GIFT_CARD_CONDITIONS | Created gift card conditions. | Gift card ID. |
| EDIT_GIFT_CARD_CONDITIONS | Edited gift card conditions. | Gift card ID. |
| EDIT_GIFT_CARD_CONFIGURATION | Edited gift card setting. | Gift card ID. |
| CREATE_GIFT_CARD_CANCELLATION | Gift card cancellation record. | Gift card ID. |
| CREATE_GIFT_CARD_SETTLEMENT | Gift card settlement record. | Gift card ID. |
| INSERT_GIFT_CARD_CREDITS | Added credit to gift card. | Gift card ID. |

> ℹ️ Check the full list in [Events available in Audit](https://help.vtex.com/docs/tutorials/events-available-in-audit).

## What needs to be done?

No action is required. The new events are already available for all VTEX accounts and can be used as filters in [Audit](https://help.vtex.com/docs/tutorials/audit) using the action names listed above.
