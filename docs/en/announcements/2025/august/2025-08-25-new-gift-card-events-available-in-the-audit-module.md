---
title: 'New gift card events available in the Audit module'
id: 5jHm2DriEUU70ZOUT28bIj
status: PUBLISHED
createdAt: 2025-08-25T17:59:16.648Z
updatedAt: 2025-08-25T18:39:13.093Z
publishedAt: 2025-08-25T18:39:13.093Z
contentType: updates
productTeam: Master Data
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2025-08-25-new-gift-card-events-available-in-the-audit-module
locale: en
legacySlug: new-gift-card-events-available-in-the-audit-module
announcementImageID: 'undefined'
announcementSynopsisEN: 'New gift card events added to Audit records.'
---

[Audit](/en/docs/tutorials/audit) is a module that records events that happen in your VTEX store, enabling future auditing. VTEX has improved Audit by adding three new events related to gift card operations.

## What has changed?

We’ve added the following gift card events to the **Catalog (API)** and **Gift Card** applications:

### Catalog (API)
| Action | Description | Event details |
|---|---|---|
| GiftCard Create | Creates a [native gift card](/en/docs/tutorials/gift-card) (GiftCard System). | ID of the gift card created and the user who performed the action. |
| GiftCard List All Paged | Internal flow for displaying available gift cards. | ID of the gift cards returned by the API and the user who searched. |

### Gift card
| Action | Description | Event details |
|---|---|---|
| LIST_CARDS_FROM_API | View the [list](https://developers.vtex.com/docs/api-reference/giftcard-api#post-/giftcards/_search) of native gift cards (GiftCard System). | ID of the gift cards available for a shopping cart. |

## What needs to be done?

No action is required. The [Audit](/en/docs/tutorials/audit) update is already active for all accounts.

Learn more in [Events available in Audit](/en/docs/tutorials/events-available-in-audit).
