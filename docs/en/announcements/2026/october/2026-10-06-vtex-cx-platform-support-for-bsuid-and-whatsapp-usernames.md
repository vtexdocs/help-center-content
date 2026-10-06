---
title: 'VTEX CX Platform: support for BSUID and WhatsApp usernames'
createdAt: 2026-10-06T12:00:00.000Z
updatedAt: 2026-10-06T12:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: vtex-cx-platform-support-for-bsuid-and-whatsapp-usernames
locale: en
announcementSynopsisEN: 'VTEX CX Platform now identifies WhatsApp contacts by BSUID, keeping conversations and automations active even without a phone number.'
tags:
  - New feature
  - Admin
  - VTEX CX Platform
---

VTEX CX Platform now also identifies WhatsApp contacts by their Business Scoped User ID (BSUID), WhatsApp's business-scoped user identifier. As a result, your conversations and automations keep working even when the contact hasn't shared a phone number.

> ⚠️ Interaction by BSUID alone is being rolled out gradually by Meta. Until then, this behavior has been validated in simulated scenarios, and no change is expected in the current WhatsApp channel experience.

## What has changed?

Previously, the phone number was the only identifier for a WhatsApp contact in VTEX CX Platform. If a contact didn't share their number, you couldn't receive their messages or send them templates.

Now, the platform automatically resolves the identifier available in each conversation:

- **If the contact has a phone number:** everything works as before.
- **If the contact has only a BSUID:** you keep receiving their messages and can send templates normally, with no additional configuration.

The contact's BSUID appears on the contact details page, alongside the other profile information. You can also:

- **Request the phone number:** agents can invite the contact to voluntarily share their number through a native WhatsApp component. Sharing is optional and only happens if the contact agrees.
- **Segment contacts without a phone number:** when creating a group in **Contacts**, select the **WhatsApp contacts without phone** option to generate a smart group with all contacts that have a BSUID and no phone number. This lets you track that audience specifically.

## Why did we make this change?

WhatsApp is evolving its privacy model, and users will be able to interact with businesses using a username, without exposing their phone number. This means the number is no longer a guaranteed identifier. To keep your communication running when this model takes effect, we developed BSUID support in VTEX CX Platform. The key benefits are:

- **Uninterrupted communication:** incoming conversations and template sends keep working for any contact, regardless of the identifier available.
- **Early readiness:** your store is already prepared for WhatsApp's identity changes, without depending on a future platform update.
- **Compliant profile enrichment:** you can ask the contact for their phone number through an official WhatsApp component, respecting the customer's choice.
- **Preserved automations:** BSUID support is integrated into the same identification layer used by native WhatsApp automations, such as abandoned cart, Pix recovery, and order status.

## What needs to be done?

No action is required. Contact identification is handled automatically by VTEX CX Platform, with no need for you to choose between phone number and BSUID.

If you use external systems that rely exclusively on the phone number as the contact identifier, such as CRMs, custom integrations, BI pipelines, or segmentation rules, we recommend planning to adapt those systems to also accept the BSUID.

To learn more about the WhatsApp channel, see [WhatsApp: Integration with VTEX CX Platform](https://help.vtex.com/en/docs/tutorials/whatsapp-integracao-com-o-vtex-cx-platform).